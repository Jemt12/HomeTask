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
const state={me:null,jobs:[],offers:[],invitations:[],reviews:[],deletedReviews:[],conversations:[],activeConversation:null,chatMessages:[],publicProfile:null,returnView:'dashboard',earnings:null,view:'home',detail:null,partner:null,mapMode:localStorage.getItem('hometask_browse_mode')==='map'?'map':'list',jobFilter:'all',appointmentFilter:'all',historyStatus:'all',historyCategory:'all',historySort:'newest',historyQuery:'',historyFrom:'',historyTo:'',offerFilter:'current',conversationFilter:'all',earningsRange:'period',earningsGroup:'month',earningsStart:'',earningsEnd:'',nearbyCenter:null,nearbyLabel:'',nearbyRadius:0,personalGeo:null,featuredCenter:null,featuredLocationKey:'',featuredLocationStatus:'ready',browseFeaturedOnly:false,savedJobIds:[],publicProfileTab:'about',portfolioCategory:'all',profileReviewSort:'newest',hideOwnListings:true,weeklySlots:[],portfolioItems:[],followingWorkers:[],adminTab:'overview',adminFilters:{},siteSettings:{},workerPreferences:{categories:[],radius_miles:25},blockedUsers:[],browseFilters:{query:'',category:'',difficulty:'',price:''},mobileFiltersOpen:false,hideOfferedJobs:true,jobSort:'newest',upcomingJobs:[],jobDraft:null,jobDraftLoaded:false,draftItems:[],editingDraftId:null,historyFiltersOpen:false,assignmentFilter:'booked',imageFraming:{banner_x:50,banner_y:50,banner_zoom:100,avatar_x:50,avatar_y:50,avatar_zoom:100}};
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
// HomeTask 13.2 — Featured jobs are matched to the WORKER'S saved skills and area.
// This is a conservative local/skills recommendation, not a count of all marketplace jobs.
const FEATURED_RADIUS_MILES=25;
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
  if(containsSkill(text,term)) score+=10;
  const hints=featuredSkillHints[job.category]||[];
  if(hints.some(h=>term.includes(h)||h.includes(term)))score+=6;
  // Match descriptive keywords (e.g. 'furniture assembly' and 'assemble dresser').
  const keywords=term.split(/\s+/).filter(t=>t.length>=4);
  if(keywords.some(word=>containsSkill(text,word)))score+=2;
 }
 return score;
}
// A single source of truth for featured and browse job-distance origins.
// A deliberate manual area search overrides GPS until My location is selected.
function featuredOrigin(){
 if(ht1543UserPickedLocation && state.nearbyCenter)return {coords:state.nearbyCenter,label:`searched area (${state.nearbyLabel||'selected area'})`,kind:'search'};
 if(state.personalGeo)return {coords:state.personalGeo,label:'your current location',kind:'device'};
 if(state.featuredCenter)return {coords:state.featuredCenter,label:state.me?.location||'your profile city',kind:'profile'};
 return {coords:null,label:'your area',kind:'unknown'};
}
function featuredRadius(){return Math.max(1,Number(state.workerPreferences?.radius_miles)||FEATURED_RADIUS_MILES)}
function featuredJobs(){
 if(!state.me||role()!=='worker')return [];
 const origin=featuredOrigin();if(!origin.coords)return [];
 const terms=skillTerms(),prefs=state.workerPreferences?.categories||[];
 if(!terms.length&&!prefs.length)return [];
 return state.jobs.filter(j=>j.status==='open'&&!mine(j)&&!hasOfferForJob(j)).map(j=>{
  const coords=jobCoordinates(j);if(!coords)return null;
  const distance=milesBetween(origin.coords,coords);
  if(!Number.isFinite(distance)||distance>featuredRadius())return null;
  if(prefs.length&&!prefs.includes(j.category))return null;
  const match=featuredSkillScore(j,terms)+(prefs.includes(j.category)?1:0);
  return match>0?{job:j,score:match,distance}:null;
 }).filter(Boolean).sort((a,b)=>b.score-a.score||a.distance-b.distance||b.job.created_at-a.job.created_at);
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
 if(!skillTerms().length&&!state.workerPreferences?.categories?.length)
  return 'Add your skills or preferred job categories to receive personalized recommendations.';
 const origin=featuredOrigin();
 if(!origin.coords){
  if(state.featuredLocationStatus==='looking-up')return 'Finding jobs near your area…';
  if(state.featuredLocationStatus==='unavailable')return 'Choose My location or add a valid profile city to see nearby jobs.';
  return 'Allow location access or enter a city to find jobs near you.';
 }
 return 'No open jobs currently match both your skills and your selected area. Explore all jobs or expand your distance preferences.';
}
const status=j=>j.status==='open'?(j.offer_count?`${j.offer_count} offer${j.offer_count===1?'':'s'}`:'Open'):({accepted:'In progress',completed:'Completed',closed:'Cancelled',cancelled:'Cancelled'}[j.status]||j.status);
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
function durationText(value){
 const n=Math.round(Number(value)||0), hours=Math.floor(n/60), minutes=n%60;
 if(n===480)return 'Full day (8 hours)';
 if(!hours)return `${minutes} minute${minutes===1?'':'s'}`;
 return `${hours} hour${hours===1?'':'s'}${minutes?` ${minutes} minute${minutes===1?'':'s'}`:''}`;
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
 if(!job&&!draftSlots.length){const start=localDatetime(1440);draftSlots=[{start,end:plusMinutesISO(start,duration)}];}
 return `<div class="schedule-section field full"><h3>Scheduling & availability</h3><p class="mock-meta">Set an estimated duration. The end time will update automatically when you change the start time.</p><div class="field"><label>Estimated duration</label><select class="control" id="durationSelect" name="duration_minutes">${[15,30,45,60,90,120,180,240,480].map(n=>`<option value="${n}" ${duration===n?'selected':''}>${durationText(n)}</option>`).join('')}</select></div><label class="schedule-checkbox"><input type="checkbox" id="flexibleSchedule" ${flex?'checked':''}/> Workers may propose alternative times</label><div id="scheduleSlotList"></div><button type="button" class="mini-btn" id="addSlot">+ Add available time</button><small>Times are in ET (EST or EDT, depending on the date). End times automatically match the estimated duration, but can be adjusted.</small></div>`;
}
function bindScheduleFields(){
 const list=$('scheduleSlotList');if(!list)return;
 const duration=()=>Number($('durationSelect')?.value||120);
 function paint(){list.innerHTML=draftSlots.map((slot,i)=>`<div class="schedule-slot"><span>Option ${i+1}</span><label>Start<input class="control" type="datetime-local" data-time="start" data-i="${i}" value="${e(slot.start)}" /></label><label>End<input class="control" type="datetime-local" data-time="end" data-i="${i}" value="${e(slot.end)}" /></label><button class="mini-btn" type="button" data-remove-slot="${i}">Remove</button></div>`).join('');
  list.querySelectorAll('[data-time]').forEach(x=>x.onchange=()=>{
   const i=Number(x.dataset.i);draftSlots[i][x.dataset.time]=x.value;
   if(x.dataset.time==='start'){draftSlots[i].end=plusMinutesISO(x.value,duration());paint();}
  });
  list.querySelectorAll('[data-remove-slot]').forEach(x=>x.onclick=()=>{draftSlots.splice(Number(x.dataset.removeSlot),1);paint()});
 }
 $('durationSelect').onchange=()=>{draftSlots=draftSlots.map(x=>({...x,end:plusMinutesISO(x.start,duration())}));paint()};
 $('addSlot').onclick=()=>{if(draftSlots.length>=8)return toast('Maximum 8 time options.');const start=localDatetime(1440);draftSlots.push({start,end:plusMinutesISO(start,duration())});paint()};paint();
}
function intervalMinutes(start,end,fallback=120){
 const a=Date.parse(start||''),b=Date.parse(end||'');
 const n=Math.round((b-a)/60000);
 return Number.isFinite(n)&&n>=15&&n<=1440?n:Number(fallback||120);
}
function proposedTimeField(job,myOffer){
 const slots=job.slots||[], selected=myOffer?.proposed_start||slots[0]?.start||'';
 let selectedKey=slots.findIndex(x=>x.start===selected&&x.end===myOffer?.proposed_end);
 if(selectedKey<0)selectedKey=myOffer?.proposed_start?'other':(slots.length?'0':'other');
 const start=myOffer?.proposed_start||localDatetime(1440);
 const mins=intervalMinutes(myOffer?.proposed_start,myOffer?.proposed_end,job.duration_minutes||120);
 const end=myOffer?.proposed_end||plusMinutesISO(start,mins);
 return `<div class="schedule-section"><h3>Your proposed schedule</h3><p class="mock-meta">The customer confirms your price, start time, and requested duration together.</p>${slots.length?`<div class="field"><label>Choose a customer time slot or request another</label><select class="control" id="offerSlotSelect">${slots.map((x,i)=>`<option value="${i}" ${String(selectedKey)===String(i)?'selected':''}>${e(schedulePretty(x.start))} – ${e(schedulePretty(x.end))}</option>`).join('')}<option value="other" ${selectedKey==='other'?'selected':''}>Request a different time or duration</option></select></div>`:`<div class="inline-note">Customer is flexible. Propose a time and duration that work best for you.</div>`}<div class="field-grid" id="offerCustomTimes" ${selectedKey!=='other'&&slots.length?'hidden':''}><div class="field"><label>Start (Eastern)</label><input type="datetime-local" class="control" id="offerCustomStart" value="${e(start)}"/></div>${durationPartsFields('offerCustom',mins)}<div class="field full"><label>End (calculated automatically)</label><input type="datetime-local" class="control" id="offerCustomEnd" readonly value="${e(end)}"/><small>Changing the start or duration updates this time. Customer approval is required.</small></div></div></div>`;
}
function bindOfferDuration(job){
 const start=$('offerCustomStart'),hours=$('offerCustomHours'),minutes=$('offerCustomMinutes'),end=$('offerCustomEnd');
 if(!start||!hours||!minutes||!end)return;
 const update=()=>{
  const custom=($('offerSlotSelect')?.value||'other')==='other';
  const n=validateDurationParts('offerCustom',custom);
  end.value=start.value&&n!==null?plusMinutesISO(start.value,n):'';
  showWorkerConflictWarning(job);
 };
 start.addEventListener('change',update);
 for(const field of [hours,minutes]){field.addEventListener('input',update);field.addEventListener('change',update)}
 update();
}
function offerSchedule(job){
 const choice=$('offerSlotSelect')?.value||'other';
 if(choice!=='other'){const x=job.slots[Number(choice)];return {proposed_start:x.start,proposed_end:x.end};}
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
  const start=j.scheduled_start||localDatetime(1440);
  const minutes=intervalMinutes(j.scheduled_start,j.scheduled_end,j.duration_minutes||120);
  const proposedEnd=plusMinutesISO(start,minutes);
  modal(`${modalHead('Reschedule '+j.title,'APPOINTMENT')}<div class="inline-note">Current: ${e(schedulePretty(j.scheduled_start))} to ${e(schedulePretty(j.scheduled_end))} · ${e(durationText(minutes))}</div>${req?`<div class="ht152-schedule-compare"><div><span>Current booking</span><strong>${e(schedulePretty(j.scheduled_start))}</strong><small>${e(schedulePretty(j.scheduled_end))}</small></div><div class="ht152-next-time"><span>Proposed change</span><strong>${e(schedulePretty(req.start_time))}</strong><small>${e(schedulePretty(req.end_time))} · ${e(durationText(intervalMinutes(req.start_time,req.end_time,minutes)))}</small></div></div>${req.requester_id!==state.me.id?'<div class="hero-actions"><button class="btn btn-primary" id="approveChange">Accept proposed time</button><button class="btn btn-secondary" id="declineChange">Decline change</button></div>':'<div class="inline-note">Waiting for the other person to approve or decline. Your current booking has not changed.</div>'}`:''}<form id="rescheduleForm"><h3>Propose a different appointment</h3><div class="field-grid"><div class="field"><label>New start time</label><input type="datetime-local" class="control" name="start" id="rescheduleStart" required value="${e(start)}"/></div>${durationPartsFields('reschedule',minutes)}<div class="field full"><label>New end time (calculated automatically)</label><input type="datetime-local" class="control" id="rescheduleEnd" name="end" required readonly value="${e(proposedEnd)}"/><small>Changing the start or duration updates the end time automatically. The current booking remains unchanged until the other person approves.</small></div></div><button class="btn btn-secondary" type="submit">Send reschedule request</button></form>`);
  const startInput=$('rescheduleStart'),hoursInput=$('rescheduleHours'),minutesInput=$('rescheduleMinutes'),endInput=$('rescheduleEnd');
  const updateEnd=()=>{const n=validateDurationParts('reschedule');endInput.value=startInput.value&&n!==null?plusMinutesISO(startInput.value,n):''};
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
   if(verificationLink)verificationLink.textContent=state.me.profile_verified?'You’re verified':'Get verified';
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
 else if((n.kind==='offer'||n.kind==='counteroffer')&&role()==='customer')await showOffers(n.job_id);
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
 modal(`${modalHead('Notifications','YOUR INBOX')}<div class="ht154-notification-filters" role="group" aria-label="Filter notifications">${segments.map(([key,label])=>`<button type="button" class="mini-btn ${key===filter?'selected':''}" data-ht154-notify-filter="${e(key)}" aria-pressed="${key===filter}">${e(label)}</button>`).join('')}</div>${notificationState.unread?'<button type="button" class="mini-btn ht154-mark-read" id="ht154MarkRead">Mark all as read</button>':''}<div class="notification-list">${shown.length?shown.map((n,i,arr)=>`${(i===0||new Date(n.created_at*1000).toDateString()!==new Date(arr[i-1].created_at*1000).toDateString())?`<h4 class="notification-group-title">${e(new Date(n.created_at*1000).toLocaleDateString(undefined,{weekday:'long',month:'short',day:'numeric'}))}</h4>`:''}<div class="notification-row" ${n.read_at?'':'notification-unread'}"><button class="notification-item" data-notification="${n.id}"><span class="notification-type">${e(notificationCategory(n))}</span><strong>${e(n.title)}</strong><small>${e(n.body)}</small><span>${new Date(n.created_at*1000).toLocaleString()}</span></button><button class="mini-btn notification-dismiss" data-notification-dismiss="${n.id}" aria-label="Dismiss ${e(n.title)}">Dismiss</button></div>`).join(''):'<p class="inline-note">No notifications. New offers, reviews and account updates appear here.</p>'}</div>`);
 if($('ht154MarkRead'))$('ht154MarkRead').onclick=async()=>{const b=$('ht154MarkRead');b.disabled=true;try{await api('/notifications/read-all','POST');await pollNotifications(false);showNotificationCenter(filter);toast('Notifications marked as read.')}catch(err){toast(err.message);b.disabled=false}};
 document.querySelectorAll('#modalRoot [data-ht154-notify-filter]').forEach(x=>x.onclick=()=>showNotificationCenter(x.dataset.ht154NotifyFilter));
 document.querySelectorAll('#modalRoot [data-notification]').forEach(x=>x.onclick=()=>openNotification(Number(x.dataset.notification)));
 document.querySelectorAll('#modalRoot [data-notification-dismiss]').forEach(x=>x.onclick=async()=>{if(await dismissNotification(Number(x.dataset.notificationDismiss)))showNotificationCenter(filter)});
}
function resetNotificationsForAccount(){closeNotificationBanner();notificationState.items=[];notificationState.unread=0;notificationState.seenPopup.clear();notificationState.primed=false;notificationState.lastBannerAt=0;state.draftItems=[];state.editingDraftId=null;state.jobDraft=null;state.jobDraftLoaded=false;paintNotificationBell()}
const ht154ScrollMemory={};
function ht154RememberScroll(view){if(!view)return;ht154ScrollMemory[view]={windowY:window.scrollY,resultsY:$('jobResults')?.scrollTop||0}}
function ht154RestoreScroll(view){const saved=ht154ScrollMemory[view];if(!saved)return;requestAnimationFrame(()=>{if(state.view!==view)return;window.scrollTo({top:saved.windowY,behavior:'instant'});if($('jobResults'))$('jobResults').scrollTop=saved.resultsY})}
function nav(view){ht154RememberScroll(state.view);if(state.view==='post'&&view!=='post'&&!editedJob){const snapshot=postingDraftSnapshot();if(snapshot)api('/job-draft','PUT',{fields:snapshot}).catch(()=>{});}closeMobileMenu();closeMobileMap();if(view==='admin'&&!state.me?.is_admin)return toast('Admin access required.');if(view==='browse')state.browseFeaturedOnly=false;if(view==='inbox'&&state.view!=='inbox'){state.activeConversation=null;state.chatMessages=[];loadConversations();}if(state.me){if(role()==='worker' && (view==='post'||view==='current-offers'))view='browse';if(role()==='customer' && (view==='browse'||view==='offers'||view==='assignments'))view='dashboard';}if(window.jobMap){window.jobMap.remove();window.jobMap=null;myLocationMarker=null;}state.view=view;if(view!=='task-workspace')state.detail=null;state.partner=null;closeModal();render();if(((view==='post'&&!editedJob)||(view==='saved-drafts'))&&!state.jobDraftLoaded&&state.me)loadPostingDraft();if(view==='saved-drafts')loadSavedTaskDrafts();if(ht154ScrollMemory[view])ht154RestoreScroll(view);else window.scrollTo({top:0,behavior:'instant'});}
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
 const pages={home,browse,post,dashboard,'current-offers':currentOffersPage,offers:workerOffers,assignments:workerAssignments,inbox,profile,settings:settingsPage,help:helpPage,analytics:analyticsPage,appointments:appointmentsPage,history:historyPage,'my-reviews':myReviewsPage,'public-profile':publicProfilePage,'saved-jobs':savedJobsPage,following:followingPage,'previous-work':previousWorkPage,'worker-availability':workerAvailabilityPage,verification:verificationPage,'verification-admin':verificationAdminPage,admin:adminPage,'account-security':accountSecurityPage,'worker-preferences':workerPreferencesPage,'payment-readiness':paymentReadinessPage,'saved-drafts':savedDraftsPage,'task-workspace':taskWorkspacePage};
 app.innerHTML=(pages[state.view]||home)();
 if(state.view==='dashboard'&&$('ht154CustomerSearch'))$('ht154CustomerSearch').oninput=ev=>{const caret=ev.target.selectionStart;state.ht154CustomerQuery=ev.target.value;render();const next=$('ht154CustomerSearch');if(next){next.focus();try{next.setSelectionRange(caret,caret)}catch{}}};
 if(state.view==='assignments'&&$('ht154AssignmentSearch'))$('ht154AssignmentSearch').oninput=ev=>{const caret=ev.target.selectionStart;state.ht154AssignmentQuery=ev.target.value;render();const next=$('ht154AssignmentSearch');if(next){next.focus();try{next.setSelectionRange(caret,caret)}catch{}}};
 if(state.view==='saved-jobs'&&$('ht154SavedSearch'))$('ht154SavedSearch').oninput=ev=>{const input=ev.target,caret=input.selectionStart;state.ht154SavedQuery=input.value;render();const next=$('ht154SavedSearch');if(next){next.focus();try{next.setSelectionRange(caret,caret)}catch{}}};
 if(state.view==='home'&&state.me&&profileCompleteness().percent<100&&!localStorage.getItem(profileSetupReminderKey()))(app.querySelector('.workspace-page > .workspace-hero')||app).insertAdjacentHTML('afterend',`<div class="onboarding-banner" role="region" aria-label="Profile setup reminder"><span>${icon('check',17)} Finish setting up your profile (${profileCompleteness().percent}%)</span><div class="onboarding-banner-actions"><button class="mini-btn" data-view="profile" type="button">Complete profile</button><button class="onboarding-close" id="dismissProfileSetup" type="button" aria-label="Dismiss profile setup reminder" title="Dismiss reminder">&times;</button></div></div>`);
 if(state.view==='home'&&state.siteSettings?.announcement)(app.querySelector('.workspace-page > .workspace-hero')||app).insertAdjacentHTML('afterend',`<div class="site-announcement">${icon('bell',16)} <span>${e(state.siteSettings.announcement)}</span></div>`);
 if(state.view==='help'&&state.siteSettings?.community_guidelines)app.insertAdjacentHTML('beforeend',`<section class="page"><div class="panel"><h3>HomeTask community guidelines</h3><p class="profile-text" style="white-space:pre-wrap">${e(state.siteSettings.community_guidelines)}</p></div></section>`);
 renderWorkspaceChrome();paintNotificationBell();
 if(state.view==='browse')restoreBrowseInputs();
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
 document.querySelectorAll('#profileMenu [data-profile-link]').forEach(b=>{if(b.dataset.profileLink==='history')b.textContent=role()==='customer'?'Task history':'Job history';const workerOnly=['saved-jobs','previous-work','worker-availability','verification'].includes(b.dataset.profileLink);const customerOnly=['following','appointments','saved-drafts'].includes(b.dataset.profileLink);b.style.display=(workerOnly&&role()!=='worker'||customerOnly&&role()!=='customer')?'none':'';if(b.dataset.profileLink==='verification')b.textContent=state.me?.profile_verified?'You’re verified':'Get verified';});
 document.querySelectorAll('[data-view]').forEach(el=>el.onclick=()=>el.dataset.view==='post'?customerAction():nav(el.dataset.view));
 if($('dismissProfileSetup'))$('dismissProfileSetup').onclick=dismissProfileSetupReminder;
 document.querySelectorAll('[data-stat-target]').forEach(el=>el.onclick=()=>openStatTarget(el.dataset.statTarget));
 document.querySelectorAll('[data-offer-filter]').forEach(el=>el.onclick=()=>{state.offerFilter=el.dataset.offerFilter;render()});
 document.querySelectorAll('[data-job-filter]').forEach(el=>el.onclick=()=>{state.jobFilter=el.dataset.jobFilter;render()});
 document.querySelectorAll('[data-appointment-filter]').forEach(el=>el.onclick=()=>{state.appointmentFilter=el.dataset.appointmentFilter;render()});
 document.querySelectorAll('[data-assignment-filter]').forEach(el=>el.onclick=()=>{state.assignmentFilter=el.dataset.assignmentFilter;render()});
 if(state.view==='task-workspace'&&state.detail){const j=state.detail,owner=j.owner_id===state.me?.id;const d=()=>openJob(j.id);if($('workspaceDetails'))$('workspaceDetails').onclick=d;if($('workspaceCompletion'))$('workspaceCompletion').onclick=d;if($('workspaceReschedule'))$('workspaceReschedule').onclick=()=>showReschedule(j.id);if($('workspaceMessage'))$('workspaceMessage').onclick=()=>showMessages(j.id,owner?j.assigned_worker_id:j.owner_id,owner?j.assigned_worker_name:j.owner_name);if($('workspaceApprove'))$('workspaceApprove').onclick=()=>openJob(j.id)}if(state.view==='history')bindHistoryFilters();if(state.view==='saved-drafts'){
 if($('draftStartNew'))$('draftStartNew').onclick=()=>{state.editingDraftId=null;state.jobDraft=null;state.jobDraftLoaded=true;draftSlots=[];editedJob=null;nav('post')};
 document.querySelectorAll('[data-resume-draft]').forEach(b=>b.onclick=()=>{const d=state.draftItems.find(x=>x.id===Number(b.dataset.resumeDraft));if(!d)return;state.editingDraftId=d.id;state.jobDraft=d.fields;state.jobDraftLoaded=true;draftSlots=Array.isArray(d.fields.slots)?d.fields.slots:[];editedJob=null;nav('post')});
 document.querySelectorAll('[data-delete-draft]').forEach(b=>b.onclick=async()=>{if(!confirm('Delete this saved task draft?'))return;try{await api(`/job-drafts/${b.dataset.deleteDraft}`,'DELETE');if(state.editingDraftId===Number(b.dataset.deleteDraft))state.editingDraftId=null;await loadSavedTaskDrafts();toast('Draft deleted.')}catch(err){toast(err.message)}})
 }
 document.querySelectorAll('[data-job]').forEach(el=>el.onclick=()=>openJob(Number(el.dataset.job)));document.querySelectorAll('[data-workspace-job]').forEach(el=>el.onclick=ev=>{ev.stopPropagation();openTaskWorkspace(Number(el.dataset.workspaceJob))});
 document.querySelectorAll('[data-resubmit]').forEach(el=>el.onclick=()=>resubmitOriginalOffer(Number(el.dataset.resubmit)));
 document.querySelectorAll('[data-person]').forEach(el=>el.onclick=()=>openPublicProfile(Number(el.dataset.person)));
 document.querySelectorAll('[data-cat]').forEach(el=>el.onclick=()=>{nav('browse');$('categoryFilter').value=el.dataset.cat;filterJobs()});
 document.querySelectorAll('[data-edit]').forEach(el=>el.onclick=()=>navEdit(Number(el.dataset.edit)));
 document.querySelectorAll('[data-offers]').forEach(el=>el.onclick=()=>showOffers(Number(el.dataset.offers)));
 document.querySelectorAll('[data-conversation]').forEach(el=>el.onclick=()=>openWorkerConversation(Number(el.dataset.conversation)));
 document.querySelectorAll('[data-card-job]').forEach(el=>{
  el.onclick=ev=>{if(isNestedCardControl(ev,el))return;openJob(Number(el.dataset.cardJob))};
  el.onkeydown=ev=>{if(ev.target===el&&(ev.key==='Enter'||ev.key===' ')){ev.preventDefault();openJob(Number(el.dataset.cardJob))}};
 });
 document.querySelectorAll('[data-cancel]').forEach(el=>el.onclick=()=>showCancelJob(Number(el.dataset.cancel)));
 document.querySelectorAll('[data-chat-worker]').forEach(el=>el.onclick=()=>{const [jobId,personId]=el.dataset.chatWorker.split(':').map(Number);const job=state.jobs.find(j=>j.id===jobId);if(job&&personId)showMessages(jobId,personId,job.assigned_worker_name)});
 document.querySelectorAll('[data-close]').forEach(el=>el.onclick=()=>showCancelJob(Number(el.dataset.close)));
 document.querySelectorAll('[data-complete]').forEach(el=>el.onclick=()=>completeJob(Number(el.dataset.complete)));
 document.querySelectorAll('[data-review]').forEach(el=>el.onclick=()=>reviewJob(Number(el.dataset.review)));
 document.querySelectorAll('[data-calendar]').forEach(el=>el.onclick=()=>{const j=state.jobs.find(x=>x.id===Number(el.dataset.calendar));if(j)window.open(googleCalendarURL(j),'_blank','noopener')});
 if(state.view==='profile')loadOwnReviews();
 if($('postJobForm')){$('postJobForm').onsubmit=submitJob;if($('saveTaskDraft'))$('saveTaskDraft').onclick=saveTaskDraftNow;if($('previewJobButton'))$('previewJobButton').onclick=previewDraftJob;initAddressAutocomplete();bindScheduleFields();bindDraftPhotoPreviews();bindPostingDraft();setupPostingReadiness();if($('discardJobDraft'))$('discardJobDraft').onclick=async()=>{if(!confirm('Discard your saved posting draft?'))return;try{await api('/job-draft','DELETE');state.jobDraft=null;state.jobDraftLoaded=true;draftSlots=[];htDraftLast='';render();toast('Posting draft discarded.')}catch(err){toast(err.message)}};if(editedJob)loadJobPhotos(editedJob.id,'editPhotos');}
 if($('jobSort'))$('jobSort').onchange=ev=>{state.jobSort=ev.target.value;filterJobs()};
 document.querySelectorAll('[data-quick-category]').forEach(button=>button.onclick=()=>{const val=button.dataset.quickCategory;const select=$('categoryFilter');if(!select)return;select.value=val;filterJobs();document.querySelectorAll('[data-quick-category]').forEach(x=>x.classList.toggle('selected',x.dataset.quickCategory===val));});
 if($('listMode'))$('listMode').onclick=()=>setBrowseMode('list');if($('mapMode'))$('mapMode').onclick=()=>setBrowseMode('map');
 if(state.view==='browse'&&state.mapMode==='map')setTimeout(()=>initJobMap(),0);
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
 if($('resetFilters'))$('resetFilters').onclick=()=>{['searchInput','categoryFilter','difficultyFilter','priceFilter'].forEach(id=>$(id).value='');if($('mobileJobSearch'))$('mobileJobSearch').value='';state.browseFilters={query:'',category:'',difficulty:'',price:''};state.nearbyCenter=state.personalGeo||null;state.nearbyLabel=state.personalGeo?'Your current location':'';state.nearbyRadius=0;ht1543UserPickedLocation=false;render()};
 if(state.view==='home'&&state.me&&role()==='worker')ht1543AutoLocate();
 if(state.view==='browse'){bindRadiusSearch();ht1543AutoLocate();bindMobileBrowse();if($('hideOwnListings'))$('hideOwnListings').onchange=ev=>{state.hideOwnListings=ev.target.checked;filterJobs()};if($('hideOfferedJobs'))$('hideOfferedJobs').onchange=ev=>{state.hideOfferedJobs=ev.target.checked;filterJobs()};}
 if($('showAllJobs'))$('showAllJobs').onclick=()=>{state.browseFeaturedOnly=false;render();};
 for(const id of ['searchInput','categoryFilter','difficultyFilter','priceFilter'])if($(id))$(id).oninput=filterJobs;
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
 if(state.view==='worker-availability')loadWeeklyAvailability();
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
 const navEl=document.querySelector('.desktop-nav');
 navEl.innerHTML=links.map(([v,label])=>`<button data-view="${v}" class="${(state.view===v||(v==='dashboard'&&state.view==='current-offers'))?'nav-active':''} ${v==='home'?'nav-house-home':''}" ${v==='home'?'aria-label="Home" title="Home"':''}>${v==='home'?'<img src="/assets/logo-1-icon.png" alt=""/>':e(label)}</button>`).join('');
 document.querySelector('.brand').innerHTML=`<img class="brand-wordmark-single" src="/assets/logo-1-wordmark.png?v=1413" alt="HomeTask" />${mode==='worker'?'<span class="workspace-pill">WORKER PORTAL</span>':''}`;
 
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
 return `<div class="workspace-hero"><div><span class="workspace-eyebrow">${kicker}</span><h1>${title}</h1><p>${desc}</p>${action?`<div class="hero-actions">${action}</div>`:''}</div><div class="workspace-symbol" aria-hidden="true">${image?`<span class="hero-mark"><img src="${image==='arrow'?'/assets/logo-2-icon.png':'/assets/logo-1-icon.png?v=1413'}" alt="" /></span>`:''}</div></div>`;
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
 <div class="stack">${jobs.length?jobs.map(j=>`<article class="dashboard-job offer-job-row">${compactJobPhoto(j)}<div class="dashboard-job-head"><div><h3>${e(j.title)}</h3><div class="mock-meta">${e(j.location)} · ${e(j.category)} · Budget ${dollars(j.budget)}</div></div><span class="offer-total-pill">${j.offer_count} offer${j.offer_count===1?'':'s'}</span></div><div class="mini-actions"><button class="btn btn-primary" data-offers="${j.id}">View ${j.offer_count} offer${j.offer_count===1?'':'s'} →</button><button class="mini-btn" data-job="${j.id}">Task details</button></div></article>`).join(''):`<div class="empty"><h3>No current offers</h3><p>New worker offers on your open tasks will appear here. Offers from completed, accepted, or closed jobs are not included.</p><button class="btn btn-secondary" data-view="dashboard">Back to My Tasks</button></div>`}</div></div></section>`;
}
function statTiles(items){return `<div class="stats workspace-stats">${items.map(([label,value,ico,target])=>target?`<button type="button" class="stat stat-clickable" data-stat-target="${e(target)}" aria-label="View ${e(label)}"><span>${icon(ico||'chart',17)} ${e(label)}</span><strong>${value}</strong></button>`:`<div class="stat"><span>${icon(ico||'chart',17)} ${e(label)}</span><strong>${value}</strong></div>`).join('')}</div>`}
function openStatTarget(target){
 const [view,filter]=String(target).split(':');
 if(view==='dashboard')state.jobFilter=filter||'all';
 if(view==='assignments')state.assignmentFilter=filter||'booked';
 if(view==='appointments')state.appointmentFilter=filter||'all';
 if(view==='offers')state.offerFilter=filter||'current';
 if(view==='browse'&&filter==='featured'){
  nav('browse');state.browseFeaturedOnly=true;render();return;
 }
 nav(view);
}
function jobProgressPanel(j){
 // Never render internal assignment history before hiring or to outside viewers.
 const viewerId=state.me?.id;
 const isParticipant=viewerId!=null&&(Number(viewerId)===Number(j.owner_id)||Number(viewerId)===Number(j.assigned_worker_id));
 if(!isParticipant||!j.accepted_offer_id||!j.assigned_worker_id)return '';
 const statusCode=j.status,finished=!!j.completion_requested_at;
 const steps=[['Posted',true],['Hired',statusCode==='accepted'||statusCode==='completed'||(statusCode==='cancelled'&&!!j.accepted_offer_id)],['Work finished',finished||statusCode==='completed'],['Confirmed',statusCode==='completed']];
 return `<section class="ht-progress ht154-progress" aria-label="Private task progress"><div class="ht-progress-title"><strong>${role()==='customer'?'Task progress':'Job progress'}</strong><span class="status ${statusClass(j)}">${status(j)}</span></div><ol class="ht-progress-steps ht154-progress-steps">${steps.map(([label,done],i)=>`<li class="${done?'is-done':''} ${i===steps.findIndex(x=>!x[1])?'is-current':''}" ${done?'aria-label="'+label+': complete"':'aria-label="'+label+': pending"'}><span class="ht-progress-node"><span class="ht-progress-dot">${done?icon('check',15):i+1}</span>${i<steps.length-1?`<span class="ht154-dot-connector ${steps[i+1][1]?'is-filled':''}" aria-hidden="true">${Array.from({length:6},()=>'<i></i>').join('')}</span>`:''}</span><span class="ht154-stage-label">${label}</span></li>`).join('')}</ol>${statusCode==='cancelled'?'<p class="mock-meta">This job was cancelled. Its previous progress is preserved for reference.</p>':finished&&statusCode==='accepted'?'<p class="mock-meta">The worker marked the work finished. Waiting for customer confirmation or requested changes.</p>':''}</section>`;
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
  if(offers.length)actions.push({title:`Compare new offers (${offers.length} tasks)`,desc:'Review workers and choose who to hire.',job:offers[0].id,urgent:false});
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
function customerHome(){
 const jobs=state.jobs.filter(j=>mine(j)&&['open','accepted'].includes(j.status));
 const offerTotal=currentOfferTotal();
 const open=jobs.filter(j=>j.status==='open');
 const active=jobs.filter(j=>j.status==='accepted');
 const myHistory=state.jobs.filter(mine);
 const didPost=myHistory.length>0, didReviewOffer=myHistory.some(j=>j.offer_count>0 || j.assigned_worker_id), didComplete=myHistory.some(j=>j.status==='completed');
 const showGettingStarted=!(didPost&&didReviewOffer&&didComplete);
 return `<section class="page workspace-page">${workspaceHeader('HOMETASK',`<span id="welcomeHeadline" class="greeting-reveal">${welcomeHeadline()}</span>`,'Post a task, compare offers, and choose who you want to hire.',`<button class="btn btn-primary" id="dashboardPrimary">+ Post a task</button><button class="btn btn-secondary" data-view="dashboard">Manage my tasks</button>`,'H')}
 ${v15NextActions('customer')}
 ${upcomingJobStrip('customer')}
 ${statTiles([['Open listings',open.length,'list','dashboard:open'],['In progress',active.length,'check','dashboard:accepted'],['Upcoming appointments',active.filter(j=>j.scheduled_start).length,'calendar','appointments:scheduled']])}<button class="current-offers-hero" data-view="current-offers"><span><small>CURRENT OFFERS</small><strong>${offerTotal}</strong><em>Active worker offers on open jobs</em></span><span class="offer-hero-action">View offers by job →</span></button>
 <div class="workspace-columns ${showGettingStarted?'':'onboarding-complete'}"><div class="panel"><div class="section-head"><div><span class="kicker">RECENT ACTIVITY</span><h3>Your tasks</h3></div><button class="mini-btn" data-view="dashboard">See all tasks</button></div><div class="stack">${jobs.length?jobs.slice(0,4).map(j=>customerRow(j)).join(''):`<div class="empty"><h3>No tasks yet</h3><p>Post your first project to start getting offers.</p><button class="btn btn-primary" id="dashboardPrimary">Post your first task</button></div>`}</div></div>
 ${showGettingStarted?`<aside class="panel"><span class="kicker">GETTING STARTED</span><h3 style="margin-top:9px">From idea to finished.</h3><div class="help-list"><div class="help-item"><span class="help-num">${didPost?icon('check',15):'1'}</span><span>Post a task with a description and location.</span></div><div class="help-item"><span class="help-num">${didReviewOffer?icon('check',15):'2'}</span><span>Receive an offer and compare available workers.</span></div><div class="help-item"><span class="help-num">${didComplete?icon('check',15):'3'}</span><span>Hire a worker and mark a task complete.</span></div></div><button class="btn btn-secondary" data-view="help" style="margin-top:24px">View walkthrough</button></aside>`:''}</div></section>`;
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
function customerRow(j){return `<article class="dashboard-job interactive-job-card" tabindex="0" data-card-job="${j.id}" aria-label="View ${e(j.title)}">${compactJobPhoto(j)}<div class="dashboard-job-head"><div><strong>${e(j.title)}</strong><div class="mock-meta">${e(j.category)} · ${e(j.location)} · ${dollars(j.budget)}</div></div><span class="status ${statusClass(j)}">${status(j)}</span></div><div class="mini-actions">${j.status==='open'?`<button class="mini-btn" data-offers="${j.id}">Compare offers (${j.offer_count})</button>`:''}${j.status==='accepted'?`<button class="mini-btn" data-chat-worker="${j.id}:${j.assigned_worker_id}">Message worker</button>`:''}</div></article>`}
function workerHome(){
 const featured=featuredJobs();
 const assigned=state.jobs.filter(j=>j.assigned_worker_id===state.me.id);
 const pending=state.offers.filter(o=>o.status==='open'&&o.decision!=='rejected');
 return `<section class="page workspace-page">${workspaceHeader('WORKER PORTAL',`<span id="welcomeHeadline" class="greeting-reveal">${welcomeHeadline()}</span>`,'Explore neighborhood jobs, make offers, and manage the work you book.',`<button class="btn btn-primary" data-view="browse">Explore job map</button><button class="btn btn-secondary" data-view="offers">Track my offers</button>`,'arrow')}
 ${v15NextActions('worker')}
 ${upcomingJobStrip('worker')}
 ${statTiles([['Featured listings',featured.length,'search','browse:featured'],['Pending bids',pending.length,'clock','offers:current'],['Booked jobs',assigned.filter(j=>j.status==='accepted').length,'check','assignments'],['Upcoming assignments',assigned.filter(j=>j.status==='accepted'&&j.scheduled_start).length,'calendar','assignments']])}
 ${state.invitations.filter(x=>x.status==='open').length?`<div class="panel job-requests" style="margin-bottom:18px"><div class="section-head"><div><span class="kicker">JOB REQUESTS</span><h3>Customers invited you to these jobs</h3></div></div><div class="stack">${state.invitations.filter(x=>x.status==='open').map(x=>`<div class="job-request-card"><div><strong>${e(x.title)}</strong><p class="mock-meta">${e(x.customer_name)} · ${e(x.location)} · ${dollars(x.budget)}</p><span class="tag">Job request</span></div><button class="btn btn-secondary" data-job="${x.job_id}">Review request</button></div>`).join('')}</div></div>`:''}
 <div class="workspace-columns"><div class="panel"><div class="section-head"><div><span class="kicker">MATCHED TO YOU</span><h3>Featured local listings</h3><p class="mock-meta">Matches your saved skills within ${featuredRadius()} miles of ${e(featuredOrigin().label)}.</p></div><button class="mini-btn" data-stat-target="browse:featured">See matches</button></div><div class="stack">${featured.length?featured.slice(0,4).map(({job:j,distance})=>`<article class="dashboard-job interactive-job-card" role="button" tabindex="0" data-card-job="${j.id}" aria-label="View featured job ${e(j.title)}">${compactJobPhoto(j)}<div class="dashboard-job-head"><div><strong>${e(j.title)}</strong><div class="mock-meta">${e(j.location)} · ${e(j.category)} · approximately ${distance.toFixed(1)} mi away</div></div><div class="offer-price">${dollars(j.budget)}</div></div></article>`).join(''):`<div class="empty"><h3>No featured matches yet</h3><p>${e(featuredEmptyText())}</p><div class="hero-actions"><button class="btn btn-secondary" data-view="profile">Edit skills & location</button><button class="btn btn-secondary" data-view="browse">Explore all jobs</button></div></div>`}</div></div>
 <aside class="panel"><span class="kicker">WORKER TOOLS</span><h3 style="margin-top:9px">Your work, organized.</h3><div class="worker-tool-links"><button data-view="browse"><span>${icon("map",21)}</span><div><strong>Job map</strong><small>Find work in your area</small></div>›</button><button data-view="saved-jobs"><span>${icon("bookmark",21)}</span><div><strong>Saved jobs</strong><small>Return to bookmarked listings</small></div>›</button><button data-view="offers"><span>${icon("wallet",21)}</span><div><strong>My offers</strong><small>Track sent bids and prices</small></div>›</button><button data-view="assignments"><span>${icon("check",21)}</span><div><strong>My assignments</strong><small>Manage jobs you've booked</small></div>›</button><button data-view="profile"><span>${icon("user",21)}</span><div><strong>Worker profile</strong><small>Show your skills and experience</small></div>›</button><button data-view="previous-work"><span>${icon("grid",21)}</span><div><strong>Previous Work</strong><small>Upload completed project examples</small></div>›</button></div></aside></div></section>`;
}
function workerOffers(){
 if(!state.me)return signInPrompt();
 const offers=state.offers;
 const current=offers.filter(o=>(o.status==='open'&&o.decision!=='rejected')||(o.status==='accepted'&&o.accepted_offer_id===o.id)),completed=offers.filter(o=>o.status==='completed'&&o.accepted_offer_id===o.id),archived=offers.filter(o=>!((o.status==='open'&&o.decision!=='rejected')||(o.status==='accepted'&&o.accepted_offer_id===o.id)||(o.status==='completed'&&o.accepted_offer_id===o.id)));
 const pending=offers.filter(o=>o.status==='open'&&o.decision!=='rejected');
 const hired=offers.filter(o=>o.accepted_offer_id===o.id&&o.status==='accepted');
 const filter=state.offerFilter;
 const visible=filter==='completed'?completed:filter==='archived'?archived:filter==='all'?offers:current;
 return `<section class="page workspace-page"><div class="page-title"><span class="kicker">WORKER WORKSPACE</span><h1>My offers</h1><p>Review current bids, completed jobs, and previous offers.</p></div>
 ${statTiles([['Offers submitted',pending.length,'file','offers:current'],['Accepted offers',hired.length,'check','assignments'],['Completed offers',completed.length,'history','offers:completed'],['Current bid value',dollars(pending.reduce((n,o)=>n+o.price,0)),'wallet','offers:current']])}
 <div class="panel"><div class="section-head"><div><h3>Offer activity</h3><p class="mock-meta">${visible.length} ${filter==='all'?'total':filter} offer${visible.length===1?'':'s'}</p></div></div><div class="segment-pills appointment-pills">${[['current','Current'],['completed','Completed'],['archived','Cancelled / closed'],['all','All offers']].map(([key,label])=>`<button class="mini-btn ${filter===key?'selected':''}" data-offer-filter="${key}">${label}</button>`).join('')}</div><div class="stack">${visible.length?visible.map(o=>`<article class="dashboard-job interactive-job-card" role="button" tabindex="0" data-card-job="${o.job_id}" aria-label="View job: ${e(o.title)}">${compactJobPhoto(o)}<div class="dashboard-job-head"><div><strong>${e(o.title)}</strong><div class="mock-meta">${e(o.customer_name)} · ${e(o.location)}</div></div><div class="offer-price">${dollars(o.price)}<small class="ht-offer-net">Est. payout ${workerNetPrice(o.price)}</small></div></div>${o.counter_status==='pending'&&o.status==='open'?`<div class="negotiation-notice small"><strong>New customer counteroffer: ${dollars(o.counter_price)}</strong><p>${e(o.counter_note||'Customer proposed a different price.')}</p><div class="mini-actions"><button class="mini-btn" data-counter-response="${o.job_id}:yes">Accept</button><button class="mini-btn" data-counter-response="${o.job_id}:no">Decline</button></div></div>`:''}<div class="mini-actions"><span class="status ${o.accepted_offer_id===o.id?'status-accepted':o.status==='open'&&o.decision!=='rejected'?'status-offers':'status-completed'}">${o.status==='cancelled'||o.status==='closed'?'Cancelled':o.status==='completed'&&o.accepted_offer_id===o.id?'Completed':o.accepted_offer_id===o.id?'Accepted':o.decision==='rejected'?'Declined':o.status==='open'?'Pending':'Closed'}</span>${o.decision==='rejected'&&o.status==='open'?`<button class="mini-btn" data-resubmit="${o.job_id}">${icon('arrow',15)} Resubmit at original budget</button>`:''}</div></article>`).join(''):'<div class="empty">No offers in this category.</div>'}</div></div></section>`;
}
function workerAssignments(){
 if(!state.me)return signInPrompt();
 const all=state.jobs.filter(j=>j.assigned_worker_id===state.me.id);
 const booked=all.filter(j=>j.status==='accepted');
 const completed=all.filter(j=>j.status==='completed');
 const working=booked.filter(j=>!j.completion_requested_at && (j.completion_rejected_at || (j.scheduled_start && new Date(j.scheduled_start).getTime()<=Date.now())));
 const filter=state.assignmentFilter||'booked';
 const list=filter==='completed'?completed:filter==='progress'?working:booked;
 const assignmentQuery=String(state.ht154AssignmentQuery||'').trim().toLowerCase();const displayed=list.filter(j=>!assignmentQuery||[j.title,j.location,j.owner_name,j.category].join(' ').toLowerCase().includes(assignmentQuery));
 return `<section class="page workspace-page"><div class="page-title"><span class="kicker">WORKER WORKSPACE</span><h1>My assignments</h1><p>Everything customers have hired you to do. Choose a summary box to filter assignments, or open Earnings for booked value.</p></div>${statTiles([['Booked jobs',booked.length,'file','assignments:booked'],['In progress',working.length,'clock','assignments:progress'],['Completed',completed.length,'check','assignments:completed'],['Booked value',dollars(booked.reduce((n,j)=>n+(j.accepted_price||0),0)),'wallet','analytics']])}<div class="panel"><div class="section-head"><h3>${filter==='completed'?'Completed assignments':filter==='progress'?'Work in progress':'Active assignments'}</h3><span class="tag">${list.length} ${list.length===1?'assignment':'assignments'}</span></div><div class="segment-pills appointment-pills">${[['booked','Booked'],['progress','In progress'],['completed','Completed']].map(([key,label])=>`<button class="mini-btn ${filter===key?'selected':''}" data-assignment-filter="${key}">${label}</button>`).join('')}</div><label class="ht154-list-search">${icon('search',18)}<input class="control" id="ht154AssignmentSearch" type="search" placeholder="Search assignments" aria-label="Search assignments" value="${e(state.ht154AssignmentQuery||'')}"/></label><div class="stack">${displayed.length?displayed.map(j=>`<article class="dashboard-job interactive-job-card" data-card-job="${j.id}" tabindex="0" role="button" aria-label="Open assignment: ${e(j.title)}">${compactJobPhoto(j)}<div class="dashboard-job-head"><div><strong>${e(j.title)}</strong><div class="mock-meta">${e(j.location)} · ${e(j.owner_name)}</div></div><span class="status ${statusClass(j)}">${status(j)}</span></div><div class="ht152-task-access"><button class="mini-btn" data-workspace-job="${j.id}">Open task workspace →</button></div>${j.status==='completed'?'<span class="tag">Completed HomeTask assignment · available for Previous Work</span>':j.completion_requested_at?'<span class="tag">Waiting for customer confirmation</span>':j.completion_rejected_at?'<span class="tag">Customer requested changes</span>':'<span class="tag">Open job details for work updates</span>'}<p class="mock-meta">Agreed price: <strong>${dollars(j.accepted_price)}</strong> · 10% HomeTask fee: <strong>−${moneyCents(workerPaymentBreakdown(j.accepted_price).fee)}</strong> · Expected payout: <strong>${workerNetPrice(j.accepted_price)}</strong> · <span class="ht-payment-state">${j.payment_status==='paid_test'?'Stripe test checkout confirmed':j.payment_status==='unfunded_demo'?'Unfunded demo booking':'Payment not processed'}</span> · ${j.scheduled_start?icon('calendar',16)+' '+e(schedulePretty(j.scheduled_start)):'Time not set'}</p></article>`).join(''):`<div class="empty"><h3>${filter==='completed'?'No completed assignments yet':filter==='progress'?'No assignments underway':'No booked jobs yet'}</h3><p>${filter==='booked'?'Once a customer accepts an offer, the assignment appears here.':'Select another status to see your other assignments.'}</p>${filter==='booked'?'<button class="btn btn-primary" data-view="browse">Find work</button>':''}</div>`}</div></div></section>`;
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
async function openWorkerConversation(id){try{const j=await api(`/jobs/${id}`);if(j.owner_id===state.me?.id){showOffers(id);return;}if(!j.owner_id)return toast('Customer not available.');showMessages(id,j.owner_id,j.owner_name)}catch(err){toast(err.message)}}

function home(){
 if(state.me)return role()==='customer'?customerHome():workerHome();
 const count=state.jobs.filter(j=>j.status==='open').length;
 return `<section class="page hero public-hero"><div><span class="eyebrow">Everyday help for real home tasks</span><h1>A little help goes a long way.</h1><p class="lead">From a wobbly chair to yard work, moving help, or furniture assembly, HomeTask makes it easy to post a task, compare offers, and get help from someone nearby.</p><div class="hero-actions"><button class="btn btn-primary" id="heroPost">Post a task</button><button class="btn btn-secondary" data-view="browse">Explore local jobs</button></div><div class="public-proof-pills"><span>Affordable household help</span><span>Real local offers</span><span>Simple start-to-finish flow</span></div><div class="trust-row"><div class="trust-card"><strong>${count} open jobs</strong><span>Browse local task listings and see what people need help with right now.</span></div><div class="trust-card"><strong>Compare offers</strong><span>Choose the worker, timing, and price that makes the most sense for your job.</span></div><div class="trust-card"><strong>Keep everything in one place</strong><span>Messages, scheduling, progress, and completion all stay inside HomeTask.</span></div></div></div><div class="hero-card public-story-card"><div class="hero-logo-lockup"><span class="hero-house-logo" aria-hidden="true"></span><span>HomeTask marketplace</span></div><span class="kicker hero-card-tagline">HOME TASKS, MADE SIMPLE</span><h3 class="public-story-title">That chair still waiting to be fixed?</h3><p class="public-story-copy">Instead of putting it off or hunting for a contractor, post the task on HomeTask and let nearby workers offer to help.</p><div class="fix-scene"><div class="fix-scene-card is-problem"><div class="fix-scene-emoji" aria-hidden="true">🪑</div><strong>Loose dining chair</strong><span>Needs a quick fix this week</span></div><div class="fix-scene-middle"><span class="fix-scene-arrow">→</span><small>Post it on HomeTask</small></div><div class="fix-scene-card is-solution"><div class="fix-scene-emoji" aria-hidden="true">🔧</div><strong>3 nearby offers</strong><span>Compare price, reviews, and availability</span></div></div><div class="mock-card public-mock-card"><div class="mock-row"><div class="job-title-wrap"><div class="mock-icon">${icon("wrench",26)}</div><div><strong>One simple place to get help</strong><div class="mock-meta">Post • Compare • Hire • Message • Finish</div></div></div><div class="price">${icon('check',25)}</div></div><div class="mock-tags"><span class="tag">Household tasks</span><span class="tag">Local workers</span><span class="tag">Flexible budgets</span></div></div></div></section><section class="page" style="padding-top:0"><div class="section-head"><div><span class="kicker">POPULAR CATEGORIES</span><h2>What do you need done?</h2></div><p>HomeTask is built for the everyday stuff around the house: smaller jobs, quick help, and local people ready to lend a hand.</p></div><div class="categories">${Object.entries(categories).map(([cat,ico])=>`<button class="category-card" data-cat="${e(cat)}"><div class="category-icon">${icon(ico,30)}</div><strong>${e(cat)}</strong><span>Explore ${e(cat.toLowerCase())} jobs</span></button>`).join('')}</div></section><section class="page public-process"><div class="section-head"><div><span class="kicker">WHY HOMETASK</span><h2>How HomeTask turns a problem into a plan.</h2></div><p>Whether it is a broken chair, messy yard, moving boxes, or a mounting job, HomeTask helps you go from “I need help” to “It is handled.”</p></div><div class="public-process-grid"><article class="public-process-card"><div class="public-process-num">1</div><h3>Post the task</h3><p>Describe what needs to get done, add your location and budget, and share a few helpful details or photos.</p></article><article class="public-process-card"><div class="public-process-num">2</div><h3>Compare offers</h3><p>Review worker offers, prices, reviews, and availability so you can choose the right fit for your home task.</p></article><article class="public-process-card"><div class="public-process-num">3</div><h3>Get it done</h3><p>Message your worker, confirm timing, and track the task from start to finish without losing the details.</p></article></div></section><section class="page public-quotes"><div class="section-head"><div><span class="kicker">WHY PEOPLE WOULD USE IT</span><h2>A little social proof goes a long way.</h2></div><p>The idea behind HomeTask is simple: everyday household help should feel local, affordable, and easy to trust.</p></div><div class="public-quotes-grid"><article class="public-quote-card"><div class="public-quote-stars">★★★★★</div><p>"I just needed someone to help assemble a desk and tighten a loose chair. HomeTask makes that feel way easier than trying to find a contractor."</p><strong>Sarah · Busy homeowner</strong></article><article class="public-quote-card"><div class="public-quote-stars">★★★★★</div><p>"As a student, I like the idea of picking up smaller jobs nearby without needing to run a whole business."</p><strong>Mike · Local worker</strong></article><article class="public-quote-card"><div class="public-quote-stars">★★★★★</div><p>"It feels more approachable for normal around-the-house stuff — moving boxes, yard cleanup, small fixes, and quick help."</p><strong>Jenna · Renter</strong></article></div></section><section class="page public-cta"><div class="public-cta-card"><div><span class="kicker">READY TO TRY IT?</span><h2>Post a task or explore what people need help with.</h2><p>HomeTask is built for real household tasks, not giant projects. Start simple and see how the marketplace works.</p></div><div class="hero-actions"><button class="btn btn-primary" id="heroPost">Post a task</button><button class="btn btn-secondary" data-view="browse">Browse open jobs</button></div></div></section>`}

function hasOfferForJob(j){return !!state.me && role()==='worker' && state.offers.some(o=>Number(o.job_id)===Number(j.id));}
function jobCard(j){
 const offered=hasOfferForJob(j);
 const saved=state.savedJobIds.includes(j.id),worker=state.me&&role()==='worker'&&!mine(j);
 return `<article class="job-card interactive-job-card explore-job-card" role="button" tabindex="0" data-card-job="${j.id}" aria-label="View ${e(j.title)}">
 ${j.has_main_photo?`<div class="job-listing-photo"><img src="/api/jobs/${j.id}/main-photo" alt="Main photo for ${e(j.title)}" loading="lazy" /></div>`:`<div class="ht151-photo-placeholder">${icon(categories[j.category]||'house',29)}<span>${e(j.category)}</span></div>`}
 <div class="job-top"><div class="job-title-wrap"><div class="job-icon">${icon(categories[j.category]||'house',23)}</div><div><h3>${e(j.title)}</h3><span class="status ${statusClass(j)}">${status(j)}</span>${mine(j)?`<span class="tag own-listing-tag">${icon("house",12)} Your listing</span>`:""}${offered?'<span class="tag offer-sent-tag">✓ Offer sent</span>':''}</div></div><div class="price ht151-card-price">${dollars(j.budget)}<small>Task budget</small></div></div>
 <p>${e(j.description.length>140?j.description.slice(0,140)+'…':j.description)}</p>
 <div class="job-facts"><span class="tag">${icon('calendar',13)} ${j.scheduled_start?e(schedulePretty(j.scheduled_start)):j.offer_deadline?'Offers by '+e(j.offer_deadline):'Flexible scheduling'}</span><span class="tag">${e(j.category)}</span><span class="tag">${e(j.location)}</span><span class="tag">${e(j.difficulty)}</span><span class="tag">${e(durationText(Number(j.duration_minutes||120)))}</span><span class="tag">${date(j.created_at)}</span>${role()==='worker'?`<span class="tag distance-tag">${icon('pin',13)} ${e(distanceLabel(j))}</span>`:''}</div>
 ${worker&&state.jobSort==='match'&&featuredSkillScore(j,skillTerms())>0?'<div class="ht-match-explain">'+icon('check',14)+' Recommended because it matches your listed skills</div>':''}
 <div class="ht151-card-bottom"><span>${icon('eye',15)} View task details</span>${offered?'<span class="ht151-offered-state">Offer submitted</span>':''}</div>
 ${worker?`<div class="job-save-area"><button class="save-ribbon ${saved?'is-saved':''}" type="button" data-save-job="${j.id}" aria-label="${saved?'Remove saved job':'Save job'}" title="${saved?'Saved job':'Save job'}">${icon('bookmark',21)}<span>${saved?'Saved':'Save job'}</span></button></div>`:''}
 </article>`;
}
function browse(){return `<section class="page browse-page ${state.mobileFiltersOpen?'mobile-filters-open':''}"><div class="page-title"><span class="kicker">MARKETPLACE</span><h1>${state.browseFeaturedOnly?'Featured listings':'Explore jobs'}</h1><p>${state.browseFeaturedOnly?'Open jobs near your selected location that match your profile skills.':'Search local jobs, narrow your results, or view matching listings on the map.'}</p></div>${state.browseFeaturedOnly?`<div class="featured-search-banner"><span>${icon('pin',17)} Your skills · within ${featuredRadius()} miles of ${e(featuredOrigin().label)}</span><button class="mini-btn" type="button" id="showAllJobs">Show all jobs</button></div>`:''}
 <div class="ht151-discovery-intro"><div><strong>Find your next opportunity</strong><span>Browse by category or fine-tune your search. Your filters stay in place when you open a task.</span></div><span class="ht151-discovery-count">${filteredJobs().length} available</span></div><div class="ht151-category-rail" aria-label="Filter tasks by category"><button type="button" data-quick-category="" class="ht151-category-chip ${!state.browseFilters.category?'selected':''}">All jobs</button>${Object.entries(categories).map(([cat,ic])=>`<button type="button" class="ht151-category-chip ${state.browseFilters.category===cat?'selected':''}" data-quick-category="${e(cat)}">${icon(ic,16)} ${e(cat)}</button>`).join('')}</div><div class="mobile-search-tools"><label class="mobile-quick-search" for="mobileJobSearch">${icon('search',19)}<input id="mobileJobSearch" type="search" placeholder="Search nearby jobs" aria-label="Search jobs" autocomplete="off" /></label><button class="mobile-filter-trigger" type="button" id="mobileFiltersButton" aria-expanded="false" aria-controls="mobileFiltersPanel">${icon('list',19)}<span>Filters</span></button></div>
 <div class="ht152-browse-columns"><div class="explore-search panel" id="mobileFiltersPanel">
  <div class="explore-search-primary"><label class="explore-search-field explore-query"><span>Search jobs</span><input class="control search" id="searchInput" placeholder="Search jobs, skills, or keywords…"/></label><label class="explore-search-field explore-location"><span>Location</span><input class="control" id="nearLocation" placeholder="City, ZIP, or street address" value="${e(state.nearbyLabel)}" autocomplete="off"/></label><label class="explore-search-field explore-distance"><span>Distance</span><select class="control" id="nearRadius"><option value="0">Any distance</option>${[5,10,15,25,50,100].map(n=>`<option value="${n}" ${state.nearbyRadius===n?'selected':''}>Within ${n} mi</option>`).join('')}</select></label><button class="btn btn-primary explore-apply" id="nearSearch">Search area</button></div>
  <div class="explore-search-secondary"><label><span>Category</span><select id="categoryFilter" class="control"><option value="">All categories</option>${options(Object.keys(categories))}</select></label><label><span>Difficulty</span><select id="difficultyFilter" class="control"><option value="">Any difficulty</option>${options(['Easy','Medium','Hard'])}</select></label><label><span>Budget</span><select id="priceFilter" class="control"><option value="">Any budget</option><option value="100">Under $100</option><option value="200">Under $200</option><option value="500">Under $500</option></select></label><button class="btn btn-secondary" id="resetFilters">Clear filters</button><button class="btn btn-secondary" id="useMyLocation">${icon('pin',16)} My location</button></div>
  <div class="ht1532-sidebar-toggles" role="group" aria-label="Listing visibility filters"><h3>Listing visibility</h3><label class="offer-hide-filter"><input type="checkbox" id="hideOwnListings" ${state.hideOwnListings?'checked':''}/> <span>Hide my listings</span></label>${state.me?`<label class="offer-hide-filter"><input type="checkbox" id="hideOfferedJobs" ${state.hideOfferedJobs?'checked':''}/> <span>Hide jobs I've offered on</span></label>`:''}</div>
  <p class="mock-meta explore-location-status" id="radiusStatus">${state.nearbyCenter?`Searching around ${e(state.nearbyLabel)}.`:'Distance is measured in straight-line miles. Enter a location and click Search area to apply.'}</p>
 </div>
 <div class="ht152-browse-results"><div class="browse-toolbar"><div><strong id="resultCount">${filteredJobs().length} available jobs</strong><span class="map-hint">Blue circles show approximate locations. Exact addresses are private until hiring.</span></div><div class="ht-sort-wrap"><label for="jobSort">Sort by</label><select id="jobSort" class="control"><option value="newest" ${state.jobSort==='newest'?'selected':''}>Newest first</option><option value="highest" ${state.jobSort==='highest'?'selected':''}>Highest pay</option><option value="nearest" ${state.jobSort==='nearest'?'selected':''}>Closest distance</option><option value="match" ${state.jobSort==='match'?'selected':''}>Best match</option><option value="soonest" ${state.jobSort==='soonest'?'selected':''}>Soonest scheduled</option></select></div><div class="view-toggle"><button id="listMode" class="${state.mapMode==='list'?'selected':''}" aria-pressed="${state.mapMode==='list'}">List</button><button id="mapMode" class="${state.mapMode==='map'?'selected':''}" aria-pressed="${state.mapMode==='map'}">Map</button></div></div><div class="job-grid ht153-scroll-results" id="jobResults" ${state.mapMode==='map'?'hidden':''}>${jobResults(filteredJobs())}</div><div id="mapPanel" ${state.mapMode!=='map'?'hidden':''}><div class="mobile-map-header"><strong>${icon('map',18)} Nearby jobs</strong><button class="mini-btn" type="button" id="mobileMapExpand" aria-pressed="false">Expand map</button></div><div id="jobMap" role="region" aria-label="Map of available jobs"></div><p class="map-hint map-attribution">Map data © OpenStreetMap contributors. Blue circles show approximate job areas, never exact addresses. Your personal pin is visible only to you: exact after granting location permission, otherwise your approximate saved city. Circles expand visually when zoomed out; near street level located jobs use a half-mile-diameter privacy area. Internet access required for map tiles.</p><div id="mapStatus" class="inline-note" role="status">Loading job locations...</div><div id="unmappedJobs"></div></div></div></div></section>`}
function jobResults(jobs){const eligible=jobs.filter(j=>j.status==='open');return eligible.length?eligible.map(jobCard).join(''):`<div class="empty"><h3>${state.browseFeaturedOnly?'No featured matches':'No open jobs match'}</h3><p>${state.browseFeaturedOnly?e(featuredEmptyText()):'Try clearing your filters or choosing a different category.'}</p><button type="button" class="btn btn-secondary" data-clear-empty-filters>Clear filters</button></div>`}
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
function filteredJobs(){const q=($('searchInput')?.value||'').toLowerCase(),c=$('categoryFilter')?.value,d=$('difficultyFilter')?.value,p=Number($('priceFilter')?.value||0);
 const featuredIds=state.browseFeaturedOnly?new Set(featuredJobs().map(x=>x.job.id)):null;
 return state.jobs.filter(j=>(!featuredIds||featuredIds.has(j.id))&&j.status==='open'&&(!state.hideOwnListings||!mine(j))&&(!state.hideOfferedJobs||role()!=='worker'||!hasOfferForJob(j))&&(!c||j.category===c)&&(!d||j.difficulty===d)&&(!p||j.budget<p)&&(!q||[j.title,j.location,j.description,j.category].join(' ').toLowerCase().includes(q))&&(!state.nearbyRadius||!state.nearbyCenter||(jobCoordinates(j)&&milesBetween(state.nearbyCenter,jobCoordinates(j))<=state.nearbyRadius)))
 .sort((a,b)=>{const distance=x=>{const d=visibleMiles(x);return d==null?1e9:d};
   if(state.jobSort==='soonest'){const when=x=>{const slots=(x.slots||[]).map(z=>Date.parse(z.start||'')).filter(Number.isFinite);const start=Date.parse(x.scheduled_start||'');return Number.isFinite(start)?start:slots.length?Math.min(...slots):Number.MAX_SAFE_INTEGER};return when(a)-when(b)||Number(b.created_at)-Number(a.created_at)}
   if(state.jobSort==='highest')return Number(b.budget)-Number(a.budget)||Number(b.created_at)-Number(a.created_at);
   if(state.jobSort==='nearest')return distance(a)-distance(b)||Number(b.created_at)-Number(a.created_at);
   if(state.jobSort==='match'){const score=x=>featuredSkillScore(x,skillTerms())+(state.workerPreferences?.categories||[]).includes(x.category)*12;return score(b)-score(a)||distance(a)-distance(b)||Number(b.created_at)-Number(a.created_at)};
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
   const status=$('radiusStatus');if(status)status.textContent='Location unavailable. Distances use your saved profile city; enter a city or select My location to retry.';
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
 $('useMyLocation').onclick=()=>{ht1543UserPickedLocation=false;if(!navigator.geolocation)return toast('Browser location is not supported.');$('radiusStatus').textContent='Requesting location permission…';navigator.geolocation.getCurrentPosition(pos=>{state.personalGeo=[pos.coords.latitude,pos.coords.longitude];state.nearbyCenter=state.personalGeo;state.nearbyLabel='Your current location';input.value=state.nearbyLabel;state.nearbyRadius=Number(range.value)||25;range.value=String(state.nearbyRadius);filterJobs();updateMyLocationPin();$('radiusStatus').textContent=`Within ${state.nearbyRadius} miles of your current location.`},err=>{toast('Location permission denied or unavailable. Enter a city instead.');$('radiusStatus').textContent='Enter a location to search manually.'},{enableHighAccuracy:false,timeout:10000})};
}

function filterJobs(){state.browseFilters={query:$('searchInput')?.value||'',category:$('categoryFilter')?.value||'',difficulty:$('difficultyFilter')?.value||'',price:$('priceFilter')?.value||''};try{sessionStorage.setItem('ht154_browse_filters',JSON.stringify(state.browseFilters))}catch{};if($('mobileJobSearch')&&$('mobileJobSearch').value!==state.browseFilters.query)$('mobileJobSearch').value=state.browseFilters.query;document.querySelectorAll('[data-quick-category]').forEach(x=>x.classList.toggle('selected',x.dataset.quickCategory===state.browseFilters.category));const countBadge=document.querySelector('.ht151-discovery-count');if(countBadge)countBadge.textContent=filteredJobs().length+' available';const jobs=filteredJobs();$('resultCount').textContent=`${jobs.length} open job${jobs.length===1?'':'s'}`;if(state.mapMode==='map'){drawMapPins(jobs);return;}$('jobResults').innerHTML=jobResults(jobs);document.querySelectorAll('#jobResults [data-card-job]').forEach(el=>{
 el.onclick=ev=>{if(isNestedCardControl(ev,el))return;openJob(Number(el.dataset.cardJob));};
 el.onkeydown=ev=>{if(ev.target===el&&(ev.key==='Enter'||ev.key===' ')){ev.preventDefault();openJob(Number(el.dataset.cardJob));}};
});document.querySelectorAll('#jobResults [data-save-job]').forEach(el=>el.onclick=ev=>{ev.stopPropagation();toggleSavedJob(Number(el.dataset.saveJob))});document.querySelectorAll('#jobResults [data-clear-empty-filters]').forEach(el=>el.onclick=()=>{$('resetFilters')?.click()})}
function setBrowseMode(mode){closeMobileMap();if(state.mapMode===mode)return;state.browseFilters={query:$('searchInput')?.value||'',category:$('categoryFilter')?.value||'',difficulty:$('difficultyFilter')?.value||'',price:$('priceFilter')?.value||''};if(window.jobMap){window.jobMap.remove();window.jobMap=null;myLocationMarker=null}state.mapMode=mode;localStorage.setItem('hometask_browse_mode',mode);render();}

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
function renderPinPopup(j){return `<div class="job-map-popup"><span class="kicker">${e(j.category)}</span>${mine(j)?`<span class="tag own-listing-tag">${icon("house",12)} Your listing</span>`:""}${hasOfferForJob(j)?'<span class="tag offer-sent-tag">✓ Offer sent</span>':''}<h3>${e(j.title)}</h3>${j.has_main_photo?`<img class="map-popup-photo" src="/api/jobs/${j.id}/main-photo" loading="lazy" alt="Job photo"/>`:""}<div class="popup-price">${dollars(j.budget)}</div><p>${icon("pin",14)} ${e(coarseLocation(j.location)||'Approximate area')} · ${e(j.difficulty)} · ${e(durationText(Number(j.duration_minutes||120)))}${j.offer_deadline?` · Offers close ${e(j.offer_deadline)}`:''}</p><button class="btn btn-primary map-job-link" data-map-job="${j.id}">${role()==='worker'?'View job & make offer':'View job'}</button></div>`}
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
  if(!city){if(myLocationMarker){map.removeLayer(myLocationMarker);myLocationMarker=null;}return;}
  pos=areaLookup(city);
  if(!pos){try{pos=await geocodeSearchCenter(city)}catch{return;}}
 }
 if(window.jobMap!==map||!pos||pos.length!==2)return;
 if(myLocationMarker){map.removeLayer(myLocationMarker);myLocationMarker=null;}
 const symbol='<span class="my-map-pin-inner" aria-hidden="true">'+icon('user',17)+'</span>';
 const glyph=L.divIcon({html:symbol,iconSize:[38,38],iconAnchor:[19,19],className:'my-map-pin'});
 myLocationMarker=L.marker(pos,{icon:glyph,zIndexOffset:1000,keyboard:true}).addTo(map);
 myLocationMarker.bindPopup(precise?'<strong>Your location</strong><p>Only shown on your device after you allowed location access.</p>':'<strong>Your saved city</strong><p>Approximate city center, not your exact position. Only shown on your map.</p>');
}
function initJobMap(){
 if(state.view!=='browse'||state.mapMode!=='map'||!$('jobMap'))return;
 if(typeof L==='undefined'){$('mapStatus').textContent='The map library could not load. Check your internet connection, or use List view.';return;}
 if(window.jobMap)return;
 window.jobMap=L.map('jobMap',{scrollWheelZoom:true}).setView([43.1566,-77.6088],11);
 L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap contributors',maxZoom:18}).addTo(window.jobMap);
 mapLayer=L.featureGroup().addTo(window.jobMap);
 window.jobMap.on('popupopen',event=>{const button=event.popup.getElement()?.querySelector('[data-map-job]');if(button)button.onclick=()=>openJob(Number(button.dataset.mapJob));});
 window.jobMap.on('zoomend',resizeJobMapCircles);
 drawMapPins(filteredJobs());
 updateMyLocationPin();
 setTimeout(()=>window.jobMap?.invalidateSize(),150);
}
async function drawMapPins(jobs){
 if(!window.jobMap||!mapLayer)return;
 const sequence=++mapDrawSequence;
 mapLayer.clearLayers();
 const missing=[],pinJobs=[];
 for(const j of jobs){
  const coordinates=jobCoordinates(j);
  if(coordinates)pinJobs.push({j,coords:coordinates});else missing.push(j);
 }
 const addPin=({j,coords})=>{
  if(sequence!==mapDrawSequence||!window.jobMap)return;
  // Precise-address jobs show a half-mile DIAMETER blue area only. The true
  // coordinate is NEVER rendered on the browse map.
  const preciseArea=j.map_latitude!=null&&j.map_longitude!=null;
  const basePrivacyRadius=preciseArea?Math.max(402.336,Number(j.map_radius_m)||402.336):2200; // City-only entries have broad approximate areas.
  const radius=visibleJobCircleRadius(basePrivacyRadius,coords[0],window.jobMap.getZoom());
  const circle=L.circle(coords,{
   radius,basePrivacyRadius,color:'#1768dd',weight:2,fillColor:'#3186ff',fillOpacity:0.19,
   opacity:0.88,interactive:true
  });
  circle.bindPopup(renderPinPopup(j),{maxWidth:300,autoPan:false}).addTo(mapLayer);
  // Mouse hover opens the job summary; tapping still works on phones.
  let hoverCloseTimer=null;
  circle.on('mouseover',()=>{if(!window.matchMedia('(hover: hover)').matches)return;clearTimeout(hoverCloseTimer);circle.openPopup();const popupEl=circle.getPopup()?.getElement();if(popupEl&&!popupEl.dataset.hoverBound){popupEl.dataset.hoverBound='1';popupEl.addEventListener('mouseenter',()=>clearTimeout(hoverCloseTimer));popupEl.addEventListener('mouseleave',()=>circle.closePopup());}});
  circle.on('mouseout',()=>{if(!window.matchMedia('(hover: hover)').matches)return;hoverCloseTimer=setTimeout(()=>{if(!circle.getPopup()?.getElement()?.matches(':hover'))circle.closePopup()},360)});
 };
 pinJobs.forEach(addPin);
 if(mapLayer.getLayers().length){window.jobMap.fitBounds(mapLayer.getBounds().pad(0.35),{maxZoom:13});resizeJobMapCircles();}
 const status=$('mapStatus');
 status.textContent=missing.length?`${pinJobs.length} of ${jobs.length} jobs mapped. Looking up ${missing.length} additional area${missing.length===1?'':'s'}...`:`${pinJobs.length} job${pinJobs.length===1?'':'s'} shown on the map.`;
 const unresolved=[];
 for(let i=0;i<missing.length;i++){
  if(sequence!==mapDrawSequence)return;
  const j=missing[i];const coords=await resolveGeo(j.location);
  if(sequence!==mapDrawSequence)return;
  if(coords){addPin({j,coords});pinJobs.push({j,coords});}
  else unresolved.push(j);
  if(i<missing.length-1)await new Promise(resolve=>setTimeout(resolve,1100));
 }
 if(sequence!==mapDrawSequence)return;
 if(pinJobs.length){window.jobMap.fitBounds(mapLayer.getBounds().pad(0.35),{maxZoom:13});resizeJobMapCircles();}
 status.textContent=jobs.length?`${pinJobs.length} of ${jobs.length} matching jobs shown on the map.${unresolved.length?' Some locations could not be located.':''}`:'No open jobs match these filters.';
 const un=$('unmappedJobs');
 if(un)un.innerHTML=unresolved.length?`<div class="unmapped"><strong>Jobs without a map pin</strong><p>These locations could not be found. You can still open each listing:</p>${unresolved.map(j=>`<button class="mini-btn" data-unmapped="${j.id}">${e(j.title)} · ${dollars(j.budget)}</button>`).join('')}</div>`:'';
 document.querySelectorAll('[data-unmapped]').forEach(el=>el.onclick=()=>openJob(Number(el.dataset.unmapped)));
}
function openPhotoLightbox(data){const dialog=document.createElement('div');dialog.className='photo-lightbox';dialog.innerHTML=`<button type="button" class="icon-btn photo-lightbox-close" aria-label="Close photo">×</button><div class="photo-lightbox-frame"><img src="${e(data)}" alt="Full size photo"/></div><div class="photo-lightbox-tools"><button type="button" id="togglePhotoFit" class="mini-btn">Fit entire image</button><label>Zoom <input id="photoViewerZoom" type="range" min="100" max="250" value="100" step="10"/></label></div>`;document.body.appendChild(dialog);const remove=()=>dialog.remove();dialog.onclick=ev=>{if(ev.target===dialog||ev.target.closest('.photo-lightbox-close'))remove()};const img=dialog.querySelector('img'),zoom=dialog.querySelector('#photoViewerZoom');zoom.oninput=()=>img.style.transform=`scale(${Number(zoom.value)/100})`;dialog.querySelector('#togglePhotoFit').onclick=ev=>{img.classList.toggle('photo-contain');ev.target.textContent=img.classList.contains('photo-contain')?'Fill preview':'Fit entire image'};}
let jobExistingPhotos=[], jobDraftUrls=[], jobPhotoOrder=[];
function jobPhotoKeyList(){return [...document.querySelectorAll('#photoDraftPreviews [data-photo-key]')].map(node=>node.dataset.photoKey)}
function drawOrderedJobPhotos(){
 const root=$('photoDraftPreviews');if(!root)return;
 const newFiles=Array.from($('jobPhotoInput')?.files||[]);
 const items=[...jobExistingPhotos.map(p=>({key:'existing:'+p.id,src:p.photo_data,alt:'Existing job image'})),
  ...newFiles.map((file,i)=>({key:'new:'+i,src:jobDraftUrls[i],alt:file.name}))];
 const keys=items.map(i=>i.key);jobPhotoOrder=[...jobPhotoOrder.filter(k=>keys.includes(k)),...keys.filter(k=>!jobPhotoOrder.includes(k))];
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
 return {title:fd.get('title')||'',category:fd.get('category')||'Other',difficulty:fd.get('difficulty')||'Medium',description:fd.get('description')||'',location:fd.get('location')||'',budget:fd.get('budget')||'',latitude:fd.get('latitude')||'',longitude:fd.get('longitude')||'',offer_deadline:fd.get('offer_deadline')||'',duration_minutes:Number(fd.get('duration_minutes')||120),flexible_schedule:!!$('flexibleSchedule')?.checked,slots:draftSlots};
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
 try{const res=await api(state.editingDraftId?`/job-drafts/${state.editingDraftId}`:'/job-drafts',state.editingDraftId?'PUT':'POST',{fields:draft});if(res.id)state.editingDraftId=res.id;htDraftLast=JSON.stringify(draft);state.jobDraft=draft;state.jobDraftLoaded=true;toast('Task draft saved.');state.view='saved-drafts';render();loadSavedTaskDrafts()}
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
function jobForm(j){const initial=j||(!editedJob&&state.jobDraft)||{};return `<section class="page"><div class="page-title"><span class="kicker">HOMETASK</span><h1>${j?'Edit task':'Post a new task'}</h1><p>Help workers understand the task so they can make accurate offers.</p></div><div class="form-layout"><form class="panel" id="postJobForm" data-id="${j?.id||''}"><div class="field-grid"><div class="field full"><label>Task title</label><input class="control" name="title" maxlength="100" required minlength="4" value="${e(initial.title||'')}" placeholder="Example: Assemble a new dresser"/></div><div class="field"><label>Category</label><select class="control" name="category">${options(Object.keys(categories),initial.category)}</select></div><div class="field"><label>Difficulty</label><select class="control" name="difficulty">${options(['Easy','Medium','Hard'],initial.difficulty||'Medium')}</select></div><div class="field full"><label>Description</label><textarea class="control" name="description" minlength="10" required placeholder="Describe the size of the task, materials, and any tools needed.">${e(initial.description||'')}</textarea></div><div class="field full"><label>Task photos (up to 5)</label><input class="control" type="file" name="job_photos" id="jobPhotoInput" accept="image/*" multiple/><small>Photos are optional and must be reattached after leaving the page; draft text and schedules save automatically. Drag photos to reorder them. The photo in the first slot automatically becomes the main image on task listings. Use the arrow buttons on touch devices if needed.</small><div id="photoDraftPreviews" class="photo-gallery"></div><div id="editPhotos" class="photo-gallery"></div></div><div class="field full address-field"><label for="addressInput">Task address</label><div class="address-search"><input id="addressInput" class="control" name="location" maxlength="120" autocomplete="off" required value="${e(initial.location||'')}" placeholder="Start typing a street address..." aria-autocomplete="list" aria-controls="addressSuggestions" aria-expanded="false"/><div id="addressSuggestions" class="address-suggestions" role="listbox" hidden></div></div><input type="hidden" name="latitude" value="${initial.latitude??''}"/><input type="hidden" name="longitude" value="${initial.longitude??''}"/><small id="addressHelp">Choose an address from the suggestions to place the map pin accurately. The exact address will only be shown to your hired worker.</small></div><div class="field"><label>Offer deadline (optional)</label><input class="control" type="date" name="offer_deadline" value="${e(initial.offer_deadline||'')}"/><small>Workers can submit offers through this date. Leave blank to keep offers open.</small></div><div class="field"><label>Budget ($)</label><input class="control" name="budget" type="number" min="1" max="1000000" required value="${initial.budget||''}" placeholder="100"/></div></div>${scheduleFields(j||(!editedJob?initial:null))}<div class="hero-actions"><button class="btn btn-secondary" type="button" id="previewJobButton">Preview listing</button><button class="btn btn-primary" type="submit">${j?'Save changes':'Publish task'}</button>${!j?'<button type="button" class="btn btn-secondary" id="saveTaskDraft">Save draft</button>':''}${!j?'<button type="button" class="btn btn-secondary ht153-discard" id="discardJobDraft">Discard draft</button>':''}</div></form><aside class="panel ht151-post-aside"><div class="ht151-post-guide"><span class="kicker">POSTING CHECKLIST</span><h3>Ready to publish?</h3><p class="mock-meta">A complete posting helps workers respond with accurate offers.</p><div id="ht151PostingReadiness" role="status" aria-live="polite"></div></div><h3>Tips for better offers</h3><div class="help-list"><div class="help-item"><span class="help-num">1</span><span>Choose a clear, specific job title.</span></div><div class="help-item"><span class="help-num">2</span><span>Describe what tools and materials are needed.</span></div><div class="help-item"><span class="help-num">3</span><span>Choose a suggested street address for an accurate map pin. Only hired workers can see the full address.</span></div></div></aside></div></section>`}
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
 const payload={title:fd.get('title'),description:fd.get('description'),category:fd.get('category'),location:fd.get('location'),difficulty:fd.get('difficulty'),budget:Number(fd.get('budget')),offer_deadline:fd.get('offer_deadline')||null,latitude:fd.get('latitude')!==''?Number(fd.get('latitude')):null,longitude:fd.get('longitude')!==''?Number(fd.get('longitude')):null,duration_minutes:Number(fd.get('duration_minutes')||120),flexible_schedule:!!$('flexibleSchedule')?.checked,slots:draftSlots};
 if(payload.latitude===null||payload.longitude===null){toast('Select a suggested address to set the map location.');f.querySelector('#addressInput').focus();return;}
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
 const filters=[['all','All active tasks'],['open','Posted tasks'],['accepted','In progress']];
 return `<section class="page"><div class="dashboard-head"><div class="page-title" style="margin:0"><span class="kicker">HOMETASK</span><h1>My tasks</h1><p>Manage your listings and follow up with workers.</p></div><div class="ht152-head-actions"><button class="btn btn-secondary" data-view="saved-drafts">Saved drafts</button><button class="btn btn-primary" id="dashboardPrimary">Post a task</button></div></div>
 <div class="stats">${[
  ['In progress',owned.filter(j=>j.status==='accepted').length,'dashboard:accepted'],
  ['Posted tasks',owned.filter(j=>j.status==='open').length,'dashboard:open'],
  ['Current offers',currentOfferTotal(),'current-offers'],
  ['Completed tasks',owned.filter(j=>j.status==='completed').length,'history']
 ].map(([name,n,target])=>`<button type="button" class="stat stat-clickable" data-stat-target="${target}"><span>${e(name)}</span><strong>${n}</strong></button>`).join('')}</div>
 <div class="panel"><div class="section-head"><div><h3>${filter==='open'?'Posted tasks':filter==='accepted'?'Tasks in progress':'Active task listings'}</h3><p class="mock-meta">${displayed.length} task${displayed.length===1?'':'s'}</p></div><div class="segment-pills">${filters.map(([key,label])=>`<button class="mini-btn ${filter===key?'selected':''}" data-job-filter="${key}">${label}</button>`).join('')}</div></div><label class="ht154-list-search">${icon('search',18)}<input class="control" id="ht154CustomerSearch" type="search" aria-label="Search my tasks" placeholder="Search my tasks" value="${e(state.ht154CustomerQuery||'')}"/></label><div class="stack">${displayed.length?displayed.map(j=>`<article class="dashboard-job interactive-job-card" tabindex="0" data-card-job="${j.id}" aria-label="View ${e(j.title)}">${compactJobPhoto(j)}<div class="dashboard-job-head"><div><strong>${e(j.title)}</strong><p class="mock-meta">${e(j.category)} · ${e(j.location)} · ${dollars(j.budget)}</p></div><span class="status ${statusClass(j)}">${status(j)}</span></div>${j.assigned_worker_name?`<p class="mock-meta">Worker: ${e(j.assigned_worker_name)} · ${dollars(j.accepted_price)}</p><div class="ht152-task-access"><button class="mini-btn" data-workspace-job="${j.id}">Open task workspace →</button></div>`:''}<div class="mini-actions">${j.status==='open'?`<button class="mini-btn" data-edit="${j.id}">Edit</button><button class="mini-btn" data-offers="${j.id}">Compare offers (${j.offer_count})</button><button class="mini-btn" data-cancel="${j.id}">Cancel listing</button>`:''}${j.status==='accepted'?`<button class="mini-btn" data-chat-worker="${j.id}:${j.assigned_worker_id}">Message worker</button>${j.completion_requested_at?`<button class="mini-btn" data-complete="${j.id}">Confirm finished work</button>`:`<span class="tag">Waiting for worker to finish</span>`}${!j.completion_requested_at&&!j.completion_rejected_at?`<button class="mini-btn" data-cancel="${j.id}">Cancel task</button>`:`<button class="mini-btn" data-job="${j.id}">Resolve work issue</button>`}`:''}</div></article>`).join(''):`<div class="empty">No ${filter==='all'?'active':filter} tasks right now.</div>`}</div></div></section>`;
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
async function openJob(id){
 modal(`${modalHead('Loading task details','TASK')}<div class="ht154-skeleton" role="status" aria-label="Loading task"><div></div><div></div><div></div></div>`);
 try{const j=await api(`/jobs/${id}`);try{j.photos=(await api(`/jobs/${id}/photos`)).photos||[]}catch{j.photos=[]}state.detail=j;state.partner=null;showJobDetail(j)}catch(err){closeModal();toast(err.message)}
}
function modal(inner){$('modalRoot').innerHTML=`<div class="modal-backdrop" id="modalBackdrop"><div class="modal" role="dialog" aria-modal="true" aria-label="HomeTask dialog" tabindex="-1">${inner}</div></div>`;$('modalBackdrop').onclick=ev=>{if(ev.target.id==='modalBackdrop')closeModal()};document.querySelectorAll('#modalRoot [data-dismiss]').forEach(el=>el.onclick=closeModal)}
function closeModal(){$('modalRoot').innerHTML=''}
function modalHead(title,label='JOB DETAILS'){return `<div class="modal-head"><div><span class="kicker">${label}</span><h2 style="font-size:31px;margin:8px 0">${e(title)}</h2></div><button class="icon-btn" data-dismiss>×</button></div>`}
function showJobDetail(j){
 const owner=mine(j),myOffer=isWorkerOffer(j);
 const offerExpired=!!j.offer_deadline&&j.offer_deadline<localDatetime(0).slice(0,10);
 const canOffer=state.me&&role()==='worker'&&!owner&&j.status==='open'&&!offerExpired&&!state.blockedUsers.some(u=>u.id===j.owner_id);
 const rejected=myOffer?.decision==='rejected';
 const counterPending=myOffer?.counter_status==='pending';
 const photoBlock=j.photos?.length?`<section class="ht1533-photo-section" aria-label="Task photos"><div class="ht1533-photo-heading"><h3>Task photos</h3><span>${j.photos.length} ${j.photos.length===1?'photo':'photos'}</span></div><button type="button" class="ht1533-photo-primary" data-photo-open="${j.photos[0].id}" aria-label="View first task photo"><img src="${e(j.photos[0].photo_data)}" alt="Main customer-provided task photo" /></button>${j.photos.length>1?`<div class="ht1533-photo-thumbs">${j.photos.map((p,i)=>`<button type="button" class="ht1533-photo-thumb" data-photo-open="${p.id}" aria-label="View task photo ${i+1}"><img src="${e(p.photo_data)}" alt="Additional task photo ${i+1}" loading="lazy"/></button>`).join('')}</div>`:''}</section>`:'';
 const hasLongDescription=String(j.description||'').length>440;
 const taskDescription=hasLongDescription?`<div class="ht1533-description ht1533-description-collapsed" id="ht1533Description"><p class="detail-description">${e(j.description||'No description provided.')}</p></div><button type="button" class="ht1533-read-more" id="ht1533ReadMore" aria-expanded="false">Read full description ${icon('arrow',15)}</button>`:`<div class="ht1533-description"><p class="detail-description">${e(j.description||'No description provided.')}</p></div>`;
 const taskStage=j.status==='open'?'Open for offers':j.status==='accepted'?'Worker hired':j.status==='completed'?'Work completed':j.status==='cancelled'?'Cancelled':status(j);
 const isParticipant=!!state.me&&(owner||j.assigned_worker_id===state.me.id);

 modal(`<div class="ht1533-detail-root"><div class="ht1533-detail-top">${modalHead(j.title,'TASK DETAILS')}<div class="ht1533-status-line"><span class="status ${statusClass(j)}">${e(taskStage)}</span>${owner?`<span class="tag own-listing-tag">${icon('house',12)} Your listing</span>`:''}<span class="ht1533-category">${e(j.category)}</span></div><div class="ht1533-at-a-glance">${icon('pin',15)} <span>${e(j.location)}</span><span class="ht1533-sep">·</span>${icon('clock',15)} <span>${e(durationText(Number(j.duration_minutes||120)))}</span></div></div>
 ${photoBlock}
 <section class="ht1533-detail-section ht1533-overview"><div class="ht1533-section-heading"><h3>About this task</h3><span>${e(j.difficulty)} difficulty</span></div>${taskDescription}<div class="ht1533-posted-meta">Posted by ${state.me&&j.owner_id!==state.me.id?`<button class="text-link" id="jobOwnerProfile">${e(j.owner_name)}</button>`:e(j.owner_name)} · ${date(j.created_at)}${j.offer_deadline?` · Offers close ${e(j.offer_deadline)}`:''}</div></section>
 <div class="ht1533-key-facts"><div class="ht1533-fact"><span>Listed budget</span><strong>${dollars(j.budget)}</strong></div><div class="ht1533-fact"><span>Estimated duration</span><strong>${e(durationText(Number(j.duration_minutes||120)))}</strong></div><div class="ht1533-fact"><span>Difficulty</span><strong>${e(j.difficulty)}</strong></div></div>
 ${j.assigned_worker_name?`<section class="ht1533-detail-section ht1533-hired"><div class="ht1533-section-heading"><h3>Selected worker</h3><span class="ht1533-hired-tag">${icon('check',14)} Hired</span></div><div class="ht1533-worker-row">${avatar(j.assigned_worker_id,j.assigned_worker_name)}<div class="ht1533-worker-copy"><strong>${e(j.assigned_worker_name)}</strong><small>Assigned to this task</small></div><button class="mini-btn" type="button" id="assignedProfile">View profile ${icon('arrow',15)}</button></div></section>`:''}
 ${isParticipant?jobProgressPanel(j):''}
 ${j.status==='accepted'||j.status==='completed'?appointmentPanel(j):''}
 ${state.me&&(owner||j.assigned_worker_id===state.me.id)&&['accepted','completed'].includes(j.status)?'<div class="ht-results-root" id="jobResultPhotos"><p class="mock-meta">Loading before-and-after photos…</p></div>':''}
 ${owner?`<div class="hero-actions">${j.status==='open'?`<button class="btn btn-secondary" id="compareButton">Compare offers (${j.offer_count})</button><button class="btn btn-secondary" id="editButton">Edit job</button><button class="btn btn-secondary" id="cancelJobDetail">Cancel task</button>`:''}${j.status==='accepted'?`<button class="btn btn-primary" id="messageAssignedWorker">${icon('message',17)} Message worker</button>`:''}</div>`:''}
 ${j.status==='open'&&(j.slots||[]).length?`<div class="inline-note"><strong>Customer availability:</strong> ${j.slots.map(x=>e(schedulePretty(x.start))+' – '+e(schedulePretty(x.end))).join(' · ')}</div>`:''}
 ${counterPending?`<div class="negotiation-notice"><strong>Customer counteroffer: ${dollars(myOffer.counter_price)}</strong><p>${e(myOffer.counter_note||'The customer proposed a different price.')}</p><p>Your previous offer was ${dollars(myOffer.price)}. Accept the new price or decline to keep your earlier offer pending.</p><div class="mini-actions"><button class="btn btn-primary" id="acceptCustomerCounter">Accept ${dollars(myOffer.counter_price)}</button><button class="btn btn-secondary" id="declineCustomerCounter">Decline counteroffer</button></div></div>`:''}
 ${canOffer&&!counterPending?`<form id="offerForm" class="offer-form"><h3>${rejected?'Resubmit at original posted price':myOffer?'Update your offer':'Submit an offer'}</h3>${rejected?'<p class="inline-note">The customer declined your last offer. You can still apply again at their original listed budget.</p>':''}<p class="mock-meta">You can include job-specific details in your offer. HomeTask's 10% commission is deducted from the agreed price. Direct messaging opens after hiring and, when test payments are enabled, confirmed checkout.</p><div class="field-grid"><div class="field"><label>Your price ($)</label><input class="control" type="number" name="price" min="1" max="1000000" required value="${rejected?j.budget:myOffer?.price||j.budget}" ${rejected?'readonly':''}/></div><div class="field"><label>Note to customer</label><input class="control" name="note" maxlength="400" value="${e(myOffer?.note||'')}" placeholder="Tools and experience"/></div></div>${proposedTimeField(j,myOffer)}<div class="ht-fee-breakdown" id="workerOfferFeePreview" aria-live="polite">Offer price <strong>${moneyCents(workerPaymentBreakdown(rejected?j.budget:myOffer?.price||j.budget).gross)}</strong> · HomeTask fee (10%) <strong>−${moneyCents(workerPaymentBreakdown(rejected?j.budget:myOffer?.price||j.budget).fee)}</strong> · Expected payout <strong>${workerNetPrice(rejected?j.budget:myOffer?.price||j.budget)}</strong></div><div class="inline-note" id="workerScheduleNotice">Choose a time to check for HomeTask schedule conflicts.</div><div class="mini-actions"><button class="btn btn-primary" type="submit">${rejected?'Resubmit original offer':myOffer?'Update offer':'Submit offer'}</button>${myOffer&&!rejected?'<button class="btn btn-secondary" type="button" id="withdrawButton">Withdraw</button>':''}</div></form>`:''}
 ${state.me&&role()==='worker'&&!owner&&j.status==='open'?`<button class="mini-btn" id="detailSaveJob">${icon('bookmark',16)} ${state.savedJobIds.includes(j.id)?'Saved · Remove bookmark':'Save for later'}</button>`:''}
 ${state.me&&j.assigned_worker_id&&j.accepted_offer_id&&(owner||j.assigned_worker_id===state.me.id)?`<div class="hero-actions"><button class="btn btn-secondary" id="openTaskWorkspace">Open private task workspace</button></div>`:''}
 ${state.me?`<div class="hero-actions job-report-row">${!owner?`<button class="mini-btn" id="reportJobButton">Report listing</button>`:''}${(owner||j.assigned_worker_id===state.me.id)&&['accepted','completed','cancelled'].includes(j.status)?`<button class="mini-btn" id="reportDisputeButton">Open job dispute</button>`:''}</div>`:''}
 ${!state.me?'<div class="hero-actions"><button class="btn btn-primary" id="loginForOffer">Log in to make an offer</button></div>':''}
 ${state.me&&!owner&&(j.status!=='open'||offerExpired)?'<div class="inline-note">This job is no longer accepting offers.</div>':''}
 ${state.me&&j.assigned_worker_id&&(owner||j.assigned_worker_id===state.me.id)&&['accepted','completed','cancelled'].includes(j.status)&&!(owner&&j.status==='accepted')?`<div class="hero-actions"><button class="btn btn-secondary" id="messagesButton">${j.status==='accepted'?'Open messages':'View message history'}</button></div>`:''}
 ${j.status==='accepted'&&state.me&&(owner||j.assigned_worker_id===state.me.id)?`<div class="completion-flow"><h3>Job completion</h3>${j.completion_rejected_at&&!j.completion_requested_at?'<div class="inline-note">Changes have been requested after work was submitted. The booking remains active. Cancellation is locked; use the dispute option above if needed.</div>':''}${j.completion_requested_at?`<div class="inline-note">The worker marked this work finished. ${e(j.completion_note||'')} ${owner?'Please approve, request changes, or open a dispute within 48 hours.':'Customer has 48 hours to approve, request changes, or open a dispute. If no issue is opened, the task becomes eligible for transfer review.'}</div>`:`<p class="mock-meta">${owner?'The worker needs to mark this job finished before you can confirm completion.':'When the work is done, request confirmation from the customer.'}</p>`}<div class="mini-actions">${owner&&j.completion_requested_at?`<button class="btn btn-primary" data-complete="${j.id}">Confirm completed</button><button class="btn btn-secondary" data-job-changes="${j.id}">Request changes</button>`:''}${!owner&&j.assigned_worker_id===state.me.id&&!j.completion_requested_at?`<button class="btn btn-primary" data-job-finished="${j.id}">Mark work finished</button>`:''}${!j.completion_requested_at&&!j.completion_rejected_at?'<button class="btn btn-secondary" id="cancelJobDetail">Cancel scheduled job</button>':'<span class="inline-note">Work was submitted for completion. Cancellation is locked. If there is a disagreement, open a job dispute above for admin review. This does not process or guarantee payment.</span>'}</div></div>`:''}
 ${j.status==='completed'&&state.me&&(owner||j.assigned_worker_id===state.me.id)?`<div class="hero-actions"><button class="btn btn-primary" id="leaveReview">${reviewButtonText(j.id)}</button></div>`:''}</div>`);
 bindAppointmentPanel(j);
 if($('ht1533ReadMore'))$('ht1533ReadMore').onclick=()=>{const desc=$('ht1533Description'),button=$('ht1533ReadMore');const expanded=!desc.classList.toggle('ht1533-description-collapsed');button.setAttribute('aria-expanded',String(expanded));button.innerHTML=expanded?'Show less':`Read full description ${icon('arrow',15)}`;};
 if($('jobOwnerProfile'))$('jobOwnerProfile').onclick=()=>openPublicProfile(j.owner_id);
 document.querySelectorAll('[data-photo-open]').forEach(b=>b.onclick=()=>{const p=j.photos.find(x=>x.id===Number(b.dataset.photoOpen));if(p)openPhotoLightbox(p.photo_data)});
 if($('openTaskWorkspace'))$('openTaskWorkspace').onclick=()=>{closeModal();openTaskWorkspace(j.id)};
 if($('offerForm')){$('offerForm').onsubmit=ev=>submitOffer(ev,j.id);const priceInput=$('offerForm').elements.price;const feeTarget=$('workerOfferFeePreview');if(priceInput&&feeTarget)priceInput.addEventListener('input',()=>{const q=workerPaymentBreakdown(priceInput.value);feeTarget.innerHTML=`Offer price <strong>${moneyCents(q.gross)}</strong> · HomeTask fee (10%) <strong>−${moneyCents(q.fee)}</strong> · Expected payout <strong>${moneyCents(q.net)}</strong>`});bindOfferDuration(j);if($('offerSlotSelect'))$('offerSlotSelect').onchange=()=>{$('offerCustomTimes').hidden=$('offerSlotSelect').value!=='other';bindOfferDuration(j)};showWorkerConflictWarning(j);}
 if($('acceptCustomerCounter'))$('acceptCustomerCounter').onclick=()=>respondCustomerCounter(j.id,true);
 if($('declineCustomerCounter'))$('declineCustomerCounter').onclick=()=>respondCustomerCounter(j.id,false);
 if($('withdrawButton'))$('withdrawButton').onclick=()=>withdraw(j.id);
 if($('assignedProfile'))$('assignedProfile').onclick=()=>openPublicProfile(j.assigned_worker_id);
 if($('cancelJobDetail'))$('cancelJobDetail').onclick=()=>showCancelJob(j.id);
 document.querySelectorAll('#modalRoot [data-job-finished]').forEach(b=>b.onclick=()=>requestWorkFinished(j.id));
 document.querySelectorAll('#modalRoot [data-job-changes]').forEach(b=>b.onclick=()=>requestWorkChanges(j.id));
 document.querySelectorAll('#modalRoot [data-complete]').forEach(b=>b.onclick=()=>completeJob(j.id));
 if($('messageAssignedWorker'))$('messageAssignedWorker').onclick=()=>showMessages(j.id,j.assigned_worker_id,j.assigned_worker_name);
 if($('compareButton'))$('compareButton').onclick=()=>showOffers(j.id);
 if($('leaveReview'))$('leaveReview').onclick=()=>reviewJob(j.id);
 if($('editButton'))$('editButton').onclick=()=>navEdit(j.id);
 if($('loginForOffer'))$('loginForOffer').onclick=showAuth;
 if($('reportJobButton'))$('reportJobButton').onclick=()=>showReportDialog('job',j.id);
 if($('reportDisputeButton'))$('reportDisputeButton').onclick=()=>showReportDialog('job',j.id,'dispute');
 if($('detailSaveJob'))$('detailSaveJob').onclick=async()=>{await toggleSavedJob(j.id);closeModal();await openJob(j.id)};
 if($('messagesButton'))$('messagesButton').onclick=()=>showMessages(j.id,owner?j.assigned_worker_id:j.owner_id,owner?j.assigned_worker_name:j.owner_name);
 if($('jobResultPhotos'))loadJobResultPhotos(j);
}
async function submitOffer(ev,id){
 ev.preventDefault();if(($('offerSlotSelect')?.value||'other')==='other'&&validateDurationParts('offerCustom')===null){$('offerCustomMinutes')?.reportValidity();return}
 const fd=new FormData(ev.target),details={price:Number(fd.get('price')),note:fd.get('note'),...offerSchedule(state.detail)};
 if(!Number.isFinite(details.price)||details.price<=0)return toast('Enter a valid offer price.');
 const breakup=workerPaymentBreakdown(details.price),jobTitle=state.detail?.title||'this task';
 // A self-contained confirmation preserves the offer form state when cancelled.
 const confirmDialog=document.createElement('div');confirmDialog.className='ht152-offer-backdrop';confirmDialog.setAttribute('role','presentation');
 confirmDialog.innerHTML=`<section class="ht152-offer-confirm" role="dialog" aria-modal="true" aria-labelledby="ht152OfferTitle"><h2 id="ht152OfferTitle">Confirm your offer</h2><p class="mock-meta">Review before submitting to the customer.</p><dl><div><dt>Task</dt><dd>${e(jobTitle)}</dd></div><div><dt>Offer price</dt><dd>${moneyCents(breakup.gross)}</dd></div><div><dt>HomeTask fee (10%)</dt><dd>−${moneyCents(breakup.fee)}</dd></div><div class="ht152-net-row"><dt>Estimated payout</dt><dd>${moneyCents(breakup.net)}</dd></div><div><dt>Scheduled time</dt><dd>${e(scheduledWindow(details.proposed_start,details.proposed_end))}</dd></div><div><dt>Message</dt><dd>${e(details.note||'No note')}</dd></div></dl><div class="hero-actions"><button type="button" class="btn btn-secondary" id="ht152OfferEdit">Edit offer</button><button type="button" class="btn btn-primary" id="ht152OfferSend">Confirm & send</button></div></section>`;
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
async function showOffers(id){
 try{
  const j=await api(`/jobs/${id}`);if(!mine(j))return toast('Only the customer can compare offers.');
  state.detail=j;
  const comparison=await api(`/jobs/${id}/offer-comparison`).catch(()=>({offers:[]}));
  const workerData=new Map((comparison.offers||[]).map(row=>[Number(row.id),row]));
  modal(`${modalHead(j.title,'WORKER OFFERS')}<p class="mock-meta">Listed budget: ${dollars(j.budget)} · You may counter a worker's price, hire them, or decline their offer.</p>
  <div class="ht151-compare-intro ht156-compare-intro"><span>${icon('shield',20)} Compare actual reviews and completed work before hiring.</span><span>${j.offers.length} offer${j.offers.length===1?'':'s'} received</span></div><div class="ht-offer-compare-grid ht156-offer-grid">${j.offers.length?j.offers.map(o=>`<div class="offer-card offer-comparison ht156-offer-card ${o.decision==='rejected'?'declined-offer':''}">
   <div class="ht151-offer-label">${o.price===Math.min(...j.offers.filter(x=>x.decision!=='rejected').map(x=>Number(x.price)))&&o.decision!=='rejected'?'Lowest current offer':'Worker proposal'}</div><div class="offer-worker-head"><button class="person-link" data-worker="${o.worker_id}">${avatar(o.worker_id,o.worker_name)}<span class="ht1532-worker-identity"><strong>${e(o.worker_name)}</strong><span class="ht1532-worker-rating">${(()=>{const m=workerData.get(Number(o.id))||{};return ratingStars(m.rating,m.review_count)})()}</span><small>${e(o.worker_skills||'View worker profile')}</small></span></button>${o.decision==='rejected'?'<span class="status status-completed">Declined</span>':''}</div>
   <div class="ht1532-worker-details">${(()=>{const m=workerData.get(Number(o.id))||{};return `<span>${icon('briefcase',14)} ${Number(m.completed_jobs||0)} completed jobs</span><span>${icon('shield',14)} ${m.verified?'Profile reviewed':'Not yet reviewed'}</span>`})()}</div><div class="offer-meta ht151-offer-meta"><strong>${dollars(o.price)}<small>Proposed price</small></strong><small>${e(o.note||'No additional note')}</small><small>Scheduled time: ${e(scheduledWindow(o.proposed_start,o.proposed_end))}</small>${o.proposed_start?`<small>Requested duration: <strong>${e(durationText(intervalMinutes(o.proposed_start,o.proposed_end,j.duration_minutes||120)))}</strong>${intervalMinutes(o.proposed_start,o.proposed_end,j.duration_minutes||120)!==Number(j.duration_minutes||120)?' (different from estimate)':''}</small>`:''}</div>
   ${o.counter_status==='pending'?`<div class="negotiation-notice small">Your counteroffer: <strong>${dollars(o.counter_price)}</strong>. Awaiting the worker's response.</div>`:''}
   ${o.counter_status==='declined'?'<div class="inline-note">The worker declined your counteroffer; their original offer is still pending.</div>':''}
   ${o.counter_status==='accepted'?'<div class="inline-note">Worker accepted your counteroffer.</div>':''}
   <div class="mini-actions">${o.id===j.accepted_offer_id&&['accepted','completed','cancelled'].includes(j.status)?`<button class="mini-btn" data-message="${o.worker_id}" data-name="${e(o.worker_name)}">${j.status==='accepted'?'Message hired worker':'View messages'}</button>`:''}${j.status==='open'&&o.decision!=='rejected'?`<button class="mini-btn" data-counter="${o.id}" ${o.counter_status==='pending'?'disabled':''}>Counteroffer</button><button class="mini-btn ht156-hire-btn" data-accept="${o.id}" ${o.counter_status==='pending'?'disabled':''}>Hire worker</button><button class="mini-btn" data-reject="${o.id}">Decline</button>`:''}</div>
  </div>`).join(''):'<div class="empty">No offers yet.</div>'}</div>`);
  $('modalRoot')?.querySelector('.modal')?.classList.add('ht-comparison-modal');
  document.querySelectorAll('[data-accept]').forEach(x=>x.onclick=()=>acceptOffer(id,Number(x.dataset.accept)));
  document.querySelectorAll('[data-reject]').forEach(x=>x.onclick=()=>rejectOffer(id,Number(x.dataset.reject)));
  document.querySelectorAll('[data-counter]').forEach(x=>x.onclick=()=>showCustomerCounter(id,Number(x.dataset.counter)));
  document.querySelectorAll('[data-worker]').forEach(x=>x.onclick=()=>openPublicProfile(Number(x.dataset.worker)));
  document.querySelectorAll('[data-message]').forEach(x=>x.onclick=()=>showMessages(id,Number(x.dataset.message),x.dataset.name));
 }catch(err){toast(err.message)}
}
async function rejectOffer(jobId,offerId){if(!confirm('Decline this worker offer? They can still resubmit at your original listed budget.'))return;try{await api(`/jobs/${jobId}/offers/${offerId}/reject`,'POST');await refresh();await showOffers(jobId);toast('Offer declined. Worker can reapply at the original budget.')}catch(err){toast(err.message)}}
async function workerProfile(workerId){return openPublicProfile(workerId)}
async function acceptOffer(jobId,offerId){
 try{
  const quote=await api(`/payments/quote/${jobId}/${offerId}`);
  if(quote.mode==='configuration_error')return toast('Stripe payment configuration is incomplete. Ask the HomeTask administrator to fix the test checkout settings.');
  const test=quote.mode==='stripe_test';
  modal(`${modalHead('Review your booking','HOMETASK CHECKOUT')}<p class="mock-meta">Hiring the worker confirms the agreed task price. Messaging and exact address sharing open after booking is confirmed.</p><div class="ht-checkout-breakdown"><div><span>Agreed task price</span><strong>${moneyCents(quote.agreed_price_cents)}</strong></div><div><span>Customer service fee (5%)</span><strong>${moneyCents(quote.service_fee_cents)}</strong></div><div class="ht-total"><span>Total at checkout</span><strong>${moneyCents(quote.checkout_total_cents)}</strong></div></div>${test?'<div class="inline-note"><strong>Stripe TEST mode.</strong> Use Stripe test card details only. No actual money will be charged. The worker is hired only after Stripe confirms the test payment.</div>':'<div class="inline-note"><strong>Demo booking only.</strong> Checkout is not configured. No funds are collected or reserved, and no worker payment is guaranteed.</div>'}<div class="hero-actions"><button class="btn btn-primary" id="confirmPaymentHire">${test?'Continue to Stripe test checkout':'Confirm unfunded demo booking'}</button><button class="btn btn-secondary" id="cancelPaymentHire">Back to offers</button></div>`);
  $('cancelPaymentHire').onclick=()=>showOffers(jobId);
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
 // Appointments are exclusively jobs this account posted and hired someone to complete.
 // Worker-side bookings belong in My assignments, even if the same account has both roles.
 const bookings=state.jobs.filter(j=>j.status==='accepted'&&mine(j));
 const upcoming=bookings.filter(j=>j.scheduled_start).sort((a,b)=>a.scheduled_start.localeCompare(b.scheduled_start));
 const unscheduled=bookings.filter(j=>!j.scheduled_start),filter=state.appointmentFilter;
 const showScheduled=filter!=='unscheduled',showWaiting=filter!=='scheduled';
 return `<section class="page workspace-page"><div class="page-title"><span class="kicker">MY SCHEDULE</span><h1>Appointments</h1><p>Manage jobs where you hired a worker. Work you've accepted as a worker is listed under My assignments in the Worker Portal.</p></div>
 <div class="stats">${[['Scheduled',upcoming.length,'appointments:scheduled'],['Awaiting time',unscheduled.length,'appointments:unscheduled']].map(([label,num,target])=>`<button class="stat stat-clickable" data-stat-target="${target}"><span>${label}</span><strong>${num}</strong></button>`).join('')}</div>
 <div class="segment-pills appointment-pills">${[['all','All appointments'],['scheduled','Scheduled'],['unscheduled','Awaiting time']].map(([k,label])=>`<button class="mini-btn ${k===filter?'selected':''}" data-appointment-filter="${k}">${label}</button>`).join('')}</div>
 ${showScheduled?`<div class="panel"><h3>Scheduled appointments</h3><div class="stack">${upcoming.length?upcoming.map(j=>`<article class="dashboard-job interactive-job-card" data-card-job="${j.id}" role="button" tabindex="0" aria-label="View appointment for ${e(j.title)}">${compactJobPhoto(j)}<div class="dashboard-job-head"><div><strong>${e(j.title)}</strong><p class="mock-meta">${icon('calendar',16)} ${e(schedulePretty(j.scheduled_start))} – ${e(schedulePretty(j.scheduled_end))}</p><p class="mock-meta">${icon('pin',16)} ${e(j.location)}</p></div><span class="status status-accepted">Confirmed</span></div></article>`).join(''):'<div class="empty">No scheduled appointments yet.</div>'}</div></div>`:''}
 ${showWaiting?`<div class="panel" style="margin-top:18px"><h3>Awaiting a time</h3><div class="stack">${unscheduled.length?unscheduled.map(j=>`<article class="dashboard-job interactive-job-card" data-card-job="${j.id}" role="button" tabindex="0" aria-label="Set an appointment time for ${e(j.title)}">${compactJobPhoto(j)}<strong>${e(j.title)}</strong><p class="mock-meta">Time not confirmed. Select this job to arrange a time.</p></article>`).join(''):'<div class="empty">No appointments awaiting a time.</div>'}</div></div>`:''}</section>`;
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
 <div class="panel"><div class="section-head"><h3>${role()==='customer'?'Past tasks':'Past jobs'}</h3><span class="tag">${jobs.length} matching ${jobs.length===1?(role()==='customer'?'task':'job'):(role()==='customer'?'tasks':'jobs')}</span></div><div class="stack">${jobs.length?jobs.map(j=>`<article class="dashboard-job interactive-job-card" role="button" tabindex="0" data-card-job="${j.id}" aria-label="View ${e(j.title)} in job history">${compactJobPhoto(j)}<div class="dashboard-job-head"><div><strong>${e(j.title)}</strong><p class="mock-meta">${e(j.category)} · ${e(j.location)} · ${date(j.completed_at||j.cancelled_at||j.created_at)}</p></div><span class="status ${statusClass(j)}">${j.status==='cancelled'||j.status==='closed'?'Cancelled':e(j.status)}</span></div>${['cancelled','closed'].includes(j.status)?`<p class="mock-meta">Cancellation: ${e(j.cancel_reason||'Reason not specified')}</p>`:''}${mine(j)&&j.assigned_worker_id?`<button class="history-person" data-person="${j.assigned_worker_id}">${avatar(j.assigned_worker_id,j.assigned_worker_name)}<span><strong>${e(j.assigned_worker_name)}</strong><small>View worker profile</small></span>${icon('arrow',16)}</button>`:''}${j.status==='completed'?`<div class="mini-actions"><button class="mini-btn" data-review="${j.id}">${reviewButtonText(j.id)}</button></div>`:''}</article>`).join(''):'<div class="empty"><h3>No items match</h3><p>Try clearing the filters or searching for another job.</p></div>'}</div></div></section>`;
}
function settingsPage(){
 if(!state.me)return signInPrompt();
 return `<section class="page workspace-page"><div class="page-title"><span class="kicker">ACCOUNT</span><h1>Settings</h1><p>Manage your HomeTask preferences and account tools.</p></div><div class="form-layout"><div class="panel"><h3>Your account</h3><div class="settings-photo-row">${state.me.avatar_data?`<button type="button" id="adjustSettingsAvatar" class="settings-avatar-adjust editable-image-preview" title="Adjust current photo" aria-label="Adjust current profile picture">${avatar(state.me.id,state.me.name,true)}</button>`:avatar(state.me.id,state.me.name,true)}<div><strong>Profile photo</strong><p class="mock-meta">Choose a photo to replace the current picture.</p><label class="mini-btn upload-photo-button">Change photo<input type="file" id="settingsAvatarUpload" accept="image/png,image/jpeg,image/webp" hidden/></label>${state.me.avatar_data?'<button class="mini-btn" id="settingsRemoveAvatar">Remove photo</button>':''}</div></div><div class="help-list"><div class="help-item"><span class="help-num">${icon("user",18)}</span><div><strong>Public profile</strong><p class="mock-meta">Change your photo, profile banner, skills, and personal information.</p><button class="mini-btn" data-view="profile">Edit profile</button></div></div><div class="help-item"><span class="help-num">${icon("calendar",18)}</span><div><strong>Google Calendar</strong><p class="mock-meta">Connect your calendar to synchronize confirmed appointments when OAuth is configured.</p><button class="mini-btn" id="settingsCalendar">Calendar settings</button></div></div><div class="help-item"><span class="help-num">${icon("chart",18)}</span><div><strong>Analytics</strong><p class="mock-meta">Review lifetime totals, past work, and activity.</p><button class="mini-btn" data-view="analytics">Open analytics</button></div></div><div class="help-item"><span class="help-num">${icon('message',18)}</span><div><strong>Help & walkthroughs</strong><p class="mock-meta">Learn how to ${role()==='customer'?'post, hire, schedule, and review':'find jobs, make offers, schedule work, and get reviews'}.</p><button class="mini-btn" data-view="help">Open help guide</button></div></div><div class="help-item"><span class="help-num">${icon('user',18)}</span><div><strong>${role()==='worker'?'Previous Work portfolio':'Following'}</strong><p class="mock-meta">${role()==='worker'?'Show finished projects to prospective customers.':'Find workers you follow and revisit their portfolios.'}</p><button class="mini-btn" data-view="${role()==='worker'?'previous-work':'following'}">Open</button></div></div>${role()==='worker'?`<div class="help-item"><span class="help-num">${icon('calendar',18)}</span><div><strong>Weekly availability</strong><p class="mock-meta">Set usual working days and preferred hours.</p><button class="mini-btn" data-view="worker-availability">Edit availability</button></div></div><div class="help-item"><span class="help-num">${icon('check',18)}</span><div><strong>${state.me.profile_verified?'You’re verified':'Profile verification'}</strong><p class="mock-meta">${state.me.profile_verified?'Your HomeTask profile has been approved.': 'Request verification of your submitted profile information.'}</p><button class="mini-btn" data-view="verification">${state.me.profile_verified?'You’re verified':'Get verified'}</button></div></div>`:''}<div class="help-item"><span class="help-num">${icon('star',18)}</span><div><strong>My reviews</strong><p class="mock-meta">See every review you have submitted and delete a review if needed.</p><button class="mini-btn" data-view="my-reviews">Open my reviews</button></div></div></div></div><aside class="panel"><h3>Privacy & security</h3><div class="settings-safety-actions"><button class="btn btn-secondary" type="button" data-view="account-security">Password, email & account controls</button>${role()==='worker'?'<button class="btn btn-secondary" type="button" data-view="worker-preferences">Job matching preferences</button>':''}<button class="btn btn-secondary" type="button" data-view="payment-readiness">Payments & fees</button></div><p class="mock-meta">Signed in as ${e(state.me.email)}</p><div class="inline-note">Exact job addresses are shown only to the customer and assigned worker. Profile reviews are limited to self-reported information, not identity or background verification. Keep this prototype private until production security is complete.</div><button class="btn btn-secondary" id="logoutButton" style="margin-top:18px">Log out</button></aside></div></section>`;
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
  ['Find work','Open Find jobs to search by keywords, category, difficulty, budget, and distance from a location. Switch between the list and map.','browse'],
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
async function showExistingImageEditor(kind){
 if(!state.me)return;
 const isBanner=kind==='banner',url=isBanner?state.me.banner_data:state.me.avatar_data;
 if(!url){toast('Upload a photo first to adjust it.');return;}
 const prefix=isBanner?'banner':'avatar';
 const current={x:framingValue(prefix+'_x'),y:framingValue(prefix+'_y'),zoom:framingValue(prefix+'_zoom')};
 modal(`${modalHead(isBanner?'Adjust your current banner':'Adjust your current profile photo','IMAGE POSITION & ZOOM')}<p class="mock-meta">Change how your current image is displayed. You do not need to upload it again.</p><div class="upload-frame-preview ${isBanner?'banner-upload-preview':'avatar-upload-preview'}"><img id="uploadFrameImage" src="${e(url)}" alt="Current ${isBanner?'banner':'profile photo'} preview" /></div><div class="framing-controls upload-framing-controls"><div class="framing-sliders">${[['x','Left / right',0,100],['y','Up / down',0,100],['zoom','Zoom',100,180]].map(([key,label,min,max])=>`<label>${label}<input type="range" min="${min}" max="${max}" step="1" value="${current[key]}" data-upload-frame="${key}"/></label>`).join('')}</div></div><div class="hero-actions"><button type="button" class="btn btn-primary" id="saveFramedImage">Save adjustments</button><button type="button" class="btn btn-secondary" id="cancelFramedImage">Cancel</button></div>`);
 const preview=$('uploadFrameImage');const update=()=>{if(!preview)return;preview.style.objectPosition=`${current.x}% ${current.y}%`;preview.style.transform=`scale(${current.zoom/100})`;};
 document.querySelectorAll('[data-upload-frame]').forEach(input=>input.oninput=()=>{current[input.dataset.uploadFrame]=Number(input.value);update();});update();
 $('cancelFramedImage').onclick=closeModal;
 $('saveFramedImage').onclick=async()=>{
  const button=$('saveFramedImage');button.disabled=true;button.textContent='Saving…';
  try{const settings={...state.imageFraming,[prefix+'_x']:current.x,[prefix+'_y']:current.y,[prefix+'_zoom']:current.zoom};await api('/profile/image-framing','PUT',settings);state.imageFraming=settings;closeModal();await refresh();render();toast('Image framing saved.');}
  catch(err){button.disabled=false;button.textContent='Save adjustments';toast(err.message);}
 };
}
async function showImageUploadEditor(file,kind){
 const isBanner=kind==='banner';const max=isBanner?8000000:5000000;
 if(!['image/png','image/jpeg','image/webp'].includes(file.type)||file.size>max){toast(`Choose a JPG, PNG or WebP image under ${max/1000000} MB.`);return;}
 const url=URL.createObjectURL(file),current={x:50,y:50,zoom:100};
 modal(`${modalHead(isBanner?'Position your profile banner':'Position your profile photo','IMAGE UPLOAD')}<p class="mock-meta">Move and zoom the image to choose how it appears. The framing is saved with your new photo.</p><div class="upload-frame-preview ${isBanner?'banner-upload-preview':'avatar-upload-preview'}"><img id="uploadFrameImage" src="${e(url)}" alt="New ${isBanner?'banner':'profile photo'} preview" /></div><div class="framing-controls upload-framing-controls"><div class="framing-sliders">${[['x','Left / right',0,100],['y','Up / down',0,100],['zoom','Zoom',100,180]].map(([key,label,min,max])=>`<label>${label}<input type="range" min="${min}" max="${max}" step="1" value="${current[key]}" data-upload-frame="${key}"/></label>`).join('')}</div></div><div class="hero-actions"><button type="button" class="btn btn-primary" id="saveFramedImage">Save ${isBanner?'banner':'profile photo'}</button><button type="button" class="btn btn-secondary" id="cancelFramedImage">Cancel</button></div>`);
 let disposed=false;const dispose=()=>{if(!disposed){disposed=true;URL.revokeObjectURL(url)}};
 const preview=$('uploadFrameImage');const update=()=>{preview.style.objectPosition=`${current.x}% ${current.y}%`;preview.style.transform=`scale(${current.zoom/100})`};
 document.querySelectorAll('[data-upload-frame]').forEach(input=>input.oninput=()=>{current[input.dataset.uploadFrame]=Number(input.value);update()});update();
 $('cancelFramedImage').onclick=()=>{dispose();closeModal()};
 $('saveFramedImage').onclick=async()=>{const button=$('saveFramedImage');button.disabled=true;button.textContent='Saving…';try{
  let data;
  if(isBanner)data=await compressJobPhoto(file);
  else{const image=new Image();await new Promise((resolve,reject)=>{image.onload=resolve;image.onerror=reject;image.src=url});const canvas=document.createElement('canvas');const scale=Math.min(1,600/Math.max(image.width,image.height));canvas.width=Math.max(1,Math.round(image.width*scale));canvas.height=Math.max(1,Math.round(image.height*scale));canvas.getContext('2d').drawImage(image,0,0,canvas.width,canvas.height);data=canvas.toDataURL('image/jpeg',.78)}
  const prefix=isBanner?'banner':'avatar';await api(`/profile/${prefix}`,'PUT',{data});const settings={...state.imageFraming,[prefix+'_x']:current.x,[prefix+'_y']:current.y,[prefix+'_zoom']:current.zoom};await api('/profile/image-framing','PUT',settings);state.imageFraming=settings;
  dispose();closeModal();await refresh();render();toast(isBanner?'Banner saved with your selected framing.':'Profile photo saved with your selected framing.');
 }catch(err){button.disabled=false;button.textContent='Try saving again';toast(err.message)}};
 // The object URL is released when a user closes the overlay using Escape or backdrop as well.
 const observer=new MutationObserver(()=>{if(!$('saveFramedImage')){dispose();observer.disconnect()}});observer.observe($('modalRoot'),{childList:true});
}
async function uploadAvatar(ev){const file=ev.target.files?.[0];if(file)await showImageUploadEditor(file,'avatar');}
async function uploadBanner(ev){const file=ev.target.files?.[0];if(file)await showImageUploadEditor(file,'banner');}
async function removeBanner(){try{await api('/profile/banner','PUT',{data:''});await refresh();render();toast('Profile banner removed.')}catch(err){toast(err.message)}}
function showProfileDropdown(){const el=$('profileMenu');if(!el)return;el.hidden=!state.me;}
async function switchWorkspace(next){
 if(!state.me)return showAuth();
 try{state.me=(await api('/profile','PUT',{name:state.me.name,role:next,bio:state.me.bio||'',skills:state.me.skills||'',location:state.me.location||''})).user;
 state.activeConversation=null;state.chatMessages=[];state.jobFilter='all';state.appointmentFilter='all';state.offerFilter='current';state.conversationFilter='all';welcomePhraseIndex=0;await refresh();nav('home');toast(`Switched to ${next==='worker'?'Worker Portal':'HomeTask'}.`)}catch(err){toast(err.message)}
}
function bindProfileDropdown(){
 const shell=$('profileShell'),menu=$('profileMenu'),trigger=$('profileButton');if(!shell||!menu||!trigger)return;
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
 const items=worker?[['home','Worker overview','house'],['browse','Find jobs','search'],['saved-jobs','Saved jobs','bookmark'],['offers','My offers','file'],['assignments','My assignments','briefcase'],['analytics','Earnings & insights','chart'],['worker-availability','Weekly availability','calendar'],['worker-preferences','Job preferences','settings'],['previous-work','Previous Work','image'],['verification',state.me?.profile_verified?'You’re verified':'Get verified','shield'],['inbox','Messages','message']]:[['home','HomeTask home','house'],['dashboard','My tasks','briefcase'],['post','Post a task','wrench'],['appointments','Appointments','calendar'],['current-offers','Current offers','file'],['following','Following','user'],['inbox','Messages','message']];
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
 const mode=activeWorkspace(),label=mode==='worker'?'Worker Portal':'HomeTask';
 const content=$('mobileMenuContent');if(!content)return;
 content.innerHTML=`<span class="mobile-sheet-kicker">${e(label)}</span><div class="mobile-sheet-links">${mobileMenuItems().map(([view,title,ico])=>`<button type="button" data-mobile-view="${view}" class="${state.view===view?'selected':''}">${icon(ico,19)}<span>${e(title)}</span>${state.view===view?icon('check',16):''}</button>`).join('')}</div>${state.me?`<div class="mobile-switch-box"><span class="mobile-sheet-kicker">Switch workspace</span><div class="mobile-switch-row"><button type="button" class="${mode==='customer'?'selected':''}" data-mobile-role="customer">HomeTask</button><button type="button" class="${mode==='worker'?'selected':''}" data-mobile-role="worker">Worker Portal</button></div></div>`:''}`;
 content.querySelectorAll('[data-mobile-view]').forEach(b=>b.onclick=()=>{const v=b.dataset.mobileView;closeMobileMenu();if(v==='login')showAuth();else if(v==='logout')logoutHomeTask();else if(v==='post')customerAction();else nav(v)});
 content.querySelectorAll('[data-mobile-role]').forEach(b=>b.onclick=()=>{const role=b.dataset.mobileRole;closeMobileMenu();if(role!==activeWorkspace())switchWorkspace(role)});
 if(trigger&&!trigger.dataset.mobileWired){trigger.onclick=()=>{if(!state.me&&state.view==='home'){/* Allow discovery navigation before sign-in. */}overlay.hidden=false;document.body.classList.add('mobile-menu-open');trigger.setAttribute('aria-expanded','true');overlay.querySelector('.mobile-menu-close')?.focus()};trigger.dataset.mobileWired='true'}
}
function closeMobileMap(){document.body.classList.remove('mobile-map-fullscreen');$('mapPanel')?.classList.remove('mobile-map-expanded');}
function closeMobileMenu(){const overlay=$('mobileMenuOverlay');if(overlay)overlay.hidden=true;document.body.classList.remove('mobile-menu-open');$('mobileMenuButton')?.setAttribute('aria-expanded','false')}
function restoreBrowseInputs(){const f=state.browseFilters||{};for(const [id,key] of [['searchInput','query'],['categoryFilter','category'],['difficultyFilter','difficulty'],['priceFilter','price']]){const el=$(id);if(el)el.value=f[key]||''}if($('mobileJobSearch'))$('mobileJobSearch').value=f.query||''}
function bindMobileBrowse(){
 const button=$('mobileFiltersButton'),search=$('mobileJobSearch'),panel=$('mobileFiltersPanel'),page=document.querySelector('.browse-page');const expand=$('mobileMapExpand');if(expand)expand.onclick=()=>{const target=$('mapPanel');if(!target)return;const expanded=target.classList.toggle('mobile-map-expanded');document.body.classList.toggle('mobile-map-fullscreen',expanded);expand.textContent=expanded?'Close full map':'Expand map';expand.setAttribute('aria-pressed',String(expanded));setTimeout(()=>window.jobMap?.invalidateSize(),100)};
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
 const steps=[['Describe the job','Tell workers what needs to be done'],['Location & budget','Set the job site, deadline and price'],['Schedule & review','Choose a time, preview and publish']];
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
  modal(`${modalHead('Make a counteroffer','PRICE NEGOTIATION')}<p>Worker: <strong>${e(offer.worker_name)}</strong></p><p>Worker's price: <strong>${dollars(offer.price)}</strong> · Job budget: ${dollars(j.budget)}</p><form id="customerCounterForm"><div class="field"><label>Your proposed price</label><input class="control" name="price" type="number" min="1" max="1000000" value="${j.budget}" required/></div><div class="field"><label>Counteroffer note</label><textarea class="control" name="note" maxlength="400" placeholder="Could you do the job for this amount?"></textarea></div><button class="btn btn-primary">Send counteroffer</button></form>`);
  $('customerCounterForm').onsubmit=async ev=>{ev.preventDefault();const d=new FormData(ev.target);try{await api(`/jobs/${jobId}/offers/${offerId}/counter`,'POST',{price:Number(d.get('price')),note:d.get('note')});await refresh();await showOffers(jobId);toast('Counteroffer sent to worker.')}catch(err){toast(err.message)}};
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
 const tab=state.publicProfileTab;const portfolioCats=[...new Set((u.portfolio||[]).map(p=>p.category).filter(Boolean))];const publicPortfolio=(u.portfolio||[]).filter(p=>state.portfolioCategory==='all'||p.category===state.portfolioCategory);const sortedReviews=[...(u.reviews||[])].sort((a,b)=>state.profileReviewSort==='highest'?Number(b.rating)-Number(a.rating):state.profileReviewSort==='lowest'?Number(a.rating)-Number(b.rating):Number(b.created_at||0)-Number(a.created_at||0));
 const verifiedGallery=(u.verified_results||[]).map((p,i)=>`<article class="portfolio-card ht-verified-case"><span class="tag">Completed on HomeTask · customer approved</span><h3>${e(p.title)}</h3><span class="mock-meta">${e(p.category)}</span><div class="ht-result-gallery"><button data-verified-photo="${i}:before" type="button"><img src="${e(p.before_photo)}" alt="Before completed job" loading="lazy"/><span>Before</span></button><button data-verified-photo="${i}:after" type="button"><img src="${e(p.after_photo)}" alt="After completed job" loading="lazy"/><span>After</span></button></div></article>`).join('');
 const gallery=publicPortfolio.map(p=>`<article class="portfolio-card ${p.featured?'ht153-featured-project':''}">${p.featured?'<span class="tag ht153-featured-label">★ Featured project</span>':''}<button type="button" class="photo-zoom" data-public-photo="${p.id}" aria-label="Expand portfolio photo"><img src="${e(p.photo_data)}" alt="${e(p.title)}" loading="lazy"/></button><div><span class="tag">${e(p.category)}</span><h3>${e(p.title)}</h3><p class="mock-meta">${e(p.description||'Work sample shared by the worker')}</p></div></article>`).join('');
 const completedHighlights=(u.completed_highlights||[]).map(p=>`<article class="portfolio-card ht-completed-highlight"><div><span class="tag">${icon('check',15)} Completed on HomeTask</span><h3>${e(p.category)} project</h3><p class="mock-meta">Completed ${date(p.completed_at)} · Confirmed by the customer</p><p class="mock-meta">Customer name, address and private job details are not displayed.</p></div></article>`).join('');
 const reviews=sortedReviews.map(r=>`<div class="review-tile">${reviewStarRow(r.rating)}<p class="ht155-review-comment${r.comment?'':' is-empty'}">${e(r.comment||'Rating only')}</p>${r.photo_data?`<button class="review-photo-button" data-review-photo="${e(r.photo_data)}" aria-label="Enlarge finished work photo"><img src="${e(r.photo_data)}" alt="Photo attached to review" loading="lazy"/></button>`:''}<small>${e(r.author_name)}</small>${r.recipient_reply?`<div class="ht153-review-reply"><strong>Response from ${e(u.name)}</strong><p>${e(r.recipient_reply)}</p></div>`:state.me?.id===u.id?`<button class="mini-btn" data-reply-review="${r.id}">Respond to review</button>`:''}</div>`).join('');
 return `<section class="page workspace-page public-profile-page" style="--avatar-x:${Number(u.image_framing?.avatar_x??50)}%;--avatar-y:${Number(u.image_framing?.avatar_y??50)}%;--avatar-scale:${Number(u.image_framing?.avatar_zoom??100)/100};--banner-x:${Number(u.image_framing?.banner_x??50)}%;--banner-y:${Number(u.image_framing?.banner_y??50)}%;--banner-scale:${Number(u.image_framing?.banner_zoom??100)/100}"><button class="mini-btn" id="backFromProfile">← Back</button><div class="profile-hero-card ${u.banner_data?'with-profile-banner':''}" ${u.banner_data?`style="--profile-cover:url('${e(u.banner_data)}')"`: ''}>${state.me?.id!==u.id?`<div class="profile-more"><button type="button" class="profile-more-toggle" id="profileMoreToggle" aria-label="More options for ${e(u.name)}" aria-expanded="false" aria-controls="profileMoreMenu" aria-haspopup="menu"><svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><circle cx="5" cy="12" r="2.2" fill="currentColor"/><circle cx="12" cy="12" r="2.2" fill="currentColor"/><circle cx="19" cy="12" r="2.2" fill="currentColor"/></svg></button><div class="profile-more-menu" id="profileMoreMenu" role="menu" hidden><button type="button" id="reportProfileAction">${icon('shield',15)} Report user</button><button type="button" id="blockProfileAction">${icon('user',15)} ${u.is_blocked?'Unblock user':'Block user'}</button></div></div>`:''}${state.me?.id===u.id&&u.banner_data?'<button class="public-banner-adjust" id="adjustPublicBanner" type="button" aria-label="Reposition my profile cover">Adjust cover image</button>':''}<div class="profile-head-identity">${state.me?.id===u.id&&u.avatar_data?`<button type="button" class="public-avatar-adjust" id="adjustPublicAvatar" aria-label="Reposition my profile picture">${avatar(u.id,u.name,true)}</button>`:avatar(u.id,u.name,true)}<div>${u.role==='worker'?'<span class="kicker">WORKER PROFILE</span>':''}<h1>${e(u.name)}</h1><p class="worker-profile-meta"><span class="profile-location-text">${icon('pin',15)} ${e(u.location||'Location not listed')}</span>${u.role==='worker'?`<span class="profile-review-status ${u.profile_verified?'profile-reviewed':''}">${u.profile_verified?'<img class="verified-house-icon" src="data:image/png;base64,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" alt=""/>':icon('shield',15)} ${e(u.verification)}</span>`:''}</p></div></div><div class="profile-metrics"><div><span>${u.role==='worker'?'Completed jobs':'Jobs posted'}</span><strong>${u.role==='worker'?(u.completed_jobs||0):(u.posted_jobs||0)}</strong></div><div><span>Rating</span><strong>${ratingStars(u.rating,u.review_count)}</strong></div>${u.role==='worker'?`<div><span>Followers</span><strong>${u.follower_count||0}</strong></div>`:''}<div><span>Reviews</span><strong>${u.review_count||0}</strong></div></div>${u.role==='worker'&&role()==='customer'&&u.id!==state.me.id&&!u.is_blocked?`<div class="hero-actions"><button class="btn ${u.is_following?'btn-secondary':'btn-primary'}" id="followWorker" title="${u.is_following?'Click to unfollow this worker':'Follow this worker'}" aria-label="${u.is_following?'Unfollow worker':'Follow worker'}">${icon('user',17)} ${u.is_following?'✓ Following':'Follow'}</button></div>`:''}</div>
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
 const saved=state.jobs.filter(j=>state.savedJobIds.includes(j.id));
 const query=String(state.ht154SavedQuery||'').toLowerCase().trim();const visible=saved.filter(j=>!query||[j.title,j.category,j.location,j.description].join(' ').toLowerCase().includes(query));
 return `<section class="page workspace-page"><div class="page-title"><span class="kicker">WORKER WORKSPACE</span><h1>Saved jobs</h1><p>Keep interesting jobs here until you're ready to send an offer.</p></div><label class="ht154-list-search">${icon('search',18)}<input class="control" id="ht154SavedSearch" type="search" placeholder="Search saved jobs by title, category or location" aria-label="Search saved jobs" value="${e(state.ht154SavedQuery||'')}"/></label><div class="job-grid" id="ht154SavedResults">${visible.length?visible.map(j=>`<article class="job-card interactive-job-card ht1532-saved-card" role="button" tabindex="0" data-card-job="${j.id}" aria-label="View saved job ${e(j.title)}">${compactJobPhoto(j)}<div class="job-top"><h3>${e(j.title)}</h3><strong>${dollars(j.budget)}</strong></div><p class="mock-meta">${e(j.location)} · ${e(j.category)}</p><span class="status ${statusClass(j)}">${status(j)}</span><div class="mini-actions"><span class="ht1532-card-hint">${icon('eye',16)} View job details</span><button class="btn btn-secondary" data-save-job="${j.id}">${icon('trash',15)} Remove saved job</button></div></article>`).join(''):'<div class="empty"><h3>Nothing saved yet</h3><p>Use Save job on an open listing to bookmark it here.</p><button class="btn btn-primary" data-view="browse">Find jobs</button></div>'}</div></section>`;
}
function bindSavedJobs(){/* Shared render handlers connect cards and saved-job actions. */}
async function toggleSavedJob(jobId){
 if(!state.me)return showAuth();
 const saved=state.savedJobIds.includes(jobId);
 try{await api(`/saved-jobs/${jobId}`,saved?'DELETE':'POST');await refresh();render();toast(saved?'Job removed from saved.':'Job saved for later.')}catch(err){toast(err.message)}
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
const weekdays=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
function workerAvailabilityPage(){
 if(!state.me)return signInPrompt();
 return `<section class="page workspace-page"><div class="page-title"><span class="kicker">WORKER SETTINGS</span><h1>Weekly availability</h1><p>Set the hours you usually accept work. HomeTask will warn about appointments outside your preferences and prevent overlapping confirmed jobs.</p></div><div class="panel"><form id="weeklyAvailabilityForm"><div id="weeklyAvailabilityRows" class="availability-days">Loading your schedule…</div><div class="hero-actions"><button class="btn btn-primary" type="submit">Save weekly availability</button><button class="btn btn-secondary" type="button" id="clearAvailability">Clear all days</button></div></form><div class="inline-note">These are typical hours, not automatic bookings. You can still offer times outside them if you choose. Existing confirmed HomeTask appointments cannot overlap.</div></div></section>`;
}
async function loadWeeklyAvailability(){
 const root=$('weeklyAvailabilityRows');if(!root)return;
 try{
  const data=await api('/worker-availability/me');state.weeklySlots=data.slots||[];
  root.innerHTML=weekdays.map((day,i)=>{const row=state.weeklySlots.find(x=>x.weekday===i);return `<div class="availability-row"><label><input type="checkbox" data-workday="${i}" ${row?'checked':''}/> ${day}</label><input class="control" aria-label="Start ${day}" type="time" data-workday-start="${i}" value="${row?row.start:'09:00'}"/><span>to</span><input class="control" aria-label="End ${day}" type="time" data-workday-end="${i}" value="${row?row.end:'17:00'}"/></div>`}).join('');
  $('weeklyAvailabilityForm').onsubmit=async ev=>{ev.preventDefault();const slots=weekdays.flatMap((day,i)=>document.querySelector(`[data-workday="${i}"]`).checked?[{weekday:i,start:document.querySelector(`[data-workday-start="${i}"]`).value,end:document.querySelector(`[data-workday-end="${i}"]`).value}]:[]);try{await api('/worker-availability/me','PUT',{slots});toast('Weekly availability saved.');await loadWeeklyAvailability()}catch(err){toast(err.message)}};
  $('clearAvailability').onclick=()=>{document.querySelectorAll('[data-workday]').forEach(cb=>cb.checked=false)};
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
   <form id="verificationForm"><div class="field"><label>Skills and work experience statement</label><textarea class="control" name="statement" minlength="30" maxlength="800" required placeholder="Describe your relevant training, experience and specialties.">${e(r?.statement||'')}</textarea></div><button class="btn btn-primary" type="submit">${r?'Resubmit verification request':'Request verification'}</button></form><p class="mock-meta">Only genuine administrator approval awards the Verified badge.</p>`;
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
   try{await api(`/verification/${id}/decision`,'POST',{approve});await loadVerificationAdmin();toast(approve?'Worker profile verified and notified.':'Request denied; worker notified.')}catch(err){toast(err.message)}
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
 if(!times.proposed_start||!times.proposed_end){display.textContent='Choose a proposed time to check for schedule conflicts.';return}
 try{const result=await api(`/worker-availability/check?start=${encodeURIComponent(times.proposed_start)}&end=${encodeURIComponent(times.proposed_end)}&job_id=${job.id}`);
  display.textContent=result.conflicts.length?'Conflict: you already have a confirmed HomeTask appointment during this time.':result.within_preferred_hours===false?'Outside your saved weekly availability, but you may still submit this time.':'No conflict with your confirmed HomeTask jobs.';
  display.classList.toggle('schedule-warning',result.conflicts.length>0);
 }catch(err){display.textContent=err.message}
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
   const d=await api('/admin/jobs?'+new URLSearchParams({q:filters.q||'',status:filters.status||'all',location:filters.location||'',category:filters.category||'',difficulty:filters.difficulty||''}));
   root.innerHTML=`<h2>Job management</h2><p class="mock-meta">Removing a listing hides it from public discovery. Existing bookings, offers and audit records remain preserved.</p>${adminSearchBar('jobs',['all','open','accepted','completed','cancelled','closed','removed'])}<form id="adminJobFeatures" class="admin-job-features"><label>Job location<input name="location" class="control" placeholder="City or area" value="${e(filters.location||'')}"/></label><label>Category<select name="category" class="control"><option value="">All categories</option>${Object.keys(categories).map(cat=>`<option value="${e(cat)}" ${filters.category===cat?'selected':''}>${e(cat)}</option>`).join('')}</select></label><label>Difficulty<select name="difficulty" class="control"><option value="">Any difficulty</option>${['Easy','Medium','Hard'].map(x=>`<option ${filters.difficulty===x?'selected':''} value="${x}">${x}</option>`).join('')}</select></label><button class="btn btn-secondary" type="submit">Search characteristics</button></form>${d.jobs.length?d.jobs.map(j=>`<article class="admin-record"><div class="admin-record-head"><div><strong>#${j.id} · ${e(j.title)}</strong><p class="mock-meta">Posted by ${e(j.owner_name)} · ${e(j.category)} · ${dollars(j.budget)}</p></div><span class="tag">${e(j.moderation_status==='removed'?'Removed':j.status)}</span></div><p class="mock-meta">${e(j.location)} · ${e(j.difficulty)} · ${j.offer_count} offers · ${adminDate(j.created_at)}</p><div class="mini-actions"><button class="mini-btn" data-admin-job="${j.id}:${j.moderation_status==='removed'?'restore':'remove'}">${j.moderation_status==='removed'?'Restore listing':'Remove listing'}</button></div></article>`).join(''):adminEmpty('No matching jobs.')}`;
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
  modal(`${modalHead('Job #'+j.id+' · '+e(j.title),'ADMIN / READ-ONLY JOB DETAILS')}<div class="detail-grid"><div class="detail-box"><span>Status</span><strong>${e(j.status)}</strong></div><div class="detail-box"><span>Budget</span><strong>${dollars(j.budget)}</strong></div><div class="detail-box"><span>Category</span><strong>${e(j.category)}</strong></div><div class="detail-box"><span>Difficulty</span><strong>${e(j.difficulty)}</strong></div></div><p><strong>Posted by:</strong> ${e(j.owner_name)}</p><p><strong>Location:</strong> ${e(j.location||'Not specified')}</p><p><strong>Moderation:</strong> ${e(j.moderation_status)}</p><h3>Job description</h3><p class="detail-description">${e(j.description)}</p><p class="mock-meta">Created ${adminDate(j.created_at)} · ${j.offer_count} offers</p><div class="hero-actions"><button type="button" class="btn btn-secondary" data-dismiss>Close job details</button></div>`);
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
 modal(`${modalHead('Preview your listing','BEFORE YOU PUBLISH')}<div class="listing-preview"><span class="tag">${e(d.category)}</span><h2>${e(d.title)}</h2><p>${e(d.description)}</p><p class="mock-meta">${icon('pin',15)} ${e(d.location)} · ${e(d.difficulty)} · ${e(duration)}</p><h3>Budget: ${dollars(Number(d.budget)||0)}</h3>${d.offer_deadline?`<p class="mock-meta">Offer deadline: ${e(d.offer_deadline)}</p>`:''}<p class="inline-note">Your exact address is visible only to you and the worker you hire. Once you publish, eligible workers can send offers.</p></div><div class="hero-actions"><button type="button" class="btn btn-secondary" id="previewBack">Back to editing</button><button type="button" class="btn btn-primary" id="previewPublish">${f.dataset.id?'Save changes':'Publish task'}</button></div>`);
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
 return `<section class="page workspace-page"><div class="page-title"><span class="kicker">WORKER PORTAL</span><h1>Job matching preferences</h1><p>Choose which types of work and what distance you prefer for your featured jobs.</p></div><form class="panel" id="workerPreferencesForm"><div class="field"><label>Maximum distance from your city (straight-line miles)</label><input class="control" type="number" name="radius_miles" min="1" max="100" value="${Number(pref.radius_miles)||25}" required/></div><h3>Preferred categories</h3><p class="mock-meta">Leave everything unchecked to match all your skills.</p><div class="preference-grid">${Object.keys(categories).map(cat=>`<label class="pref-check"><input type="checkbox" name="categories" value="${e(cat)}" ${pref.categories?.includes(cat)?'checked':''}/>${e(cat)}</label>`).join('')}</div><button class="btn btn-primary" type="submit">Save preferences</button></form></section>`;
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
