/* HomeTask Display — original geometric rounded vector alphabet.
 * Web-native glyph system, not a third-party typeface or a binary font file.
 * Includes A–Z, a–z, 0–9 and common greeting punctuation.
 * Shapes are hand-authored vector strokes with soft rounded terminals.
 */
(()=>{
 'use strict';
 const glyphs={
  a:['M9 12a4 4 0 1 1-8 0a4 4 0 1 1 8 0 M9 8v8',12],
  b:['M3 1v15 M3 12a4 4 0 1 1 8 0a4 4 0 1 1-8 0',12],
  c:['M10 8a4 4 0 1 0 0 7',12],
  d:['M9 1v15 M9 12a4 4 0 1 0-8 0a4 4 0 1 0 8 0',12],
  e:['M2 12h8a4 4 0 1 0-1.3 2.8',12],
  f:['M8 2H6a3 3 0 0 0-3 3v11 M1 8h8',10],
  g:['M9 12a4 4 0 1 0-8 0a4 4 0 1 0 8 0 M9 8v9a4 4 0 0 1-7 3',12],
  h:['M3 1v15 M3 11a4 4 0 0 1 8 0v5',13],
  i:['M4 8v8 M4 3v.2',8],
  j:['M7 8v10a4 4 0 0 1-5 4 M7 3v.2',10],
  k:['M3 1v15 M10 8l-7 5 7 3',12],
  l:['M4 1v15',8],
  m:['M2 8v8 M2 11a3 3 0 0 1 6 0v5 M8 11a3 3 0 0 1 6 0v5',16],
  n:['M3 8v8 M3 11a4 4 0 0 1 8 0v5',13],
  o:['M10 12a4 4 0 1 1-8 0a4 4 0 1 1 8 0',12],
  p:['M3 8v13 M3 12a4 4 0 1 1 8 0a4 4 0 1 1-8 0',12],
  q:['M9 8v13 M9 12a4 4 0 1 0-8 0a4 4 0 1 0 8 0',12],
  r:['M3 8v8 M3 12a4 4 0 0 1 6-3',11],
  s:['M10 9C8 7 3 7 3 10c0 2 7 1 7 4 0 3-5 4-8 1',12],
  t:['M5 3v10a3 3 0 0 0 4 3 M2 8h8',11],
  u:['M3 8v4a4 4 0 0 0 8 0V8 M11 12v4',13],
  v:['M2 8l4 8 4-8',12],
  w:['M2 8l3 8 3-6 3 6 3-8',16],
  x:['M2 8l8 8 M10 8l-8 8',12],
  y:['M2 8l4 8 4-8-4 12a4 4 0 0 1-4 2',12],
  z:['M2 8h8l-8 8h8',12],
  A:['M2 16L7 2l5 14 M4 11h6',14],
  B:['M3 2v14 M3 2h6a3.4 3.4 0 0 1 0 7H3 M3 9h6a3.5 3.5 0 0 1 0 7H3',14],
  C:['M12 4A6 6 0 1 0 12 14',15],
  D:['M3 2v14h4a7 7 0 0 0 0-14H3',15],
  E:['M12 2H3v14h9 M3 9h8',14],
  F:['M3 16V2h9 M3 9h7',14],
  G:['M12 4A6 6 0 1 0 13 12v-2H9',15],
  H:['M3 2v14 M12 2v14 M3 9h9',16],
  I:['M3 2h8 M7 2v14 M3 16h8',14],
  J:['M12 2v10a4 4 0 0 1-8 0',15],
  K:['M3 2v14 M12 2l-9 8 9 6',15],
  L:['M3 2v14h9',14],
  M:['M2 16V2l6 8 6-8v14',17],
  N:['M3 16V2l9 14V2',16],
  O:['M13 9a6 7 0 1 1-12 0a6 7 0 1 1 12 0',16],
  P:['M3 16V2h6a4 4 0 0 1 0 8H3',14],
  Q:['M13 9a6 7 0 1 1-12 0a6 7 0 1 1 12 0 M9 13l5 5',17],
  R:['M3 16V2h6a4 4 0 0 1 0 8H3 M8 10l5 6',15],
  S:['M12 4C8 1 3 2 3 6s9 2 9 6c0 4-6 6-10 2',15],
  T:['M2 2h12 M8 2v14',16],
  U:['M3 2v9a5 5 0 0 0 10 0V2',16],
  V:['M2 2l6 14 6-14',16],
  W:['M2 2l4 14 4-10 4 10 4-14',20],
  X:['M3 2l10 14 M13 2L3 16',16],
  Y:['M2 2l6 8 6-8 M8 10v6',16],
  Z:['M3 2h11L3 16h11',17],
  '0':['M11 9a5 7 0 1 1-10 0a5 7 0 1 1 10 0',14],
  '1':['M4 5l4-3v14 M4 16h8',14],
  '2':['M3 5a5 5 0 0 1 10 1c0 4-10 10-10 10h10',16],
  '3':['M3 3a5 5 0 0 1 9 3 4 4 0 0 1-5 3 4 4 0 0 1 5 4 5 5 0 0 1-9 2',16],
  '4':['M11 2L2 12h12 M11 2v14',16],
  '5':['M12 2H4L3 9a5 5 0 1 1 0 6',15],
  '6':['M11 3a6 6 0 0 0-8 6v2a5 5 0 1 0 5-5',15],
  '7':['M2 2h12L6 16',16],
  '8':['M11 5a5 4 0 1 1-10 0a5 4 0 1 1 10 0 M12 13a6 4 0 1 1-12 0a6 4 0 1 1 12 0',15],
  '9':['M3 15a6 6 0 0 0 8-6V7a5 5 0 1 0-5 5',15],
  '!':['M4 2v10 M4 17v.1',8],
  '?':['M2 5a5 5 0 1 1 6 5c-2 1-2 2-2 3 M6 17v.1',13],
  '.':['M4 16v.1',7],
  ',':['M4 16l-2 4',7],
  ':':['M4 8v.1 M4 16v.1',8],
  ';':['M4 8v.1 M4 16l-2 4',8],
  "'":['M4 2v4',7],
  '’':['M4 2v4',7],
  '-':['M2 11h6',11],
  '—':['M2 11h11',16],
  '&':['M12 14l-7-7a3 3 0 1 1 5-3c0 3-9 6-9 10a5 5 0 0 0 9 2l4-6',16],
  '+':['M7 6v10 M2 11h10',15],
  '/':['M2 18L11 2',14],
  '(' :['M8 1c-7 6-7 15 0 20',11],
  ')' :['M2 1c7 6 7 15 0 20',11],
  '#':['M5 2L3 16 M11 2L9 16 M2 7h12 M1 12h12',16],
  ' ':['',7]
 };
 const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const get=c=>glyphs[c]||glyphs[c.toLowerCase()]||glyphs['?'];
 const wordWidth=s=>Array.from(s).reduce((a,c)=>a+get(c)[1]+1,0);
 function wrap(text,maxWidth){
  const words=text.replace(/\s+/g,' ').trim().split(' '),rows=[];let current='';
  for(const word of words){let next=current?current+' '+word:word;
   if(wordWidth(next)<=maxWidth||!current){current=next;continue;}
   rows.push(current);current=word;
  }
  if(current)rows.push(current);
  return rows;
 }
 function render(node,force=false){
  if(!node)return;
  const source=(node.querySelector('.ht-display-source')?.textContent||node.textContent||'').trim();
  const parent=node.closest('h1')||node.parentElement;
  if(!source||!parent)return;
  const f=parseFloat(getComputedStyle(parent).fontSize)||48;
  const scale=f/19;
  const maxW=Math.max(185, Math.min((parent.clientWidth||750)/scale,270));
  const widthKey=Math.round(maxW);
  if(!force&&node.dataset.htDisplaySource===source&&node.dataset.htDisplayWidth===String(widthKey))return;
  const rows=wrap(source,maxW);
  const h=rows.length*22+3;
  const w=Math.max(50,...rows.map(wordWidth));
  let content='';
  rows.forEach((row,i)=>{
   let x=4;for(const c of row){const [d,advance]=get(c);
    if(d)content+=`<path d="${d}" transform="translate(${x} ${i*22+1})"/>`;
    x+=advance+1;
   }
  });
  const svg=`<svg aria-hidden="true" focusable="false" class="ht-display-art" viewBox="0 0 ${w+8} ${h}" width="${Math.ceil((w+8)*scale)}" height="${Math.ceil(h*scale)}" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-width="2.85" stroke-linecap="round" stroke-linejoin="round">${content}</g></svg>`;
  node.innerHTML=svg+`<span class="ht-display-source">${esc(source)}</span>`;
  node.dataset.htDisplaySource=source;
  node.dataset.htDisplayWidth=String(widthKey);
 }
 let queued=false;
 function update(){queued=false;render(document.getElementById('welcomeHeadline'));}
 function schedule(){if(!queued){queued=true;requestAnimationFrame(update)}}
 const obs=new MutationObserver(schedule);
 function start(){obs.observe(document.getElementById('app')||document.body,{subtree:true,childList:true,characterData:true});schedule()}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
 window.addEventListener('resize',schedule,{passive:true});
 window.HomeTaskDisplay={render,glyphs};
})();
