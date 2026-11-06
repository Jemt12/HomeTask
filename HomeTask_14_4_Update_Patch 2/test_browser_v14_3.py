"""14.3 payment UI smoke: customer checkout review and worker net fee presentation."""
import re,json,base64
from pathlib import Path
from playwright.sync_api import sync_playwright
root=Path(__file__).parent
html=(root/'index.html').read_text();html=re.sub(r'<link[^>]*>','',html);html=re.sub(r'<script[^>]*>.*?</script>','',html,flags=re.S)
html=html.replace('</head>','<style>'+(root/'styles.css').read_text()+'</style></head>')
code=(root/'app.js').read_text()
for f in ['logo-1-icon.png','logo-1-wordmark.png','logo-2-icon.png','logo-2-wordmark.png','verified-house.png']:
 data='data:image/png;base64,'+base64.b64encode((root/'brand'/f).read_bytes()).decode()
 html=re.sub(re.escape('/assets/'+f)+r'\?v=\d+',lambda _:data,html)
 code=re.sub(re.escape('/assets/'+f)+r'\?v=\d+',lambda _:data,code)
 html=html.replace('/assets/'+f,data);code=code.replace('/assets/'+f,data)
customer={'id':1,'name':'Test Customer','email':'customer@example.com','role':'customer','location':'Rochester, NY','skills':'','bio':'','is_admin':False,'avatar_data':'','banner_data':''}
worker={**customer,'id':2,'name':'Test Worker','email':'worker@example.com','role':'worker','skills':'Painting'}
job={'id':101,'title':'Paint kitchen walls','owner_id':1,'owner_name':'Test Customer','assigned_worker_id':None,'assigned_worker_name':None,'category':'Painting','description':'Paint a kitchen wall and clean up','location':'Rochester, NY','status':'open','difficulty':'Easy','budget':100,'duration_minutes':120,'created_at':1793890000,'offer_count':1,'has_main_photo':False,'slots':[],'photos':[],'flexible_schedule':True,'offers':[]}
fixtures={'/api/me':{'user':customer},'/api/jobs':{'jobs':[job]},'/api/site-settings':{},'/api/my-offers':{'offers':[]},'/api/reviews/mine':{'reviews':[],'deleted':[]},'/api/invitations':{'invitations':[]},'/api/saved-jobs':{'job_ids':[]},'/api/blocks':{'users':[]},'/api/profile/image-framing':{},'/api/upcoming-jobs':{'jobs':[]},'/api/notifications':{'notifications':[],'unread':0},'/api/job-draft':{'draft':None},'/api/worker-preferences':{'categories':['Painting'],'radius_miles':25},'/api/payments/quote/101/55':{'job_id':101,'offer_id':55,'mode':'demo_unfunded','agreed_price_cents':10000,'commission_cents':1000,'worker_net_cents':9000,'checkout_total_cents':10500,'service_fee_cents':500,'is_customer':True},'/api/payments/overview':{'provider_mode':'demo_unfunded','live_payments_enabled':False,'transactions':[{'job_id':101,'title':'Paint kitchen walls','job_status':'accepted','agreed_job_value':100,'payment_status':'unfunded_demo','transfer_status':'not_started','commission_cents':1000,'net_payout_cents':9000,'checkout_total_cents':10500,'service_fee_cents':500}]},'/api/analytics/earnings':{'net_earned':90,'net_projected':0,'net_combined':90,'completed_jobs':1,'accepted_jobs':0,'net_series':[{'period':'2026-11','earned':90,'projected':0}], 'period_label':'All time'}}
bootstrap='''const fixtures='''+json.dumps(fixtures)+''',store={};
Object.defineProperty(window,'localStorage',{configurable:true,value:{getItem(k){return store[k]??null},setItem(k,v){store[k]=String(v)},removeItem(k){delete store[k]}}});
window.fetch=async(url,opts={})=>{const k=String(url).split('?')[0],data=fixtures[k]||{ok:true};return {ok:true,status:200,json:async()=>data}};'''
with sync_playwright() as p:
 browser=p.chromium.launch(headless=True,executable_path='/usr/bin/chromium',args=['--no-sandbox','--disable-dev-shm-usage'])
 for width in (390,1366):
  page=browser.new_page(viewport={'width':width,'height':950})
  errors=[];page.on('pageerror',lambda err:errors.append(str(err)))
  page.set_content(html,wait_until='domcontentloaded');page.add_script_tag(content=bootstrap);page.add_script_tag(content=code)
  page.wait_for_function('state.me?.id===1',timeout=12000)
  page.evaluate('state.me='+json.dumps(worker)+';showJobDetail('+json.dumps(job)+')')
  fee=page.locator('#workerOfferFeePreview').inner_text()
  assert '$100.00' in fee and '$10.00' in fee and '$90.00' in fee,(width,fee)
  page.locator('#offerForm [name="price"]').fill('150')
  fee=page.locator('#workerOfferFeePreview').inner_text()
  assert '$150.00' in fee and '$15.00' in fee and '$135.00' in fee,(width,fee)
  page.evaluate('closeModal();nav("payment-readiness")')
  page.wait_for_selector('#paymentReadinessContent .ht-payment-history-line',timeout=8000)
  payment=page.locator('#paymentReadinessContent').inner_text()
  assert '$90.00' in payment and '$10.00' in payment,(width,payment)
  if width==1366:page.screenshot(path=str(root/'preview_v14_3_worker_fees.png'))
  page.evaluate('state.me='+json.dumps(customer)+';acceptOffer(101,55)')
  page.wait_for_selector('.ht-checkout-breakdown',timeout=8000)
  checkout=page.locator('.ht-checkout-breakdown').inner_text()
  assert '$100.00' in checkout and '$5.00' in checkout and '$105.00' in checkout and 'Total at checkout' in checkout
  assert 'unfunded demo booking' in page.locator('#confirmPaymentHire').inner_text().lower()
  if width==1366:page.screenshot(path=str(root/'preview_v14_3_checkout.png'))
  assert not errors,(width,errors)
  page.close()
 browser.close()
print('PASS 14.3 browser: worker fee input updates, worker-only payout records, customer checkout, mobile/desktop')
