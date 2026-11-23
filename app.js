// Fix: embed Verified house image directly so no external brand asset is needed.
const iconPaths={
  house:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z"/>',
  leaf:'<path d="M20 4c-10 0-16 4-16 12a5 5 0 0 0 5 5c8 0 11-10 11-17Z"/><path d="M4 21c1-5 5-9 11-12"/>',
  paint:'<path d="M12 3a9 9 0 1 0 0 18h1a2 2 0 0 0 2-2c0-1.4-.9-2-1-2.8-.1-.9 1-1.2 2-1.2h2a4 4 0 0 0 4-4c0-4.4-4.5-8-10-8Z"/><circle cx="7.5" cy="10" r="1"/><circle cx="12" cy="7" r="1"/><circle cx="17" cy="10" r="1"/>',
  sofa:'<path d="M5 12V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4"/><path d="M3 12a2 2 0 0 1 2 2v4h14v-4a2 2 0 1 1 4 0v6H1v-6a2 2 0 0 1 2-2Z"/><path d="M5 20v2m14-2v2"/>',
  wrench:'<path d="M14 7a5 5 0 0 0-7 7l-5 5a2 2 0 0 0 3 3l5-5a5 5 0 0 0 7-7l-4 3-3-3 4-3Z"/>',
  sparkle:'<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Zm7 13 1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z"/>',
  package:'<path d="m3 7 9-4 9 4v10l-9 4-9-4V7Z"/><path d="m3 7 9 5 9-5M12 12v9"/>',
  grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  pin:'<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/>',
  bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 9h18c0-1-3-2-3-9Zm-8 12a2 2 0 0 0 4 0"/>',
  message:'<path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9 9 0 0 1-4-.8L3 21l1.6-5A8.5 8.5 0 1 1 21 11.5Z"/>',
  chart:'<path d="M3 3v18h18M7 17v-5M12 17V7M17 17v-9"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  arrow:'<path d="M4 12h16m-7-7 7 7-7 7"/>',
  check:'<path d="m4 12 5 5L20 6"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 2"/>',
  file:'<path d="M6 3h9l4 4v14H6z"/><path d="M15 3v5h4M9 13h7m-7 4h7"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-5 3-8 8-8s8 3 8 8"/>',
  settings:'<circle cx="12" cy="12" r="3"/><path d="M4 9.5 2.8 12 4 14.5 6.5 15l1.2 2.2-1 2.4L9.5 21l2-1.5h1L14.5 21l2.8-1.4-1-2.4 1.2-2.2 2.5-.5 1.2-2.5-1.2-2.5-2.5-.5-1.2-2.2 1-2.4L14.5 3l-2 1.5h-1L9.5 3 6.7 4.4l1 2.4-1.2 2.2-2.5.5Z"/>',
  star:'<path d="m12 2 3.2 6.6 7.3 1.1-5.2 5.1 1.2 7.2L12 18.5 5.5 22l1.2-7.2-5.2-5.1 7.3-1.1L12 2Z"/>',
  image:'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8" cy="8" r="1.5"/><path d="m21 15-5-5-9 11"/>',
  trash:'<path d="M3 6h18M8 6V4h8v2m3 0-1 15H6L5 6m5 4v7m4-7v7"/>',
  list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  map:'<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6ZM9 3v15m6-12v15"/>',
  wallet:'<rect x="2" y="6" width="20" height="15" rx="2"/><path d="M2 9h20M3 6V4a2 2 0 0 1 2-2h14"/>',
  invite:'<path d="M10 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4ZM3 21v-2a7 7 0 0 1 14 0v2M19 8v8m-4-4h8"/>',
  history:'<path d="M3 12a9 9 0 1 0 2-5M3 3v5h5M12 7v5l3 2"/>',
  briefcase:'<rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V4h8v3M3 12h18"/>',
  bookmark:'<path d="M6 3h12v18l-6-4-6 4V3Z"/>',
  shield:'<path d="M12 2 4 6v6c0 5 3 8 8 10 5-2 8-5 8-10V6l-8-4Z"/>',
  eye:'<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z"/><circle cx="12" cy="12" r="3"/>',
  'eye-off':'<path d="m3 3 18 18"/><path d="M10.6 5.1A11 11 0 0 1 12 5c6.4 0 10 7 10 7a15 15 0 0 1-3.1 3.8M6.1 6.9A16 16 0 0 0 2 12s3.6 7 10 7c1.8 0 3.4-.5 4.7-1.3"/><path d="M10 10a3 3 0 0 0 4 4"/>'
};
function icon(name,size=20){return `<svg class="ht-icon" width="${Number(size)||20}" height="${Number(size)||20}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${iconPaths[name]||iconPaths.grid}</svg>`;}
function avatar(userId,name='',large=false){
 const initials=String(name||'?').trim().split(/\s+/).slice(0,2).map(x=>x[0]).join('').toUpperCase();
 return `<span class="person-avatar ${large?'large':''}" aria-label="${e(name)}"><img class="person-avatar-image" src="/api/avatars/${Number(userId)||0}" alt="" loading="lazy" onload="this.parentElement.classList.add('has-photo')" onerror="this.remove()"><span class="avatar-initials">${e(initials)}</span></span>`;
}

const categories={"Lawn & Yard":"leaf",Painting:"paint",Furniture:"sofa",Repairs:"wrench",Cleaning:"sparkle",Moving:"package",Flooring:"grid",Other:"house"};
const state={me:null,jobs:[],offers:[],invitations:[],reviews:[],deletedReviews:[],conversations:[],activeConversation:null,chatMessages:[],publicProfile:null,returnView:'dashboard',earnings:null,view:'home',detail:null,partner:null,mapMode:localStorage.getItem('hometask_browse_mode')==='map'?'map':'list',jobFilter:'all',appointmentFilter:'all',historyStatus:'all',historyCategory:'all',historySort:'newest',historyQuery:'',historyFrom:'',historyTo:'',offerFilter:'current',conversationFilter:'all',earningsRange:'period',earningsGroup:'month',earningsStart:'',earningsEnd:'',nearbyCenter:null,nearbyLabel:'',nearbyRadius:0,personalGeo:null,featuredCenter:null,featuredLocationKey:'',featuredLocationStatus:'ready',browseFeaturedOnly:false,savedJobIds:[],publicProfileTab:'about',portfolioCategory:'all',profileReviewSort:'newest',hideOwnListings:true,portfolioItems:[],followingWorkers:[],adminTab:'overview',adminFilters:{},siteSettings:{},workerPreferences:{categories:[],radius_miles:25},blockedUsers:[],browseFilters:{query:'',category:'',price:''},mobileFiltersOpen:false,hideOfferedJobs:true,jobSort:localStorage.getItem('hometask_job_sort')||'match',budgetMin:0,budgetMax:0,upcomingJobs:[],jobDraft:null,jobDraftLoaded:false,draftItems:[],editingDraftId:null,historyFiltersOpen:false,assignmentFilter:'booked',imageFraming:{banner_x:50,banner_y:50,banner_zoom:100,avatar_x:50,avatar_y:50,avatar_zoom:100}};
let ht1543AutoLocationRequested=false;
let ht1543UserPickedLocation=false;
const notificationState={items:[],unread:0,seenPopup:new Set(),poller:null,polling:false,primed:false,lastBannerAt:0,banner:null,bannerTimer:null};
try{const saved=JSON.parse(sessionStorage.getItem('ht154_browse_filters')||'null');if(saved&&typeof saved==='object')state.browseFilters={...state.browseFilters,...saved}}catch{}
// Dismiss this reminder per account. It stays hidden until the user chooses to revisit their profile.
function profileSetupReminderKey(){return state.me?`hometask_profile_setup_hidden_${state.me.id}`:'';}
function dismissProfileSetupReminder(){
 const key=profileSetupReminderKey();if(key)localStorage.setItem(key,'1');
 document.querySelector('.onboarding-banner')?.remove();
}
function closeProfileMoreMenu(){
 const menu=$('profileMoreMenu'),trigger=$('profileMoreToggle');
 if(menu)menu.hidden=true;
 if(trigger)trigger.setAttribute('aria-expanded','false');
}

const $=id=>document.getElementById(id);
const e=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const dollars=n=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(n);
const moneyCents=cents=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD'}).format((Number(cents)||0)/100);
const workerPaymentBreakdown=price=>{const cents=Math.round((Number(price)||0)*100),fee=Math.round(cents*.10);return {gross:cents,fee,net:cents-fee}};
const workerNetPrice=price=>moneyCents(workerPaymentBreakdown(price).net);
// v15.13.57 — Percentage comparison is against the customer's stated task budget.
function offerAskingComparison(offer,asking){
 const proposed=Number(offer),budget=Number(asking);
 if(offer===''||offer==null||!Number.isFinite(proposed)||proposed<=0||!Number.isFinite(budget)||budget<=0)
  return {available:false,text:'Comparison unavailable',detail:'A valid task budget and offer are required.'};
 const percent=(proposed-budget)/budget*100;
 const amount=Math.abs(proposed-budget);
 if(Math.abs(proposed-budget)<0.005)
  return {available:true,direction:'equal',text:'Matches asking price',detail:'Your offer matches the customer’s stated budget.'};
 const direction=percent>0?'above':'below';
 return {available:true,direction,text:`${Math.abs(percent).toFixed(1)}% ${direction} asking price`,detail:`${moneyCents(Math.round(amount*100))} ${percent>0?'higher':'lower'} than the customer’s ${dollars(budget)} budget.`};
}
function offerAskingComparisonMarkup(offer,asking){
 const comparison=offerAskingComparison(offer,asking);
 return `<div class="ht1557-offer-comparison ${comparison.available?'ht1557-'+comparison.direction:'ht1557-unavailable'}" role="status" aria-live="polite"><strong>${e(comparison.text)}</strong><span>${e(comparison.detail)}</span></div>`;
}


// Filled/partial stars are derived only from the review average stored by HomeTask.
function ratingStars(value,count){
 const rating=Math.max(0,Math.min(5,Number(value)||0));
 if(!rating)return '<span class="ht153-rating-new">New · No ratings yet</span>';
 const width=(rating/5*100).toFixed(1);
 return `<span class="ht153-rating" role="img" aria-label="${rating.toFixed(1)} of 5 stars${count!=null?', '+Number(count)+' reviews':''}"><span class="ht153-star-glyphs" style="--star-fill:${width}%" aria-hidden="true">★★★★★</span><span class="ht153-rating-number">${rating.toFixed(1)}</span>${count!=null?`<small>(${Number(count)})</small>`:''}</span>`;
}
function reviewStarRow(value){
 const rating=Math.max(0,Math.min(5,Number(value)||0));
 return `<span class="ht155-review-stars" role="img" aria-label="${rating} out of 5 stars"><span class="ht155-review-glyphs" aria-hidden="true" style="--star-fill:${(rating/5*100).toFixed(1)}%">★★★★★</span></span>`;
}
function scheduledWindow(start,end){
 if(!start)return 'Not scheduled';
 const begin=new Date(start),finish=end?new Date(end):null;
 if(!Number.isFinite(begin.getTime()))return 'Not scheduled';
 const t=d=>d.toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit'}).replace(/\s/g,'').toLowerCase();
 const day=begin.toLocaleDateString('en-US',{month:'numeric',day:'numeric',year:'numeric'});
 return `${t(begin)}${finish&&Number.isFinite(finish.getTime())?'–'+t(finish):''}, ${day}`;
}
function placeholderPhoto(job,cls='compact-job-photo'){
 const item=state.jobs.find(x=>Number(x.id)===Number(job?.job_id||job?.id))||job||{};
 return `<span class="ht153-photo-fallback ${cls}" role="img" aria-label="No image uploaded for ${e(item.category||'task')}">${icon(categories[item.category]||'house',27)}</span>`;
}

const date=s=>new Date(s*1000).toLocaleDateString();
const options=(list,selected)=>list.map(v=>`<option value="${e(v)}" ${v===selected?'selected':''}>${e(v)}</option>`).join('');
const role=()=>state.me?.role||'customer';
const activeWorkspace=()=>state.me ? role() : 'guest';
const mine=j=>state.me && j.owner_id===state.me.id;
// HomeTask 15.13.11 — Featured recommendations are ranked, not skill-gated.
// A missing skill list must never eliminate otherwise eligible opportunities.
const FEATURED_RADIUS_MILES=25;
const FEATURED_RECOMMENDATION_LIMIT=8;
const featuredSkillHints={
 'Lawn & Yard':['lawn','yard','mow','landscap','garden','outdoor','leaf','hedge','snow'],
 'Painting':['paint','painter','wall finish','stain'],
 'Furniture':['furniture','assembly','assemble','ikea','cabinet','mounting'],
 'Repairs':['repair','handyman','maintenance','fix','drywall','patch','plumb','electrical','electrician','carpenter'],
 'Cleaning':['clean','housekeeping','janitorial','wash','maid'],
 'Moving':['mov','relocat','haul','lifting','delivery'],
 'Flooring':['floor','tile','carpet','vinyl','laminate','hardwood'],
 'Other':[]
};
function skillTerms(){
 return String(state.me?.skills||'').toLowerCase().split(/[,;\n/]+/)
  .map(s=>s.replace(/[^a-z0-9 -]/g,' ').trim()).filter(s=>s.length>=3);
}
function containsSkill(text,phrase){
 const safe=String(text||'').toLowerCase();
 const escaped=phrase.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
 return new RegExp(`(^|[^a-z])${escaped}(?=$|[^a-z])`,'i').test(safe);
}
function featuredSkillScore(job,terms){
 const text=[job.title,job.description,job.category].join(' ').toLowerCase();
 let score=0;
 for(const term of terms){
  if(containsSkill(text,term))score+=10;
  const hints=featuredSkillHints[job.category]||[];
  if(hints.some(h=>term.includes(h)||h.includes(term)))score+=6;
  const keywords=term.split(/\s+/).filter(t=>t.length>=4);
  if(keywords.some(word=>containsSkill(text,word)))score+=2;
 }
 return score;
}
// Manual area search overrides GPS until the worker chooses My location again.
function featuredOrigin(){
 if(ht1543UserPickedLocation && state.nearbyCenter)return {coords:state.nearbyCenter,label:`searched area (${state.nearbyLabel||'selected area'})`,kind:'search'};
 if(state.personalGeo)return {coords:state.personalGeo,label:'your current location',kind:'device'};
 if(state.featuredCenter)return {coords:state.featuredCenter,label:state.me?.location||'your profile city',kind:'profile'};
 return {coords:null,label:'your area',kind:'unknown'};
}
function featuredRadius(){return Math.max(1,Number(state.workerPreferences?.radius_miles)||FEATURED_RADIUS_MILES)}
function featuredJobs(){
 if(!state.me||role()!=='worker')return [];
 const origin=featuredOrigin(),terms=skillTerms(),prefs=state.workerPreferences?.categories||[];
 const experience=new Set(state.jobs.filter(j=>Number(j.assigned_worker_id)===Number(state.me.id)&&j.status==='completed').map(j=>j.category));
 const radius=featuredRadius();
 const eligible=state.jobs.filter(j=>j.status==='open'&&!mine(j)&&!hasOfferForJob(j));
 const ranked=eligible.map(j=>{
  const coords=jobCoordinates(j);
  const distance=origin.coords&&coords?milesBetween(origin.coords,coords):null;
  // Distance is the strongest proximity signal, but distant/unlocated tasks
  // remain eligible for suggestions instead of disappearing completely.
  const proximity=distance==null?0:distance<=radius?Math.max(0,45-30*distance/radius):Math.max(-20,15-(distance-radius)*0.8);
  const skills=Math.min(28,featuredSkillScore(j,terms));
  const category=prefs.includes(j.category)?14:0;
  const completed=experience.has(j.category)?10:0;
  const posted=Number(j.created_at||0);
  const createdMs=posted>1e12?posted:posted*1000;
  const ageDays=createdMs>0?Math.max(0,(Date.now()-createdMs)/86400000):Infinity;
  const recency=Number.isFinite(ageDays)?Math.max(0,8-ageDays/7):0;
  return {job:j,score:proximity+skills+category+completed+recency,distance:distance??Infinity};
 });
 return ranked.sort((a,b)=>b.score-a.score||a.distance-b.distance||Number(b.job.created_at||0)-Number(a.job.created_at||0)).slice(0,FEATURED_RECOMMENDATION_LIMIT);
}
let featuredLookupSequence=0;
function ensureFeaturedLocation(){
 if(!state.me||role()!=='worker')return;
 const location=String(state.me.location||'').trim();
 if(location===state.featuredLocationKey)return;
 state.featuredLocationKey=location;
 const ticket=++featuredLookupSequence;
 state.featuredCenter=location?areaLookup(location):null;
 state.featuredLocationStatus=location?(state.featuredCenter?'ready':'looking-up'):'missing';
 if(!location||state.featuredCenter)return;
 // Only geocode the city/area. Never send an exact home address to the recommendations service.
 const coarse=coarseLocation(location)||location;
 geocodeSearchCenter(coarse).then(coords=>{
  if(ticket!==featuredLookupSequence||state.me?.location?.trim()!==location)return;
  state.featuredCenter=coords;
  state.featuredLocationStatus='ready';
  if(state.view==='home'||state.view==='browse')render();
 }).catch(()=>{
  if(ticket!==featuredLookupSequence)return;
  state.featuredLocationStatus='unavailable';
  if(state.view==='home'||state.view==='browse')render();
 });
}
function featuredEmptyText(){
 if(!featuredOrigin().coords)return 'Set your location to improve nearby suggestions, or browse all available jobs.';
 return 'No open tasks to recommend right now. Explore all jobs or check again later.';
}
function ht142TaskStage(j){
 if(j.status==='completed')return 'completed';
 if(j.status!=='accepted')return j.status;
 if(j.completion_requested_at)return 'review';
 const start=j.scheduled_start?Date.parse(j.scheduled_start):NaN;
 return Number.isFinite(start)&&start<=Date.now()?'progress':'hired';
}
const status=j=>{
 const stage=ht142TaskStage(j);
 if(stage==='review')return 'Awaiting approval';
 if(stage==='hired')return j.scheduled_start?'Hired':'Hired · Time pending';
 if(stage==='progress')return 'In progress';
 return j.status==='open'?(j.offer_count?`${j.offer_count} offer${j.offer_count===1?'':'s'}`:'Open'):({completed:'Completed',closed:'Cancelled',cancelled:'Cancelled'}[j.status]||j.status);
};
const statusClass=j=>j.status==='open'?(j.offer_count?'status-offers':'status-open'):({accepted:'status-accepted',completed:'status-completed',closed:'status-cancelled',cancelled:'status-cancelled'}[j.status]);

// Scheduling dates use America/New_York local wall time for Rochester jobs.
const scheduleZone='America/New_York';
function scheduleZoneShort(value){
 if(!value)return 'ET';
 const midday=new Date(`${String(value).slice(0,10)}T12:00:00Z`);
 if(Number.isNaN(midday.getTime()))return 'ET';
 return new Intl.DateTimeFormat('en-US',{timeZone:scheduleZone,timeZoneName:'short'}).formatToParts(midday).find(x=>x.type==='timeZoneName')?.value||'ET';
}
const schedulePretty=v=>v?`${new Date(v+':00').toLocaleString('en-US',{month:'short',day:'numeric',hour:'numeric',minute:'2-digit'})} ${scheduleZoneShort(v)}`:'Not selected';
const pad=n=>String(n).padStart(2,'0');
function localDatetime(minutesAhead=1440){const d=new Date(Date.now()+minutesAhead*60000);return new Intl.DateTimeFormat('sv-SE',{timeZone:scheduleZone,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hourCycle:'h23'}).format(d).replace(' ','T')}
let draftSlots=[];
let postingTimingMode='specific';
function durationText(value){
 const n=Math.round(Number(value)||0), hours=Math.floor(n/60), minutes=n%60;
 if(n===480)return 'Full day (8 hours)';
 if(!hours)return `${minutes} minute${minutes===1?'':'s'}`;
 return `${hours} hour${hours===1?'':'s'}${minutes?` ${minutes} minute${minutes===1?'':'s'}`:''}`;
}
// Compact duration labels for task cards and map previews only.
// Keep the full format above for forms, scheduling and detailed task views.
function compactDurationText(value){
 const n=Math.max(0,Math.round(Number(value)||0));
 if(n<60)return `${n} min`;
 const h=Number((n/60).toFixed(2));
 return `${h} hr${h===1?'':'s'}`;
}
// Both worker proposals and booked-job reschedules use a friendly hours/minutes input.
// The backend continues to store the agreed window, so no migration is required.
function durationPartsFields(prefix,total){
 const mins=Math.round(Number(total)||120);
 return `<div class="field duration-parts-field"><label>Requested duration</label><div class="duration-parts" role="group" aria-label="Requested duration"><label>Hours<input id="${prefix}Hours" class="control" type="number" inputmode="numeric" min="0" max="24" step="1" required value="${Math.floor(mins/60)}" /></label><label>Minutes<input id="${prefix}Minutes" class="control" type="number" inputmode="numeric" min="0" max="59" step="1" required value="${mins%60}" /></label></div><small id="${prefix}DurationError" class="duration-error" role="status">15 minutes to 24 hours total.</small></div>`;
}
function readDurationParts(prefix){
 const h=$(`${prefix}Hours`),m=$(`${prefix}Minutes`);
 if(!h||!m||h.value===''||m.value==='')return null;
 const hours=Number(h.value),minutes=Number(m.value),total=hours*60+minutes;
 return Number.isInteger(hours)&&Number.isInteger(minutes)&&hours>=0&&hours<=24&&minutes>=0&&minutes<=59&&total>=15&&total<=1440?total:null;
}
function validateDurationParts(prefix,enabled=true){
 const minutes=$(`${prefix}Minutes`),error=$(`${prefix}DurationError`);
 if(!minutes)return null;
 const total=readDurationParts(prefix);
 minutes.setCustomValidity(enabled&&total===null?'Choose a duration from 15 minutes to 24 hours.':'');
 if(error){error.textContent=enabled&&total===null?'Enter between 15 minutes and 24 hours.':'15 minutes to 24 hours total.';error.classList.toggle('is-invalid',enabled&&total===null)}
 return total;
}
function plusMinutesISO(value,minutes){if(!value)return '';const time=new Date(value+':00');if(Number.isNaN(time.getTime()))return '';time.setMinutes(time.getMinutes()+minutes);return `${time.getFullYear()}-${pad(time.getMonth()+1)}-${pad(time.getDate())}T${pad(time.getHours())}:${pad(time.getMinutes())}`}
function scheduleFields(job){
 const flex=job?!!job.flexible_schedule:false;
 draftSlots=job?.slots?.map(x=>({start:x.start,end:x.end}))||[];
 const duration=Number(job?.duration_minutes||120);
 const firstDay=(draftSlots[0]?.start||'').slice(0,10);
 const today=localDatetime(0).slice(0,10);
 const selected=job?.timing_preference||(flex?'flexible':firstDay===today?'same-day':'specific');
 postingTimingMode=selected;
 return `<div class="schedule-section ht147-timing-panel"><div class="ht147-section-heading"><span class="ht147-heading-icon">${icon('calendar',21)}</span><div><h3>Timing & availability</h3><p class="mock-meta">When would you like the work done?</p></div></div>
 <div class="ht147-timing-choices" role="group" aria-label="When do you need the task completed?">
 ${[['same-day','Same day','Today, if a worker is available','calendar'],['specific','Specific date','Choose your date and time','clock'],['this-week','This week','Any suitable day this week','calendar'],['flexible','Flexible','Let workers suggest times','check']].map(([key,label,helper,ico])=>`<button type="button" class="ht147-timing-choice ${selected===key?'is-selected':''}" data-ht147-timing="${key}" aria-pressed="${selected===key}"><span class="ht147-choice-icon">${icon(ico,19)}</span><strong>${label}</strong><small>${helper}</small></button>`).join('')}
 </div><p id="ht147TimingNote" class="ht147-timing-note" aria-live="polite">${selected==='same-day'?'Same day requests are shown as needed today. Worker availability is not guaranteed.':selected==='flexible'?'Workers can propose a convenient time.':'Choose one or more time windows for workers to consider.'}</p>
 <div class="ht147-timing-controls"><div class="field"><label>Estimated duration</label><select class="control" id="durationSelect" name="duration_minutes">${[15,30,45,60,90,120,180,240,480].map(n=>`<option value="${n}" ${duration===n?'selected':''}>${durationText(n)}</option>`).join('')}</select></div><label class="schedule-checkbox"><input type="checkbox" id="flexibleSchedule" ${flex?'checked':''}/> Allow workers to suggest another time</label><div id="scheduleSlotList"></div><button type="button" class="mini-btn ht147-add-time" id="addSlot">+ Add a time</button><small>Times are optional. Workers can propose a time after responding. Any time you add uses Eastern Time and is not a confirmed booking.</small></div></div>`;
}
function bindScheduleFields(){
 const list=$('scheduleSlotList');if(!list)return;
 const duration=()=>Number($('durationSelect')?.value||120);
 const today=()=>localDatetime(0).slice(0,10);
 function paint(){
  list.innerHTML=draftSlots.map((slot,i)=>`<div class="schedule-slot"><span>Option ${i+1}</span><label>Start<input class="control" type="datetime-local" data-time="start" data-i="${i}" value="${e(slot.start||'')}" /></label><label>End<input class="control" type="datetime-local" data-time="end" data-i="${i}" value="${e(slot.end||'')}" /></label><button class="mini-btn" type="button" data-remove-slot="${i}">Remove</button></div>`).join('');
  const add=$('addSlot');if(add){add.textContent=draftSlots.length?'+ Add another time':'+ Add a time';add.disabled=draftSlots.length>=8;}
  list.querySelectorAll('[data-time]').forEach(x=>x.onchange=()=>{
   const i=Number(x.dataset.i);draftSlots[i][x.dataset.time]=x.value;
   if(x.dataset.time==='start'&&x.value){draftSlots[i].end=plusMinutesISO(x.value,duration());paint();}
   queuePostingDraft();
  });
  list.querySelectorAll('[data-remove-slot]').forEach(x=>x.onclick=()=>{draftSlots.splice(Number(x.dataset.removeSlot),1);paint();queuePostingDraft()});
 }
 function setMode(mode){
  postingTimingMode=mode;
  document.querySelectorAll('[data-ht147-timing]').forEach(b=>{const active=b.dataset.ht147Timing===mode;b.classList.toggle('is-selected',active);b.setAttribute('aria-pressed',String(active))});
  const note=$('ht147TimingNote');if(note)note.textContent=({
   'same-day':'Needed today, subject to worker availability. Add a time only if you have a preferred start.',
   'specific':'You can add your preferred time below, or leave it open for workers to suggest.',
   'this-week':'Needed sometime this week. You can leave exact times open.',
   'flexible':'No specific time required. Workers can propose convenient times.'
  })[mode]||'';
 }
 document.querySelectorAll('[data-ht147-timing]').forEach(button=>button.onclick=()=>{
  const mode=button.dataset.ht147Timing;
  if($('flexibleSchedule'))$('flexibleSchedule').checked=mode==='flexible'||mode==='this-week';
  // Selecting a timing preference never invents an appointment window.
  setMode(mode);paint();queuePostingDraft();
 });
 $('flexibleSchedule').onchange=()=>{if($('flexibleSchedule').checked)setMode('flexible');else if(postingTimingMode==='flexible')setMode('specific');queuePostingDraft()};
 $('durationSelect').onchange=()=>{draftSlots=draftSlots.map(x=>({...x,end:x.start?plusMinutesISO(x.start,duration()):x.end}));paint();queuePostingDraft()};
 $('addSlot').onclick=()=>{
  if(draftSlots.length>=8)return toast('Maximum 8 time options.');
  // A newly added slot starts blank: the customer explicitly picks the time.
  draftSlots.push({start:'',end:''});paint();list.querySelector('[data-time="start"]:last-of-type')?.focus();queuePostingDraft();
 };
 setMode(postingTimingMode);paint();
}

function intervalMinutes(start,end,fallback=120){
 const a=Date.parse(start||''),b=Date.parse(end||'');
 const n=Math.round((b-a)/60000);
 return Number.isFinite(n)&&n>=15&&n<=1440?n:Number(fallback||120);
}
function proposedTimeField(job,myOffer){
 const slots=(job.slots||[]).filter(x=>x.start&&x.end);
 const priorStart=myOffer?.proposed_start||'';
 let selectedKey=slots.findIndex(x=>x.start===priorStart&&x.end===myOffer?.proposed_end);
 if(selectedKey<0)selectedKey=priorStart?'other':slots.length?'0':'later';
 const start=selectedKey==='other'?priorStart:'';
 const mins=intervalMinutes(myOffer?.proposed_start,myOffer?.proposed_end,job.duration_minutes||120);
 const end=start?plusMinutesISO(start,mins):'';
 const custom=![15,30,60,120].includes(mins);
 return `<div class="schedule-section ht1523-schedule ht158-schedule ht1530-schedule"><div class="ht1523-section-heading"><h3>Scheduling</h3></div><div class="ht1530-slot-options" role="group" aria-label="Choose a time">${slots.map((x,i)=>`<label class="ht1530-slot"><input type="radio" name="ht1530Slot" value="${i}" ${String(selectedKey)===String(i)?'checked':''}/><span>${e(schedulePretty(x.start))} – ${e(schedulePretty(x.end))}</span></label>`).join('')}<label class="ht1530-slot"><input type="radio" name="ht1530Slot" value="other" ${selectedKey==='other'?'checked':''}/><span>Request a time</span></label><label class="ht1530-slot"><input type="radio" name="ht1530Slot" value="later" ${selectedKey==='later'?'checked':''}/><span>Arrange time after hiring</span></label></div><select id="offerSlotSelect" aria-label="Selected scheduling option" hidden>${slots.map((_,i)=>`<option value="${i}" ${String(selectedKey)===String(i)?'selected':''}>Time ${i+1}</option>`).join('')}<option value="other" ${selectedKey==='other'?'selected':''}>Another time</option><option value="later" ${selectedKey==='later'?'selected':''}>After hiring</option></select><div class="ht1530-duration-inline"><span>Estimated duration: <strong>${e(durationText(job.duration_minutes||120))}</strong></span></div><div class="field-grid ht1523-custom-times ht158-time-grid" id="offerCustomTimes" ${selectedKey!=='other'?'hidden':''}><div class="field ht158-start"><label>Start time</label><input type="datetime-local" class="control" id="offerCustomStart" value="${e(start)}"/></div><div class="ht158-duration-selection"><label>Duration</label><div class="ht1523-duration-presets" role="group" aria-label="Quick durations"><button type="button" data-offer-duration="15" class="${mins===15?'is-active':''}">15 min</button><button type="button" data-offer-duration="30" class="${mins===30?'is-active':''}">30 min</button><button type="button" data-offer-duration="60" class="${mins===60?'is-active':''}">1 hr</button><button type="button" data-offer-duration="120" class="${mins===120?'is-active':''}">2 hrs</button><button type="button" id="ht158CustomDurationToggle" aria-expanded="${custom}">Custom</button></div></div><div class="ht158-custom-duration" id="ht158CustomDuration" ${custom?'':'hidden'}>${durationPartsFields('offerCustom',mins)}</div><div class="ht158-derived-end"><span>Estimated end:</span> <strong id="offerCustomEndText">${end?e(schedulePretty(end)):'Choose a start time'}</strong><input type="datetime-local" id="offerCustomEnd" readonly tabindex="-1" aria-hidden="true" value="${e(end)}"/></div></div></div>`;
}

function bindOfferDuration(job){
 const start=$('offerCustomStart'),hours=$('offerCustomHours'),minutes=$('offerCustomMinutes'),end=$('offerCustomEnd');
 if(!start||!hours||!minutes||!end)return;
 const update=()=>{
  const custom=($('offerSlotSelect')?.value||'other')==='other';
  const n=validateDurationParts('offerCustom',custom);
  end.value=start.value&&n!==null?plusMinutesISO(start.value,n):'';
  const display=$('offerCustomEndText');if(display)display.textContent=end.value?schedulePretty(end.value):'Choose a start time';
  document.querySelectorAll('[data-offer-duration]').forEach(b=>b.classList.toggle('is-active',Number(b.dataset.offerDuration)===n));
  showWorkerConflictWarning(job);
 };
 start.addEventListener('change',update);
 for(const field of [hours,minutes]){field.addEventListener('input',update);field.addEventListener('change',update)}
 document.querySelectorAll('[data-offer-duration]').forEach(b=>b.onclick=()=>{const n=Number(b.dataset.offerDuration);hours.value=String(Math.floor(n/60));minutes.value=String(n%60);const custom=$('ht158CustomDuration');if(custom)custom.hidden=true;const toggle=$('ht158CustomDurationToggle');if(toggle)toggle.setAttribute('aria-expanded','false');update()});
 const customToggle=$('ht158CustomDurationToggle');if(customToggle)customToggle.onclick=()=>{const box=$('ht158CustomDuration');if(!box)return;box.hidden=!box.hidden;customToggle.setAttribute('aria-expanded',String(!box.hidden));if(!box.hidden)hours.focus()};
 for(const field of [hours,minutes])field.addEventListener('input',()=>{const n=readDurationParts('offerCustom');document.querySelectorAll('[data-offer-duration]').forEach(b=>b.classList.toggle('is-active',Number(b.dataset.offerDuration)===n))});
 update();
}
function offerSchedule(job){
 const choice=$('offerSlotSelect')?.value||'other';
 if(choice==='later')return {proposed_start:null,proposed_end:null};
 if(choice!=='other'){const x=job.slots[Number(choice)];return x?{proposed_start:x.start,proposed_end:x.end}:{proposed_start:null,proposed_end:null};}
 return {proposed_start:$('offerCustomStart')?.value||null,proposed_end:$('offerCustomEnd')?.value||null};
}
function appointmentPanel(job){
 const start=job.scheduled_start;
 if(!start)return `<div class="inline-note" style="margin-top:12px">No appointment scheduled yet. <button class="mini-btn" id="rescheduleButton" type="button">Request an appointment time</button></div>`;
 return `<div class="confirmed-schedule"><strong>Confirmed appointment</strong><p>${e(schedulePretty(job.scheduled_start))} – ${e(schedulePretty(job.scheduled_end))}</p><div class="mini-actions"><button class="mini-btn" id="googleCalendarLink">Add to Google Calendar</button>${job.status==='accepted'?`<button class="mini-btn" id="rescheduleButton">Request reschedule / review request</button>`:''}</div></div>`;
}
function googleCalendarURL(j){
 const format=v=>v.replace(/[-:]/g,'').replace('T','T')+'00';
 return 'https://calendar.google.com/calendar/render?'+new URLSearchParams({action:'TEMPLATE',text:'HomeTask: '+j.title,details:'Confirmed HomeTask appointment. Job #'+j.id,location:j.location,dates:format(j.scheduled_start)+'/'+format(j.scheduled_end),ctz:'America/New_York'});
}
function bindAppointmentPanel(job){
 if($('googleCalendarLink'))$('googleCalendarLink').onclick=()=>window.open(googleCalendarURL(job),'_blank','noopener');
 if($('rescheduleButton'))$('rescheduleButton').onclick=()=>showReschedule(job.id);
}
async function showReschedule(jobId){
 try{
  const j=await api(`/jobs/${jobId}`), req=(await api(`/jobs/${jobId}/reschedule`)).request;
  const returnTab=document.querySelector('#modalRoot .ht1521-tab.is-active')?.dataset.taskTab||'progress';
  const start='';
  const minutes=intervalMinutes(j.scheduled_start,j.scheduled_end,j.duration_minutes||120);
  const proposedEnd='';
  modal(`${modalHead((j.scheduled_start?'Reschedule ':'Schedule ')+j.title,'APPOINTMENT')}${j.scheduled_start?`<div class="inline-note">Current: ${e(schedulePretty(j.scheduled_start))} to ${e(schedulePretty(j.scheduled_end))} · ${e(durationText(minutes))}</div>`:'<div class="inline-note">No appointment time is confirmed yet. Propose a time for the worker to approve.</div>'}${req?`<div class="ht152-schedule-compare"><div><span>Current booking</span><strong>${j.scheduled_start?e(schedulePretty(j.scheduled_start)):'Not selected'}</strong><small>${j.scheduled_end?e(schedulePretty(j.scheduled_end)):'No confirmed booking'}</small></div><div class="ht152-next-time"><span>Proposed change</span><strong>${e(schedulePretty(req.start_time))}</strong><small>${e(schedulePretty(req.end_time))} · ${e(durationText(intervalMinutes(req.start_time,req.end_time,minutes)))}</small></div></div>${req.requester_id!==state.me.id?'<div class="hero-actions"><button class="btn btn-primary" id="approveChange">Accept proposed time</button><button class="btn btn-secondary" id="declineChange">Decline change</button></div>':'<div class="inline-note">Waiting for the other person to approve or decline. Your current booking has not changed.</div>'}`:''}<form id="rescheduleForm"><h3>${j.scheduled_start?'Propose a different appointment':'Propose an appointment time'}</h3><div class="field-grid"><div class="field"><label>New start time</label><input type="datetime-local" class="control" name="start" id="rescheduleStart" required value="${e(start)}"/></div>${durationPartsFields('reschedule',minutes)}<div class="field full ht156-end-time"><label>Calculated end time</label><input type="datetime-local" class="control" id="rescheduleEnd" name="end" required readonly value="${e(proposedEnd)}"/><small>Time changes take effect only after approval.</small></div></div><button class="btn btn-secondary" type="submit">${j.scheduled_start?'Send reschedule request':'Send time proposal'}</button></form>`);
  const appointmentModal=document.querySelector('#modalRoot .modal');
  appointmentModal?.classList.add('ht156-appointment-modal');
  const closeButton=appointmentModal?.querySelector('.modal-head [data-dismiss]');
  if(closeButton){const back=document.createElement('button');back.type='button';back.className='icon-btn ht156-back';back.setAttribute('aria-label','Back to task details');back.innerHTML='←';closeButton.parentElement.insertBefore(back,closeButton);back.onclick=()=>openJob(jobId,returnTab);}
  const startInput=$('rescheduleStart'),hoursInput=$('rescheduleHours'),minutesInput=$('rescheduleMinutes'),endInput=$('rescheduleEnd');
  const submitButton=$('rescheduleForm')?.querySelector('button[type=submit]');
  if(submitButton)submitButton.disabled=true;
  const updateEnd=()=>{const n=validateDurationParts('reschedule');endInput.value=startInput.value&&n!==null?plusMinutesISO(startInput.value,n):'';if(submitButton)submitButton.disabled=!(startInput.value&&n!==null)};
  startInput.onchange=updateEnd;
  for(const field of [hoursInput,minutesInput]){field.oninput=updateEnd;field.onchange=updateEnd}
  if($('approveChange'))$('approveChange').onclick=async()=>{try{await api(`/jobs/${jobId}/reschedule/approve`,'POST');await refresh();closeModal();render();toast('Time and duration approved. Calendar updated for connected users.')}catch(err){toast(err.message)}};
  if($('declineChange'))$('declineChange').onclick=async()=>{try{await api(`/jobs/${jobId}/reschedule/decline`,'POST');await refresh();closeModal();render();toast('Schedule change declined. Original appointment retained.')}catch(err){toast(err.message)}};
  $('rescheduleForm').onsubmit=async ev=>{ev.preventDefault();updateEnd();if(validateDurationParts('reschedule')===null||!ev.target.reportValidity()){$('rescheduleMinutes')?.reportValidity();return}try{await api(`/jobs/${jobId}/schedule`,'PUT',Object.fromEntries(new FormData(ev.target)));closeModal();toast('Time and duration request sent. The other person must approve.')}catch(err){toast(err.message)}};
 }catch(err){toast(err.message)}
}
async function showGoogleSettings(){try{const st=await api('/google/status');modal(`${modalHead('Google Calendar','CALENDAR CONNECTION')}<p>When both users connect their own Google accounts, HomeTask will create or update calendar events for confirmed appointments. Google Calendar connection requires one-time Google Cloud OAuth setup by your team.</p><div class="inline-note">${st.connected?'Your calendar is connected.':st.configured?'Not connected yet.':'Google OAuth credentials are not configured on the server. See README for setup.'}</div><div class="hero-actions">${st.configured&&!st.connected?'<button id="connectCalendar" class="btn btn-primary">Connect Google Calendar</button>':''}${st.connected?'<button id="disconnectCalendar" class="btn btn-secondary">Disconnect</button>':''}</div><p class="mock-meta">Without OAuth, you can still add a confirmed appointment using the Google Calendar link after hiring.</p>`);
 if($('connectCalendar'))$('connectCalendar').onclick=()=>window.location.href='/api/google/connect';
 if($('disconnectCalendar'))$('disconnectCalendar').onclick=async()=>{await api('/google/disconnect','DELETE');closeModal();toast('Disconnected. Existing Google events remain in your calendar.')};
 }catch(err){toast(err.message)}}

let toastTimer;
function toast(msg){const t=$('toast');t.textContent=msg;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),3300)}
let ht154PendingRequests=0,ht154BusyTimer=null;
function ht154SetBusy(active){
 const bar=$('ht154GlobalProgress');if(!bar)return;
 ht154PendingRequests=Math.max(0,ht154PendingRequests+(active?1:-1));
 clearTimeout(ht154BusyTimer);
 if(active&&ht154PendingRequests)ht154BusyTimer=setTimeout(()=>{if(ht154PendingRequests)bar.hidden=false},240);
 else if(!ht154PendingRequests)bar.hidden=true;
}
async function api(path,method='GET',body){
 const opts={method,headers:{}};
 if(body!==undefined){opts.headers['Content-Type']='application/json';opts.body=JSON.stringify(body)}
 ht154SetBusy(true);
 try{
  const response=await fetch('/api'+path,opts);let result;
  try{result=await response.json()}catch{throw Error('Server did not return a response.')}
  if(!response.ok)throw Error(typeof result.detail==='string'?result.detail:'Something went wrong.');
  return result;
 }finally{ht154SetBusy(false)}
}
async function refresh(){
 try{state.me=(await api('/me')).user}catch{state.me=null}
 try{state.jobs=(await api('/jobs')).jobs}catch{state.jobs=[]}
 try{state.siteSettings=await api('/site-settings')}catch{state.siteSettings={}}
 try{state.offers=state.me?(await api('/my-offers')).offers:[]}catch{state.offers=[]}
 if(state.me){
  try{state.imageFraming=await api('/profile/image-framing')}catch{state.imageFraming={banner_x:50,banner_y:50,banner_zoom:100,avatar_x:50,avatar_y:50,avatar_zoom:100}}
  try{const r=await api('/reviews/mine');state.reviews=r.reviews||[];state.deletedReviews=r.deleted||[]}catch{state.reviews=[];state.deletedReviews=[]}
  try{state.invitations=(await api('/invitations')).invitations||[]}catch{state.invitations=[]}
  try{state.savedJobIds=(await api('/saved-jobs')).job_ids||[]}catch{state.savedJobIds=[]}
  try{state.blockedUsers=(await api('/blocks')).users||[]}catch{state.blockedUsers=[]}
  try{state.upcomingJobs=(await api('/upcoming-jobs')).jobs||[]}catch{state.upcomingJobs=[]}
  if(role()==='worker')try{state.workerPreferences=await api('/worker-preferences')}catch{state.workerPreferences={categories:[],radius_miles:25}}
 }else{state.reviews=[];state.deletedReviews=[];state.invitations=[];state.savedJobIds=[];state.blockedUsers=[];state.upcomingJobs=[];state.jobDraft=null;state.jobDraftLoaded=false}
}
async function pollNotifications(showNew=true){
 if(notificationState.polling||!state.me)return;
 notificationState.polling=true;
 try{
  const data=await api('/notifications');
  notificationState.items=data.notifications||[];
  notificationState.unread=data.unread||0;
  // Reflect an administrator's decision in the account menu without a full-page reload.
  if(state.me){
   const decision=notificationState.items.find(n=>['verification_approved','verification_denied','verification_revoked'].includes(n.kind));
   if(decision){state.me.profile_verified=decision.kind==='verification_approved'?1:0;}
   const verificationLink=document.querySelector('#profileMenu [data-profile-link="verification"]');
   if(verificationLink)verificationLink.textContent=state.me.profile_verified?'Profile reviewed':'Get profile reviewed';
  }
  paintNotificationBell();
  // First poll is a baseline: old unread activity belongs in the bell inbox, not a popup.
  if(!notificationState.primed){
   notificationState.items.forEach(n=>notificationState.seenPopup.add(n.id));
   notificationState.primed=true;
   return;
  }
  const now=Date.now();
  const candidates=notificationState.items.filter(n=>!n.read_at&&!notificationState.seenPopup.has(n.id));
  // Mark as seen even in a background tab: returning later must not trigger an old alert.
  candidates.forEach(n=>notificationState.seenPopup.add(n.id));
  const fresh=candidates.filter(n=>{
   const created=Number(n.created_at)*1000;
   return Number.isFinite(created)&&created>0&&now-created<=90000&&created-now<=30000;
  });
  if(showNew&&fresh.length&&document.visibilityState==='visible'&&document.hasFocus()&&!$('modalBackdrop')&&now-notificationState.lastBannerAt>=12000){
   notificationState.lastBannerAt=now;
   showNotificationAlert(fresh[fresh.length-1],fresh.length);
  }
 }catch(err){/* Notification delivery is non-blocking; the inbox will retry. */}
 finally{notificationState.polling=false;}
}
function paintNotificationBell(){
 const bell=$('notificationBell'),badge=$('notificationBadge');
 if(!bell||!badge)return;
 bell.hidden=!state.me;
 badge.hidden=!notificationState.unread;
 badge.textContent=notificationState.unread>99?'99+':String(notificationState.unread);
}
function notificationActions(n){
 if(n.kind==='reschedule')return `<button class="btn btn-primary" id="notificationReview">Review and approve time</button>`;
 if(n.kind==='offer'||n.kind==='counteroffer')return `<button class="btn btn-primary" id="notificationReview">Compare offers</button>`;
 if(n.kind==='customer_counter')return `<button class="btn btn-primary" id="notificationReview">Review counteroffer</button>`;
 if(n.kind==='message')return `<button class="btn btn-primary" id="notificationReview">Open messages</button>`;
 if(n.kind==='invitation')return `<button class="btn btn-primary" id="notificationReview">View job request</button>`;
 if(n.kind==='admin_verification')return `<button class="btn btn-primary" id="notificationReview">Review requests</button>`;
 if(n.kind==='admin_report')return `<button class="btn btn-primary" id="notificationReview">Review report</button>`;
 if(n.kind?.startsWith('verification_'))return `<button class="btn btn-primary" id="notificationReview">View verification status</button>`;
 if(n.kind?.startsWith('report_')||n.kind==='account_status')return `<button class="btn btn-primary" id="notificationReview">View details</button>`;
 return `<button class="btn btn-primary" id="notificationReview">View job</button>`;
}
const actionNotifications=new Set(['message','reschedule','offer','counteroffer','customer_counter','invitation','completion_requested','completion_changes','admin_verification','admin_report']);
function isActionNotification(n){return actionNotifications.has(n.kind)}
async function dismissNotification(id){
 try{
  await api(`/notifications/${id}/dismiss`,'POST');notificationState.seenPopup.add(id);
  await pollNotifications(false);return true;
 }catch(err){toast(err.message);return false}
}
function closeNotificationBanner(){
 clearTimeout(notificationState.bannerTimer);
 notificationState.bannerTimer=null;
 if(notificationState.banner){notificationState.banner.remove();notificationState.banner=null;}
}
function notificationBannerIcon(n){
 const k=String(n?.kind||'');
 return k.includes('message')?'message':k.includes('offer')||k.includes('counter')?'wallet':k.includes('schedule')||k.includes('reschedule')?'calendar':k.includes('verification')?'check':'bell';
}
function showNotificationAlert(n,count=1){
 closeNotificationBanner();
 const banner=document.createElement('aside');
 banner.className='ht1542-notification-banner';
 banner.setAttribute('role','status');
 banner.setAttribute('aria-label','New HomeTask notification');
 const grouped=count>1;
 banner.innerHTML=`<span class="ht1542-notification-icon" aria-hidden="true">${icon(grouped?'bell':notificationBannerIcon(n),21)}</span><div class="ht1542-notification-copy"><span class="ht1542-notification-eyebrow">HOMETASK UPDATE</span><strong>${grouped?`${count} new notifications`:e(n.title)}</strong><p>${grouped?'You have new activity. Open your inbox to review it.':e(n.body)}</p><button type="button" class="ht1542-notification-view">${grouped?'View inbox':'View details'} →</button></div><button type="button" class="ht1542-notification-close" aria-label="Close notification">×</button>`;
 document.body.appendChild(banner);
 notificationState.banner=banner;
 const schedule=()=>{clearTimeout(notificationState.bannerTimer);notificationState.bannerTimer=setTimeout(closeNotificationBanner,7000)};
 banner.querySelector('.ht1542-notification-close').onclick=closeNotificationBanner;
 banner.querySelector('.ht1542-notification-view').onclick=()=>{closeNotificationBanner();if(grouped)showNotificationCenter();else openNotification(n.id)};
 banner.addEventListener('mouseenter',()=>clearTimeout(notificationState.bannerTimer));
 banner.addEventListener('mouseleave',schedule);
 banner.addEventListener('focusin',()=>clearTimeout(notificationState.bannerTimer));
 banner.addEventListener('focusout',()=>{if(!banner.contains(document.activeElement))schedule()});
 schedule();
}
async function openNotification(id){
 const n=notificationState.items.find(x=>x.id===id);
 if(!n)return;
 try{await api(`/notifications/${id}/read`,'POST');await pollNotifications(false)}catch(err){toast(err.message);return;}
 closeModal();
 if(n.kind==='reschedule')await showReschedule(n.job_id);
 else if((n.kind==='offer'||n.kind==='counteroffer')&&role()==='customer')await openJob(n.job_id,'worker');
 else if(n.kind==='message'){
  nav('inbox');await loadConversations();
  const conv=state.conversations.find(c=>c.job_id===n.job_id);
  if(conv)await openChatConversation(conv);
} 
 else if(n.kind==='customer_counter'){await openJob(n.job_id);} 
 else if(n.kind==='admin_report'){state.adminTab='reports';nav('admin');}
 else if(n.kind==='admin_verification'){state.adminTab='verifications';nav('admin');}
 else if(n.kind?.startsWith('report_')||n.kind==='account_status'){nav('settings');}
 else if(n.kind?.startsWith('verification_')){await refresh();nav('verification');}
 else if(n.job_id)await openJob(n.job_id);
 else nav('home');
}
function showNotificationCenter(filter='all'){
 if(!state.me)return showAuth();
 const segments=[['all','All'],['unread','Unread'],['Messages','Messages'],['Offers','Offers'],['Appointments','Scheduling'],['Jobs & updates','Tasks']];
 const shown=notificationState.items.filter(n=>filter==='all'||(filter==='unread'?!n.read_at:notificationCategory(n)===filter));
 modal(`${modalHead('Notifications','YOUR INBOX')}<div class="ht154-notification-filters" role="group" aria-label="Filter notifications">${segments.map(([key,label])=>`<button type="button" class="mini-btn ${key===filter?'selected':''}" data-ht154-notify-filter="${e(key)}" aria-pressed="${key===filter}">${e(label)}</button>`).join('')}</div>${notificationState.unread?'<button type="button" class="mini-btn ht154-mark-read" id="ht154MarkRead">Mark all as read</button>':''}<div class="notification-list">${shown.length?shown.map((n,i,arr)=>`${(i===0||new Date(n.created_at*1000).toDateString()!==new Date(arr[i-1].created_at*1000).toDateString())?`<h4 class="notification-group-title">${e(new Date(n.created_at*1000).toLocaleDateString(undefined,{weekday:'long',month:'short',day:'numeric'}))}</h4>`:''}<div class="notification-row" ${n.read_at?'':'notification-unread'}"><button class="notification-item" data-notification="${n.id}"><span class="notification-type">${e(notificationCategory(n))}</span><strong>${e(n.title)}</strong><small>${e(n.body)}</small><span>${new Date(n.created_at*1000).toLocaleString()}</span><span class="ht1544-notify-destination">${n.kind==='message'?'Open conversation':n.kind==='admin_report'?'Review report':n.kind==='admin_verification'?'Review verification':n.job_id?'Open related task →':'View account update →'}</span></button><button class="mini-btn notification-dismiss" data-notification-dismiss="${n.id}" aria-label="Dismiss ${e(n.title)}">Dismiss</button></div>`).join(''):'<p class="inline-note">No notifications. New offers, reviews and account updates appear here.</p>'}</div>`);
 if($('ht154MarkRead'))$('ht154MarkRead').onclick=async()=>{const b=$('ht154MarkRead');b.disabled=true;try{await api('/notifications/read-all','POST');await pollNotifications(false);showNotificationCenter(filter);toast('Notifications marked as read.')}catch(err){toast(err.message);b.disabled=false}};
 document.querySelectorAll('#modalRoot [data-ht154-notify-filter]').forEach(x=>x.onclick=()=>showNotificationCenter(x.dataset.ht154NotifyFilter));
 document.querySelectorAll('#modalRoot [data-notification]').forEach(x=>x.onclick=()=>openNotification(Number(x.dataset.notification)));
 document.querySelectorAll('#modalRoot [data-notification-dismiss]').forEach(x=>x.onclick=async()=>{if(await dismissNotification(Number(x.dataset.notificationDismiss)))showNotificationCenter(filter)});
}
function resetNotificationsForAccount(){closeNotificationBanner();notificationState.items=[];notificationState.unread=0;notificationState.seenPopup.clear();notificationState.primed=false;notificationState.lastBannerAt=0;state.draftItems=[];state.editingDraftId=null;state.jobDraft=null;state.jobDraftLoaded=false;paintNotificationBell()}
const ht154ScrollMemory={};
function ht154RememberScroll(view){if(!view)return;ht154ScrollMemory[view]={windowY:window.scrollY,resultsY:$('jobResults')?.scrollTop||0}}
function ht154RestoreScroll(view){const saved=ht154ScrollMemory[view];if(!saved)return;requestAnimationFrame(()=>{if(state.view!==view)return;window.scrollTo({top:saved.windowY,behavior:'instant'});if($('jobResults'))$('jobResults').scrollTop=saved.resultsY})}
function nav(view){if(view==='saved-jobs'&&state.view!=='saved-jobs')state.ht09SavedViewIds=[...state.savedJobIds];if(state.view==='saved-jobs'&&view!=='saved-jobs')state.ht09SavedViewIds=null;ht154RememberScroll(state.view);if(state.view==='post'&&view!=='post'&&!editedJob){const snapshot=postingDraftSnapshot();if(snapshot)api('/job-draft','PUT',{fields:snapshot}).catch(()=>{});}closeMobileMenu();closeMobileMap();if(view==='worker-availability')view='assignments';if(view==='admin'&&!state.me?.is_admin)return toast('Admin access required.');if(view==='browse')state.browseFeaturedOnly=false;if(view==='inbox'&&state.view!=='inbox'){state.activeConversation=null;state.chatMessages=[];loadConversations();}if(state.me){if(role()==='worker' && (view==='post'||view==='current-offers'))view='browse';if(role()==='customer' && (view==='browse'||view==='offers'||view==='assignments'))view='dashboard';}if(window.jobMap){destroyJobMap();htMapNoAutoFit=false;}state.view=view;if(view!=='task-workspace')state.detail=null;state.partner=null;closeModal();render();if(((view==='post'&&!editedJob)||(view==='saved-drafts'))&&!state.jobDraftLoaded&&state.me)loadPostingDraft();if(view==='saved-drafts')loadSavedTaskDrafts();if(ht154ScrollMemory[view])ht154RestoreScroll(view);else window.scrollTo({top:0,behavior:'instant'});}
function requireLogin(action='continue'){if(state.me)return true;showAuth();toast(`Log in to ${action}.`);return false;}
function customerAction(){if(!requireLogin('post a task'))return;if(role()!=='customer'){toast('Switch to HomeTask to post tasks.');return;}editedJob=null;state.editingDraftId=null;nav('post')}
function isWorkerOffer(j){return j.offers?.find(o=>o.worker_id===state.me?.id)}
function isNestedCardControl(event,card){
 // The card itself may have role=button. Only suppress clicks on INTERACTIVE CHILDREN.
 const nested=event.target?.closest?.('button,a,input,select,textarea,[role="button"]');
 return !!(nested&&nested!==card&&card.contains(nested));
}
function render(){
 if(state.me&&role()==='worker'&&state.view==='appointments')state.view='assignments';
 if(state.view==='home'||state.view==='browse')ensureFeaturedLocation();
 const app=$('app');
 const pages={home,browse,post,dashboard,'current-offers':currentOffersPage,offers:workerOffers,assignments:workerAssignments,inbox,profile,settings:settingsPage,help:helpPage,analytics:analyticsPage,appointments:appointmentsPage,history:historyPage,'my-reviews':myReviewsPage,'public-profile':publicProfilePage,'saved-jobs':savedJobsPage,following:followingPage,'previous-work':previousWorkPage,verification:verificationPage,'verification-admin':verificationAdminPage,admin:adminPage,'account-security':accountSecurityPage,'worker-preferences':workerPreferencesPage,'payment-readiness':paymentReadinessPage,'saved-drafts':savedDraftsPage,'task-workspace':taskWorkspacePage};
 app.innerHTML=(pages[state.view]||home)();
 // 15.13.37: Restore the original Find Jobs search/filter sidebar.
 // No runtime layout patching: layout is owned solely by the stylesheet.
 if(state.view==='browse'){
  const oldFilters=app.querySelector('.browse-page .ht1531-filter-menu');
  if(oldFilters)oldFilters.open=true;
  const columns=app.querySelector('.browse-page .ht152-browse-columns');
  if(columns)columns.setAttribute('data-original-filters','restored-15.13.37');
 }
 document.body.dataset.page=state.view;
 if(window.htLastVisualRoute!==state.view){app.classList.remove('ht-page-enter');void app.offsetWidth;app.classList.add('ht-page-enter');window.htLastVisualRoute=state.view;}

 if(state.view==='dashboard'&&$('ht154CustomerSearch'))$('ht154CustomerSearch').oninput=ev=>{const caret=ev.target.selectionStart;state.ht154CustomerQuery=ev.target.value;render();const next=$('ht154CustomerSearch');if(next){next.focus();try{next.setSelectionRange(caret,caret)}catch{}}};
 if(state.view==='assignments'&&$('ht154AssignmentSearch'))$('ht154AssignmentSearch').oninput=ev=>{const caret=ev.target.selectionStart;state.ht154AssignmentQuery=ev.target.value;render();const next=$('ht154AssignmentSearch');if(next){next.focus();try{next.setSelectionRange(caret,caret)}catch{}}};
 if(state.view==='saved-jobs'){
  document.querySelectorAll('[data-ht1530-saved]').forEach(field=>field.onchange=()=>{state.ht1530SavedFilters={...(state.ht1530SavedFilters||{}),[field.dataset.ht1530Saved]:field.value};render();});
  const clear=$('ht1530ClearSaved');if(clear)clear.onclick=()=>{state.ht1530SavedFilters={};render();};
 }
 if(state.view==='saved-jobs'&&$('ht154SavedSearch'))$('ht154SavedSearch').oninput=ev=>{const input=ev.target,caret=input.selectionStart;state.ht154SavedQuery=input.value;render();const next=$('ht154SavedSearch');if(next){next.focus();try{next.setSelectionRange(caret,caret)}catch{}}};
 if(state.view==='home'&&state.me&&profileCompleteness().percent<100&&!localStorage.getItem(profileSetupReminderKey()))(app.querySelector('.workspace-page > .workspace-hero')||app).insertAdjacentHTML('afterend',`<div class="onboarding-banner" role="region" aria-label="Profile setup reminder"><span>${icon('check',17)} Finish setting up your profile (${profileCompleteness().percent}%)</span><div class="onboarding-banner-actions"><button class="mini-btn" data-view="profile" type="button">Complete profile</button><button class="onboarding-close" id="dismissProfileSetup" type="button" aria-label="Dismiss profile setup reminder" title="Dismiss reminder">&times;</button></div></div>`);
 if(state.view==='home'&&state.siteSettings?.announcement)(app.querySelector('.workspace-page > .workspace-hero')||app).insertAdjacentHTML('afterend',`<div class="site-announcement">${icon('bell',16)} <span>${e(state.siteSettings.announcement)}</span></div>`);
 if(state.view==='help'&&state.siteSettings?.community_guidelines)app.insertAdjacentHTML('beforeend',`<section class="page"><div class="panel"><h3>HomeTask community guidelines</h3><p class="profile-text" style="white-space:pre-wrap">${e(state.siteSettings.community_guidelines)}</p></div></section>`);
 renderWorkspaceChrome();paintNotificationBell();
 if(state.view==='browse'){restoreBrowseInputs();ht142SearchHints();}
 const adminMenu=$('adminMenuBlock');if(adminMenu)adminMenu.hidden=!state.me?.is_admin;
 
 applyHeaderAvatarFraming();
 const profileTrigger=$('profileButton');
 profileTrigger.classList.toggle('avatar',!!state.me);
 profileTrigger.classList.toggle('guest-sign-in',!state.me);
 profileTrigger.textContent='';
 if(state.me){
  profileTrigger.innerHTML=state.me.avatar_data?`<img alt="" src="${e(state.me.avatar_data)}"/>`:state.me.name.trim().split(/\s+/).slice(0,2).map(x=>x[0]).join('').toUpperCase();
  profileTrigger.setAttribute('aria-label','Open account menu');
  profileTrigger.setAttribute('aria-haspopup','menu');
 }else{
  profileTrigger.textContent='Sign in';
  profileTrigger.setAttribute('aria-label','Sign in to HomeTask');
  profileTrigger.removeAttribute('aria-haspopup');
  profileTrigger.setAttribute('aria-expanded','false');
 }
 document.querySelectorAll('[data-switch-role]').forEach(x=>{const selected=x.dataset.switchRole===role();x.classList.toggle('selected',selected);x.setAttribute('aria-current',selected?'true':'false')});
 removeRetiredWeeklyAvailabilityLinks();
 document.querySelectorAll('#profileMenu [data-profile-link]').forEach(b=>{if(b.dataset.profileLink==='history')b.textContent=role()==='customer'?'Task history':'Job history';const workerOnly=['saved-jobs','previous-work','verification'].includes(b.dataset.profileLink);const customerOnly=['following','appointments','saved-drafts'].includes(b.dataset.profileLink);b.style.display=(workerOnly&&role()!=='worker'||customerOnly&&role()!=='customer')?'none':'';if(b.dataset.profileLink==='verification')b.textContent=state.me?.profile_verified?'Profile reviewed':'Get profile reviewed';});
 document.querySelectorAll('[data-view]').forEach(el=>el.onclick=()=>el.dataset.view==='post'?customerAction():nav(el.dataset.view));
 document.querySelectorAll('[data-browse-map]').forEach(el=>el.onclick=()=>{state.mapMode='map';localStorage.setItem('hometask_browse_mode','map');nav('browse');});
 document.querySelectorAll('[data-browse-list]').forEach(el=>el.onclick=()=>{state.mapMode='list';localStorage.setItem('hometask_browse_mode','list');nav('browse');});
 if(!state.me && state.view==='home')bindPublicHomeV113();
 if(state.view==='home'&&state.me&&role()==='worker'){bindWorkerHomeFeaturedRail();ht1543AutoLocate();}
 if(state.view==='browse'&&state.me&&role()==='worker')ht1543AutoLocate();
 if(state.view==='home'&&state.me&&role()==='customer')bindCustomerOffersRail();
 if($('dismissProfileSetup'))$('dismissProfileSetup').onclick=dismissProfileSetupReminder;
 document.querySelectorAll('[data-stat-target]').forEach(el=>el.onclick=()=>openStatTarget(el.dataset.statTarget));
 document.querySelectorAll('[data-offer-filter]').forEach(el=>el.onclick=()=>{state.offerFilter=el.dataset.offerFilter;render()});
 document.querySelectorAll('[data-compact-filter]').forEach(el=>el.onchange=()=>{const mode=el.dataset.compactFilter;if(mode==='job')state.jobFilter=el.value;else if(mode==='offer')state.offerFilter=el.value;else if(mode==='assignment')state.assignmentFilter=el.value;else if(mode==='appointment')state.appointmentFilter=el.value;render()});
 ht138EnhanceDropdowns();
 if(state.view==='browse')ht142BindBudget();
 document.querySelectorAll('[data-job-filter]').forEach(el=>el.onclick=()=>{state.jobFilter=el.dataset.jobFilter;render()});
 document.querySelectorAll('[data-appointment-filter]').forEach(el=>el.onclick=()=>{state.appointmentFilter=el.dataset.appointmentFilter;render()});
 document.querySelectorAll('[data-appointment-schedule]').forEach(el=>el.onclick=ev=>{ev.preventDefault();ev.stopPropagation();showReschedule(Number(el.dataset.appointmentSchedule));});
 document.querySelectorAll('[data-assignment-filter]').forEach(el=>el.onclick=()=>{state.assignmentFilter=el.dataset.assignmentFilter;render()});
 if(state.view==='task-workspace'&&state.detail){const j=state.detail,owner=j.owner_id===state.me?.id;const d=()=>openJob(j.id);if($('workspaceDetails'))$('workspaceDetails').onclick=d;if($('workspaceCompletion'))$('workspaceCompletion').onclick=d;if($('workspaceReschedule'))$('workspaceReschedule').onclick=()=>showReschedule(j.id);if($('workspaceMessage'))$('workspaceMessage').onclick=()=>showMessages(j.id,owner?j.assigned_worker_id:j.owner_id,owner?j.assigned_worker_name:j.owner_name);if($('workspaceApprove'))$('workspaceApprove').onclick=()=>openJob(j.id)}if(state.view==='history')bindHistoryFilters();if(state.view==='saved-drafts'){
 if($('draftStartNew'))$('draftStartNew').onclick=()=>{state.editingDraftId=null;state.jobDraft=null;state.jobDraftLoaded=true;draftSlots=[];editedJob=null;nav('post')};
 document.querySelectorAll('[data-resume-draft]').forEach(b=>b.onclick=()=>{const d=state.draftItems.find(x=>x.id===Number(b.dataset.resumeDraft));if(!d)return;state.editingDraftId=d.id;state.jobDraft=d.fields;state.jobDraftLoaded=true;draftSlots=Array.isArray(d.fields.slots)?d.fields.slots:[];editedJob=null;nav('post')});
 document.querySelectorAll('[data-delete-draft]').forEach(b=>b.onclick=async()=>{if(!confirm('Delete this saved task draft?'))return;try{await api(`/job-drafts/${b.dataset.deleteDraft}`,'DELETE');if(state.editingDraftId===Number(b.dataset.deleteDraft))state.editingDraftId=null;await loadSavedTaskDrafts();toast('Draft deleted.')}catch(err){toast(err.message)}})
 }
 document.querySelectorAll('[data-job]').forEach(el=>el.onclick=()=>openJob(Number(el.dataset.job)));document.querySelectorAll('[data-workspace-job]').forEach(el=>el.onclick=ev=>{ev.stopPropagation();openJob(Number(el.dataset.workspaceJob),'progress')});
 document.querySelectorAll('[data-resubmit]').forEach(el=>el.onclick=()=>resubmitOriginalOffer(Number(el.dataset.resubmit)));
 document.querySelectorAll('[data-person]').forEach(el=>el.onclick=()=>openPublicProfile(Number(el.dataset.person)));
 document.querySelectorAll('[data-cat]').forEach(el=>el.onclick=()=>{nav('browse');$('categoryFilter').value=el.dataset.cat;filterJobs()});
 document.querySelectorAll('[data-edit]').forEach(el=>el.onclick=()=>navEdit(Number(el.dataset.edit)));
 document.querySelectorAll('[data-offers]').forEach(el=>el.onclick=()=>openJob(Number(el.dataset.offers),'worker'));
 document.querySelectorAll('[data-conversation]').forEach(el=>el.onclick=()=>openWorkerConversation(Number(el.dataset.conversation)));
 document.querySelectorAll('[data-card-job]').forEach(el=>{
  const openCard=()=>{const id=Number(el.dataset.cardJob);const j=state.jobs.find(x=>Number(x.id)===id);if(el.closest('.ht131-offers-section,.ht132-current-offer-grid')||el.classList.contains('ht129-customer-task')&&j?.status==='open'&&Number(j.offer_count)>0)openJob(id,'worker');else openJob(id)};
  el.onclick=ev=>{if(isNestedCardControl(ev,el))return;openCard()};
  el.onkeydown=ev=>{if(ev.target===el&&(ev.key==='Enter'||ev.key===' ')){ev.preventDefault();openCard()}};
 });
 document.querySelectorAll('[data-cancel]').forEach(el=>el.onclick=()=>showCancelJob(Number(el.dataset.cancel)));
 document.querySelectorAll('[data-chat-worker]').forEach(el=>el.onclick=()=>{const [jobId,personId]=el.dataset.chatWorker.split(':').map(Number);const job=state.jobs.find(j=>j.id===jobId);if(job&&personId)showMessages(jobId,personId,job.assigned_worker_name)});
 document.querySelectorAll('[data-close]').forEach(el=>el.onclick=()=>showCancelJob(Number(el.dataset.close)));
 document.querySelectorAll('[data-complete]').forEach(el=>el.onclick=()=>completeJob(Number(el.dataset.complete)));
 document.querySelectorAll('[data-review]').forEach(el=>el.onclick=()=>reviewJob(Number(el.dataset.review)));
 document.querySelectorAll('[data-calendar]').forEach(el=>el.onclick=()=>{const j=state.jobs.find(x=>x.id===Number(el.dataset.calendar));if(j)window.open(googleCalendarURL(j),'_blank','noopener')});
 if(state.view==='profile')loadOwnReviews();
 if($('postJobForm')){$('postJobForm').onsubmit=submitJob;if($('saveTaskDraft'))$('saveTaskDraft').onclick=saveTaskDraftNow;initAddressAutocomplete();bindScheduleFields();bindDraftPhotoPreviews();bindPostingDraft();if($('discardJobDraft'))$('discardJobDraft').onclick=async()=>{if(!confirm('Discard your saved posting draft?'))return;try{await api('/job-draft','DELETE');state.jobDraft=null;state.jobDraftLoaded=true;draftSlots=[];htDraftLast='';render();toast('Posting draft discarded.')}catch(err){toast(err.message)}};if(editedJob)loadJobPhotos(editedJob.id,'editPhotos');}
 if($('jobSort'))$('jobSort').onchange=ev=>{state.jobSort=ev.target.value;localStorage.setItem('hometask_job_sort',state.jobSort);filterJobs()};
 document.querySelectorAll('[data-quick-category]').forEach(button=>button.onclick=()=>{
 const val=button.dataset.quickCategory,select=$('categoryFilter');if(!select)return;
 select.value=val;ht142SyncCategoryLabel();
 const wasFeatured=state.browseFeaturedOnly;
 state.browseFeaturedOnly=false;
 filterJobs();
 if(wasFeatured)render();
});
if($('ht151FeaturedQuickFilter'))$('ht151FeaturedQuickFilter').onclick=()=>{
 state.browseFeaturedOnly=true;
 const select=$('categoryFilter');if(select){select.value='';ht142SyncCategoryLabel();}
 filterJobs();render();
};
 if($('listMode'))$('listMode').onclick=()=>setBrowseMode('list');if($('mapMode'))$('mapMode').onclick=()=>setBrowseMode('map');
 if(state.view==='browse'&&state.mapMode==='map'){
  if($('htMapRetry'))$('htMapRetry').onclick=htRetryMap;
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
   if(state.view!=='browse'||state.mapMode!=='map')return;
   initJobMap();
   // Provider maps sometimes calculate their size before the view is painted.
   ht138MapLoadingGuard();
   [120,450,1100].forEach(delay=>setTimeout(()=>{
    if(state.view!=='browse'||state.mapMode!=='map'||!$('jobMap'))return;
    if(htMapProvider==='leaflet')window.jobMap?.invalidateSize?.({pan:false});
    else if(htMapProvider==='google'&&window.google?.maps&&window.jobMap)google.maps.event.trigger(window.jobMap,'resize');
   },delay));
  }));
 }
 if($('profileForm')){$('profileForm').onsubmit=saveProfile;initProfileCityAutocomplete();}
 if($('skillCategory'))bindSkillEditor();
 if($('adjustExistingBanner'))$('adjustExistingBanner').onclick=()=>showExistingImageEditor('banner');
 if($('adjustExistingAvatar'))$('adjustExistingAvatar').onclick=()=>showExistingImageEditor('avatar');
 if($('adjustSettingsAvatar'))$('adjustSettingsAvatar').onclick=()=>showExistingImageEditor('avatar');
 if($('adjustPublicBanner'))$('adjustPublicBanner').onclick=()=>showExistingImageEditor('banner');
 if($('adjustPublicAvatar'))$('adjustPublicAvatar').onclick=()=>showExistingImageEditor('avatar');
 if($('bannerUpload'))$('bannerUpload').onchange=uploadBanner;
 if($('removeBanner'))$('removeBanner').onclick=removeBanner;
 if($('avatarUpload'))$('avatarUpload').onchange=uploadAvatar;
 if($('settingsAvatarUpload'))$('settingsAvatarUpload').onchange=uploadAvatar;
 if($('settingsRemoveAvatar'))$('settingsRemoveAvatar').onclick=removeOwnAvatar;
 if($('removeAvatar'))$('removeAvatar').onclick=removeOwnAvatar;
 if($('settingsCalendar'))$('settingsCalendar').onclick=showGoogleSettings;
 if($('authLink'))$('authLink').onclick=showAuth;
 if($('openSettingsFromProfile'))$('openSettingsFromProfile').onclick=()=>nav('settings');
  
 document.querySelectorAll('[data-clear-empty-filters]').forEach(btn=>btn.onclick=()=>$('resetFilters')?.click());
 if($('resetFilters'))$('resetFilters').onclick=()=>{['searchInput','categoryFilter'].forEach(id=>$(id).value='');state.budgetMin=0;state.budgetMax=0;ht142SyncCategoryLabel();if($('mobileJobSearch'))$('mobileJobSearch').value='';state.browseFilters={query:'',category:'',price:''};state.browseFeaturedOnly=false;ht142BindBudget();state.nearbyCenter=state.personalGeo||null;state.nearbyLabel=state.personalGeo?'Your current location':'';state.nearbyRadius=0;ht1543UserPickedLocation=false;render()};
 if(state.view==='home'&&state.me&&role()==='worker')ht1543AutoLocate();
 if(state.view==='browse'){bindRadiusSearch();ht1543AutoLocate();bindMobileBrowse();if($('hideOwnListings'))$('hideOwnListings').onchange=ev=>{state.hideOwnListings=ev.target.checked;filterJobs()};if($('hideOfferedJobs'))$('hideOfferedJobs').onchange=ev=>{state.hideOfferedJobs=ev.target.checked;filterJobs()};}
 if($('showAllJobs'))$('showAllJobs').onclick=()=>{state.browseFeaturedOnly=false;render();};
 for(const id of ['searchInput','categoryFilter'])if($(id)){ $(id).oninput=filterJobs;$(id).onchange=filterJobs; }
 if(state.view==='analytics'){
  loadEarnings();
  if($('earningsRange'))$('earningsRange').onchange=ev=>{state.earningsRange=ev.target.value;const panel=$('analyticsCustomDates');if(panel)panel.hidden=state.earningsRange!=='custom';loadEarnings()};
  if($('earningsGroup'))$('earningsGroup').onchange=ev=>{state.earningsGroup=ev.target.value;render()};
  if($('earningsApply'))$('earningsApply').onclick=()=>{state.earningsStart=$('earningsStart').value;state.earningsEnd=$('earningsEnd').value;loadEarnings()};
 }
 if(state.view==='inbox')bindChatInterface();
 if($('inviteWorker'))$('inviteWorker').onclick=inviteWorkerFromProfile;
 if($('followWorker'))$('followWorker').onclick=toggleFollowWorker;
 if($('profileMoreToggle'))$('profileMoreToggle').onclick=()=>{
   const menu=$('profileMoreMenu');menu.hidden=!menu.hidden;
   $('profileMoreToggle').setAttribute('aria-expanded',String(!menu.hidden));
 };

 if($('reportProfileAction'))$('reportProfileAction').onclick=()=>{closeProfileMoreMenu();showReportDialog('user',state.publicProfile.id)};
 if($('blockProfileAction'))$('blockProfileAction').onclick=()=>{closeProfileMoreMenu();toggleBlockProfile()};
 document.querySelectorAll('[data-public-tab]').forEach(b=>b.onclick=()=>{state.publicProfileTab=b.dataset.publicTab;render()});document.querySelectorAll('[data-reply-review]').forEach(b=>b.onclick=()=>showReviewReply(Number(b.dataset.replyReview)));if($('ht153PortfolioFilter'))$('ht153PortfolioFilter').onchange=ev=>{state.portfolioCategory=ev.target.value;render()};if($('ht153ReviewSort'))$('ht153ReviewSort').onchange=ev=>{state.profileReviewSort=ev.target.value;render()};document.querySelectorAll('[data-profile-task]').forEach(b=>b.onclick=()=>openJob(Number(b.dataset.profileTask)));
 document.querySelectorAll('[data-verified-photo]').forEach(b=>b.onclick=()=>{const [idx,kind]=b.dataset.verifiedPhoto.split(':');const job=state.publicProfile?.verified_results?.[Number(idx)];if(job)openPhotoLightbox(kind==='before'?job.before_photo:job.after_photo)});
 document.querySelectorAll('[data-public-photo]').forEach(b=>b.onclick=()=>{const p=state.publicProfile?.portfolio?.find(x=>x.id===Number(b.dataset.publicPhoto));if(p)openPhotoLightbox(p.photo_data)});
 document.querySelectorAll('[data-review-photo]').forEach(b=>b.onclick=()=>openPhotoLightbox(b.dataset.reviewPhoto));
 if($('backFromProfile'))$('backFromProfile').onclick=()=>nav(state.returnView||'dashboard');
 if(state.view==='my-reviews')bindMyReviews();
 document.querySelectorAll('[data-my-review-photo]').forEach(b=>b.onclick=()=>{const r=state.reviews.find(x=>x.id===Number(b.dataset.myReviewPhoto));if(r)openPhotoLightbox(r.photo_data)});
 if(state.view==='saved-jobs')bindSavedJobs();
 if(state.view==='following')loadFollowing();
 if(state.view==='previous-work')loadPreviousWork();
 
 if(state.view==='verification')loadVerification();
 if(state.view==='verification-admin')loadVerificationAdmin();
 if(state.view==='admin')loadAdminTab();
 if(state.view==='account-security')bindAccountSecurity();
 if(state.view==='worker-preferences')bindWorkerPreferences();
 if(state.view==='payment-readiness'){loadPaymentReadiness();loadSandboxStatus();if(role()==='worker')loadWorkerConnectStatus();}
 document.querySelectorAll('[data-save-job]').forEach(el=>el.onclick=ev=>{ev.stopPropagation();toggleSavedJob(Number(el.dataset.saveJob))});
 document.querySelectorAll('[data-job-finished]').forEach(el=>el.onclick=ev=>{ev.stopPropagation();requestWorkFinished(Number(el.dataset.jobFinished))});
 document.querySelectorAll('[data-job-changes]').forEach(el=>el.onclick=ev=>{ev.stopPropagation();requestWorkChanges(Number(el.dataset.jobChanges))});

 setupMobileJobWizard();
 document.querySelectorAll('[data-counter-response]').forEach(x=>x.onclick=()=>{const [id,yes]=x.dataset.counterResponse.split(':');respondCustomerCounter(Number(id),yes==='yes')});
}
function renderWorkspaceChrome(){
 const mode=activeWorkspace();
 document.body.dataset.workspace=mode;
 const links=mode==='customer'?[['home','Home'],['dashboard','My tasks'],['post','Post a task'],['appointments','Appointments'],['following','Following'],['inbox','Messages']]:mode==='worker'?[['home','Home'],['browse','Find jobs'],['saved-jobs','Saved jobs'],['offers','My offers'],['assignments','My assignments'],['inbox','Messages']]:[['home','Home'],['browse','Explore jobs']];
 if(mode==='worker'||mode==='customer'){document.querySelectorAll('#profileMenu [data-switch-role="worker"]').forEach(button=>{button.textContent='HomeTasker';});}
 const navEl=document.querySelector('.desktop-nav');
 navEl.innerHTML=links.map(([v,label])=>`<button data-view="${v}" class="${(state.view===v||(v==='dashboard'&&state.view==='current-offers'))?'nav-active':''} ${v==='home'?'nav-house-home':''}" ${v==='home'?'aria-label="Home" title="Home"':''}>${v==='home'?'<img src="/assets/logo-1-icon.png" alt=""/>':e(label)}</button>`).join('');
 document.querySelector('.brand').innerHTML=mode==='worker'?`<img class="ht1549-worker-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA34AAACoCAYAAAC/pjy7AAEAAElEQVR42uy9d6BtV1Uu/o0x197nnNvvTe+EJBQTpAr8QEWaKIhgQfTJAxtgQ4ooUjSEItIE7CiCiD416BPBjhpFBfQFVEhQQ4kJhCSk3H5P2WuO8ftjljXmXGuf228Ka+Dx5p57zt5rrzXnmKN84/uA0UYbbbTRRhtttNFGG2200UYbbbTRRhtttNFGG2200UYbbbTRRhtttNFGG2200UYbbbTRRhtttNFGG2200UYbbbTRRhtttNFGG2200UYbbbTRRhtttNFGG2200UYbbbTRRhtttNFGG2200UYbbbTRRhtttNFGG2200UYbbbTRRhtttNFGG2200UYbbbTRRhtttNFGG2200UYbbbTRRhtttNFGG2200UYbbbTRRhtttNFGG2200UYbbbTRRhtttNFGG2200UYbbbTRRhtttNFGG2200UYbbbTRRhtttNFGG2200UYbbbTRRhtttNFGG2200UYbbbTRRhtttNFGG2200UYbbbTRRhtttNFGG2200UY7crv88svdlVdeOVFVN96N0Ua7cxnd2S7o2muvXdy0adM9lpaWzp84d5YSbWRm37btbbPZ7HPM/D+bN2++eXx0o4022mijjTbaaHesXXXVVdNzzz33ngsLCw8G8AARuSczL4qgJdJbReS6tm3/Y21t7cqTTz75hvGOjTbaaNi9e/e9V1YO/ORsNvtQ27a3tW07U2Mior71+9t2du3a2tp7D+zb98xrr7329PHOjTbaaKONNtpoo51Yu+66687cv3//81ZXV69YW1u7XUR0nrXe+7XZ7AsHDhz4zVtuueUh490bbbQvY8exvH/5jWtrazcXSZ73ol69eu/D//M9j7K6uvpfu3bt+uE///M/XwAAVaX0dSjvfbg/P9poo4022mijjfZlbnzrrbd+/+rq6jU5sWtbnc1m4n0rXr2oV/Hei2+9eO9927Y5hpvNZruWl5df/4nrrts+3srRRvsysl27dj1+Npt9QlXVe69t2/q2bb36nPKFPzX/l2/bVtpZ+EpJ4r59+3//pptuOs0mc4eT+I1PYrTRRhtttNFGG+0gcdM11yzs37//zW3belXVdjbzs9nMp/itbVuJhfuQ+MXkL8Z0ol596gyura1dccstt9x7vKujjfZlYLt37/6e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" alt="HomeTasker" decoding="async" />`:`<img class="brand-wordmark-single" src="/assets/logo-1-wordmark.png?v=1413" alt="HomeTask" />`;
 // Portal identity is a presentation cue, not a separate navigation system.
 // It follows the existing workspace role and is hidden for signed-out visitors.
 let identity=document.getElementById('ht159WorkspaceIdentity');
 if(!identity){identity=document.createElement('div');identity.id='ht159WorkspaceIdentity';identity.className='ht159-workspace-identity';identity.setAttribute('aria-label','Current workspace');document.querySelector('.topbar').after(identity)}
 identity.hidden=mode==='guest';
 if(mode!=='guest')identity.innerHTML=mode==='worker'
  ? `<div class="ht159-identity-inner"><span class="ht159-role-dot" aria-hidden="true"></span><strong>HOMETASKER</strong><span class="ht159-identity-sep" aria-hidden="true"></span><span>Find jobs <span aria-hidden="true">·</span> Send offers <span aria-hidden="true">·</span> Manage assignments</span><span class="ht159-identity-edge">WORKSPACE FOR EARNING</span></div>`
  : `<div class="ht159-identity-inner"><span class="ht159-role-dot" aria-hidden="true"></span><strong>HOMETASK</strong><span class="ht159-identity-sep" aria-hidden="true"></span><span>Post tasks <span aria-hidden="true">·</span> Compare offers <span aria-hidden="true">·</span> Get help</span><span class="ht159-identity-edge">YOUR HOME, MADE SIMPLE</span></div>`;

 
 let mobile=document.getElementById('mobileWorkspaceNav');
 if(!mobile){mobile=document.createElement('div');mobile.id='mobileWorkspaceNav';mobile.className='mobile-workspace-nav';document.querySelector('.topbar').after(mobile)}
 mobile.innerHTML=links.map(([v,label])=>`<button data-view="${v}" class="${(state.view===v||(v==='dashboard'&&state.view==='current-offers'))?'selected':''}">${label}</button>`).join('');
 document.querySelectorAll('.desktop-nav [data-view],.mobile-workspace-nav [data-view]').forEach(el=>el.onclick=()=>el.dataset.view==='post'?customerAction():nav(el.dataset.view));
 renderMobileNavigation();
}
let welcomePhraseIndex=0;
const firstName=()=>String(state.me?.name||'there').trim().split(/\s+/)[0]||'there';
function hometaskCalendar(now=new Date()){
 const parts=new Intl.DateTimeFormat('en-US',{timeZone:'America/New_York',year:'numeric',month:'numeric',day:'numeric',weekday:'long',hour:'numeric',hourCycle:'h23'}).formatToParts(now);
 const part=k=>parts.find(x=>x.type===k)?.value;
 return {year:Number(part('year')),month:Number(part('month')),day:Number(part('day')),weekday:part('weekday'),hour:Number(part('hour'))};
}
function hometaskHoliday(d){
 const {year:y,month:m,day,weekday}=d;
 const monthLastDay=new Date(Date.UTC(y,m,0)).getUTCDate();
 const isNth=(dayOfWeek,n)=>weekday===dayOfWeek&&Math.ceil(day/7)===n;
 const isLast=dayOfWeek=>weekday===dayOfWeek&&day+7>monthLastDay;
 if(m===1&&day===1)return 'newyear';
 if(m===1&&isNth('Monday',3))return 'mlk';
 if(m===2&&day===14)return 'valentines';
 if(m===3&&day===17)return 'stpatricks';
 if(m===4&&day===22)return 'earthday';
 if(m===5&&isNth('Sunday',2))return 'mothers';
 if(m===5&&isLast('Monday'))return 'memorial';
 if(m===6&&isNth('Sunday',3))return 'fathers';
 if(m===7&&day===4)return 'july4';
 if(m===9&&isNth('Monday',1))return 'labor';
 if(m===10&&day===31)return 'halloween';
 if(m===11&&day===11)return 'veterans';
 if(m===11&&isNth('Thursday',4))return 'thanksgiving';
 if(m===11&&weekday==='Saturday'&&day>=24&&day<=30)return 'smallbusiness';
 if(m===12&&day===24)return 'christmaseve';
 if(m===12&&day===25)return 'christmas';
 if(m===12&&day===31)return 'newyearseve';
 return null;
}
function greetingPhrases(worker,name,date=hometaskCalendar()){
 const regular=worker?[
  `Find your next job, ${name}.`,`Your next opportunity, ${name}.`,`Get to work, ${name}.`,
  `Ready to make it happen, ${name}?`,`Great work starts here, ${name}.`,
  `Let's find your next project, ${name}.`,`Bring your skills to the neighborhood, ${name}.`,
  `Your next client could be nearby, ${name}.`,`Turn your skills into opportunity, ${name}.`,
  `Make today count, ${name}.`
 ]:[
  `Get the job done, ${name}.`,`Your next project, ${name}.`,`Let's get it done, ${name}.`,
  `Find the right help, ${name}.`,`Make your to-do list shorter, ${name}.`,
  `Your home, your next project, ${name}.`,`A little help goes a long way, ${name}.`,
  `What can we tackle today, ${name}?`,`More done, less stress, ${name}.`,
  `Let's make progress, ${name}.`
 ];
 const seasonal={
  newyear:['Happy New Year, NAME!','New year, new possibilities, NAME.'],
  mlk:['A day to serve and make a difference, NAME.'],
  valentines:['Spread a little kindness today, NAME.'],
  stpatricks:['A little luck and a lot of hard work, NAME.'],
  earthday:['Happy Earth Day, NAME!','Make a difference close to home, NAME.'],
  mothers:["Happy Mother's Day, NAME!"],
  memorial:['Wishing you a meaningful Memorial Day, NAME.'],
  fathers:["Happy Father's Day, NAME!"],
  july4:['Happy Fourth of July, NAME!'],
  labor:['Happy Labor Day, NAME!','Celebrating the work that makes it happen, NAME.'],
  halloween:['Happy Halloween, NAME!','No tricks, just tasks, NAME.'],
  veterans:['Honoring those who served today, NAME.'],
  thanksgiving:['Happy Thanksgiving, NAME!','Grateful for our community, NAME.'],
  smallbusiness:['Support your local community today, NAME.'],
  christmaseve:['Happy Christmas Eve, NAME!'],
  christmas:['Merry Christmas, NAME!','Wishing you a wonderful holiday, NAME.'],
  newyearseve:["Here's to a great year ahead, NAME!"]
 };
 const holiday=seasonal[hometaskHoliday(date)]||[];
 const special=holiday.map(phrase=>phrase.replaceAll('NAME',name));
 const daypart=date.hour<12?'Good morning':date.hour<17?'Good afternoon':'Good evening';
 special.push(`${daypart}, ${name}!`);
 if(date.weekday==='Friday')special.push(`Happy Friday, ${name}!`);
 if(date.weekday==='Monday')special.push(`Fresh week, fresh start, ${name}.`);
 if(date.weekday==='Saturday'||date.weekday==='Sunday')special.push(`Enjoy your weekend, ${name}!`);
 return [...special,...regular];
}
function welcomeHeadline(){
 const name=e(firstName());
 const phrases=greetingPhrases(role()==='worker',name);
 return phrases[welcomePhraseIndex%phrases.length];
}
function rotateWelcomeHeadline(){
 if(state.view!=='home'||!state.me)return;
 const title=$('welcomeHeadline'); if(!title)return;
 welcomePhraseIndex++;title.classList.remove('greeting-reveal');void title.offsetWidth;
 title.innerHTML=welcomeHeadline();title.classList.add('greeting-reveal');
}
function workspaceHeader(kicker,title,desc,action='',image=''){
 const workerMode=role()==='worker';
 const jobs=Array.isArray(state.jobs)?state.jobs:[];
 const offers=Array.isArray(state.offers)?state.offers:[];
 const workerJobs=jobs.filter(j=>Number(j.assigned_worker_id)===Number(state.me?.id));
 const customerJobs=jobs.filter(j=>mine(j));
 const chips=workerMode
  ? [
    ['Featured jobs', featuredJobs().length, 'Recommended jobs for you'],
    ['Active offers', offers.filter(o=>o.status==='open'&&o.decision!=='rejected').length, 'Bids currently in play'],
    ['Booked work', workerJobs.filter(j=>j.status==='accepted').length, 'Current assignments']
   ]
  : [
    ['Open tasks', customerJobs.filter(j=>j.status==='open').length, 'Tasks still receiving offers'],
    ['Offers received', currentOfferTotal(), 'Across your active listings'],
    ['Appointments', customerJobs.filter(j=>j.status==='accepted'&&j.scheduled_start).length, 'Scheduled jobs coming up']
   ];
 const badge=workerMode?'WORKSPACE FOR EARNING':'YOUR HOME, MADE SIMPLE';
 const panelTitle=workerMode?'Marketplace snapshot':'Project snapshot';
 return `<div class="workspace-hero workspace-hero-${workerMode?'worker':'customer'}">
   <div class="workspace-hero-copy">
     <span class="workspace-eyebrow">${kicker}</span>
     <h1>${title}</h1>
     <p>${desc}</p>
     ${action?`<div class="hero-actions">${action}</div>`:''}
   </div>
   <div class="workspace-hero-art" ${workerMode?'aria-hidden="true"':''}>
     <div class="workspace-hero-badge">${badge}</div>
     <div class="workspace-hero-panel">
       <div class="workspace-hero-panel-top">
         <div class="workspace-hero-icon"><img src="${workerMode?'/assets/logo-2-icon.png':'/assets/logo-1-icon.png?v=1413'}" alt="" /></div>
         <div class="workspace-hero-panel-copy">
           <span>${panelTitle}</span>
         </div>
       </div>
       <div class="workspace-hero-chip-grid">${chips.map(([label,value,sub],i)=>workerMode?`<button type="button" class="workspace-hero-chip ht132-worker-stat" data-stat-target="${['browse:featured','offers','assignments'][i]}" aria-label="View ${e(label)}"><span>${label}</span><strong>${value}</strong><small>${sub}</small></button>`:`<button type="button" class="workspace-hero-chip ht131-hero-chip-button" data-stat-target="${['dashboard:open','current-offers','appointments:scheduled'][i]}" aria-label="View ${e(label)}"><span>${label}</span><strong>${value}</strong><small>${sub}</small></button>`).join('')}</div>
     </div>
   </div>
 </div>`;
}
function currentOfferJobs(){
 return state.jobs.filter(j=>mine(j)&&j.status==='open'&&Number(j.offer_count||0)>0)
   .sort((a,b)=>Number(b.created_at||0)-Number(a.created_at||0));
}
function currentOfferTotal(){return currentOfferJobs().reduce((sum,j)=>sum+Number(j.offer_count||0),0)}
function currentOffersPage(){
 if(!state.me||role()!=='customer')return signInPrompt();
 const jobs=currentOfferJobs(),total=currentOfferTotal();
 return `<section class="page workspace-page"><div class="page-title"><span class="kicker">HOMETASK</span><h1>Current offers</h1><p>${total} active offer${total===1?'':'s'} across ${jobs.length} open task${jobs.length===1?'':'s'}. Select a task to compare workers, proposed prices, and appointment times.</p></div>
 <div class="current-offers-toolbar"><button class="btn btn-secondary" data-view="dashboard">← Back to My Tasks</button><span class="tag">Only tasks still accepting offers</span></div>
 <div class="panel"><div class="section-head"><div><span class="kicker">OPEN LISTINGS</span><h3>Offers grouped by task</h3></div><span class="status status-offers">${total} current</span></div>
 <div class="ht132-current-offer-grid">${jobs.length?jobs.map(j=>`<article class="dashboard-job offer-job-row ht132-current-offer-card interactive-job-card" data-card-job="${j.id}" role="button" tabindex="0">${compactJobPhoto(j)}<div class="dashboard-job-head"><div><h3>${e(j.title)}</h3><div class="mock-meta">${e(j.location)} · ${e(j.category)} · Budget ${dollars(j.budget)}</div></div><span class="ht132-offer-count">${icon('message',17)} <strong>${j.offer_count}</strong> offer${j.offer_count===1?'':'s'}</span></div><div class="mini-actions"><button class="btn btn-primary" data-offers="${j.id}">View ${j.offer_count} offer${j.offer_count===1?'':'s'} →</button><button class="mini-btn" data-job="${j.id}">Task details</button></div></article>`).join(''):`<div class="empty"><h3>No current offers</h3><p>New worker offers on your open tasks will appear here. Offers from completed, accepted, or closed jobs are not included.</p><button class="btn btn-secondary" data-view="dashboard">Back to My Tasks</button></div>`}</div></div></section>`;
}
function statTiles(items){return `<div class="stats workspace-stats">${items.map(([label,value,ico,target])=>target?`<button type="button" class="stat stat-clickable" data-stat-target="${e(target)}" aria-label="View ${e(label)}"><span>${icon(ico||'chart',17)} ${e(label)}</span><strong>${value}</strong></button>`:`<div class="stat"><span>${icon(ico||'chart',17)} ${e(label)}</span><strong>${value}</strong></div>`).join('')}</div>`}
function openStatTarget(target){
 const [view,filter]=String(target).split(':');
 if(view==='dashboard')state.jobFilter=filter||'all';
 if(view==='assignments')state.assignmentFilter=filter||'booked';
 if(view==='appointments')state.appointmentFilter=filter||'all';
 if(view==='offers')state.offerFilter=filter||'current';
 if(view==='browse'&&filter==='featured'){
  nav('browse');state.browseFeaturedOnly=true;state.browseFilters.category='';render();return;
 }
 nav(view);
}
function jobProgressPanel(j){
 // Task progress is private to the hired parties. The current step must be
 // derived from the same lifecycle as the status badge, not the first incomplete item.
 const viewerId=state.me?.id;
 const isParticipant=viewerId!=null&&(Number(viewerId)===Number(j.owner_id)||Number(viewerId)===Number(j.assigned_worker_id));
 if(!isParticipant||!j.accepted_offer_id||!j.assigned_worker_id)return '';
 const statusCode=j.status,finished=!!j.completion_requested_at;
 const stage=ht142TaskStage(j);
 const labels=['Posted','Hired','In progress','Work finished','Confirmed'];
 const currentIndex=stage==='completed'?4:stage==='review'?3:stage==='progress'?2:1;
 // The last stage is complete only after the existing confirmation workflow.
 const steps=labels.map((label,i)=>({label,done:stage==='completed'||i<currentIndex,current:stage!=='completed'&&i===currentIndex}));
 return `<section class="ht-progress ht154-progress" aria-label="Private task progress"><div class="ht-progress-title"><strong>${role()==='customer'?'Task progress':'Job progress'}</strong><span class="status ${statusClass(j)}">${status(j)}</span></div><ol class="ht-progress-steps ht154-progress-steps">${steps.map((step,i)=>`<li class="${step.done?'is-done':''} ${step.current?'is-current':''}" aria-label="${step.label}: ${step.done?'complete':step.current?'current':'pending'}" ${step.current?'aria-current="step"':''}><span class="ht-progress-node"><span class="ht-progress-dot">${step.done?icon('check',15):i+1}</span>${i<steps.length-1?`<span class="ht154-dot-connector ${steps[i+1].done?'is-filled':''}" aria-hidden="true"></span>`:''}</span><span class="ht154-stage-label">${step.label}</span></li>`).join('')}</ol>${statusCode==='cancelled'?'<p class="mock-meta">This job was cancelled. Its previous progress is preserved for reference.</p>':finished&&statusCode==='accepted'?'<p class="mock-meta">The worker marked the work finished. Waiting for customer confirmation or requested changes.</p>':''}</section>`;
}
function upcomingJobStrip(forRole){
 const entries=(state.upcomingJobs||[]).filter(j=>j.my_role===forRole).slice(0,3);
 if(!entries.length)return '';
 return `<section class="ht-upcoming panel"><div class="section-head"><div><span class="kicker">YOUR SCHEDULE</span><h3>Coming up</h3></div><span class="tag">${entries.length} upcoming</span></div><div class="ht-upcoming-grid">${entries.map(j=>`<button class="ht-upcoming-item" type="button" data-job="${j.id}"><span>${icon('calendar',19)} <strong>${e(j.title)}</strong></span><small>${e(schedulePretty(j.start))} Eastern · ${e(durationText(j.duration_minutes))}</small><em>${j.hours_away<=2?'Soon':j.hours_away<=24?'Within 24 hours':'Scheduled'}</em></button>`).join('')}</div><p class="mock-meta">In-app reminders are generated while HomeTask is open or when you visit the site. These are not phone push notifications.</p></section>`;
}
function v15NextActions(kind){
 if(!state.me)return '';
 const jobs=state.jobs||[];
 let actions=[];
 if(kind==='customer'){
  const needsReview=jobs.filter(j=>mine(j)&&j.status==='accepted'&&j.completion_requested_at);
  const offers=jobs.filter(j=>mine(j)&&j.status==='open'&&Number(j.offer_count)>0);
  const active=jobs.filter(j=>mine(j)&&j.status==='accepted'&&!j.completion_requested_at);
  if(needsReview.length)actions.push({title:`Confirm finished work (${needsReview.length})`,desc:'A worker is waiting for your review.',job:needsReview[0].id,urgent:true});
  // Offer activity is shown on each task card on the customer homepage.
  if(active.length)actions.push({title:'Check an active task',desc:'Review scheduling, messages, and progress.',job:active[0].id,urgent:false});
  if(!actions.length)actions.push({title:'Post your next task',desc:'Tell local workers what you need done.',view:'post',urgent:false});
 }else{
  const needsUpdate=jobs.filter(j=>Number(j.assigned_worker_id)===Number(state.me.id)&&j.status==='accepted'&&!j.completion_requested_at);
  const waiting=jobs.filter(j=>Number(j.assigned_worker_id)===Number(state.me.id)&&!!j.completion_requested_at);
  if(needsUpdate.length)actions.push({title:`Update an active assignment (${needsUpdate.length})`,desc:'Mark work finished when the job is complete.',job:needsUpdate[0].id,urgent:false});
  if(waiting.length)actions.push({title:`Awaiting customer confirmation (${waiting.length})`,desc:'Track the 48-hour customer review.',job:waiting[0].id,urgent:false});
  actions.push({title:'Find your next task',desc:'Browse open local jobs that match your interests.',view:'browse',urgent:false});
 }
 return `<section class="ht-v15-actions" aria-label="Recommended next actions"><div class="ht-v15-actions-heading"><span class="kicker">YOUR NEXT STEPS</span><h3>What needs your attention</h3></div><div class="ht-v15-action-grid">${actions.slice(0,3).map(a=>`<button type="button" class="ht-v15-action ${a.urgent?'is-urgent':''}" ${a.job?`data-job="${a.job}"`:`data-view="${a.view}"`}><span class="ht-v15-action-icon">${icon(a.urgent?'bell':'arrow',18)}</span><span><strong>${e(a.title)}</strong><small>${e(a.desc)}</small></span><span class="ht-v15-action-arrow" aria-hidden="true">→</span></button>`).join('')}</div></section>`;
}
// HomeTask 15.13.1: distinct scheduling and offers on the customer homepage.
function ht131ScheduleLabel(value){
 if(!value)return 'Time not scheduled';
 const date=new Date(value.length===16?value+':00':value);
 if(!Number.isFinite(date.getTime()))return schedulePretty(value);
 const today=new Date(),todayKey=today.toDateString(),tomorrow=new Date(today);
 tomorrow.setDate(tomorrow.getDate()+1);
 const prefix=date.toDateString()===todayKey?'Today':date.toDateString()===tomorrow.toDateString()?'Tomorrow':date.toLocaleDateString('en-US',{month:'short',day:'numeric'});
 return `${prefix} at ${date.toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit'}).replace(':00 ',' ')}`;
}
function ht131UpcomingTask(j){
 const when=j.scheduled_start?ht131ScheduleLabel(j.scheduled_start):'Schedule not confirmed';
 const worker=j.assigned_worker_name||'Worker assigned';
 return `<article class="ht131-scheduled-card interactive-job-card" data-card-job="${j.id}" tabindex="0" role="button" aria-label="Open ${e(j.title)}"><div class="ht131-scheduled-photo">${compactJobPhoto(j)}</div><div class="ht131-scheduled-body"><span class="ht131-schedule-time">${icon('calendar',16)} ${e(when)}</span><h4>${e(j.title)}</h4><p class="mock-meta">${e(j.category)} · ${dollars(j.accepted_price||j.budget)}</p><p class="ht131-worker-name">${icon('user',16)} ${e(worker)}</p><span class="ht133-timeline-stage ${ht142TaskStage(j)==='review'?'is-review':ht142TaskStage(j)==='completed'?'is-done':ht142TaskStage(j)==='progress'?'is-progress':'is-scheduled'}"><span class="ht133-stage-dot" aria-hidden="true"></span><span>${status(j)}</span></span></div></article>`;
}
function bindCustomerOffersRail(){
 const rail=$('ht131OffersRail');if(!rail)return;
 const update=()=>{const max=Math.max(0,rail.scrollWidth-rail.clientWidth);const prev=$('ht131OffersPrev'),next=$('ht131OffersNext');if(prev)prev.disabled=rail.scrollLeft<=2;if(next)next.disabled=rail.scrollLeft>=max-2;};
 for(const [id,dir] of [['ht131OffersPrev',-1],['ht131OffersNext',1]]){const b=$(id);if(b)b.onclick=()=>{const card=rail.querySelector('.ht131-offer-slide');const gap=parseFloat(getComputedStyle(rail).gap)||16;rail.scrollBy({left:dir*((card?.getBoundingClientRect().width||310)+gap),behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});};}
 rail.addEventListener('scroll',update,{passive:true});requestAnimationFrame(update);
}
function customerHome(){
 const owned=state.jobs.filter(j=>mine(j)), open=owned.filter(j=>j.status==='open'),active=owned.filter(j=>j.status==='accepted');
 const offers=open.filter(j=>Number(j.offer_count||0)>0).sort((a,b)=>(Number(ht130IsNewOffer(b))-Number(ht130IsNewOffer(a)))||Number(b.created_at||0)-Number(a.created_at||0));
 const orderedActive=[...active].sort((a,b)=>{const ax=a.scheduled_start?Date.parse(a.scheduled_start):Infinity,bx=b.scheduled_start?Date.parse(b.scheduled_start):Infinity;return ax-bx;});
 const didPost=owned.length>0,didReviewOffer=owned.some(j=>j.offer_count>0||j.assigned_worker_id),didComplete=owned.some(j=>j.status==='completed');
 const showGettingStarted=!(didPost&&didReviewOffer&&didComplete);
 return `<section class="page workspace-page ht131-customer-home">${workspaceHeader('HOMETASK',`<span id="welcomeHeadline" class="greeting-reveal">${welcomeHeadline()}</span>`,'Post a task, compare offers, and choose who you want to hire.',`<button class="btn btn-primary" id="dashboardPrimary">+ Post a task</button><button class="btn btn-secondary" data-view="dashboard">Manage my tasks</button>`,'H')}
 ${active.length?`<section class="panel ht131-customer-section ht131-upcoming-section" aria-label="Upcoming and in-progress tasks"><div class="section-head"><div><span class="kicker">YOUR BOOKINGS</span><h3>Upcoming & In Progress</h3><p class="mock-meta">Your hired workers and confirmed times, all in one place.</p></div><button class="mini-btn" data-view="appointments">Appointments</button></div><div class="ht131-scheduled-grid">${orderedActive.map(ht131UpcomingTask).join('')}</div></section>`:''}
 <section class="panel ht131-customer-section ht131-offers-section" aria-label="Tasks receiving worker offers"><div class="section-head"><div><span class="kicker">WORKER PROPOSALS</span><h3>Offers Received</h3><p class="mock-meta">Review workers and compare prices on your open tasks.</p></div><button class="mini-btn" data-view="dashboard">See all tasks</button></div>
 ${offers.length?`<div class="ht131-rail-shell"><button id="ht131OffersPrev" class="ht131-rail-arrow is-prev" type="button" aria-label="Previous tasks">${icon('arrow',19)}</button><div class="ht131-offers-rail" id="ht131OffersRail" tabindex="0" role="region" aria-label="Tasks with worker offers">${offers.map(j=>`<div class="ht131-offer-slide">${customerRow(j)}</div>`).join('')}</div><button id="ht131OffersNext" class="ht131-rail-arrow is-next" type="button" aria-label="Next tasks">${icon('arrow',19)}</button></div>`:`<div class="ht131-offers-empty">${icon('message',24)}<strong>No offers to review yet</strong><p>New worker offers on your open tasks will appear here.</p>${!open.length?'<button class="btn btn-primary" data-view="post">Post a task</button>':''}</div>`}
 </section>
 ${showGettingStarted?`<section class="panel ht131-getting-started"><span class="kicker">GETTING STARTED</span><h3>From idea to finished.</h3><p class="mock-meta">Describe your task, compare offers, and choose who to hire.</p><button class="mini-btn" data-view="help">View walkthrough</button></section>`:''}
 </section>`;
}
// Version 14.1.4: shared photo for compact listings, with no empty placeholder.
// Look up the canonical job because offer records intentionally contain fewer fields.
function compactJobPhoto(job){
 const id=Number(job?.job_id||job?.id);
 const canonical=state.jobs.find(x=>Number(x.id)===id);
 const item=canonical||job;
 if(!id||!item?.has_main_photo)return placeholderPhoto(item);
 return `<img class="compact-job-photo" src="/api/jobs/${id}/main-photo" alt="Photo of ${e(item.title||job.title||'job')}" loading="lazy" />`;
}
function ht130OfferSeenKey(id){return `ht130-offers-viewed:${state.me?.id||'guest'}:${id}`;}
function ht130IsNewOffer(j){
 if(j.status!=='open'||Number(j.offer_count||0)<=0)return false;
 try{const seen=sessionStorage.getItem(ht130OfferSeenKey(j.id));return seen===null||Number(j.offer_count||0)>Number(seen)}catch{return false}
}
function ht130MarkOffersSeen(id,count){
 try{sessionStorage.setItem(ht130OfferSeenKey(id),String(count))}catch{}
 document.querySelectorAll(`[data-new-offer-job="${id}"]`).forEach(el=>el.remove());
}
function customerRow(j){
 const count=Number(j.offer_count||0);
 return `<article class="dashboard-job interactive-job-card ht129-customer-task ${Number(j.offer_count||0)>0?'ht159-has-offers':''}" tabindex="0" data-card-job="${j.id}" aria-label="View ${e(j.title)}">${compactJobPhoto(j)}${j.status==='open'?`<span class="ht144-offer-sticker" aria-label="${count} ${count===1?'offer':'offers'} received">${icon('message',15)} <strong>${count} ${count===1?'Offer':'Offers'}</strong></span>`:''}${ht130IsNewOffer(j)?`<span class="ht130-new-offer" data-new-offer-job="${j.id}">New offer</span>`:''}<div class="ht129-customer-task-body"><div class="dashboard-job-head"><div><strong>${e(j.title)}</strong><div class="mock-meta">${e(j.category)} · ${dollars(j.budget)}</div></div>${j.status!=='open'?`<span class="status ${statusClass(j)}">${status(j)}</span>`:''}</div>${j.status==='accepted'?`<p class="mock-meta ht130-worker-summary">${e(j.assigned_worker_name?'Worker: '+j.assigned_worker_name:'Worker assigned')}</p>`:''}</div></article>`;
}
// 15.11.8: browse every eligible open task, with personally matched jobs first.
function workerHomeDiscoveryJobs(){
 const matches=featuredJobs();
 const matchedIds=new Set(matches.map(x=>Number(x.job.id)));
 const origin=featuredOrigin();
 const other=state.jobs.filter(j=>j.status==='open'&&!mine(j)&&!hasOfferForJob(j)&&!matchedIds.has(Number(j.id)));
 const distance=j=>{
  const coords=jobCoordinates(j);
  return origin.coords&&coords?milesBetween(origin.coords,coords):Number.POSITIVE_INFINITY;
 };
 other.sort((a,b)=>distance(a)-distance(b)||Number(b.created_at||0)-Number(a.created_at||0));
 return [...matches.map(x=>x.job),...other];
}
function bindWorkerHomeFeaturedRail(){
 const rail=$('ht118FeaturedRail');if(!rail)return;
 const arrow=(direction)=>{
  const card=rail.querySelector('.ht118-featured-item');
  const gap=parseFloat(getComputedStyle(rail).columnGap)||16;
  const width=(card?.getBoundingClientRect().width||280)+gap;
  rail.scrollBy({left:direction*width,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
 };
 for(const [id,direction] of [['ht118FeaturedPrev',-1],['ht118FeaturedNext',1]]){
  const btn=$(id);if(btn)btn.onclick=()=>arrow(direction);
 }
 const sync=()=>{
  const max=Math.max(0,rail.scrollWidth-rail.clientWidth);
  const prev=$('ht118FeaturedPrev'),next=$('ht118FeaturedNext');
  if(prev)prev.disabled=rail.scrollLeft<=2;
  if(next)next.disabled=rail.scrollLeft>=max-2;
 };
 rail.addEventListener('scroll',sync,{passive:true});
 requestAnimationFrame(sync);
 if(window.ResizeObserver){const observer=new ResizeObserver(sync);observer.observe(rail);}
}
function workerHome(){
 const featured=featuredJobs();
 const discoveryJobs=workerHomeDiscoveryJobs();
 const assigned=state.jobs.filter(j=>j.assigned_worker_id===state.me.id);
 const pending=state.offers.filter(o=>o.status==='open'&&o.decision!=='rejected');
 return `<section class="page workspace-page">${workspaceHeader('HOMETASKER',`<span id="welcomeHeadline" class="greeting-reveal">${welcomeHeadline()}</span>`,'Explore neighborhood jobs, make offers, and manage the work you book.',`<button class="btn btn-primary" data-browse-map>Explore job map</button><button class="btn btn-secondary" data-view="offers">Track my offers</button>`,'arrow')}
  ${state.invitations.filter(x=>x.status==='open').length?`<div class="panel job-requests" style="margin-bottom:18px"><div class="section-head"><div><span class="kicker">JOB REQUESTS</span><h3>Customers invited you to these jobs</h3></div></div><div class="stack">${state.invitations.filter(x=>x.status==='open').map(x=>`<div class="job-request-card"><div><strong>${e(x.title)}</strong><p class="mock-meta">${e(x.customer_name)} · ${e(x.location)} · ${dollars(x.budget)}</p><span class="tag">Job request</span></div><button class="btn btn-secondary" data-job="${x.job_id}">Review request</button></div>`).join('')}</div></div>`:''}
 <section class="panel ht118-featured-section" aria-labelledby="ht118FeaturedTitle">
  <div class="ht118-featured-header">
   <div><span class="kicker">FIND YOUR NEXT OPPORTUNITY</span><h3 id="ht118FeaturedTitle">Featured Jobs Near You</h3><p class="mock-meta">${featured.length?`${featured.length} recommended job${featured.length===1?'':'s'} first, followed by more open tasks.`:'Explore open opportunities. Your location and experience help tailor the suggestions.'}</p></div>
   <div class="ht118-featured-actions"><button class="btn btn-primary ht118-view-all" type="button" data-browse-list>View All Jobs ${icon('arrow',16)}</button></div>
  </div>
  ${discoveryJobs.length?`<div class="ht128-featured-rail-wrap"><div id="ht118FeaturedRail" class="ht118-featured-rail" role="region" aria-label="Scrollable featured and available jobs" tabindex="0">${discoveryJobs.map(j=>`<div class="ht118-featured-item ${featured.some(item=>Number(item.job.id)===Number(j.id))?'ht142-is-featured':''}">${jobCard(j)}${featured.some(item=>Number(item.job.id)===Number(j.id))?`<span class="ht142-featured-sticker" aria-label="Featured recommendation">${icon('sparkle',14)} Featured</span>`:''}</div>`).join('')}</div><div class="ht118-rail-arrows"><button id="ht118FeaturedPrev" type="button" aria-label="Previous jobs" title="Previous jobs">${icon('arrow',20)}</button><button id="ht118FeaturedNext" type="button" aria-label="Next jobs" title="Next jobs">${icon('arrow',20)}</button></div></div>`:`<div class="empty ht118-empty"><h3>No open jobs right now</h3><p>New tasks will appear here when customers post them.</p><button class="btn btn-secondary" data-view="browse">View All Jobs</button></div>`}
 </section>
 <div class="workspace-columns ht118-worker-tools ht129-worker-home-tools"><div class="ht129-worker-left"><div class="panel ht118-discovery-tip"><span class="kicker">PERSONALIZED MATCHES</span><h3>Find more of the right work.</h3><p>Set your skills and preferred travel radius to put matching nearby jobs at the front of this list. You can still browse other open listings.</p><div class="hero-actions"><button class="btn btn-secondary" data-view="worker-preferences">Job preferences</button><button class="btn btn-secondary" data-browse-map>Open job map</button></div></div>
 <section class="panel ht129-work-glance"><div class="section-head"><div><span class="kicker">YOUR ACTIVITY</span><h3>Your work at a glance</h3></div><button class="mini-btn" data-view="analytics">Earnings ${icon('arrow',15)}</button></div><div class="ht129-glance-grid"><div><span>${icon('check',19)} Completed jobs</span><strong>${assigned.filter(j=>j.status==='completed').length}</strong></div><div><span>${icon('message',19)} Offers submitted</span><strong>${state.offers.length}</strong></div></div><p class="mock-meta">A snapshot of your actual HomeTask activity.</p></section></div>
 <aside class="panel"><span class="kicker">HOMETASKER TOOLS</span><h3 style="margin-top:9px">Your work, organized.</h3><div class="worker-tool-links"><button data-browse-map><span>${icon("map",21)}</span><div><strong>Job map</strong><small>Find work in your area</small></div>›</button><button data-view="saved-jobs"><span>${icon("bookmark",21)}</span><div><strong>Saved jobs</strong><small>Return to bookmarked listings</small></div>›</button><button data-view="offers"><span>${icon("wallet",21)}</span><div><strong>My offers</strong><small>Track sent bids and prices</small></div>›</button><button data-view="assignments"><span>${icon("check",21)}</span><div><strong>My assignments</strong><small>Manage jobs you've booked</small></div>›</button><button data-view="profile"><span>${icon("user",21)}</span><div><strong>HomeTasker profile</strong><small>Show your skills and experience</small></div>›</button><button data-view="previous-work"><span>${icon("grid",21)}</span><div><strong>Previous Work</strong><small>Upload completed project examples</small></div>›</button></div></aside></div></section>`;
}
function workerOffers(){
 if(!state.me)return signInPrompt();
 const offers=state.offers;
 const current=offers.filter(o=>(o.status==='open'&&o.decision!=='rejected')||(o.status==='accepted'&&o.accepted_offer_id===o.id)),completed=offers.filter(o=>o.status==='completed'&&o.accepted_offer_id===o.id),archived=offers.filter(o=>!((o.status==='open'&&o.decision!=='rejected')||(o.status==='accepted'&&o.accepted_offer_id===o.id)||(o.status==='completed'&&o.accepted_offer_id===o.id)));
 const pending=offers.filter(o=>o.status==='open'&&o.decision!=='rejected');
 const hired=offers.filter(o=>o.accepted_offer_id===o.id&&o.status==='accepted');
 const filter=state.offerFilter;
 const visible=filter==='completed'?completed:filter==='archived'?archived:filter==='all'?offers:current;
 return `<section class="page workspace-page"><div class="page-title"><span class="kicker">HOMETASKER WORKSPACE</span><h1>My offers</h1><p>Review current bids, completed jobs, and previous offers.</p><div class="ht1530-header-stats">${statTiles([['Offers submitted',pending.length,'file','offers:current'],['Accepted offers',hired.length,'check','assignments'],['Completed offers',completed.length,'history','offers:completed'],['Current bid value',dollars(pending.reduce((n,o)=>n+o.price,0)),'wallet','offers:current']])}</div></div>
 <div class="panel ht1532-worker-panel ht1534-offer-panel"><div class="ht1532-list-toolbar ht1532-worker-toolbar"><span class="ht1532-items-note">${visible.length} offer${visible.length===1?'':'s'}</span><div class="ht139-filter-control"><select data-compact-filter="offer" aria-label="Filter offers">${[['current','Current'],['completed','Completed'],['archived','Cancelled / closed'],['all','All offers']].map(([key,label])=>`<option value="${key}" ${filter===key?'selected':''}>${label}</option>`).join('')}</select></div></div><div class="stack ht1534-vertical-cards">${visible.length?visible.map(o=>`<article class="dashboard-job interactive-job-card" role="button" tabindex="0" data-card-job="${o.job_id}" aria-label="View job: ${e(o.title)}">${compactJobPhoto(o)}${state.me&&role()==='worker'?jobBookmark({id:Number(o.job_id)}):''}<div class="dashboard-job-head"><div><strong>${e(o.title)}</strong><div class="mock-meta">${e(o.customer_name)} · ${e(o.location)}</div></div><div class="offer-price">${dollars(o.price)}<small class="ht-offer-net">Est. payout ${workerNetPrice(o.price)}</small></div></div>${o.counter_status==='pending'&&o.status==='open'?`<div class="negotiation-notice small"><strong>New customer counteroffer: ${dollars(o.counter_price)}</strong><p>${e(o.counter_note||'Customer proposed a different price.')}</p><div class="mini-actions"><button class="mini-btn" data-counter-response="${o.job_id}:yes">Accept</button><button class="mini-btn" data-counter-response="${o.job_id}:no">Decline</button></div></div>`:''}<div class="mini-actions"><span class="status ${o.accepted_offer_id===o.id?'status-accepted':o.status==='open'&&o.decision!=='rejected'?'status-offers':'status-completed'}">${o.status==='cancelled'||o.status==='closed'?'Cancelled':o.status==='completed'&&o.accepted_offer_id===o.id?'Completed':o.accepted_offer_id===o.id?'Hired':o.decision==='rejected'?'Declined':o.status==='open'?'Pending':'Closed'}</span>${o.decision==='rejected'&&o.status==='open'?`<button class="mini-btn" data-resubmit="${o.job_id}">${icon('arrow',15)} Resubmit at original budget</button>`:''}</div></article>`).join(''):'<div class="empty">No offers in this category.</div>'}</div></div></section>`;
}
function workerAssignments(){
 if(!state.me)return signInPrompt();
 const all=state.jobs.filter(j=>j.assigned_worker_id===state.me.id);
 const booked=all.filter(j=>j.status==='accepted');
 const completed=all.filter(j=>j.status==='completed');
 const working=booked.filter(j=>ht142TaskStage(j)==='progress');
 const filter=state.assignmentFilter||'booked';
 const list=filter==='completed'?completed:filter==='progress'?working:booked;
 const assignmentQuery=String(state.ht154AssignmentQuery||'').trim().toLowerCase();const displayed=list.filter(j=>!assignmentQuery||[j.title,j.location,j.owner_name,j.category].join(' ').toLowerCase().includes(assignmentQuery));
 return `<section class="page workspace-page"><div class="page-title"><span class="kicker">HOMETASKER WORKSPACE</span><h1>My assignments</h1><p>Manage your booked jobs and completed work.</p><div class="ht1530-header-stats">${statTiles([['Booked jobs',booked.length,'file','assignments:booked'],['In progress',working.length,'clock','assignments:progress'],['Completed',completed.length,'check','assignments:completed'],['Booked value',dollars(booked.reduce((n,j)=>n+(j.accepted_price||0),0)),'wallet','analytics']])}</div></div><div class="panel ht1532-worker-panel ht1534-assignment-panel"><div class="ht1532-list-toolbar"><label class="ht154-list-search">${icon('search',18)}<input class="control" id="ht154AssignmentSearch" type="search" placeholder="Search assignments" aria-label="Search assignments" value="${e(state.ht154AssignmentQuery||'')}"/></label><div class="ht139-filter-control"><select data-compact-filter="assignment" aria-label="Filter assignments">${[['booked','Booked'],['progress','In progress'],['completed','Completed']].map(([key,label])=>`<option value="${key}" ${filter===key?'selected':''}>${label}</option>`).join('')}</select></div></div><div class="stack ht1534-vertical-cards">${displayed.length?displayed.map(j=>`<article class="dashboard-job interactive-job-card" data-card-job="${j.id}" tabindex="0" role="button" aria-label="Open assignment: ${e(j.title)}">${compactJobPhoto(j)}${state.me&&role()==='worker'?jobBookmark(j):''}<div class="dashboard-job-head"><div><strong>${e(j.title)}</strong><div class="mock-meta">${e(j.location)} · ${e(j.owner_name)}</div></div><span class="status ${statusClass(j)}">${status(j)}</span></div><div class="ht152-task-access"><button class="mini-btn" data-workspace-job="${j.id}">Manage task →</button></div>${j.status==='completed'?'<span class="tag">Completed HomeTask assignment · available for Previous Work</span>':j.completion_requested_at?'<span class="tag">Waiting for customer confirmation</span>':j.completion_rejected_at?'<span class="tag">Customer requested changes</span>':'<span class="tag">Open job details for work updates</span>'}<p class="mock-meta">Agreed price: <strong>${dollars(j.accepted_price)}</strong> · 10% HomeTask fee: <strong>−${moneyCents(workerPaymentBreakdown(j.accepted_price).fee)}</strong> · Expected payout: <strong>${workerNetPrice(j.accepted_price)}</strong> · <span class="ht-payment-state">${j.payment_status==='paid_test'?'Stripe test checkout confirmed':j.payment_status==='unfunded_demo'?'Unfunded demo booking':'Payment not processed'}</span> · ${j.scheduled_start?icon('calendar',16)+' '+e(schedulePretty(j.scheduled_start)):'Time not set'}</p></article>`).join(''):`<div class="empty"><h3>${filter==='completed'?'No completed assignments yet':filter==='progress'?'No assignments underway':'No booked jobs yet'}</h3><p>${filter==='booked'?'Once a customer accepts an offer, the assignment appears here.':'Select another status to see your other assignments.'}</p>${filter==='booked'?'<button class="btn btn-primary" data-view="browse">Find work</button>':''}</div>`}</div></div></section>`;
}
function signInPrompt(){return `<section class="page"><div class="empty"><h3>Log in to continue</h3><button id="authLink" class="btn btn-primary">Sign in</button></div></section>`}
function inbox(){
 if(!state.me)return signInPrompt();const active=state.activeConversation;
 const visibleConversations=state.conversations.filter(c=>state.conversationFilter==='all'||(state.conversationFilter==='completed'?c.status==='completed':['open','accepted'].includes(c.status)));
 return `<section class="page workspace-page inbox-page"><div class="page-title"><span class="kicker">${role().toUpperCase()} WORKSPACE</span><h1>Messages</h1><p>Direct messaging opens after hiring. Completed jobs keep their message history in read-only mode.</p></div>
 <div class="messenger ${active?'has-active':''}">
  <aside class="conversation-sidebar"><div class="conversation-title">Conversations <span class="tag">${visibleConversations.length}</span></div><div class="conversation-filter"><button type="button" data-conversation-filter="all" class="${state.conversationFilter==='all'?'selected':''}">All</button><button type="button" data-conversation-filter="active" class="${state.conversationFilter==='active'?'selected':''}">In progress</button><button type="button" data-conversation-filter="completed" class="${state.conversationFilter==='completed'?'selected':''}">Completed</button></div>
  ${visibleConversations.length?visibleConversations.map(c=>`<div role="button" tabindex="0" class="conversation-entry ${active&&active.job_id===c.job_id&&active.partner_id===c.partner_id?'selected':''}" data-chat="${c.job_id}:${c.partner_id}">
   ${avatar(c.partner_id,c.partner_name)}<span class="conversation-copy"><strong>${e(c.partner_name)}</strong><small>${e(c.title)}</small><span>${e(c.last_message?.body?.slice(0,70)||(c.can_message?'Start a conversation':'Read-only history'))}</span></span><button class="chat-delete-thread" type="button" title="Delete conversation for me" data-delete-chat="${c.job_id}:${c.partner_id}">${icon('trash',16)}</button>${c.unread?`<b class="unread-dot">${c.unread}</b>`:''}
  </div>`).join(''):'<div class="chat-empty">No conversations yet. Messaging is available after a worker is hired.</div>'}
  </aside>
  <div class="chat-panel">${active?`<button class="mobile-back" id="backChats">← All conversations</button><div class="chat-header"><button class="chat-person" id="chatPerson" data-person="${active.partner_id}">${avatar(active.partner_id,active.partner_name)}<span><strong>${e(active.partner_name)}</strong><small>${e(active.title)}</small></span></button><div class="chat-header-actions"><button class="mini-btn" data-job="${active.job_id}">Task details</button><button class="mini-btn" data-workspace-job="${active.job_id}">Open task workspace</button><button class="mini-btn" id="deleteActiveChat" title="Delete conversation for me">${icon('trash',16)} Clear chat</button></div></div>
   <div class="chat-messages" id="chatMessages">${state.chatMessages.length?state.chatMessages.map((m,i,arr)=>`${(i===0||new Date(arr[i-1].created_at*1000).toDateString()!==new Date(m.created_at*1000).toDateString())?`<div class="ht152-message-date">${e(new Date(m.created_at*1000).toLocaleDateString(undefined,{month:'long',day:'numeric',year:'numeric'}))}</div>`:''}<div class="chat-bubble ${m.sender_id===state.me.id?'outgoing':'incoming'}"><p>${e(m.body)}</p><small>${new Date(m.created_at*1000).toLocaleString('en-US',{month:'short',day:'numeric',hour:'numeric',minute:'2-digit'})}${m.sender_id===state.me.id?` · ${m.read_at?'Read':'Sent'}`:''}</small><button class="chat-delete-message" data-delete-message="${m.id}" title="Delete message for me">${icon('trash',13)}</button></div>`).join(''):'<div class="chat-empty">No messages in this conversation yet.</div>'}</div>
   ${active.can_message?`<form id="chatComposer" class="chat-composer"><input class="control" name="body" maxlength="2000" placeholder="Type a message..." required autocomplete="off"/><button class="btn btn-primary" type="submit">Send ${icon('arrow',17)}</button></form>`:`<div class="chat-readonly-notice" role="status">${active.status==='completed'?'This job is complete. You can review previous messages, but this conversation is closed.':active.status==='cancelled'||active.status==='closed'?'This job is closed. Previous messages are available to read.':'Messaging is available only after the customer hires a worker.'}</div>`}`:`<div class="chat-placeholder">${icon('message',48)}<h3>Select a conversation</h3><p>Messages about each job will appear here.</p></div>`}</div>
 </div></section>`;
}
async function openWorkerConversation(id){try{const j=await api(`/jobs/${id}`);if(j.owner_id===state.me?.id){openJob(id,'worker');return;}if(!j.owner_id)return toast('Customer not available.');showMessages(id,j.owner_id,j.owner_name)}catch(err){toast(err.message)}}

// 15.11.3: guest-only illustrative previews, never real listings or locations.
const htp113Examples={
 desk:{title:'Assemble a desk',category:'Furniture assembly',summary:'A boxed flat-pack desk needs assembly in a home office.',details:['Assemble the frame and tabletop','Bring basic assembly tools','Leave the workspace tidy']},
 yard:{title:'Clean up the yard',category:'Yard work',summary:'Seasonal leaves and small branches need to be collected and bagged.',details:['Rake leaves','Bag yard debris','Discuss cleanup scope before agreeing']},
 paint:{title:'Paint a room',category:'Painting',summary:'A spare bedroom needs a simple wall refresh.',details:['Prepare and cover furniture','Paint the walls','Confirm materials and cleanup details']},
 move:{title:'Move a heavy couch',category:'Moving help',summary:'A couch needs to be shifted between rooms in the same home.',details:['Confirm dimensions and access','Coordinate suitable lifting help','Move and place furniture carefully']},
 clean:{title:'Prepare the guest room',category:'Cleaning',summary:'A one-time clean of a guest room before visitors arrive.',details:['Vacuum and dust','Wipe surfaces','Agree on supplies and timing']},
 repair:{title:'Fix a sticking door',category:'Home repairs',summary:'An interior door sticks when closing and may need a small adjustment.',details:['Check the hinge alignment','Assess the rubbing area','Discuss the right repair before starting']}
};
function htp113OpenExample(key){
 const item=htp113Examples[key];if(!item)return;
 modal(`${modalHead(item.title,'ILLUSTRATIVE TASK PREVIEW')}<div class="htp-v113-example-modal"><p class="htp-v113-preview-label">${icon('info',17)} Example only · Not an active HomeTask listing</p><span class="tag">${e(item.category)}</span><p>${e(item.summary)}</p><h3>What a posting might include</h3><ul>${item.details.map(t=>`<li>${e(t)}</li>`).join('')}</ul><div class="htp-v113-preview-actions"><button type="button" class="btn btn-primary" id="htpPreviewCreate">Create your own task ${icon('arrow',17)}</button><button type="button" class="btn btn-secondary" id="htpPreviewClose">Close preview</button></div></div>`);
 const a=$('htpPreviewCreate');if(a)a.onclick=()=>{closeModal();customerAction()};
 const b=$('htpPreviewClose');if(b)b.onclick=closeModal;
}
const htp113Tour=[
 {title:'Describe your project',body:'Add a short description, choose a category, and share photos if helpful. You choose the details to post.',icon:'list'},
 {title:'Review offers from workers',body:'Compare proposals and profile details before deciding who might be a good fit.',icon:'message'},
 {title:'Coordinate and finish',body:'After hiring, arrange the schedule, track progress, and share your experience through a review.',icon:'check'}
];
function htp113ShowTour(step=0){
 const item=htp113Tour[step];if(!item)return;
 modal(`${modalHead('How HomeTask works','THREE-STEP WALKTHROUGH')}<div class="htp-v113-tour"><div class="htp-v113-tour-progress" aria-label="Step ${step+1} of 3">${htp113Tour.map((_,i)=>`<span class="${i<=step?'filled':''}"></span>`).join('')}</div><span class="htp-v113-tour-symbol">${icon(item.icon,46)}</span><span class="htp-kicker">STEP ${step+1} OF 3</span><h3>${item.title}</h3><p>${item.body}</p><div class="htp-v113-tour-controls"><button class="btn btn-secondary" id="htpTourBack" ${step===0?'disabled':''}>Back</button><button class="btn btn-primary" id="htpTourNext">${step===2?'Finish':'Next step'} ${icon('arrow',16)}</button></div></div>`);
 const back=$('htpTourBack');if(back)back.onclick=()=>htp113ShowTour(step-1);
 const next=$('htpTourNext');if(next)next.onclick=()=>step===2?closeModal():htp113ShowTour(step+1);
}
function bindPublicHomeV113(){
 const area=$('app')?.querySelector('.ht-public-redesign');if(!area)return;
 area.querySelectorAll('[data-htp-example]').forEach(el=>{
  el.addEventListener('click',()=>htp113OpenExample(el.dataset.htpExample));
  if(el.getAttribute('role')==='button')el.addEventListener('keydown',ev=>{if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();htp113OpenExample(el.dataset.htpExample)}});
 });
 ['htpStartTour','htpSpotlightTour'].forEach(id=>{const el=$(id);if(el)el.onclick=()=>htp113ShowTour(0)});
 const rail=$('htpProjectRail');
 if(rail){
  const cards=Array.from(rail.querySelectorAll('.htp-v113-project-card'));
  const count=cards.length;
  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Copy one full sequence so that the transition from the last card to the
  // first one looks exactly like every other transition.
  cards.forEach(card=>{
   const clone=card.cloneNode(true);
   clone.setAttribute('aria-label',(card.querySelector('strong')?.textContent||'Project')+' · example task');
   clone.addEventListener('click',()=>htp113OpenExample(clone.dataset.htpExample));
   rail.appendChild(clone);
  });
  let position=0, moving=false, hovered=false, focused=false, pointerDown=false;
  let autoTimer=null, transitionTimer=null;
  const step=()=>{
   if(!cards.length)return 290;
   const gap=parseFloat(getComputedStyle(rail).gap)||16;
   return cards[0].getBoundingClientRect().width+gap;
  };
  const normalise=()=>{
   if(position>=count){position=0;rail.scrollLeft=0;}
   moving=false;
  };
  const move=direction=>{
   if(!rail.isConnected){stop();return;}
   if(moving||count<2)return;
   moving=true;
   if(position===0&&direction<0){
    position=count;
    rail.scrollLeft=step()*count;
   }
   position+=direction;
   rail.scrollTo({left:position*step(),behavior:reduceMotion?'instant':'smooth'});
   transitionTimer=setTimeout(normalise,reduceMotion?25:700);
  };
  const stop=()=>{
   if(autoTimer!==null){clearInterval(autoTimer);autoTimer=null;}
  };
  const canAuto=()=>!reduceMotion&&!hovered&&!focused&&!pointerDown&&!document.hidden;
  const start=()=>{
   if(autoTimer!==null||!canAuto())return;
   autoTimer=setInterval(()=>{
    if(!rail.isConnected){stop();return;}
    if(canAuto())move(1);
   },3200);
  };
  const pause=()=>stop();
  rail.addEventListener('mouseenter',()=>{hovered=true;pause()});
  rail.addEventListener('mouseleave',()=>{hovered=false;start()});
  rail.addEventListener('focusin',()=>{focused=true;pause()});
  rail.addEventListener('focusout',()=>{focused=rail.contains(document.activeElement);if(!focused)start()});
  rail.addEventListener('pointerdown',()=>{pointerDown=true;pause()});
  window.addEventListener('pointerup',()=>{if(!pointerDown)return;pointerDown=false;start()},{passive:true});
  rail.addEventListener('keydown',ev=>{
   if(ev.key!=='ArrowLeft'&&ev.key!=='ArrowRight')return;
   ev.preventDefault();stop();move(ev.key==='ArrowRight'?1:-1);
  });
  for(const [id,direction] of [['htpCarouselPrev',-1],['htpCarouselNext',1]]){
   const button=$(id);
   if(button)button.addEventListener('click',()=>{
    pause();move(direction);
    // Allow the user to read their selected project before rotation resumes.
    setTimeout(()=>{if(rail.isConnected)start()},4200);
   });
  }
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();else start()});
  start();
 }

}

function home(){
 if(state.me)return role()==='customer'?customerHome():workerHome();
 const popular=[
  ['Furniture','Furniture assembly','sofa'],
  ['Moving','Moving help','package'],
  ['Cleaning','Cleaning','sparkle'],
  ['Lawn & Yard','Yard work','leaf'],
  ['Painting','Painting','paint'],
  ['Repairs','Home repairs','wrench']
 ];
 return `<div class="ht-public-redesign">
  <section class="htp-hero" aria-labelledby="htp-hero-heading">
   <div class="htp-hero-copy">
    <span class="htp-eyebrow">${icon('house',15)} THE LOCAL HOME TASK MARKETPLACE</span>
    <h1 id="htp-hero-heading">Home tasks made <span>simple.</span></h1>
    <p>Post small home tasks, compare offers, and connect with local workers ready to lend a hand.</p>
    <div class="htp-hero-actions"><button type="button" class="btn btn-primary" id="heroPost">Post a task ${icon('arrow',18)}</button><button class="btn btn-secondary" data-view="browse">Explore local work</button></div>
    <div class="htp-proof"><span>${icon('check',16)} Small household projects</span><span>${icon('check',16)} Compare offers</span><span>${icon('check',16)} Flexible schedules</span></div>
   </div>
   <div class="htp-hero-photo" role="img" aria-label="A home office with furniture parts and tools ready for assembly">
    <div class="htp-floating-task htp-floating-task-primary" role="button" tabindex="0" data-htp-example="desk" aria-label="Preview example task: Assemble a desk"><div class="htp-floating-icon">${icon('package',26)}</div><div><span>EXAMPLE TASK</span><strong>Assemble a desk</strong><small>Furniture assembly</small></div><span class="htp-floating-chevron">${icon('arrow',18)}</span></div>
    <div class="htp-floating-task htp-floating-task-second" role="button" tabindex="0" data-htp-example="yard" aria-label="Preview example task: Clean up the yard"><div class="htp-floating-icon">${icon('leaf',23)}</div><div><span>EXAMPLE TASK</span><strong>Clean up the yard</strong><small>Outdoor projects</small></div></div>
    <div class="htp-floating-task htp-floating-task-third" role="button" tabindex="0" data-htp-example="paint" aria-label="Preview example task: Paint a room"><div class="htp-floating-icon">${icon('paint',23)}</div><div><span>EXAMPLE TASK</span><strong>Paint a room</strong><small>Painting & touch-ups</small></div></div>
   </div>
  </section>
  <section class="htp-section htp-steps" id="htp-how-it-works" aria-labelledby="htp-steps-heading"><div class="htp-section-intro"><span class="htp-kicker">HOW IT WORKS</span><h2 id="htp-steps-heading">Get help at home in three simple steps.</h2><button type="button" class="htp-text-action" id="htpStartTour">See the interactive walkthrough ${icon('arrow',17)}</button></div><div class="htp-steps-grid"><article class="htp-step"><div class="htp-step-icon">${icon('list',27)}</div><div><h3>Post your task</h3><p>Describe the project, add photos and set your budget.</p></div></article><article class="htp-step"><div class="htp-step-icon">${icon('message',27)}</div><div><h3>Compare offers</h3><p>Review worker profiles, prices and availability.</p></div></article><article class="htp-step"><div class="htp-step-icon">${icon('check',27)}</div><div><h3>Get it done</h3><p>Agree on timing, track progress and leave a review.</p></div></article></div></section>
  <section class="htp-section htp-services" aria-labelledby="htp-services-heading"><div class="htp-section-intro"><span class="htp-kicker">POPULAR CATEGORIES</span><h2 id="htp-services-heading">Find help for everyday home tasks.</h2><p>A little help can make a big difference.</p></div><div class="htp-service-grid">${popular.map(([cat,label,ico],i)=>`<button class="htp-service-card htp-service-${i+1}" type="button" data-cat="${e(cat)}"><span class="htp-service-icon">${icon(ico,34)}</span><span class="htp-service-label">${label}</span><span class="htp-service-arrow">${icon('arrow-up-right',18)}</span></button>`).join('')}</div></section>
  <section class="htp-section htp-spotlight htp-v113-spotlight" aria-labelledby="htp-spotlight-heading">
    <div class="htp-spotlight-image htp-v113-showcase" role="img" aria-label="Room with furniture pieces and tools ready for assembly">
      <div class="htp-v116-illustration" aria-hidden="true"><div class="htp-v116-illustration-house">${icon('house',84)}</div><div class="htp-v116-illustration-check">${icon('check',35)}</div><div class="htp-v116-illustration-path path-a"></div><div class="htp-v116-illustration-path path-b"></div></div>
      <div class="htp-v116-flow" aria-label="Illustrative three-step example: describe a furniture task, review three sample offers, then schedule help">
       <button class="htp-v116-flow-card flow-one" type="button" data-htp-example="desk"><span class="htp-v116-step-icon">${icon('package',22)}</span><span><small>01 · DESCRIBE A TASK</small><strong>Assemble furniture</strong><em>See sample task ${icon('arrow',14)}</em></span></button>
       <div class="htp-v116-flow-card flow-two"><span class="htp-v116-step-icon">${icon('message',23)}</span><span><small>02 · REVIEW OFFERS</small><strong>Compare your options</strong><em>3 example offers</em></span></div>
       <div class="htp-v116-flow-card flow-three"><span class="htp-v116-step-icon">${icon('check',23)}</span><span><small>03 · PLAN THE WORK</small><strong>Schedule a time</strong><em>On your terms</em></span></div>
      </div>
      <div class="htp-v113-visual-caption">ILLUSTRATIVE PROJECT JOURNEY · NOT A REAL BOOKING</div>
    </div>
    <div class="htp-spotlight-copy"><span class="htp-kicker">FROM THE TO-DO LIST TO DONE</span><h2 id="htp-spotlight-heading">For projects that have been waiting long enough.</h2><p>From assembling a desk to clearing out a room, HomeTask gives you one place to explain what you need and review local offers.</p><div class="htp-v113-checks"><span>${icon('check',16)} Describe what needs doing</span><span>${icon('check',16)} Review offers on your terms</span><span>${icon('check',16)} Choose the right help</span></div><button class="htp-text-action" type="button" id="htpSpotlightTour">See how it works ${icon('arrow',17)}</button></div>
  </section>
  <section class="htp-section htp-project-examples htp-v113-projects" aria-labelledby="htp-project-examples-heading">
    <div class="htp-project-examples-head"><div><span class="htp-kicker">MORE REASONS TO CROSS IT OFF</span><h2 id="htp-project-examples-heading">Little jobs. Big relief.</h2><p>Explore sample tasks to see how a project might look on HomeTask.</p></div></div>
    <div class="htp-v115-carousel-frame"><button type="button" class="htp-v115-side-arrow htp-v115-side-prev" id="htpCarouselPrev" aria-label="Previous example project">${icon('arrow',21)}</button><div class="htp-v113-carousel" id="htpProjectRail" tabindex="0" aria-label="Illustrative tasks. Automatically rotating carousel. Use the side arrows to navigate">
      ${[
       ['move','Moving help','Move the heavy furniture','Get help rearranging a room or carrying larger items.','package','move'],
       ['yard','Yard work','Tackle that outdoor cleanup','For leaves, trimming and all the seasonal outdoor tasks.','leaf','yard'],
       ['paint','Painting','Freshen up a bedroom','A straightforward painting project with the details laid out.','paint','paint'],
       ['desk','Assembly','Put together a new desk','Get help putting furniture pieces into place.','wrench','desk'],
       ['clean','Cleaning','Get the guest room ready','A one-time clean before the next gathering.','sparkle','clean'],
       ['repair','Home repairs','Fix a sticking door','Explain a small repair and review available offers.','check','repair']
      ].map(([id,type,title,desc,ico,theme])=>`<button class="htp-v113-project-card htp-v113-theme-${theme}" type="button" data-htp-example="${id}"><span class="htp-v113-project-image">${icon(ico,43)}<span class="htp-v113-floating-check">${icon('check',16)}</span></span><span class="htp-v113-project-body"><small>${type} · Example</small><strong>${title}</strong><span>${desc}</span><em>Explore example ${icon('arrow',14)}</em></span></button>`).join('')}
    </div><button type="button" class="htp-v115-side-arrow htp-v115-side-next" id="htpCarouselNext" aria-label="Next example project">${icon('arrow',21)}</button></div><p class="htp-v113-scroll-hint">Projects rotate automatically. Use the side arrows to explore at your own pace.</p>
  </section>
  <section class="htp-section htp-v113-map-preview" aria-labelledby="htp-v113-map-heading">
     <div class="htp-v113-map-copy"><span class="htp-kicker">LOCAL OPPORTUNITIES</span><h2 id="htp-v113-map-heading">Find work around the corner.</h2><p>Workers can explore open tasks by approximate area, filter by category, and browse nearby opportunities on the interactive job map.</p><button type="button" class="htp-text-action" data-view="browse">Explore the real job map ${icon('arrow',17)}</button><p class="htp-v113-map-legal">Map illustration only. Pins and job counts below are examples, not live locations.</p></div>
     <div class="htp-v113-map-art" role="img" aria-label="Illustrative neighborhood map showing grouped example tasks, not actual locations"><div class="htp-v113-road r1"></div><div class="htp-v113-road r2"></div><div class="htp-v113-road r3"></div><div class="htp-v113-road r4"></div><div class="htp-v113-park"></div><span class="htp-v113-street street-a">LOCAL JOB AREAS</span><span class="htp-v113-street street-b">NEIGHBORHOOD</span><div class="htp-v113-cluster c1" aria-hidden="true">3</div><div class="htp-v113-cluster c2" aria-hidden="true">5</div><div class="htp-v113-cluster c3" aria-hidden="true">2</div><div class="htp-v113-map-label">Illustrative map preview</div></div>
  </section>
  <section class="htp-section htp-worker-callout" aria-labelledby="htp-worker-heading"><div class="htp-worker-art" aria-hidden="true">${icon('briefcase',65)}</div><div class="htp-worker-copy"><span>FOR LOCAL WORKERS</span><h2 id="htp-worker-heading">Your skills. Your schedule. Your next opportunity.</h2><p>Find local projects, submit offers, and build a portfolio of completed work.</p></div><button class="btn btn-secondary" data-view="browse">Explore available jobs ${icon('arrow',17)}</button></section>
  <section class="htp-section htp-benefits htp-v113-trust" aria-labelledby="htp-benefits-heading"><div class="htp-section-intro"><span class="htp-kicker">BUILT FOR CLEARER DECISIONS</span><h2 id="htp-benefits-heading">Know the details before you decide.</h2><p>Explore the tools available on HomeTask, without promises or guarantees we can't verify.</p></div><div class="htp-benefits-grid"><div>${icon('star',24)}<strong>HomeTasker profiles</strong><p>See reviews and prior work when they're available.</p></div><div>${icon('message',24)}<strong>Compare offers</strong><p>Review different proposals before choosing someone.</p></div><div>${icon('calendar',24)}<strong>Track the task</strong><p>See scheduling and project status after hiring.</p></div><div>${icon('pin',24)}<strong>Approximate areas</strong><p>Explore the job map without displaying an exact home address.</p></div></div></section>
  <section class="htp-section htp-v116-mobile" aria-labelledby="htp-v116-mobile-heading">
   <div class="htp-v116-app-content">
    <span class="htp-v116-app-label">MADE FOR LIFE ON THE GO</span>
    <h2 id="htp-v116-mobile-heading">HomeTask, wherever you go.</h2>
    <p>Keep your tasks, offers and local opportunities close at hand. Here's a preview of how a HomeTask mobile experience could look.</p>
    <div class="htp-v116-platform"><span>${icon('smartphone',19)} Coming soon to iOS and Android</span></div>
    <small class="htp-v116-app-disclaimer">Concept preview only. The mobile app is not available for download yet.</small>
   </div>
   <div class="htp-v116-device-area">
    <div class="htp-v116-float-chip chip-left">${icon('message',17)}<span>Review your offers</span></div>
    <div class="htp-v116-float-chip chip-right">${icon('pin',17)}<span>Explore nearby</span></div>
    <div class="htp-v116-phone" role="img" aria-label="Illustrative HomeTask app phone mockup showing a local jobs dashboard and nearby task examples">
     <div class="htp-v116-phone-screen">
      <div class="htp-v116-phone-status"><span>9:41</span><span class="htp-v116-status-pips">●●● ▰</span></div>
      <div class="htp-v116-phone-brand"><img class="htp-v117-phone-logo" src="/assets/logo-1-wordmark.png?v=151107" alt="HomeTask" decoding="async" /><span class="htp-v116-phone-bell">${icon('message',17)}</span></div>
      <div class="htp-v116-phone-greeting"><small>YOUR NEIGHBORHOOD</small><strong>Find local work.</strong><span>Small jobs, right around you.</span></div>
      <div class="htp-v116-phone-search">${icon('search',15)} <span>Search tasks near you</span></div>
      <div class="htp-v116-phone-section"><strong>Featured examples</strong><small>See all ${icon('arrow',11)}</small></div>
      <div class="htp-v116-phone-listing"><span class="htp-v116-listing-icon">${icon('package',21)}</span><div><strong>Assemble a desk</strong><small>Furniture assembly · Sample</small><span>${icon('pin',11)} Nearby area</span></div><span class="htp-v116-listing-next">${icon('arrow',14)}</span></div>
      <div class="htp-v116-phone-listing"><span class="htp-v116-listing-icon green">${icon('leaf',21)}</span><div><strong>Yard cleanup</strong><small>Outdoor help · Sample</small><span>${icon('pin',11)} Nearby area</span></div><span class="htp-v116-listing-next">${icon('arrow',14)}</span></div>
      <div class="htp-v116-phone-nav"><span class="active">${icon('house',15)} Home</span><span>${icon('search',15)} Explore</span><span>${icon('message',15)} Inbox</span><span>${icon('user',15)} Profile</span></div>
     </div>
    </div>
   </div>
  </section>
  <section class="htp-section htp-bottom"><div class="htp-faq"><span class="htp-kicker">FAQ</span><h2>Common questions.</h2><details><summary>How does HomeTask work?</summary><p>Customers post a task, workers can submit offers, and customers choose who to hire. Availability and features depend on the current stage of the platform.</p></details><details><summary>Can I browse jobs before signing up?</summary><p>Yes, you can explore available listings. You'll need an account to post a task or submit an offer.</p></details><details><summary>How much does it cost?</summary><p>Review any fees shown during the booking and payment process before confirming. Do not send payments outside the platform.</p></details></div><div class="htp-final-cta"><span class="htp-final-mark">${icon('house',48)}</span><div><h2>Ready to get started?</h2><p>Take that next task off your list.</p><button class="btn btn-primary" data-view="post">Post a task ${icon('arrow',17)}</button></div></div></section>
  <div class="htp-disclaimer">Project imagery is illustrative. Example tasks shown here are not actual customer bookings.</div>
 </div>`;
}

function hasOfferForJob(j){return !!state.me && role()==='worker' && state.offers.some(o=>Number(o.job_id)===Number(j.id));}
function listingPhotoLabel(j){
 const count=Number(j.photo_count??j.photos_count??j.image_count);
 return Number.isFinite(count)&&count>1?`${count} photos`:'Task photo';
}
function jobBookmark(j){
 const saved=state.savedJobIds.includes(j.id);
 return `<button class="ht120-bookmark ${saved?'is-saved':''}" type="button" data-save-job="${j.id}" aria-label="${saved?'Remove saved job':'Save job'}" aria-pressed="${saved?'true':'false'}" title="${saved?'Remove saved job':'Save job'}"><svg class="ht120-ribbon-shape" viewBox="0 0 32 64" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="M0 0H32V61L16 50L0 61Z" style="stroke:none!important"/><path d="M0 0V61L16 50L32 61V0" style="fill:none!important"/></svg></button>`;
}
function shortJobCardDate(timestamp){
 const value=Number(timestamp);
 if(!Number.isFinite(value)||value<=0)return 'Date unavailable';
 return new Date(value*1000).toLocaleDateString('en-US',{month:'short',day:'numeric'});
}
function ht1547CardSchedule(j){
 const confirmed=j.scheduled_start||j.appointment_start||j.confirmed_start||j.appointment?.start;
 if(confirmed&&Number.isFinite(Date.parse(confirmed)))return {label:new Date(confirmed).toLocaleDateString('en-US',{month:'short',day:'numeric'}),title:'Confirmed job date'};
 const slots=Array.isArray(j.slots)?j.slots.map(x=>x?.start).filter(Boolean).map(x=>Date.parse(x)).filter(Number.isFinite):[];
 if(slots.length){const earliest=Math.min(...slots);return {label:new Date(earliest).toLocaleDateString('en-US',{month:'short',day:'numeric'}),title:'Customer proposed job date, not yet confirmed'};}
 if(j.flexible_schedule||j.timing_preference==='flexible')return {label:'Flexible',title:'Customer has not selected a fixed job date'};
 return {label:'Not scheduled',title:'No job date has been selected'};
}
function ht133DeviceDistance(j){
 if(!state.personalGeo)return '';
 const location=jobCoordinates(j);if(!location)return '';
 const distance=milesBetween(state.personalGeo,location);
 return Number.isFinite(distance)?`<span class="ht133-device-distance" title="Straight-line approximate distance from your device location, not travel distance">${icon('pin',14)} ~${distance.toFixed(1)} mi from you</span>`:'';
}
function jobCard(j){
 const offered=hasOfferForJob(j);
 const saved=state.savedJobIds.includes(j.id),worker=state.me&&role()==='worker'&&!mine(j);
 const isFeatured=worker&&state.view==='browse'&&featuredJobs().some(match=>Number(match.job.id)===Number(j.id));
 return `<article class="job-card interactive-job-card explore-job-card" role="button" tabindex="0" data-card-job="${j.id}" aria-label="View ${e(j.title)}">
 ${j.has_main_photo?`<div class="job-listing-photo ht158-cover"><img src="/api/jobs/${j.id}/main-photo" alt="Main photo for ${e(j.title)}" loading="lazy" /></div>`:`<div class="ht151-photo-placeholder">${icon(categories[j.category]||'house',29)}<span>${e(j.category)}</span></div>`}
 <div class="job-top"><div class="job-title-wrap"><div class="job-icon">${icon(categories[j.category]||'house',23)}</div><div><h3>${e(j.title)}</h3><span class="status ${statusClass(j)}">${status(j)}</span>${mine(j)?`<span class="tag own-listing-tag">${icon("house",12)} Your listing</span>`:""}${offered?'<span class="tag offer-sent-tag">✓ Offer sent</span>':''}</div></div><div class="price ht151-card-price">${dollars(j.budget)}<small>Task budget</small></div></div>
 <div class="ht15107-listing-summary" aria-label="Task overview"><span>${icon('pin',14)} ${e(coarseLocation(j.location)||'Area not listed')}</span><span>${icon('clock',14)} ${e(compactDurationText(Number(j.duration_minutes||120)))}</span><span title="${e(ht1547CardSchedule(j).title)}" aria-label="${e(ht1547CardSchedule(j).title+': '+ht1547CardSchedule(j).label)}">${icon('calendar',14)} ${e(ht1547CardSchedule(j).label)}</span>${worker?ht133DeviceDistance(j):''}</div>
 <p>${e(j.description.length>140?j.description.slice(0,140)+'…':j.description)}</p>
 ${worker&&state.jobSort==='match'&&featuredSkillScore(j,skillTerms())>0?'<div class="ht-match-explain">'+icon('check',14)+' Recommended because it matches your listed skills</div>':''}
 ${offered?'<div class="ht151-card-bottom"><span class="ht151-offered-state">Offer submitted</span></div>':''}
 ${worker?jobBookmark(j):''}${isFeatured?`<span class="ht142-featured-sticker ht151-browse-featured-sticker" aria-label="Featured recommendation">${icon('sparkle',14)} Featured</span>`:''}
 </article>`;
}
function browse(){return `<section class="page browse-page ${state.mobileFiltersOpen?'mobile-filters-open':''}"><div class="page-title"><span class="kicker">MARKETPLACE</span><h1>${state.browseFeaturedOnly?'Featured listings':'Explore jobs'}</h1><p>${state.browseFeaturedOnly?'Recommended open jobs ranked by location, skills, experience, and recency.':'Search local jobs, narrow your results, or view matching listings on the map.'}</p></div>${state.browseFeaturedOnly?`<div class="featured-search-banner"><span>${icon('pin',17)} Recommended for you · ${e(featuredOrigin().label)}</span><button class="mini-btn" type="button" id="showAllJobs">Show all jobs</button></div>`:''}
 <div class="ht151-category-rail" aria-label="Filter tasks by category"><button type="button" data-quick-category="" class="ht151-category-chip ${!state.browseFeaturedOnly&&!state.browseFilters.category?'selected':''}">All jobs</button><button type="button" id="ht151FeaturedQuickFilter" class="ht151-category-chip ht151-featured-filter ${state.browseFeaturedOnly?'selected':''}" aria-pressed="${state.browseFeaturedOnly}">${icon('sparkle',16)} Featured</button>${Object.entries(categories).map(([cat,ic])=>`<button type="button" class="ht151-category-chip ${!state.browseFeaturedOnly&&state.browseFilters.category===cat?'selected':''}" data-quick-category="${e(cat)}">${icon(ic,16)} ${e(cat)}</button>`).join('')}</div><div class="mobile-search-tools"><label class="mobile-quick-search" for="mobileJobSearch">${icon('search',19)}<input id="mobileJobSearch" type="search" placeholder="Search nearby jobs" aria-label="Search jobs" autocomplete="off" /></label><button class="mobile-filter-trigger" type="button" id="mobileFiltersButton" aria-expanded="false" aria-controls="mobileFiltersPanel">${icon('list',19)}<span>Filters</span></button></div>
 <div class="ht152-browse-columns"><div class="explore-search panel" id="mobileFiltersPanel">
  <div class="explore-search-primary"><label class="explore-search-field explore-query"><span>Search jobs</span><span class="ht1544-search-wrap ht1546-search-wrap">${icon('search',17)}<input class="control search" id="searchInput" placeholder="Search jobs..." aria-label="Search jobs" autocomplete="off"/><span class="ht1546-search-suggestion" aria-hidden="true">Try “painting”</span></span></label><label class="explore-search-field explore-location"><span>Location</span><input class="control" id="nearLocation" placeholder="City, ZIP, or street address" value="${e(state.nearbyLabel)}" autocomplete="off"/></label><label class="explore-search-field explore-distance"><span>Distance</span><select class="control" id="nearRadius"><option value="0">Any distance</option>${[5,10,15,25,50,100].map(n=>`<option value="${n}" ${state.nearbyRadius===n?'selected':''}>Within ${n} mi</option>`).join('')}</select></label><button class="btn btn-primary explore-apply" id="nearSearch">Search area</button></div>
  <details class="ht1531-filter-menu"><summary>Filters ${icon('list',15)}</summary><div class="ht1531-filter-content">
  <div class="explore-search-secondary"><label><span>Category</span><select id="categoryFilter" class="control"><option value="">All categories</option>${options(Object.keys(categories))}</select></label><div class="ht142-budget-filter"><span class="ht142-field-label">Budget</span><button type="button" id="ht142BudgetToggle" class="ht142-budget-trigger" aria-expanded="false" aria-controls="ht142BudgetPanel">${state.budgetMin||state.budgetMax?`$${state.budgetMin||0} – ${state.budgetMax?'$'+state.budgetMax:'Any max'}`:'Any budget'} <span aria-hidden="true">⌄</span></button><div id="ht142BudgetPanel" class="ht142-budget-popover" hidden><div class="ht142-budget-title">Price range <button type="button" id="ht142BudgetReset">Reset</button></div><div class="ht142-range-track"><div class="ht142-range-fill" id="ht142RangeFill"></div><input aria-label="Minimum task budget" id="ht142RangeMin" type="range" min="0" max="2000" step="25" value="${Math.min(state.budgetMin||0,2000)}"/><input aria-label="Maximum task budget" id="ht142RangeMax" type="range" min="0" max="2000" step="25" value="${Math.min(state.budgetMax||2000,2000)}"/></div><div class="ht142-budget-numbers"><label>Min $<input id="ht142BudgetMin" type="number" min="0" step="1" inputmode="numeric" value="${state.budgetMin||0}"/></label><label>Max $<input id="ht142BudgetMax" type="number" min="0" step="1" inputmode="numeric" placeholder="Any" value="${state.budgetMax||''}"/></label></div><small>Drag either end or enter a price. No maximum means any budget.</small></div></div><button class="btn btn-secondary" id="resetFilters">Clear filters</button></div>
  <div class="ht1532-sidebar-toggles" role="group" aria-label="Listing visibility filters"><h3>Listing visibility</h3><label class="offer-hide-filter"><input type="checkbox" id="hideOwnListings" ${state.hideOwnListings?'checked':''}/> <span>Hide my listings</span></label>${state.me?`<label class="offer-hide-filter"><input type="checkbox" id="hideOfferedJobs" ${state.hideOfferedJobs?'checked':''}/> <span>Hide jobs I've offered on</span></label>`:''}</div>
  </div></details>
  <p class="mock-meta explore-location-status" id="radiusStatus">${state.nearbyCenter?`Searching around ${e(state.nearbyLabel)}.`:'Distance is measured in straight-line miles. Enter a location and click Search area to apply.'}</p>
 </div>
 <div class="ht152-browse-results"><div class="browse-toolbar"><div><strong id="resultCount">${filteredJobs().length} available jobs</strong><span class="map-hint">Blue circles show approximate locations. Exact addresses are private until hiring.</span></div><div class="ht-sort-wrap"><label for="jobSort">Sort by</label><select id="jobSort" class="control"><option value="newest" ${state.jobSort==='newest'?'selected':''}>Newest first</option><option value="highest" ${state.jobSort==='highest'?'selected':''}>Highest pay</option><option value="nearest" ${state.jobSort==='nearest'?'selected':''}>Closest distance</option><option value="match" ${state.jobSort==='match'?'selected':''}>Best match</option><option value="soonest" ${state.jobSort==='soonest'?'selected':''}>Soonest scheduled</option></select></div><div class="view-toggle"><button id="listMode" class="${state.mapMode==='list'?'selected':''}" aria-pressed="${state.mapMode==='list'}">List</button><button id="mapMode" class="${state.mapMode==='map'?'selected':''}" aria-pressed="${state.mapMode==='map'}">Map</button></div></div><div id="ht1544ActiveFilters" class="ht1544-active-filters" aria-label="Active job filters">${ht1544FilterChips()}</div><div class="job-grid ht153-scroll-results" id="jobResults" ${state.mapMode==='map'?'hidden':''}>${jobResults(filteredJobs())}</div><div id="mapPanel" ${state.mapMode!=='map'?'hidden':''}><div class="mobile-map-header"><strong>${icon('map',18)} Nearby jobs</strong><button class="mini-btn" type="button" id="mobileMapExpand" aria-pressed="false">Expand map</button></div><div class="ht-map-stage"><div id="jobMap" role="region" aria-label="Map of available jobs"></div><div id="htMapLoading" class="ht-map-loading" role="status" aria-live="polite" aria-label="Loading the job map"><div class="ht-map-loading-art" aria-hidden="true"><span class="ht-map-loading-ring"></span><span class="ht-map-loading-pin">${icon('map-pin',29)}</span></div><strong id="htMapLoadingTitle">Finding jobs near you...</strong><p id="htMapLoadingMessage">Preparing the map and nearby task locations</p><button type="button" id="htMapRetry" class="btn btn-secondary" hidden>Retry map</button></div><div id="htMapRail" class="ht-map-rail" hidden aria-label="Jobs in selected map area"></div></div><p class="map-hint map-attribution" id="htMapAttribution">Job circles use approximate areas, never exact addresses. Zoom is limited for privacy. Groups combine and separate as you zoom; click a circle to browse jobs.</p><div id="mapStatus" class="inline-note" role="status">Loading job locations...</div><div id="unmappedJobs"></div></div></div></div></section>`}
function ht1544FilterChips(){
 const f=state.browseFilters||{},items=[];
 if(f.query)items.push(['query',`Search: ${f.query}`]);
 if(f.category)items.push(['category',f.category]);
 if(state.budgetMin||state.budgetMax)items.push(['budget',`Budget: $${state.budgetMin||0} – ${state.budgetMax?'$'+state.budgetMax:'Any max'}`]);
 if(state.nearbyRadius&&state.nearbyCenter)items.push(['distance',`Within ${state.nearbyRadius} mi`]);
 if(state.browseFeaturedOnly)items.push(['featured','Featured']);
 return items.length?`<span class="ht1544-filter-heading">Active filters</span>${items.map(([key,label])=>`<button class="ht1544-filter-chip" data-ht1544-remove="${key}" type="button" aria-label="Remove ${e(label)} filter">${e(label)} <span aria-hidden="true">×</span></button>`).join('')}<button type="button" class="ht1544-clear-all" id="ht1544ClearAll">Clear all</button>`:'';
}
function ht1544BindFilterChips(){
 const panel=$('ht1544ActiveFilters');if(!panel)return;
 panel.innerHTML=ht1544FilterChips();
 panel.querySelector('#ht1544ClearAll')?.addEventListener('click',()=>$('resetFilters')?.click());
 panel.querySelectorAll('[data-ht1544-remove]').forEach(btn=>btn.onclick=()=>{
  const key=btn.dataset.ht1544Remove;
  if(key==='query'){state.browseFilters.query='';if($('searchInput'))$('searchInput').value='';}
  if(key==='category'){state.browseFilters.category='';if($('categoryFilter'))$('categoryFilter').value='';ht142SyncCategoryLabel();}
  if(key==='budget'){state.budgetMin=0;state.budgetMax=0;ht142BindBudget();}
  if(key==='distance'){state.nearbyRadius=0;if($('nearRadius'))$('nearRadius').value='0';}
  if(key==='featured')state.browseFeaturedOnly=false;
  filterJobs();
 });
}
function jobResults(jobs){const eligible=jobs.filter(j=>j.status==='open');return eligible.length?eligible.map(jobCard).join(''):`<div class="empty"><h3>${state.browseFeaturedOnly?'No featured jobs':'No open jobs match'}</h3><p>${state.browseFeaturedOnly?e(featuredEmptyText()):state.browseFilters.query?`No jobs matched “${e(state.browseFilters.query)}”. Try a shorter search or clear that filter.`:(state.budgetMin||state.budgetMax)?'No jobs fit this budget range. Try widening the range.':state.nearbyRadius?'No jobs in this search area. Try expanding the distance.':'Try another category or clear your filters.'}</p></div>`}
function milesBetween(a,b){const rad=Math.PI/180,dlat=(b[0]-a[0])*rad,dlon=(b[1]-a[1])*rad;const x=Math.sin(dlat/2)**2+Math.cos(a[0]*rad)*Math.cos(b[0]*rad)*Math.sin(dlon/2)**2;return 3958.76*2*Math.asin(Math.min(1,Math.sqrt(x)))}
function jobCoordinates(j){
 // Browsing, nearby calculations, and recommendations use privacy-safe area centers.
 if(j.map_latitude!=null&&j.map_longitude!=null){const xy=[Number(j.map_latitude),Number(j.map_longitude)];if(xy.every(Number.isFinite))return xy;}
 return areaLookup(j.location);
}
function visibleMiles(j){
 const center=state.nearbyCenter||state.personalGeo||state.featuredCenter;
 const position=jobCoordinates(j);
 if(!center||!position)return null;
 const d=milesBetween(center,position);
 return Number.isFinite(d)?d:null;
}
function distanceLabel(j){
 const dist=visibleMiles(j);
 if(dist==null)return role()==='worker'?'Choose a location to see distance':'';
 const source=state.nearbyLabel==='Your current location'?'from current location':state.nearbyCenter?'from searched location':'from profile city';
 return `Approx. ${dist.toFixed(1)} miles ${source}`;
}
function filteredJobs(){const q=($('searchInput')?.value||'').toLowerCase(),c=$('categoryFilter')?.value,minBudget=Number(state.budgetMin)||0,maxBudget=Number(state.budgetMax)||0;
 const featuredIds=state.browseFeaturedOnly?new Set(featuredJobs().map(x=>x.job.id)):null;
 return state.jobs.filter(j=>(!featuredIds||featuredIds.has(j.id))&&j.status==='open'&&(!state.hideOwnListings||!mine(j))&&(!state.hideOfferedJobs||role()!=='worker'||!hasOfferForJob(j))&&(!c||j.category===c)&&Number(j.budget)>=minBudget&&(!maxBudget||Number(j.budget)<=maxBudget)&&(!q||[j.title,j.location,j.description,j.category].join(' ').toLowerCase().includes(q))&&(!state.nearbyRadius||!state.nearbyCenter||(jobCoordinates(j)&&milesBetween(state.nearbyCenter,jobCoordinates(j))<=state.nearbyRadius)))
 .sort((a,b)=>{const distance=x=>{const d=visibleMiles(x);return d==null?1e9:d};
   if(state.jobSort==='soonest'){const when=x=>{const slots=(x.slots||[]).map(z=>Date.parse(z.start||'')).filter(Number.isFinite);const start=Date.parse(x.scheduled_start||'');return Number.isFinite(start)?start:slots.length?Math.min(...slots):Number.MAX_SAFE_INTEGER};return when(a)-when(b)||Number(b.created_at)-Number(a.created_at)}
   if(state.jobSort==='highest')return Number(b.budget)-Number(a.budget)||Number(b.created_at)-Number(a.created_at);
   if(state.jobSort==='nearest')return distance(a)-distance(b)||Number(b.created_at)-Number(a.created_at);
   if(state.jobSort==='match'){const score=x=>{const d=visibleMiles(x),preferred=(state.workerPreferences?.categories||[]).includes(x.category)?18:0,skills=featuredSkillScore(x,skillTerms())*2,proximity=d==null?0:Math.max(-20,26-Math.min(46,d*1.5)),slots=(x.slots||[]).length?4:0;return skills+preferred+proximity+slots;};return score(b)-score(a)||distance(a)-distance(b)||Number(b.created_at)-Number(a.created_at)};
   return Number(b.created_at)-Number(a.created_at);
 });
}
async function geocodeSearchCenter(q){
 const url='https://photon.komoot.io/api/?'+new URLSearchParams({q,limit:'1',lat:'43.1566',lon:'-77.6088',lang:'en'});
 const r=await fetch(url,{headers:{Accept:'application/json'}});if(!r.ok)throw Error('Location search is unavailable.');
 const d=await r.json(),f=d.features?.find(x=>Array.isArray(x.geometry?.coordinates));if(!f)throw Error('Location not found. Try a city and state.');
 return [Number(f.geometry.coordinates[1]),Number(f.geometry.coordinates[0])];
}
// Request browser location once on first visit to Find Jobs. No precise coordinates are sent to HomeTask.
function ht1543AutoLocate(){
 if(ht1543AutoLocationRequested||state.personalGeo||!navigator.geolocation)return;
 if(!window.isSecureContext)return; // localhost works as a secure context in modern browsers.
 ht1543AutoLocationRequested=true;
 navigator.geolocation.getCurrentPosition(pos=>{
  const coords=[Number(pos.coords.latitude),Number(pos.coords.longitude)];
  if(!coords.every(Number.isFinite)||Math.abs(coords[0])>90||Math.abs(coords[1])>180)return;
  state.personalGeo=coords; // memory only, never written to profile or sent to our API
  if(state.view==='home'&&role()==='worker'){render();return;}
  if(ht1543UserPickedLocation)return;
  state.nearbyCenter=coords;state.nearbyLabel='Your current location';
  if(state.view==='browse'){
   const field=$('nearLocation');if(field)field.value=state.nearbyLabel;
   const status=$('radiusStatus');if(status)status.textContent='Distances are based on your current location. You can search another area any time.';
   filterJobs();updateMyLocationPin();
  }
 },()=>{
  if(state.view==='browse'&&!ht1543UserPickedLocation){
   const status=$('radiusStatus');if(status)status.textContent='Location unavailable. Distances use your saved profile city; enter a city to search another area.';
  }
 },{enableHighAccuracy:false,timeout:10000,maximumAge:120000});
}
function bindRadiusSearch(){
 const input=$('nearLocation'),range=$('nearRadius');if(!input)return;
 range.onchange=()=>{state.nearbyRadius=Number(range.value);filterJobs()};
 $('nearSearch').onclick=async()=>{ht1543UserPickedLocation=true;const text=input.value.trim();if(!text){state.nearbyCenter=null;state.nearbyLabel='';state.nearbyRadius=0;range.value='0';filterJobs();return;}
  $('radiusStatus').textContent='Finding location…';try{state.nearbyCenter=await geocodeSearchCenter(text);state.nearbyLabel=text;state.nearbyRadius=Number(range.value)||25;range.value=String(state.nearbyRadius);filterJobs();$('radiusStatus').textContent=`Showing jobs within ${state.nearbyRadius} miles of ${text}.`;}catch(err){$('radiusStatus').textContent=err.message;toast(err.message)}
 };
 input.onkeydown=ev=>{if(ev.key==='Enter'){$('nearSearch').click()}};
 if($('useMyLocation'))$('useMyLocation').onclick=()=>{ht1543UserPickedLocation=false;if(!navigator.geolocation)return toast('Browser location is not supported.');$('radiusStatus').textContent='Requesting location permission…';navigator.geolocation.getCurrentPosition(pos=>{state.personalGeo=[pos.coords.latitude,pos.coords.longitude];state.nearbyCenter=state.personalGeo;state.nearbyLabel='Your current location';input.value=state.nearbyLabel;state.nearbyRadius=Number(range.value)||25;range.value=String(state.nearbyRadius);filterJobs();updateMyLocationPin();$('radiusStatus').textContent=`Within ${state.nearbyRadius} miles of your current location.`},err=>{toast('Location permission denied or unavailable. Enter a city instead.');$('radiusStatus').textContent='Enter a location to search manually.'},{enableHighAccuracy:false,timeout:10000})};
}

function filterJobs(){state.browseFilters={query:$('searchInput')?.value||'',category:$('categoryFilter')?.value||'',price:state.budgetMax||''};try{sessionStorage.setItem('ht154_browse_filters',JSON.stringify(state.browseFilters))}catch{};if($('mobileJobSearch')&&$('mobileJobSearch').value!==state.browseFilters.query)$('mobileJobSearch').value=state.browseFilters.query;document.querySelectorAll('[data-quick-category]').forEach(x=>x.classList.toggle('selected',!state.browseFeaturedOnly&&x.dataset.quickCategory===state.browseFilters.category));const featuredChip=$('ht151FeaturedQuickFilter');if(featuredChip){featuredChip.classList.toggle('selected',state.browseFeaturedOnly);featuredChip.setAttribute('aria-pressed',String(state.browseFeaturedOnly));}const countBadge=document.querySelector('.ht151-discovery-count');if(countBadge)countBadge.textContent=filteredJobs().length+' available';const jobs=filteredJobs();$('resultCount').textContent=`${jobs.length} open job${jobs.length===1?'':'s'}`;ht1544BindFilterChips();if(state.mapMode==='map'){drawMapPins(jobs);return;}$('jobResults').innerHTML=jobResults(jobs);document.querySelectorAll('#jobResults [data-card-job]').forEach(el=>{
 el.onclick=ev=>{if(isNestedCardControl(ev,el))return;openJob(Number(el.dataset.cardJob));};
 el.onkeydown=ev=>{if(ev.target===el&&(ev.key==='Enter'||ev.key===' ')){ev.preventDefault();openJob(Number(el.dataset.cardJob));}};
});document.querySelectorAll('#jobResults [data-save-job]').forEach(el=>el.onclick=ev=>{ev.stopPropagation();toggleSavedJob(Number(el.dataset.saveJob))});document.querySelectorAll('#jobResults [data-clear-empty-filters]').forEach(el=>el.onclick=()=>{$('resetFilters')?.click()})}
function setBrowseMode(mode){closeMobileMap();if(state.mapMode===mode)return;state.browseFilters={query:$('searchInput')?.value||'',category:$('categoryFilter')?.value||'',price:state.budgetMax||''};if(window.jobMap){window.jobMap.remove();window.jobMap=null;myLocationMarker=null}state.mapMode=mode;localStorage.setItem('hometask_browse_mode',mode);render();}

// Fallback locations for legacy city/area-only listings.
const knownAreas={
 'rochester, ny':[43.1566,-77.6088], 'henrietta, ny':[43.0595,-77.6122],
 'brighton, ny':[43.1230,-77.5681], 'pittsford, ny':[43.0906,-77.5150],
 'webster, ny':[43.2123,-77.4299], 'greece, ny':[43.2098,-77.6931],
 'irondequoit, ny':[43.2134,-77.5797], 'penfield, ny':[43.1309,-77.4756],
 'fairport, ny':[43.0992,-77.4430], 'gates, ny':[43.1512,-77.7133],
 'brockport, ny':[43.2137,-77.9392], 'victor, ny':[42.9826,-77.4091],
 'spencerport, ny':[43.1864,-77.8039], 'chili, ny':[43.1065,-77.7458],
 'east rochester, ny':[43.1087,-77.4864], 'canandaigua, ny':[42.8875,-77.2817],
 'buffalo, ny':[42.8864,-78.8784], 'syracuse, ny':[43.0481,-76.1474],
 'new york, ny':[40.7128,-74.0060]
};
const geoCacheKey='hometask_geocode_cache_v1';
let geoCache={};try{geoCache=JSON.parse(localStorage.getItem(geoCacheKey)||'{}')}catch{}
let mapLayer=null,mapDrawSequence=0,myLocationMarker=null;
function coarseLocation(raw){
 const parts=String(raw||'').split(',').map(x=>x.trim()).filter(Boolean);
 let place=parts.length>=2?parts.slice(-2).join(', '):parts[0]||'';
 // For '123 Main St, Rochester', retain only the city rather than the street.
 if(parts.length===2 && /^\d/.test(parts[0]))place=parts[1];
 if(/^\d/.test(place.split(',')[0].trim()) && parts.length===1)return '';
 if(parts.length===1 && /^\d/.test(parts[0]))return '';
 return place;
}
function areaLookup(raw){const normalized=coarseLocation(raw).toLowerCase().replace(/\s+/g,' ').trim();
 if(knownAreas[normalized])return knownAreas[normalized];
 const city=normalized.split(',')[0].trim();
 for(const [k,v] of Object.entries(knownAreas))if(k.split(',')[0]===city)return v;
 return geoCache[normalized]||null;
}
function mapMarkerHtml(j){return `<div class="pin-price">${e(dollars(j.budget))}</div>`}
function renderPinPopup(j){return `<div class="job-map-popup"><span class="kicker">${e(j.category)}</span>${mine(j)?`<span class="tag own-listing-tag">${icon("house",12)} Your listing</span>`:""}${hasOfferForJob(j)?'<span class="tag offer-sent-tag">✓ Offer sent</span>':''}<h3>${e(j.title)}</h3>${j.has_main_photo?`<img class="map-popup-photo" src="/api/jobs/${j.id}/main-photo" loading="lazy" alt="Job photo"/>`:""}<div class="popup-price">${dollars(j.budget)}</div><p>${icon("pin",14)} ${e(coarseLocation(j.location)||'Approximate area')} · ${e(compactDurationText(Number(j.duration_minutes||120)))}${j.offer_deadline?` · Offers close ${e(j.offer_deadline)}`:''}</p><button class="btn btn-primary map-job-link" data-map-job="${j.id}">${role()==='worker'?'View job & make offer':'View job'}</button></div>`}
async function resolveGeo(raw){
 const loc=coarseLocation(raw),key=loc.toLowerCase().replace(/\s+/g,' ').trim();
 if(!loc||/^\d/.test(loc))return null;
 const hit=areaLookup(raw);if(hit)return hit;
 // OpenStreetMap's public search is used at most once for each uncached area.
 try{const resp=await fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&addressdetails=0&q=${encodeURIComponent(loc)}`,{headers:{'Accept':'application/json'}});
 if(!resp.ok)return null;
 const results=await resp.json();if(!results.length)return null;
 const coords=[Number(results[0].lat),Number(results[0].lon)];
 if(!coords.every(Number.isFinite))return null;
 geoCache[key]=coords;try{localStorage.setItem(geoCacheKey,JSON.stringify(geoCache))}catch{}
 return coords;
 }catch{return null}
}
function metersPerMapPixel(lat,zoom){
 // Web Mercator approximation, used to keep approximate job areas legible when zoomed out.
 return 40075016.686*Math.max(0.01,Math.cos(Number(lat)*Math.PI/180))/(256*Math.pow(2,zoom));
}
function visibleJobCircleRadius(baseMeters,lat,zoom){
 const safeZoom=Math.max(2,Math.min(19,Number(zoom)||12));
 // As the worker zooms out, increase the circle's visual diameter so jobs remain discoverable.
 // Never shrink below the privacy radius returned by the server.
 const minimumPixels=Math.min(37,Math.max(18,18+(12-safeZoom)*2.2));
 return Math.max(Number(baseMeters)||402.336,minimumPixels*metersPerMapPixel(lat,safeZoom));
}
function resizeJobMapCircles(){
 if(!window.jobMap||!mapLayer)return;
 const zoom=window.jobMap.getZoom();
 mapLayer.eachLayer(layer=>{
  if(typeof layer.setRadius==='function'&&layer.options?.basePrivacyRadius){
   layer.setRadius(visibleJobCircleRadius(layer.options.basePrivacyRadius,layer.getLatLng().lat,zoom));
  }
 });
}
// Your own pin is separate from job-area circles and is never added to server data.
// An exact dot requires the visitor's explicit browser geolocation permission.
async function updateMyLocationPin(){
 const map=window.jobMap;if(!map||!state.me)return;
 let pos=state.personalGeo,precise=!!pos;
 if(!pos){
  const city=String(state.me.location||'').trim();
  if(!city){if(myLocationMarker&&htMapProvider==='leaflet'){map.removeLayer(myLocationMarker);myLocationMarker=null;}if(htGoogleUserMarker){htGoogleUserMarker.map=null;htGoogleUserMarker=null;}return;}
  pos=areaLookup(city);
  if(!pos){try{pos=await geocodeSearchCenter(city)}catch{return;}}
 }
 if(window.jobMap!==map||!pos||pos.length!==2)return;
 if(htMapProvider==='google'){
  if(htGoogleUserMarker){htGoogleUserMarker.map=null;htGoogleUserMarker=null;}
  const markerContent=document.createElement('div');markerContent.className='my-map-pin';markerContent.innerHTML='<span class="my-map-pin-inner" aria-hidden="true">'+icon('user',17)+'</span>';
  if(google.maps.marker?.AdvancedMarkerElement)htGoogleUserMarker=new google.maps.marker.AdvancedMarkerElement({map,position:{lat:pos[0],lng:pos[1]},content:markerContent,title:precise?'Your current location':'Your saved city'});
  return;
 }
 if(myLocationMarker){map.removeLayer(myLocationMarker);myLocationMarker=null;}
 const symbol='<span class="my-map-pin-inner" aria-hidden="true">'+icon('user',17)+'</span>';
 const glyph=L.divIcon({html:symbol,iconSize:[38,38],iconAnchor:[19,19],className:'my-map-pin'});
 myLocationMarker=L.marker(pos,{icon:glyph,zIndexOffset:1000,keyboard:true}).addTo(map);
 myLocationMarker.bindPopup(precise?'<strong>Your location</strong><p>Only shown on your device after you allowed location access.</p>':'<strong>Your saved city</strong><p>Approximate city center, not your exact position. Only shown on your map.</p>');
}

// 15.10.19: Privacy zoom limit + smooth, translucent numbered clusters.
const HT_JOB_MAP_MAX_ZOOM=13;
// 15.10.18: Zoom-aware map clustering with optional Google Maps provider.
// Use privacy-safe, server-provided approximate coordinates only.
let htMapProvider='leaflet',htGoogleClusterer=null,htGoogleMarkers=[],htGoogleUserMarker=null;
let htMapPins=[],htMapGeocodeSeq=0,htMapNoAutoFit=false,htMapGoogleLoad=null,htLeafletDrawGroup=null;
let htMapFadeTimers=[];
let htMapReadyTimer=null,htMapTileLayer=null,htMapGoogleTileListener=null;
function htMapClearReadiness(){
 if(htMapReadyTimer){clearTimeout(htMapReadyTimer);htMapReadyTimer=null;}
 if(htMapTileLayer){htMapTileLayer.off('load',htMapReady);htMapTileLayer.off('tileerror',htMapTileFailed);htMapTileLayer=null;}
 if(htMapGoogleTileListener){htMapGoogleTileListener.remove();htMapGoogleTileListener=null;}
}
// 15.13.38: A map that already has visible tiles should never keep its spinner
// after a navigation. Defer until layout is visible and respect failed state.
function ht138MapLoadingGuard(){
 [500,1400,2800,5000].forEach(delay=>setTimeout(()=>{
  const overlay=$('htMapLoading'), el=$('jobMap');
  if(!overlay||!el||!overlay.isConnected||state.view!=='browse'||state.mapMode!=='map'||!window.jobMap||overlay.classList.contains('is-error'))return;
  if(htMapProvider==='leaflet'){
   window.jobMap.invalidateSize?.({pan:false});
   if(el.querySelector('.leaflet-tile-loaded')||el.querySelector('.leaflet-overlay-pane .leaflet-marker-icon'))htMapReady();
  }else if(htMapProvider==='google'){
   if(el.querySelector('canvas')||el.querySelector('[aria-label="Map"]'))htMapReady();
  }
 },delay));
}
function htMapLoading(message='Preparing the map and nearby task locations'){
 htMapClearReadiness();
 const overlay=$('htMapLoading');if(!overlay)return;
 overlay.hidden=false;overlay.classList.remove('is-ready','is-error');
 const title=$('htMapLoadingTitle');if(title)title.textContent='Finding jobs near you...';
 const detail=$('htMapLoadingMessage');if(detail)detail.textContent=message;
 const retry=$('htMapRetry');if(retry)retry.hidden=true;
 htMapReadyTimer=setTimeout(()=>htMapFailed('Map tiles are taking longer than expected. Check your connection and try again.'),15000);
}
function htMapReady(){
 const overlay=$('htMapLoading');if(!overlay||state.view!=='browse'||state.mapMode!=='map')return;
 htMapClearReadiness();overlay.classList.remove('is-error');overlay.classList.add('is-ready');
 // Fade after actual provider tile readiness, not an arbitrary loading delay.
}
function htMapTileFailed(){const status=$('mapStatus');if(status)status.textContent='Some map tiles could not load.';}
function htMapFailed(message){
 htMapClearReadiness();const overlay=$('htMapLoading');if(!overlay)return;
 overlay.hidden=false;overlay.classList.remove('is-ready');overlay.classList.add('is-error');
 $('htMapLoadingTitle').textContent='Map unavailable';$('htMapLoadingMessage').textContent=message;
 const retry=$('htMapRetry');if(retry)retry.hidden=false;
}
function htRetryMap(){
 htMapClearReadiness();destroyJobMap();htMapNoAutoFit=false;htMapGoogleLoad=null;
 htMapLoading('Trying to load nearby opportunities again');initJobMap();
}

function destroyJobMap(){
 htMapClearReadiness();
 ++htMapGeocodeSeq;++mapDrawSequence;
 htMapFadeTimers.forEach(clearTimeout);htMapFadeTimers=[];
 if(htGoogleClusterer){htGoogleClusterer.clearMarkers();htGoogleClusterer=null;}
 for(const marker of htGoogleMarkers)marker.map=null;
 htGoogleMarkers=[];htGoogleUserMarker?.setMap?.(null);htGoogleUserMarker=null;
 if(window.jobMap&&htMapProvider==='leaflet'&&typeof window.jobMap.remove==='function')window.jobMap.remove();
 window.jobMap=null;mapLayer=null;myLocationMarker=null;htLeafletDrawGroup=null;
 const rail=$('htMapRail');if(rail){rail.hidden=true;rail.innerHTML='';}
}
function htMapCard(j){
 const photo=j.has_main_photo?`<img src="/api/jobs/${Number(j.id)}/main-photo" alt="Task photo" loading="lazy"/>`:`<div class="ht-map-card-fallback" aria-hidden="true">${icon('image',22)}</div>`;
 return `<article class="ht-map-job-card" role="group" aria-label="${e(j.title)}">${photo}<div class="ht-map-job-content">${state.me&&role()==='worker'?`<button class="ht142-map-save ${state.savedJobIds.includes(Number(j.id))?'is-saved':''}" type="button" data-save-job="${Number(j.id)}" aria-label="${state.savedJobIds.includes(Number(j.id))?'Remove saved job':'Save job'}" aria-pressed="${state.savedJobIds.includes(Number(j.id))}"><svg viewBox="0 0 32 64" aria-hidden="true"><path d="M0 0H32V61L16 50L0 61Z" style="stroke:none!important"/><path d="M0 0V61L16 50L32 61V0" style="fill:none!important"/></svg></button>`:''}<span class="ht-map-job-category">${e(j.category)}</span><strong>${e(j.title)}</strong><span class="ht-map-job-meta">${e(coarseLocation(j.location)||'Approximate area')} · ${e(compactDurationText(Number(j.duration_minutes||120)))}</span><div class="ht-map-job-bottom"><b>${dollars(j.budget)}</b><button type="button" class="btn btn-primary" data-map-job="${Number(j.id)}">View job</button></div></div></article>`;
}
function htShowMapCards(jobs,fromCluster=false){
 const rail=$('htMapRail');if(!rail)return;
 const unique=[...new Map(jobs.map(j=>[Number(j.id),j])).values()];
 if(!unique.length){rail.hidden=true;return;}
 rail.hidden=false;rail.classList.toggle('is-expanded',fromCluster);
 rail.innerHTML=`<div class="ht-map-rail-heading"><div><span class="kicker">${fromCluster?'JOBS IN THIS AREA':'SELECTED JOB'}</span><strong>${unique.length} ${unique.length===1?'job':'jobs'} available</strong></div><div class="ht-map-rail-actions"><button type="button" class="mini-btn" data-rail-shift="-1" aria-label="Previous job">←</button><button type="button" class="mini-btn" data-rail-shift="1" aria-label="Next job">→</button><button type="button" class="mini-btn" data-rail-close aria-label="Close job cards">✕</button></div></div><div class="ht-map-card-track" tabindex="0" aria-label="Scroll job cards horizontally">${unique.map(htMapCard).join('')}</div>`;
 rail.querySelectorAll('[data-map-job]').forEach(b=>b.onclick=()=>openJob(Number(b.dataset.mapJob)));
 rail.querySelectorAll('[data-save-job]').forEach(b=>b.onclick=ev=>{ev.stopPropagation();toggleSavedJob(Number(b.dataset.saveJob));});
 rail.querySelector('[data-rail-close]').onclick=()=>{rail.hidden=true};
 rail.querySelectorAll('[data-rail-shift]').forEach(b=>b.onclick=()=>{const track=rail.querySelector('.ht-map-card-track');track.scrollBy({left:Number(b.dataset.railShift)*Math.max(260,track.clientWidth*.7),behavior:'smooth'});});
}
function htMapLoadScript(url){return new Promise((resolve,reject)=>{const s=document.createElement('script');s.src=url;s.async=true;s.onload=resolve;s.onerror=()=>reject(new Error('Map script unavailable'));document.head.appendChild(s);});}
async function htGoogleReady(){
 if(window.google?.maps&&window.markerClusterer?.MarkerClusterer)return true;
 if(htMapGoogleLoad)return htMapGoogleLoad;
 htMapGoogleLoad=(async()=>{
  const r=await fetch('/api/map-config',{credentials:'same-origin'});
  if(!r.ok)return false;
  const config=await r.json();
  if(!config.google_maps_api_key)return false;
  // A public, HTTP-referrer-restricted browser key, never a secret server credential.
  if(!window.google?.maps){
   window.htGoogleMapCallback=()=>{window.dispatchEvent(new Event('ht-google-maps-loaded'));};
   const loaded=new Promise((resolve,reject)=>{const timer=setTimeout(()=>reject(new Error('Google Maps loading timed out')),12000);window.addEventListener('ht-google-maps-loaded',()=>{clearTimeout(timer);resolve();},{once:true});});
   await htMapLoadScript(`https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(config.google_maps_api_key)}&v=weekly&libraries=marker&loading=async&callback=htGoogleMapCallback`);
   await loaded;
  }
  if(!window.markerClusterer?.MarkerClusterer)await htMapLoadScript('https://unpkg.com/@googlemaps/markerclusterer/dist/index.min.js');
  return !!(window.google?.maps&&window.markerClusterer?.MarkerClusterer);
 })().catch(err=>{console.warn('Google Maps unavailable; using OpenStreetMap:',err);return false;});
 return htMapGoogleLoad;
}
async function initJobMap(){
 if(state.view!=='browse'||state.mapMode!=='map'||!$('jobMap')||window.jobMap)return;
 const el=$('jobMap');
 htMapLoading();
 if(await htGoogleReady()){
  if(state.view!=='browse'||state.mapMode!=='map'||!el.isConnected)return;
  try{
   htMapProvider='google';
   window.jobMap=new google.maps.Map(el,{center:{lat:43.1566,lng:-77.6088},zoom:11,maxZoom:HT_JOB_MAP_MAX_ZOOM,mapId:'DEMO_MAP_ID',streetViewControl:false,mapTypeControl:false,fullscreenControl:true,gestureHandling:'greedy'});
   const attribution=$('htMapAttribution');if(attribution)attribution.textContent='Google Maps · Approximate job locations only. Street-level zoom is disabled for privacy. Tap a cluster to browse jobs.';
   htMapGoogleTileListener=google.maps.event.addListenerOnce(window.jobMap,'tilesloaded',htMapReady);
   drawMapPins(filteredJobs());updateMyLocationPin();
   return;
  }catch(err){console.warn('Google Maps initialization failed; falling back.',err);window.jobMap=null;}
 }
 if(typeof L==='undefined'){htMapFailed('The map library could not load. Check your connection, then try again.');const status=$('mapStatus');if(status)status.textContent='Map failed to load. Use List view or retry.';return;}
 htMapProvider='leaflet';
 window.jobMap=L.map('jobMap',{scrollWheelZoom:true,maxZoom:HT_JOB_MAP_MAX_ZOOM}).setView([43.1566,-77.6088],11);
 htMapTileLayer=L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap contributors',maxZoom:HT_JOB_MAP_MAX_ZOOM});
 htMapTileLayer.on('load',htMapReady);htMapTileLayer.on('tileerror',htMapTileFailed);
 htMapTileLayer.addTo(window.jobMap);
 mapLayer=L.featureGroup().addTo(window.jobMap);
 htLeafletDrawGroup=L.layerGroup().addTo(window.jobMap);
 window.jobMap.on('zoomend moveend',()=>htRenderLeafletClusters());
 drawMapPins(filteredJobs());updateMyLocationPin();
 setTimeout(()=>window.jobMap?.invalidateSize?.(),150);
}
function htClusterByPixels(pins,project,radius=74){
 // Group only points that are close at the current zoom level. As the user zooms
 // out, map projection places more jobs within the same cluster radius.
 const ordered=[...pins].sort((a,b)=>a.j.id-b.j.id),clusters=[];
 for(const entry of ordered){
  const pt=project(entry.coords);let best=null,bestDist=radius;
  for(const cluster of clusters){
   const dx=pt.x-cluster.x,dy=pt.y-cluster.y,d=Math.hypot(dx,dy);
   if(d<bestDist){best=cluster;bestDist=d;}
  }
  if(best){const n=best.entries.length;best.x=(best.x*n+pt.x)/(n+1);best.y=(best.y*n+pt.y)/(n+1);best.entries.push(entry);}
  else clusters.push({x:pt.x,y:pt.y,entries:[entry]});
 }
 return clusters;
}
function htRenderLeafletClusters(){
 const map=window.jobMap;if(htMapProvider!=='leaflet'||!map||!htLeafletDrawGroup)return;
 // Fade the previous groups out while the new zoom-level clusters fade in.
 // This avoids the abrupt pop when pins merge and separate, without animating
 // or revealing any underlying private address coordinates.
 const oldGroup=htLeafletDrawGroup;
 const newGroup=L.layerGroup().addTo(map);
 htLeafletDrawGroup=newGroup;
 const projection=coords=>map.project(L.latLng(coords[0],coords[1]),map.getZoom());
 const clusters=htClusterByPixels(htMapPins,projection,78);
 for(const cl of clusters){
  const jobs=cl.entries.map(p=>p.j),pos=map.unproject(L.point(cl.x,cl.y),map.getZoom());
  const multi=jobs.length>1;
  const html=`<span class="ht-map-cluster-bubble ht-map-cluster-enter ${multi?'is-multi':''}" aria-label="${jobs.length} jobs in this approximate area">${jobs.length}</span>`;
  const marker=L.marker(pos,{keyboard:true,icon:L.divIcon({html,className:'ht-map-cluster-pin',iconSize:[multi?58:42,multi?58:42],iconAnchor:[multi?29:21,multi?29:21]})});
  marker.on('click',()=>htShowMapCards(jobs,multi));marker.addTo(newGroup);
 }
 oldGroup.eachLayer(marker=>{const el=marker.getElement?.();el?.querySelector('.ht-map-cluster-bubble')?.classList.add('ht-map-cluster-exit');marker.off('click');});
 const timer=setTimeout(()=>{htMapFadeTimers=htMapFadeTimers.filter(t=>t!==timer);if(map.hasLayer(oldGroup))map.removeLayer(oldGroup);},240);
 htMapFadeTimers.push(timer);
}
function htRenderGoogleClusters(){
 if(htMapProvider!=='google'||!window.jobMap)return;
 htGoogleClusterer?.clearMarkers();htGoogleClusterer=null;
 htGoogleMarkers.forEach(marker=>marker.map=null);htGoogleMarkers=[];
 const map=window.jobMap;
 const Advanced=google.maps.marker?.AdvancedMarkerElement;
 if(!Advanced)return;
 const markerJobs=new Map();
 for(const entry of htMapPins){
  const button=document.createElement('div');button.className='ht-map-cluster-bubble ht-map-cluster-enter';button.textContent='1';button.setAttribute('aria-label',`View ${entry.j.title}`);
  const marker=new Advanced({position:{lat:entry.coords[0],lng:entry.coords[1]},content:button,title:entry.j.title});
  marker.addListener('gmp-click',()=>htShowMapCards([entry.j],false));
  // AdvancedMarkerElement supports DOM click listeners across API revisions.
  button.addEventListener('click',()=>htShowMapCards([entry.j],false));
  markerJobs.set(marker,entry.j);htGoogleMarkers.push(marker);
 }
 htGoogleClusterer=new markerClusterer.MarkerClusterer({map,markers:htGoogleMarkers,
  renderer:{render:({count,position})=>{
   const el=document.createElement('div');el.className='ht-map-cluster-bubble ht-map-cluster-enter is-multi';el.textContent=String(count);el.setAttribute('aria-label',`${count} jobs in this area`);
   return new Advanced({position,content:el,title:`${count} jobs`});
  }},
  onClusterClick:(_event,cluster)=>{htShowMapCards(cluster.markers.map(m=>markerJobs.get(m)).filter(Boolean),true);}
 });
}
async function drawMapPins(jobs){
 if(!window.jobMap)return;
 const seq=++htMapGeocodeSeq,pins=[],missing=[];
 for(const j of jobs){const coords=jobCoordinates(j);if(coords)pins.push({j,coords});else missing.push(j);}
 htMapPins=pins;
 const render=()=>{if(htMapProvider==='google')htRenderGoogleClusters();else htRenderLeafletClusters();};
 render();
 // Initial map framing, not repeated on every filter or zoom event.
 if(!htMapNoAutoFit&&pins.length){
  if(htMapProvider==='google'){
   const bounds=new google.maps.LatLngBounds();pins.forEach(p=>bounds.extend({lat:p.coords[0],lng:p.coords[1]}));window.jobMap.fitBounds(bounds,65);
   if(window.jobMap.getZoom()>HT_JOB_MAP_MAX_ZOOM)window.jobMap.setZoom(HT_JOB_MAP_MAX_ZOOM);
  }else{window.jobMap.fitBounds(L.latLngBounds(pins.map(p=>p.coords)).pad(.3),{maxZoom:HT_JOB_MAP_MAX_ZOOM});}
  htMapNoAutoFit=true;
 }
 const status=$('mapStatus');if(status)status.textContent=`${pins.length} of ${jobs.length} jobs mapped. Select a numbered circle to browse jobs.`;
 const unresolved=[];
 for(const j of missing){
  if(seq!==htMapGeocodeSeq)return;
  const coords=await resolveGeo(j.location);
  if(seq!==htMapGeocodeSeq)return;
  if(coords){pins.push({j,coords});htMapPins=[...pins];render();}
  else unresolved.push(j);
 }
 if(seq!==htMapGeocodeSeq)return;
 if(status)status.textContent=`${pins.length} of ${jobs.length} matching jobs shown.${unresolved.length?' Some locations could not be mapped.':''}`;
 const un=$('unmappedJobs');
 if(un)un.innerHTML=unresolved.length?`<div class="unmapped"><strong>Jobs without a map pin</strong>${unresolved.map(j=>`<button class="mini-btn" data-unmapped="${j.id}">${e(j.title)} · ${dollars(j.budget)}</button>`).join('')}</div>`:'';
 document.querySelectorAll('[data-unmapped]').forEach(b=>b.onclick=()=>openJob(Number(b.dataset.unmapped)));
}
function openPhotoLightbox(data,photos=null,initialIndex=0){
 const sources=Array.isArray(photos)&&photos.length?photos:[data];
 let index=Math.max(0,Math.min(sources.length-1,initialIndex));
 const dialog=document.createElement('div');dialog.className='photo-lightbox ht132-gallery';
 dialog.setAttribute('role','dialog');dialog.setAttribute('aria-modal','true');dialog.setAttribute('aria-label','Photo viewer');
 dialog.innerHTML=`<button type="button" class="icon-btn photo-lightbox-close" aria-label="Close photo">×</button><button type="button" class="ht132-photo-nav ht132-photo-prev" aria-label="Previous photo">&#10094;</button><div class="photo-lightbox-frame"><img alt="Full size photo" /></div><button type="button" class="ht132-photo-nav ht132-photo-next" aria-label="Next photo">&#10095;</button><div class="ht132-photo-counter" aria-live="polite"></div>`;
 document.body.appendChild(dialog);
 const img=dialog.querySelector('img'),counter=dialog.querySelector('.ht132-photo-counter');
 const show=()=>{img.src=sources[index];img.alt=`Task photo ${index+1} of ${sources.length}`;counter.textContent=`${index+1} / ${sources.length}`;dialog.querySelector('.ht132-photo-prev').hidden=sources.length<=1;dialog.querySelector('.ht132-photo-next').hidden=sources.length<=1};
 const move=delta=>{index=(index+delta+sources.length)%sources.length;show()};
 const remove=()=>{document.removeEventListener('keydown',keys);dialog.remove()};
 const keys=ev=>{if(ev.key==='Escape')remove();else if(ev.key==='ArrowLeft'&&sources.length>1){ev.preventDefault();move(-1)}else if(ev.key==='ArrowRight'&&sources.length>1){ev.preventDefault();move(1)}};
 document.addEventListener('keydown',keys);
 dialog.querySelector('.photo-lightbox-close').onclick=remove;
 dialog.querySelector('.ht132-photo-prev').onclick=()=>move(-1);
 dialog.querySelector('.ht132-photo-next').onclick=()=>move(1);
 dialog.onclick=ev=>{if(ev.target===dialog)remove()};
 show();dialog.querySelector('.photo-lightbox-close').focus();
}
let jobExistingPhotos=[], jobDraftUrls=[], jobPhotoOrder=[];
function jobPhotoKeyList(){return [...document.querySelectorAll('#photoDraftPreviews [data-photo-key]')].map(node=>node.dataset.photoKey)}
function drawOrderedJobPhotos(){
 const root=$('photoDraftPreviews');if(!root)return;
 const newFiles=Array.from($('jobPhotoInput')?.files||[]);
 const items=[...jobExistingPhotos.map(p=>({key:'existing:'+p.id,src:p.photo_data,alt:'Existing job image'})),
  ...newFiles.map((file,i)=>({key:'new:'+i,src:jobDraftUrls[i],alt:file.name}))];
 const keys=items.map(i=>i.key);jobPhotoOrder=[...jobPhotoOrder.filter(k=>keys.includes(k)),...keys.filter(k=>!jobPhotoOrder.includes(k))];
 const counter=$('ht149PhotoCount');if(counter)counter.textContent=`${items.length} of 5 photos selected`;
 root.innerHTML=jobPhotoOrder.map((key,pos)=>{
  const photo=items.find(x=>x.key===key);if(!photo)return '';
  return `<div class="uploaded-photo ordered-job-photo ${pos===0?'primary-job-photo':''}" draggable="true" data-photo-key="${e(key)}" tabindex="0" aria-label="Photo ${pos+1} of ${items.length}. Drag to reorder.">
   <div class="job-photo-drag-handle" title="Drag to reorder photos" aria-hidden="true">${icon('grid',16)}</div>
   <button type="button" class="photo-zoom" data-ordered-photo="${e(key)}" aria-label="Preview photo"><img src="${e(photo.src)}" alt="${e(photo.alt)}"/></button>
   <span class="photo-order-label">${pos===0?'★ Main listing image':'Photo '+(pos+1)}</span>
   <div class="photo-order-actions"><button type="button" class="mini-btn" data-move-photo="${e(key)}:-1" aria-label="Move photo left" ${pos===0?'disabled':''}>←</button><button type="button" class="mini-btn" data-move-photo="${e(key)}:1" aria-label="Move photo right" ${pos===items.length-1?'disabled':''}>→</button>${key.startsWith('existing:')?`<button type="button" class="mini-btn" data-remove-photo="${e(key.slice(9))}">Remove</button>`:`<button type="button" class="mini-btn" data-remove-new-photo="${e(key)}">Remove</button>`}</div>
  </div>`;
 }).join('');
 root.querySelectorAll('[data-move-photo]').forEach(b=>b.onclick=()=>{const text=b.dataset.movePhoto,direction=Number(text.slice(text.lastIndexOf(':')+1)),key=text.slice(0,text.lastIndexOf(':'));const i=jobPhotoOrder.indexOf(key),j=i+direction;if(j<0||j>=jobPhotoOrder.length)return;[jobPhotoOrder[i],jobPhotoOrder[j]]=[jobPhotoOrder[j],jobPhotoOrder[i]];drawOrderedJobPhotos()});
 root.querySelectorAll('[data-ordered-photo]').forEach(b=>b.onclick=()=>{const photo=items.find(x=>x.key===b.dataset.orderedPhoto);if(photo)openPhotoLightbox(photo.src)});
 root.querySelectorAll('[data-remove-new-photo]').forEach(b=>b.onclick=()=>{
  const idx=Number(b.dataset.removeNewPhoto.slice(4));const input=$('jobPhotoInput');
  const files=Array.from(input?.files||[]);if(!Number.isInteger(idx)||idx<0||idx>=files.length)return;
  files.splice(idx,1);const dt=new DataTransfer();files.forEach(f=>dt.items.add(f));input.files=dt.files;input._selectedFiles=files;
  jobDraftUrls.forEach(URL.revokeObjectURL);jobDraftUrls=files.map(f=>URL.createObjectURL(f));
  const before=jobPhotoOrder.slice();jobPhotoOrder=before.filter(k=>k!=='new:'+idx).map(k=>k.startsWith('new:')&&Number(k.slice(4))>idx?'new:'+(Number(k.slice(4))-1):k);drawOrderedJobPhotos();
 });
 root.querySelectorAll('[data-remove-photo]').forEach(b=>b.onclick=async()=>{if(!editedJob)return;try{await api(`/jobs/${editedJob.id}/photos/${b.dataset.removePhoto}`,'DELETE');jobExistingPhotos=jobExistingPhotos.filter(p=>p.id!==Number(b.dataset.removePhoto));drawOrderedJobPhotos();toast('Photo removed.')}catch(err){toast(err.message)}});
 let dragging='';
 root.querySelectorAll('[data-photo-key]').forEach(tile=>{
  tile.addEventListener('dragstart',ev=>{dragging=tile.dataset.photoKey;ev.dataTransfer.effectAllowed='move';ev.dataTransfer.setData('text/plain',dragging);tile.classList.add('dragging')});
  tile.addEventListener('dragend',()=>{tile.classList.remove('dragging');dragging=''});
  tile.addEventListener('dragover',ev=>{ev.preventDefault();ev.dataTransfer.dropEffect='move';tile.classList.add('drag-target')});
  tile.addEventListener('dragleave',()=>tile.classList.remove('drag-target'));
  tile.addEventListener('drop',ev=>{ev.preventDefault();const from=dragging||ev.dataTransfer.getData('text/plain'),to=tile.dataset.photoKey;const fromIndex=jobPhotoOrder.indexOf(from),toIndex=jobPhotoOrder.indexOf(to);if(fromIndex<0||toIndex<0)return;jobPhotoOrder.splice(fromIndex,1);jobPhotoOrder.splice(toIndex,0,from);drawOrderedJobPhotos()});
 });
 // Touchscreen drag, restricted to the grip so preview/remove buttons still work.
 root.querySelectorAll('.job-photo-drag-handle').forEach(handle=>{
  const tile=handle.closest('[data-photo-key]');let origin=null;
  handle.addEventListener('pointerdown',ev=>{if(ev.pointerType==='mouse')return;origin=tile.dataset.photoKey;handle.setPointerCapture(ev.pointerId);tile.classList.add('dragging');ev.preventDefault()});
  handle.addEventListener('pointermove',ev=>{if(!origin)return;const point=document.elementFromPoint(ev.clientX,ev.clientY)?.closest('#photoDraftPreviews [data-photo-key]');root.querySelectorAll('.drag-target').forEach(x=>x.classList.remove('drag-target'));if(point)point.classList.add('drag-target')});
  handle.addEventListener('pointerup',ev=>{if(!origin)return;const point=document.elementFromPoint(ev.clientX,ev.clientY)?.closest('#photoDraftPreviews [data-photo-key]');if(point){const i=jobPhotoOrder.indexOf(origin),j=jobPhotoOrder.indexOf(point.dataset.photoKey);if(i>=0&&j>=0){jobPhotoOrder.splice(i,1);jobPhotoOrder.splice(j,0,origin)}}origin=null;drawOrderedJobPhotos()});
  handle.addEventListener('pointercancel',()=>{origin=null;tile.classList.remove('dragging')});
 });
}
function bindDraftPhotoPreviews(){const input=$('jobPhotoInput');if(!input)return;
 jobExistingPhotos=[];jobPhotoOrder=[];jobDraftUrls.forEach(URL.revokeObjectURL);jobDraftUrls=[];
 // Keep existing selections when the user opens the picker again.
 input.addEventListener('click',()=>{input.dataset.priorCount=String(input.files?.length||0)});
 const picker=$('jobPhotoInput')?.previousElementSibling;picker?.addEventListener('keydown',ev=>{if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();input.click();}});
 input.onchange=()=>{
  const newlyChosen=Array.from(input.files||[]);const prior=Array.from(input._selectedFiles||[]);
  const combined=[...prior];
  for(const file of newlyChosen){if(!combined.some(p=>p.name===file.name&&p.size===file.size&&p.lastModified===file.lastModified))combined.push(file)}
  if(combined.length+jobExistingPhotos.length>5){toast('Maximum five task photos. Remove a photo before adding another.');const restore=new DataTransfer();prior.forEach(f=>restore.items.add(f));input.files=restore.files;return;}
  input._selectedFiles=combined;
  const dt=new DataTransfer();combined.forEach(f=>dt.items.add(f));input.files=dt.files;
  jobDraftUrls.forEach(URL.revokeObjectURL);jobDraftUrls=combined.map(f=>URL.createObjectURL(f));
  drawOrderedJobPhotos();
 };
 drawOrderedJobPhotos();
}

let htDraftSaveTimer=null,htDraftPoller=null,htDraftLast='';
async function loadPostingDraft(){
 if(editedJob||state.jobDraftLoaded||!state.me||role()!=='customer')return;
 try{const result=await api('/job-draft');state.jobDraft=result.draft||null;state.jobDraftLoaded=true;
  if(state.jobDraft&&state.view==='post'&&!editedJob){draftSlots=Array.isArray(state.jobDraft.slots)?state.jobDraft.slots:[];render();toast('Your saved task draft was restored. Photos must be selected again.')}else if(state.view==='saved-drafts')render()}
 catch(err){state.jobDraftLoaded=true;}
}
function postingDraftSnapshot(){
 const f=$('postJobForm');if(!f||editedJob||!state.me||role()!=='customer')return null;
 const fd=new FormData(f);
 return {title:fd.get('title')||'',category:fd.get('category')||'Other',difficulty:'Medium',description:fd.get('description')||'',location:fd.get('location')||'',budget:fd.get('budget')||'',latitude:fd.get('latitude')||'',longitude:fd.get('longitude')||'',offer_deadline:fd.get('offer_deadline')||'',duration_minutes:Number(fd.get('duration_minutes')||120),flexible_schedule:!!$('flexibleSchedule')?.checked,timing_preference:postingTimingMode,slots:draftSlots};
}
function queuePostingDraft(){
 clearTimeout(htDraftSaveTimer);htDraftSaveTimer=setTimeout(async()=>{
  const draft=postingDraftSnapshot();if(!draft)return;if(!String(draft.title||'').trim()&&!String(draft.description||'').trim()&&!String(draft.location||'').trim()&&!String(draft.budget||'').trim()&&!(draft.slots||[]).length)return;const json=JSON.stringify(draft);if(json===htDraftLast)return;
  try{await api('/job-draft','PUT',{fields:draft});htDraftLast=json;state.jobDraft=draft;const el=$('draftSaveStatus');if(el)el.textContent='Draft saved';}catch{const el=$('draftSaveStatus');if(el)el.textContent='Draft could not be saved';}
 },900);
}
function bindPostingDraft(){
 const f=$('postJobForm');if(!f||editedJob)return;
 if(!$('draftSaveStatus'))f.insertAdjacentHTML('beforeend','<p id="draftSaveStatus" class="mock-meta" role="status">Your task details and schedule save automatically. Use Save draft to save immediately. Photos must be reselected after leaving.</p>');
 f.addEventListener('input',queuePostingDraft);f.addEventListener('change',queuePostingDraft);
 clearInterval(htDraftPoller);htDraftPoller=setInterval(()=>{if(state.view==='post'&&$('postJobForm')){const snap=postingDraftSnapshot();if(snap&&JSON.stringify(snap)!==htDraftLast)queuePostingDraft()}else clearInterval(htDraftPoller)},6000);
}
async function saveTaskDraftNow(){
 const draft=postingDraftSnapshot();if(!draft)return toast('Sign in as a customer to save a draft.');
 try{const res=await api(state.editingDraftId?`/job-drafts/${state.editingDraftId}`:'/job-drafts',state.editingDraftId?'PUT':'POST',{fields:draft});
  // A named saved draft is distinct from the autosaved *new posting*.
  // Delete the autosave so the next Post a Task opens blank; preserve the
  // independently saved draft for View / edit.
  clearTimeout(htDraftSaveTimer);clearInterval(htDraftPoller);
  state.editingDraftId=null;state.jobDraft=null;state.jobDraftLoaded=true;
  htDraftLast='';draftSlots=[];editedJob=null;
  try{await api('/job-draft','DELETE')}catch(err){console.warn('Could not clear autosaved posting draft:',err)}
  toast('Task draft saved.');state.view='saved-drafts';render();loadSavedTaskDrafts()}
 catch(err){toast(err.message)}
}
async function loadSavedTaskDrafts(){
 if(!state.me||role()!=='customer')return;
 try{state.draftItems=(await api('/job-drafts')).drafts||[];if(state.view==='saved-drafts')render()}
 catch(err){if(state.view==='saved-drafts')toast('Could not load drafts: '+err.message)}
}
function savedDraftsPage(){
 if(!state.me||role()!=='customer')return signInPrompt();
 const saved=state.draftItems||[];
 return `<section class="page workspace-page"><div class="page-title"><span class="kicker">YOUR TASKS</span><h1>Saved drafts</h1><p>View and edit your unpublished tasks, or start a new one. Drafts remain private.</p></div><div class="panel"><div class="ht152-drafts-top"><span class="tag">${saved.length} saved</span><button class="btn btn-primary" id="draftStartNew">New draft</button></div><div class="ht152-draft-list">${saved.length?saved.map(d=>`<article class="ht152-draft-card"><div><span class="tag">Unpublished</span><h3>${e(d.fields?.title||'Untitled task')}</h3><p class="mock-meta">${e(d.fields?.category||'Other')} · ${e(d.fields?.location||'Location not set')} ${Number(d.fields?.budget)>0?' · '+dollars(Number(d.fields.budget)):''}</p><p>${e((d.fields?.description||'Add more details to finish your posting.').slice(0,180))}</p></div><div class="mini-actions"><button class="btn btn-primary" data-resume-draft="${d.id}">View / edit</button><button class="btn btn-secondary" data-delete-draft="${d.id}">Delete</button></div></article>`).join(''):'<div class="empty"><h3>No saved drafts yet</h3><p>Use Save draft in the task posting form to keep an unfinished listing.</p></div>'}</div>${state.jobDraft&&!state.editingDraftId?'<p class="mock-meta">You also have an autosaved in-progress task. Start posting to continue where you left off.</p>':''}</div></section>`
}
function jobForm(j){
 const initial=j||(!editedJob&&state.jobDraft)||{};
 return `<section class="page ht147-post-page"><div class="page-title ht149-post-heading"><span class="kicker">POST A TASK</span><h1>${j?'Edit your task':'Post a task'}</h1><p>Describe what you need, choose your timing, and receive offers from local workers.</p></div>
 <div class="form-layout ht147-post-layout"><form class="panel ht147-post-form" id="postJobForm" data-id="${j?.id||''}">
 <div class="ht147-task-details"><div class="ht147-section-heading"><span class="ht147-heading-icon">${icon('check',21)}</span><div><h2>Task details</h2><p class="mock-meta">The information workers need to send you a useful offer.</p></div></div>
 <div class="field-grid ht147-field-grid"><div class="field full"><label>Task title <span class="ht147-required">*</span></label><input class="control" name="title" maxlength="100" required minlength="4" value="${e(initial.title||'')}" placeholder="e.g. Move couch to another room"/></div>
 <div class="field full"><label>Category <span class="ht147-required">*</span></label><select class="control" name="category">${options(Object.keys(categories),initial.category)}</select></div>
 <div class="field full"><label>Description <span class="ht147-required">*</span></label><textarea class="control" name="description" minlength="10" required placeholder="Describe the job, tools or materials needed, and any access instructions.">${e(initial.description||'')}</textarea><small>Clear details help workers quote the right price.</small></div>
 <div class="field full ht147-upload-field"><label>Task photos <span class="ht147-optional">Optional</span></label><label for="jobPhotoInput" class="ht147-upload-wrap" tabindex="0" role="button" aria-label="Add photos of the task"><span>${icon('image',23)}</span><div><strong>Add photos of the task</strong><small>Choose up to 5 images. Drag thumbnails to reorder; the first is your cover.</small></div></label><input class="ht149-hidden-file" type="file" name="job_photos" id="jobPhotoInput" accept="image/*" multiple/><span class="ht149-photo-count" id="ht149PhotoCount" aria-live="polite">0 of 5 photos selected</span><div id="photoDraftPreviews" class="photo-gallery"></div><div id="editPhotos" class="photo-gallery"></div></div>
 <div class="field full address-field"><label for="addressInput">Task location <span class="ht147-required">*</span></label><div class="address-search"><input id="addressInput" class="control" name="location" maxlength="120" autocomplete="off" required value="${e(initial.location||'')}" placeholder="Start typing the task address..." aria-autocomplete="list" aria-controls="addressSuggestions" aria-expanded="false"/><div id="addressSuggestions" class="address-suggestions" role="listbox" hidden></div></div><input type="hidden" name="latitude" value="${initial.latitude??''}"/><input type="hidden" name="longitude" value="${initial.longitude??''}"/><small id="addressHelp">Select an address suggestion. Only your hired worker sees the full address.</small></div>
 <div class="field"><label>Budget ($) <span class="ht147-required">*</span></label><input class="control" name="budget" type="number" min="1" max="1000000" required value="${initial.budget||''}" placeholder="100"/></div><div class="field"><label>Offer deadline <span class="ht147-optional">Optional</span></label><input class="control" type="date" name="offer_deadline" value="${e(initial.offer_deadline||'')}"/></div></div></div>
 ${scheduleFields(j||(!editedJob?initial:null))}
 <div class="hero-actions ht147-post-actions"><div class="ht147-action-caption">Your task stays private until you publish it. Workers can then send offers.</div>${!j?'<button type="button" class="btn btn-secondary" id="saveTaskDraft">Save draft</button>':''}<button class="btn btn-primary" type="submit">${j?'Save changes':'Publish task'}</button>${!j?'<button type="button" class="mini-btn ht153-discard" id="discardJobDraft">Discard draft</button>':''}</div>
 </form></div></section>`;
}
function setupPostingReadiness(){
 const form=$('postJobForm'),out=$('ht151PostingReadiness');if(!form||!out)return;
 function paint(){const d=new FormData(form);const checks=[
 ['Clear title',String(d.get('title')||'').trim().length>=4],
 ['Helpful description',String(d.get('description')||'').trim().length>=10],
 ['Selected job address',!!d.get('latitude')&&!!d.get('longitude')],
 ['Budget entered',Number(d.get('budget'))>0]
 ];const done=checks.filter(x=>x[1]).length;
 out.innerHTML=`<div class="ht151-readiness-progress"><span style="width:${done*25}%"></span></div><p class="ht151-readiness-number">${done} of ${checks.length} essentials ready</p>${checks.map(([name,ok])=>`<div class="ht151-readiness-item ${ok?'ready':''}">${icon(ok?'check':'clock',15)} ${name}</div>`).join('')}`;
 }
 form.addEventListener('input',paint);form.addEventListener('change',paint);form.addEventListener('click',()=>setTimeout(paint,100));paint();
}
let editedJob=null;
function post(){if(!state.me)return `<section class="page"><div class="empty"><h3>Sign in to post a job.</h3><button class="btn btn-primary" id="authLink">Create an account</button></div></section>`;return jobForm(editedJob)}
function navEdit(id){const j=state.jobs.find(j=>j.id===id);if(!j||!mine(j)||j.status!=='open')return toast('Only your open tasks can be edited.');editedJob=j;nav('post')}
async function submitJob(ev){
 ev.preventDefault();const f=ev.target,fd=new FormData(f);
 const payload={title:fd.get('title'),description:fd.get('description'),category:fd.get('category'),location:fd.get('location'),difficulty:'Medium',budget:Number(fd.get('budget')),offer_deadline:fd.get('offer_deadline')||null,latitude:fd.get('latitude')!==''?Number(fd.get('latitude')):null,longitude:fd.get('longitude')!==''?Number(fd.get('longitude')):null,duration_minutes:Number(fd.get('duration_minutes')||120),flexible_schedule:!!$('flexibleSchedule')?.checked,timing_preference:postingTimingMode,slots:draftSlots.filter(x=>x.start&&x.end)};
 const incomplete=draftSlots.find(s=>!s.start||!s.end||Date.parse(s.end)<=Date.parse(s.start));
 if(incomplete){toast('Finish both times in each added window, or remove the unused option.');f.querySelector('#scheduleSlotList [data-time]')?.focus();return;}
 if(!f.reportValidity()){const bad=f.querySelector(':invalid');bad?.closest('.field')?.classList.add('ht149-field-error');toast('Complete the highlighted required field before publishing.');return;}
 if(payload.latitude===null||payload.longitude===null){toast('Choose a suggested task address so workers can see the approximate job location.');f.querySelector('#addressInput')?.closest('.field')?.classList.add('ht149-field-error');f.querySelector('#addressInput').focus();return;}
 const submitButton=f.querySelector('button[type=submit]');if(submitButton?.disabled)return;const oldId=f.dataset.id; const files=Array.from($('jobPhotoInput')?.files||[]);const selectedMain=jobPhotoKeyList()[0]||'';
 try{
  if(submitButton){submitButton.disabled=true;submitButton.dataset.beforeLabel=submitButton.textContent;submitButton.textContent=oldId?'Saving changes…':'Publishing…';}
  const current=oldId?(await api(`/jobs/${oldId}/photos`)).photos.length:0;
  if(files.length+current>5){toast('Only five job photos are allowed. Remove extras and try again.');return}
  const saved=await api(oldId?`/jobs/${oldId}`:'/jobs',oldId?'PUT':'POST',payload);
  const jobId=saved.job.id;
  let failed=0;const addedPhotoIds=[];
  for(const file of files){try{const result=await api(`/jobs/${jobId}/photos`,'POST',{data:await compressJobPhoto(file)});addedPhotoIds.push(result.id)}catch(err){failed++;addedPhotoIds.push(null);toast(err.message)}}
  if(selectedMain){const [kind,value]=selectedMain.split(':');const photoId=kind==='existing'?Number(value):addedPhotoIds[Number(value)];if(photoId){try{await api(`/jobs/${jobId}/main-photo`,'PUT',{photo_id:photoId})}catch(err){toast('Job saved, but main photo selection failed: '+err.message)}}}
  const publishedDraftId=state.editingDraftId;state.editingDraftId=null;editedJob=null;state.jobDraft=null;state.jobDraftLoaded=false;if(publishedDraftId)try{await api(`/job-drafts/${publishedDraftId}`,'DELETE')}catch{};try{await api('/job-draft','DELETE')}catch{};await refresh();state.view='dashboard';closeModal();render();toast(failed?`Job saved. ${failed} photo(s) could not upload.`:oldId?'Job updated.':'Task published with photos.');
 }catch(err){toast(err.message)}finally{if(submitButton?.isConnected){submitButton.disabled=false;submitButton.textContent=submitButton.dataset.beforeLabel||'Publish task';}}
}
function taskWorkspacePage(){
 const j=state.detail,me=state.me;
 if(!me||!j||!j.assigned_worker_id||!j.accepted_offer_id||![j.owner_id,j.assigned_worker_id].map(Number).includes(Number(me.id)))return `<section class="page"><div class="empty"><h3>Private workspace unavailable</h3><p>Only the task customer and hired worker can access a booked task workspace.</p><button class="btn btn-secondary" data-view="dashboard">Back to dashboard</button></div></section>`;
 const owner=Number(j.owner_id)===Number(me.id),finished=!!j.completion_requested_at,completed=j.status==='completed';
 const partner=owner?(j.assigned_worker_name||'Your hired worker'):(j.owner_name||'Your customer');
 const next=completed?['Task completed','This task is confirmed. Review the history and your conversation as needed.','check']:finished?(owner?['Your approval is needed','The worker has finished. Review the work and confirm it or request changes.','bell']:['Waiting for customer confirmation','Your work has been submitted. The customer has up to 48 hours to review it.','clock']):j.completion_rejected_at?['Changes requested','Review the customer feedback and finish the remaining work before submitting again.','info']:['Task in progress',owner?'Your worker is assigned. Coordinate details and follow progress here.':'You are hired. Coordinate details and mark work finished when the job is done.','briefcase'];
 const time=j.scheduled_start?schedulePretty(j.scheduled_start):'Not scheduled yet';
 const amount=owner?dollars(j.accepted_price||j.budget):workerNetPrice(j.accepted_price||j.budget);
 return `<section class="page workspace-page ht152-task-page ht156-task-page"><div class="page-title ht156-workspace-heading"><div><span class="kicker">PRIVATE TASK WORKSPACE</span><h1>${e(j.title)}</h1><p>Everything you need to manage this ${owner?'task':'assignment'} in one place.</p></div><span class="status ${statusClass(j)}">${status(j)}</span></div>
 <div class="ht156-next-action" role="status"><span class="ht156-next-icon">${icon(next[2],22)}</span><div><span class="kicker">WHAT HAPPENS NEXT</span><h2>${e(next[0])}</h2><p>${e(next[1])}</p></div>${owner&&finished&&!completed?`<button class="btn btn-primary" type="button" id="workspaceApprove">Review completion</button>`:''}</div>
 <div class="ht156-summary-grid"><div class="ht156-summary"><span>Working with</span><strong>${e(partner)}</strong><small>${owner?'Hired worker':'Task customer'}</small></div><div class="ht156-summary"><span>Scheduled time</span><strong>${e(time)}</strong><small>${j.scheduled_end?e(schedulePretty(j.scheduled_end)):'Confirm timing with the other participant'}</small></div><div class="ht156-summary"><span>${owner?'Agreed task price':'Estimated net earnings'}</span><strong>${amount}</strong><small>${owner?'Before the customer service fee':'After the 10% HomeTask worker fee; payout subject to eligibility'}</small></div></div>
 <div class="ht156-quick-actions"><button type="button" class="btn btn-primary" id="workspaceMessage">${icon('message',16)} Message ${owner?'worker':'customer'}</button><button type="button" class="btn btn-secondary" id="workspaceReschedule">${icon('calendar',16)} ${j.status==='accepted'?'Manage schedule':'View schedule'}</button><button type="button" class="btn btn-secondary" id="workspaceDetails">${icon('file',16)} Task details</button></div>
 <div class="ht156-content-grid"><article class="panel ht156-progress-card"><div class="section-head"><div><span class="kicker">JOB STATUS</span><h3>Task progress</h3></div></div>${jobProgressPanel(j)}<p class="mock-meta">Only you and the other participant can view this timeline.</p></article><article class="panel ht156-completion-card"><span class="kicker">COMPLETION & REVIEW</span><h3>${completed?'Work confirmed':finished?'Customer review in progress':'Finishing the job'}</h3><p>${completed?'The work has been confirmed. You can review task details and message history.':finished?'The work has been submitted. Payout eligibility depends on customer approval, the review window and any open dispute.':owner?'You can review and approve the work after the worker marks it finished.':'Once the work is done, submit it for customer confirmation.'}</p><button type="button" class="btn btn-secondary" id="workspaceCompletion">${owner&&finished&&!completed?'Review finished work':'View completion details'}</button></article></div></section>`;
}
async function openTaskWorkspace(id){
 modal(`${modalHead('Opening private workspace','TASK')}<div class="ht154-skeleton" role="status" aria-label="Loading workspace"><div></div><div></div><div></div></div>`);
 try{const j=await api(`/jobs/${id}/workspace`);state.detail=j.job;nav('task-workspace')}catch(err){closeModal();toast(err.message)}
}
function dashboard(){
 if(!state.me)return signInPrompt();if(role()==='worker')return workerHome();
 const owned=state.jobs.filter(mine),filter=state.jobFilter;
 const active=owned.filter(j=>['open','accepted'].includes(j.status));
 const query=String(state.ht154CustomerQuery||'').toLowerCase().trim();const displayed=active.filter(j=>(filter==='all'||j.status===filter)&&(!query||[j.title,j.location,j.category,j.description].join(' ').toLowerCase().includes(query)));
 const filters=[['all','All active tasks'],['open','Posted tasks'],['accepted','Hired & active']];
 return `<section class="page ht159-customer-tasks"><div class="ht159-tasks-header"><div class="ht159-tasks-intro"><span class="kicker">HOMETASK</span><h1>My tasks <span class="ht1532-task-count">${active.length} active</span></h1><p>Manage your listings and follow up with workers.</p><div class="ht152-head-actions"><button class="btn btn-secondary" data-view="saved-drafts">Saved drafts</button><button class="btn btn-primary" id="dashboardPrimary">Post a task</button></div></div><div class="ht159-snapshot" aria-label="Your task activity">${[
  ['Hired & active',owned.filter(j=>j.status==='accepted').length,'dashboard:accepted'],
  ['Posted tasks',owned.filter(j=>j.status==='open').length,'dashboard:open'],
  ['Current offers',currentOfferTotal(),'current-offers'],
  ['Completed tasks',owned.filter(j=>j.status==='completed').length,'history']
 ].map(([name,n,target])=>`<button type="button" class="ht159-snapshot-stat" data-stat-target="${target}"><span>${e(name)}</span><strong>${n}</strong></button>`).join('')}</div></div>
 <div class="panel ht1532-customer-panel"><div class="ht1532-list-toolbar"><label class="ht154-list-search">${icon('search',18)}<input class="control" id="ht154CustomerSearch" type="search" aria-label="Search my tasks" placeholder="Search my tasks" value="${e(state.ht154CustomerQuery||'')}"/></label><div class="ht139-filter-control"><select data-compact-filter="job" aria-label="Filter tasks">${filters.map(([key,label])=>`<option value="${key}" ${filter===key?'selected':''}>${label}</option>`).join('')}</select></div></div><div class="ht130-manage-scroll" aria-label="Manage your tasks, scroll for additional listings" tabindex="0"><div class="ht130-manage-grid">${displayed.length?displayed.map(j=>`<article class="dashboard-job interactive-job-card ht130-manage-card ${j.status==='open'&&Number(j.offer_count||0)>0?'ht159-has-offers':''}" tabindex="0" data-card-job="${j.id}" aria-label="View ${e(j.title)}">${compactJobPhoto(j)}${j.status==='open'?`<span class="ht144-offer-sticker" aria-label="${Number(j.offer_count||0)} offers received">${icon('message',15)} <strong>${Number(j.offer_count||0)} ${Number(j.offer_count||0)===1?'Offer':'Offers'}</strong></span>`:''}${ht130IsNewOffer(j)?`<span class="ht130-new-offer" data-new-offer-job="${j.id}">New offer</span>`:''}<div class="dashboard-job-head"><div><strong>${e(j.title)}</strong><p class="mock-meta">${e(j.category)} · ${e(j.location)} · ${dollars(j.budget)}</p></div>${j.status==='open'?'':`<span class="status ${statusClass(j)}">${status(j)}</span>`}</div>${j.assigned_worker_name?`<p class="mock-meta">Worker: ${e(j.assigned_worker_name)} · ${dollars(j.accepted_price)}</p><div class="ht152-task-access"><button class="mini-btn" data-workspace-job="${j.id}">Manage task →</button></div>`:''}<div class="mini-actions">${j.status==='open'?`<button class="mini-btn" data-edit="${j.id}">Edit</button><button class="mini-btn" data-offers="${j.id}">Compare offers</button><button class="mini-btn" data-cancel="${j.id}">Cancel listing</button>`:''}${j.status==='accepted'?`<button class="mini-btn" data-chat-worker="${j.id}:${j.assigned_worker_id}">Message worker</button>${j.completion_requested_at?`<button class="mini-btn" data-complete="${j.id}">Confirm finished work</button>`:`<span class="tag">Waiting for worker to finish</span>`}${!j.completion_requested_at&&!j.completion_rejected_at?`<button class="mini-btn" data-cancel="${j.id}">Cancel task</button>`:`<button class="mini-btn" data-job="${j.id}">Resolve work issue</button>`}`:''}</div></article>`).join(''):`<div class="empty ht15107-empty"><h3>No ${filter==='all'?'active':filter} tasks right now</h3><p>${filter==='all'?'Your future projects will appear here once you publish a task.':'Try another filter, or post a new task when you are ready.'}</p><button class="btn btn-primary" id="dashboardEmptyPost" data-view="post">Post a task</button></div>`}</div></div></div></section>`;
}
function selectedSkills(){return String(state.me?.skills||'').split(/[,;\n]+/).map(x=>x.trim()).filter(Boolean);}
let chosenSkills=[];
function skillsEditor(){
 chosenSkills=selectedSkills();
 const standard=Object.keys(categories);
 return `<div class="field worker-skill-editor"><label>Worker skills</label>
 <div class="skill-add-row"><select class="control" id="skillCategory"><option value="">Choose a job category…</option>${standard.map(x=>`<option value="${e(x)}">${e(x)}</option>`).join('')}<option value="__custom__">Custom skill…</option></select><button class="mini-btn" type="button" id="addCategorySkill">Add skill</button></div>
 <div class="skill-add-row" id="customSkillRow" hidden><input class="control" id="customSkillInput" maxlength="45" placeholder="e.g. Cabinet refinishing"/><button class="mini-btn" id="addCustomSkill" type="button">Add custom</button></div>
 <div class="selected-skills" id="selectedSkills" aria-live="polite"></div>
 <input type="hidden" name="skills" id="skillsValue" value="${e(chosenSkills.join(', '))}"/><small>Choose the same general job types customers use when posting, or add a specific custom skill.</small></div>`;
}
function framingValue(key){return Number(state.imageFraming?.[key]??(key.endsWith('zoom')?100:50));}
function bannerEditor(data){const preview=data?`<button type="button" class="profile-banner-preview has-banner editable-image-preview" id="adjustExistingBanner" title="Adjust this cover photo" aria-label="Adjust the position and zoom of your current profile banner"><img class="cover-position-image" src="${e(data)}" alt="Current profile banner" style="object-position:${framingValue('banner_x')}% ${framingValue('banner_y')}%;transform:scale(${framingValue('banner_zoom')/100})"/><span class="image-edit-chip">${icon('image',14)} Adjust banner position &amp; zoom</span></button>`:`<div class="profile-banner-preview"><span>Profile cover</span></div>`;return `${preview}<div class="banner-actions"><label class="mini-btn upload-photo-button">${data?'Change banner':'Upload banner'}<input type="file" id="bannerUpload" accept="image/png,image/jpeg,image/webp" hidden/></label>${data?'<button class="mini-btn" id="removeBanner" type="button">Remove banner</button>':''}<small>${data?'Click your current banner to adjust how it fits.':'Recommended: a wide photo of your work or a simple personal cover image.'}</small></div>`;}
function avatarFramingEditor(){const editable=!!state.me.avatar_data;return `<div class="avatar-frame-editor"><${editable?'button':'div'} ${editable?'type="button" id="adjustExistingAvatar" title="Adjust this profile photo" aria-label="Adjust the position and zoom of your current profile picture"':''} class="avatar-framing-preview ${editable?'editable-image-preview':''}" style="--avatar-x:${framingValue('avatar_x')}%;--avatar-y:${framingValue('avatar_y')}%;--avatar-scale:${framingValue('avatar_zoom')/100}">${avatar(state.me.id,state.me.name,true)}${editable?`<span class="avatar-edit-caption">Adjust photo</span>`:''}</${editable?'button':'div'}><div><div class="banner-actions"><label class="mini-btn upload-photo-button">Change profile photo<input type="file" id="avatarUpload" accept="image/png,image/jpeg,image/webp" hidden/></label></div>${editable?'<small>Click your current profile picture to resize or reposition it.</small>':''}</div></div>`;}
function applyHeaderAvatarFraming(){const el=$('profileButton');if(!el)return;el.style.setProperty('--avatar-x',framingValue('avatar_x')+'%');el.style.setProperty('--avatar-y',framingValue('avatar_y')+'%');el.style.setProperty('--avatar-scale',framingValue('avatar_zoom')/100);}

function profileCompleteness(){
 if(!state.me)return {percent:0,missing:[]};
 const u=state.me;const fields=[['Profile photo',!!u.avatar_data],['About me',!!String(u.bio||'').trim()],['City',!!String(u.location||'').trim()],['Cover image',!!u.banner_data]];
 if(role()==='worker')fields.push(['Skills',!!String(u.skills||'').trim()],['Verified profile',!!u.profile_verified]);
 const done=fields.filter(x=>x[1]).length;
 return {percent:Math.round(done/fields.length*100),missing:fields.filter(x=>!x[1]).map(x=>x[0])};
}
function profileProgress(){const p=profileCompleteness();if(p.percent>=100)return '';return `<div class="profile-progress"><div class="section-head"><strong>Profile strength · Build trust</strong><span>${p.percent}%</span></div><div class="progress-bar"><span style="width:${p.percent}%"></span></div><small>${p.missing.length?'Next: '+e(p.missing.slice(0,3).join(', ')):'Your profile is complete.'}</small></div>`;}
function profile(){
 if(!state.me)return `<section class="page"><p>Please sign in.</p></section>`;
 const u=state.me;
 return `<section class="page"><div class="page-title"><span class="kicker">ACCOUNT</span><h1>My profile</h1><p>Update your account and let customers learn about your skills.</p></div><div class="form-layout"><form class="panel" id="profileForm">${profileProgress()}${bannerEditor(u.banner_data||'')}${avatarFramingEditor()}<div class="field"><label>Full name</label><input class="control" name="name" required minlength="2" value="${e(u.name)}"/></div><div class="field"><label>Email</label><input class="control" value="${e(u.email)}" disabled/><small>Email changes aren't supported in this demo.</small></div><div class="field profile-city-field"><label for="profileCityInput">City</label><div class="address-search"><input class="control" id="profileCityInput" name="location" value="${e(u.location)}" maxlength="120" autocomplete="off" placeholder="Start typing a city, e.g. Rochester, NY" aria-autocomplete="list" aria-controls="profileCitySuggestions" aria-expanded="false"/><div id="profileCitySuggestions" class="address-suggestions" role="listbox" hidden></div></div><small id="profileCityHint">Choose a city from the suggestions. Street addresses and ZIP codes are not accepted on public profiles.</small></div>${role()==='worker'?skillsEditor():`<input type="hidden" name="skills" value="${e(u.skills||'')}"/>`}<div class="field"><label>About me</label><textarea class="control" name="bio" maxlength="600" placeholder="Describe your experience and availability.">${e(u.bio)}</textarea></div><button class="btn btn-primary" type="submit">Save profile</button></form><aside class="panel"><h3>Account</h3><p class="mock-meta">Signed in as ${e(u.email)}</p><p style="color:var(--muted);line-height:1.6">Profiles show your skills, experience, completed work, and real reviews. Verification refers to HomeTask profile approval, not identity or background checks.</p><div class="profile-action-buttons"><button class="btn btn-secondary" type="button" data-person="${u.id}">View my public profile</button><button class="btn btn-secondary" type="button" id="openSettingsFromProfile">Account settings</button></div><div id="myReviewSummary" style="margin-top:12px"></div><button class="btn btn-secondary" id="logoutButton">Log out</button></aside></div></section>`;
}
// HomeTask 13.7: only cities/towns/villages can be picked for public profiles.
// This deliberately does NOT reuse the job-address autocomplete.
function cityLocationName(properties){
 const p=properties||{};
 const kind=String(p.osm_value||p.type||'').toLowerCase();
 const isTown=['city','town','village','municipality','hamlet','suburb','locality'].includes(kind);
 if(!isTown||!p.name)return '';
 const stateName=p.state||p.region||'';
 const country=p.country||'';
 const stateUS=p.countrycode?.toLowerCase()==='us'?(US_STATE_ABBREVIATIONS[stateName.toLowerCase()]||stateName):stateName;
 return [p.name,stateUS||country].filter(Boolean).join(', ').slice(0,120);
}
const US_STATE_ABBREVIATIONS={'new york':'NY','massachusetts':'MA','connecticut':'CT','new jersey':'NJ','pennsylvania':'PA','california':'CA','florida':'FL','texas':'TX','ohio':'OH','new hampshire':'NH','vermont':'VT','rhode island':'RI','maine':'ME','north carolina':'NC','south carolina':'SC','georgia':'GA','virginia':'VA','maryland':'MD','michigan':'MI','illinois':'IL','wisconsin':'WI','colorado':'CO','arizona':'AZ','washington':'WA','oregon':'OR','minnesota':'MN'};
function initProfileCityAutocomplete(){
 const input=$('profileCityInput'),box=$('profileCitySuggestions'),hint=$('profileCityHint');if(!input||!box)return;
 let seq=0,timer=null,items=[];
 const close=()=>{box.hidden=true;box.innerHTML='';input.setAttribute('aria-expanded','false')};
 const show=(found)=>{
  items=[...new Set(found)].filter(Boolean).slice(0,7);
  box.innerHTML=items.map((name,i)=>`<button type="button" class="address-option" role="option" data-city-index="${i}">${e(name)}</button>`).join('');
  box.hidden=!items.length;input.setAttribute('aria-expanded',String(!!items.length));
  box.querySelectorAll('[data-city-index]').forEach(b=>b.onclick=()=>{input.value=items[Number(b.dataset.cityIndex)];close();hint.textContent='City selected. Only your city/area will be visible on your profile.'});
 };
 input.addEventListener('input',()=>{
  const q=input.value.trim();clearTimeout(timer);const id=++seq;close();
  hint.textContent='Choose a city, not a street address or ZIP code.';
  if(q.length<2)return;
  const local=Object.keys(knownAreas).filter(k=>k.includes(q.toLowerCase())).map(k=>{const parts=k.split(',').map(s=>s.trim());return parts[0].replace(/\b[a-z]/g,ch=>ch.toUpperCase())+', '+parts[1].toUpperCase()});
  if(local.length)show(local);
  if(q.length<3)return;
  timer=setTimeout(async()=>{
   try{
    const url='https://photon.komoot.io/api/?'+new URLSearchParams({q,limit:'15',lang:'en'});
    const response=await fetch(url,{headers:{Accept:'application/json'}});if(!response.ok)throw Error('City lookup unavailable');
    const data=await response.json();if(seq!==id)return;
    const cities=(data.features||[]).map(f=>cityLocationName(f.properties)).filter(Boolean);
    if(cities.length)show([...local,...cities]);
    else if(!local.length)hint.textContent='No city suggestions found. Try a city name and state.';
   }catch{if(seq===id&&!local.length)hint.textContent='City suggestions are temporarily unavailable. Enter city and state only.';}
  },330);
 });
 input.addEventListener('keydown',ev=>{if(ev.key==='Escape')close();if(ev.key==='ArrowDown'&&!box.hidden){ev.preventDefault();box.querySelector('button')?.focus()}});
 box.addEventListener('keydown',ev=>{if(ev.key==='Escape'){close();input.focus()}});
 document.addEventListener('pointerdown',ev=>{if(!input.contains(ev.target)&&!box.contains(ev.target))close()},{once:false});
}
function bindSkillEditor(){
 const select=$('skillCategory'),list=$('selectedSkills'),hidden=$('skillsValue');if(!select||!list||!hidden)return;
 const draw=()=>{hidden.value=chosenSkills.join(', ');list.innerHTML=chosenSkills.map((skill,i)=>`<span class="skill-chip">${e(skill)}<button type="button" data-remove-skill="${i}" aria-label="Remove ${e(skill)}">×</button></span>`).join('')||'<small>No skills chosen yet.</small>';list.querySelectorAll('[data-remove-skill]').forEach(b=>b.onclick=()=>{chosenSkills.splice(Number(b.dataset.removeSkill),1);draw()});};
 const add=x=>{x=x.trim();if(!x)return;if(chosenSkills.some(y=>y.toLowerCase()===x.toLowerCase()))return toast('That skill is already listed.');if([...chosenSkills,x].join(', ').length>200)return toast('Please keep your total skills under 200 characters.');chosenSkills.push(x);draw();};
 select.onchange=()=>{$('customSkillRow').hidden=select.value!=='__custom__'};
 $('addCategorySkill').onclick=()=>{if(select.value==='__custom__'){$('customSkillInput').focus();return;}add(select.value);select.value='';$('customSkillRow').hidden=true;};
 $('addCustomSkill').onclick=()=>{add($('customSkillInput').value);$('customSkillInput').value='';};
 $('customSkillInput').onkeydown=ev=>{if(ev.key==='Enter'){ev.preventDefault();$('addCustomSkill').click()}};
 draw();
}
async function saveProfile(ev){ev.preventDefault();const d={...Object.fromEntries(new FormData(ev.target)),role:role()};try{state.me=(await api('/profile','PUT',d)).user;render();toast('Profile updated.')}catch(err){toast(err.message)}}
async function openJob(id,initialTab="overview"){
 modal(`${modalHead('Loading task details','TASK')}<div class="ht154-skeleton" role="status" aria-label="Loading task"><div></div><div></div><div></div></div>`);
 try{const j=await api(`/jobs/${id}`);try{j.photos=(await api(`/jobs/${id}/photos`)).photos||[]}catch{j.photos=[]}state.detail=j;state.partner=null;showJobDetail(j,initialTab)}catch(err){closeModal();toast(err.message)}
}
function modal(inner){$('modalRoot').innerHTML=`<div class="modal-backdrop" id="modalBackdrop"><div class="modal" role="dialog" aria-modal="true" aria-label="HomeTask dialog" tabindex="-1">${inner}</div></div>`;$('modalBackdrop').onclick=ev=>{if(ev.target.id==='modalBackdrop')closeModal()};document.querySelectorAll('#modalRoot [data-dismiss]').forEach(el=>el.onclick=closeModal)}
function closeModal(){$('modalRoot').innerHTML=''}
function modalHead(title,label='JOB DETAILS'){return `<div class="modal-head"><div><span class="kicker">${label}</span><h2 style="font-size:31px;margin:8px 0">${e(title)}</h2></div><button class="icon-btn" data-dismiss>×</button></div>`}
// v15.13.56 — submitted offers are presented before entering edit mode.
function ht1556OfferStatus(job,offer){
 if(offer.decision==='rejected')return 'Declined';
 if(job.accepted_offer_id===offer.id && job.status==='completed')return 'Completed';
 if(job.accepted_offer_id===offer.id && job.status==='accepted')return 'Accepted';
 if(job.status==='closed'||job.status==='cancelled')return 'Closed';
 if(job.status==='accepted')return 'Not selected';
 if(offer.counter_status==='pending')return 'Counteroffer received';
 return 'Pending';
}
function ht1556OfferTime(offer){
 return offer.proposed_start?scheduledWindow(offer.proposed_start,offer.proposed_end):'Arrange after hiring';
}
function ht1556OfferSummary(job,offer,compact=false){
 const payout=workerPaymentBreakdown(offer.price),status=ht1556OfferStatus(job,offer);
 return `<div class="ht1556-offer-summary ${compact?'ht1556-offer-compact':''}">
  <div class="ht1556-offer-summary-head"><div><span class="kicker">YOUR SUBMITTED OFFER</span><h3>${compact?'Offer details':'Your offer details'}</h3></div><span class="ht1556-offer-status">${e(status)}</span></div>
  <div class="ht1556-offer-numbers"><div><small>Your offer</small><strong>${moneyCents(payout.gross)}</strong></div><div><small>Est. payout after 10% fee</small><strong>${moneyCents(payout.net)}</strong></div></div>
  <p class="ht1556-offer-schedule">${icon('calendar',16)} <span>${e(ht1556OfferTime(offer))}</span></p>
  ${compact?'':`<div class="ht1556-offer-note"><small>Note to customer</small><p>${e(offer.note||'No note included.')}</p></div>`}
  <div class="ht1556-offer-controls">${compact?'<button class="mini-btn" type="button" data-ht1556-view-offer>View My Offer →</button>':''}</div>
 </div>`;
}
// 15.13.21: Rearrange the EXISTING detail controls, preserving their event bindings.
function enhanceTaskDetails(j,initialTab="overview"){
 const root=document.querySelector('#modalRoot .ht1533-detail-root');
 if(!root)return;
 const top=root.querySelector('.ht1533-detail-top');
 const facts=root.querySelector('.ht1533-key-facts');
 if(!top||!facts)return;
 root.classList.add('ht1521-detail');
 const scheduleKnown=!!(j.scheduled_start||j.appointment_start||j.confirmed_start||j.appointment?.start);
 const scheduleLabel=j.status==='open'?'To be arranged':scheduleKnown?'Scheduled':'Time pending';
 const scheduleFact=document.createElement('div');
 scheduleFact.className='ht1533-fact ht1521-schedule-fact';
 scheduleFact.innerHTML=`<span>Schedule</span><strong>${scheduleLabel}</strong>`;
 facts.appendChild(scheduleFact);
 // Keep job facts in Overview rather than using permanent space above every tab.
 // Build a tab bar and organize the old nodes instead of regenerating markup.
 const tabbar=document.createElement('div');tabbar.className='ht1521-tabs';tabbar.setAttribute('role','tablist');tabbar.setAttribute('aria-label','Task detail sections');
 const panels=document.createElement('div');panels.className='ht1521-panels';
 const owner=mine(j),hasAssigned=!!j.assigned_worker_id;
 const workerLabel=owner?(hasAssigned?'Worker':'Offers'):(role()==='worker'?(hasAssigned?(Number(j.assigned_worker_id)===Number(state.me?.id)?'My Assignment':'Job Filled'):isWorkerOffer(j)?'My Offer':'Submit Offer'):'Offers');
 const showWorkerProgress=!(role()==='worker'&&!owner&&Number(j.assigned_worker_id)!==Number(state.me?.id));
 const definitions=[['overview','Overview'],...(showWorkerProgress?[['progress','Progress']]:[]),['worker',workerLabel],['photos','Photos']];
 const panes={};
 for(const [id,label] of definitions){
  const b=document.createElement('button');b.type='button';b.className='ht1521-tab';b.id='ht1521-tab-'+id;b.dataset.taskTab=id;b.setAttribute('role','tab');b.setAttribute('aria-controls','ht1521-panel-'+id);b.textContent=label;tabbar.appendChild(b);
  const pane=document.createElement('section');pane.id='ht1521-panel-'+id;pane.className='ht1521-panel';pane.setAttribute('role','tabpanel');pane.setAttribute('aria-labelledby',b.id);panes[id]=pane;panels.appendChild(pane);
 }
 // Keep the old task details and every button/input intact.
 const remaining=[...root.children].filter(el=>el!==top&&el!==facts&&!el.classList.contains('ht130-detail-ribbon'));
 let currentlyPhotos=false;
 for(const element of remaining){
  const cls=element.classList;
  let target='overview';
  if(cls.contains('ht1533-photo-section')||cls.contains('ht-results-root'))target='photos';
  else if(cls.contains('ht-progress')||cls.contains('ht154-progress')||cls.contains('appointment-panel')||cls.contains('completion-flow'))target=showWorkerProgress?'progress':'overview';
  else if(cls.contains('ht1533-hired')||cls.contains('offer-form')||cls.contains('negotiation-notice'))target='worker';
  else if(cls.contains('hero-actions')){
   if(element.querySelector('#messageAssignedWorker,#messagesButton,#openTaskWorkspace'))target='worker';
   else if(element.querySelector('#leaveReview,[data-job-finished],[data-complete]'))target='progress';
  }
  else if(cls.contains('inline-note')&&panes.worker.querySelector('.offer-form'))target='worker';
  panes[target].appendChild(element);
 }
 // Key details live in Overview only, freeing space in Offers and Progress.
 panes.overview.insertBefore(facts,panes.overview.firstChild);
 const submittedOffer=role()==='worker'&&!owner?isWorkerOffer(j):null;
 if(submittedOffer){
  const card=document.createElement('section');
  card.className='ht1556-overview-offer';
  card.innerHTML=ht1556OfferSummary(j,submittedOffer,true);
  facts.insertAdjacentElement('afterend',card);
  card.querySelector('[data-ht1556-view-offer]')?.addEventListener('click',()=>activate('worker'));
 }
 // Give the customer a clear next step instead of hiding the task's main action.
 if(owner && j.status==='open' && Number(j.offer_count||0)>0){
  const count=Number(j.offer_count||0);
  const prompt=document.createElement('section');
  prompt.className='ht155-next-action';
  prompt.innerHTML=`<div class="ht155-next-copy"><span class="kicker">YOUR NEXT STEP</span><h3>You have ${count} offer${count===1?'':'s'} to review</h3><p>Compare workers and choose the best fit for your task.</p></div><button type="button" class="btn btn-primary" id="ht155ReviewOffers">Review offers ${icon('arrow',16)}</button>`;
  panes.overview.insertBefore(prompt,panes.overview.firstChild);
  prompt.querySelector('button').addEventListener('click',()=>activate('worker'));
 }
 if(owner && j.status==='accepted' && !scheduleKnown){
  const prompt=document.createElement('section');
  prompt.className='ht155-next-action';
  prompt.innerHTML=`<div class="ht155-next-copy"><span class="kicker">YOUR NEXT STEP</span><h3>Schedule a time with your hired worker</h3><p>Propose an appointment time or review a worker's pending request.</p></div><button type="button" class="btn btn-primary" id="ht155ScheduleTask">${icon('calendar',17)} Schedule task</button>`;
  panes.overview.insertBefore(prompt,panes.overview.firstChild);
  prompt.querySelector('button').addEventListener('click',()=>showReschedule(j.id));
 }
 // Any appointment section is part of Progress, including schedules not yet confirmed.
 for(const el of [...panes.overview.children]){
  if(el.matches('.confirmed-schedule,.ht-appointment-panel,.appointment-detail,.ht1533-appointment,.appointment-card,.ht-appointment,.appointment-summary')||el.querySelector('#rescheduleButton,#requestAppointmentTime,#appointmentRequestButton'))(panes.progress||panes.overview).appendChild(el);
 }
 if(!panes.photos.children.length){panes.photos.innerHTML='<div class="ht1521-empty"><strong>No photos yet</strong><p>Task photos and any shared before-and-after results will appear here.</p></div>'}
 if(panes.progress&&!panes.progress.children.length){panes.progress.innerHTML='<div class="ht1521-empty"><strong>Progress will appear here</strong><p>Once a worker is hired, the timeline and scheduling details will be available to the task participants.</p></div>'}
 if(!panes.worker.children.length){panes.worker.innerHTML='<div class="ht1521-empty"><strong>No worker selected yet</strong><p>Offers and worker details appear here when available.</p></div>'}
 top.insertAdjacentElement('afterend',tabbar);tabbar.insertAdjacentElement('afterend',panels);
 const offerForm=panes.worker.querySelector('#offerForm');
 let ht1556Editing=false;
 if(submittedOffer){
  const summary=document.createElement('div');summary.className='ht1556-my-offer';
  summary.innerHTML=ht1556OfferSummary(j,submittedOffer,false);
  const controls=summary.querySelector('.ht1556-offer-controls');
  if(offerForm){
   const edit=document.createElement('button');edit.className='btn btn-primary';edit.type='button';
   edit.textContent=submittedOffer.decision==='rejected'?'Resubmit offer':'Edit offer';
   controls.appendChild(edit);
   edit.addEventListener('click',()=>{
    ht1556Editing=true;summary.hidden=true;offerForm.hidden=false;
    const footer=root.querySelector('.ht1523-offer-actions');if(footer)footer.hidden=false;
    offerForm.querySelector('input[name="price"]')?.focus();
   });
  }
  const cancelEdit=document.createElement('button');cancelEdit.type='button';
  cancelEdit.className='mini-btn';cancelEdit.textContent='Back to offer details';
  cancelEdit.addEventListener('click',()=>{
   ht1556Editing=false;summary.hidden=false;if(offerForm)offerForm.hidden=true;
   const footer=root.querySelector('.ht1523-offer-actions');if(footer)footer.hidden=true;
  });
  if(offerForm){offerForm.prepend(cancelEdit);offerForm.hidden=true;}
  panes.worker.insertBefore(summary,panes.worker.firstChild);
 }
 function activate(id){
  for(const button of tabbar.children){const active=button.dataset.taskTab===id;button.classList.toggle('is-active',active);button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;}
  for(const [name,pane] of Object.entries(panes))pane.hidden=name!==id;
  const offerFooter=root.querySelector('.ht1523-offer-actions');if(offerFooter)offerFooter.hidden=id!=='worker'||(!!submittedOffer&&!ht1556Editing);
 }
 for(const b of tabbar.children){b.addEventListener('click',()=>activate(b.dataset.taskTab));b.addEventListener('keydown',event=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;event.preventDefault();const arr=[...tabbar.children];let i=arr.indexOf(b);i=event.key==='Home'?0:event.key==='End'?arr.length-1:(i+(event.key==='ArrowRight'?1:-1)+arr.length)%arr.length;activate(arr[i].dataset.taskTab);arr[i].focus();});}
 // Keep important task actions in the bottom bar, moving existing live buttons rather than cloning them.
 const primary=root.querySelector('#messageAssignedWorker,#openTaskWorkspace');
 const dispute=root.querySelector('#reportDisputeButton');
 const reportListing=root.querySelector('#reportJobButton');
 const cancelJob=root.querySelector('#cancelJobDetail');
 if(dispute||reportListing){const head=top.querySelector('.modal-head');const close=head?.querySelector('[data-dismiss]');if(head&&close){const tools=document.createElement('div');tools.className='ht156-header-menu';const menu=document.createElement('details');menu.className='ht156-overflow';const trigger=document.createElement('summary');trigger.setAttribute('aria-label','More task actions');trigger.setAttribute('title','More task actions');trigger.textContent='⋯';menu.appendChild(trigger);const menuBody=document.createElement('div');menuBody.className='ht156-overflow-content';if(dispute){dispute.classList.add('ht156-menu-dispute');menuBody.appendChild(dispute)}if(reportListing){reportListing.classList.add('ht158-menu-report');menuBody.appendChild(reportListing)}menu.appendChild(menuBody);head.insertBefore(tools,close);tools.append(menu,close);menu.addEventListener('click',event=>{if(event.target.closest('.ht156-menu-dispute,.ht158-menu-report'))menu.open=false})}}
 const offerSubmit=root.querySelector('#offerForm button[type="submit"]');
 if(primary||cancelJob||offerSubmit){
  const actions=document.createElement('div');actions.className='ht1521-sticky-actions';actions.setAttribute('aria-label','Task actions');
  if(cancelJob){cancelJob.classList.add('ht156-footer-cancel');cancelJob.textContent=j.status==='open'?'Cancel listing':'Cancel job';actions.appendChild(cancelJob);}
  if(primary){actions.appendChild(primary);}
  if(offerSubmit){actions.classList.add('ht1523-offer-actions');const cancel=document.createElement('button');cancel.type='button';cancel.id='cancelOfferDetail';cancel.className='btn btn-secondary';cancel.textContent='Cancel';actions.appendChild(cancel);offerSubmit.setAttribute('form','offerForm');actions.appendChild(offerSubmit);}
  root.appendChild(actions);
  // A dispute-only action formerly lived in a wrapper. Remove the now-empty wrapper.
  for(const wrapper of root.querySelectorAll('.job-report-row,.hero-actions,.mini-actions')){if(!wrapper.textContent.trim()&&!wrapper.querySelector('button'))wrapper.remove();}
 }
 activate(panes[initialTab]?initialTab:'overview');
}

function showJobDetail(j,initialTab="overview"){
 const owner=mine(j),myOffer=isWorkerOffer(j);
 const offerExpired=!!j.offer_deadline&&j.offer_deadline<localDatetime(0).slice(0,10);
 const canOffer=state.me&&role()==='worker'&&!owner&&j.status==='open'&&!offerExpired&&!state.blockedUsers.some(u=>u.id===j.owner_id);
 const rejected=myOffer?.decision==='rejected';
 const counterPending=myOffer?.counter_status==='pending';
 const photoBlock=j.photos?.length?`<section class="ht1533-photo-section" aria-label="Task photos"><div class="ht1533-photo-heading"><h3>Task photos</h3><span>${j.photos.length} ${j.photos.length===1?'photo':'photos'}</span></div><div class="ht157-photo-stage"><button type="button" class="ht1533-photo-primary" data-photo-open="${j.photos[0].id}" aria-label="Open task photo 1"><img src="${e(j.photos[0].photo_data)}" alt="Customer-provided task photo 1" /></button>${j.photos.length>1?`<button type="button" class="ht157-photo-arrow ht157-photo-prev" data-photo-step="-1" aria-label="Previous task photo">‹</button><button type="button" class="ht157-photo-arrow ht157-photo-next" data-photo-step="1" aria-label="Next task photo">›</button><span class="ht157-photo-count" aria-live="polite">1 / ${j.photos.length}</span>`:''}</div>${j.photos.length>1?`<div class="ht1533-photo-thumbs">${j.photos.map((p,i)=>`<button type="button" class="ht1533-photo-thumb ${i===0?'is-current':''}" data-photo-select="${i}" aria-label="Show task photo ${i+1}" aria-pressed="${i===0?'true':'false'}"><img src="${e(p.photo_data)}" alt="Task photo thumbnail ${i+1}" loading="lazy"/></button>`).join('')}</div>`:''}</section>`:'';
 const hasLongDescription=String(j.description||'').length>440;
 const taskDescription=hasLongDescription?`<div class="ht1533-description ht1533-description-collapsed" id="ht1533Description"><p class="detail-description">${e(j.description||'No description provided.')}</p></div><button type="button" class="ht1533-read-more" id="ht1533ReadMore" aria-expanded="false">Read full description ${icon('arrow',15)}</button>`:`<div class="ht1533-description"><p class="detail-description">${e(j.description||'No description provided.')}</p></div>`;
 const taskStage=j.status==='open'?'Open for offers':j.status==='accepted'?'Worker hired':j.status==='completed'?'Work completed':j.status==='cancelled'?'Cancelled':status(j);
 const isParticipant=!!state.me&&(owner||j.assigned_worker_id===state.me.id);

 modal(`<div class="ht1533-detail-root">${state.me&&role()==='worker'&&!owner&&j.status==='open'?`<button class="ht130-detail-ribbon ${state.savedJobIds.includes(j.id)?'is-saved':''}" id="detailSaveJob" type="button" aria-pressed="${state.savedJobIds.includes(j.id)}" aria-label="${state.savedJobIds.includes(j.id)?'Remove saved job':'Save job'}" title="${state.savedJobIds.includes(j.id)?'Remove saved job':'Save job'}"><svg viewBox="0 0 32 64" preserveAspectRatio="none" aria-hidden="true" focusable="false"><path d="M0 0H32V61L16 50L0 61Z" style="stroke:none!important"/><path d="M0 0V61L16 50L32 61V0" style="fill:none!important"/></svg></button>`:''}<div class="ht1533-detail-top">${modalHead(j.title,'TASK DETAILS')}<div class="ht1533-status-line"><span class="status ${statusClass(j)}">${e(taskStage)}</span>${owner?`<span class="tag own-listing-tag">${icon('house',12)} Your listing</span>`:''}<span class="ht1533-category">${e(j.category)}</span></div><div class="ht1533-at-a-glance">${icon('pin',15)} <span>${e(j.location)}</span><span class="ht1533-sep">·</span>${icon('clock',15)} <span>${e(durationText(Number(j.duration_minutes||120)))}</span></div></div>
 ${photoBlock}
 <section class="ht1533-detail-section ht1533-overview"><div class="ht1533-section-heading"><h3>About this task</h3></div>${taskDescription}<div class="ht1533-posted-meta">Posted by ${state.me&&j.owner_id!==state.me.id?`<button class="text-link" id="jobOwnerProfile">${e(j.owner_name)}</button>`:e(j.owner_name)} · ${date(j.created_at)}${j.offer_deadline?` · Offers close ${e(j.offer_deadline)}`:''}</div></section>
 <div class="ht1533-key-facts"><div class="ht1533-fact"><span>${j.assigned_worker_id&&Number(j.accepted_price)>0?'Agreed price':owner?'Posted budget':'Customer budget'}</span><strong>${dollars(j.assigned_worker_id&&Number(j.accepted_price)>0?j.accepted_price:j.budget)}</strong></div><div class="ht1533-fact"><span>Estimated duration</span><strong>${e(durationText(Number(j.duration_minutes||120)))}</strong></div></div>
 ${!owner&&role()==='worker'&&j.assigned_worker_id===state.me?.id&&Number(j.accepted_price)>0?`<div class="ht1523-payout-note">Agreed task price <strong>${dollars(j.accepted_price)}</strong> · HomeTask fee (10%) <strong>−${moneyCents(workerPaymentBreakdown(j.accepted_price).fee)}</strong> · Expected payout <strong>${workerNetPrice(j.accepted_price)}</strong></div>`:''}
 ${j.assigned_worker_name?`<section class="ht1533-detail-section ht1533-hired"><div class="ht1533-section-heading"><h3>${owner?'Selected worker':'Your assignment'}</h3><span class="ht1533-hired-tag">${icon('check',14)} Hired</span></div><button class="ht1523-worker-card" type="button" id="assignedProfile" aria-label="View ${e(j.assigned_worker_name)} profile">${avatar(j.assigned_worker_id,j.assigned_worker_name)}<span class="ht1533-worker-copy"><strong>${e(j.assigned_worker_name)}</strong><small>${owner?'Open worker profile':'Your worker profile'}</small></span>${icon('arrow',17)}</button></section>`:''}
 ${isParticipant?jobProgressPanel(j):''}
 ${j.status==='accepted'||j.status==='completed'?appointmentPanel(j):''}
 ${state.me&&(owner||j.assigned_worker_id===state.me.id)&&['accepted','completed'].includes(j.status)?'<div class="ht-results-root" id="jobResultPhotos"><p class="mock-meta">Loading before-and-after photos…</p></div>':''}
 ${owner?`<div class="hero-actions">${j.status==='open'?`<button class="btn btn-secondary" id="editButton">Edit job</button><button class="btn btn-secondary" id="cancelJobDetail">Cancel task</button>`:''}${j.status==='accepted'?`<button class="btn btn-primary" id="messageAssignedWorker">${icon('message',17)} Message worker</button>`:''}</div>`:''}
 ${j.status==='open'&&(j.slots||[]).length?`<div class="inline-note"><strong>Customer availability:</strong> ${j.slots.map(x=>e(schedulePretty(x.start))+' – '+e(schedulePretty(x.end))).join(' · ')}</div>`:''}
 ${counterPending?`<div class="negotiation-notice"><strong>Customer counteroffer: ${dollars(myOffer.counter_price)}</strong><p>${e(myOffer.counter_note||'The customer proposed a different price.')}</p><p>Your previous offer was ${dollars(myOffer.price)}. Accept the new price or decline to keep your earlier offer pending.</p><div class="mini-actions"><button class="btn btn-primary" id="acceptCustomerCounter">Accept ${dollars(myOffer.counter_price)}</button><button class="btn btn-secondary" id="declineCustomerCounter">Decline counteroffer</button></div></div>`:''}
 ${canOffer&&!counterPending?`<form id="offerForm" class="offer-form ht129-offer-form ht1523-offer-form"><span class="kicker">YOUR PROPOSAL</span><h3>${rejected?'Resubmit at original posted price':myOffer?'Update your offer':'Submit an offer'}</h3>${rejected?'<p class="inline-note">The customer declined your last offer. You can still apply again at their original listed budget.</p>':''}<p class="mock-meta">Set your price and add a note. Scheduling can be arranged after hiring.</p><div class="field-grid"><div class="field"><label>Your price ($)</label><input class="control" type="number" name="price" min="1" max="1000000" required value="${rejected?j.budget:myOffer?.price||j.budget}" ${rejected?'readonly':''}/></div><div class="field"><label>Note to customer</label><input class="control" name="note" maxlength="400" value="${e(myOffer?.note||'')}" placeholder="Tools, experience, or availability"/></div></div><div id="ht1557PriceComparison">${offerAskingComparisonMarkup(rejected?j.budget:(myOffer?.price||j.budget),j.budget)}</div>${proposedTimeField(j,myOffer)}<div class="ht-fee-breakdown" id="workerOfferFeePreview" aria-live="polite">Offer price <strong>${moneyCents(workerPaymentBreakdown(rejected?j.budget:myOffer?.price||j.budget).gross)}</strong> · HomeTask fee (10%) <strong>−${moneyCents(workerPaymentBreakdown(rejected?j.budget:myOffer?.price||j.budget).fee)}</strong> · Expected payout <strong>${workerNetPrice(rejected?j.budget:myOffer?.price||j.budget)}</strong></div><div class="inline-note" id="workerScheduleNotice" hidden></div><div class="mini-actions"><button class="btn btn-primary" type="submit">${rejected?'Resubmit original offer':myOffer?'Update offer':'Submit offer'}</button>${myOffer&&!rejected?'<button class="btn btn-secondary" type="button" id="withdrawButton">Withdraw</button>':''}</div></form>`:''}
 
 ${state.me&&j.assigned_worker_id&&j.accepted_offer_id&&(owner||j.assigned_worker_id===state.me.id)?`<div class="hero-actions"><button class="btn btn-secondary" id="openTaskWorkspace">Manage task progress</button></div>`:''}
 ${state.me?`<div class="hero-actions job-report-row">${!owner?`<button class="mini-btn" id="reportJobButton">Report listing</button>`:''}${(owner||j.assigned_worker_id===state.me.id)&&['accepted','completed','cancelled'].includes(j.status)?`<button class="mini-btn" id="reportDisputeButton">Open job dispute</button>`:''}</div>`:''}
 ${!state.me?'<div class="hero-actions"><button class="btn btn-primary" id="loginForOffer">Log in to make an offer</button></div>':''}
 ${state.me&&!owner&&(j.status!=='open'||offerExpired)?'<div class="inline-note">This job is no longer accepting offers.</div>':''}
 ${state.me&&j.assigned_worker_id&&(owner||j.assigned_worker_id===state.me.id)&&['accepted','completed','cancelled'].includes(j.status)&&!(owner&&j.status==='accepted')?`<div class="hero-actions"><button class="btn btn-secondary" id="messagesButton">${j.status==='accepted'?'Open messages':'View message history'}</button></div>`:''}
 ${j.status==='accepted'&&state.me&&(owner||j.assigned_worker_id===state.me.id)?`<div class="completion-flow ht1544-completion"><h3>Job completion</h3><div class="ht1544-completion-status" role="status"><span class="ht1544-completion-dot"></span><div><strong>${j.completion_requested_at?'Awaiting customer review':j.completion_rejected_at?'Changes requested':owner?'Waiting for worker submission':'Ready for worker to submit'}</strong><small>${j.completion_requested_at?'Customer has 48 hours after submission to approve, request changes, or dispute. No payout is guaranteed until processing is complete.':j.completion_rejected_at?'The worker can address the requested changes and resubmit.':'The assignment stays scheduled until completion is submitted.'}</small></div></div>${j.completion_rejected_at&&!j.completion_requested_at?'<div class="inline-note">Changes have been requested after work was submitted. The booking remains active. Cancellation is locked; use the dispute option above if needed.</div>':''}${j.completion_requested_at?`<div class="inline-note">The worker marked this work finished. ${e(j.completion_note||'')} ${owner?'Please approve, request changes, or open a dispute within 48 hours.':'Customer has 48 hours to approve, request changes, or open a dispute. If no issue is opened, the task becomes eligible for transfer review.'}</div>`:`<p class="mock-meta">${owner?'The worker needs to mark this job finished before you can confirm completion.':'When the work is done, request confirmation from the customer.'}</p>`}<div class="mini-actions">${owner&&j.completion_requested_at?`<button class="btn btn-primary" data-complete="${j.id}">Confirm completed</button><button class="btn btn-secondary" data-job-changes="${j.id}">Request changes</button>`:''}${!owner&&j.assigned_worker_id===state.me.id&&!j.completion_requested_at?`<button class="btn btn-primary" data-job-finished="${j.id}">Mark work finished</button>`:''}${!j.completion_requested_at&&!j.completion_rejected_at?'<button class="btn btn-secondary" id="cancelJobDetail">Cancel scheduled job</button>':'<span class="inline-note">Work was submitted for completion. Cancellation is locked. If there is a disagreement, open a job dispute above for admin review. This does not process or guarantee payment.</span>'}</div></div>`:''}
 ${j.status==='completed'&&state.me&&(owner||j.assigned_worker_id===state.me.id)?`<div class="hero-actions"><button class="btn btn-primary" id="leaveReview">${reviewButtonText(j.id)}</button></div>`:''}</div>`);
 enhanceTaskDetails(j,initialTab);
 bindAppointmentPanel(j);
 if(mine(j)&&j.status==='open')showOffers(j.id,true);
 if($('ht1533ReadMore'))$('ht1533ReadMore').onclick=()=>{const desc=$('ht1533Description'),button=$('ht1533ReadMore');const expanded=!desc.classList.toggle('ht1533-description-collapsed');button.setAttribute('aria-expanded',String(expanded));button.innerHTML=expanded?'Show less':`Read full description ${icon('arrow',15)}`;};
 if($('jobOwnerProfile'))$('jobOwnerProfile').onclick=()=>openPublicProfile(j.owner_id);
 // Inline photo carousel: stay in Task Details; open the full lightbox only when the main image is clicked.
 let ht157PhotoIndex=0;
 const ht157PhotoStage=document.querySelector('#modalRoot .ht157-photo-stage');
 const ht157PhotoMain=ht157PhotoStage?.querySelector('.ht1533-photo-primary');
 const ht157PhotoThumbs=[...document.querySelectorAll('#modalRoot [data-photo-select]')];
 function ht157ShowPhoto(index){
  if(!ht157PhotoMain||!j.photos?.length)return;
  ht157PhotoIndex=(index+j.photos.length)%j.photos.length;
  const p=j.photos[ht157PhotoIndex],img=ht157PhotoMain.querySelector('img');
  img.src=p.photo_data;img.alt=`Customer-provided task photo ${ht157PhotoIndex+1}`;
  ht157PhotoMain.dataset.photoOpen=String(p.id);ht157PhotoMain.setAttribute('aria-label',`Open task photo ${ht157PhotoIndex+1}`);
  const counter=ht157PhotoStage.querySelector('.ht157-photo-count');if(counter)counter.textContent=`${ht157PhotoIndex+1} / ${j.photos.length}`;
  ht157PhotoThumbs.forEach((b,i)=>{b.classList.toggle('is-current',i===ht157PhotoIndex);b.setAttribute('aria-pressed',String(i===ht157PhotoIndex))});
 }
 ht157PhotoThumbs.forEach(b=>b.addEventListener('click',()=>ht157ShowPhoto(Number(b.dataset.photoSelect))));
 ht157PhotoStage?.querySelectorAll('[data-photo-step]').forEach(b=>b.addEventListener('click',()=>ht157ShowPhoto(ht157PhotoIndex+Number(b.dataset.photoStep))));
 if(ht157PhotoMain)ht157PhotoMain.onclick=()=>{const p=j.photos[ht157PhotoIndex];if(p)openPhotoLightbox(p.photo_data,j.photos.map(photo=>photo.photo_data),ht157PhotoIndex)};
 const ht157Dialog=document.querySelector('#modalRoot .modal');
 ht157Dialog?.addEventListener('keydown',event=>{
  if(!['ArrowLeft','ArrowRight'].includes(event.key)||!j.photos||j.photos.length<2)return;
  if(document.activeElement?.closest('input,textarea,select,[role="tablist"]'))return;
  const photosPanel=document.querySelector('#ht1521-panel-photos');if(photosPanel?.hidden)return;
  event.preventDefault();ht157ShowPhoto(ht157PhotoIndex+(event.key==='ArrowRight'?1:-1));
 });
 if($('openTaskWorkspace'))$('openTaskWorkspace').onclick=()=>{const progress=document.querySelector('#modalRoot [data-task-tab="progress"]');if(progress)progress.click();else openJob(j.id,'progress')};
 if($('cancelOfferDetail'))$('cancelOfferDetail').onclick=()=>{const back=document.querySelector('#modalRoot #offerForm > .mini-btn');if(back)back.click();else closeModal();};
 if($('offerForm')){$('offerForm').onsubmit=ev=>submitOffer(ev,j.id);const priceInput=$('offerForm').elements.price;const feeTarget=$('workerOfferFeePreview');const compareTarget=$('ht1557PriceComparison');if(priceInput&&feeTarget)priceInput.addEventListener('input',()=>{const q=workerPaymentBreakdown(priceInput.value);feeTarget.innerHTML=`Offer price <strong>${moneyCents(q.gross)}</strong> · HomeTask fee (10%) <strong>−${moneyCents(q.fee)}</strong> · Expected payout <strong>${moneyCents(q.net)}</strong>`;if(compareTarget)compareTarget.innerHTML=offerAskingComparisonMarkup(priceInput.value,j.budget)});bindOfferDuration(j);if($('offerSlotSelect'))$('offerSlotSelect').onchange=()=>{$('offerCustomTimes').hidden=$('offerSlotSelect').value!=='other';showWorkerConflictWarning(j)};
 document.querySelectorAll('input[name="ht1530Slot"]').forEach(r=>r.onchange=()=>{const sel=$('offerSlotSelect');sel.value=r.value;sel.dispatchEvent(new Event('change'));});
showWorkerConflictWarning(j);}
 if($('acceptCustomerCounter'))$('acceptCustomerCounter').onclick=()=>respondCustomerCounter(j.id,true);
 if($('declineCustomerCounter'))$('declineCustomerCounter').onclick=()=>respondCustomerCounter(j.id,false);
 if($('withdrawButton'))$('withdrawButton').onclick=()=>withdraw(j.id);
 if($('assignedProfile'))$('assignedProfile').onclick=()=>openPublicProfile(j.assigned_worker_id);
 if($('cancelJobDetail'))$('cancelJobDetail').onclick=()=>showCancelJob(j.id);
 document.querySelectorAll('#modalRoot [data-job-finished]').forEach(b=>b.onclick=()=>requestWorkFinished(j.id));
 document.querySelectorAll('#modalRoot [data-job-changes]').forEach(b=>b.onclick=()=>requestWorkChanges(j.id));
 document.querySelectorAll('#modalRoot [data-complete]').forEach(b=>b.onclick=()=>completeJob(j.id));
 if($('messageAssignedWorker'))$('messageAssignedWorker').onclick=()=>showMessages(j.id,j.assigned_worker_id,j.assigned_worker_name);
 if($('compareButton'))$('compareButton').onclick=()=>openJob(j.id,'worker');
 if($('leaveReview'))$('leaveReview').onclick=()=>reviewJob(j.id);
 if($('editButton'))$('editButton').onclick=()=>navEdit(j.id);
 if($('loginForOffer'))$('loginForOffer').onclick=showAuth;
 if($('reportJobButton'))$('reportJobButton').onclick=()=>showReportDialog('job',j.id);
 if($('reportDisputeButton'))$('reportDisputeButton').onclick=()=>showReportDialog('job',j.id,'dispute');
 if($('detailSaveJob'))$('detailSaveJob').onclick=async ev=>{ev.stopPropagation();await toggleSavedJob(j.id)};
 if($('messagesButton'))$('messagesButton').onclick=()=>showMessages(j.id,owner?j.assigned_worker_id:j.owner_id,owner?j.assigned_worker_name:j.owner_name);
 if($('jobResultPhotos'))loadJobResultPhotos(j);
}
async function submitOffer(ev,id){
 ev.preventDefault();if(($('offerSlotSelect')?.value||'other')==='other'&&!$('offerCustomStart')?.value){toast('Choose a start time, or arrange scheduling after hiring.');$('offerCustomStart')?.focus();return;}if(($('offerSlotSelect')?.value||'other')==='other'&&validateDurationParts('offerCustom')===null){$('offerCustomMinutes')?.reportValidity();return}
 const fd=new FormData(ev.target),details={price:Number(fd.get('price')),note:fd.get('note'),...offerSchedule(state.detail)};
 if(details.proposed_start&&details.proposed_end){
  try{const check=await api(`/worker-availability/check?start=${encodeURIComponent(details.proposed_start)}&end=${encodeURIComponent(details.proposed_end)}&job_id=${id}`);
   if(Array.isArray(check.conflicts)&&check.conflicts.length){const notice=$('workerScheduleNotice');if(notice){notice.hidden=false;notice.textContent='Conflict: This time overlaps a confirmed HomeTask assignment. Choose another time.';notice.classList.add('schedule-warning');}toast('That time conflicts with a confirmed assignment.');return;}
  }catch(err){toast('Could not verify availability. Please try again.');return;}
 }
 if(!Number.isFinite(details.price)||details.price<=0)return toast('Enter a valid offer price.');
 const breakup=workerPaymentBreakdown(details.price),jobTitle=state.detail?.title||'this task';
 // A self-contained confirmation preserves the offer form state when cancelled.
 const confirmDialog=document.createElement('div');confirmDialog.className='ht152-offer-backdrop';confirmDialog.setAttribute('role','presentation');
 confirmDialog.innerHTML=`<section class="ht152-offer-confirm" role="dialog" aria-modal="true" aria-labelledby="ht152OfferTitle"><h2 id="ht152OfferTitle">Confirm your offer</h2><p class="mock-meta">Review before submitting to the customer.</p><dl><div><dt>Task</dt><dd>${e(jobTitle)}</dd></div><div><dt>Offer price</dt><dd>${moneyCents(breakup.gross)}</dd></div><div><dt>Compared with asking</dt><dd>${e(offerAskingComparison(details.price,state.detail?.budget).text)}</dd></div><div><dt>HomeTask fee (10%)</dt><dd>−${moneyCents(breakup.fee)}</dd></div><div class="ht152-net-row"><dt>Estimated payout</dt><dd>${moneyCents(breakup.net)}</dd></div><div><dt>Scheduled time</dt><dd>${e(scheduledWindow(details.proposed_start,details.proposed_end))}</dd></div><div><dt>Message</dt><dd>${e(details.note||'No note')}</dd></div></dl><div class="hero-actions"><button type="button" class="btn btn-secondary" id="ht152OfferEdit">Edit offer</button><button type="button" class="btn btn-primary" id="ht152OfferSend">Confirm & send</button></div></section>`;
 document.body.appendChild(confirmDialog);const close=()=>confirmDialog.remove();confirmDialog.querySelector('#ht152OfferEdit').onclick=close;
 confirmDialog.onclick=event=>{if(event.target===confirmDialog)close()};
 const send=confirmDialog.querySelector('#ht152OfferSend');send.onclick=async()=>{if(send.disabled)return;send.disabled=true;send.textContent='Sending…';try{await api(`/jobs/${id}/offers`,'POST',details);close();await refresh();closeModal();render();toast('Offer sent to the customer.')}catch(err){send.disabled=false;send.textContent='Confirm & send';toast(err.message)}};
 send.focus();
}
async function resubmitOriginalOffer(jobId){
 const job=state.jobs.find(j=>j.id===jobId);
 const offer=state.offers.find(o=>o.job_id===jobId);
 if(!job||!offer)return toast('Job or offer not found.');
 if(!confirm(`Resubmit your offer for ${job.title} at the original ${dollars(job.budget)} budget?`))return;
 try{
  await api(`/jobs/${jobId}/offers`,'POST',{
   price:Number(job.budget), note:offer.note||'',
   proposed_start:offer.proposed_start||null, proposed_end:offer.proposed_end||null
  });
  await refresh();render();toast('Offer resubmitted at the original listed budget.');
 }catch(err){toast('Please open the job and choose a new time if your previous one has expired.');openJob(jobId)}
}
async function withdraw(id){if(!confirm('Withdraw your offer for this job?'))return;try{await api(`/jobs/${id}/offers/mine`,'DELETE');await refresh();closeModal();render();toast('Offer withdrawn.')}catch(err){toast(err.message)}
}
async function loadJobResultPhotos(j){
 const root=$('jobResultPhotos');if(!root)return;
 try{
  const data=await api(`/jobs/${j.id}/result-photos`);
  const photos=data.photos||{};
  root.innerHTML=`<div class="ht-result-panel"><div class="section-head"><div><span class="kicker">JOB RESULTS</span><h3>Before & after</h3></div><span class="tag">${data.share_publicly?'Customer approved for portfolio':'Private to job participants'}</span></div><p class="mock-meta">Upload optional progress photos. They remain private unless the customer explicitly approves sharing both images after job completion.</p><div class="ht-result-gallery">${['before','after'].map(kind=>`<div class="ht-result-tile"><strong>${kind==='before'?'Before':'After'}</strong>${photos[kind]?`<button type="button" data-result-preview="${kind}" aria-label="View ${kind} photo"><img src="${e(photos[kind])}" alt="${kind} photo" loading="lazy"/></button>`:'<div class="ht-result-placeholder">No photo yet</div>'}${data.can_upload?`<label class="mini-btn">${photos[kind]?'Replace':'Upload'} ${kind} photo<input type="file" hidden accept="image/png,image/jpeg,image/webp" data-result-upload="${kind}" /></label>`:''}</div>`).join('')}</div>${data.can_approve?`<div class="ht-consent-actions"><p class="mock-meta">You control whether these photos appear publicly on the worker's profile. You can revoke permission later.</p><button class="btn btn-secondary" id="toggleShowcaseConsent" ${!data.share_publicly&&(!photos.before||!photos.after)?'disabled':''}>${data.share_publicly?'Revoke public photo approval':'Approve photos for public portfolio'}</button></div>`:''}</div>`;
  root.querySelectorAll('[data-result-preview]').forEach(b=>b.onclick=()=>openPhotoLightbox(photos[b.dataset.resultPreview]));
  root.querySelectorAll('[data-result-upload]').forEach(input=>input.onchange=async()=>{
   const file=input.files?.[0];if(!file)return;try{const image=await compressJobPhoto(file);await api(`/jobs/${j.id}/result-photos/${input.dataset.resultUpload}`,'PUT',{data:image});toast('Photo saved privately. Customer approval is required for public sharing.');loadJobResultPhotos(j)}catch(err){toast(err.message)}
  });
  if($('toggleShowcaseConsent'))$('toggleShowcaseConsent').onclick=async()=>{try{await api(`/jobs/${j.id}/showcase-consent`,'PUT',{allowed:!data.share_publicly});toast(data.share_publicly?'Photo sharing revoked.':'Public sharing approved.');loadJobResultPhotos(j)}catch(err){toast(err.message)}};
 }catch(err){if(root)root.innerHTML=`<p class="mock-meta">${e(err.message)}</p>`}
}
// HomeTask 15.13.4: a concise, predictable recommendation, not an assurance of worker quality.
function ht134OfferValueScore(offer, details, budget, category){
 const rating=Math.max(0,Math.min(5,Number(details.rating)||0));
 const reviews=Math.max(0,Number(details.review_count)||0);
 const completed=Math.max(0,Number(details.completed_jobs)||0);
 const price=Number(offer.price)||0;
 const base=Math.max(1,Number(budget)||1);
 // Ratings are tempered by review count; sparse reviews never dominate the score.
 const reviewWeight=reviews/(reviews+5);
 const ratingComponent=(rating*reviewWeight+3.8*(1-reviewWeight))/5;
 const priceComponent=Math.max(0,Math.min(1.3,base/Math.max(1,price)))/1.3;
 const completionComponent=Math.min(1,completed/15);
 const categoryTerms=String(category||'').toLowerCase().split(/[\s,\/]+/).filter(x=>x.length>3);
 const skillString=String(offer.worker_skills||'').toLowerCase();
 const skillMatch=categoryTerms.some(term=>skillString.includes(term))?1:0;
 const verified=details.verified?1:0;
 return .36*ratingComponent+.32*priceComponent+.17*completionComponent+.10*skillMatch+.05*verified;
}
async function showOffers(id,embedded=false){
 try{
  const j=await api(`/jobs/${id}`);if(!mine(j))return toast('Only the customer can compare offers.');
  if(!embedded)state.detail=j;
  ht130MarkOffersSeen(id,(j.offers||[]).length);
  const comparison=await api(`/jobs/${id}/offer-comparison`).catch(()=>({offers:[]}));
  const workerData=new Map((comparison.offers||[]).map(row=>[Number(row.id),row]));
  const offers=(j.offers||[]).slice();
  const multi=offers.length>2;
  const eligible=offers.filter(o=>o.decision!=='rejected');
  const rated=[...eligible].sort((a,b)=>ht134OfferValueScore(b,workerData.get(Number(b.id))||{},j.budget,j.category)-ht134OfferValueScore(a,workerData.get(Number(a.id))||{},j.budget,j.category)||Number(a.price)-Number(b.price));
  const bestId=rated[0]?.id;
  const initialOrder=[...offers].sort((a,b)=>Number(a.decision==='rejected')-Number(b.decision==='rejected')||ht134OfferValueScore(b,workerData.get(Number(b.id))||{},j.budget,j.category)-ht134OfferValueScore(a,workerData.get(Number(a.id))||{},j.budget,j.category));
  const card=o=>{
   const details=workerData.get(Number(o.id))||{};
   const difference=Number(o.price)-Number(j.budget);
   const relation=difference<0?'is-under':difference>0?'is-over':'is-equal';
   return `<article class="offer-card offer-comparison ht156-offer-card ht134-offer ${o.decision==='rejected'?'declined-offer':''} ${o.id===bestId?'ht134-best':''}" data-offer-card="${Number(o.id)}">
    ${o.id===bestId?'<span class="ht134-best-ribbon" aria-label="Highest estimated value">✦ Best value</span>':''}
    <div class="ht151-offer-label">${o.decision==='rejected'?'Declined proposal':'Worker proposal'}</div>
    <div class="ht157-offer-profile-row"><div class="offer-worker-head"><button class="person-link" data-worker="${o.worker_id}">${avatar(o.worker_id,o.worker_name)}<span class="ht1532-worker-identity"><strong>${e(o.worker_name)}</strong><span class="ht1532-worker-rating">${ratingStars(details.rating,details.review_count)}</span><small>${e(o.worker_skills||'View worker profile')}</small></span></button>${o.decision==='rejected'?'<span class="status status-completed">Declined</span>':''}</div>
    <div class="ht1532-worker-details"><span>${icon('briefcase',14)} ${Number(details.completed_jobs||0)} completed jobs</span><span>${icon('shield',14)} ${details.verified?'Profile reviewed':'Not yet reviewed'}</span></div></div>
    <div class="ht134-price-hero ${relation}"><span class="ht134-budget-mini">Posted budget: <strong>${dollars(j.budget)}</strong></span><span class="ht134-offer-label">Worker's offer</span><strong class="ht134-offer-amount">${dollars(o.price)}</strong><small class="ht134-delta">${difference===0?'Matches posted budget':`${dollars(Math.abs(difference))} ${difference<0?'under':'over'} budget`}</small></div>
    <div class="offer-meta ht151-offer-meta"><small>${e(o.note||'No additional note')}</small><small>Scheduled time: ${e(scheduledWindow(o.proposed_start,o.proposed_end))}</small>${o.proposed_start?`<small>Requested duration: <strong>${e(durationText(intervalMinutes(o.proposed_start,o.proposed_end,j.duration_minutes||120)))}</strong>${intervalMinutes(o.proposed_start,o.proposed_end,j.duration_minutes||120)!==Number(j.duration_minutes||120)?' (different from estimate)':''}</small>`:''}</div>
    ${o.counter_status==='pending'?`<div class="negotiation-notice small">Your counteroffer: <strong>${dollars(o.counter_price)}</strong>. Awaiting the worker's response.</div>`:''}
    ${o.counter_status==='declined'?'<div class="inline-note">The worker declined your counteroffer; their original offer is still pending.</div>':''}
    ${o.counter_status==='accepted'?'<div class="inline-note">Worker accepted your counteroffer.</div>':''}
    <div class="mini-actions">${o.id===j.accepted_offer_id&&['accepted','completed','cancelled'].includes(j.status)?`<button class="mini-btn" data-message="${o.worker_id}" data-name="${e(o.worker_name)}">${j.status==='accepted'?'Message hired worker':'View messages'}</button>`:''}${j.status==='open'&&o.decision!=='rejected'?`<button class="mini-btn" data-counter="${o.id}" ${o.counter_status==='pending'?'disabled':''}>Counteroffer</button><button class="mini-btn ht156-hire-btn" data-accept="${o.id}" ${o.counter_status==='pending'?'disabled':''}>Hire worker</button><button class="mini-btn" data-reject="${o.id}">Decline</button>`:''}</div>
   </article>`;
  };
  const offerMarkup=`${embedded?'':modalHead(j.title,'WORKER OFFERS')}${embedded?'':`<p class="mock-meta ht134-modal-subtitle">Posted budget: <strong>${dollars(j.budget)}</strong> · Review each proposal and choose a worker.</p><div class="ht151-compare-intro ht156-compare-intro"><span>${icon('shield',20)} Compare reviews, completed jobs, and prices before hiring.</span></div>`}
   <div class="ht134-toolbar"><strong>${offers.length} offer${offers.length===1?'':'s'} received</strong>${multi?`<label class="ht134-sort">Sort by <select id="ht134SortOffers" class="control" aria-label="Sort worker offers"><option value="value">Value</option><option value="price">Price (lowest first)</option><option value="rating">Rating</option></select></label>`:''}</div>
   <div class="ht134-rail-shell ${multi?'has-many':''}">
    ${multi?'<button type="button" class="ht134-rail-nav ht134-prev" id="ht134PrevOffer" aria-label="Previous worker offer">‹</button>':''}
    <div class="ht-offer-compare-grid ht156-offer-grid ht134-offer-rail" id="ht134OfferRail">${initialOrder.length?initialOrder.map(card).join(''):'<div class="empty">No offers yet.</div>'}</div>
    ${multi?'<button type="button" class="ht134-rail-nav ht134-next" id="ht134NextOffer" aria-label="Next worker offer">›</button>':''}
   </div>${multi?'<p class="ht134-method-note">Best value is an estimate based on price, reviews, completed jobs, and listed skills. Always review profiles before hiring.</p>':''}`;
  const root=embedded?document.getElementById('ht1521-panel-worker'):$('modalRoot');
  if(!root||embedded&&Number(state.detail?.id)!==Number(id))return;
  if(embedded){root.innerHTML='<div class="ht1523-embedded-offers ht134-comparison-modal">'+offerMarkup+'</div>';root.closest('.ht1521-detail')?.classList.add('ht1523-has-embedded-offers')}else{modal(offerMarkup);const modalNode=root?.querySelector('.modal');modalNode?.classList.add('ht-comparison-modal','ht134-comparison-modal');}
  const rail=$('ht134OfferRail');
  const bindActions=()=>{
   root.querySelectorAll('[data-accept]').forEach(x=>x.onclick=()=>acceptOffer(id,Number(x.dataset.accept)));
   root.querySelectorAll('[data-reject]').forEach(x=>x.onclick=()=>rejectOffer(id,Number(x.dataset.reject)));
   root.querySelectorAll('[data-counter]').forEach(x=>x.onclick=()=>showCustomerCounter(id,Number(x.dataset.counter)));
   root.querySelectorAll('[data-worker]').forEach(x=>x.onclick=()=>openPublicProfile(Number(x.dataset.worker)));
   root.querySelectorAll('[data-message]').forEach(x=>x.onclick=()=>showMessages(id,Number(x.dataset.message),x.dataset.name));
  };
  bindActions();
  if(multi&&rail){
   const sort=$('ht134SortOffers');
   sort.onchange=()=>{
    const order=[...offers].sort((a,b)=>{
     if(sort.value==='price')return Number(a.price)-Number(b.price);
     if(sort.value==='rating'){
      const x=workerData.get(Number(a.id))||{},y=workerData.get(Number(b.id))||{};
      return (Number(y.rating)||0)-(Number(x.rating)||0)||(Number(y.review_count)||0)-(Number(x.review_count)||0);
     }
     return Number(a.decision==='rejected')-Number(b.decision==='rejected')||ht134OfferValueScore(b,workerData.get(Number(b.id))||{},j.budget,j.category)-ht134OfferValueScore(a,workerData.get(Number(a.id))||{},j.budget,j.category);
    });
    order.forEach(o=>{const el=rail.querySelector(`[data-offer-card="${Number(o.id)}"]`);if(el)rail.append(el)});
    rail.scrollLeft=0;updateNav();
   };
   const prev=$('ht134PrevOffer'),next=$('ht134NextOffer');
   const updateNav=()=>{prev.disabled=rail.scrollLeft<=2;next.disabled=rail.scrollLeft+rail.clientWidth>=rail.scrollWidth-2;};
   const scrollOne=direction=>{const first=rail.querySelector('.ht134-offer');const step=(first?.getBoundingClientRect().width||rail.clientWidth/2)+16;rail.scrollBy({left:direction*step,behavior:'smooth'});};
   prev.onclick=()=>scrollOne(-1);next.onclick=()=>scrollOne(1);
   rail.addEventListener('scroll',updateNav,{passive:true});
   requestAnimationFrame(updateNav);
  }
 }catch(err){toast(err.message)}
}
async function rejectOffer(jobId,offerId){if(!confirm('Decline this worker offer? They can still resubmit at your original listed budget.'))return;try{await api(`/jobs/${jobId}/offers/${offerId}/reject`,'POST');await refresh();await openJob(jobId,'worker');toast('Offer declined. Worker can reapply at the original budget.')}catch(err){toast(err.message)}}
async function workerProfile(workerId){return openPublicProfile(workerId)}
async function acceptOffer(jobId,offerId){
 try{
  const quote=await api(`/payments/quote/${jobId}/${offerId}`);
  if(quote.mode==='configuration_error')return toast('Stripe payment configuration is incomplete. Ask the HomeTask administrator to fix the test checkout settings.');
  const test=quote.mode==='stripe_test';
  modal(`${modalHead('Review your booking','HOMETASK CHECKOUT')}<p class="mock-meta">Hiring the worker confirms the agreed task price. Messaging and exact address sharing open after booking is confirmed.</p><div class="ht-checkout-breakdown"><div><span>Agreed task price</span><strong>${moneyCents(quote.agreed_price_cents)}</strong></div><div><span>Customer service fee (5%)</span><strong>${moneyCents(quote.service_fee_cents)}</strong></div><div class="ht-total"><span>Total at checkout</span><strong>${moneyCents(quote.checkout_total_cents)}</strong></div></div>${test?'<div class="inline-note"><strong>Stripe TEST mode.</strong> Use Stripe test card details only. No actual money will be charged. The worker is hired only after Stripe confirms the test payment.</div>':'<div class="inline-note"><strong>Demo booking only.</strong> Checkout is not configured. No funds are collected or reserved, and no worker payment is guaranteed.</div>'}<div class="hero-actions"><button class="btn btn-primary" id="confirmPaymentHire">${test?'Continue to Stripe test checkout':'Confirm unfunded demo booking'}</button><button class="btn btn-secondary" id="cancelPaymentHire">Back to offers</button></div>`);
  $('cancelPaymentHire').onclick=()=>openJob(jobId,'worker');
  $('confirmPaymentHire').onclick=async()=>{
   const button=$('confirmPaymentHire');button.disabled=true;button.textContent='Please wait…';
   try{
    if(test){const r=await api(`/payments/checkout/${jobId}/${offerId}`,'POST');window.location.assign(r.checkout_url);return;}
    await api(`/jobs/${jobId}/accept/${offerId}`,'POST');await refresh();closeModal();nav('dashboard');toast('Unfunded demo booking created. No money was collected.');
   }catch(err){button.disabled=false;button.textContent='Try again';toast(err.message)}
  };
 }catch(err){toast(err.message)}
}
function showCancelJob(id){
 const j=state.jobs.find(x=>x.id===id);
 if(j&&j.status==='accepted'&&(j.completion_requested_at||j.completion_rejected_at)){toast('Work has been submitted. Cancellation is locked. Open a job dispute for unresolved issues.');return;}
 if(!j||!['open','accepted'].includes(j.status))return toast('This job can no longer be cancelled.');
 const options=['Plans changed','Scheduling conflict','No longer need the service','Unable to agree on terms','Hired someone elsewhere','Personal emergency','Other'];
 modal(`${modalHead(j.status==='open'?'Cancel listing':'Cancel scheduled job','CANCELLATION')}<p class="mock-meta">${e(j.title)}</p><p class="inline-note">${j.status==='accepted'?'The other participant will be notified. The booking will be cancelled for both users.':'This listing will stop receiving offers.'} This action cannot be undone.</p><form id="cancelJobForm"><div class="field"><label for="cancelReason">Reason for cancelling (required)</label><select class="control" id="cancelReason" name="reason" required><option value="">Choose a reason...</option>${options.map(o=>`<option value="${e(o)}">${e(o)}</option>`).join('')}</select></div><div class="field"><label>Additional details (optional)</label><textarea class="control" name="note" maxlength="300" placeholder="Provide context for the other person if helpful"></textarea></div><div class="hero-actions"><button class="btn btn-danger" type="submit">Confirm cancellation</button><button class="btn btn-secondary" type="button" id="keepJob">Keep job</button></div></form>`);
 $('keepJob').onclick=closeModal;
 $('cancelJobForm').onsubmit=async ev=>{ev.preventDefault();const fd=new FormData(ev.target);try{await api(`/jobs/${id}/cancel`,'POST',{reason:fd.get('reason'),note:fd.get('note')});await refresh();closeModal();render();toast('Job cancelled. The other participant has been notified if the job was scheduled.')}catch(err){toast(err.message)}};
}

async function completeJob(id){if(!confirm('Confirm that the worker completed this job satisfactorily?'))return;try{await api(`/jobs/${id}/complete`,'POST');await refresh();render();toast('Job marked completed. You can now leave a review.');reviewJob(id)}catch(err){toast(err.message)}}
async function showMessages(jobId,partnerId,partnerName){
 closeModal();if(state.view!=='inbox')nav('inbox');
 await loadConversations();
 const conv=state.conversations.find(c=>c.job_id===jobId&&c.partner_id===partnerId);
 if(!conv)return toast('That conversation is not available.');
 await openChatConversation(conv);
}
function showAuth(){modal(`${modalHead('Welcome to HomeTask','YOUR ACCOUNT')}<div class="role-tabs"><button id="tabLogin" class="btn btn-primary" type="button">Log in</button><button id="tabRegister" class="btn btn-secondary" type="button">Create account</button></div><form id="authForm" style="margin-top:16px"><div id="registerFields"></div><div class="field"><label>Email</label><input class="control" type="email" name="email" autocomplete="email" required/></div><div class="field"><label for="authPassword">Password</label><div class="password-input-wrap"><input class="control" id="authPassword" type="password" name="password" minlength="8" autocomplete="current-password" required/><button class="password-toggle" type="button" id="toggleAuthPassword" aria-label="Show password" aria-pressed="false" title="Show password">${icon('eye',18)}</button></div></div><button class="btn btn-primary" id="authSubmit" type="submit">Log in</button></form><button type="button" class="mini-btn" id="forgotPasswordButton">Forgot password?</button>`);const pw=$('authPassword'),eye=$('toggleAuthPassword');eye.onclick=()=>{const visible=pw.type==='password';pw.type=visible?'text':'password';eye.innerHTML=icon(visible?'eye-off':'eye',18);eye.setAttribute('aria-label',visible?'Hide password':'Show password');eye.setAttribute('aria-pressed',String(visible));eye.title=visible?'Hide password':'Show password';pw.focus()};let register=false;function setTab(value){register=value;$('registerFields').innerHTML=register?`<div class="field"><label>Full name</label><input class="control" name="name" minlength="2" maxlength="80" autocomplete="name" required/></div><div class="field"><label>Primary role</label><select class="control" name="role"><option value="customer">Customer</option><option value="worker">Worker</option></select></div>`:'';$('authSubmit').textContent=register?'Create account':'Log in';$('tabRegister').className='btn '+(register?'btn-primary':'btn-secondary');$('tabLogin').className='btn '+(!register?'btn-primary':'btn-secondary');$('authForm').querySelector('[name=password]').autocomplete=register?'new-password':'current-password'}$('forgotPasswordButton').onclick=showForgotPassword;$('tabLogin').onclick=()=>setTab(false);$('tabRegister').onclick=()=>setTab(true);$('authForm').onsubmit=async ev=>{ev.preventDefault();const values=Object.fromEntries(new FormData(ev.target));try{state.me=(await api(register?'/register':'/login','POST',values)).user;state.personalGeo=null;state.nearbyCenter=null;state.nearbyLabel='';ht1543AutoLocationRequested=false;ht1543UserPickedLocation=false;resetNotificationsForAccount();await refresh();closeModal();nav('dashboard');await pollNotifications(true);toast(`Welcome, ${state.me.name}!`)}catch(err){toast(err.message)}}}

function appointmentsPage(){
 if(!state.me)return signInPrompt();
 // Keep customer-owned bookings separate from worker assignments.
 const bookings=state.jobs.filter(j=>j.status==='accepted'&&mine(j));
 const scheduled=bookings.filter(j=>j.scheduled_start).sort((a,b)=>a.scheduled_start.localeCompare(b.scheduled_start));
 const awaiting=bookings.filter(j=>!j.scheduled_start);
 const filter=['all','scheduled','unscheduled'].includes(state.appointmentFilter)?state.appointmentFilter:'all';
 const visible=filter==='scheduled'?scheduled:filter==='unscheduled'?awaiting:[...scheduled,...awaiting];
 const heading=filter==='scheduled'?'Scheduled appointments':filter==='unscheduled'?'Awaiting a time':'Your appointments';
 const tiles=[['scheduled','Scheduled',scheduled.length,'calendar'],['unscheduled','Awaiting time',awaiting.length,'clock']].map(([key,label,count,ico])=>`<button type="button" class="ht15150-snapshot-tile ${filter===key?'is-selected':''}" data-appointment-filter="${key}" aria-pressed="${filter===key}" aria-label="Show ${label.toLowerCase()} appointments, ${count}"><span class="ht15150-snapshot-label">${icon(ico,17)} ${label}</span><strong>${count}</strong><small>${key==='scheduled'?'Confirmed times':'Need a time arranged'}</small></button>`).join('');
 const cards=visible.map(j=>`<article class="dashboard-job interactive-job-card ht132-appointment ht15150-appt-card" data-card-job="${j.id}" role="button" tabindex="0" aria-label="View appointment for ${e(j.title)}"><div class="ht132-appointment-photo">${compactJobPhoto(j)}</div><div class="ht132-appointment-body"><div class="ht15150-appt-title-row"><strong>${e(j.title)}</strong><span class="status ${statusClass(j)}">${status(j)}</span></div>${j.scheduled_start?`<p class="mock-meta">${icon('calendar',16)} ${e(schedulePretty(j.scheduled_start))} – ${e(schedulePretty(j.scheduled_end))}</p>`:`<p class="mock-meta">${icon('clock',16)} Appointment time not confirmed</p>`}<p class="mock-meta">${icon('pin',16)} ${e(coarseLocation(j.location)||j.location)}</p>${j.assigned_worker_name?`<p class="mock-meta">${icon('user',16)} ${e(j.assigned_worker_name)}</p>`:''}<div class="ht15150-appt-actions">${!j.scheduled_start?`<button class="btn btn-primary ht15150-schedule-button" type="button" data-appointment-schedule="${j.id}">${icon('calendar',16)} Schedule task</button>`:`<button class="mini-btn" type="button" data-appointment-schedule="${j.id}">Request time change</button>`}</div></div></article>`).join('');
 const empty=bookings.length===0?`<div class="ht15150-appointments-empty">${icon('calendar',29)}<strong>No appointments yet</strong><p>After hiring a worker, your task will appear here so you can arrange a time.</p><button class="mini-btn" type="button" data-view="dashboard">View my tasks</button></div>`:`<div class="ht15150-appointments-empty">${icon('calendar',29)}<strong>No ${filter==='scheduled'?'scheduled appointments':'tasks awaiting a time'}</strong><p>${filter==='scheduled'?'Your hired tasks without a confirmed time are under Awaiting time.':'All your hired tasks have confirmed appointment times.'}</p><button type="button" class="mini-btn" data-appointment-filter="all">View all appointments</button></div>`;
 return `<section class="page workspace-page ht15150-appointments-page"><div class="page-title ht15150-appointments-hero"><div class="ht15150-appointments-heading"><span class="kicker">MY SCHEDULE</span><h1>Appointments</h1><p>Manage appointments with your hired workers, and arrange times for tasks that need scheduling.</p></div><div class="ht15150-snapshot" aria-label="Appointment summary">${tiles}</div></div><div class="ht15150-appointments-content"><div class="panel ht15150-appointments-panel ht1532-appointments-panel">${visible.length?`<div class="ht133-appointments-grid">${cards}</div>`:empty}</div></div></section>`;
}

function bindHistoryFilters(){
 if($('toggleHistoryFilters'))$('toggleHistoryFilters').onclick=()=>{state.historyFiltersOpen=!state.historyFiltersOpen;render()};
 const configs=[['historyStatus','historyStatus'],['historyCategory','historyCategory'],['historySort','historySort'],['historyFrom','historyFrom'],['historyTo','historyTo']];
 configs.forEach(([id,key])=>{const input=$(id);if(input)input.onchange=()=>{state[key]=input.value;render()}});
 const input=$('historySearch');
 if(input)input.oninput=()=>{
  const selection=input.selectionStart;
  state.historyQuery=input.value;
  render();
  const next=$('historySearch');if(next){next.focus();if(selection!==null)next.setSelectionRange(selection,selection)}
 };
 if($('clearHistory'))$('clearHistory').onclick=()=>{
  state.historyStatus='all';state.historyCategory='all';state.historySort='newest';state.historyFrom='';state.historyTo='';state.historyQuery='';render();
 };
}
function historyMatches(){
 if(!state.me)return [];
 const query=state.historyQuery.trim().toLowerCase();
 const items=state.jobs.filter(j=>(mine(j)||j.assigned_worker_id===state.me.id)&&['completed','closed','cancelled'].includes(j.status))
  .filter(j=>state.historyStatus==='all'||(state.historyStatus==='cancelled'?['cancelled','closed'].includes(j.status):j.status===state.historyStatus))
  .filter(j=>state.historyCategory==='all'||j.category===state.historyCategory)
  .filter(j=>!query||[j.title,j.description,j.category,j.location,j.assigned_worker_name,j.owner_name].join(' ').toLowerCase().includes(query))
  .filter(j=>{
   const ts=Number(j.completed_at||j.cancelled_at||j.created_at||0)*1000;
   if(!ts)return !state.historyFrom&&!state.historyTo;
   // ISO local date is used for both date pickers so comparisons are chronological.
   const local=new Date(ts);const yyyy=local.getFullYear(),mm=String(local.getMonth()+1).padStart(2,'0'),dd=String(local.getDate()).padStart(2,'0');const iso=`${yyyy}-${mm}-${dd}`;
   return (!state.historyFrom||iso>=state.historyFrom)&&(!state.historyTo||iso<=state.historyTo);
  });
 const order=state.historySort;
 const activity=j=>Number(j.completed_at||j.cancelled_at||j.created_at||0);
 return items.sort((a,b)=>order==='oldest'?activity(a)-activity(b):order==='budget-high'?(b.accepted_price||b.budget)-(a.accepted_price||a.budget):order==='budget-low'?(a.accepted_price||a.budget)-(b.accepted_price||b.budget):activity(b)-activity(a));
}
function historyPage(){
 if(!state.me)return signInPrompt();
 const jobs=historyMatches();
 return `<section class="page workspace-page"><div class="page-title"><span class="kicker">${role()==='customer'?'TASK ARCHIVE':'JOB ARCHIVE'}</span><h1>${role()==='customer'?'Task history':'Job history'}</h1><p>${role()==='customer'?'Find past tasks':'Find past jobs'}, see cancellation details, and revisit completed work or reviews.</p></div>
 <button class="history-filter-toggle" id="toggleHistoryFilters" type="button" aria-expanded="${state.historyFiltersOpen}" aria-controls="historyFiltersPanel">${icon('list',17)} Filters & sorting ${state.historyFiltersOpen?'▴':'▾'}</button>
 <div class="panel history-toolbar" id="historyFiltersPanel" ${state.historyFiltersOpen?'':'hidden'}>
  <label class="history-search-field">Search past ${role()==='customer'?'tasks':'jobs'}<input class="control" id="historySearch" type="search" value="${e(state.historyQuery)}" placeholder="Job, location, worker…"/></label>
  <label>Status<select class="control" id="historyStatus"><option value="all" ${state.historyStatus==='all'?'selected':''}>All statuses</option><option value="completed" ${state.historyStatus==='completed'?'selected':''}>Completed</option><option value="cancelled" ${state.historyStatus==='cancelled'?'selected':''}>Cancelled / closed</option></select></label>
  <label>Category<select class="control" id="historyCategory"><option value="all" ${state.historyCategory==='all'?'selected':''}>All categories</option>${Object.keys(categories).map(k=>`<option value="${e(k)}" ${state.historyCategory===k?'selected':''}>${e(k)}</option>`).join('')}</select></label>
  <label>Sort by<select class="control" id="historySort"><option value="newest" ${state.historySort==='newest'?'selected':''}>Most recent</option><option value="oldest" ${state.historySort==='oldest'?'selected':''}>Oldest first</option><option value="budget-high" ${state.historySort==='budget-high'?'selected':''}>Highest value</option><option value="budget-low" ${state.historySort==='budget-low'?'selected':''}>Lowest value</option></select></label>
  <label>From<input class="control" type="date" id="historyFrom" value="${e(state.historyFrom)}"/></label>
  <label>To<input class="control" type="date" id="historyTo" value="${e(state.historyTo)}"/></label>
  <button type="button" class="btn btn-secondary" id="clearHistory">Clear filters</button>
 </div>
 <div class="panel"><div class="section-head"><h3>${role()==='customer'?'Past tasks':'Past jobs'}</h3><span class="tag">${jobs.length} matching ${jobs.length===1?(role()==='customer'?'task':'job'):(role()==='customer'?'tasks':'jobs')}</span></div><div class="stack ht138-history-grid">${jobs.length?jobs.map(j=>`<article class="dashboard-job interactive-job-card ht138-history-card" role="button" tabindex="0" data-card-job="${j.id}" aria-label="View ${e(j.title)} in job history">${compactJobPhoto(j)}<div class="dashboard-job-head"><div><strong>${e(j.title)}</strong><p class="mock-meta">${e(j.category)} · ${e(j.location)} · ${date(j.completed_at||j.cancelled_at||j.created_at)}</p></div><span class="status ${statusClass(j)}">${j.status==='cancelled'||j.status==='closed'?'Cancelled':e(j.status)}</span></div>${['cancelled','closed'].includes(j.status)?`<p class="mock-meta">Cancellation: ${e(j.cancel_reason||'Reason not specified')}</p>`:''}${mine(j)&&j.assigned_worker_id?`<button class="history-person" data-person="${j.assigned_worker_id}">${avatar(j.assigned_worker_id,j.assigned_worker_name)}<span><strong>${e(j.assigned_worker_name)}</strong><small>View worker profile</small></span>${icon('arrow',16)}</button>`:''}${j.status==='completed'?`<div class="mini-actions"><button class="mini-btn" data-review="${j.id}">${reviewButtonText(j.id)}</button></div>`:''}</article>`).join(''):'<div class="empty"><h3>No items match</h3><p>Try clearing the filters or searching for another job.</p></div>'}</div></div></section>`;
}
function settingsPage(){
 if(!state.me)return signInPrompt();
 return `<section class="page workspace-page"><div class="page-title"><span class="kicker">ACCOUNT</span><h1>Settings</h1><p>Manage your HomeTask preferences and account tools.</p></div><div class="form-layout"><div class="panel"><h3>Your account</h3><div class="settings-photo-row">${state.me.avatar_data?`<button type="button" id="adjustSettingsAvatar" class="settings-avatar-adjust editable-image-preview" title="Adjust current photo" aria-label="Adjust current profile picture">${avatar(state.me.id,state.me.name,true)}</button>`:avatar(state.me.id,state.me.name,true)}<div><strong>Profile photo</strong><p class="mock-meta">Choose a photo to replace the current picture.</p><label class="mini-btn upload-photo-button">Change photo<input type="file" id="settingsAvatarUpload" accept="image/png,image/jpeg,image/webp" hidden/></label>${state.me.avatar_data?'<button class="mini-btn" id="settingsRemoveAvatar">Remove photo</button>':''}</div></div><div class="help-list"><div class="help-item"><span class="help-num">${icon("user",18)}</span><div><strong>Public profile</strong><p class="mock-meta">Change your photo, profile banner, skills, and personal information.</p><button class="mini-btn" data-view="profile">Edit profile</button></div></div><div class="help-item"><span class="help-num">${icon("calendar",18)}</span><div><strong>Google Calendar</strong><p class="mock-meta">Connect your calendar to synchronize confirmed appointments when OAuth is configured.</p><button class="mini-btn" id="settingsCalendar">Calendar settings</button></div></div><div class="help-item"><span class="help-num">${icon("chart",18)}</span><div><strong>Analytics</strong><p class="mock-meta">Review lifetime totals, past work, and activity.</p><button class="mini-btn" data-view="analytics">Open analytics</button></div></div><div class="help-item"><span class="help-num">${icon('message',18)}</span><div><strong>Help & walkthroughs</strong><p class="mock-meta">Learn how to ${role()==='customer'?'post, hire, schedule, and review':'find jobs, make offers, schedule work, and get reviews'}.</p><button class="mini-btn" data-view="help">Open help guide</button></div></div><div class="help-item"><span class="help-num">${icon('user',18)}</span><div><strong>${role()==='worker'?'Previous Work portfolio':'Following'}</strong><p class="mock-meta">${role()==='worker'?'Show finished projects to prospective customers.':'Find workers you follow and revisit their portfolios.'}</p><button class="mini-btn" data-view="${role()==='worker'?'previous-work':'following'}">Open</button></div></div>${role()==='worker'?`<div class="help-item"><span class="help-num">${icon('check',18)}</span><div><strong>${state.me.profile_verified?'You’re verified':'Profile verification'}</strong><p class="mock-meta">${state.me.profile_verified?'Your self-reported profile has been reviewed by an administrator.': 'Request verification of your submitted profile information.'}</p><button class="mini-btn" data-view="verification">${state.me.profile_verified?'Profile reviewed':'Get profile reviewed'}</button></div></div>`:''}<div class="help-item"><span class="help-num">${icon('star',18)}</span><div><strong>My reviews</strong><p class="mock-meta">See every review you have submitted and delete a review if needed.</p><button class="mini-btn" data-view="my-reviews">Open my reviews</button></div></div></div></div><aside class="panel"><h3>Privacy & security</h3><div class="settings-safety-actions"><button class="btn btn-secondary" type="button" data-view="account-security">Password, email & account controls</button>${role()==='worker'?'<button class="btn btn-secondary" type="button" data-view="worker-preferences">Job matching preferences</button>':''}<button class="btn btn-secondary" type="button" data-view="payment-readiness">Payments & fees</button></div><p class="mock-meta">Signed in as ${e(state.me.email)}</p><div class="inline-note">Exact job addresses are shown only to the customer and assigned worker. Profile reviews are limited to self-reported information, not identity or background verification. Keep this prototype private until production security is complete.</div><button class="btn btn-secondary" id="logoutButton" style="margin-top:18px">Log out</button></aside></div></section>`;
}
function helpPage(){
 if(!state.me)return signInPrompt();
 const customer=role()==='customer';
 const steps=customer?[
  ['Post a task','Go to Post a task, add a clear description, photos if helpful, your location and budget. Add a few time windows so workers can choose.','post'],
  ['Review offers','Open My tasks and select Current Offers. Compare prices, notes, profiles and proposed dates. You can accept, decline or counter an offer.','current-offers'],
  ['Message a worker','After you hire a worker, open Messages to coordinate the accepted task. Offers and counteroffers remain available before hiring.','inbox'],
  ['Hire and schedule','Choose a worker and agree on a price and time. The appointment appears in Appointments, where either side can request a reschedule.','appointments'],
  ['Finish or cancel','Confirm finished work on the task details page. After work has been submitted, cancellation is locked. Use Open job dispute for unresolved issues. Closed tasks stay in Task history.','dashboard'],
  ['Leave a review','Find a completed task in Task history and select Leave review. You can delete a review but cannot edit it after posting.','history']
 ]:[
  ['Find work','Open Find jobs to search by keywords, category, budget, and distance from a location. Switch between the list and map.','browse'],
  ['Make an offer','Open a job to offer the listed price or a counteroffer, and select an available time or propose another.','browse'],
  ['Track your offers','Open My offers to see pending bids, accepted offers, completed work and declined or cancelled bids.','offers'],
  ['Respond and chat','Once a customer hires you, Messages opens for your booked job. Completed jobs keep past messages read-only.','inbox'],
  ['Manage assignments','After you are hired, your assignment appears in My Assignments. Open the job to review its schedule or request a change.','assignments'],
  ['View earnings and reviews','Settings → Analytics shows the value of completed and accepted jobs (not actual payments). Your public profile displays customer reviews.','analytics']
 ];
 const faq=customer?[
  ['Can I change an appointment?','Yes. Open Appointments, select the scheduled task, and request a new time. The worker must approve before the appointment changes.'],
  ['When does the worker see my address?','A hired worker can see the full task address. Browsing workers see only approximate map areas. Avoid posting a real private home address while testing.'],
  ['Does HomeTask charge my card?','No. This capstone version tracks agreed prices but does not process payments.']
 ]:[
  ['What does projected earnings mean?','It is the agreed value of accepted unfinished work, not guaranteed income. Earned refers to completed-job value, not verified payments.'],
  ['Can I counter the customer?','Submit a price and proposed time on the job. If a customer counters, you can accept or decline their terms.'],
  ['How does distance search work?','Enter a location and a distance, then press Search area. The radius is straight-line miles, not road distance.']
 ];
 return `<section class="page workspace-page help-page"><div class="page-title"><span class="kicker">SETTINGS / HELP</span><h1>${customer?'HomeTask':'Worker'} help center</h1><p>Walk through the HomeTask ${customer?'regular':'worker'} experience at your own pace. Switch workspaces from your profile menu to see the other guide.</p></div><div class="form-layout"><div class="panel"><h3>${customer?'From posting to completion':'From finding a job to getting hired'}</h3><div class="help-steps">${steps.map(([title,description,target],i)=>`<div class="help-step"><span class="help-step-num">${i+1}</span><div><h4>${e(title)}</h4><p>${e(description)}</p><button class="mini-btn" data-view="${e(target)}">Go to ${e(title.toLowerCase())} ${icon('arrow',14)}</button></div></div>`).join('')}</div></div><aside class="panel"><h3>Frequently asked questions</h3><div class="help-faq">${faq.map(([question,answer])=>`<details><summary>${e(question)}</summary><p>${e(answer)}</p></details>`).join('')}</div><div class="inline-note" style="margin-top:20px">Need something else? Try the Messages page to communicate about an existing job. HomeTask does not yet have a live support team.</div><button class="btn btn-secondary" data-view="settings" style="margin-top:18px">Back to settings</button></aside></div></section>`;
}

function analyticsPage(){
 if(!state.me)return signInPrompt();
 const posted=state.jobs.filter(mine),assigned=state.jobs.filter(j=>j.assigned_worker_id===state.me.id),received=posted.reduce((n,j)=>n+(j.offer_count||0),0);
 if(role()==='customer')return `<section class="page workspace-page"><div class="page-title"><span class="kicker">SETTINGS / ANALYTICS</span><h1>My activity</h1><p>Your all-time posting and hiring activity.</p></div>${statTiles([['Total tasks posted',posted.length,'file'],['Completed tasks',posted.filter(j=>j.status==='completed').length,'check'],['Current offers',received,'message'],['Total hired value',dollars(posted.filter(j=>j.accepted_price).reduce((n,j)=>n+j.accepted_price,0)),'wallet']])}<div class="panel"><button class="btn btn-secondary" data-view="history">View task history</button></div></section>`;
 return `<section class="page workspace-page"><div class="page-title"><span class="kicker">WORKER / ANALYTICS</span><h1>Earnings overview</h1><p>Track completed-job earnings and future value from accepted assignments. Projected earnings are estimates, not guaranteed payments.</p></div>
 <div class="analytics-toolbar"><label>Show <select class="control" id="earningsRange"><option value="period" ${state.earningsRange==='period'?'selected':''}>${{day:"Today",week:"This week",month:"This month",year:"This year"}[state.earningsGroup]}</option><option value="all" ${state.earningsRange==='all'?'selected':''}>All time</option><option value="7" ${state.earningsRange==='7'?'selected':''}>Last 7 days</option><option value="30" ${state.earningsRange==='30'?'selected':''}>Last 30 days</option><option value="90" ${state.earningsRange==='90'?'selected':''}>Last 90 days</option><option value="365" ${state.earningsRange==='365'?'selected':''}>Last year</option><option value="custom" ${state.earningsRange==='custom'?'selected':''}>Custom dates</option></select></label><label>Group by <select class="control" id="earningsGroup">${['day','week','month','year'].map(v=>`<option value="${v}" ${state.earningsGroup===v?'selected':''}>${v[0].toUpperCase()+v.slice(1)}</option>`).join('')}</select></label><div class="analytics-custom-dates" id="analyticsCustomDates" ${state.earningsRange!=='custom'?'hidden':''}><label>From <input type="date" class="control" id="earningsStart" value="${e(state.earningsStart)}" /></label><label>To <input type="date" class="control" id="earningsEnd" value="${e(state.earningsEnd)}" /></label><button class="btn btn-secondary" type="button" id="earningsApply">Apply dates</button></div></div>
 <div id="earningsContent"><div class="panel"><p>Loading earnings analytics...</p></div></div>
 <div class="inline-note" style="margin-top:20px">Net earnings estimates deduct the 10% HomeTask commission from the agreed offer. They are not proof that a customer paid or a worker received a bank transfer.</div></section>`;
}
function reviewJob(jobId){
 if(!state.me)return showAuth();
 const j=state.jobs.find(x=>x.id===jobId);
 if(!j||j.status!=='completed')return toast('Reviews are available for completed jobs.');
 const old=state.reviews.find(x=>x.job_id===jobId),deleted=state.deletedReviews.find(x=>x.job_id===jobId);
 if(old){modal(`${modalHead('Review submitted','YOUR REVIEW')}<div class="review-tile">${reviewStarRow(old.rating)}<p class="ht155-review-comment${old.comment?'':' is-empty'}">${e(old.comment||'Rating only')}</p>${old.photo_data?`<button class="review-photo-button" id="oldReviewPhoto"><img src="${e(old.photo_data)}" alt="Your review photo"/></button>`:''}<small>${e(old.job_title)} · ${e(old.recipient_name)}</small></div><div class="hero-actions"><button class="btn btn-secondary" id="deleteReview">Delete this review</button></div><div class="inline-note">Submitted reviews cannot be edited. Deleted reviews cannot be resubmitted for the same job.</div>`);if($('oldReviewPhoto'))$('oldReviewPhoto').onclick=()=>openPhotoLightbox(old.photo_data);$('deleteReview').onclick=async()=>{if(!confirm('Permanently delete your review? You will not be able to submit another review for this job.'))return;try{await api(`/reviews/${old.id}`,'DELETE');await refresh();closeModal();render();toast('Review deleted.')}catch(err){toast(err.message)}};return;}
 if(deleted)return toast('You already deleted your review for this job. Reviews cannot be resubmitted.');
 modal(`${modalHead('Review completed job','RATINGS & REVIEWS')}<p>Job: <strong>${e(j.title)}</strong></p><p class="mock-meta">Share your experience with ${mine(j)?e(j.assigned_worker_name||'the worker'):e(j.owner_name||'the customer')}.</p><form id="reviewForm"><div class="field"><label>Rating</label><select class="control" name="rating" required>${[5,4,3,2,1].map(n=>`<option value="${n}">${'★'.repeat(n)}${'☆'.repeat(5-n)}</option>`).join('')}</select></div><div class="field"><label>Review</label><textarea class="control" name="comment" maxlength="600" placeholder="Communication, punctuality, quality of work..."></textarea></div><div class="field"><label>Finished result photo (optional)</label><input class="control" type="file" name="review_photo" id="reviewPhotoInput" accept="image/*"/><small>Share the completed result. Only upload photos you have permission to post.</small><div id="reviewPhotoPreview" class="photo-gallery"></div></div><div class="hero-actions"><button class="btn btn-primary" type="submit">Submit review</button><button class="btn btn-secondary" type="button" id="finishWithoutReview">Finish without review</button></div></form>`);
 if($('finishWithoutReview'))$('finishWithoutReview').onclick=()=>{closeModal();toast('Task completed. You can leave a review later from task history.')};
 $('reviewPhotoInput').onchange=()=>{const file=$('reviewPhotoInput').files?.[0];$('reviewPhotoPreview').innerHTML=file?`<span class="tag">Selected: ${e(file.name)}</span>`:''};
 $('reviewForm').onsubmit=async ev=>{ev.preventDefault();const f=new FormData(ev.target);try{const photo=$('reviewPhotoInput').files?.[0];await api(`/jobs/${jobId}/reviews`,'POST',{rating:Number(f.get('rating')),comment:f.get('comment'),photo_data:photo?await compressJobPhoto(photo):''});await refresh();closeModal();render();toast('Review submitted.')}catch(err){toast(err.message)}};
}
async function loadOwnReviews(){
 try{const data=await api('/profile/reviews');const el=$('myReviewSummary');if(!el)return;el.innerHTML=`<div class="ht155-review-overview"><span class="ht155-overview-label">Your reputation</span>${ratingStars(data.rating,data.count)}</div>${data.reviews.length?data.reviews.slice(0,5).map(r=>`<div class="review-tile">${reviewStarRow(r.rating)}<p class="ht155-review-comment${r.comment?'':' is-empty'}">${e(r.comment||'Rating only')}</p>${r.photo_data?`<button class="review-photo-button" data-my-review-photo="${r.id}"><img class="review-thumb" src="${e(r.photo_data)}" alt="Review photo"/></button>`:''}<small>${e(r.author_name)} · ${e(r.job_title)}</small></div>`).join(''):'<p class="mock-meta">Completed jobs can be reviewed by the other participant.</p>'}`}catch(err){toast(err.message)}
}
async function removeOwnAvatar(){try{await api('/profile/avatar','PUT',{data:''});await refresh();render();toast('Profile picture removed.')}catch(err){toast(err.message)}}
// Direct manipulation editor: drag to position, wheel/pinch or +/- to zoom.
// Keep the existing image-framing API and image compression behavior intact.
function imageFramingEditorMarkup(url,isBanner,existing){
 const description=existing?'Drag the image to adjust its position. No need to upload it again.':'Drag to reposition the new image before saving.';
 return `<p class="mock-meta">${description}</p>
 <div class="ht-image-crop-tool">
   <div class="upload-frame-preview ${isBanner?'banner-upload-preview':'avatar-upload-preview'} ht-image-drag-preview" id="htImageDragArea" tabindex="0" role="group" aria-label="Image positioning area. Drag the photo to position it. Use arrow keys to move or plus and minus keys to zoom.">
     <img id="uploadFrameImage" src="${e(url)}" alt="${isBanner?'Banner':'Profile photo'} positioning preview" draggable="false" />
     <span class="ht-image-drag-label" aria-hidden="true">${icon('move',15)} Drag to reposition</span>
   </div>
   <div class="ht-image-crop-controls"><span>Scroll or pinch to zoom</span>
     <div class="ht-image-zoom-actions"><button class="mini-btn" type="button" id="htImageZoomOut" aria-label="Zoom out">−</button><span id="htImageZoomLevel" aria-live="polite">100%</span><button class="mini-btn" type="button" id="htImageZoomIn" aria-label="Zoom in">+</button><button class="mini-btn" type="button" id="htImageReset">Reset</button></div>
   </div>
 </div>`;
}
function attachImageFramingGestures(current){
 const area=$('htImageDragArea'),preview=$('uploadFrameImage'),zoomLabel=$('htImageZoomLevel');
 if(!area||!preview)return;
 const clamp=(v,min,max)=>Math.min(max,Math.max(min,v));
 const pointers=new Map();let lastPinchDistance=null;
 function draw(){
  preview.style.objectPosition=`${current.x}% ${current.y}%`;
  preview.style.transform=`scale(${current.zoom/100})`;
  if(zoomLabel)zoomLabel.textContent=`${Math.round(current.zoom)}%`;
 }
 function zoomBy(delta){current.zoom=clamp(Math.round(current.zoom+delta),100,220);draw()}
 area.addEventListener('pointerdown',event=>{
  if(event.button!==0&&event.pointerType==='mouse')return;
  pointers.set(event.pointerId,{x:event.clientX,y:event.clientY});
  area.setPointerCapture(event.pointerId);
  area.classList.add('is-dragging');
 });
 area.addEventListener('pointermove',event=>{
  const previous=pointers.get(event.pointerId);if(!previous)return;
  pointers.set(event.pointerId,{x:event.clientX,y:event.clientY});
  if(pointers.size===2){
   const [a,b]=[...pointers.values()];const d=Math.hypot(a.x-b.x,a.y-b.y);
   if(lastPinchDistance!==null)zoomBy((d-lastPinchDistance)*.45);
   lastPinchDistance=d;return;
  }
  lastPinchDistance=null;
  const rect=area.getBoundingClientRect();
  current.x=clamp(current.x-(event.clientX-previous.x)*100/Math.max(rect.width,1),0,100);
  current.y=clamp(current.y-(event.clientY-previous.y)*100/Math.max(rect.height,1),0,100);
  draw();
 });
 const release=event=>{pointers.delete(event.pointerId);lastPinchDistance=null;if(!pointers.size)area.classList.remove('is-dragging');};
 area.addEventListener('pointerup',release);
 area.addEventListener('pointercancel',release);
 area.addEventListener('lostpointercapture',release);
 area.addEventListener('wheel',event=>{event.preventDefault();zoomBy(event.deltaY<0?8:-8)},{passive:false});
 area.addEventListener('keydown',event=>{
  const step=event.shiftKey?10:3;
  if(event.key==='ArrowLeft')current.x=clamp(current.x-step,0,100);
  else if(event.key==='ArrowRight')current.x=clamp(current.x+step,0,100);
  else if(event.key==='ArrowUp')current.y=clamp(current.y-step,0,100);
  else if(event.key==='ArrowDown')current.y=clamp(current.y+step,0,100);
  else if(event.key==='+'||event.key==='=')zoomBy(8);
  else if(event.key==='-')zoomBy(-8);
  else return;
  event.preventDefault();draw();
 });
 $('htImageZoomOut').onclick=()=>zoomBy(-10);
 $('htImageZoomIn').onclick=()=>zoomBy(10);
 $('htImageReset').onclick=()=>{current.x=50;current.y=50;current.zoom=100;draw()};
 draw();
}
async function showExistingImageEditor(kind){
 if(!state.me)return;
 const isBanner=kind==='banner',url=isBanner?state.me.banner_data:state.me.avatar_data;
 if(!url){toast('Upload a photo first to adjust it.');return;}
 const prefix=isBanner?'banner':'avatar';
 const current={x:framingValue(prefix+'_x'),y:framingValue(prefix+'_y'),zoom:framingValue(prefix+'_zoom')};
 modal(`${modalHead(isBanner?'Adjust your current banner':'Adjust your current profile photo','POSITION YOUR PHOTO')}${imageFramingEditorMarkup(url,isBanner,true)}<div class="hero-actions"><button type="button" class="btn btn-primary" id="saveFramedImage">Save adjustments</button><button type="button" class="btn btn-secondary" id="cancelFramedImage">Cancel</button></div>`);
 attachImageFramingGestures(current);
 $('cancelFramedImage').onclick=closeModal;
 $('saveFramedImage').onclick=async()=>{
  const button=$('saveFramedImage');button.disabled=true;button.textContent='Saving…';
  try{const settings={...state.imageFraming,[prefix+'_x']:current.x,[prefix+'_y']:current.y,[prefix+'_zoom']:current.zoom};await api('/profile/image-framing','PUT',settings);state.imageFraming=settings;if(state.publicProfile&&Number(state.publicProfile.id)===Number(state.me.id))state.publicProfile.image_framing={...settings};closeModal();await refresh();render();toast('Image framing saved.');}
  catch(err){button.disabled=false;button.textContent='Save adjustments';toast(err.message);}
 };
}
async function showImageUploadEditor(file,kind){
 const isBanner=kind==='banner';const max=isBanner?8000000:5000000;
 if(!['image/png','image/jpeg','image/webp'].includes(file.type)||file.size>max){toast(`Choose a JPG, PNG or WebP image under ${max/1000000} MB.`);return;}
 const url=URL.createObjectURL(file),current={x:50,y:50,zoom:100};
 modal(`${modalHead(isBanner?'Position your profile banner':'Position your profile photo','POSITION YOUR PHOTO')}${imageFramingEditorMarkup(url,isBanner,false)}<div class="hero-actions"><button type="button" class="btn btn-primary" id="saveFramedImage">Save ${isBanner?'banner':'profile photo'}</button><button type="button" class="btn btn-secondary" id="cancelFramedImage">Cancel</button></div>`);
 let disposed=false;const dispose=()=>{if(!disposed){disposed=true;URL.revokeObjectURL(url)}};
 attachImageFramingGestures(current);
 $('cancelFramedImage').onclick=()=>{dispose();closeModal()};
 $('saveFramedImage').onclick=async()=>{const button=$('saveFramedImage');button.disabled=true;button.textContent='Saving…';try{
  let data;
  if(isBanner)data=await compressJobPhoto(file);
  else{const image=new Image();await new Promise((resolve,reject)=>{image.onload=resolve;image.onerror=reject;image.src=url});const canvas=document.createElement('canvas');const scale=Math.min(1,600/Math.max(image.width,image.height));canvas.width=Math.max(1,Math.round(image.width*scale));canvas.height=Math.max(1,Math.round(image.height*scale));canvas.getContext('2d').drawImage(image,0,0,canvas.width,canvas.height);data=canvas.toDataURL('image/jpeg',.78)}
  const prefix=isBanner?'banner':'avatar';await api(`/profile/${prefix}`,'PUT',{data});const settings={...state.imageFraming,[prefix+'_x']:current.x,[prefix+'_y']:current.y,[prefix+'_zoom']:current.zoom};await api('/profile/image-framing','PUT',settings);state.imageFraming=settings;if(state.publicProfile&&Number(state.publicProfile.id)===Number(state.me.id)){state.publicProfile.image_framing={...settings};state.publicProfile.avatar_data=isBanner?state.publicProfile.avatar_data:data;state.publicProfile.banner_data=isBanner?data:state.publicProfile.banner_data;}
  dispose();closeModal();await refresh();render();toast(isBanner?'Banner saved with your selected framing.':'Profile photo saved with your selected framing.');
 }catch(err){button.disabled=false;button.textContent='Try saving again';toast(err.message)}};
 const observer=new MutationObserver(()=>{if(!$('saveFramedImage')){dispose();observer.disconnect()}});observer.observe($('modalRoot'),{childList:true});
}
async function uploadAvatar(ev){const file=ev.target.files?.[0];if(file)await showImageUploadEditor(file,'avatar');}
async function uploadBanner(ev){const file=ev.target.files?.[0];if(file)await showImageUploadEditor(file,'banner');}
async function removeBanner(){try{await api('/profile/banner','PUT',{data:''});await refresh();render();toast('Profile banner removed.')}catch(err){toast(err.message)}}
// HomeTask 15.13.45: retire the legacy weekly schedule navigation from the static shell.
// Keep the booking conflict-check API used by actual assignment scheduling.
function removeRetiredWeeklyAvailabilityLinks(){
 const menu=document.getElementById('profileMenu');
 if(menu){
  menu.querySelectorAll('[data-profile-link="worker-availability"], [data-view="worker-availability"], a[href*="worker-availability"]').forEach(el=>el.remove());
  menu.querySelectorAll('button,a,[role="menuitem"]').forEach(el=>{
   if(/^weekly\s+availability$/i.test((el.textContent||'').trim()))el.remove();
  });
 }
 // In case an older shell includes this shortcut in a separate account/settings menu.
 document.querySelectorAll('button[data-view="worker-availability"],a[href="#worker-availability"],a[href*="worker-availability/me"]').forEach(el=>el.remove());
}
function showProfileDropdown(){removeRetiredWeeklyAvailabilityLinks();const el=$('profileMenu');if(!el)return;el.hidden=!state.me;}
// v15.13.55 — Small branded workspace transition. The overlay covers the
// real network update; it never changes account permissions or adds a fake wait.
let ht1555SwitchInProgress=false;
function ht1555TransitionStart(next){
 const reduced=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
 const overlay=document.createElement('div');
 overlay.className='ht1555-transition';
 overlay.setAttribute('role','status');
 overlay.setAttribute('aria-live','polite');
 overlay.setAttribute('aria-label','Switching workspace');
 const title=next==='worker'?'HomeTasker':'HomeTask';
 overlay.innerHTML=`<div class="ht1555-transition-panel"><span class="ht1555-transition-symbol" aria-hidden="true">${icon('house',28)}</span><span class="ht1555-transition-label">SWITCHING WORKSPACE</span><strong class="ht1555-transition-title">${title}</strong><span class="ht1555-transition-progress" aria-hidden="true"></span></div>`;
 document.body.appendChild(overlay);
 if(!reduced)requestAnimationFrame(()=>overlay.classList.add('is-visible'));
 else overlay.classList.add('is-visible');
 return {overlay,reduced,started:performance.now()};
}
function ht1555TransitionFinish(transition){
 if(!transition)return;
 const {overlay,reduced}=transition;
 // Use the actual header logo after the new workspace has rendered.
 const logo=document.querySelector('.topbar .brand img');
 const title=overlay.querySelector('.ht1555-transition-title');
 if(logo && title){
  const cloned=logo.cloneNode(false);
  cloned.removeAttribute('class');
  cloned.className='ht1555-transition-logo';
  cloned.alt=title.textContent||'HomeTask';
  title.replaceWith(cloned);
 }
 overlay.classList.add('is-leaving');
 window.setTimeout(()=>overlay.remove(),reduced?0:230);
}
async function switchWorkspace(next){
 if(!state.me)return showAuth();
 if(ht1555SwitchInProgress || !['customer','worker'].includes(next) || next===role())return;
 ht1555SwitchInProgress=true;
 const transition=ht1555TransitionStart(next);
 try{
  const result=await api('/profile','PUT',{name:state.me.name,role:next,bio:state.me.bio||'',skills:state.me.skills||'',location:state.me.location||''});
  state.me=result.user;
  state.activeConversation=null;state.chatMessages=[];state.jobFilter='all';state.appointmentFilter='all';state.offerFilter='current';state.conversationFilter='all';welcomePhraseIndex=0;
  await refresh();
  nav('home');
 }catch(err){toast(err.message)}
 finally{
  // Give the branded transition time to register even on a very fast local server.
  // Reduced-motion users skip the artificial hold entirely.
  const visibleFor=performance.now()-transition.started;
  if(!transition.reduced&&visibleFor<850)await new Promise(resolve=>setTimeout(resolve,850-visibleFor));
  ht1555TransitionFinish(transition);
  ht1555SwitchInProgress=false;
 }
}
function bindProfileDropdown(){
 const shell=$('profileShell'),menu=$('profileMenu'),trigger=$('profileButton');if(!shell||!menu||!trigger)return;
 removeRetiredWeeklyAvailabilityLinks();
 trigger.onclick=()=>{if(!state.me)return showAuth();menu.hidden=!menu.hidden;trigger.setAttribute('aria-expanded',String(!menu.hidden))};
 shell.onmouseenter=()=>{if(window.matchMedia('(hover: hover) and (min-width: 901px)').matches&&state.me){menu.hidden=false;trigger.setAttribute('aria-expanded','true')}};
 shell.onmouseleave=()=>{menu.hidden=true;trigger.setAttribute('aria-expanded','false')};
 menu.querySelectorAll('[data-profile-link]').forEach(b=>b.onclick=()=>{menu.hidden=true;nav(b.dataset.profileLink)});
 menu.querySelectorAll('[data-switch-role]').forEach(b=>b.onclick=()=>{menu.hidden=true;switchWorkspace(b.dataset.switchRole)});
 document.addEventListener('click',ev=>{if(!shell.contains(ev.target)){menu.hidden=true;trigger.setAttribute('aria-expanded','false')}});
}

// HomeTask 14.0: responsive navigation. The same pages and backend power both layouts.
const mobileNavOptions={
 customer:[['home','Home','house'],['dashboard','My jobs','briefcase'],['post','Post','wrench'],['inbox','Messages','message'],['profile','Profile','user']],
 worker:[['home','Home','house'],['browse','Find jobs','search'],['assignments','Assignments','briefcase'],['inbox','Messages','message'],['profile','Profile','user']],
 guest:[['home','Home','house'],['browse','Explore','search'],['login','Sign in','user']]
};
function renderMobileNavigation(){
 const mode=activeWorkspace(),items=mobileNavOptions[mode]||mobileNavOptions.guest;
 let bar=$('mobileBottomNav');if(!bar){bar=document.createElement('nav');bar.id='mobileBottomNav';bar.className='mobile-bottom-nav';bar.setAttribute('aria-label','Mobile primary navigation');$('app').after(bar)}
 bar.classList.toggle('guest-nav',mode==='guest');
 const active=v=>state.view===v||(v==='dashboard'&&state.view==='current-offers');
 bar.innerHTML=items.map(([v,label,ico])=>`<button type="button" data-mobile-tab="${v}" class="mobile-bottom-item ${active(v)?'active':''} ${v==='post'?'mobile-post-tab':''}" ${active(v)?'aria-current="page"':''} aria-label="${e(label)}">${icon(ico,21)}<span>${e(label)}</span></button>`).join('');
 bar.querySelectorAll('[data-mobile-tab]').forEach(b=>b.onclick=()=>{const v=b.dataset.mobileTab;if(v==='login')showAuth();else if(v==='logout')logoutHomeTask();else if(v==='post')customerAction();else nav(v)});
 renderMobileMenu();
}
function mobileMenuItems(){
 const shared=[['profile','My profile','user'],['settings','Account settings','settings'],['account-security','Security','shield'],['history',role()==='customer'?'Task history':'Job history','history'],['my-reviews','My reviews','star'],['help','Help & safety','shield'],['logout','Log out','arrow']];
 if(!state.me)return [['home','Home','house'],['browse','Explore jobs','search'],['login','Sign in / Join','user']];
 const worker=role()==='worker';
 const items=worker?[['home','HomeTasker overview','house'],['browse','Find jobs','search'],['saved-jobs','Saved jobs','bookmark'],['offers','My offers','file'],['assignments','My assignments','briefcase'],['analytics','Earnings & insights','chart'],['worker-preferences','Job preferences','settings'],['previous-work','Previous Work','image'],['verification',state.me?.profile_verified?'Profile reviewed':'Get profile reviewed','shield'],['inbox','Messages','message']]:[['home','HomeTask home','house'],['dashboard','My tasks','briefcase'],['post','Post a task','wrench'],['appointments','Appointments','calendar'],['current-offers','Current offers','file'],['following','Following','user'],['inbox','Messages','message']];
 return [...items,...shared,['payment-readiness','Payment information','wallet'],...(state.me.is_admin?[['admin','Admin Dashboard','shield']]:[])];
}
function renderMobileMenu(){
 const trigger=$('mobileMenuButton');
 let overlay=$('mobileMenuOverlay');if(!overlay){
  overlay=document.createElement('div');overlay.id='mobileMenuOverlay';overlay.className='mobile-menu-overlay';overlay.hidden=true;
  overlay.innerHTML='<div class="mobile-menu-scrim" data-close-mobile-menu></div><aside class="mobile-menu-sheet" role="dialog" aria-modal="true" aria-label="Navigation"><div class="mobile-menu-heading"><div><strong>HomeTask</strong><span>Quick navigation</span></div><button type="button" class="mobile-menu-close" data-close-mobile-menu aria-label="Close menu">×</button></div><div id="mobileMenuContent"></div></aside>';
  document.body.appendChild(overlay);
  overlay.querySelectorAll('[data-close-mobile-menu]').forEach(b=>b.onclick=closeMobileMenu);
 }
 const mode=activeWorkspace(),label=mode==='worker'?'HomeTasker':'HomeTask';
 const content=$('mobileMenuContent');if(!content)return;
 content.innerHTML=`<span class="mobile-sheet-kicker">${e(label)}</span><div class="mobile-sheet-links">${mobileMenuItems().map(([view,title,ico])=>`<button type="button" data-mobile-view="${view}" class="${state.view===view?'selected':''}">${icon(ico,19)}<span>${e(title)}</span>${state.view===view?icon('check',16):''}</button>`).join('')}</div>${state.me?`<div class="mobile-switch-box"><span class="mobile-sheet-kicker">Switch workspace</span><div class="mobile-switch-row"><button type="button" class="${mode==='customer'?'selected':''}" data-mobile-role="customer">HomeTask</button><button type="button" class="${mode==='worker'?'selected':''}" data-mobile-role="worker">HomeTasker</button></div></div>`:''}`;
 content.querySelectorAll('[data-mobile-view]').forEach(b=>b.onclick=()=>{const v=b.dataset.mobileView;closeMobileMenu();if(v==='login')showAuth();else if(v==='logout')logoutHomeTask();else if(v==='post')customerAction();else nav(v)});
 content.querySelectorAll('[data-mobile-role]').forEach(b=>b.onclick=()=>{const role=b.dataset.mobileRole;closeMobileMenu();if(role!==activeWorkspace())switchWorkspace(role)});
 if(trigger&&!trigger.dataset.mobileWired){trigger.onclick=()=>{if(!state.me&&state.view==='home'){/* Allow discovery navigation before sign-in. */}overlay.hidden=false;document.body.classList.add('mobile-menu-open');trigger.setAttribute('aria-expanded','true');overlay.querySelector('.mobile-menu-close')?.focus()};trigger.dataset.mobileWired='true'}
}
function closeMobileMap(){document.body.classList.remove('mobile-map-fullscreen');$('mapPanel')?.classList.remove('mobile-map-expanded');}
function closeMobileMenu(){const overlay=$('mobileMenuOverlay');if(overlay)overlay.hidden=true;document.body.classList.remove('mobile-menu-open');$('mobileMenuButton')?.setAttribute('aria-expanded','false')}
function restoreBrowseInputs(){const f=state.browseFilters||{};for(const [id,key] of [['searchInput','query'],['categoryFilter','category']]){const el=$(id);if(el)el.value=f[key]||''}if($('mobileJobSearch'))$('mobileJobSearch').value=f.query||''}
function bindMobileBrowse(){
 const button=$('mobileFiltersButton'),search=$('mobileJobSearch'),panel=$('mobileFiltersPanel'),page=document.querySelector('.browse-page');const expand=$('mobileMapExpand');if(expand)expand.onclick=()=>{const target=$('mapPanel');if(!target)return;const expanded=target.classList.toggle('mobile-map-expanded');document.body.classList.toggle('mobile-map-fullscreen',expanded);expand.textContent=expanded?'Close full map':'Expand map';expand.setAttribute('aria-pressed',String(expanded));setTimeout(()=>window.jobMap?.invalidateSize?.(),100)};
 if(button&&page){button.setAttribute('aria-expanded',String(!!state.mobileFiltersOpen));button.onclick=()=>{state.mobileFiltersOpen=!state.mobileFiltersOpen;page.classList.toggle('mobile-filters-open',state.mobileFiltersOpen);button.setAttribute('aria-expanded',String(state.mobileFiltersOpen));if(state.mobileFiltersOpen)panel?.scrollIntoView({block:'nearest',behavior:'smooth'})}}
 if(search)search.oninput=()=>{const full=$('searchInput');if(full)full.value=search.value;filterJobs()};
}
function setupMobileJobWizard(){
 const form=$('postJobForm');if(!form||form.dataset.mobileWizardReady)return;
 form.dataset.mobileWizardReady='true';
 const fields=[...form.querySelectorAll('.field-grid > .field')];
 fields.forEach((field,i)=>field.dataset.mobileStep=i<=4?'0':'1');
 const schedule=[...form.children].filter(x=>x.classList?.contains('schedule-section'));
 schedule.forEach(el=>el.classList.add('mobile-post-schedule'));
 const steps=[['Describe the job','Tell workers what needs to be done'],['Location & budget','Set the job site, deadline and price'],['Timing & publish','Add a time if needed, then publish']];
 const progress=document.createElement('div');progress.className='mobile-post-progress';progress.innerHTML='<div class="mobile-post-counter"></div><div class="mobile-post-tracker"><span></span><span></span><span></span></div><h2 class="mobile-post-title"></h2><p class="mobile-post-description"></p>';
 form.prepend(progress);
 const controls=document.createElement('div');controls.className='mobile-wizard-controls';controls.innerHTML='<button type="button" id="mobilePostBack" class="btn btn-secondary">Back</button><button type="button" id="mobilePostNext" class="btn btn-primary">Continue →</button>';
 form.appendChild(controls);
 let step=0;
 function setStep(i){step=Math.max(0,Math.min(2,i));form.dataset.mobilePostStep=String(step);progress.querySelector('.mobile-post-counter').textContent=`STEP ${step+1} OF 3`;progress.querySelector('.mobile-post-title').textContent=steps[step][0];progress.querySelector('.mobile-post-description').textContent=steps[step][1];progress.querySelectorAll('.mobile-post-tracker span').forEach((s,j)=>s.classList.toggle('done',j<=step));$('mobilePostBack').hidden=step===0;$('mobilePostNext').hidden=step===2;const actions=form.querySelector('.hero-actions');if(actions)actions.classList.toggle('mobile-wizard-final',step===2);if(window.innerWidth<=760)form.scrollIntoView({block:'start',behavior:'smooth'})}
 function next(){
  if(step===2)return;
  if(window.innerWidth<=760){const current=fields.filter(x=>x.dataset.mobileStep===String(step));for(const field of current)for(const el of field.querySelectorAll('input,textarea,select')){if(el.required&&!el.checkValidity()){el.reportValidity();return;}}
   if(step===1){const lat=form.elements.latitude?.value,lon=form.elements.longitude?.value;if(lat===''||lon===''){toast('Choose a suggested address to place the job area on the map.');$('addressInput')?.focus();return;}}
  }
  setStep(step+1);
 }
 $('mobilePostNext').onclick=next;$('mobilePostBack').onclick=()=>setStep(step-1);
 form.addEventListener('submit',ev=>{if(window.innerWidth<=760&&step<2){ev.preventDefault();ev.stopImmediatePropagation();next()}},true);
 setStep(0);
}

async function logoutHomeTask(){try{await api('/logout','POST');state.me=null;state.personalGeo=null;state.nearbyCenter=null;state.nearbyLabel='';ht1543AutoLocationRequested=false;ht1543UserPickedLocation=false;resetNotificationsForAccount();await refresh();nav('home');toast('Logged out.')}catch(err){toast(err.message)}}

// 14.4.5: verify a Stripe Checkout return on the SERVER before showing success.
// A URL parameter alone never marks a worker hired.
async function handleStripeCheckoutReturn(){
 const params=new URLSearchParams(window.location.search);
 const checkout=params.get('checkout');
 if(!checkout)return;
 const session=params.get('session_id');
 history.replaceState(null,'',window.location.pathname+window.location.hash);
 if(checkout==='cancelled'){
  toast('Stripe checkout was cancelled. No worker has been hired.');
  return;
 }
 if(checkout!=='success'||!session)return;
 if(!state.me){
  modal(`${modalHead('Sign in to confirm your booking','STRIPE CHECKOUT')}<p>Stripe checkout has returned to HomeTask. Log in as the customer to check that the payment was confirmed.</p><div class="hero-actions"><button class="btn btn-primary" id="checkoutSignIn">Sign in</button></div>`);
  $('checkoutSignIn').onclick=showAuth;
  return;
 }
 modal(`${modalHead('Verifying your payment','STRIPE TEST CHECKOUT')}<p class="mock-meta" id="checkoutVerificationText" role="status" aria-live="polite">Checking Stripe payment and confirming the worker assignment…</p><div class="hero-actions"><button class="btn btn-secondary" id="checkoutPendingDashboard">View my tasks</button></div>`);
 $('checkoutPendingDashboard').onclick=()=>nav('dashboard');
 for(let attempt=0;attempt<8;attempt++){
  try{
   const result=await api('/payments/checkout-confirm/'+encodeURIComponent(session),'POST');
   if(result.confirmed){
    await refresh();nav('dashboard');
    modal(`${modalHead('Payment complete!','BOOKING CONFIRMED')}<div class="ht-hire-success-icon">${icon('check',32)}</div><h3>Your worker has been hired!</h3><p>${result.worker_name?`<strong>${e(result.worker_name)}</strong> has been assigned to your task.`:'The worker has been assigned to your task.'} You can now view the booking and message your worker.</p><div class="inline-note">Stripe sandbox payment confirmed. No real money was charged. Worker bank payouts are not enabled.</div><div class="hero-actions"><button class="btn btn-primary" id="viewHiredTask">View booked task</button><button class="btn btn-secondary" id="closeHireSuccess">Go to dashboard</button></div>`);
    $('viewHiredTask').onclick=async()=>{closeModal();await openJob(result.job_id)};
    $('closeHireSuccess').onclick=()=>{closeModal();nav('dashboard')};
    return;
   }
   if(result.payment_status!=='pending'&&result.payment_status!=='checkout_pending'){
    $('checkoutVerificationText').textContent='This checkout has not been confirmed. No worker has been hired. Status: '+result.payment_status;
    return;
   }
  }catch(err){
   // A webhook can still complete the hire while the browser has a network issue.
   if(attempt===7){$('checkoutVerificationText').textContent='HomeTask could not verify the payment: '+err.message+'. Please check Payments & fees before trying to pay again.';return;}
  }
  await new Promise(resolve=>setTimeout(resolve,1600));
 }
 if($('checkoutVerificationText'))$('checkoutVerificationText').textContent='Still waiting for Stripe confirmation. Check Payments & fees or return to your dashboard. Do not pay twice.';
}

async function start(){await refresh();render();handleStripeCheckoutReturn();if(state.me)await pollNotifications(true);notificationState.poller=setInterval(()=>{pollNotifications(true);refreshCurrentChat()},12000);setInterval(rotateWelcomeHeadline,12000);$('notificationBell').onclick=showNotificationCenter;bindProfileDropdown();$('app').addEventListener('click',ev=>{if(ev.target.id==='heroPost')customerAction();if(ev.target.id==='dashboardPrimary')role()==='worker'?nav('browse'):customerAction();if(ev.target.id==='logoutButton')logoutHomeTask()});document.addEventListener('pointerdown',ev=>{
 const menu=$('profileMoreMenu');
 if(menu&&!menu.hidden&&!ev.target.closest('.profile-more'))closeProfileMoreMenu();
 });
 document.addEventListener('keydown',ev=>{if(ev.key==='Escape'){
 closeProfileMoreMenu();closeMobileMenu();document.querySelector('.photo-lightbox')?.remove();closeModal();
 }})}
start();



// --- Version 10: photo attachments ---
async function compressJobPhoto(file){
 if(!String(file.type||'').startsWith('image/')||file.size>8000000)throw Error('Choose an image under 8 MB (JPG, PNG or a camera photo).');
 const url=URL.createObjectURL(file);const img=new Image();
 try{
  await new Promise((ok,bad)=>{img.onload=ok;img.onerror=()=>bad(Error('This image format could not be opened. Please convert it to JPG or PNG.'));img.src=url});
  let size=1000;
  for(let pass=0;pass<4;pass++){
   const c=document.createElement('canvas');const ratio=Math.min(1,size/Math.max(img.width,img.height));c.width=Math.round(img.width*ratio)||1;c.height=Math.round(img.height*ratio)||1;
   c.getContext('2d').drawImage(img,0,0,c.width,c.height);
   const data=c.toDataURL('image/jpeg',Math.max(.45,.76-pass*.09));
   if(data.length<385000)return data;
   size=Math.round(size*.7);
  }
  throw Error('Image is too large even after compression.');
 }finally{URL.revokeObjectURL(url)}
}
async function loadJobPhotos(jobId,elementId){
 try{const result=await api(`/jobs/${jobId}/photos`);if(editedJob?.id!==jobId||!$('photoDraftPreviews'))return;
  jobExistingPhotos=result.photos||[];
  // Preserve the selected main image as first on the initial edit view.
  if(!jobPhotoOrder.length&&editedJob?.main_photo_id){jobExistingPhotos.sort((a,b)=>(a.id===editedJob.main_photo_id?-1:0)-(b.id===editedJob.main_photo_id?-1:0))}
  drawOrderedJobPhotos();
 }catch(err){toast(err.message)}
}
// --- Customer/worker negotiation ---
async function showCustomerCounter(jobId,offerId){
 try{const j=await api(`/jobs/${jobId}`),offer=j.offers.find(o=>o.id===offerId);if(!offer)return;
  modal(`<div class="ht1531-counteroffer"><div class="ht1531-counter-top"><span class="kicker">PRICE NEGOTIATION</span><button type="button" class="ht1531-counter-close" data-dismiss aria-label="Close counteroffer">×</button></div><h2>Make a counteroffer</h2><p class="ht1531-counter-sub">Send a revised price to <strong>${e(offer.worker_name)}</strong>.</p><div class="ht1531-counter-prices"><div><span>Worker's offer</span><strong>${dollars(offer.price)}</strong></div><div class="ht1531-counter-accent"><span>Your counteroffer</span><strong id="ht1531CounterPreview">${dollars(j.budget)}</strong></div></div><p class="ht1531-counter-budget">Original task budget <strong>${dollars(j.budget)}</strong></p><form id="customerCounterForm"><div class="field"><label for="ht1531CounterPrice">Proposed price ($)</label><input id="ht1531CounterPrice" class="control" name="price" type="number" min="1" max="1000000" step="0.01" value="${j.budget}" required/></div><div class="field"><label for="ht1531CounterNote">Message <span class="ht1531-optional">(optional)</span></label><textarea id="ht1531CounterNote" class="control" name="note" maxlength="400" rows="2" placeholder="Add a short message for the worker..."></textarea></div><div class="ht1531-counter-total" aria-live="polite"><span>Estimated total with 5% service fee</span><strong id="ht1531CounterTotal">${dollars(Number(j.budget||0)*1.05)}</strong></div><div class="ht1531-counter-footer"><button class="btn btn-secondary" type="button" data-dismiss>Cancel</button><button class="btn btn-primary" type="submit">Send counteroffer</button></div></form></div>`);
  const counterPrice=$('ht1531CounterPrice');if(counterPrice)counterPrice.addEventListener('input',()=>{const value=Math.max(0,Number(counterPrice.value)||0);const preview=$('ht1531CounterPreview'),total=$('ht1531CounterTotal');if(preview)preview.textContent=dollars(value);if(total)total.textContent=dollars(value*1.05);});
  document.querySelectorAll('#modalRoot [data-dismiss]').forEach(el=>el.onclick=closeModal);
  $('customerCounterForm').onsubmit=async ev=>{ev.preventDefault();const d=new FormData(ev.target);try{await api(`/jobs/${jobId}/offers/${offerId}/counter`,'POST',{price:Number(d.get('price')),note:d.get('note')});await refresh();await openJob(jobId,'worker');toast('Counteroffer sent to worker.')}catch(err){toast(err.message)}};
 }catch(err){toast(err.message)}
}
async function respondCustomerCounter(jobId,accept){try{await api(`/jobs/${jobId}/offers/mine/respond-counter?accept=${accept}`,'POST');await refresh();closeModal();render();toast(accept?'Counteroffer accepted.':'Counteroffer declined. Your original offer is pending.')}catch(err){toast(err.message)}}

// --- Interactive messenger ---
async function loadConversations(){
 if(!state.me)return;
 try{state.conversations=(await api('/conversations')).conversations||[];
  if(state.activeConversation){const found=state.conversations.find(c=>c.job_id===state.activeConversation.job_id&&c.partner_id===state.activeConversation.partner_id);if(found)state.activeConversation=found;}
  if(state.view==='inbox')render();
 }catch(err){toast(err.message)}
}
async function openChatConversation(c){
 state.activeConversation=c;try{state.chatMessages=(await api(`/jobs/${c.job_id}/messages/${c.partner_id}`)).messages||[];state.conversations.forEach(x=>{if(x.job_id===c.job_id&&x.partner_id===c.partner_id)x.unread=0});render();scrollChatBottom()}catch(err){toast(err.message)}
}
function scrollChatBottom(){const el=$('chatMessages');if(el)el.scrollTop=el.scrollHeight;}
async function deleteConversation(jobId,partnerId){
 if(!confirm('Remove this conversation from your inbox? This only deletes your copy.'))return;
 try{await api(`/jobs/${jobId}/conversations/${partnerId}`,'DELETE');
 if(state.activeConversation?.job_id===jobId&&state.activeConversation?.partner_id===partnerId){state.activeConversation=null;state.chatMessages=[];}
 await loadConversations();toast('Conversation removed from your inbox.');}catch(err){toast(err.message)}
}
async function deleteMessage(id){
 if(!confirm('Delete this message from your view? The other person will still have it.'))return;
 try{await api(`/messages/${id}`,'DELETE');const c=state.activeConversation;if(c){state.chatMessages=(await api(`/jobs/${c.job_id}/messages/${c.partner_id}`)).messages||[];}await loadConversations();toast('Message removed from your view.');}catch(err){toast(err.message)}
}
function bindChatInterface(){
 document.querySelectorAll('[data-chat]').forEach(x=>{x.onclick=ev=>{if(ev.target.closest('[data-delete-chat]'))return;const [j,p]=x.dataset.chat.split(':').map(Number);const c=state.conversations.find(c=>c.job_id===j&&c.partner_id===p);if(c)openChatConversation(c)};x.onkeydown=ev=>{if(ev.key==='Enter'&&ev.target===x)x.click()}});
 document.querySelectorAll('[data-delete-chat]').forEach(x=>x.onclick=ev=>{ev.stopPropagation();const [j,p]=x.dataset.deleteChat.split(':').map(Number);deleteConversation(j,p)});
 document.querySelectorAll('[data-delete-message]').forEach(x=>x.onclick=()=>deleteMessage(Number(x.dataset.deleteMessage)));
 if($('deleteActiveChat'))$('deleteActiveChat').onclick=()=>{const c=state.activeConversation;if(c)deleteConversation(c.job_id,c.partner_id)};
 const form=$('chatComposer');if(form)form.onsubmit=async ev=>{ev.preventDefault();const c=state.activeConversation,fd=new FormData(form),body=String(fd.get('body')||'').trim();if(!body)return;if(!c?.can_message)return toast('This conversation is read-only.');
  try{await api(`/jobs/${c.job_id}/messages/${c.partner_id}`,'POST',{body});state.chatMessages=(await api(`/jobs/${c.job_id}/messages/${c.partner_id}`)).messages||[];await loadConversations();scrollChatBottom()}catch(err){toast(err.message)};
 };
 document.querySelectorAll('[data-conversation-filter]').forEach(el=>el.onclick=()=>{state.conversationFilter=el.dataset.conversationFilter;render()});
 if($('backChats'))$('backChats').onclick=()=>{state.activeConversation=null;state.chatMessages=[];render()};
 if($('chatPerson'))$('chatPerson').onclick=()=>openPublicProfile(state.activeConversation.partner_id);
}
// Keep the text chain current while the messages page is open (and update read receipts).
async function refreshCurrentChat(){if(state.view!=='inbox'||!state.activeConversation||!state.me)return;
 const c=state.activeConversation;try{const msgs=(await api(`/jobs/${c.job_id}/messages/${c.partner_id}`)).messages||[];
 const live=state.jobs.find(j=>j.id===c.job_id);
 if(live&&live.status!==c.status){await loadConversations();return;}
 if(JSON.stringify(msgs)!==JSON.stringify(state.chatMessages)){state.chatMessages=msgs;render();scrollChatBottom()}}
 catch{}
}

// --- Reviews, one per job, no editing ---
function reviewButtonText(jobId){if(state.reviews.find(r=>r.job_id===jobId))return 'Review submitted';if(state.deletedReviews.find(r=>r.job_id===jobId))return 'Review deleted';return 'Leave review'}
function myReviewsPage(){if(!state.me)return signInPrompt();
 return `<section class="page workspace-page"><div class="page-title"><span class="kicker">SETTINGS / REVIEWS</span><h1>My reviews</h1><p>Reviews you've written about completed jobs. You can delete a review, but you cannot edit or resubmit it.</p></div><div class="panel"><div class="stack">${state.reviews.length?state.reviews.map(r=>`<div class="dashboard-job"><div class="dashboard-job-head"><div><strong>${e(r.job_title)}</strong><p class="mock-meta">For ${role()==='customer'?`<button class="text-link" type="button" data-person="${r.recipient_id}" title="View worker profile">${e(r.recipient_name)}</button>`:e(r.recipient_name)} · ${date(r.created_at)}</p></div>${reviewStarRow(r.rating)}</div><p>${e(r.comment||'No written comment')}</p>${r.photo_data?`<button class="review-photo-button" data-my-review-photo="${r.id}"><img class="review-thumb" src="${e(r.photo_data)}" alt="Review photo"/></button>`:''}<button class="mini-btn" data-review="${r.job_id}">Review submitted · View / delete</button></div>`).join(''):'<div class="empty">No reviews submitted yet.</div>'}${state.deletedReviews.map(d=>`<div class="inline-note">${e(d.job_title)} · Review deleted</div>`).join('')}</div><div class="hero-actions"><button class="btn btn-secondary" data-view="settings">Back to settings</button></div></div></section>`;
}
function bindMyReviews(){document.querySelectorAll('[data-review]').forEach(x=>x.onclick=()=>reviewJob(Number(x.dataset.review)))}

// --- Worker earnings chart ---
function earningsAxisLabel(period,granularity){
 const key=String(period||'');
 if(granularity==='year')return key;
 if(granularity==='month'){
  const [year,month]=key.split('-').map(Number);
  return Number.isFinite(year)&&month?new Date(year,month-1,1).toLocaleDateString('en-US',{month:'short',year:'2-digit'}):key;
 }
 if(granularity==='week'){
  const match=key.match(/^(\d{4})-W(\d{2})$/);
  if(match){const year=Number(match[1]),week=Number(match[2]);const jan4=new Date(year,0,4);const monday=new Date(jan4);monday.setDate(jan4.getDate()-((jan4.getDay()+6)%7)+(week-1)*7);return monday.toLocaleDateString('en-US',{month:'short',day:'numeric'});}
  return key;
 }
 const parts=key.split('-').map(Number);
 return parts.length===3?new Date(parts[0],parts[1]-1,parts[2]).toLocaleDateString('en-US',{month:'short',day:'numeric'}):key;
}
function chartMoney(n){
 const value=Number(n)||0;
 if(Math.abs(value)>=1000000)return '$'+(value/1000000).toFixed(1).replace(/\.0$/,'')+'m';
 if(Math.abs(value)>=10000)return '$'+(value/1000).toFixed(1).replace(/\.0$/,'')+'k';
 return '$'+Math.round(value).toLocaleString('en-US');
}
function niceChartCeiling(value){
 const positive=Math.max(1,Number(value)||0);
 const magnitude=Math.pow(10,Math.floor(Math.log10(positive)));
 return Math.ceil(positive/(magnitude/2))*(magnitude/2);
}
function earningsSVG(series,group='month'){
 if(!series?.length)return `<div class="empty">No accepted or completed work for the selected period. Try All time or a longer date range.</div>`;
 const n=series.length;
 const spacing=n<=10?82:n<=30?60:n<=70?34:22;
 const left=88,right=24,top=28,bottom=69,inner=236;
 const w=Math.max(770,left+right+spacing*n),h=top+inner+bottom;
 const totalMax=Math.max(0,...series.map(x=>(Number(x.earned)||0)+(Number(x.projected)||0)));
 const yMax=niceChartCeiling(totalMax||1);
 const step=(w-left-right)/n,barWidth=Math.max(7,Math.min(38,step*.62));
 const labelEvery=Math.max(1,Math.ceil(n/Math.min(18,Math.floor((w-left-right)/74))));
 const labels=series.map((entry,i)=>{
  const x=left+i*step+step/2;
  if(i%labelEvery!==0&&i!==n-1)return '';
  return `<text x="${x}" y="${top+inner+22}" font-size="12" fill="#536c7b" text-anchor="middle">${e(earningsAxisLabel(entry.period,group))}</text>`;
 }).join('');
 const grid=[0,.25,.5,.75,1].map(p=>{
  const y=top+inner*(1-p);
  return `<line x1="${left}" x2="${w-right}" y1="${y}" y2="${y}" stroke="#dce5ea" stroke-dasharray="3 5"/><text x="${left-10}" y="${y+4}" font-size="12" text-anchor="end" fill="#4e6574">${chartMoney(yMax*p)}</text>`;
 }).join('');
 const bars=series.map((entry,i)=>{
  const x=left+i*step+(step-barWidth)/2;
  const earned=Math.max(0,Number(entry.earned)||0),projected=Math.max(0,Number(entry.projected)||0);
  const eh=earned/yMax*inner,ph=projected/yMax*inner;
  return `<g class="earnings-bar-group" tabindex="0" role="img" aria-label="${e(entry.period)}: earned ${dollars(earned)}, projected ${dollars(projected)}" data-chart-period="${e(entry.period)}" data-chart-earned="${earned}" data-chart-projected="${projected}"><rect x="${x}" y="${top+inner-eh}" width="${barWidth}" height="${eh}" rx="2.5" fill="#216747"/><rect x="${x}" y="${top+inner-eh-ph}" width="${barWidth}" height="${ph}" rx="2.5" fill="#84abc4"/><rect class="earnings-bar-hitbox" x="${x-3}" y="${top}" width="${barWidth+6}" height="${inner}" fill="transparent"/></g>`;
 }).join('');
 return `<div class="chart-scroll earnings-chart-container"><svg class="earnings-chart" style="width:${w}px;max-width:none" viewBox="0 0 ${w} ${h}" role="img" aria-label="Earned and projected job value over ${e(group)} intervals; horizontal axis ${e(group)} dates, vertical axis dollars"><text x="16" y="${top+inner/2}" transform="rotate(-90 16 ${top+inner/2})" text-anchor="middle" font-size="12" font-weight="700" fill="#506675">Amount ($)</text>${grid}<line x1="${left}" x2="${w-right}" y1="${top+inner}" y2="${top+inner}" stroke="#8195a1"/>${bars}${labels}<text x="${left+(w-left-right)/2}" y="${h-9}" text-anchor="middle" font-size="13" font-weight="700" fill="#536c7b">${{day:'Days',week:'Weeks',month:'Months',year:'Years'}[group]||'Date'}</text></svg><div class="earnings-hover-tooltip" role="status" aria-live="polite" hidden></div></div>`;
}
function bindEarningsHover(){
 const wrap=document.querySelector('.earnings-chart-container'),tip=wrap?.querySelector('.earnings-hover-tooltip');if(!wrap||!tip)return;
 const show=(bar,clientX,clientY)=>{
  const earned=Number(bar.dataset.chartEarned)||0,projected=Number(bar.dataset.chartProjected)||0;
  tip.innerHTML=`<strong>${e(bar.dataset.chartPeriod)}</strong><span>Earned: <b>${dollars(earned)}</b></span><span>Projected: <b>${dollars(projected)}</b></span><span>Total: <b>${dollars(earned+projected)}</b></span>`;
  tip.hidden=false;
  const rect=wrap.getBoundingClientRect(),left=clientX==null?Math.min(rect.width-20,bar.getBoundingClientRect().left-rect.left+20):clientX-rect.left;
  const top=clientY==null?bar.getBoundingClientRect().top-rect.top-15:clientY-rect.top-15;
  tip.style.left=`${Math.max(8,Math.min(left,rect.width-175))}px`;
  tip.style.top=`${Math.max(8,top-116)}px`;
 };
 wrap.querySelectorAll('[data-chart-period]').forEach(bar=>{
  bar.addEventListener('pointerenter',ev=>show(bar,ev.clientX,ev.clientY));
  bar.addEventListener('pointermove',ev=>show(bar,ev.clientX,ev.clientY));
  bar.addEventListener('pointerleave',()=>tip.hidden=true);
  bar.addEventListener('focus',()=>show(bar));bar.addEventListener('blur',()=>tip.hidden=true);
  bar.addEventListener('click',ev=>{if(tip.hidden)show(bar,ev.clientX,ev.clientY);else tip.hidden=true});
 });
}
async function loadEarnings(){const root=$('earningsContent');if(!root||role()!=='worker')return;
 const range=state.earningsRange,group=state.earningsGroup;
 try{
  const filters=new URLSearchParams({granularity:group,range});if(range==='custom'){if(!state.earningsStart||!state.earningsEnd){$('earningsContent').innerHTML='<div class="panel">Select your start and end dates, then click Apply dates.</div>';return;}filters.set('start',state.earningsStart);filters.set('end',state.earningsEnd)}
  const data=await api(`/analytics/earnings?${filters.toString()}`);
  if(state.view!=='analytics'||!$('earningsContent')||range!==state.earningsRange||group!==state.earningsGroup)return;
  $('earningsContent').innerHTML=`<div class="earnings-stats"><div class="stat"><span>Est. net on completed jobs</span><strong>${dollars(data.net_earned)}</strong><small>${data.completed_jobs} completed job${data.completed_jobs===1?'':'s'}</small></div><div class="stat"><span>Projected net from accepted jobs</span><strong>${dollars(data.net_projected)}</strong><small>${data.accepted_jobs} booked job${data.accepted_jobs===1?'':'s'}</small></div><div class="stat"><span>Est. net total</span><strong>${dollars(data.net_combined)}</strong><small>After estimated 10% HomeTask commission · not verified transfers</small></div></div><div class="panel"><div class="section-head"><div><h3>Earnings trend</h3><p>Amounts grouped by ${e(group)} · ${e(data.period_label||range)}. Summary cards use the same selected period.</p></div><div class="chart-legend"><span><i class="legend-dot earned"></i>Earned</span><span><i class="legend-dot projected"></i>Projected</span></div></div>${earningsSVG(data.net_series,group)}<div class="chart-table"><table><thead><tr><th>Period</th><th>Earned</th><th>Projected</th></tr></thead><tbody>${data.net_series.map(x=>`<tr><td>${e(x.period)}</td><td>${dollars(x.earned)}</td><td>${dollars(x.projected)}</td></tr>`).join('')}</tbody></table></div></div>`;
  bindEarningsHover();
 }catch(err){toast(err.message)};
}
// Avoid refetch loops when rendering analytics: keep the filters bound separately.

// --- Full-page public profiles and job invitations ---
async function openPublicProfile(id){if(!state.me)return showAuth();try{const u=await api(`/workers/${id}`);state.returnView=state.view==='public-profile'?state.returnView:state.view;state.publicProfile=u;state.publicProfileTab='about';state.portfolioCategory='all';state.profileReviewSort='newest';closeModal();nav('public-profile')}catch(err){toast(err.message)}}
function publicProfilePage(){const u=state.publicProfile;if(!u)return signInPrompt();
 const openJobs=state.jobs.filter(j=>mine(j)&&j.status==='open');const profileOpenTasks=Array.isArray(u.public_open_tasks)?u.public_open_tasks:[];
 const profileFrame=(state.me&&Number(state.me.id)===Number(u.id)?state.imageFraming:u.image_framing)||{};
 const tab=state.publicProfileTab;const portfolioCats=[...new Set((u.portfolio||[]).map(p=>p.category).filter(Boolean))];const publicPortfolio=(u.portfolio||[]).filter(p=>state.portfolioCategory==='all'||p.category===state.portfolioCategory);const sortedReviews=[...(u.reviews||[])].sort((a,b)=>state.profileReviewSort==='highest'?Number(b.rating)-Number(a.rating):state.profileReviewSort==='lowest'?Number(a.rating)-Number(b.rating):Number(b.created_at||0)-Number(a.created_at||0));
 const verifiedGallery=(u.verified_results||[]).map((p,i)=>`<article class="portfolio-card ht-verified-case"><span class="tag">Completed on HomeTask · customer approved</span><h3>${e(p.title)}</h3><span class="mock-meta">${e(p.category)}</span><div class="ht-result-gallery"><button data-verified-photo="${i}:before" type="button"><img src="${e(p.before_photo)}" alt="Before completed job" loading="lazy"/><span>Before</span></button><button data-verified-photo="${i}:after" type="button"><img src="${e(p.after_photo)}" alt="After completed job" loading="lazy"/><span>After</span></button></div></article>`).join('');
 const gallery=publicPortfolio.map(p=>`<article class="portfolio-card ${p.featured?'ht153-featured-project':''}">${p.featured?'<span class="tag ht153-featured-label">★ Featured project</span>':''}<button type="button" class="photo-zoom" data-public-photo="${p.id}" aria-label="Expand portfolio photo"><img src="${e(p.photo_data)}" alt="${e(p.title)}" loading="lazy"/></button><div><span class="tag">${e(p.category)}</span><h3>${e(p.title)}</h3><p class="mock-meta">${e(p.description||'Work sample shared by the worker')}</p></div></article>`).join('');
 const completedHighlights=(u.completed_highlights||[]).map(p=>`<article class="portfolio-card ht-completed-highlight"><div><span class="tag">${icon('check',15)} Completed on HomeTask</span><h3>${e(p.category)} project</h3><p class="mock-meta">Completed ${date(p.completed_at)} · Confirmed by the customer</p><p class="mock-meta">Customer name, address and private job details are not displayed.</p></div></article>`).join('');
 const reviews=sortedReviews.map(r=>`<div class="review-tile">${reviewStarRow(r.rating)}<p class="ht155-review-comment${r.comment?'':' is-empty'}">${e(r.comment||'Rating only')}</p>${r.photo_data?`<button class="review-photo-button" data-review-photo="${e(r.photo_data)}" aria-label="Enlarge finished work photo"><img src="${e(r.photo_data)}" alt="Photo attached to review" loading="lazy"/></button>`:''}<small>${e(r.author_name)}</small>${r.recipient_reply?`<div class="ht153-review-reply"><strong>Response from ${e(u.name)}</strong><p>${e(r.recipient_reply)}</p></div>`:state.me?.id===u.id?`<button class="mini-btn" data-reply-review="${r.id}">Respond to review</button>`:''}</div>`).join('');
 return `<section class="page workspace-page public-profile-page" style="--avatar-x:${Number(profileFrame.avatar_x??50)}%;--avatar-y:${Number(profileFrame.avatar_y??50)}%;--avatar-scale:${Number(profileFrame.avatar_zoom??100)/100};--banner-x:${Number(profileFrame.banner_x??50)}%;--banner-y:${Number(profileFrame.banner_y??50)}%;--banner-scale:${Number(profileFrame.banner_zoom??100)/100}"><button class="mini-btn" id="backFromProfile">← Back</button><div class="profile-hero-card ${u.banner_data?'with-profile-banner':''}" ${u.banner_data?`style="--profile-cover:url('${e(u.banner_data)}')"`: ''}>${state.me?.id!==u.id?`<div class="profile-more"><button type="button" class="profile-more-toggle" id="profileMoreToggle" aria-label="More options for ${e(u.name)}" aria-expanded="false" aria-controls="profileMoreMenu" aria-haspopup="menu"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="5" cy="12" r="2.2" fill="currentColor"/><circle cx="12" cy="12" r="2.2" fill="currentColor"/><circle cx="19" cy="12" r="2.2" fill="currentColor"/></svg></button><div class="profile-more-menu" id="profileMoreMenu" role="menu" hidden><button type="button" id="reportProfileAction">${icon('shield',15)} Report user</button><button type="button" id="blockProfileAction">${icon('user',15)} ${u.is_blocked?'Unblock user':'Block user'}</button></div></div>`:''}${state.me?.id===u.id&&u.banner_data?'<button class="public-banner-adjust" id="adjustPublicBanner" type="button" aria-label="Reposition my profile cover">Adjust cover image</button>':''}<div class="profile-head-identity">${state.me?.id===u.id&&u.avatar_data?`<button type="button" class="public-avatar-adjust" id="adjustPublicAvatar" aria-label="Reposition my profile picture">${avatar(u.id,u.name,true)}</button>`:avatar(u.id,u.name,true)}<div>${u.role==='worker'?'<span class="kicker">WORKER PROFILE</span>':''}<div class="ht158-profile-name-line"><h1>${e(u.name)}</h1>${Number(u.rating)>0?`<span class="ht158-name-stars" role="img" aria-label="Rated ${Number(u.rating).toFixed(1)} out of 5 stars"><span class="ht153-star-glyphs" style="--star-fill:${(Math.max(0,Math.min(5,Number(u.rating)))/5*100).toFixed(1)}%" aria-hidden="true">★★★★★</span></span>`:""}</div><p class="worker-profile-meta"><span class="profile-location-text">${icon('pin',15)} ${e(u.location||'Location not listed')}</span>${u.role==='worker'?`<span class="profile-review-status ${u.profile_verified?'profile-reviewed':''}">${u.profile_verified?'<img class="verified-house-icon" src="data:image/png;base64,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" alt=""/>':icon('shield',15)} ${e(u.verification)}</span>`:''}</p></div></div><div class="profile-metrics"><div><span>${u.role==='worker'?'Completed jobs':'Jobs posted'}</span><strong>${u.role==='worker'?(u.completed_jobs||0):(u.posted_jobs||0)}</strong></div>${u.role==='worker'?`<div><span>Followers</span><strong>${u.follower_count||0}</strong></div>`:''}<div><span>Reviews</span><strong>${u.review_count||0}</strong></div></div>${u.role==='worker'&&role()==='customer'&&u.id!==state.me.id&&!u.is_blocked?`<div class="hero-actions"><button class="btn ${u.is_following?'btn-secondary':'btn-primary'}" id="followWorker" title="${u.is_following?'Click to unfollow this worker':'Follow this worker'}" aria-label="${u.is_following?'Unfollow worker':'Follow worker'}">${icon('user',17)} ${u.is_following?'✓ Following':'Follow'}</button></div>`:''}</div>
<div class="ht153-trust-strip"><span>${icon('briefcase',17)} ${Number(u.completed_jobs||0)} completed tasks</span><span>${ratingStars(u.rating,u.review_count)}</span><span>${u.profile_verified?'Profile statement reviewed by HomeTask':'Verification not completed'}</span>${Number(u.completed_jobs)>=10&&Number(u.review_count)>=5&&Number(u.rating)>=4.8?'<span class="ht153-toprated">★ Top-rated · Earned from completed work</span>':''}${u.member_since?`<span>Member since ${new Date(Number(u.member_since)*1000).toLocaleDateString('en-US',{month:'short',year:'numeric'})}</span>`:''}</div><div class="profile-tabs segment-pills">${(u.role==='worker'?[['about','About'],['posted','Posted Tasks'],['previous','Previous Work'],['reviews','Reviews']]:[['about','About'],['posted','Posted Tasks'],['reviews','Reviews']]).map(([t,label])=>`<button class="mini-btn ${t===tab?'selected':''}" data-public-tab="${t}">${label}</button>`).join('')}</div>
 <div class="profile-content-grid"><article class="panel">${tab==='about'?`<h3>About</h3><p class="profile-text">${e(u.bio||'This worker has not added an introduction yet.')}</p><h3>Skills & experience</h3><p class="profile-text">${e(u.skills||'No skills listed yet.')}</p>`:tab==='posted'?`<h3>Posted tasks</h3><p class="mock-meta">Only available public tasks are shown. Private assignments and addresses are not shared.</p>${profileOpenTasks.length?`<div class="ht152-profile-tasks">${profileOpenTasks.map(j=>`<article class="ht152-profile-task">${j.has_main_photo?`<img class="ht153-posted-photo" src="/api/jobs/${j.id}/main-photo" alt="Task image" loading="lazy"/>`:placeholderPhoto(j,'ht153-posted-photo')}<div><strong>${e(j.title)}</strong><p class="mock-meta">${e(j.category)} · ${e(coarseLocation(j.location)||'Approximate location')} · ${dollars(j.budget)}</p></div><button class="mini-btn" data-profile-task="${j.id}">View task & offer</button></article>`).join('')}</div>`:'<div class="empty">No available tasks posted right now.</div>'}`:tab==='previous'?`<h3>Previous Work</h3><div class="ht153-gallery-filter"><label>Filter work by category <select class="control" id="ht153PortfolioFilter"><option value="all">All projects</option>${portfolioCats.map(c=>`<option ${state.portfolioCategory===c?'selected':''} value="${e(c)}">${e(c)}</option>`).join('')}</select></label></div><p class="mock-meta">Confirmed HomeTask completions are marked separately. Other portfolio photos and descriptions are self-reported. Before-and-after photos are shown only with customer approval.</p><div class="portfolio-grid">${completedHighlights+verifiedGallery+gallery||'<div class="empty">No previous work shared yet.</div>'}</div>`:`<h3>Customer reviews</h3><div class="ht153-review-summary"><div>${ratingStars(u.rating,u.review_count)}<p class="mock-meta">From completed HomeTask bookings</p></div><div class="ht153-review-breakdown">${[5,4,3,2,1].map(n=>`<div><span>${n} ★</span><meter min="0" max="${Math.max(1,Number(u.review_count||0))}" value="${Number(u.review_breakdown?.[n]||0)}"></meter><small>${Number(u.review_breakdown?.[n]||0)}</small></div>`).join('')}</div></div><label class="ht153-review-sort">Sort reviews <select class="control" id="ht153ReviewSort"><option value="newest" ${state.profileReviewSort==='newest'?'selected':''}>Newest</option><option value="highest" ${state.profileReviewSort==='highest'?'selected':''}>Highest rated</option><option value="lowest" ${state.profileReviewSort==='lowest'?'selected':''}>Lowest rated</option></select></label><p class="mock-meta">Showing up to eight recent reviews.</p>${reviews||'<p class="mock-meta">No reviews yet.</p>'}`}</article>
 <aside class="panel">${u.role==='worker'?'<h3>Invite to a job</h3>':'<h3>Account information</h3>'}${u.role==='worker'&&role()==='customer'&&u.id!==state.me.id&&!u.is_blocked?openJobs.length?`<p class="mock-meta">Invite this worker to review an open listing. They will see a job request on their homepage.</p><div class="field"><label>Choose a job</label><select class="control" id="jobToInvite">${openJobs.map(j=>`<option value="${j.id}">${e(j.title)}</option>`).join('')}</select></div><button class="btn btn-primary" id="inviteWorker">${icon('invite',17)} Send job request</button>`:'<p class="mock-meta">Post an open job to send an invitation.</p>':u.role==='worker'?'<p class="mock-meta">People posting jobs can invite workers to their open jobs.</p>':'<p class="mock-meta">Use the three-dot menu above to report or block this account.</p>'}<div class="inline-note" style="margin-top:18px">${u.role==='worker'?(u.profile_verified?'Profile reviewed means an administrator approved the self-reported profile information.':'This worker does not have an approved profile verification request.')+' HomeTask does not provide identity checks, licensing verification, insurance verification, or background checks. Follower counts and portfolio work are not proof of qualifications.':'Block or report another user if you have a concern about their behavior. Reports are reviewed by HomeTask administrators.'}</div></aside></div></section>`;
}
function showReviewReply(reviewId){
 const user=state.publicProfile;
 if(!user||user.id!==state.me?.id)return;
 modal(`${modalHead('Respond to review','PUBLIC RESPONSE')}<p class="mock-meta">Your response will appear publicly next to this review. Keep it professional and avoid sharing personal information.</p><form id="ht153ReviewReplyForm"><div class="field"><label>Your response</label><textarea class="control" name="text" rows="4" minlength="1" maxlength="600" required></textarea></div><div class="hero-actions"><button class="btn btn-primary" type="submit">Post response</button><button class="btn btn-secondary" type="button" data-dismiss>Back</button></div></form>`);
 $('ht153ReviewReplyForm').onsubmit=async ev=>{
   ev.preventDefault();const button=ev.target.querySelector('[type="submit"]');button.disabled=true;
   try{await api(`/reviews/${reviewId}/reply`,'POST',{text:String(new FormData(ev.target).get('text')||'').trim()});state.publicProfile=await api(`/workers/${user.id}`);closeModal();render();toast('Your response is now visible on your profile.')}
   catch(err){button.disabled=false;toast(err.message)}
 };
}
async function inviteWorkerFromProfile(){const u=state.publicProfile,id=Number($('jobToInvite')?.value);if(!id||!u)return;
 try{await api(`/jobs/${id}/invite/${u.id}`,'POST');toast(`${u.name} received a job invitation.`)}catch(err){toast(err.message)}
}

// Address autocomplete uses the public Photon (OpenStreetMap-based) search service.
// No API key is needed. Calls are debounced and only made while typing a job address.
function formatPhotonAddress(p){
 const line=[p.housenumber,p.street].filter(Boolean).join(' ');
 const locality=p.city||p.town||p.village||p.hamlet||p.county||'';
 const area=p.state||'';
 const parts=[line||p.name,locality,area,p.postcode].filter(Boolean);
 return [...new Set(parts)].join(', ').slice(0,120);
}
function initAddressAutocomplete(){
 const input=$('addressInput'), box=$('addressSuggestions'), help=$('addressHelp');
 if(!input||!box)return;
 const f=input.form, latitude=f.elements.namedItem('latitude'),longitude=f.elements.namedItem('longitude');
 let request=0, timer=null, results=[];
 const hide=()=>{box.hidden=true;box.innerHTML='';input.setAttribute('aria-expanded','false')};
 const indicate=message=>{help.textContent=message};
 input.addEventListener('input',()=>{
   latitude.value='';longitude.value='';clearTimeout(timer);const id=++request;
   hide();const q=input.value.trim();
   indicate('Choose a suggestion to pin the correct address. Exact addresses are shared only after a worker is hired.');
   if(q.length<4)return;
   timer=setTimeout(async()=>{
     try{
       const url='https://photon.komoot.io/api/?'+new URLSearchParams({q,limit:'6',lat:'43.1566',lon:'-77.6088',lang:'en'});
       const response=await fetch(url,{headers:{Accept:'application/json'}});
       if(!response.ok)throw new Error('Address service unavailable');
       const data=await response.json();if(id!==request)return;
       results=(data.features||[]).filter(x=>x.geometry?.coordinates?.length===2).map(x=>({
         label:formatPhotonAddress(x.properties||{}),
         latitude:Number(x.geometry.coordinates[1]), longitude:Number(x.geometry.coordinates[0])
       })).filter(x=>x.label&&Number.isFinite(x.latitude)&&Number.isFinite(x.longitude));
       if(!results.length){indicate('No matching addresses found. Try including the city and state.');return;}
       box.innerHTML=results.map((x,i)=>`<button type="button" class="address-option" role="option" data-address-index="${i}">${e(x.label)}</button>`).join('');
       box.hidden=false;input.setAttribute('aria-expanded','true');
       box.querySelectorAll('[data-address-index]').forEach(btn=>btn.onclick=()=>{
         const x=results[Number(btn.dataset.addressIndex)];input.value=x.label;
         latitude.value=x.latitude;longitude.value=x.longitude;
         hide();indicate('✓ Address selected. The browsing map will show the approximate area.');
       });
     }catch(err){if(id===request)indicate('Address lookup is unavailable. Check your internet connection and try again.');}
   },350);
 });
 input.addEventListener('keydown',ev=>{
   if(ev.key==='Escape')hide();
   if(ev.key==='ArrowDown'&&!box.hidden){ev.preventDefault();box.querySelector('button')?.focus();}
 });
 box.addEventListener('keydown',ev=>{if(ev.key==='Escape'){hide();input.focus();}});
 if(latitude.value&&longitude.value)indicate('✓ Saved address coordinates loaded. Only you and a hired worker see exact coordinates.');
 else if(input.value)indicate('This older job has no saved coordinates. Select a suggested address to update its map pin.');
}
// --- HomeTask 13.3: saved jobs, follower connections, portfolio, scheduling, review queue ---
function savedJobsPage(){
 if(!state.me)return signInPrompt();
 const saved=state.jobs.filter(j=>(state.ht09SavedViewIds||state.savedJobIds).includes(j.id));
 const query=String(state.ht154SavedQuery||'').toLowerCase().trim();const config=state.ht1530SavedFilters||{};
 const categoriesSaved=[...new Set(saved.map(j=>j.category).filter(Boolean))].sort();
 const visible=saved.filter(j=>(!query||[j.title,j.category,j.location,j.description].join(' ').toLowerCase().includes(query))&&(!config.category||j.category===config.category)&&(!config.status||j.status===config.status)&&(!config.min||Number(j.budget)>=Number(config.min))&&(!config.max||Number(j.budget)<=Number(config.max))&&(!config.distance||(visibleMiles(j)!=null&&visibleMiles(j)<=Number(config.distance)))).sort((a,b)=>config.sort==='high'?b.budget-a.budget:config.sort==='low'?a.budget-b.budget:0);
 return `<section class="page workspace-page"><div class="page-title"><span class="kicker">HOMETASKER WORKSPACE</span><h1>Saved jobs</h1><p>Keep interesting jobs here until you're ready to send an offer.</p></div><div class="ht1530-saved-tools"><label class="ht154-list-search">${icon('search',18)}<input class="control" id="ht154SavedSearch" type="search" placeholder="Search saved jobs by title, category or location" aria-label="Search saved jobs" value="${e(state.ht154SavedQuery||'')}"/></label><details class="ht1530-saved-filter"><summary>${icon('list',16)} Filters ${Object.entries(config).filter(([k,v])=>k!=='sort'&&v).length?'•':''}</summary><div class="ht1530-filter-menu"><label>Category<select class="control" data-ht1530-saved="category"><option value="">All categories</option>${categoriesSaved.map(c=>`<option ${config.category===c?'selected':''} value="${e(c)}">${e(c)}</option>`).join('')}</select></label><label>Status<select class="control" data-ht1530-saved="status">${[['','Any status'],['open','Open'],['accepted','Hired'],['completed','Completed']].map(([value,label])=>`<option value="${value}" ${config.status===value?'selected':''}>${label}</option>`).join('')}</select></label><div class="ht1530-budget-inputs"><label>Min $<input type="number" min="0" class="control" data-ht1530-saved="min" value="${e(config.min||'')}" placeholder="Any"/></label><label>Max $<input type="number" min="0" class="control" data-ht1530-saved="max" value="${e(config.max||'')}" placeholder="Any"/></label></div><label>Distance<select class="control" data-ht1530-saved="distance">${[['','Any distance'],['5','5 miles'],['10','10 miles'],['25','25 miles'],['50','50 miles']].map(([value,label])=>`<option value="${value}" ${config.distance===value?'selected':''}>${label}</option>`).join('')}</select></label><label>Sort<select class="control" data-ht1530-saved="sort">${[['recent','Recently saved'],['high','Highest budget'],['low','Lowest budget']].map(([value,label])=>`<option value="${value}" ${config.sort===value?'selected':''}>${label}</option>`).join('')}</select></label><button class="mini-btn" type="button" id="ht1530ClearSaved">Clear filters</button></div></details></div><div class="job-grid" id="ht154SavedResults">${visible.length?visible.map(j=>`<article class="job-card interactive-job-card ht1532-saved-card" role="button" tabindex="0" data-card-job="${j.id}" aria-label="View saved job ${e(j.title)}">${compactJobPhoto(j)}${jobBookmark(j)}<div class="job-top"><h3>${e(j.title)}</h3><strong>${dollars(j.budget)}</strong></div><p class="mock-meta">${e(j.location)} · ${e(j.category)} · ${icon('calendar',13)} ${e(ht1547CardSchedule(j).label)}</p><span class="status ${statusClass(j)}">${status(j)}</span><div class="mini-actions"></div></article>`).join(''):'<div class="empty"><h3>Nothing saved yet</h3><p>Tap the bookmark on an open listing to save it here.</p><button class="btn btn-primary" data-view="browse">Find jobs</button></div>'}</div></section>`;
}
function bindSavedJobs(){/* Shared render handlers connect cards and saved-job actions. */}
const ht120SavingJobIds=new Set();
async function toggleSavedJob(jobId){
 if(!state.me)return showAuth();
 // Update bookmark controls in place: a full refresh/render resets the featured jobs rail.
 if(ht120SavingJobIds.has(jobId))return;
 ht120SavingJobIds.add(jobId);
 const wasSaved=state.savedJobIds.includes(jobId);
 const controls=[...document.querySelectorAll(`[data-save-job="${jobId}"]`)];
 controls.forEach(b=>b.disabled=true);
 try{
  await api(`/saved-jobs/${jobId}`,wasSaved?'DELETE':'POST');
  state.savedJobIds=wasSaved?state.savedJobIds.filter(id=>Number(id)!==Number(jobId)):[...state.savedJobIds,jobId];
  const saved=!wasSaved;
  controls.forEach(b=>{
   b.classList.toggle('is-saved',saved);
   b.setAttribute('aria-pressed',String(saved));
   b.setAttribute('aria-label',saved?'Remove saved job':'Save job');
   b.title=saved?'Remove saved job':'Save job';
  });
  const modalSave=$('detailSaveJob');
  if(modalSave){modalSave.classList.toggle('is-saved',saved);modalSave.setAttribute('aria-pressed',String(saved));modalSave.setAttribute('aria-label',saved?'Remove saved job':'Save job');modalSave.title=saved?'Remove saved job':'Save job';}
  // Keep the card visible on this visit to Saved Jobs. The bookmark updates
  // immediately; the card disappears when the user leaves and returns.
  toast(saved?'Job saved for later.':'Job removed from saved.');
 }catch(err){toast(err.message)}
 finally{ht120SavingJobIds.delete(jobId);controls.forEach(b=>{if(b.isConnected)b.disabled=false})}
}
function followingPage(){
 if(!state.me)return signInPrompt();
 return `<section class="page workspace-page"><div class="page-title"><span class="kicker">YOUR NETWORK</span><h1>Following</h1><p>Workers you've followed. Revisit their portfolio, reviews, and new work.</p></div><div class="panel" id="followingContent">Loading followed workers…</div></section>`;
}
async function loadFollowing(){
 try{
  const data=await api('/following');const root=$('followingContent');if(!root)return;
  root.innerHTML=(data.workers||[]).length?`<div class="stack">${data.workers.map(w=>`<button class="dashboard-job following-worker" data-person="${w.id}">${avatar(w.id,w.name)}<span><strong>${e(w.name)}</strong><small>${e(w.skills||'No skills listed')} · ${e(w.location||'Location not listed')}</small></span>${icon('arrow',18)}</button>`).join('')}</div>`:'<div class="empty"><h3>No followed workers yet</h3><p>Follow workers from their public profiles to see them here.</p></div>';
  root.querySelectorAll('[data-person]').forEach(b=>b.onclick=()=>openPublicProfile(Number(b.dataset.person)));
 }catch(err){toast(err.message)}
}
async function toggleFollowWorker(){
 const worker=state.publicProfile;if(!worker)return;
 try{await api(`/workers/${worker.id}/follow`,worker.is_following?'DELETE':'POST');state.publicProfile=await api(`/workers/${worker.id}`);render();toast(worker.is_following?'Unfollowed worker.':'Now following this worker.')}catch(err){toast(err.message)}
}
function previousWorkPage(){
 if(!state.me)return signInPrompt();
 return `<section class="page workspace-page"><div class="page-title"><span class="kicker">WORKER PROFILE</span><h1>Previous Work</h1><p>Add real examples of projects you've completed. Customers can see your work on your public profile.</p></div><div class="panel ht-linked-completed-panel"><div class="section-head"><div><h3>Completed HomeTask jobs</h3><p class="mock-meta">Select completed assignments to add them as confirmed work on your profile. Customer names, addresses, and job descriptions are not published.</p></div></div><div id="completedPortfolioJobs">Loading completed work…</div></div><div class="form-layout"><div class="panel"><h3>My portfolio</h3><div class="portfolio-grid" id="portfolioContent">Loading your projects…</div></div><div class="panel"><h3>Add a project</h3><form id="portfolioForm"><div class="field"><label>Project title</label><input class="control" name="title" maxlength="90" minlength="3" required placeholder="Bedroom wall repaint"/></div><div class="field"><label>Category</label><select class="control" name="category">${options(Object.keys(categories),'Painting')}</select></div><div class="field"><label>What did you do?</label><textarea class="control" name="description" maxlength="500" placeholder="Describe the project and the result"></textarea></div><div class="field"><label>Photo of your work</label><input class="control" name="photo" type="file" accept="image/*" required/></div><p class="mock-meta">Only upload photos you own or have permission to publish. Uploaded projects are self-reported examples, not verified work history.</p><button class="btn btn-primary" type="submit">Add project</button></form></div></div></section>`;
}
async function loadCompletedPortfolioJobs(){
 const root=$('completedPortfolioJobs');if(!root)return;
 try{
  const data=await api('/previous-work/completed-eligible');
  root.innerHTML=data.jobs.length?`<div class="ht-completed-job-list">${data.jobs.map(j=>`<div class="ht-completed-job-row"><div><strong>${e(j.title)}</strong><small>${e(j.category)} · Completed ${date(j.completed_at)}</small><span class="tag">${j.added?'Displayed on profile':'Private until added'}</span></div><button type="button" class="mini-btn" data-linked-work="${j.id}" data-link-action="${j.added?'remove':'add'}">${j.added?'Remove from profile':'Add to Previous Work'}</button></div>`).join('')}</div>`:'<div class="empty">Your completed HomeTask assignments will appear here. Once a customer confirms the work, you can add it to your public Previous Work section.</div>';
  root.querySelectorAll('[data-linked-work]').forEach(b=>b.onclick=async()=>{try{await api(`/previous-work/completed/${b.dataset.linkedWork}`,b.dataset.linkAction==='add'?'POST':'DELETE');await loadCompletedPortfolioJobs();toast(b.dataset.linkAction==='add'?'Completed work added to profile.':'Completed work removed from profile.')}catch(err){toast(err.message)}});
 }catch(err){root.textContent=err.message;}
}
async function loadPreviousWork(){
 loadCompletedPortfolioJobs();
 const root=$('portfolioContent');if(!root)return;
 try{
  const data=await api('/previous-work/mine');state.portfolioItems=[...(data.items||[])].sort((a,b)=>Number(b.featured||0)-Number(a.featured||0)||Number(b.id)-Number(a.id));
  root.innerHTML=state.portfolioItems.length?state.portfolioItems.map(p=>`<article class="portfolio-card"><button type="button" class="photo-zoom" data-portfolio-preview="${p.id}"><img src="${e(p.photo_data)}" alt="${e(p.title)}"/></button><div><span class="tag">${e(p.category)}</span>${p.featured?'<span class="tag ht153-featured-label">★ Featured</span>':''}<h3>${e(p.title)}</h3><p class="mock-meta">${e(p.description||'No description')}</p><button class="mini-btn" data-portfolio-feature="${p.id}">${p.featured?'Remove from featured':'Feature on profile'}</button><button class="mini-btn" data-portfolio-delete="${p.id}">${icon('trash',15)} Delete</button></div></article>`).join(''):'<div class="empty">No previous work posted yet.</div>';
  root.querySelectorAll('[data-portfolio-preview]').forEach(b=>b.onclick=()=>{const p=state.portfolioItems.find(x=>x.id===Number(b.dataset.portfolioPreview));if(p)openPhotoLightbox(p.photo_data)});
  root.querySelectorAll('[data-portfolio-feature]').forEach(b=>b.onclick=async()=>{try{await api(`/previous-work/${b.dataset.portfolioFeature}/feature`,'POST');await loadPreviousWork();toast('Portfolio highlights updated.')}catch(err){toast(err.message)}});
  root.querySelectorAll('[data-portfolio-delete]').forEach(b=>b.onclick=async()=>{if(!confirm('Delete this previous-work project?'))return;try{await api(`/previous-work/${b.dataset.portfolioDelete}`,'DELETE');loadPreviousWork();toast('Project deleted.')}catch(err){toast(err.message)}});
  const form=$('portfolioForm');if(form)form.onsubmit=async ev=>{
   ev.preventDefault();const fd=new FormData(form),file=fd.get('photo');
   try{const data=await compressJobPhoto(file);await api('/previous-work','POST',{title:fd.get('title'),category:fd.get('category'),description:fd.get('description'),photo_data:data});form.reset();loadPreviousWork();toast('Portfolio project added.')}catch(err){toast(err.message)}
  };
 }catch(err){root.textContent=err.message}
}
function verificationPage(){
 if(!state.me)return signInPrompt();
 return `<section class="page workspace-page"><div class="page-title"><span class="kicker">WORKER PROFILE</span><h1>Profile verification</h1><p>Request approval of your profile information by a HomeTask administrator. This is not identity, license, insurance, or background verification.</p></div><div class="panel" id="verificationContent">Loading verification status…</div></section>`;
}
async function loadVerification(){
 const root=$('verificationContent');if(!root)return;
 try{
  const data=await api('/verification/me');const r=data.request;
  let content='';
  if(r?.status==='approved'){
   if(state.me)state.me.profile_verified=1;
   const menu=document.querySelector('#profileMenu [data-profile-link="verification"]');if(menu)menu.textContent='You’re verified';
   content=`<div class="verified-success"><img class="verified-large-icon" src="data:image/png;base64,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" alt="HomeTask house with verified checkmark"/><h2>You’re verified!</h2><p>Your HomeTask profile information has been approved, and the Verified badge is now visible on your worker profile.</p><span class="verified-label"><img src="data:image/png;base64,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" alt=""/> Verified</span><div class="inline-note">Verified means your submitted profile information was approved by a HomeTask administrator. It does not confirm your identity, licensing, insurance, qualifications, or background.</div></div>`;
  }else if(r?.status==='pending'){
   content=`<div class="verification-state"><span class="verification-state-icon">${icon('clock',28)}</span><h2>Verification request submitted</h2><p>Your request is pending administrator approval. We’ll notify you when it’s approved or denied.</p><div class="inline-note"><strong>Status:</strong> Pending review</div></div>`;
  }else{
   content=`${r?.status==='rejected'?`<div class="verification-denied"><strong>Verification request denied</strong><p>Your previous request wasn't approved. You can submit a new statement for review. Check your notifications for the decision.</p></div>`:''}
   <form id="verificationForm"><div class="field"><label>Skills and work experience statement</label><textarea class="control" name="statement" minlength="30" maxlength="800" required placeholder="Describe your relevant training, experience and specialties.">${e(r?.statement||'')}</textarea></div><button class="btn btn-primary" type="submit">${r?'Resubmit verification request':'Request verification'}</button></form><p class="mock-meta">Administrator approval only confirms review of submitted profile information. It is not identity, licensing, insurance, or background verification.</p>`;
  }
  root.innerHTML=content+(data.admin_enabled?'<div class="hero-actions"><button class="btn btn-secondary" data-view="admin">Open Admin Dashboard</button></div>':'');
  const form=$('verificationForm');
  if(form)form.onsubmit=async ev=>{ev.preventDefault();try{await api('/verification/request','POST',{statement:new FormData(ev.target).get('statement')});toast('Verification request submitted. You have a new notification.');await loadVerification();await pollNotifications(false);}catch(err){toast(err.message)}};
  root.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>nav(b.dataset.view));
 }catch(err){root.textContent=err.message}
}
function verificationAdminPage(){return `<section class="page workspace-page"><div class="page-title"><span class="kicker">ADMINISTRATION</span><h1>Verification requests</h1><p>Review submitted profile statements. Approval adds a Verified badge; it is not identity or background verification.</p></div><div class="panel" id="verificationAdminContent">Loading requests…</div></section>`}
async function loadVerificationAdmin(){
 const root=$('verificationAdminContent');if(!root)return;
 try{
  const data=await api('/verification/requests');
  root.innerHTML=data.requests.length?data.requests.map(r=>`<div class="dashboard-job"><h3>${e(r.name)}</h3><p class="mock-meta">Skills: ${e(r.skills||'Not supplied')}</p><p>${e(r.statement)}</p><div class="mini-actions"><button class="btn btn-primary" data-verification-approve="${r.worker_id}">Approve & verify profile</button><button class="btn btn-secondary" data-verification-reject="${r.worker_id}">Deny request</button></div></div>`).join(''):'<div class="empty">No pending verification requests.</div>';
  root.querySelectorAll('[data-verification-approve],[data-verification-reject]').forEach(b=>b.onclick=async()=>{
   const approve=b.dataset.verificationApprove!==undefined,id=Number(b.dataset.verificationApprove||b.dataset.verificationReject);
   try{await api(`/verification/${id}/decision`,'POST',{approve});await loadVerificationAdmin();toast(approve?'HomeTasker profile verified and notified.':'Request denied; worker notified.')}catch(err){toast(err.message)}
  });
 }catch(err){root.textContent=err.message}
}
async function requestWorkFinished(jobId){
 const note=prompt('Optional note for the customer about the finished work:')??null;if(note===null)return;
 try{
  await api(`/jobs/${jobId}/work-finished`,'POST',{note});
  await refresh();closeModal();render();
  modal(`${modalHead('Work completed','CUSTOMER CONFIRMATION PENDING')}<div class="ht-v15-success"><span class="ht-v15-success-mark" aria-hidden="true">${icon('check',30)}</span><h3>Work completed!</h3><p>Your work has been marked finished. <strong>Waiting for customer confirmation for payout.</strong></p><p class="mock-meta">The customer has 48 hours to approve, request changes, or open a dispute. A confirmed task does not mean the money has already reached your bank.</p><div class="hero-actions"><button type="button" class="btn btn-primary" id="v15ViewFinishedTask">View assignment</button><button type="button" class="btn btn-secondary" data-dismiss>Done</button></div></div>`);
  $('v15ViewFinishedTask').onclick=()=>openJob(jobId);
  document.querySelectorAll('#modalRoot [data-dismiss]').forEach(b=>b.onclick=closeModal);
 }catch(err){toast(err.message)}
}
async function requestWorkChanges(jobId){
 const note=prompt('Tell the worker what still needs to be finished:');if(note===null)return;
 if(!note.trim())return toast('Please describe what needs fixing.');
 try{await api(`/jobs/${jobId}/work-needs-changes`,'POST',{note});await refresh();closeModal();render();toast('Changes requested. Worker notified.')}catch(err){toast(err.message)}
}
async function showWorkerConflictWarning(job){
 const display=$('workerScheduleNotice');if(!display)return;
 const times=offerSchedule(job);
 if(!times.proposed_start||!times.proposed_end){display.textContent='';display.hidden=true;return}
 try{const result=await api(`/worker-availability/check?start=${encodeURIComponent(times.proposed_start)}&end=${encodeURIComponent(times.proposed_end)}&job_id=${job.id}`);
  display.textContent=result.conflicts.length?'Scheduling conflict: you already have a confirmed HomeTask assignment during this time.':'';display.hidden=!display.textContent;
  display.classList.toggle('schedule-warning',result.conflicts.length>0);
 }catch(err){display.textContent=err.message;display.hidden=false}
}

// HomeTask 13.8 — safe administration from an existing account.
const adminSections=[['overview','Home'],['verifications','Verification'],['users','Users'],['jobs','Jobs'],['reports','Reports & disputes'],['analytics','Analytics'],['activity','Activity log'],['settings','Platform settings']];
function adminPage(){
 if(!state.me?.is_admin)return signInPrompt();
 return `<section class="page workspace-page ht-admin"><div class="page-title"><span class="kicker">HOMETASK ADMINISTRATION</span><h1>Admin Dashboard</h1><p>Manage your marketplace without leaving your regular customer or worker account. Actions are saved to the activity log.</p></div><div class="admin-tabs" role="tablist" aria-label="Admin sections">${adminSections.map(([key,label])=>`<button class="mini-btn ${state.adminTab===key?'selected':''}" data-admin-tab="${key}" type="button" ${key==='overview'?'aria-label="Home" title="Home"':''}>${key==='overview'?'<img class="admin-home-icon" src="/assets/logo-1-icon.png" alt=""/>':e(label)}</button>`).join('')}</div><div id="adminContent" class="panel" aria-live="polite">Loading administration data…</div><p class="mock-meta">HomeTask is still a local capstone prototype. This dashboard is not a replacement for verified identity checks, automated trust & safety monitoring, or production-grade security.</p></section>`;
}
function adminTiles(entries){return `<div class="admin-metrics">${entries.map(([title,value])=>`<div class="admin-metric"><span>${e(title)}</span><strong>${e(value)}</strong></div>`).join('')}</div>`}
function adminDate(t){return t?new Date(t*1000).toLocaleString():'—'}
function adminEmpty(message){return `<div class="empty"><p>${e(message)}</p></div>`}
function adminSearchBar(type,options){const val=state.adminFilters[type]||{};return `<form id="adminSearchForm" class="admin-search"><input class="control" name="q" maxlength="80" aria-label="Search ${e(type)}" placeholder="Search ${e(type)}…" value="${e(val.q||'')}"/><select name="status" class="control" aria-label="Filter status">${options.map(x=>`<option value="${e(x)}" ${x===(val.status||'all')?'selected':''}>${e(x==='all'?'All statuses':x)}</option>`).join('')}</select><button class="btn btn-secondary" type="submit">Apply filters</button></form>`;}
async function adminDecision(url,body,success){
 try{await api(url,'POST',body);toast(success);await loadAdminTab();await pollNotifications(false)}catch(err){toast(err.message)}
}
async function loadAdminTab(){
 const root=$('adminContent');if(!root||!state.me?.is_admin)return;
 document.querySelectorAll('[data-admin-tab]').forEach(b=>{b.onclick=()=>{state.adminTab=b.dataset.adminTab;render()};b.classList.toggle('selected',b.dataset.adminTab===state.adminTab)});
 const tab=state.adminTab,filters=state.adminFilters[tab]||{};
 root.innerHTML='<div class="inline-note">Loading…</div>';
 try{
  if(tab==='overview'){
   const d=await api('/admin/overview'),v=d.stats;
   root.innerHTML=`<h2>Marketplace overview</h2>${adminTiles([['Total users',v.users],['Active jobs',v.active_jobs],['Completed jobs',v.completed_jobs],['Pending verifications',v.pending_verifications],['Reports to review',v.open_reports],['Restricted users',v.restricted_users]])}<div class="admin-split"><div><h3>Latest reports</h3>${d.reports.length?d.reports.map(x=>`<div class="admin-brief"><strong>#${x.id}: ${e(x.category)} · ${e(x.target_type)}</strong><span>${e(x.reporter_name)} · ${e(x.status)} · ${adminDate(x.created_at)}</span></div>`).join(''):adminEmpty('No reports yet.')}<button class="mini-btn" data-admin-jump="reports">Manage reports</button></div><div><h3>Pending verifications</h3>${d.verification_requests.length?d.verification_requests.map(x=>`<div class="admin-brief"><strong>${e(x.name)}</strong><span>Requested ${adminDate(x.submitted_at)}</span></div>`).join(''):adminEmpty('No pending requests.')}<button class="mini-btn" data-admin-jump="verifications">Review verifications</button></div></div>`;
  }else if(tab==='verifications'){
   const d=await api('/admin/verifications?'+new URLSearchParams({status:filters.status||'all'}));
   root.innerHTML=`<h2>Worker verification center</h2><p class="mock-meta">Verified means HomeTask administration approved a submitted profile statement. It does not indicate independent identity, background, license or insurance verification.</p>${adminSearchBar('verifications',['all','pending','approved','rejected','revoked'])}${d.requests.length?d.requests.map(x=>`<article class="admin-record"><div class="admin-record-head"><div><strong>${e(x.name)}</strong><p class="mock-meta">${e(x.email)} · ${e(x.location||'No city')} · Requested ${adminDate(x.submitted_at)}</p></div><span class="tag">${e(x.status)}</span></div><p><strong>Skills:</strong> ${e(x.skills||'Not supplied')}</p><p><strong>Statement:</strong> ${e(x.statement)}</p>${x.admin_note?`<p class="mock-meta">Internal review note: ${e(x.admin_note)}</p>`:''}<div class="mini-actions">${x.status==='pending'?`<button class="btn btn-primary" data-admin-verify="${x.worker_id}:approve">Approve & verify</button><button class="btn btn-secondary" data-admin-verify="${x.worker_id}:deny">Deny request</button>`:''}${x.status==='approved'?`<button class="btn btn-secondary" data-admin-verify="${x.worker_id}:revoke">Revoke Verified badge</button>`:''}</div></article>`).join(''):adminEmpty('No verification requests in this category.')}`;
  }else if(tab==='users'){
   const d=await api('/admin/users?'+new URLSearchParams({q:filters.q||'',status:filters.status||'all'}));
   root.innerHTML=`<h2>User management</h2><p class="mock-meta">Search up to 100 matching users. Account restrictions immediately revoke active sessions.</p>${adminSearchBar('users',['all','active','suspended','banned'])}${d.users.length?d.users.map(x=>`<article class="admin-record"><div class="admin-record-head"><div><strong>${e(x.name)} ${x.is_admin?'<span class="tag">Admin</span>':''}</strong><p class="mock-meta">${e(x.email)} · ${e(x.role)} · ${e(x.location||'City not set')}</p></div><span class="tag">${e(x.account_status)}</span></div><p class="mock-meta">${x.job_count} listings · ${x.offer_count} offers · Joined ${adminDate(x.created_at)}</p>${!x.is_admin?`<div class="mini-actions">${x.account_status==='active'?`<button class="mini-btn" data-admin-user="${x.id}:suspended">Suspend</button><button class="mini-btn" data-admin-user="${x.id}:banned">Ban</button>`:`<button class="mini-btn" data-admin-user="${x.id}:active">Restore account</button>${x.account_status==='suspended'?`<button class="mini-btn" data-admin-user="${x.id}:banned">Ban</button>`:''}`}</div>`:'<p class="mock-meta">Protected administrator account</p>'}</article>`).join(''):adminEmpty('No matching users.')}`;
  }else if(tab==='jobs'){
   const d=await api('/admin/jobs?'+new URLSearchParams({q:filters.q||'',status:filters.status||'all',location:filters.location||'',category:filters.category||''}));
   root.innerHTML=`<h2>Job management</h2><p class="mock-meta">Removing a listing hides it from public discovery. Existing bookings, offers and audit records remain preserved.</p>${adminSearchBar('jobs',['all','open','accepted','completed','cancelled','closed','removed'])}<form id="adminJobFeatures" class="admin-job-features"><label>Job location<input name="location" class="control" placeholder="City or area" value="${e(filters.location||'')}"/></label><label>Category<select name="category" class="control"><option value="">All categories</option>${Object.keys(categories).map(cat=>`<option value="${e(cat)}" ${filters.category===cat?'selected':''}>${e(cat)}</option>`).join('')}</select></label><button class="btn btn-secondary" type="submit">Search characteristics</button></form>${d.jobs.length?d.jobs.map(j=>`<article class="admin-record"><div class="admin-record-head"><div><strong>#${j.id} · ${e(j.title)}</strong><p class="mock-meta">Posted by ${e(j.owner_name)} · ${e(j.category)} · ${dollars(j.budget)}</p></div><span class="tag">${e(j.moderation_status==='removed'?'Removed':j.status)}</span></div><p class="mock-meta">${e(j.location)} · ${j.offer_count} offers · ${adminDate(j.created_at)}</p><div class="mini-actions"><button class="mini-btn" data-admin-job="${j.id}:${j.moderation_status==='removed'?'restore':'remove'}">${j.moderation_status==='removed'?'Restore listing':'Remove listing'}</button></div></article>`).join(''):adminEmpty('No matching jobs.')}`;
  }else if(tab==='reports'){
   const d=await api('/admin/reports?'+new URLSearchParams({status:filters.status||'all'}));
   root.innerHTML=`<h2>Reports & disputes</h2><p class="mock-meta">Review user-submitted concerns, then record the outcome. Actions on accounts and listings are separate decisions.</p>${adminSearchBar('reports',['all','open','reviewing','resolved','dismissed'])}${d.reports.length?d.reports.map(r=>`<article class="admin-record"><div class="admin-record-head"><div><strong>Report #${r.id} · ${e(r.category)}</strong><p class="mock-meta">From ${e(r.reporter_name)} · ${e(r.reporter_email)} · ${adminDate(r.created_at)}</p></div><span class="tag">${e(r.status)}</span></div><p class="mock-meta">Reported ${e(r.target_type)} #${r.target_id}</p>${r.target_type==='job'?`<button class="mini-btn" type="button" data-admin-view-job="${r.target_id}">${icon('file',16)} View reported job</button>`:''}<p>${e(r.details)}</p>${r.admin_note?`<div class="inline-note">Internal resolution note: ${e(r.admin_note)}</div>`:''}<div class="mini-actions">${r.status!=='reviewing'?`<button class="mini-btn" data-admin-report="${r.id}:reviewing">Mark reviewing</button>`:''}${r.status!=='resolved'?`<button class="mini-btn" data-admin-report="${r.id}:resolved">Resolve</button>`:''}${r.status!=='dismissed'?`<button class="mini-btn" data-admin-report="${r.id}:dismissed">Dismiss report</button>`:''}</div></article>`).join(''):adminEmpty('No reports in this category.')}`;
  }else if(tab==='analytics'){
   const days=Number(filters.days||30),d=await api('/admin/analytics?days='+days);
   const trimmed=d.trend.length>60?d.trend.filter((x,i)=>i%Math.ceil(d.trend.length/45)===0):d.trend;
   const mx=Math.max(1,...trimmed.flatMap(x=>[x.jobs,x.users]));
   root.innerHTML=`<div class="admin-record-head"><h2>Marketplace analytics</h2><select class="control admin-period" id="adminAnalyticsDays" aria-label="Analytics period">${[7,30,90,365].map(n=>`<option value="${n}" ${n===days?'selected':''}>Last ${n} days</option>`).join('')}</select></div>${adminTiles([['New users',d.stats.new_users],['Jobs posted',d.stats.posted_jobs],['Jobs completed',d.stats.completed_jobs],['Agreed job values',dollars(d.stats.agreed_job_value)]])}<h3>New users and jobs by date</h3><div class="admin-chart" role="img" aria-label="Date-based chart of new users and posted jobs">${trimmed.map(x=>`<div class="admin-chart-day" title="${e(x.date)}: ${x.users} users, ${x.jobs} jobs"><div class="admin-chart-bars"><div class="admin-chart-bar users" style="height:${Math.max(2,x.users/mx*100)}%"></div><div class="admin-chart-bar jobs" style="height:${Math.max(2,x.jobs/mx*100)}%"></div></div></div>`).join('')}</div><p class="mock-meta">Blue: new users · Green: posted jobs. Hover to see dates and counts. Financial values are agreed job prices, not processed payments.</p><h3>Top categories</h3><div class="admin-category-list">${d.categories.map(x=>`<div class="admin-brief"><strong>${e(x.category)}</strong><span>${x.count} jobs</span></div>`).join('')||'<p>No jobs in this date range.</p>'}</div>`;
  }else if(tab==='activity'){
   const d=await api('/admin/activity');
   root.innerHTML=`<h2>Administrator activity log</h2><p class="mock-meta">Recent moderation decisions are recorded here. Logs are stored in this local SQLite database.</p>${d.events.length?d.events.map(a=>`<div class="admin-brief"><strong>${e(a.actor_name)} · ${e(a.action.replaceAll('_',' '))}</strong><span>${e(a.target_type)} #${a.target_id??'—'} · ${adminDate(a.created_at)}</span>${a.note?`<p class="mock-meta">${e(a.note)}</p>`:''}</div>`).join(''):adminEmpty('No administrator actions yet.')}`;
  }else if(tab==='settings'){
   const d=await api('/admin/settings');
   root.innerHTML=`<h2>Platform settings</h2><p class="mock-meta">Adjust the homepage notice and community guidelines. These are not email, payment or automated moderation systems.</p><form id="adminSettingsForm"><div class="field"><label>Marketplace announcement</label><textarea class="control" name="announcement" maxlength="300" rows="3" placeholder="Optional homepage notice">${e(d.announcement||'')}</textarea></div><div class="field"><label>Community guidelines</label><textarea class="control" name="community_guidelines" maxlength="2500" rows="8" placeholder="Rules that users should follow">${e(d.community_guidelines||'')}</textarea></div><button class="btn btn-primary" type="submit">Save platform settings</button></form>`;
  }
  // Bind interactions after content is replaced; never expose admin APIs to ordinary users.
  root.querySelectorAll('[data-admin-jump]').forEach(b=>b.onclick=()=>{state.adminTab=b.dataset.adminJump;render()});
  const form=$('adminSearchForm');if(form)form.onsubmit=ev=>{ev.preventDefault();state.adminFilters[tab]={...state.adminFilters[tab],...Object.fromEntries(new FormData(form))};loadAdminTab()};
   const features=$('adminJobFeatures');if(features)features.onsubmit=ev=>{ev.preventDefault();state.adminFilters.jobs={...(state.adminFilters.jobs||{}),...Object.fromEntries(new FormData(features))};loadAdminTab()};
  root.querySelectorAll('[data-admin-verify]').forEach(b=>b.onclick=async()=>{
   const [id,action]=b.dataset.adminVerify.split(':'),note=prompt(`Internal note for ${action} (optional):`);if(note===null)return;
   if(!confirm(`${action==='approve'?'Approve':action==='deny'?'Deny':'Revoke'} this worker's verification status?`))return;
   await adminDecision(`/admin/verifications/${id}`,{action,note},'Verification decision saved and worker notified.');
  });
  root.querySelectorAll('[data-admin-user]').forEach(b=>b.onclick=async()=>{
   const [id,status]=b.dataset.adminUser.split(':');const reason=prompt(`Reason for ${status} (required; saved in admin log):`);if(!reason||reason.trim().length<5)return;
   if(!confirm(`Change user #${id} to ${status}?`))return;
   await adminDecision(`/admin/users/${id}/status`,{status,reason},'Account status updated.');
  });
  root.querySelectorAll('[data-admin-job]').forEach(b=>b.onclick=async()=>{
   const [id,action]=b.dataset.adminJob.split(':');const reason=prompt(`Reason to ${action} listing #${id}:`);if(!reason||reason.trim().length<5)return;
   if(!confirm(`${action==='remove'?'Hide':'Restore'} listing #${id}?`))return;
   await adminDecision(`/admin/jobs/${id}/moderation`,{remove:action==='remove',reason},'Listing moderation saved.');
  });
  root.querySelectorAll('[data-admin-view-job]').forEach(b=>b.onclick=()=>openAdminJobDetails(Number(b.dataset.adminViewJob)));
  root.querySelectorAll('[data-admin-report]').forEach(b=>b.onclick=async()=>{
   const [id,status]=b.dataset.adminReport.split(':'),note=prompt(`Internal note for report #${id} (optional):`);if(note===null)return;
   await adminDecision(`/admin/reports/${id}/review`,{status,note},'Report updated.');
  });
  if($('adminAnalyticsDays'))$('adminAnalyticsDays').onchange=ev=>{state.adminFilters.analytics={days:ev.target.value};loadAdminTab()};
  if($('adminSettingsForm'))$('adminSettingsForm').onsubmit=async ev=>{ev.preventDefault();try{await api('/admin/settings','PUT',Object.fromEntries(new FormData(ev.target)));state.siteSettings=await api('/site-settings');toast('Platform settings saved.')}catch(err){toast(err.message)}};
 }catch(err){if($('adminContent'))root.innerHTML=`<div class="inline-note">${e(err.message)}</div>`;}
}
async function openAdminJobDetails(id){
 if(!state.me?.is_admin)return toast('Administrator access required.');
 try{const j=await api(`/admin/jobs/${id}`);
  modal(`${modalHead('Job #'+j.id+' · '+e(j.title),'ADMIN / READ-ONLY JOB DETAILS')}<div class="detail-grid"><div class="detail-box"><span>Status</span><strong>${e(j.status)}</strong></div><div class="detail-box"><span>Budget</span><strong>${dollars(j.budget)}</strong></div><div class="detail-box"><span>Category</span><strong>${e(j.category)}</strong></div></div><p><strong>Posted by:</strong> ${e(j.owner_name)}</p><p><strong>Location:</strong> ${e(j.location||'Not specified')}</p><p><strong>Moderation:</strong> ${e(j.moderation_status)}</p><h3>Job description</h3><p class="detail-description">${e(j.description)}</p><p class="mock-meta">Created ${adminDate(j.created_at)} · ${j.offer_count} offers</p><div class="hero-actions"><button type="button" class="btn btn-secondary" data-dismiss>Close job details</button></div>`);
 }catch(err){toast('Unable to view job: '+err.message)}
}
function showReportDialog(type,id,forcedCategory=''){
 if(!requireLogin('report a concern'))return;
 const categories=[['spam','Spam or irrelevant'],['fraud','Suspected scam or fraud'],['harassment','Harassment'],['safety','Safety concern'],['dispute','Job dispute'],['other','Other']];
 modal(`${modalHead(forcedCategory==='dispute'?'Open a job dispute':'Report '+(type==='job'?'listing':'worker'),'TRUST & SAFETY')}<p class="mock-meta">A HomeTask administrator can review reports. For urgent safety concerns, contact local emergency services.</p><form id="reportForm" class="stack"><div class="field"><label>Reason</label><select class="control" name="category">${categories.filter(x=>!forcedCategory||x[0]===forcedCategory).map(([value,label])=>`<option value="${value}">${label}</option>`).join('')}</select></div><div class="field"><label>What happened?</label><textarea class="control" name="details" minlength="12" maxlength="1500" rows="5" placeholder="Describe the situation clearly so an administrator can review it." required></textarea></div><div class="hero-actions"><button class="btn btn-primary" type="submit">Submit report</button><button class="btn btn-secondary" type="button" data-dismiss>Cancel</button></div></form>`);
 $('reportForm').onsubmit=async ev=>{ev.preventDefault();const fd=new FormData(ev.target);try{await api('/reports','POST',{target_type:type,target_id:id,category:fd.get('category'),details:fd.get('details')});closeModal();toast('Report sent to HomeTask administration.')}catch(err){toast(err.message)}};
 document.querySelectorAll('#modalRoot [data-dismiss]').forEach(b=>b.onclick=closeModal);
}

// HomeTask 13.9: profile safety menu, onboarding, accounts, worker preferences.
async function toggleBlockProfile(){
 const u=state.publicProfile;if(!u||state.me?.id===u.id)return;
 const action=u.is_blocked?'unblock':'block';
 if(!confirm(`${action==='block'?'Block':'Unblock'} ${u.name}? ${action==='block'?'They will not be able to send new offers, invitations, follows, or messages to you. Existing job records remain.':''}`))return;
 try{await api(`/users/${u.id}/block`,u.is_blocked?'DELETE':'POST');await refresh();
  state.publicProfile=await api(`/workers/${u.id}`);render();toast(u.is_blocked?'User unblocked.':'User blocked.');
 }catch(err){toast(err.message)}
}
function previewDraftJob(){
 const f=$('postJobForm');if(!f)return;
 if(!f.reportValidity())return;
 const d=Object.fromEntries(new FormData(f));
 const duration=durationText(Number(d.duration_minutes||120));
 modal(`${modalHead('Preview your listing','BEFORE YOU PUBLISH')}<div class="listing-preview"><span class="tag">${e(d.category)}</span><h2>${e(d.title)}</h2><p>${e(d.description)}</p><p class="mock-meta">${icon('pin',15)} ${e(d.location)} · ${e(duration)}</p><h3>Budget: ${dollars(Number(d.budget)||0)}</h3>${d.offer_deadline?`<p class="mock-meta">Offer deadline: ${e(d.offer_deadline)}</p>`:''}<p class="inline-note">Your exact address is visible only to you and the worker you hire. Once you publish, eligible workers can send offers.</p></div><div class="hero-actions"><button type="button" class="btn btn-secondary" id="previewBack">Back to editing</button><button type="button" class="btn btn-primary" id="previewPublish">${f.dataset.id?'Save changes':'Publish task'}</button></div>`);
 $('previewBack').onclick=closeModal;
 $('previewPublish').onclick=()=>{closeModal();f.requestSubmit();};
}
function accountSecurityPage(){
 if(!state.me)return signInPrompt();
 const verified=!!state.me.email_verified;
 return `<section class="page workspace-page"><div class="page-title"><span class="kicker">ACCOUNT / SECURITY</span><h1>Security & privacy</h1><p>Manage passwords, email confirmation, saved accounts and your personal data.</p></div>
 <div class="form-layout"><div class="panel"><h3>Change password</h3><form id="changePasswordForm" class="stack"><div class="field"><label>Current password</label><input type="password" class="control" name="current_password" autocomplete="current-password" required/></div><div class="field"><label>New password</label><input type="password" class="control" name="new_password" minlength="8" maxlength="128" autocomplete="new-password" required/></div><p class="mock-meta">Changing your password signs out every device.</p><button class="btn btn-primary" type="submit">Update password</button></form><hr/><h3>Email verification</h3><p class="mock-meta">${verified?'Your account email is confirmed.':'Your email is not yet confirmed. Verification emails require the server owner to configure SMTP.'}</p>${verified?'<span class="tag">Email confirmed</span>':'<button class="mini-btn" id="resendVerification">Send verification email</button>'}<hr/><h3>Blocked users</h3><div id="blockedUsersList">Loading…</div></div>
 <aside class="panel"><h3>Your information</h3><p class="mock-meta">Download a JSON export of your account data and activity.</p><button class="btn btn-secondary" id="exportAccount">Export my data</button><hr/><h3>Delete my account</h3><p class="mock-meta">This removes your public profile, removes your active listings, clears sessions, and anonymizes your account. Job/message history may be retained for marketplace records. Active accepted jobs must be finished or cancelled first.</p><button class="btn btn-secondary danger-action" id="deleteAccount">Delete account</button><div class="inline-note" style="margin-top:14px">This is a local capstone build. For production we also need a retention policy, audited account recovery and managed email delivery.</div></aside></div></section>`;
}
function bindAccountSecurity(){
 const f=$('changePasswordForm');if(f)f.onsubmit=async ev=>{ev.preventDefault();const d=Object.fromEntries(new FormData(f));if(!confirm('Change password and sign out of all devices?'))return;
  try{await api('/account/password','POST',d);state.me=null;resetNotificationsForAccount();await refresh();nav('home');toast('Password updated. Log in with the new password.')}catch(err){toast(err.message)}};
 if($('resendVerification'))$('resendVerification').onclick=async()=>{try{await api('/account/resend-verification','POST');toast('Verification email requested.')}catch(err){toast(err.message)}};
 if($('exportAccount'))$('exportAccount').onclick=async()=>{try{const data=await api('/account/export');const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='hometask-account-export.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}catch(err){toast(err.message)}};
 if($('deleteAccount'))$('deleteAccount').onclick=async()=>{if(prompt('Type DELETE to permanently deactivate and anonymize your account:')!=='DELETE')return;
  try{await api('/account','DELETE');state.me=null;resetNotificationsForAccount();await refresh();nav('home');toast('Account deleted. Some historic job records are retained.')}catch(err){toast(err.message)}};
 const box=$('blockedUsersList');if(box)box.innerHTML=state.blockedUsers.length?state.blockedUsers.map(x=>`<div class="blocked-user-line"><span>${e(x.name)}</span><button class="mini-btn" data-unblock-id="${x.id}">Unblock</button></div>`).join(''):'<p class="mock-meta">No blocked users.</p>';
 document.querySelectorAll('[data-unblock-id]').forEach(x=>x.onclick=async()=>{try{await api(`/users/${Number(x.dataset.unblockId)}/block`,'DELETE');await refresh();render();toast('User unblocked.')}catch(err){toast(err.message)}});
}
function showForgotPassword(){
 modal(`${modalHead('Reset your password','ACCOUNT RECOVERY')}<p class="mock-meta">Enter the email address associated with your HomeTask account. A reset link can be sent when SMTP email delivery is configured.</p><form id="forgotPasswordForm"><div class="field"><label>Email address</label><input class="control" type="email" name="email" autocomplete="email" required/></div><button class="btn btn-primary" type="submit">Request reset link</button></form>`);
 $('forgotPasswordForm').onsubmit=async ev=>{ev.preventDefault();try{const d=await api('/account/password-reset-request','POST',Object.fromEntries(new FormData(ev.target)));closeModal();toast(d.configured?'If that account exists, check its email for instructions.':'Email delivery is not configured on this local server.')}catch(err){toast(err.message)}};
}
function checkAccountLinkOnLoad(){
 const q=new URLSearchParams(window.location.search);const reset=q.get('reset_password'),verify=q.get('verify_email');
 if(!reset&&!verify)return;
 history.replaceState(null,'',location.pathname);
 if(verify){api('/account/verify-email','POST',{token:verify}).then(async()=>{await refresh();render();toast('Email verified!')}).catch(err=>toast(err.message));return;}
 modal(`${modalHead('Choose a new password','PASSWORD RESET')}<form id="resetPasswordForm"><div class="field"><label>New password</label><input type="password" name="new_password" class="control" minlength="8" maxlength="128" required/></div><button class="btn btn-primary" type="submit">Reset password</button></form>`);
 $('resetPasswordForm').onsubmit=async ev=>{ev.preventDefault();try{await api('/account/reset-password','POST',{token:reset,new_password:new FormData(ev.target).get('new_password')});closeModal();toast('Password reset. You can log in now.');showAuth()}catch(err){toast(err.message)}};
}
function workerPreferencesPage(){
 if(!state.me||role()!=='worker')return signInPrompt();const pref=state.workerPreferences||{categories:[],radius_miles:25};
 return `<section class="page workspace-page"><div class="page-title"><span class="kicker">HOMETASKER</span><h1>Job matching preferences</h1><p>Choose preferences to prioritize jobs. Other open tasks remain available.</p></div><form class="panel" id="workerPreferencesForm"><div class="field"><label>Preferred nearby distance (straight-line miles)</label><input class="control" type="number" name="radius_miles" min="1" max="100" value="${Number(pref.radius_miles)||25}" required/></div><h3>Preferred categories</h3><p class="mock-meta">Preferred categories boost relevant jobs. Leave unchecked to recommend all categories.</p><div class="preference-grid">${Object.keys(categories).map(cat=>`<label class="pref-check"><input type="checkbox" name="categories" value="${e(cat)}" ${pref.categories?.includes(cat)?'checked':''}/>${e(cat)}</label>`).join('')}</div><button class="btn btn-primary" type="submit">Save preferences</button></form></section>`;
}
function bindWorkerPreferences(){const f=$('workerPreferencesForm');if(f)f.onsubmit=async ev=>{ev.preventDefault();const data={categories:[...f.querySelectorAll('input[name="categories"]:checked')].map(x=>x.value),radius_miles:Number(f.elements.radius_miles.value)};try{await api('/worker-preferences','PUT',data);state.workerPreferences=data;render();toast('Job preferences saved.')}catch(err){toast(err.message)}}}
async function loadSandboxStatus(){
 const node=$('sandboxStatus');if(!node)return;
 try{
  const info=await api('/payments/sandbox-status');
  const ready=info.sandbox_checkout_ready;
  node.innerHTML=`<h3>Stripe sandbox connection</h3><p class="mock-meta"><strong>${ready?'Test checkout configured':info.mode==='configuration_error'?'Configuration incomplete':'Demo mode: sandbox not configured on this server'}</strong></p><p class="mock-meta">${ready?'Customers can be redirected to Stripe-hosted TEST Checkout. No real card charges.':'To enable test checkout, configure the sandbox API key and signed webhook secret in the Terminal running HomeTask.'}</p><p class="mock-meta">${info.account_pin_configured?'Sandbox account restriction enabled: '+e(info.sandbox_account_id||'invalid ID'):'Account pin is not configured. Add HOMETASK_STRIPE_EXPECTED_ACCOUNT_ID to restrict the checkout to your HomeTask sandbox.'}</p><p class="mock-meta">Worker TEST transfers require completed onboarding and an eligible, approved task. Production payouts remain disabled.</p><button class="mini-btn" id="refreshSandboxStatus" type="button">Check status again</button>`;
  const b=$('refreshSandboxStatus');if(b)b.onclick=()=>{loadSandboxStatus();if(role()==='worker')loadWorkerConnectStatus()};
  loadPendingCheckoutRecovery();
 }catch(err){node.textContent='Sandbox connection check failed: '+err.message}
}
async function loadPendingCheckoutRecovery(){
 const node=$('sandboxStatus');if(!node||role()!=='customer')return;
 try{
  const results=await api('/payments/pending-checkouts');
  if(!node.isConnected||!results.checkouts?.length)return;
  const wrap=document.createElement('div');wrap.className='ht-checkout-recovery';
  wrap.innerHTML='<p class="mock-meta"><strong>Already paid for a task, but the worker is not shown as hired?</strong> Verify an existing Stripe test checkout instead of paying again.</p>'+results.checkouts.map((x,i)=>`<button class="mini-btn" data-checkout-recover="${i}" type="button">Check payment for ${e(x.title)} (task #${Number(x.job_id)})</button>`).join(' ');
  node.appendChild(wrap);
  wrap.querySelectorAll('[data-checkout-recover]').forEach(button=>button.onclick=async()=>{
   const item=results.checkouts[Number(button.dataset.checkoutRecover)];
   button.disabled=true;button.textContent='Checking Stripe…';
   try{
    const verified=await api('/payments/checkout-confirm/'+encodeURIComponent(item.checkout_session_id),'POST');
    if(verified.confirmed){await refresh();nav('dashboard');modal(`${modalHead('Payment complete!','BOOKING CONFIRMED')}<div class="ht-hire-success-icon">${icon('check',32)}</div><h3>Your worker has been hired!</h3><p>Stripe verified your test payment. Your worker is now assigned to the task.</p><div class="hero-actions"><button class="btn btn-primary" id="openConfirmedTask">View booked task</button><button class="btn btn-secondary" id="doneConfirmedTask">Dashboard</button></div>`);$('openConfirmedTask').onclick=()=>openJob(verified.job_id);$('doneConfirmedTask').onclick=()=>nav('dashboard');}
    else{button.disabled=false;button.textContent='Not confirmed yet. Check again';toast('Stripe has not confirmed payment for this task. No worker hired.');}
   }catch(err){button.disabled=false;button.textContent='Try verification again';toast(err.message)}
  });
 }catch(err){/* Optional recovery tool does not block normal payments. */}
}

async function loadWorkerConnectStatus(){
 const root=$('workerConnectPanel');if(!root)return;
 root.innerHTML='<h3>Worker Stripe Connect · TEST</h3><p class="mock-meta" role="status">Checking this worker\'s Stripe account…</p>';
 try{
  const st=await api('/connect/worker-status');
  if(!root.isConnected)return;
  const connected=!!st.connected,ready=!!st.transfers_ready;
  const description=!connected?'No Stripe worker account is linked to this HomeTask login yet.':ready?'Your worker account can receive Stripe TEST transfers.':'Your Stripe worker account exists, but onboarding or verification is incomplete.';
  root.innerHTML=`<h3>Worker Stripe Connect · TEST</h3><p class="mock-meta" role="status"><strong>${ready?'Ready for TEST transfers':connected?'Setup incomplete':'Not connected'}</strong> · ${description}</p>${connected?`<p class="mock-meta">Account: ${e(st.account_reference||'Connected')} · Identity: ${st.details_submitted?'Submitted':'Pending'} · Transfers: ${ready?'Enabled':'Not enabled yet'}</p>`:''}<div class="hero-actions"><button type="button" class="mini-btn" id="refreshWorkerConnectStatus">Check worker Stripe status</button>${!ready?`<button type="button" class="btn btn-primary" id="startConnectWorker">${connected?'Resume Stripe onboarding':'Connect Stripe (sandbox)'}</button>`:''}</div><p class="mock-meta">Stripe collects identity and payout information securely. TEST transfers do not move real money.</p>`;
  const refresh=$('refreshWorkerConnectStatus');if(refresh)refresh.onclick=()=>loadWorkerConnectStatus();
  const start=$('startConnectWorker');if(start)start.onclick=async()=>{start.disabled=true;start.textContent='Opening Stripe…';try{const d=await api('/connect/start','POST');window.location.assign(d.url)}catch(err){toast(err.message);start.disabled=false;start.textContent=connected?'Retry Stripe onboarding':'Retry connecting Stripe';}};
 }catch(err){
  if(!root.isConnected)return;
  root.innerHTML=`<h3>Worker Stripe Connect · TEST</h3><p class="mock-meta" role="alert">Couldn't check this worker's Stripe account: ${e(err.message)}</p><button type="button" class="mini-btn" id="retryWorkerConnectStatus">Retry worker status check</button><p class="mock-meta">This does not mean your existing Stripe account was deleted. Do not create another account until we verify the connection.</p>`;
  $('retryWorkerConnectStatus').onclick=()=>loadWorkerConnectStatus();
 }
}

function paymentReadinessPage(){if(!state.me)return signInPrompt();return `<section class="page workspace-page"><div class="page-title"><span class="kicker">HOMETASK / TRANSACTIONS</span><h1>Payments & fees</h1><p>${role()==='worker'?'Every agreed offer includes a 10% HomeTask fee. Track expected net payouts.':'Review task prices and the status of your bookings.'}</p></div><div class="inline-note">${role()==='worker'?'Example: $100 agreed job − $10 HomeTask fee = $90 expected worker payout.': 'Customers see only their own checkout breakdown. Worker payout details are not included in your payment history.'} This is a development prototype. Payments in Stripe test mode do not move real money; production checkout and payouts are not live.</div><div class="ht-payment-flow panel"><h3>How HomeTask payments work</h3><div class="ht-payment-stages"><span>1. Customer selects a worker</span><span>2. Customer completes checkout</span><span>3. Work is submitted and approved</span><span>4. Worker transfer becomes due</span></div><p class="mock-meta">Eligible tasks can send test-only Stripe transfers after customer approval or the 48-hour review window. A Stripe transfer is not a real bank deposit. Production payouts and refund automation remain disabled.</p></div><div class="panel" id="sandboxStatus">Checking Stripe sandbox configuration…</div>${role()==='worker'?'<div class="panel" id="workerConnectPanel">Checking worker Stripe Connect status…</div>':''}<div class="panel" id="paymentReadinessContent">Loading payment records…</div></section>`;}
async function loadPaymentReadiness(){const root=$('paymentReadinessContent');if(!root)return;try{
 const d=await api('/payments/overview'),isWorker=role()==='worker';
 root.innerHTML=`<h3>${isWorker?'Worker payout estimates':'Customer payment history'} · ${d.provider_mode==='stripe_test'?'Stripe TEST mode':'Unfunded demo'}</h3><p class="mock-meta">${d.live_payments_enabled?'Live payments enabled.':'Live charging and bank payouts are disabled.'}</p>${d.transactions.length?d.transactions.map(x=>`<div class="payment-plan-line ht-payment-history-line"><div><strong>${e(x.title)}</strong><p class="mock-meta">Task #${x.job_id} · ${e(x.job_status)} · ${e(x.payment_status==='paid_test'?'Test payment recorded':x.payment_status==='unfunded_demo'?'Unfunded demo':'Not paid')} ${isWorker?'· Transfer: '+e(x.transfer_status):''}${x.review_deadline_at?' · Review deadline: '+e(new Date(x.review_deadline_at*1000).toLocaleString()):''}${x.review_blocked?' · Dispute hold active':''}</p>${isWorker?`<p class="mock-meta">Agreed: ${moneyCents(x.agreed_job_value*100)} · HomeTask (10%): −${moneyCents(x.commission_cents)}</p>`:`<p class="mock-meta">Task price: ${moneyCents(x.agreed_price_cents)} · Customer service fee: ${moneyCents(x.service_fee_cents)}</p>`}${isWorker&&x.payment_status==='paid_test'&&x.job_status==='completed'&&x.transfer_status==='awaiting_connect_transfer'&&!x.review_blocked?`<button class="mini-btn" data-test-transfer="${x.job_id}">Send eligible TEST transfer</button>`:''}</div><strong>${isWorker?moneyCents(x.net_payout_cents):moneyCents(x.checkout_total_cents)}</strong></div>`).join(''):'<div class="empty">No hired tasks yet.</div>'}`;
 root.querySelectorAll('[data-test-transfer]').forEach(b=>b.onclick=async()=>{if(!confirm('Send this eligible sandbox worker transfer now? No real money will move.'))return;b.disabled=true;try{const r=await api('/connect/test-transfer/'+b.dataset.testTransfer,'POST');toast('Stripe test transfer completed: '+moneyCents(r.amount_cents));loadPaymentReadiness()}catch(err){toast(err.message);b.disabled=false}});
}catch(err){root.textContent=err.message}}
function notificationCategory(n){const k=String(n?.kind||'');if(k.startsWith('verification')||k.startsWith('admin_')||k.startsWith('report_'))return 'Account & safety';if(k.includes('message'))return 'Messages';if(k.includes('offer')||k.includes('counter'))return 'Offers';if(k.includes('schedule')||k.includes('reschedule'))return 'Appointments';if(k.includes('review'))return 'Reviews';return 'Jobs & updates';}

// HomeTask 15.0: accessible dialog dismissal and consistent interaction.
document.addEventListener('keydown',ev=>{if(ev.key==='Escape'&&document.getElementById('modalBackdrop')){closeModal();}});

// Presentation-only disclosure, enabled by the server's isolated demo mode.
(async function discloseDemoMode(){
 try{
  const r=await fetch('/api/demo/status',{cache:'no-store'});
  if(!r.ok || !(await r.json()).demo)return;
  document.body.classList.add('hometask-demo-active');
  const banner=document.createElement('div');
  banner.className='hometask-demo-banner';
  banner.setAttribute('role','status');
  banner.textContent='PRESENTATION DEMO · All accounts, tasks, reviews, offers and activity shown here are fictional. No real payments.';
  document.body.appendChild(banner);
 }catch(e){/* Normal production UI is unchanged. */}
})();


// HomeTask 15.10.1: Worker homepage nav floats over the hero, then gains a solid backdrop.
(function initializeWorkerTransparentNav(){
  const update = () => {
    document.body.classList.toggle('ht-worker-nav-scrolled', window.scrollY > 36);
  };
  window.addEventListener('scroll', update, {passive:true});
  window.addEventListener('pageshow', update);
  update();
})();



function ht142SyncCategoryLabel(){const select=$('categoryFilter');if(!select)return;const btn=select.closest('.ht138-select-host')?.querySelector('.ht138-select-trigger');if(btn)btn.textContent=(select.options[select.selectedIndex]?.textContent||'All categories')+'  ▾';}
// 15.13.46: accessible, non-interfering animated examples for the Find Jobs search.
let ht142SearchTimer=null;
let ht1546SuggestionTimeout=null;
function ht142SearchHints(){
 clearInterval(ht142SearchTimer);
 clearTimeout(ht1546SuggestionTimeout);
 const input=$('searchInput');
 const suggestion=input?.closest('.ht1546-search-wrap')?.querySelector('.ht1546-search-suggestion');
 if(!input||!suggestion)return;
 const examples=['painting','lawn mowing','house cleaning','moving help','furniture assembly','yard cleanup','TV mounting','window cleaning','flooring','garage organization','home repairs','shelf installation','leaf removal','deck staining','fence repair','pressure washing','appliance installation','landscaping','drywall repair','packing help'];
 const reducedMotion=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
 let current=0;
 const show=()=>{
  const idle=document.activeElement!==input&&!input.value;
  suggestion.hidden=!idle;
  input.placeholder=idle?'':'Search jobs...';
 };
 const advance=()=>{
  if(!input.isConnected){clearInterval(ht142SearchTimer);clearTimeout(ht1546SuggestionTimeout);return;}
  if(document.activeElement===input||input.value)return;
  if(reducedMotion){current=(current+1)%examples.length;suggestion.textContent=`Try “${examples[current]}”`;return;}
  suggestion.classList.add('ht1546-suggestion-exit');
  ht1546SuggestionTimeout=setTimeout(()=>{
   if(!input.isConnected)return;
   current=(current+1)%examples.length;
   suggestion.textContent=`Try “${examples[current]}”`;
   suggestion.classList.remove('ht1546-suggestion-exit');
   show();
  },190);
 };
 input.addEventListener('focus',()=>{clearTimeout(ht1546SuggestionTimeout);suggestion.classList.remove('ht1546-suggestion-exit');show();});
 input.addEventListener('blur',show);
 input.addEventListener('input',show);
 show();
 if(!reducedMotion)ht142SearchTimer=setInterval(advance,3900);
}
// Two draggable endpoints sharing ONE track, plus optional precise dollar inputs.
let ht142BudgetOutsideBound=false;
function ht142BindBudget(){
 const toggle=$('ht142BudgetToggle'),panel=$('ht142BudgetPanel'),min=$('ht142RangeMin'),max=$('ht142RangeMax'),minNum=$('ht142BudgetMin'),maxNum=$('ht142BudgetMax'),fill=$('ht142RangeFill');
 if(!toggle||!panel)return;
 const ceiling=2000;
 const draw=()=>{
  const lower=Math.min(ceiling,Number(state.budgetMin)||0), upper=Math.min(ceiling,Number(state.budgetMax)||ceiling);
  min.value=lower;max.value=upper;minNum.value=state.budgetMin||0;maxNum.value=state.budgetMax||'';
  fill.style.left=(lower/ceiling*100)+'%';fill.style.right=((ceiling-upper)/ceiling*100)+'%';
  toggle.innerHTML=(state.budgetMin||state.budgetMax?('$'+(state.budgetMin||0)+' – '+(state.budgetMax?'$'+state.budgetMax:'Any max')):'Any budget')+' <span aria-hidden="true">⌄</span>';
 };
 const set=(which,value)=>{
  let v=Math.max(0,Math.round(Number(value)||0));
  if(which==='min'){state.budgetMin=v;if(state.budgetMax&&v>state.budgetMax)state.budgetMax=v;}
  else{state.budgetMax=v;if(v&&v<state.budgetMin)state.budgetMin=v;}
  draw();filterJobs();
 };
 min.oninput=()=>set('min',min.value);max.oninput=()=>set('max',max.value);
 minNum.onchange=()=>set('min',minNum.value);maxNum.onchange=()=>set('max',maxNum.value);
 $('ht142BudgetReset').onclick=()=>{state.budgetMin=0;state.budgetMax=0;draw();filterJobs();};
 toggle.onclick=()=>{panel.hidden=!panel.hidden;toggle.setAttribute('aria-expanded',String(!panel.hidden));};
 if(!ht142BudgetOutsideBound){ht142BudgetOutsideBound=true;document.addEventListener('pointerdown',ev=>{const pop=$('ht142BudgetPanel'),button=$('ht142BudgetToggle');if(pop&&!pop.hidden&&!pop.contains(ev.target)&&button&&!button.contains(ev.target)){pop.hidden=true;button.setAttribute('aria-expanded','false');}});}
 draw();
}

// HomeTask 15.13.38: anchored, accessible dropdowns; never use native menus that
// macOS places over the button. Original <select> remains for existing handlers.
let ht138DropdownOutsideBound=false;
function ht138EnhanceDropdowns(){
 const selects=[...document.querySelectorAll('#jobSort, #categoryFilter, [data-compact-filter]')];
 selects.forEach(select=>{
  if(select.dataset.ht138Enhanced)return;
  select.dataset.ht138Enhanced='1';
  const host=document.createElement('div');host.className='ht138-select-host';if(select.hasAttribute('data-compact-filter'))host.classList.add('ht139-status-select');
  select.parentNode.insertBefore(host,select);host.appendChild(select);
  select.classList.add('ht138-native-select');select.tabIndex=-1;
  const trigger=document.createElement('button');trigger.type='button';trigger.className='ht138-select-trigger';
  trigger.setAttribute('aria-haspopup','listbox');trigger.setAttribute('aria-expanded','false');
  const name=select.getAttribute('aria-label')||select.id||'Filter';
  trigger.setAttribute('aria-label',name);
  const menu=document.createElement('div');menu.className='ht138-select-menu';menu.setAttribute('role','listbox');menu.hidden=true;
  const sync=()=>{const selected=select.options[select.selectedIndex];trigger.textContent=(selected?.textContent||'Select')+'  ▾';};
  const close=()=>{menu.hidden=true;trigger.setAttribute('aria-expanded','false');host.classList.remove('is-open');};
  Array.from(select.options).forEach(option=>{
   const item=document.createElement('button');item.type='button';item.className='ht138-select-option';
   item.setAttribute('role','option');item.textContent=option.textContent;
   item.dataset.value=option.value;
   item.onclick=()=>{select.value=option.value;select.dispatchEvent(new Event('change',{bubbles:true}));sync();close();};
   menu.appendChild(item);
  });
  trigger.onclick=()=>{
   const opening=menu.hidden;
   document.querySelectorAll('.ht138-select-host.is-open').forEach(other=>{
    other.querySelector('.ht138-select-menu').hidden=true;
    other.querySelector('.ht138-select-trigger').setAttribute('aria-expanded','false');
    other.classList.remove('is-open');
   });
   if(!opening)return;
   menu.hidden=false;host.classList.add('is-open');trigger.setAttribute('aria-expanded','true');
   menu.querySelectorAll('[role="option"]').forEach(node=>node.setAttribute('aria-selected',String(node.dataset.value===select.value)));
  };
  trigger.onkeydown=event=>{
   if(event.key==='Escape'){close();return;}
   if(event.key==='ArrowDown'||event.key==='Enter'||event.key===' '){event.preventDefault();if(menu.hidden)trigger.click();menu.querySelector('[aria-selected="true"]')?.focus()||menu.querySelector('button')?.focus();}
  };
  menu.onkeydown=event=>{
   if(event.key==='Escape'){close();trigger.focus();event.preventDefault();return;}
   if(event.key==='ArrowUp'||event.key==='ArrowDown'){
    const items=[...menu.querySelectorAll('button')],i=items.indexOf(document.activeElement);items[(i+(event.key==='ArrowDown'?1:-1)+items.length)%items.length]?.focus();event.preventDefault();
   }
  };
  host.append(trigger,menu);sync();
 });
 if(!ht138DropdownOutsideBound){
  ht138DropdownOutsideBound=true;
  document.addEventListener('pointerdown',event=>{
   document.querySelectorAll('.ht138-select-host.is-open').forEach(host=>{
    if(host.contains(event.target))return;
    host.classList.remove('is-open');const menu=host.querySelector('.ht138-select-menu');if(menu)menu.hidden=true;
    host.querySelector('.ht138-select-trigger')?.setAttribute('aria-expanded','false');
   });
  });
 }
}
