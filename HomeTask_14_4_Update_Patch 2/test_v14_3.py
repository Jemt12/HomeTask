"""Version 14.3 isolated fee, demo and signed Stripe TEST checkout tests."""
import tempfile,os,json,hmac,hashlib,time,sys
from pathlib import Path
from fastapi.testclient import TestClient

is_stripe='stripe' in sys.argv
with tempfile.TemporaryDirectory() as t:
 os.environ['HOMETASK_DB']=str(Path(t)/'test.sqlite3')
 if is_stripe:
  os.environ['HOMETASK_STRIPE_TEST_SECRET']='sk_test_local_fake_no_network'
  os.environ['HOMETASK_CHECKOUT_RETURN_URL']='http://127.0.0.1:8000'
  os.environ['HOMETASK_STRIPE_WEBHOOK_SECRET']='whsec_example_testing_not_real'
 else:
  os.environ.pop('HOMETASK_STRIPE_TEST_SECRET',None)
  os.environ.pop('HOMETASK_STRIPE_WEBHOOK_SECRET',None)
 import server
 if is_stripe:
  server.stripe_test_request=lambda path,params,idem_key=None:{'id':'cs_test_verified_mock','url':'https://checkout.stripe.com/c/pay/cs_test_mock'}
 owner,worker,other=[TestClient(server.app) for _ in range(3)]
 def call(client,method,endpoint,data=None,expected=200,headers=None):
  r=client.request(method,'/api'+endpoint,json=data,headers=headers or {})
  assert r.status_code==expected,(method,endpoint,expected,r.status_code,r.text[:800])
  return r.json() if r.headers.get('content-type','').startswith('application/json') else r
 def join(client,name,role):
  return call(client,'POST','/register',{'name':name,'email':name.replace(' ','').lower()+'@example.com','password':'GoodStrongPassword!1','role':role})['user']['id']
 owner_id=join(owner,'Local Customer','customer');worker_id=join(worker,'Local Worker','worker');join(other,'Other Customer','customer')
 j=call(owner,'POST','/jobs',{'title':'Lawn trimming task','category':'Lawn & Yard','description':'Trim long overgrown grass and clean up clippings','location':'Rochester, NY','difficulty':'Easy','budget':100,'flexible_schedule':True})['job'];jid=j['id']
 call(worker,'POST',f'/jobs/{jid}/offers',{'price':100,'note':'Can do this quickly'})
 offerid=call(owner,'GET',f'/jobs/{jid}')['offers'][0]['id']
 b=call(owner,'GET',f'/payments/quote/{jid}/{offerid}')
 assert b['agreed_price_cents']==10000 and b['commission_cents']==1000 and b['worker_net_cents']==9000 and b['checkout_total_cents']==10500 and b['service_fee_cents']==500
 w=call(worker,'GET',f'/payments/quote/{jid}/{offerid}')
 assert w['checkout_total_cents'] is None and w['service_fee_cents'] is None and w['worker_net_cents']==9000
 call(other,'GET',f'/payments/quote/{jid}/{offerid}',expected=403)
 assert server.commission_breakdown(3)['commission_cents']==30
 if is_stripe:
  call(owner,'POST',f'/jobs/{jid}/accept/{offerid}',expected=409)
  session=call(owner,'POST',f'/payments/checkout/{jid}/{offerid}')
  assert session['mode']=='stripe_test'
  call(owner,'POST',f'/payments/checkout/{jid}/{offerid}',expected=409)
  # No hire or messaging permitted before webhook confirms paid.
  assert call(owner,'GET',f'/jobs/{jid}')['status']=='open'
  call(worker,'POST',f'/jobs/{jid}/messages/{owner_id}',{'body':'Can we arrange details?'},expected=409)
  call(owner,'POST',f'/jobs/{jid}/cancel',{'reason':'Plans changed'},expected=409)
  event={'id':'evt_test_checkout_ok','type':'checkout.session.completed','data':{'object':{'id':'cs_test_verified_mock','payment_status':'paid','currency':'usd','mode':'payment','amount_total':10500,'payment_intent':'pi_test_mock'}}}
  raw=json.dumps(event,separators=(',',':')).encode();ts=str(int(time.time()))
  signature=hmac.new(os.environ['HOMETASK_STRIPE_WEBHOOK_SECRET'].encode(),ts.encode()+b'.'+raw,hashlib.sha256).hexdigest()
  bad=owner.post('/api/payments/stripe-webhook',content=raw,headers={'Stripe-Signature':'t='+ts+',v1=bad'})
  assert bad.status_code==400,bad.text
  assert call(owner,'GET',f'/jobs/{jid}')['status']=='open'
  header={'Stripe-Signature':f't={ts},v1={signature}','Content-Type':'application/json'}
  ok=owner.post('/api/payments/stripe-webhook',content=raw,headers=header)
  assert ok.status_code==200,ok.text
  dup=owner.post('/api/payments/stripe-webhook',content=raw,headers=header)
  assert dup.status_code==200 and dup.json()['duplicate'] is True
  assert call(owner,'GET',f'/jobs/{jid}')['status']=='accepted'
  call(owner,'POST',f'/jobs/{jid}/cancel',{'reason':'Plans changed'},expected=409)
 else:
  call(owner,'POST',f'/payments/checkout/{jid}/{offerid}',expected=503)
  accepted=call(owner,'POST',f'/jobs/{jid}/accept/{offerid}')
  assert accepted['job']['payment_status']=='unfunded_demo'
 worker_rows=call(worker,'GET','/payments/overview')
 assert worker_rows['live_payments_enabled'] is False and worker_rows['marketplace_fee_bps']==1000
 tx=worker_rows['transactions'][0]
 assert tx['commission_cents']==1000 and tx['net_payout_cents']==9000 and 'checkout_total_cents' not in tx
 own_row=call(owner,'GET','/payments/overview')['transactions'][0]
 assert own_row['checkout_total_cents']==10500 and own_row['service_fee_cents']==500 and 'net_payout_cents' not in own_row
 call(other,'GET','/payments/overview')
 call(worker,'POST',f'/jobs/{jid}/work-finished',{'note':'Finished trimming.'})
 call(owner,'POST',f'/jobs/{jid}/complete')
 result=call(worker,'GET','/analytics/earnings?range=all&granularity=month')
 assert result['earned']==100 and result['net_earned']==90.0 and result['net_combined']==90.0,result
 assert result['net_series'][0]['earned']==90.0
 if is_stripe:assert call(worker,'GET','/payments/overview')['transactions'][0]['transfer_status']=='awaiting_connect_transfer'
 else: assert call(worker,'GET','/payments/overview')['transactions'][0]['transfer_status']=='not_started'
 server.init_v14_3();server.init_v14_3()
 print('PASS 14.3', 'Stripe TEST signed checkout' if is_stripe else 'unfunded demo and fee ledger')
