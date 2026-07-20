// ── DATA ─────────────────────────────────────────────────────────────────────
const EXP=[
  {title:'Generative AI Engineer (Internship)',cur:true,org:'Reach Cooling Group',period:'May 2026 – Aug 2026',color:'#1D6FBF',bg:'REACH',logo:'reach',logoFill:true,summary:3,
   tags:['Ollama','Local LLM','NetSuite','SQLite','Python','MS Teams'],
   bullets:['Built a <strong>GenAI supply-chain chatbot</strong> on Microsoft Teams that answers the team&rsquo;s everyday operational questions in plain English, powered by a local LLM running on-prem through Ollama, so none of the company&rsquo;s data ever leaves the network.','Built the data foundation behind it by pulling <span class="metric">5 years</span> of invoice, PO, forecast, and inventory data, scattered across separate systems, into one <strong>SQLite database</strong> of <span class="metric">4.25M+ rows</span>, matched on internal customer IDs so the same customer is never double-counted, with pre-built views that drop a typical lookup from <span class="metric">~44s</span> on NetSuite to <span class="metric">~5ms</span>.','Now building <strong>autonomous agents</strong> that act on supply-chain workflows directly, with demand forecasting and a GAP inventory model coming next on the roadmap.','Kept that data current with a real-time <strong>NetSuite RESTlet</strong> feed, running it through a custom read-only account with no write or admin access at all. The connection can only ever read, never change anything.','Structured the whole system in <strong>five swappable layers</strong> (data, extraction, storage, AI, and interface) so any one part can be replaced or upgraded later without rewriting the rest.','Ran the AI <strong>entirely local on a single GPU</strong>, with prompt caching for speed. Because the accuracy comes from the database and the queries rather than the model itself, a small 7B model holds up against the cloud version in side-by-side tests.','Made it production-ready by filtering every answer correctly by date, customer, SKU, and warehouse, then checking it against a <span class="metric">52-test</span> suite that re-runs on every change. It now reliably answers all <span class="metric">10</span> of the priority questions it was built to solve.']},
  {title:'Computer Vision Engineer (Part-time)',cur:true,org:'CUTR · University of South Florida',period:'Feb 2026 – Present',color:'#0EA5E9',bg:'CUTR',logo:'cutr',
   tags:['YOLOv8','ByteTrack','Label Studio','Computer Vision','Python','FDOT'],
   bullets:['Production computer vision for transportation-safety research: building the detectors, the datasets behind them, and the analyses they feed.'],
   projects:[{name:'Micromobility Detection',desc:'9-class detector counting bikes, e-bikes, and e-scooters across <span class="metric">50+</span> camera sites for FDOT.',cs:'cs-overlay'}]},
  {title:'Research Assistant · Data Engineering & Entity Resolution',cur:true,org:'USF · Muma College of Business',period:'Jan 2026 – Present',color:'#006747',bg:'USF MUMA',logo:'usf',
   tags:['Entity Resolution','Fuzzy Matching','Python','pandas','Record Linkage','EDA'],
   bullets:['Building large-scale <strong>entity-resolution pipelines</strong> that link companies across messy, real-world research datasets of up to <span class="metric">325K+</span> records: the clean, connected data foundation that downstream business and economic research relies on.','Matching records with <strong>fuzzy name matching</strong> across multiple algorithms, reconciled in a consensus layer and verified with geographic, industry, and domain signals into tiered confidence levels.','Auditing data quality end to end so every match is scored and explainable, turning fragmented, inconsistently-named sources into reliable linked datasets ready for analysis.']},
  {title:'Artificial Intelligence Research Associate (Internship)',cur:false,org:'ISRO · Indian Space Research Organisation',period:'Jan 2025 – Jul 2025',color:'#FF671F',bg:'ISRO',logo:'isro',
   tags:['SRGAN','TensorFlow','Keras','VGG19','Satellite Imaging','Python'],
   bullets:['Built a satellite-image super-resolution model using <strong>SRGAN</strong> (a GAN paired with a VGG19 perceptual-loss network) in TensorFlow/Keras at ISRO&rsquo;s National Remote Sensing Centre, hitting <span class="metric">4× upscaling</span> (roughly 10 m to 2.5 m detail).','Trained it on <span class="metric">5,000+</span> aligned high- and low-resolution image pairs with a full preprocessing pipeline: RGB band stacking, normalization, and preserved geospatial metadata so the enhanced output stayed analysis-ready.','Reached <span class="metric">31 dB PSNR</span> and <span class="metric">0.86 SSIM</span>, producing sharp, structurally faithful imagery for downstream work like land-cover classification and urban mapping.'],
   projLabel:false,projects:[{name:'Satellite Super-Resolution',desc:'How SRGAN turned <span class="metric">10 m</span> pixels into <span class="metric">2.5 m</span> detail: the architecture, the data, and the trade-offs.',cs:'cs-isro'}]},
  {title:'Gen AI Engineer (Internship)',cur:false,org:'Venkusa Technologies',period:'May 2024 – Nov 2024',color:'#14B8A6',bg:'VENKUSA',logo:'venkusa',
   tags:['Python','PHP','Machine Learning','OpenAI API','Prompt Engineering'],
   bullets:['Built a generative <strong>AI code-completion tool</strong> inspired by GitHub Copilot, working across Python and PHP, improving code-completion accuracy by <span class="metric">15%</span> and cutting processing time by <span class="metric">25%</span> by streamlining the core components.','Shipped an AI travel chatbot that improved lead capture and booking conversions after deployment.']},
];

const PROJ=[
  // ── Row 1: hackathon-award cards ──
  {name:'Sensory',sub:'Maps how a place feels',color:'#22D3EE',metric:'Best UI/UX · 148 Venues',award:'Best UI/UX · HackaBull VII',wip:false,link:'https://github.com/Harshxth/Sensory',cats:['agents'],
   media:{poster:'assets/sensory-hero.jpg',live:'assets/sensory-map.jpg'},
   desc:'Maps how a place will feel before you go, for autistic, deaf, blind, and wheelchair users. Profile-aware routes across <span class="m">148 Tampa venues</span>, <strong>Gemini Vision</strong> reads signs through your camera, and <strong>ElevenLabs</strong> delivers cues in a 30-second clone of a voice you trust.',
   tags:['Next.js','TypeScript','Gemini Vision','ElevenLabs','MongoDB Atlas','Google Maps','PWA'],flow:['Profile','Sensory Map','Route Score','Voice Cue','Arrive']},
  {name:'CareCall',sub:'Agentic Voice AI · Healthcare',color:'#F472B6',metric:'Top 5 · 70+ Languages',award:'Top 5 · HackUSF 2026',wip:false,link:'https://github.com/Harshxth/CareCall',cats:['agents','healthcare'],
   media:{poster:'assets/carecall-hero.jpg',live:'assets/carecall-app.jpg'},
   desc:'Cuts avoidable readmissions by calling discharged patients in their own language. A <strong>Google ADK + Gemini</strong> multi-agent system runs a <span class="m">9-step</span> care protocol with auto-escalation to nurses, <strong>ElevenLabs</strong> voice in <span class="m">70+ languages</span>, and HIPAA-compliant encrypted PHI.',
   tags:['Google ADK','Gemini','ElevenLabs','Supabase','React','HIPAA'],flow:['Discharge','Voice Call','Comprehension','Triage','Report']},
  // ── Row 2: technical heavyweights ──
  {name:'Sentinel AI',sub:'Confidence-Gated Multi-Agent NLP',color:'#FBBF24',metric:'14× Cheaper · Same Acc',wip:false,link:'https://github.com/Harshxth/Sentinel-AI',cats:['agents','ml'],
   desc:'Detects stress in social text at <span class="m">14× lower cost</span> with the same accuracy. A <strong>fine-tuned RoBERTa</strong> handles <span class="m">86%</span> of posts locally; only low-confidence cases escalate to <strong>Claude</strong> for adversarial reasoning. Ships an <strong>MCP server</strong> exposing the classifier as a tool.',
   tags:['PyTorch','RoBERTa','LangGraph','Claude','MCP','Streamlit'],flow:['Post','Screener','Confidence Gate','Adversarial','Judge']},
  {name:'UrbanMind',sub:'Multi-Agent City Design',color:'#A78BFA',metric:'4 Agents · <30s',wip:false,link:'https://github.com/Harshxth/UrbanMind',cats:['agents','rag'],
   media:{live:'assets/urbanmind-app.jpg'},
   desc:'Designs Tampa 2050 from plain-English questions in <span class="m">under 30 seconds</span>. Four specialised agents weigh solar, flood risk, EV infrastructure, traffic, and cybersecurity over <strong>ChromaDB</strong>, stream status live, and render masterplans with <strong>Imagen</strong>.',
   tags:['React','FastAPI','Gemini 2.5','Imagen','ChromaDB','WebSocket'],flow:['NL Query','Agent Routing','Geo Analysis','Plan Render','Stream']},
  // ── Row 3: production rigor ──
  {name:'CiteIQ',sub:'Agentic RAG System',color:'#A78BFA',metric:'90%+ faithfulness',wip:false,link:'https://github.com/Harshxth/citeiq',cats:['rag','agents'],
   media:{live:'assets/citeiq-app.jpg'},
   desc:'Answers questions from your documents with citations you can trust. A <strong>LangGraph</strong> multi-agent pipeline over <strong>ChromaDB</strong> hits <span class="m">90%+ faithfulness</span> on RAGAS across <span class="m">200+ queries</span> at <span class="m">sub-2s</span> latency, fully traced in production.',
   tags:['LangGraph','FastAPI','ChromaDB','Groq','RAGAS','Docker','LangSmith'],flow:['Query','Router','Retriever','Evaluator','Response']},
  {name:'Hospital LOS Prediction',sub:'XGBoost + SHAP',color:'#FB923C',metric:'MAE 0.30d',wip:false,link:'https://github.com/Harshxth/Hospital-LOS-Prediction',cats:['healthcare','ml'],
   desc:'Frees hospital beds and staff by predicting length of stay to within hours. <strong>XGBoost</strong> on <span class="m">100K patient records</span> beats published benchmarks by <span class="m">5–6×</span>, modelling <span class="m">$1.4–2.6M</span> in potential annual savings per 400-bed hospital.',
   tags:['XGBoost','SHAP','scikit-learn','Healthcare ML','Python'],flow:['Patient Data','Feature Eng','XGBoost','SHAP','Insight']},
  {name:'Healthcare Research Agent',sub:'Multi-Agent AI',color:'#34D399',metric:'95% accuracy',wip:false,link:'https://github.com/Harshxth/Healthcare-Research-Agent',cats:['agents','healthcare'],
   desc:'Does hours of medical-literature research in minutes. A <strong>CrewAI</strong> 4-agent system scans PubMed and writes executive reports at <span class="m">95% accuracy</span> versus manual review.',
   tags:['CrewAI','Multi-Agent','PubMed','Python','LangChain'],flow:['Input','Researcher','Analyzer','Validator','Report']},
];
const CAT_LABELS={all:'All',rag:'RAG',agents:'Agents',healthcare:'Healthcare',ml:'Model Training'};
// Signature SVG visuals for cards without media — each diagram states something true about the project.
const PROJ_VIZ={
  'Sentinel AI': // confidence gate: most posts take the cheap local path, few escalate
    '<svg viewBox="0 0 320 150" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">'
    +'<line x1="150" y1="18" x2="150" y2="132" stroke-width="1.4" stroke-dasharray="4 5" opacity=".55"/>'
    +'<text x="150" y="12" font-family="JetBrains Mono,monospace" font-size="8" fill="currentColor" stroke="none" text-anchor="middle" opacity=".8">CONFIDENCE GATE</text>'
    +'<path d="M20 75 H145" stroke-width="1.6" opacity=".7"/>'
    +'<path d="M155 75 H292" stroke-width="2.4" opacity=".95"/>'
    +'<path d="M155 72 C190 60 210 40 240 32" stroke-width="1.1" opacity=".5"/>'
    +'<circle cx="40" cy="75" r="3.4" fill="currentColor" stroke="none"/><circle cx="70" cy="75" r="3.4" fill="currentColor" stroke="none" opacity=".85"/><circle cx="100" cy="75" r="3.4" fill="currentColor" stroke="none" opacity=".7"/><circle cx="126" cy="75" r="3.4" fill="currentColor" stroke="none" opacity=".55"/>'
    +'<circle cx="200" cy="75" r="4" fill="currentColor" stroke="none"/><circle cx="240" cy="75" r="4" fill="currentColor" stroke="none" opacity=".8"/><circle cx="278" cy="75" r="4.6" stroke-width="1.6"/>'
    +'<circle cx="240" cy="32" r="3.2" stroke-width="1.3" opacity=".7"/>'
    +'<text x="240" y="22" font-family="JetBrains Mono,monospace" font-size="7.5" fill="currentColor" stroke="none" text-anchor="middle" opacity=".65">ESCALATE 14%</text>'
    +'<text x="222" y="95" font-family="JetBrains Mono,monospace" font-size="7.5" fill="currentColor" stroke="none" text-anchor="middle" opacity=".65">LOCAL 86%</text></svg>',
  'Hospital LOS Prediction': // predicted vs actual length-of-stay
    '<svg viewBox="0 0 320 150" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">'
    +'<line x1="36" y1="20" x2="36" y2="128" stroke-width="1.2" opacity=".5"/>'
    +'<line x1="36" y1="128" x2="296" y2="128" stroke-width="1.2" opacity=".5"/>'
    +'<rect x="52" y="96" width="26" height="32" stroke-width="1.4" opacity=".8"/>'
    +'<rect x="92" y="66" width="26" height="62" fill="currentColor" stroke="none" opacity=".28"/>'
    +'<rect x="132" y="44" width="26" height="84" stroke-width="1.4" opacity=".8"/>'
    +'<rect x="172" y="78" width="26" height="50" fill="currentColor" stroke="none" opacity=".28"/>'
    +'<rect x="212" y="56" width="26" height="72" stroke-width="1.4" opacity=".8"/>'
    +'<rect x="252" y="88" width="26" height="40" fill="currentColor" stroke="none" opacity=".28"/>'
    +'<path d="M52 92 L92 60 L132 40 L172 74 L212 50 L252 84 L278 80" stroke-width="1.8"/>'
    +'<circle cx="132" cy="40" r="3" fill="currentColor" stroke="none"/>'
    +'<text x="166" y="16" font-family="JetBrains Mono,monospace" font-size="8" fill="currentColor" stroke="none" text-anchor="middle" opacity=".8">PREDICTED VS ACTUAL · MAE 0.30d</text></svg>',
  'Healthcare Research Agent': // 4-agent pipeline
    '<svg viewBox="0 0 320 150" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">'
    +'<rect x="22" y="60" width="52" height="30" rx="5" stroke-width="1.5"/>'
    +'<rect x="98" y="60" width="52" height="30" rx="5" stroke-width="1.5"/>'
    +'<rect x="174" y="60" width="52" height="30" rx="5" stroke-width="1.5"/>'
    +'<rect x="250" y="60" width="52" height="30" rx="5" stroke-width="1.5"/>'
    +'<path d="M74 75 H96 M150 75 H172 M226 75 H248" stroke-width="1.6"/>'
    +'<path d="M92 71 L98 75 L92 79 M168 71 L174 75 L168 79 M244 71 L250 75 L244 79" stroke-width="1.4"/>'
    +'<text x="48" y="79" font-family="JetBrains Mono,monospace" font-size="7.2" fill="currentColor" stroke="none" text-anchor="middle">RESEARCH</text>'
    +'<text x="124" y="79" font-family="JetBrains Mono,monospace" font-size="7.2" fill="currentColor" stroke="none" text-anchor="middle">ANALYZE</text>'
    +'<text x="200" y="79" font-family="JetBrains Mono,monospace" font-size="7.2" fill="currentColor" stroke="none" text-anchor="middle">VALIDATE</text>'
    +'<text x="276" y="79" font-family="JetBrains Mono,monospace" font-size="7.2" fill="currentColor" stroke="none" text-anchor="middle">REPORT</text>'
    +'<path d="M48 60 C60 34 112 34 124 58" stroke-width="1" stroke-dasharray="3 4" opacity=".5"/>'
    +'<text x="160" y="118" font-family="JetBrains Mono,monospace" font-size="8" fill="currentColor" stroke="none" text-anchor="middle" opacity=".8">PUBMED · 95% VS MANUAL REVIEW</text></svg>'
};

const LOGOS={
  jntu:'assets/jntu.jpg',
  usf:'assets/usf.jpg',
  venkusa:'assets/venkusa.jpg',
  isro:'assets/isro.jpg',
  cutr:'assets/cutr.jpg',
  reach:'assets/reach.jpg',
};

// ── PALETTE (grey default; ?palette=purple to preview the old look) ─────────
(function initPalette(){
  try{
    const p=new URLSearchParams(location.search).get('palette');
    if(p==='purple')document.documentElement.setAttribute('data-palette','purple');
  }catch{}
})();

// ── KBD SYMBOL (OS-adaptive ⌘ / Ctrl) ────────────────────────────────────────
(function initKbdSymbol(){
  const isMac=/Mac|iPhone|iPad/i.test(navigator.platform||navigator.userAgent||'');
  if(isMac)return; // default ⌘ is correct
  document.querySelectorAll('.cmdk-kbd').forEach(el=>{
    if(el.textContent.includes('⌘'))el.textContent=el.textContent.replace('⌘','Ctrl+');
  });
  const btn=document.getElementById('cmdk-open');
  if(btn)btn.title='Command palette (Ctrl+K)';
})();

// ── BOOT ─────────────────────────────────────────────────────────────────────
const BOOT=['INITIALIZING NEURAL ENGINE ............... OK','Loading LangGraph agent mesh ............. OK','Mounting ChromaDB vector store ........... OK','YOLOv8 detection pipeline ready .......... OK','Multi-agent orchestrator ready ........... OK','SYSTEM READY · Launching portfolio .......',];
(function boot(){
  const loader=document.getElementById('loader');
  const seen=sessionStorage.getItem('hg-seen')==='1';
  const reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(seen||reduced){loader.style.display='none';sessionStorage.setItem('hg-seen','1');requestAnimationFrame(initAll);return;}
  sessionStorage.setItem('hg-seen','1');
  const bl=document.getElementById('boot-lines'),pp=document.getElementById('boot-prog'),pt=document.getElementById('boot-pct');let i=0;
  const tick=setInterval(()=>{
    if(i>=BOOT.length){clearInterval(tick);setTimeout(()=>{loader.classList.add('hide');setTimeout(initAll,150);},80);return;}
    const d=document.createElement('div');d.className='boot-line';
    d.style.color=BOOT[i].includes('READY')?'#F3F4F6':BOOT[i].includes('OK')?'#E5E7EB':'#6B7280';
    d.innerHTML=`<span style="color:#3F3F46;margin-right:1rem">[${String(i).padStart(2,'0')}]</span>${BOOT[i]}`;
    bl.appendChild(d);i++;const pct=Math.round((i/BOOT.length)*100);pp.style.width=pct+'%';pt.textContent=pct+'%';
  },55);
})();

function initAll(){initCursor();initNav();initBG();initCaseStudy();initExp();initProj();initReveal();initHeatmap();initResumeCounter();initResumeDate();initCountUp();initLastUpdated();initCardTilt();}

// ── CARD TILT + SHINE ────────────────────────────────────────────────────────
// Gentle 3D mouse-tilt on project and experience cards. Max 2° per axis,
// damped at .18 so the motion has weight. Cursor-tracked shine via CSS vars.
// Respects prefers-reduced-motion.
function initCardTilt(){
  const reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced)return;
  const MAX_TILT=2,DAMP=0.18;
  const cards=document.querySelectorAll('.proj-card,.exp-card');
  cards.forEach(card=>{
    let tx=0,ty=0,cx=0,cy=0,rafId=0,active=false,mx=50,my=50,tmx=50,tmy=50;
    function tick(){
      cx+=(tx-cx)*DAMP;cy+=(ty-cy)*DAMP;
      mx+=(tmx-mx)*DAMP;my+=(tmy-my)*DAMP;
      card.style.transform=`perspective(1400px) rotateX(${cy}deg) rotateY(${cx}deg) translateZ(0)`;
      card.style.setProperty('--mx',mx+'%');card.style.setProperty('--my',my+'%');
      if(active||Math.abs(tx-cx)>.05||Math.abs(ty-cy)>.05){rafId=requestAnimationFrame(tick);}
      else{cancelAnimationFrame(rafId);rafId=0;card.style.transform='';}
    }
    card.addEventListener('mousemove',e=>{
      const r=card.getBoundingClientRect();
      const nx=(e.clientX-r.left)/r.width,ny=(e.clientY-r.top)/r.height;
      tx=(nx-.5)*MAX_TILT*2;ty=(.5-ny)*MAX_TILT*2;
      tmx=nx*100;tmy=ny*100;active=true;
      if(!rafId)rafId=requestAnimationFrame(tick);
    });
    card.addEventListener('mouseleave',()=>{
      tx=0;ty=0;tmx=50;tmy=50;active=false;
      if(!rafId)rafId=requestAnimationFrame(tick);
    });
  });
}

// ── RÉSUMÉ LAST UPDATED ──────────────────────────────────────────────────────
async function initResumeDate(){
  const el=document.getElementById('rc-resume-date');if(!el)return;
  try{
    const r=await fetch('https://api.github.com/repos/Harshxth/harshxth.github.io/commits?path=Harshith_Gujjeti_Resume.pdf&per_page=1');
    if(!r.ok)throw 0;
    const arr=await r.json();if(!arr||!arr.length)throw 0;
    const d=new Date(arr[0].commit.committer.date);
    const fmt=d.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
    el.textContent='updated '+fmt;
  }catch{/* silent */}
}

// ── LAST UPDATED ─────────────────────────────────────────────────────────────
async function initLastUpdated(){
  const el=document.getElementById('ft-updated');if(!el)return;
  const rel=(ts)=>{
    const s=Math.max(1,(Date.now()-ts)/1000);
    if(s<60)return 'just now';
    if(s<3600)return Math.floor(s/60)+' min ago';
    if(s<86400)return Math.floor(s/3600)+'h ago';
    const d=Math.floor(s/86400);
    if(d===1)return 'yesterday';
    if(d<30)return d+' days ago';
    const m=Math.floor(d/30);
    if(m<12)return m+' month'+(m>1?'s':'')+' ago';
    return Math.floor(d/365)+'y ago';
  };
  try{
    const r=await fetch('https://api.github.com/repos/Harshxth/harshxth.github.io/commits?per_page=1');
    if(!r.ok)throw 0;
    const arr=await r.json();
    if(!arr||!arr.length)throw 0;
    const ts=Date.parse(arr[0].commit.committer.date);
    el.textContent='updated '+rel(ts);
    el.classList.add('on');
  }catch{/* silent: just leave footer clean */}
}


// ── COUNT UP ─────────────────────────────────────────────────────────────────
function initCountUp(){
  const reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const run=(el)=>{
    if(el.dataset.counted)return;
    const txt=el.textContent;
    const m=txt.match(/([\d,]+(?:\.\d+)?)/);
    if(!m){el.dataset.counted='1';return;}
    const target=parseFloat(m[1].replace(/,/g,''));
    const prefix=txt.slice(0,m.index);
    const suffix=txt.slice(m.index+m[1].length);
    const hasComma=m[1].includes(',');
    const hasDecimal=m[1].includes('.');
    el.dataset.counted='1';
    if(reduced)return;
    const dur=Math.min(1400,800+target*4);
    const start=performance.now();
    function tick(t){
      const p=Math.min(1,(t-start)/dur);
      const e=1-Math.pow(1-p,3);
      let cur=target*e;
      cur=hasDecimal?cur.toFixed(1):Math.round(cur);
      const display=hasComma?Number(cur).toLocaleString():cur;
      el.textContent=prefix+display+suffix;
      if(p<1)requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  };
  const obs=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting)run(e.target);});
  },{threshold:.35});
  document.querySelectorAll('.metric, .proj-desc .m').forEach(el=>obs.observe(el));
}

// ── RESUME COUNTER ───────────────────────────────────────────────────────────
// Backed by a tiny Cloudflare Worker over a KV namespace. Source:
//   export default { async fetch(req, env) { /* read / increment COUNTER */ } }
// GET /     -> { count }
// GET /up   -> increments, returns { count }
async function initResumeCounter(){
  const valEl=document.getElementById('rc-val');
  const base='https://autumn-base-a324.hanstheyt.workers.dev';
  try{
    const r=await fetch(base+'/');
    if(r.ok){const d=await r.json();if(valEl&&typeof d.count==='number')valEl.textContent=d.count.toLocaleString();}
  }catch{}
  document.querySelectorAll('.resume-link').forEach(a=>{
    a.addEventListener('click',()=>{
      // fire-and-forget; don't block the download
      fetch(base+'/up').then(r=>r.json()).then(d=>{if(valEl&&typeof d.count==='number')valEl.textContent=d.count.toLocaleString();}).catch(()=>{});
    });
  });
}

// ── THEME ────────────────────────────────────────────────────────────────────
(function initTheme(){
  const saved=localStorage.getItem('hg-theme');
  const t=saved||'light';
  if(t==='light')document.documentElement.setAttribute('data-theme','light');
  document.addEventListener('DOMContentLoaded',()=>{
    const btn=document.getElementById('theme-toggle');if(!btn)return;
    const sync=()=>{
      const isLight=document.documentElement.getAttribute('data-theme')==='light';
      btn.setAttribute('aria-checked',isLight?'true':'false');
    };
    sync();
    btn.addEventListener('click',()=>{
      const cur=document.documentElement.getAttribute('data-theme')==='light'?'light':'dark';
      const next=cur==='light'?'dark':'light';
      const apply=()=>{
        if(next==='light')document.documentElement.setAttribute('data-theme','light');
        else document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('hg-theme',next);
        sync();
        window.dispatchEvent(new CustomEvent('hg:theme',{detail:{theme:next}}));
      };
      // Anchor the circular reveal at the toggle's center
      const r=btn.getBoundingClientRect();
      document.documentElement.style.setProperty('--vt-x',(r.left+r.width/2)+'px');
      document.documentElement.style.setProperty('--vt-y',(r.top+r.height/2)+'px');
      const reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if(document.startViewTransition&&!reduced)document.startViewTransition(apply);
      else apply();
    });
  });
})();

// ── FLOATING TERMINAL ────────────────────────────────────────────────────────
(function initTerm(){
  const panel=document.getElementById('hero-term');
  const launcher=document.getElementById('term-launcher');
  const closeBtn=document.getElementById('term-close');
  const body=document.getElementById('term-body');
  const form=document.getElementById('term-form');
  const input=document.getElementById('term-input');
  if(!body||!form||!input||!panel)return;

  let welcomed=false;
  function openTerm(){
    panel.classList.add('on');
    panel.setAttribute('aria-hidden','false');
    launcher.classList.add('hidden');
    if(!welcomed){
      line('<span style="color:var(--v1)">harshith@portfolio</span> · type <span style="color:var(--v1)">help</span> to see what this thing can do','sys');
      welcomed=true;
    }
    setTimeout(()=>input.focus(),160);
  }
  function closeTerm(){
    panel.classList.remove('on');
    panel.setAttribute('aria-hidden','true');
    launcher.classList.remove('hidden');
    input.blur();
  }
  launcher.addEventListener('click',openTerm);
  closeBtn.addEventListener('click',closeTerm);
  // Global shortcut: ~ opens/closes when not typing in another input
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'&&panel.classList.contains('on')){e.preventDefault();closeTerm();return;}
    if(e.key==='`'||e.key==='~'){
      const tag=(e.target.tagName||'').toLowerCase();
      if(tag==='input'||tag==='textarea'){if(e.target!==input)return;}
      e.preventDefault();
      panel.classList.contains('on')?closeTerm():openTerm();
    }
  });

  const history=[];let histIdx=-1;

  function line(text,cls=''){
    const d=document.createElement('div');
    d.className='hero-term-line'+(cls?' '+cls:'');
    d.innerHTML=text;
    body.appendChild(d);
    body.scrollTop=body.scrollHeight;
    return d;
  }
  function sleep(ms){return new Promise(r=>setTimeout(r,ms));}

  const COMMANDS={
    help:{d:'list available commands',run(){
      Object.entries(COMMANDS).forEach(([k,v])=>line(`<span style="color:var(--v1)">${k.padEnd(14)}</span><span class="dim">${v.d}</span>`));
    }},
    whoami:{d:'about me',run(){
      line('<b style="color:var(--hl)">Harshith Gujjeti</b> · AI/ML Engineer');
      line('MS AI &amp; Business Analytics @ USF Tampa','dim');
      line('Building multi-agent systems, RAG pipelines, production CV.','dim');
    }},
    ls:{d:'list sections & projects',run(arg){
      if(arg==='projects'||arg==='proj'){
        line('sensory/','');
        line('carecall/','');
        line('sentinel-ai/','');
        line('urbanmind/','');
        line('citeiq/','');
        line('hospital-los-prediction/','');
        line('healthcare-research-agent/','');
        return;
      }
      line('about/  experience/  projects/  skills/  activity/  beyond/  contact/');
      line('try: <span style="color:var(--v1)">ls projects</span>','dim');
    }},
    cat:{d:'read a section: cat [name]',run(arg){
      const pages={
        resume:`<a href="Harshith_Gujjeti_Resume.pdf" download>↓ Harshith_Gujjeti_Resume.pdf</a>`,
        contact:'harshithgujjeti@icloud.com · <a href="https://github.com/Harshxth" target="_blank">github.com/Harshxth</a> · <a href="https://linkedin.com/in/harshithgujjeti" target="_blank">linkedin.com/in/harshithgujjeti</a>',
        about:'AI/ML engineer building agentic AI at Reach Cooling Group. MS @ USF. Research at CUTR &amp; Muma College. Previously ISRO.',
        skills:'PyTorch · LangGraph · CrewAI · YOLOv8 · ChromaDB · FastAPI · Docker · Snowflake',
        citeiq:'agentic RAG system: LangGraph orchestration, 90%+ faithfulness, FastAPI + Docker. <a href="https://github.com/Harshxth/citeiq" target="_blank">github.com/Harshxth/citeiq</a>',
      };
      if(!arg){line('usage: cat [resume|contact|about|skills|citeiq]','dim');return;}
      if(pages[arg])line(pages[arg]);
      else line(`cat: ${arg}: No such file or directory`,'dim');
    }},
    skills:{d:'quick skills readout',run(){
      line('<b>ML &amp; AI</b>       PyTorch · XGBoost · scikit-learn · MLflow');
      line('<b>GenAI / LLM</b>   LangChain · LangGraph · CrewAI · OpenAI · RAG · Ollama');
      line('<b>Vision</b>        YOLOv8 · ByteTrack · SRGAN · CNN');
      line('<b>Data Eng</b>      Snowflake · Docker · ChromaDB · PostgreSQL');
      line('<b>Cloud</b>         Azure OpenAI · AWS · Kubernetes · CI/CD');
    }},
    neofetch:{d:'system info',run(){
      const art=[
        '    <span style="color:var(--v1)">▗▖ ▗▖ ▗▄▄▄</span>   harshith@portfolio',
        '    <span style="color:var(--v1)">▐▌ ▐▌▐▌  ▌</span>  ─────────────────',
        '    <span style="color:var(--v1)">▐▛▀▜▌▐▌▗▟▙</span>  OS     : USF Tampa Edition',
        '    <span style="color:var(--v1)">▐▌ ▐▌ ▜▄▛▘</span>  Kernel : AI/ML 4.0.0-gpa',
        '    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Shell  : bash + LangGraph',
        '    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   Uptime : since 2021',
        '    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   CPU    : producción-grade RAG × 12',
      ];
      art.forEach(a=>line(a));
    }},
    'deploy':{d:'simulate a deploy: deploy [project]',async run(arg){
      const name=arg||'citeiq';
      const steps=[
        `[step 1/5] pulling ${name}...`,
        '[step 2/5] building docker image...',
        '[step 3/5] pushing to registry...',
        '[step 4/5] rolling out containers...',
        '[step 5/5] warming inference pool...',
      ];
      for(const s of steps){line(s,'dim');await sleep(340);}
      line(`✓ deployed <b>${name}</b> to production`,'sys');
      line(`  → <a href="https://github.com/Harshxth/${name}" target="_blank">github.com/Harshxth/${name}</a>`,'dim');
    }},
    open:{d:'open a url: open github/linkedin/resume',run(arg){
      const map={github:'https://github.com/Harshxth',linkedin:'https://linkedin.com/in/harshithgujjeti',resume:'Harshith_Gujjeti_Resume.pdf',site:'https://harshxth.github.io/'};
      if(!arg){line('usage: open [github|linkedin|resume|site]','dim');return;}
      const u=map[arg];if(!u){line(`open: unknown target: ${arg}`,'dim');return;}
      line(`opening ${arg}…`,'dim');
      window.open(u,'_blank');
    }},
    theme:{d:'toggle light / dark',run(){document.getElementById('theme-toggle').click();line('theme toggled','sys');}},
    date:{d:'current date',run(){line(new Date().toString(),'dim');}},
    echo:{d:'print text',run(arg,full){line((full||'').replace(/^echo\s*/,'')||'');}},
    sudo:{d:'try to elevate',run(){line('harshith is not in the sudoers file. This incident will be reported.','dim');}},
    clear:{d:'clear the screen',run(){body.innerHTML='';}},
    exit:{d:'close the terminal',run(){line('can\'t exit, this is your portfolio','dim');}},
  };

  function prompt(){ input.focus(); }
  function handle(raw){
    const cmd=raw.trim();
    line(cmd,'cmd');
    if(!cmd)return;
    history.push(cmd);histIdx=history.length;
    const [name,...rest]=cmd.split(/\s+/);
    const arg=rest[0];
    const fn=COMMANDS[name.toLowerCase()];
    if(!fn){line(`command not found: ${name}. try <span style="color:var(--v1)">help</span>.`,'dim');return;}
    const res=fn.run(arg,cmd);
    if(res&&res.then)res.catch(()=>{});
  }

  form.addEventListener('submit',e=>{
    e.preventDefault();
    const v=input.value;
    handle(v);
    input.value='';
  });
  input.addEventListener('keydown',e=>{
    if(e.key==='ArrowUp'){e.preventDefault();if(histIdx>0){histIdx--;input.value=history[histIdx]||'';}}
    else if(e.key==='ArrowDown'){e.preventDefault();if(histIdx<history.length-1){histIdx++;input.value=history[histIdx]||'';}else{histIdx=history.length;input.value='';}}
    else if(e.key==='Tab'){
      e.preventDefault();
      const v=input.value.trim();if(!v)return;
      const match=Object.keys(COMMANDS).find(k=>k.startsWith(v));
      if(match)input.value=match;
    }
    else if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='l'){e.preventDefault();body.innerHTML='';}
  });
  // click anywhere inside terminal body → focus input (skip links and the close dot)
  panel.addEventListener('click',e=>{
    if(e.target===closeBtn)return;
    if(e.target.tagName==='A')return;
    input.focus();
  });
})();

// ── KONAMI · ATTENTION MODE ──────────────────────────────────────────────────
(function initKonami(){
  const SEQ=['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let buf=[];
  const overlay=document.getElementById('att-overlay');
  const toast=document.getElementById('att-toast');
  const canvas=document.getElementById('att-canvas');
  if(!canvas)return;
  const ctx=canvas.getContext('2d');
  let active=false,raf=0,tokens=[],mx=window.innerWidth/2,my=window.innerHeight/2,exitAt=0;

  function resize(){canvas.width=window.innerWidth*devicePixelRatio;canvas.height=window.innerHeight*devicePixelRatio;canvas.style.width=window.innerWidth+'px';canvas.style.height=window.innerHeight+'px';ctx.setTransform(1,0,0,1,0,0);ctx.scale(devicePixelRatio,devicePixelRatio);}
  function buildTokens(){
    tokens=[];
    const W=window.innerWidth,H=window.innerHeight;
    const step=Math.max(80,Math.min(W,H)/10);
    const cols=Math.ceil(W/step),rows=Math.ceil(H/step);
    const ox=(W-(cols-1)*step)/2,oy=(H-(rows-1)*step)/2;
    for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){
      tokens.push({x:ox+c*step+(Math.random()-.5)*12,y:oy+r*step+(Math.random()-.5)*12,ph:Math.random()*Math.PI*2});
    }
  }
  function softmax(scores){
    const max=Math.max(...scores);
    const exp=scores.map(s=>Math.exp(s-max));
    const sum=exp.reduce((a,b)=>a+b,0);
    return exp.map(e=>e/sum);
  }
  // Canvas2D can't resolve CSS var() strings — resolve theme colors on activate()
  let KACC='229,231,235',KACC2='156,163,175',KBG='11,11,13',KINK='229,231,235';
  function frame(t){
    const W=window.innerWidth,H=window.innerHeight;
    ctx.clearRect(0,0,W,H);
    // compute attention weights: neg squared distance / scale
    const scores=tokens.map(tk=>{const dx=tk.x-mx,dy=tk.y-my;return -(dx*dx+dy*dy)/(Math.min(W,H)*18);});
    const w=softmax(scores);
    const wmax=Math.max(...w);
    // fade background tint (subtle)
    ctx.fillStyle='rgba('+KBG+',0.18)';ctx.fillRect(0,0,W,H);
    // draw tokens sized/lit by weight
    tokens.forEach((tk,i)=>{
      const wi=w[i]/wmax;
      const pulse=0.85+Math.sin(t/300+tk.ph)*0.15;
      const size=6+wi*18;
      const alpha=0.12+wi*0.75;
      ctx.save();
      ctx.shadowColor='rgba('+KACC+','+(wi*0.9)+')';
      ctx.shadowBlur=wi*28;
      ctx.fillStyle='rgba('+KACC+','+alpha*pulse+')';
      ctx.beginPath();ctx.roundRect(tk.x-size/2,tk.y-size/2,size,size,3);ctx.fill();
      ctx.restore();
    });
    // top-K attention arcs from cursor
    const ranked=tokens.map((tk,i)=>({tk,wi:w[i]})).sort((a,b)=>b.wi-a.wi).slice(0,5);
    ranked.forEach(({tk,wi})=>{
      const rel=wi/wmax;
      ctx.strokeStyle='rgba('+KACC2+','+(rel*0.7)+')';
      ctx.lineWidth=1+rel*2;
      ctx.beginPath();
      ctx.moveTo(mx,my);
      // slight curve via quadratic midpoint offset
      const midx=(mx+tk.x)/2,midy=(my+tk.y)/2-20*rel;
      ctx.quadraticCurveTo(midx,midy,tk.x,tk.y);
      ctx.stroke();
    });
    // cursor "query" token
    ctx.save();
    ctx.shadowColor='rgba('+KINK+',0.9)';ctx.shadowBlur=24;
    ctx.fillStyle='rgba('+KACC2+',0.95)';
    ctx.beginPath();ctx.arc(mx,my,9,0,Math.PI*2);ctx.fill();
    ctx.restore();
    // label "Q"
    ctx.fillStyle='rgba('+KINK+',.9)';
    ctx.font='600 11px "JetBrains Mono", monospace';
    ctx.fillText('Q',mx+14,my-10);

    if(!active&&Date.now()>exitAt&&exitAt){cancelAnimationFrame(raf);return;}
    raf=requestAnimationFrame(frame);
  }
  function onMove(e){mx=e.clientX;my=e.clientY;}
  function activate(){
    if(active)return;
    active=true;exitAt=0;
    const _cs=getComputedStyle(document.documentElement);
    KACC=(_cs.getPropertyValue('--accent-rgb')||KACC).trim();
    KACC2=(_cs.getPropertyValue('--accent2-rgb')||KACC2).trim();
    KBG=(_cs.getPropertyValue('--bg-rgb')||KBG).trim();
    KINK=(_cs.getPropertyValue('--v1-rgb')||KINK).trim();
    document.body.classList.add('att-mode');
    resize();buildTokens();
    overlay.classList.add('on');
    toast.classList.add('on');
    document.addEventListener('mousemove',onMove);
    raf=requestAnimationFrame(frame);
    // auto-exit after 12s
    setTimeout(()=>{if(active)deactivate('timeout');},12000);
  }
  function deactivate(reason){
    if(!active)return;
    active=false;exitAt=Date.now()+500;
    document.body.classList.remove('att-mode');
    overlay.classList.remove('on');
    toast.classList.remove('on');
    document.removeEventListener('mousemove',onMove);
    // canvas fades via overlay opacity; stop raf soon after
    setTimeout(()=>{cancelAnimationFrame(raf);ctx.clearRect(0,0,canvas.width,canvas.height);},500);
  }
  const prog=document.getElementById('kon-progress');
  const GLYPH={ArrowUp:'↑',ArrowDown:'↓',ArrowLeft:'←',ArrowRight:'→',b:'B',a:'A'};
  let progTimeout=0;
  function renderProgress(matched){
    if(!prog)return;
    if(!matched){prog.classList.remove('on');return;}
    prog.innerHTML=SEQ.map((k,i)=>{
      const g=GLYPH[k]||k;
      const cls=i<matched?'key':'key pending';
      return `<span class="${cls}">${g}</span>`;
    }).join('');
    prog.classList.add('on');
    clearTimeout(progTimeout);
    progTimeout=setTimeout(()=>prog.classList.remove('on'),2500);
  }
  document.addEventListener('keydown',e=>{
    // exit on any key while active
    if(active){if(!['Shift','Meta','Control','Alt'].includes(e.key))deactivate('key');return;}
    const k=e.key.length===1?e.key.toLowerCase():e.key;
    // Check if this key matches the next expected step given current prefix
    // Find longest prefix of buf+[k] that matches SEQ
    const tentative=[...buf,k];
    let matchedLen=0;
    for(let start=0;start<tentative.length;start++){
      const slice=tentative.slice(start);
      if(slice.every((v,i)=>v===SEQ[i])){matchedLen=slice.length;break;}
    }
    if(matchedLen>0){buf=tentative.slice(tentative.length-matchedLen);}
    else{buf=[];}
    if(matchedLen>0)renderProgress(matchedLen);
    if(matchedLen===SEQ.length){buf=[];renderProgress(0);activate();}
  });
  window.addEventListener('resize',()=>{if(active){resize();buildTokens();}});
  // Console easter egg hint
  try{console.log('%c◆ Harshith','color:#E5E7EB;font-weight:700;font-size:14px','· try the Konami code: ↑↑↓↓←→←→ B A');}catch{}
})();

// ── COMMAND PALETTE ──────────────────────────────────────────────────────────
(function initCmdk(){
  // Jump-to entries are built from the DOM so section numbers can never
  // drift from the on-page labels, and new sections appear automatically.
  const SECTION_META={
    about:{t:'About',d:'intro + education',k:'about'},
    experience:{t:'Experience',d:'work timeline',k:'experience work'},
    projects:{t:'Projects',d:'production systems',k:'projects'},
    opensource:{t:'Open Source',d:'merged + reviewed PRs',k:'open source oss pr github ultralytics litellm'},
    building:{t:'Currently Building',d:'next thing in flight',k:'building current next'},
    skills:{t:'Skills',d:'tech & tools',k:'skills arsenal'},
    principles:{t:'How I Think',d:'principles + philosophy',k:'principles philosophy how think'},
    activity:{t:'Activity',d:'github heatmap',k:'activity heatmap github'},
    beyond:{t:'Beyond',d:'outside the terminal',k:'beyond hobbies'},
    contact:{t:'Contact',d:'say hi',k:'contact email'}
  };
  const JUMPS=[...document.querySelectorAll('section[id]')].map(s=>{
    const meta=SECTION_META[s.id];if(!meta)return null;
    const lbl=s.querySelector('.sec-label');
    const num=lbl?(lbl.textContent.match(/^\s*(\d+)/)||[])[1]:null;
    return {g:'Jump to',t:meta.t,d:meta.d,k:meta.k,ic:num||'·',act:()=>go('#'+s.id)};
  }).filter(Boolean);
  const CMDS=[
    ...JUMPS,
    {g:'Projects',t:'Sensory',d:'Best UI/UX · HackaBull VII',k:'sensory hackabull hackathon nextjs gemini elevenlabs accessibility autistic wheelchair deaf blind dyslexic',ic:'◈',act:()=>open('https://github.com/Harshxth/Sensory')},
    {g:'Projects',t:'CareCall',d:'agentic voice AI for healthcare',k:'carecall hackusf adk gemini',ic:'◈',act:()=>open('https://github.com/Harshxth/CareCall')},
    {g:'Projects',t:'Sentinel AI',d:'confidence-gated multi-agent NLP',k:'sentinel kaggle roberta mcp claude',ic:'◈',act:()=>open('https://github.com/Harshxth/Sentinel-AI')},
    {g:'Projects',t:'UrbanMind',d:'multi-agent city design',k:'urbanmind agents tampa imagen',ic:'◈',act:()=>open('https://github.com/Harshxth/UrbanMind')},
    {g:'Projects',t:'CiteIQ',d:'agentic RAG system',k:'citeiq rag langgraph',ic:'◈',act:()=>open('https://github.com/Harshxth/citeiq')},
    {g:'Actions',t:'Email Harshith',d:'harshithgujjeti@icloud.com',k:'mail email contact',ic:'✉',act:()=>open('mailto:harshithgujjeti@icloud.com')},
    {g:'Actions',t:'Download résumé',d:'PDF',k:'resume cv pdf',ic:'↓',act:()=>open('Harshith_Gujjeti_Resume.pdf')},
    {g:'Actions',t:'GitHub profile',d:'@Harshxth',k:'github profile',ic:'⎇',act:()=>open('https://github.com/Harshxth')},
    {g:'Actions',t:'LinkedIn',d:'in/harshithgujjeti',k:'linkedin',ic:'in',act:()=>open('https://linkedin.com/in/harshithgujjeti')},
    {g:'Actions',t:'Toggle theme',d:'light / dark',k:'theme dark light mode',ic:'◐',act:()=>document.getElementById('theme-toggle').click()},
    {g:'Actions',t:'Print portfolio',d:'print-optimized layout',k:'print resume',ic:'⎙',act:()=>window.print()},
  ];
  const root=document.getElementById('cmdk-root');
  const input=document.getElementById('cmdk-input');
  const list=document.getElementById('cmdk-list');
  const openBtn=document.getElementById('cmdk-open');
  let sel=0,filtered=[...CMDS];
  function go(h){close();setTimeout(()=>{const el=document.querySelector(h);if(el)el.scrollIntoView({behavior:'smooth',block:'start'});},80);}
  function open(u){close();window.open(u,u.startsWith('http')||u.startsWith('mailto:')?'_blank':'_self');}
  function render(){
    if(!filtered.length){list.innerHTML='<div class="cmdk-empty">No matches</div>';return;}
    let html='',lastG='';
    filtered.forEach((c,i)=>{
      if(c.g!==lastG){html+=`<div class="cmdk-group">${c.g}</div>`;lastG=c.g;}
      html+=`<div class="cmdk-item${i===sel?' sel':''}" data-i="${i}"><div class="ic">${c.ic}</div><div class="lbl"><div class="t">${c.t}</div><div class="d">${c.d}</div></div></div>`;
    });
    list.innerHTML=html;
    const selEl=list.querySelector('.cmdk-item.sel');if(selEl)selEl.scrollIntoView({block:'nearest'});
  }
  function refilter(){
    const q=input.value.trim().toLowerCase();
    if(!q){filtered=[...CMDS];}
    else{filtered=CMDS.filter(c=>(c.t+' '+c.d+' '+c.k+' '+c.g).toLowerCase().includes(q));}
    sel=0;render();
  }
  function openPalette(){root.classList.add('on');input.value='';filtered=[...CMDS];sel=0;render();setTimeout(()=>input.focus(),10);}
  function close(){root.classList.remove('on');}
  function toggle(){root.classList.contains('on')?close():openPalette();}
  document.addEventListener('keydown',e=>{
    if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();toggle();return;}
    if(!root.classList.contains('on'))return;
    if(e.key==='Escape'){e.preventDefault();close();}
    else if(e.key==='ArrowDown'){e.preventDefault();sel=(sel+1)%filtered.length;render();}
    else if(e.key==='ArrowUp'){e.preventDefault();sel=(sel-1+filtered.length)%filtered.length;render();}
    else if(e.key==='Enter'){e.preventDefault();if(filtered[sel])filtered[sel].act();}
  });
  if(openBtn)openBtn.addEventListener('click',openPalette);
  if(input)input.addEventListener('input',refilter);
  if(list)list.addEventListener('click',e=>{const it=e.target.closest('.cmdk-item');if(!it)return;const i=parseInt(it.dataset.i,10);if(!isNaN(i)&&filtered[i])filtered[i].act();});
  if(root)root.addEventListener('click',e=>{if(e.target===root)close();});
})();

// ── CURSOR ────────────────────────────────────────────────────────────────────
function initCursor(){
  const reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse=window.matchMedia&&window.matchMedia('(hover: none), (pointer: coarse)').matches;
  if(reduced||coarse)return;
  const o=document.getElementById('cur-o'),d=document.getElementById('cur-d');
  let rx=0,ry=0,mx=-100,my=-100;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;});
  // lerp .20 — buttery but tight; paired with no CSS transition on #cur-o
  (function loop(){rx+=(mx-rx)*.20;ry+=(my-ry)*.20;o.style.transform=`translate(${rx-15}px,${ry-15}px)`;d.style.transform=`translate(${mx-3.5}px,${my-3.5}px)`;requestAnimationFrame(loop);})();
}
function initNav(){const n=document.getElementById('nav');window.addEventListener('scroll',()=>n.classList.toggle('scrolled',window.scrollY>60));}

// ── HERO BG ───────────────────────────────────────────────────────────────────
// 18-second narrative loop. First 5 seconds is the exact deployed ambient
// (38x28 tile grid + kernel scan + conv maps + particles). Then one chunk
// gets "chosen" and we smoothly transition into the RAG retrieval → attention
// zoom → answer ejection → fade back to ambient.
function initBG(){
  // three.js is deferred; on slow connections it may land after the boot sequence.
  if(typeof THREE==='undefined'){
    let waited=0;
    const poll=setInterval(()=>{ if(typeof THREE!=='undefined'){clearInterval(poll);initBG();} else if((waited+=100)>10000){clearInterval(poll);} },100);
    return;
  }
  const canvas=document.getElementById('nn-canvas'),hero=document.getElementById('hero');
  const GW=()=>hero.offsetWidth,GH=()=>hero.offsetHeight;
  const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(80,GW()/GH(),.1,500);
  camera.position.set(0,4,38);
  const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});
  renderer.setSize(GW(),GH());renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setClearColor(0x000000,0);

  // Palette-aware colour map (reads the CSS data-palette attr on <html>)
  const isPurple=document.documentElement.getAttribute('data-palette')==='purple';
  const TC=isPurple?[0xC084FC,0xA855F7,0x818CF8,0xE879F9,0x7C3AED,0x6366F1]
                   :[0xE5E7EB,0xD1D5DB,0x9CA3AF,0xF3F4F6,0x6B7280,0xB4B4BC];
  const MC=isPurple?[0x818CF8,0xC084FC,0xE879F9]
                   :[0x9CA3AF,0xE5E7EB,0xF3F4F6];
  const COL_SCAN  =isPurple?0xA855F7:0xD1D5DB;
  const COL_KFILL =isPurple?0xC084FC:0xF3F4F6;
  const COL_KBORD =isPurple?0xE879F9:0xF9FAFB;
  const COL_PARTS =isPurple?0xC084FC:0xE5E7EB;
  const COL_Q     =isPurple?0xE879F9:0xF9FAFB;
  const COL_A     =isPurple?0xC084FC:0xD1D5DB;
  const COL_CHUNK =isPurple?0x818CF8:0x9CA3AF;
  const COL_ACC   =isPurple?0xA78BFA:0xB4B4BC;
  const COL_TRAIL =isPurple?0xE879F9:0xE5E7EB;

  // ═══════════ AMBIENT SCENE (exact deployed visuals) ═══════════
  const TCOLS=38,TROWS=28,TCW=3.2,TCH=2.6;
  const cells=[],cg=new THREE.PlaneGeometry(TCW-.16,TCH-.16);
  for(let r=0;r<TROWS;r++)for(let c=0;c<TCOLS;c++){
    const mat=new THREE.MeshBasicMaterial({color:TC[Math.floor(Math.random()*TC.length)],transparent:true,opacity:Math.random()*.12});
    const m=new THREE.Mesh(cg,mat);m.position.set((c-TCOLS/2)*TCW,(r-TROWS/2)*TCH,-10+(Math.random()-.5)*5);
    m.userData={ph:Math.random()*Math.PI*2,sp:.2+Math.random()*.7,tgt:Math.random()*.42};scene.add(m);cells.push(m);
  }
  const scans=[];
  for(let i=0;i<8;i++){
    const sl=new THREE.Mesh(new THREE.PlaneGeometry(TCW*.82,TROWS*TCH),new THREE.MeshBasicMaterial({color:COL_SCAN,transparent:true,opacity:.1}));
    sl.userData={ph:i*(Math.PI*2/8)};sl.position.z=-9;scene.add(sl);scans.push(sl);
  }
  const MAPS=[{cols:18,rows:14,z:-2,rx:.18,ry:-.22,s:3.0,ox:28},{cols:14,rows:10,z:3,rx:.12,ry:-.16,s:3.0,ox:22},{cols:10,rows:8,z:8,rx:.08,ry:-.1,s:3.0,ox:18}];
  const cc=[];
  const mapLines=[]; // collect line materials so we can fade them
  MAPS.forEach((mp,mi)=>{
    const CW=mp.s,CH=mp.s*.9,ox=-(mp.cols/2)*CW+mp.ox,oy=-(mp.rows/2)*CH,mc=MC[mi];
    const grp=new THREE.Group();grp.rotation.x=mp.rx;grp.rotation.y=mp.ry;
    for(let r=0;r<mp.rows;r++)for(let c=0;c<mp.cols;c++){
      const mat=new THREE.MeshBasicMaterial({color:mc,transparent:true,opacity:.12});
      const m=new THREE.Mesh(new THREE.PlaneGeometry(CW-.1,CH-.08),mat);
      m.position.set(ox+c*CW+CW/2,oy+r*CH+CH/2,mp.z);
      m.userData={mi,r,c,cols:mp.cols,rows:mp.rows,ph:Math.random()*Math.PI*2};grp.add(m);cc.push(m);
    }
    for(let r=0;r<=mp.rows;r++){
      const g=new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(ox,oy+r*CH,mp.z),new THREE.Vector3(ox+mp.cols*CW,oy+r*CH,mp.z)]);
      const mat=new THREE.LineBasicMaterial({color:mc,transparent:true,opacity:.18});
      grp.add(new THREE.Line(g,mat));mapLines.push(mat);
    }
    for(let c=0;c<=mp.cols;c++){
      const g=new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(ox+c*CW,oy,mp.z),new THREE.Vector3(ox+c*CW,oy+mp.rows*CH,mp.z)]);
      const mat=new THREE.LineBasicMaterial({color:mc,transparent:true,opacity:.18});
      grp.add(new THREE.Line(g,mat));mapLines.push(mat);
    }
    scene.add(grp);
  });
  const K_AMB=3,mp0=MAPS[0],CW0=mp0.s,CH0=mp0.s*.9,kW=K_AMB*CW0,kH=K_AMB*CH0;
  const kFill=new THREE.Mesh(new THREE.PlaneGeometry(kW-.08,kH-.08),new THREE.MeshBasicMaterial({color:COL_KFILL,transparent:true,opacity:.16}));
  const kBorder=new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-kW/2,-kH/2,0),new THREE.Vector3(kW/2,-kH/2,0),new THREE.Vector3(kW/2,kH/2,0),new THREE.Vector3(-kW/2,kH/2,0)]),new THREE.LineBasicMaterial({color:COL_KBORD,transparent:true,opacity:.95}));
  const tG=new THREE.Group(),tL=kW*.18;
  [[-kW/2,-kH/2],[kW/2,-kH/2],[kW/2,kH/2],[-kW/2,kH/2]].forEach(([cx,cy])=>{
    const sx=Math.sign(cx),sy=Math.sign(cy);
    tG.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(cx,cy,0),new THREE.Vector3(cx-sx*tL,cy,0)]),new THREE.LineBasicMaterial({color:COL_KBORD,transparent:true,opacity:.85})));
    tG.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(cx,cy,0),new THREE.Vector3(cx,cy-sy*tL,0)]),new THREE.LineBasicMaterial({color:COL_KBORD,transparent:true,opacity:.85})));
  });
  const kern=new THREE.Group();kern.add(kFill);kern.add(kBorder);kern.add(tG);kern.position.z=mp0.z+.15;scene.add(kern);
  // Collect all kernel line materials so we can fade them
  const kernLines=[];kBorder.material&&kernLines.push(kBorder.material);
  tG.children.forEach(c=>c.material&&kernLines.push(c.material));

  const PN=600,pP=new Float32Array(PN*3),pV=[];
  for(let i=0;i<PN;i++){pP[i*3]=(Math.random()-.5)*(TCOLS*TCW*1.1);pP[i*3+1]=(Math.random()-.5)*(TROWS*TCH);pP[i*3+2]=-12+Math.random()*22;pV.push(.025+Math.random()*.07);}
  const pG=new THREE.BufferGeometry();pG.setAttribute('position',new THREE.BufferAttribute(pP,3));
  const particlesMat=new THREE.PointsMaterial({color:COL_PARTS,size:.11,transparent:true,opacity:.55});
  const particles=new THREE.Points(pG,particlesMat);scene.add(particles);
  const rayMats=[];
  for(let i=0;i<22;i++){
    const x=(Math.random()-.5)*(TCOLS*TCW),y=(Math.random()-.5)*(TROWS*TCH);
    const mat=new THREE.LineBasicMaterial({color:COL_PARTS,transparent:true,opacity:.03});
    scene.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(x,y,-8),new THREE.Vector3(x+(Math.random()-.5)*6,y+(Math.random()-.5)*3,8)]),mat));
    rayMats.push(mat);
  }
  const maxR=mp0.rows-K_AMB,maxC=mp0.cols-K_AMB,OfX=-(mp0.cols/2)*CW0+mp0.ox,OfY=-(mp0.rows/2)*CH0;

  // ═══════════ RAG SCENE (overlaid, invisible during ambient) ═══════════
  function doc(w,h,col,op,bo){
    const g=new THREE.Group();
    const f=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({color:col,transparent:true,opacity:op}));
    const b=new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-w/2,-h/2,0),new THREE.Vector3(w/2,-h/2,0),new THREE.Vector3(w/2,h/2,0),new THREE.Vector3(-w/2,h/2,0)]),new THREE.LineBasicMaterial({color:col,transparent:true,opacity:bo}));
    g.add(f);g.add(b);return{g,f,b};
  }
  // RAG scene is offset to the right so it doesn't sit behind the hero text.
  // The camera stays viewport-centered during zoom — RAG_X puts the query in
  // the right third of the canvas, well clear of the centered hero copy.
  const RAG_X=12;
  const QW=7.5,QH=4.3;
  const q=doc(QW,QH,COL_Q,0,0);q.g.position.set(RAG_X,0,2);
  const qLines=[];
  for(let i=0;i<4;i++){
    const w=[6.2,5.2,4.0,4.8][i];
    const ln=new THREE.Mesh(new THREE.PlaneGeometry(w,.18),new THREE.MeshBasicMaterial({color:COL_Q,transparent:true,opacity:0}));
    ln.position.set(-.6,1.3-i*.82,.01);q.g.add(ln);qLines.push(ln);
  }
  scene.add(q.g);

  // Attention stack inside query
  // Attention group lives inside the query but is shifted slightly left in
  // the query's local space so when camera frames it, the grid sits in the
  // right third of the viewport without extending off the canvas edge.
  const attnGroup=new THREE.Group();attnGroup.position.set(-1.2,0,.8);attnGroup.visible=false;
  const COLS=6,ROWS_A=8,CELL_W=.88,CELL_H=.4,COL_GAP=.18;
  const stackW=COLS*(CELL_W+COL_GAP)-COL_GAP,stackH=ROWS_A*CELL_H;
  const attnCells=[];
  for(let col=0;col<COLS;col++){
    for(let row=0;row<ROWS_A;row++){
      const m=new THREE.Mesh(new THREE.PlaneGeometry(CELL_W-.06,CELL_H-.06),new THREE.MeshBasicMaterial({color:COL_ACC,transparent:true,opacity:0}));
      m.position.set(col*(CELL_W+COL_GAP)-stackW/2+CELL_W/2,row*CELL_H-stackH/2+CELL_H/2,0);
      attnGroup.add(m);attnCells.push({m,col,row,ph:col*.18+row*.09});
    }
    const cx=col*(CELL_W+COL_GAP)-stackW/2+CELL_W/2;
    attnGroup.add(new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(cx-CELL_W/2,-stackH/2,.01),new THREE.Vector3(cx+CELL_W/2,-stackH/2,.01),new THREE.Vector3(cx+CELL_W/2,stackH/2,.01),new THREE.Vector3(cx-CELL_W/2,stackH/2,.01)]),new THREE.LineBasicMaterial({color:COL_Q,transparent:true,opacity:0})));
  }
  const flowLines=[];
  for(let col=0;col<COLS-1;col++){
    const x1=col*(CELL_W+COL_GAP)-stackW/2+CELL_W/2+CELL_W/2;
    const x2=(col+1)*(CELL_W+COL_GAP)-stackW/2+CELL_W/2-CELL_W/2;
    for(let row=0;row<ROWS_A;row+=2){
      const y=row*CELL_H-stackH/2+CELL_H/2;
      const geo=new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(x1,y,.02),new THREE.Vector3(x2,y,.02)]);
      const mat=new THREE.LineBasicMaterial({color:COL_TRAIL,transparent:true,opacity:0});
      attnGroup.add(new THREE.Line(geo,mat));flowLines.push({mat,col,row});
    }
  }
  q.g.add(attnGroup);

  const a=doc(5.5,3.2,COL_A,0,0);a.g.position.set(RAG_X+14,0,2);
  const aL=[];
  for(let i=0;i<3;i++){
    const w=[4.6,4,3.2][i];
    const ln=new THREE.Mesh(new THREE.PlaneGeometry(w,.16),new THREE.MeshBasicMaterial({color:COL_A,transparent:true,opacity:0}));
    ln.position.set(-.4,.85-i*.85,.01);a.g.add(ln);aL.push(ln);
  }
  scene.add(a.g);

  // RAG chunks positioned in a ring (separate from the tile grid)
  const CH=[],NC=70;
  for(let i=0;i<NC;i++){
    const w=1.6+Math.random()*1.8,h=.85+Math.random()*1.0;
    const c=doc(w,h,COL_CHUNK,0,0);
    const angle=Math.random()*Math.PI*2;
    const radius=12+Math.random()*20;
    const px=Math.cos(angle)*radius+(Math.random()-.5)*6+RAG_X;
    const py=Math.sin(angle)*radius*.55+(Math.random()-.5)*4;
    const pz=-6+Math.random()*16;
    c.g.position.set(px,py,pz);
    const tx=new THREE.Mesh(new THREE.PlaneGeometry(w*.7,.06),new THREE.MeshBasicMaterial({color:COL_CHUNK,transparent:true,opacity:0}));tx.position.z=.01;c.g.add(tx);
    scene.add(c.g);
    CH.push({...c,w,h,bx:px,by:py,bz:pz,ph:Math.random()*Math.PI*2,top:false,rank:-1,isChosen:false});
  }

  const TRAIL_LEN=24,trails=[];
  for(let i=0;i<8;i++){
    const pts=new Float32Array(TRAIL_LEN*3);
    const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.BufferAttribute(pts,3));
    const mat=new THREE.LineBasicMaterial({color:COL_TRAIL,transparent:true,opacity:0});
    scene.add(new THREE.Line(geo,mat));
    trails.push({geo,mat,history:[]});
  }

  const flash=new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(Array.from({length:49},(_,i)=>{const a=(i/48)*Math.PI*2;return new THREE.Vector3(Math.cos(a),Math.sin(a),0);})),new THREE.LineBasicMaterial({color:COL_TRAIL,transparent:true,opacity:0}));
  flash.position.copy(q.g.position);scene.add(flash);
  const probe=new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(Array.from({length:65},(_,i)=>{const a=(i/64)*Math.PI*2;return new THREE.Vector3(Math.cos(a),Math.sin(a),0);})),new THREE.LineBasicMaterial({color:COL_Q,transparent:true,opacity:0}));
  probe.position.copy(q.g.position);scene.add(probe);

  // "Summoning" ring that ripples from the chosen ambient tile toward center
  const summon=new THREE.LineLoop(new THREE.BufferGeometry().setFromPoints(Array.from({length:49},(_,i)=>{const a=(i/48)*Math.PI*2;return new THREE.Vector3(Math.cos(a),Math.sin(a),0);})),new THREE.LineBasicMaterial({color:COL_TRAIL,transparent:true,opacity:0}));
  scene.add(summon);

  // ═══════════ PHASE ORCHESTRATION ═══════════
  const CYCLE=18;
  const K=8;
  let t=0,cy=-1,chosenCellIdx=-1;
  let hmx=0,hmy=0;
  document.addEventListener('mousemove',e=>{hmx=(e.clientX/window.innerWidth-.5)*2;hmy=-(e.clientY/window.innerHeight-.5)*2;});

  function smoothstep(e0,e1,x){const t=Math.max(0,Math.min(1,(x-e0)/(e1-e0)));return t*t*(3-2*t);}
  function lerpVec(a,b,u){return new THREE.Vector3(a.x+(b.x-a.x)*u,a.y+(b.y-a.y)*u,a.z+(b.z-a.z)*u);}

  const CAM_WIDE=new THREE.Vector3(0,4,38);     // deployed default
  // Stay viewport-centered so the hero text area (centered) doesn't get
  // covered. Query at RAG_X still appears in the right third thanks to FOV.
  const CAM_NEAR=new THREE.Vector3(0,0,16);

  // Pause the loop while the hero is offscreen; reduced-motion users get one static frame.
  const reducedBG=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let bgRunning=false,bgRaf=0;
  function animate(){
    if(!bgRunning)return;
    bgRaf=requestAnimationFrame(animate);t+=.013;
    const cp=(t%CYCLE)/CYCLE,nc=Math.floor(t/CYCLE);
    if(nc!==cy){
      cy=nc;
      // Pick a tile close to where the RAG scene will emerge (near RAG_X, y≈0).
      // The camera zooms toward that region, so the chosen cell visually
      // "opens up" into the query as the zoom completes.
      let best=-1,bestScore=Infinity;
      for(let tries=0;tries<40;tries++){
        const j=Math.floor(Math.random()*cells.length);
        const p=cells[j].position;
        const dx=p.x-RAG_X, dy=p.y;
        const score=dx*dx+dy*dy*1.8;
        if(score<bestScore){bestScore=score;best=j;}
      }
      chosenCellIdx=best;
      // Pick K top-K from the RAG chunk ring
      CH.forEach(c=>{c.top=false;c.rank=-1;});
      const pool=[...Array(CH.length).keys()].sort(()=>Math.random()-.5).slice(0,K);
      pool.forEach((id,r)=>{CH[id].top=true;CH[id].rank=r;});
      trails.forEach((tr,i)=>{tr.history=[];tr.chunkIdx=pool[i];});
    }

    // ═══ Phase envelopes (cp 0..1 across 18s) ═══
    //  0.00-0.28  AMBIENT (full deployed look)
    //  0.28-0.38  TRANSITION-IN (ambient fades, RAG fades in, chosen tile ripples)
    //  0.36-0.46  PROBE + chunk wake
    //  0.46-0.58  ATTRACT
    //  0.56-0.62  CONVERGE flash
    //  0.58-0.72  MORPH + zoom in
    //  0.68-0.84  CASCADE (attention stack active)
    //  0.84-0.90  EJECT answer
    //  0.88-1.00  FADE OUT RAG, RESTORE ambient
    const pAmbient   = 1 - smoothstep(.26,.38,cp) + smoothstep(.88,.98,cp);  // bright during ambient + after reset
    const ambOp      = Math.max(0,Math.min(1,pAmbient));
    const pTransIn   = smoothstep(.28,.38,cp);                               // 0→1
    const pChosen    = smoothstep(.26,.34,cp)*(1-smoothstep(.38,.46,cp));    // flash the chosen tile
    const pSummon    = smoothstep(.28,.36,cp)*(1-smoothstep(.36,.44,cp));
    const pReveal    = smoothstep(.33,.44,cp);                               // query fade in
    const pProbe     = smoothstep(.40,.50,cp)*(1-smoothstep(.50,.58,cp));
    const pAwake     = smoothstep(.42,.52,cp)*(1-smoothstep(.86,.95,cp));
    const pAttract   = smoothstep(.48,.58,cp)*(1-smoothstep(.62,.68,cp));
    const pConverge  = smoothstep(.56,.60,cp)*(1-smoothstep(.60,.66,cp));
    const pMorph     = smoothstep(.60,.70,cp)*(1-smoothstep(.86,.92,cp));
    const pAttn      = smoothstep(.64,.74,cp)*(1-smoothstep(.84,.90,cp));
    const pCascade   = smoothstep(.70,.84,cp);
    const pEject     = smoothstep(.84,.88,cp)*(1-smoothstep(.92,.96,cp));
    const settle     = smoothstep(.88,.94,cp)*(1-smoothstep(.96,1.0,cp));
    const pFadeOut   = smoothstep(.88,.96,cp);
    const ragActive  = Math.max(pTransIn,pReveal,pAwake,pAttract,pConverge,pMorph,pAttn,pEject,settle)*(1-pFadeOut);
    const beat=.5+.5*Math.sin(t*Math.PI);

    // ═══ CAMERA ═══
    // Zoom begins at t=5s (start of RAG transition), holds zoomed during
    // attention, smoothly pulls back to standby after answer ejects.
    let camU=0;
    if(cp<.28)camU=0;
    else if(cp<.68)camU=smoothstep(.28,.68,cp);
    else if(cp<.84)camU=1;
    else camU=1-smoothstep(.84,.98,cp);
    const camPos=lerpVec(CAM_WIDE,CAM_NEAR,camU);
    const parallax=1-camU;
    camera.position.x+=((camPos.x+hmx*7*parallax)-camera.position.x)*.04;
    camera.position.y+=((camPos.y+(-hmy*4+4)*parallax)-camera.position.y)*.04;
    camera.position.z+=(camPos.z-camera.position.z)*.04;
    // Keep look-at centered on world origin so the hero text stays framed
    // at viewport center. RAG content sits off-axis (right side of frame).
    const lookY=q.g.position.y*(1-camU);
    camera.lookAt(0,lookY,0);

    // ═══ AMBIENT animation (runs always, opacity-multiplied by ambOp) ═══
    // Cells wave/pulse (original)
    cells.forEach((c,i)=>{
      let tgt=c.userData.tgt*(.5+.5*Math.sin(t*c.userData.sp+c.userData.ph));
      // Chosen cell flashes bright during the transition
      if(i===chosenCellIdx)tgt=Math.max(tgt,pChosen*.85);
      c.material.opacity+=(tgt*ambOp-c.material.opacity)*.07;
    });
    // Scan lines sweep
    scans.forEach(s=>{
      s.position.x=-(TCOLS/2)*TCW+((t*.22+s.userData.ph/(Math.PI*2))*(TCOLS*TCW))%(TCOLS*TCW);
      s.material.opacity=.1*ambOp;
    });
    // Kernel scan through conv map
    const step=Math.floor(t*2.0),kc=step%(maxC+1),kr=Math.floor(step/(maxC+1))%(maxR+1);
    kern.position.x=OfX+(kc+K_AMB/2)*CW0;kern.position.y=OfY+(kr+K_AMB/2)*CH0;
    kFill.material.opacity=.16*ambOp;
    kernLines.forEach(m=>m.opacity=.85*ambOp);
    cc.forEach(c=>{
      if(c.userData.mi===0){
        const inK=c.userData.c>=kc&&c.userData.c<kc+K_AMB&&c.userData.r>=kr&&c.userData.r<kr+K_AMB;
        c.material.opacity+=((inK?.5:.05)*ambOp-c.material.opacity)*.11;
      }else{
        c.material.opacity=(.04+.07*Math.sin(t*.65+c.userData.ph))*ambOp;
      }
    });
    mapLines.forEach(m=>m.opacity=.18*ambOp);
    // Particles + rays
    const pp=pG.attributes.position.array;
    for(let i=0;i<PN;i++){pp[i*3]+=pV[i];if(pp[i*3]>(TCOLS/2)*TCW*1.1)pp[i*3]=-(TCOLS/2)*TCW*1.1;}
    pG.attributes.position.needsUpdate=true;
    particlesMat.opacity=.55*ambOp;
    rayMats.forEach(m=>m.opacity=.03*ambOp);

    // ═══ SUMMONING ring from chosen tile toward center ═══
    if(chosenCellIdx>=0&&pSummon>.01){
      const src=cells[chosenCellIdx].position;
      const u=smoothstep(.28,.36,cp);
      summon.position.x=src.x+(RAG_X-src.x)*u;
      summon.position.y=src.y*(1-u);
      summon.position.z=src.z*(1-u);
      summon.scale.setScalar(1.5+9*u);
      summon.material.opacity=.8*pSummon*(1-u*.5);
    }else{summon.material.opacity=0;}

    // ═══ QUERY ═══
    const qVisible=pReveal*(1-pFadeOut);
    q.f.material.opacity=qVisible*(.38+.2*beat+.75*pConverge)*(1-pMorph*.55);
    q.b.material.opacity=qVisible*(.7+.4*pProbe+.35*pConverge);
    q.g.scale.setScalar(.6+.4*qVisible+.08*pProbe+.12*pConverge);
    const textFade=qVisible*(1-pMorph);
    qLines.forEach((ln,i)=>{
      ln.material.opacity=textFade*.55*(.85+.15*Math.sin(t*1.5+i*.4));
      ln.position.y=(1.3-i*.82)-pMorph*.28;
    });

    // ═══ PROBE + FLASH ═══
    probe.scale.setScalar(2+32*smoothstep(.40,.52,cp));
    probe.material.opacity=.8*pProbe*(1-pFadeOut);
    flash.scale.setScalar(3+24*pConverge);
    flash.material.opacity=pConverge*1.0;

    // ═══ CHUNKS (RAG ring) ═══
    CH.forEach(c=>{
      const basePulse=.11+.05*Math.sin(t*.4+c.ph)+.04*beat;
      let tFill=basePulse,tBord=.25;
      if(c.top){
        const rb=(K-c.rank)/K;
        const lit=pAwake*rb;
        tFill=basePulse+.75*lit;
        tBord=.25+.85*lit;
        const attr=smoothstep(.50,.60,cp);
        // Interpolate from base position toward the offset query position (RAG_X, 0, 0)
        const tx=c.bx+(RAG_X-c.bx)*attr,ty=c.by*(1-attr),tz=c.bz*(1-attr);
        c.g.position.x+=(tx+Math.cos(t*.25+c.ph)*.15*(1-attr)-c.g.position.x)*.12;
        c.g.position.y+=(ty+Math.sin(t*.3+c.ph)*.25*(1-attr)-c.g.position.y)*.12;
        c.g.position.z+=(tz-c.g.position.z)*.12;
        c.g.scale.setScalar(1-attr*.7);
      }else{
        c.g.position.x+=(c.bx+Math.cos(t*.25+c.ph)*.15-c.g.position.x)*.06;
        c.g.position.y+=(c.by+Math.sin(t*.3+c.ph)*.25-c.g.position.y)*.06;
        c.g.position.z+=(c.bz-c.g.position.z)*.06;
        c.g.scale.setScalar(1);
      }
      const vis=ragActive*(1-pMorph*.9)*(1-pAttn*.8);
      c.f.material.opacity+=(tFill*vis-c.f.material.opacity)*.12;
      c.b.material.opacity+=(tBord*vis-c.b.material.opacity)*.12;
      // chunk text line
      if(c.g.children[2]&&c.g.children[2].material){c.g.children[2].material.opacity=.3*vis;}
    });

    // ═══ TRAILS ═══
    trails.forEach(tr=>{
      if(tr.chunkIdx===undefined||!CH[tr.chunkIdx]){tr.mat.opacity=0;return;}
      const c=CH[tr.chunkIdx];
      if(pAttract>.1&&pAttract<.98){
        tr.history.push({x:c.g.position.x,y:c.g.position.y,z:c.g.position.z});
        if(tr.history.length>TRAIL_LEN)tr.history.shift();
      }else if(pFadeOut>.3){tr.history=[];}
      const arr=tr.geo.attributes.position.array;
      for(let s=0;s<TRAIL_LEN;s++){
        const h=tr.history[s]||(tr.history[tr.history.length-1]||{x:0,y:0,z:0});
        arr[s*3]=h.x;arr[s*3+1]=h.y;arr[s*3+2]=h.z;
      }
      tr.geo.attributes.position.needsUpdate=true;
      tr.mat.opacity=.7*pAttract*(1-pFadeOut);
    });

    // ═══ ATTENTION STACK ═══
    attnGroup.visible=pMorph>.01||pAttn>.01;
    const outlines=attnGroup.children.filter(ch=>ch.type==='LineLoop');
    if(attnGroup.visible){
      attnGroup.scale.setScalar((.4+.6*pMorph)*.82);
      outlines.forEach((o,ci)=>{o.material.opacity=.35*pMorph*(.7+.3*Math.sin(t*.6+ci*.3));});
      const wave=pCascade*COLS;
      attnCells.forEach(c=>{
        const dcol=Math.abs(c.col-wave);
        const near=Math.max(0,1-dcol/2.2);
        const pulse=.5+.5*Math.sin(t*2.2+c.ph);
        const tgt=pMorph*(.2+.08*beat)+pAttn*.45+near*1.05*pulse*pAttn;
        c.m.material.opacity+=(tgt-c.m.material.opacity)*.22;
      });
      flowLines.forEach(fl=>{
        const dist=Math.abs(fl.col+.5-wave);
        const near=Math.max(0,1-dist/1.5);
        fl.mat.opacity=.9*near*pAttn;
      });
    }else{
      attnCells.forEach(c=>c.m.material.opacity+=(-c.m.material.opacity)*.3);
      flowLines.forEach(fl=>fl.mat.opacity+=(-fl.mat.opacity)*.3);
      outlines.forEach(o=>o.material.opacity+=(-o.material.opacity)*.3);
    }

    // ═══ ANSWER EJECTION ═══
    if(pEject>.01||settle>.01){
      // Answer starts at the query (RAG_X) and flies further right (+14) to its rest spot
      a.g.position.x=RAG_X+14*settle;
      a.g.position.z=pEject*6*(1-settle)+2;
      a.g.scale.setScalar(.6+.5*pEject);
    }else{
      a.g.position.set(RAG_X+14,0,2);a.g.scale.setScalar(1);
    }
    const aVis=pEject*(.6+.4*beat)+settle*.8*(1-smoothstep(.97,1,cp));
    a.f.material.opacity=.45*aVis;
    a.b.material.opacity=.95*aVis;
    aL.forEach(ln=>ln.material.opacity=.55*aVis);

    renderer.render(scene,camera);
  }
  function bgStart(){if(bgRunning)return;bgRunning=true;bgRaf=requestAnimationFrame(animate);}
  function bgStop(){bgRunning=false;cancelAnimationFrame(bgRaf);}
  if(reducedBG){
    bgRunning=true;animate();bgStop(); // single static frame
  }else{
    const heroEl=document.getElementById('hero');
    if('IntersectionObserver' in window&&heroEl){
      new IntersectionObserver(es=>{es.forEach(e=>{e.isIntersecting?bgStart():bgStop();});},{threshold:0}).observe(heroEl);
    }else{bgStart();}
  }

  window.addEventListener('resize',()=>{camera.aspect=GW()/GH();camera.updateProjectionMatrix();renderer.setSize(GW(),GH());});
}

// ── EXPERIENCE ────────────────────────────────────────────────────────────────
function initExp(){
  const el=document.getElementById('exp-list');
  EXP.forEach((ex,i)=>{
    const div=document.createElement('div');div.className='exp-item';div.style.transitionDelay=i*.15+'s';div.style.color=ex.color;
    const sc=(ex.summary&&ex.bullets.length>ex.summary)?ex.summary:ex.bullets.length;
    const visB=ex.bullets.slice(0,sc).map(b=>`<li>${b}</li>`).join('');
    const moreB=ex.bullets.slice(sc).map(b=>`<li>${b}</li>`).join('');
    const moreN=ex.bullets.length-sc;
    const bulletsHTML=`<ul class="exp-bullets">${visB}</ul>`+(moreN>0?`<div class="exp-more" id="xm-${i}"><div><ul class="exp-bullets">${moreB}</ul></div></div><button type="button" class="exp-readmore" data-t="xm-${i}" data-n="${moreN}" aria-expanded="false"><span class="rm-txt">+${moreN} more</span><span class="rm-ico">⌄</span></button>`:'');
    const subsHTML=(ex.projects&&ex.projects.length)?`<div class="subs">${ex.projLabel===false?'':'<div class="subs-label">Projects</div>'}${ex.projects.map(p=>`<button type="button" class="sub-row click" data-cs="${p.cs}"><span class="sub-main"><span class="sub-name"><span class="sub-dot done"></span>${p.name}</span><span class="sub-desc">${p.desc}</span></span><span class="sub-cta cta-chip shine-border">Case study <i>→</i></span></button>`).join('')}</div>`:'';
    const logoHTML=LOGOS[ex.logo]
      ?ex.logoFill
        ?`<div style="width:40px;height:40px;border-radius:8px;overflow:hidden;flex-shrink:0;border:1px solid ${ex.color}30"><img src="${LOGOS[ex.logo]}" style="width:100%;height:100%;object-fit:cover;display:block" loading="lazy" decoding="async" alt="${ex.org} logo"/></div>`
        :`<div style="width:40px;height:40px;border-radius:8px;background:#ffffff;display:flex;align-items:center;justify-content:center;flex-shrink:0;padding:3px;border:1px solid ${ex.color}30"><img src="${LOGOS[ex.logo]}" style="width:100%;height:100%;object-fit:contain;display:block" loading="lazy" decoding="async" alt="${ex.org} logo"/></div>`
      :`<div style="width:40px;height:40px;border-radius:8px;background:${ex.color}18;border:1px solid ${ex.color}30;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-family:'JetBrains Mono',monospace;font-size:.5rem;color:${ex.color};font-weight:700">${ex.org.split(' ')[0].substring(0,4).toUpperCase()}</div>`;
    div.innerHTML=`
      <div class="exp-dot" style="background:${ex.color};box-shadow:0 0 14px ${ex.color}88"></div>
      <div class="exp-card" style="color:${ex.color}">
        <span class="card-shine"></span>
        ${ex.bg?`<div class="exp-bg-name">${ex.bg}</div>`:''}
        <div class="exp-num">${String(i+1).padStart(2,'0')}</div>
        <div class="exp-header">
          <div style="display:flex;align-items:center;gap:.75rem">
            ${logoHTML}
            <div>
              <div class="mono" style="font-size:.6rem;color:${ex.color};letter-spacing:.14em;margin-bottom:.25rem">${ex.org}</div>
              <h3 class="display" style="font-size:1.05rem;font-weight:700;color:var(--text);margin:0;line-height:1.3">${ex.title}${ex.cur?`<span class="cur-badge"><span class="cur-dot-sm"></span>CURRENT</span>`:''}</h3>
            </div>
          </div>
          <div class="exp-period">${ex.period}</div>
        </div>
        <div style="display:flex;gap:.38rem;flex-wrap:wrap;margin-bottom:.2rem;margin-top:.6rem">${ex.tags.map(t=>`<span class="tag" style="background:${ex.color}10;border:1px solid ${ex.color}30;color:${ex.color}">${t}</span>`).join('')}</div>
        ${bulletsHTML}${subsHTML}
      </div>`;
    el.appendChild(div);
  });
  el.querySelectorAll('.exp-readmore').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const w=document.getElementById(btn.dataset.t);
      const open=w.classList.toggle('open');
      btn.classList.toggle('open',open);
      btn.setAttribute('aria-expanded',open?'true':'false');
      btn.querySelector('.rm-txt').textContent=open?'Show less':('+'+btn.dataset.n+' more');
    });
  });
  el.querySelectorAll('.sub-row[data-cs]').forEach(btn=>{
    btn.addEventListener('click',()=>{if(window.openCaseStudy)window.openCaseStudy(btn.dataset.cs,btn);});
  });
  // Scroll-drawn timeline: the line fills as you move through the section and
  // each dot ignites to its company color when the fill reaches it.
  const wrap=el.parentElement,line=wrap?wrap.querySelector('.timeline-line'):null;
  if(line){
    const fill=document.createElement('div');fill.className='tl-fill';line.appendChild(fill);
    const items=[...el.querySelectorAll('.exp-item')];
    let ticking=false;
    const update=()=>{
      ticking=false;
      const r=wrap.getBoundingClientRect();
      const p=Math.min(1,Math.max(0,(innerHeight*.62-r.top)/r.height));
      fill.style.height=(p*100)+'%';
      const fillY=r.top+r.height*p;
      items.forEach(it=>{if(it.getBoundingClientRect().top+24<=fillY)it.classList.add('lit');});
    };
    const onScroll=()=>{if(!ticking){ticking=true;requestAnimationFrame(update);}};
    addEventListener('scroll',onScroll,{passive:true});
    addEventListener('resize',onScroll,{passive:true});
    update();
  }
}

// ── PROJECTS ─────────────────────────────────────────────────────────────────
function initProj(){
  const grid=document.getElementById('projects-grid');
  // Bento sizing pattern — Row 1: feature(8) + regular(4) · Row 2: wide(6) + wide(6) · Row 3: regular×3(4 each)
  const SIZES=['feature','regular','wide','wide','regular','regular','regular'];
  PROJ.forEach((p,i)=>{
    const size=SIZES[i%SIZES.length]||'regular';
    const primaryCat=(p.cats||['ml'])[0];
    const catLabel=(p.cats||[]).map(c=>CAT_LABELS[c]||c).slice(0,2).join(' · ');
    const card=document.createElement('article');
    const hasMedia=!!(p.media&&p.media.live);
    const hasPoster=hasMedia&&!!p.media.poster;
    const hasViz=!hasMedia&&!!PROJ_VIZ[p.name];
    card.className=`proj-card reveal ${size}${hasMedia?' has-media':''}${hasPoster?' has-poster':''}${hasViz?' has-viz':''}`;
    card.style.cssText=`transition-delay:${i*.08}s;color:${p.color}`;
    card.dataset.cats=(p.cats||[]).join(' ');
    const vizInner=hasMedia
      ? `${hasPoster?`<img class="proj-media-layer poster" src="${p.media.poster}" alt="" loading="lazy" decoding="async">`:''}<img class="proj-media-layer live" src="${p.media.live}" alt="" loading="lazy" decoding="async">`
      : `<div class="proj-deco ${primaryCat}"></div>`;
    card.innerHTML=`
      <span class="card-shine"></span>
      <div class="proj-viz">
        <div class="proj-viz-bg"></div>
        ${vizInner}
        <div class="proj-viz-shine"></div>
        <span class="proj-viz-label">${p.sub.toUpperCase()}</span>
        ${hasMedia?'':(hasViz?`<div class="proj-viz-svg">${PROJ_VIZ[p.name]}</div>`:`<div class="proj-bg-metric">${p.metric}</div>`)}
      </div>
      <div class="proj-body">
        ${p.award?`<span class="proj-award">${p.award}</span>`:''}
        <span class="proj-pill">${catLabel}</span>
        <h3 class="proj-title">${p.name}</h3>
        <p class="proj-desc">${p.desc}</p>
        <div style="display:flex;gap:.3rem;flex-wrap:wrap;margin:.4rem 0 1rem">${p.tags.map(t=>`<span class="tag" style="background:var(--bg);border:1px solid var(--bord);color:var(--muted);padding:.18rem .55rem;border-radius:4px;font-family:'JetBrains Mono',monospace;font-size:.58rem">${t}</span>`).join('')}</div>
        <div class="proj-meta">
          <span>${(p.flow||[]).slice(0,2).join(' · ').toUpperCase()||'—'}</span>
          <span style="display:inline-flex;gap:.8rem;align-items:center">
            ${p.wip?'<span class="wip-tag">IN PROGRESS</span>':''}
            ${p.link?`<a class="gh-shine shine-border" href="${p.link}" target="_blank" rel="noopener" style="--shine:${p.color}">GitHub <span>↗</span></a>`:''}
          </span>
        </div>
      </div>`;
    grid.appendChild(card);
  });
  initProjFilters();
  initProjMedia();
}

// Cinematic hero -> live UI blur swap. Fires once when card crosses the
// viewport, after a brief beat so the user reads the poster image first.
// Respects prefers-reduced-motion (jumps straight to live image).
function initProjMedia(){
  const cards=document.querySelectorAll('.proj-card.has-media');
  if(!cards.length)return;
  const reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced){cards.forEach(c=>c.classList.add('media-revealed'));return;}
  if(typeof IntersectionObserver==='undefined'){
    cards.forEach(c=>setTimeout(()=>c.classList.add('media-revealed'),1800));
    return;
  }
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        setTimeout(()=>e.target.classList.add('media-revealed'),1400);
        io.unobserve(e.target);
      }
    });
  },{threshold:.4});
  cards.forEach(c=>io.observe(c));
}

function initProjFilters(){
  const wrap=document.getElementById('proj-filters');if(!wrap)return;
  const grid=document.getElementById('projects-grid');
  const all=new Set();
  PROJ.forEach(p=>(p.cats||[]).forEach(c=>all.add(c)));
  const order=['all','rag','agents','healthcare','ml'];
  const ordered=order.filter(c=>c==='all'||all.has(c));
  const counts={all:PROJ.length};
  PROJ.forEach(p=>(p.cats||[]).forEach(c=>counts[c]=(counts[c]||0)+1));
  wrap.innerHTML=ordered.map((c,i)=>`<button class="proj-filter${i===0?' active':''}" data-cat="${c}">${CAT_LABELS[c]||c}<span class="count">${counts[c]||0}</span></button>`).join('');
  wrap.addEventListener('click',e=>{
    const btn=e.target.closest('.proj-filter');if(!btn)return;
    wrap.querySelectorAll('.proj-filter').forEach(b=>b.classList.toggle('active',b===btn));
    const cat=btn.dataset.cat;
    grid.querySelectorAll('.proj-card').forEach(card=>{
      const cats=(card.dataset.cats||'').split(' ').filter(Boolean);
      const show=cat==='all'||cats.includes(cat);
      card.classList.toggle('hide',!show);
    });
  });
}

// ── HEATMAP ───────────────────────────────────────────────────────────────────
async function initHeatmap(){
  const grid=document.getElementById('hm-grid');
  const monthsEl=document.getElementById('hm-months');
  const totalEl=document.getElementById('hm-total');
  const subEl=document.getElementById('hm-sub');
  const statsEl=document.getElementById('hm-stats');
  const tip=document.getElementById('hm-tip');
  if(!grid)return;

  // Calendar year: Jan 1 → today
  const today=new Date();
  const year=today.getFullYear();
  const yearStart=new Date(year,0,1);
  const firstSun=new Date(yearStart);firstSun.setDate(firstSun.getDate()-firstSun.getDay());
  if(subEl)subEl.textContent=`IN ${year} · @HARSHXTH`;

  const skeletonDays=Math.ceil((today-firstSun)/86400000)+1;
  grid.innerHTML=Array.from({length:skeletonDays},()=>'<div class="hm-cell"></div>').join('');

  try{
    const res=await fetch(`https://github-contributions-api.jogruber.de/v4/Harshxth?y=${year}`);
    if(!res.ok)throw new Error('fetch failed');
    const data=await res.json();
    const contribs=data.contributions||[];
    const byDate={};contribs.forEach(c=>{byDate[c.date]=c;});

    grid.classList.remove('hm-skeleton');
    grid.innerHTML='';
    const fmt=d=>d.toISOString().slice(0,10);
    const monthPositions=[];let lastMonth=-1;
    const d=new Date(firstSun);
    let colIdx=0;
    let total=0,maxDay=0,streak=0,curStreak=0;
    const todayStr=fmt(today);
    const yearStartStr=fmt(yearStart);

    while(d<=today){
      const ds=fmt(d);const rec=byDate[ds];
      const count=rec?rec.count:0;const level=rec?rec.level:0;
      const cell=document.createElement('div');
      cell.className='hm-cell';cell.dataset.l=level;cell.dataset.d=ds;cell.dataset.c=count;
      // Hide cells outside the current year so the grid starts at Jan 1
      if(ds<yearStartStr)cell.style.visibility='hidden';
      if(ds===todayStr)cell.classList.add('hm-today');
      grid.appendChild(cell);
      if(ds>=yearStartStr&&ds<=todayStr){
        total+=count;
        if(count>maxDay)maxDay=count;
        if(count>0){curStreak++;if(curStreak>streak)streak=curStreak;}else{curStreak=0;}
      }
      if(d.getDay()===0){
        const m=d.getMonth();
        if(m!==lastMonth){monthPositions.push({col:colIdx,label:d.toLocaleString('en',{month:'short'})});lastMonth=m;}
        colIdx++;
      }
      d.setDate(d.getDate()+1);
    }
    const totalCols=colIdx;

    // Month labels: skip any with < 2 columns of territory so narrow wedges
    // (like a DEC that only occupies one week before JAN) don't overflow into
    // the next label. Keep absolute column positions so alignment stays true.
    const MIN_SPAN=2,COL_PX=12;
    const labels=monthPositions.map((m,i)=>{
      const next=monthPositions[i+1];
      const endCol=next?next.col:totalCols;
      return {...m,span:endCol-m.col,endCol};
    }).filter(l=>l.span>=MIN_SPAN);
    let cursor=0;
    monthsEl.innerHTML=labels.map(l=>{
      const leftGap=(l.col-cursor)*COL_PX;
      cursor=l.endCol;
      return `<div class="hm-month" style="width:${l.span*COL_PX}px;margin-left:${leftGap}px">${l.label}</div>`;
    }).join('');

    totalEl.innerHTML=`<span>${total.toLocaleString()}</span> contributions in ${year}`;
    statsEl.innerHTML=`
      <div class="hm-stat"><div class="v">${streak}</div><div class="k">LONGEST STREAK · DAYS</div></div>
      <div class="hm-stat"><div class="v">${maxDay}</div><div class="k">BEST DAY</div></div>
      <div class="hm-stat"><div class="v"><a href="https://github.com/Harshxth" target="_blank" style="color:inherit;text-decoration:none">@Harshxth →</a></div><div class="k">GITHUB PROFILE</div></div>
    `;

    grid.addEventListener('mouseover',e=>{
      const c=e.target.closest('.hm-cell');if(!c||!c.dataset.d)return;
      const date=new Date(c.dataset.d+'T00:00:00');const df=date.toLocaleString('en',{month:'short',day:'numeric',year:'numeric'});
      const n=parseInt(c.dataset.c,10);
      tip.innerHTML=`<strong>${n} contribution${n===1?'':'s'}</strong> · ${df}`;
      tip.classList.add('on');
    });
    grid.addEventListener('mousemove',e=>{
      tip.style.left=(e.clientX+14)+'px';
      tip.style.top=(e.clientY+14)+'px';
    });
    grid.addEventListener('mouseleave',()=>tip.classList.remove('on'));
  }catch(err){
    grid.classList.remove('hm-skeleton');
    grid.parentElement.innerHTML=`<div class="hm-err">Couldn't load live contributions. <a href="https://github.com/Harshxth" target="_blank">View on GitHub →</a></div>`;
    totalEl.textContent='GitHub activity';
  }
}

// ── REVEAL ────────────────────────────────────────────────────────────────────
function initReveal(){
  // General reveal: slide up/down bidirectionally
  const ob=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){e.target.classList.add('in');}
      else{e.target.classList.remove('in');}
    });
  },{threshold:.1});
  document.querySelectorAll('.reveal').forEach(el=>ob.observe(el));

  // Experience items: slide in from left, back out on scroll up
  const expOb=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){e.target.classList.add('in');}
      else{e.target.classList.remove('in');}
    });
  },{threshold:.15});
  document.querySelectorAll('.exp-item').forEach(el=>expOb.observe(el));

  // Project cards: cascade pipeline steps when card enters view
  const projOb=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      const steps=e.target.querySelectorAll('.flow-step,.flow-arrow,.flow-chevron');
      if(e.isIntersecting){
        steps.forEach((s,i)=>setTimeout(()=>s.classList.add('pipe-in'),i*80+200));
      } else {
        steps.forEach(s=>s.classList.remove('pipe-in'));
      }
    });
  },{threshold:.2});
  document.querySelectorAll('.proj-card').forEach(el=>projOb.observe(el));
}

// ── CASE STUDY (CUTR · micromobility) ────────────────────────────────────────
// Full-screen overlay opened from a .sub-row on the experience card. The banner
// runs a canvas detection scene (sketched riders + tracking boxes + scanline
// that locks onto the title). Animation starts on open, stops on close, and is
// theme-aware so the ink flips with light/dark.
function initCaseStudy(){
  const reg={};
  window.openCaseStudy=function(id,opener){const r=reg[id];if(r)r.open(opener);};
  document.addEventListener('keydown',e=>{
    if(e.key!=='Escape')return;
    Object.keys(reg).forEach(k=>{if(reg[k].isOpen())reg[k].close();});
  });
  setupOverlay('cs-overlay','cs-shell','cs-close',makeDetector);
  setupOverlay('cs-isro','cs2-shell','cs2-close',makeSatScene);
  function setupOverlay(oid,sid,cid,factory){
    const cs=document.getElementById(oid);if(!cs)return;
    const shell=document.getElementById(sid),closeBtn=document.getElementById(cid);
    let scene=null,lastOpener=null;
    function open(opener){
      lastOpener=opener||null;
      cs.classList.add('on');cs.setAttribute('aria-hidden','false');
      document.body.style.overflow='hidden';
      shell.scrollTop=0;
      setTimeout(()=>{if(!scene)scene=factory(cs);scene.start();},120);
      closeBtn.focus();
    }
    function close(){
      cs.classList.remove('on');cs.setAttribute('aria-hidden','true');
      document.body.style.overflow='';
      if(scene)scene.stop();
      if(lastOpener&&lastOpener.focus)lastOpener.focus();
    }
    closeBtn.addEventListener('click',close);
    reg[oid]={open:open,close:close,isOpen:function(){return cs.classList.contains('on');}};
  }

  function makeDetector(cs){
    const TAU=Math.PI*2;
    const banner=document.getElementById('cs-banner');
    const canvas=document.getElementById('cs-scene');
    const ctx=canvas.getContext('2d');
    const titleEl=document.getElementById('cs-title');
    const fpsEl=document.getElementById('cs-hud-fps');
    const latEl=document.getElementById('cs-hud-lat');
    const statusEl=document.getElementById('cs-hud-status');

    let INK='17,24,39';
    function syncTheme(){INK=document.documentElement.getAttribute('data-theme')==='light'?'17,24,39':'229,231,235';}
    syncTheme();
    const ink=a=>'rgba('+INK+','+a+')';
    const acc=a=>'rgba(45,91,255,'+a+')';
    const rnd=(a,b)=>a+Math.random()*(b-a);
    const easeIO=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;

    const mq=window.matchMedia('(prefers-reduced-motion: reduce)');
    let reduced=mq.matches;
    let W=0,H=0,placed=false;
    const headRect={x:0,y:0,w:0,h:0,cx:0};
    const road={top:0,bot:0,mid:0,laneFar:0,laneNear:0};
    const DIMS={bicycle:{w:80,h:88},ebike:{w:82,h:90},escooter:{w:58,h:78},car:{w:98,h:52}};
    const objects=[
      {id:'04',type:'car',label:'car',conf:.97,lane:'far',dir:-1,speed:150,scale:.66,fx:.22,x:0,wheelA:.4,box:null,dispConf:.97},
      {id:'07',type:'escooter',label:'e-scooter',conf:.89,lane:'far',dir:-1,speed:84,scale:.66,fx:.68,x:0,wheelA:1.1,box:null,dispConf:.89},
      {id:'02',type:'ebike',label:'e-bike',conf:.91,lane:'near',dir:1,speed:104,scale:.92,fx:.40,x:0,wheelA:2.2,box:null,dispConf:.91},
      {id:'01',type:'bicycle',label:'bicycle',conf:.94,lane:'near',dir:1,speed:64,scale:.92,fx:.80,x:0,wheelA:3.6,box:null,dispConf:.94}
    ];
    const laneY=o=>o.lane==='far'?road.laneFar:road.laneNear;

    function measureHead(){
      const hb=banner.getBoundingClientRect(),r=titleEl.getBoundingClientRect();
      headRect.x=r.left-hb.left;headRect.y=r.top-hb.top;
      headRect.w=r.width;headRect.h=r.height;
      headRect.cx=headRect.x+headRect.w/2;
    }
    function resize(){
      W=banner.clientWidth;H=banner.clientHeight;
      const dpr=Math.min(window.devicePixelRatio||1,2);
      canvas.width=Math.round(W*dpr);canvas.height=Math.round(H*dpr);
      canvas.style.width=W+'px';canvas.style.height=H+'px';
      ctx.setTransform(dpr,0,0,dpr,0,0);
      road.top=H*.60;road.bot=Math.min(H*.94,H-16);
      const bh=road.bot-road.top;
      road.mid=road.top+bh*.5;road.laneFar=road.top+bh*.34;road.laneNear=road.top+bh*.82;
      measureHead();
      if(!placed){objects.forEach(o=>o.x=o.fx*W);placed=true;}
      if(reduced)renderStatic();
    }

    const lockJ={x:0,y:0};
    function detTick(jitter){
      const j=jitter?1:0;
      objects.forEach(o=>{
        const d=DIMS[o.type],s=o.scale,bw=d.w*s+8,bh=d.h*s+6;
        o.box={x:o.x-bw/2+j*rnd(-2.5,2.5),y:laneY(o)-bh-2+j*rnd(-2,2),w:bw+j*rnd(-3,3),h:bh+2+j*rnd(-2,2)};
        o.dispConf=jitter?Math.min(.99,Math.max(.5,o.conf+rnd(-.012,.012))):o.conf;
      });
      lockJ.x=j*rnd(-1.6,1.6);lockJ.y=j*rnd(-1.6,1.6);
    }

    function line(x1,y1,x2,y2){ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();}
    function polyline(pts){ctx.beginPath();ctx.moveTo(pts[0][0],pts[0][1]);for(let i=1;i<pts.length;i++)ctx.lineTo(pts[i][0],pts[i][1]);ctx.stroke();}
    function corners(x,y,w,h,L){
      ctx.beginPath();
      ctx.moveTo(x,y+L);ctx.lineTo(x,y);ctx.lineTo(x+L,y);
      ctx.moveTo(x+w-L,y);ctx.lineTo(x+w,y);ctx.lineTo(x+w,y+L);
      ctx.moveTo(x+w,y+h-L);ctx.lineTo(x+w,y+h);ctx.lineTo(x+w-L,y+h);
      ctx.moveTo(x+L,y+h);ctx.lineTo(x,y+h);ctx.lineTo(x,y+h-L);
      ctx.stroke();
    }
    function drawWheel(x,y,r,a){
      ctx.beginPath();ctx.arc(x,y,r,0,TAU);ctx.stroke();
      for(let i=0;i<3;i++){
        const t=a+i*TAU/3;
        ctx.beginPath();
        ctx.moveTo(x+Math.cos(t)*r*.15,y+Math.sin(t)*r*.15);
        ctx.lineTo(x+Math.cos(t)*r*.85,y+Math.sin(t)*r*.85);
        ctx.stroke();
      }
    }
    function drawBicycleBody(o,electric){
      const a=o.wheelA;
      ctx.lineWidth=2;
      drawWheel(-23,-15,15,a);drawWheel(23,-15,15,a);
      line(-23,-15,-9,-45);line(-23,-15,-1,-21);line(-1,-21,-9,-45);
      line(-9,-45,15,-44);line(15,-44,-1,-21);line(15,-44,23,-15);
      line(-14,-47,-4,-47);line(15,-44,12,-52);line(9,-52,16,-52);
      if(electric){ctx.save();ctx.strokeStyle=acc(.9);ctx.lineWidth=6;line(11,-40,2,-25);ctx.restore();}
      ctx.beginPath();ctx.arc(-1,-21,3.2,0,TAU);ctx.stroke();
      const p=a*.55,px=Math.cos(p)*7,py=Math.sin(p)*7;
      line(-1+px,-21+py,-1-px,-21-py);
      ctx.beginPath();ctx.arc(6.5,-76,5.6,0,TAU);ctx.fill();
      line(-8,-46,3,-67);line(3,-67,12,-52);
      polyline([[-8,-46],[1,-33],[-1+px*.6,-21+py*.6]]);
      ctx.save();ctx.globalAlpha=.5;
      polyline([[-8,-46],[-4,-32],[-1-px*.6,-21-py*.6]]);
      ctx.restore();
    }
    function drawScooterBody(o){
      const a=o.wheelA*1.6;
      ctx.lineWidth=2;
      drawWheel(-15,-6.5,6.5,a);drawWheel(17,-6.5,6.5,a);
      ctx.save();ctx.lineWidth=4;line(-13,-13,9,-13);ctx.restore();
      line(15,-11,24,-55);line(19,-56,29,-56);
      ctx.beginPath();ctx.arc(8,-67,5.4,0,TAU);ctx.fill();
      line(-2,-39,6,-59);line(6,-59,22,-54);
      polyline([[-2,-39],[-7,-27],[-7,-16]]);
      polyline([[-2,-39],[1,-27],[0,-16]]);
    }
    function drawCarBody(o){
      ctx.lineWidth=2;
      drawWheel(-29,-9.5,9.5,o.wheelA*.8);drawWheel(29,-9.5,9.5,o.wheelA*.8);
      ctx.beginPath();
      if(ctx.roundRect)ctx.roundRect(-46,-30,92,20,7);else ctx.rect(-46,-30,92,20);
      ctx.stroke();
      polyline([[-24,-30],[-16,-45],[15,-45],[25,-30]]);
      line(0,-44,0,-31);
    }
    function drawSprite(o){
      const s=o.scale,far=o.lane==='far';
      ctx.save();
      ctx.translate(o.x,laneY(o));
      ctx.fillStyle=ink(.06);
      ctx.beginPath();ctx.ellipse(0,0,DIMS[o.type].w*.42*s,4*s,0,0,TAU);ctx.fill();
      ctx.scale(o.dir*s,s);
      ctx.strokeStyle=ink(far?.6:.85);ctx.fillStyle=ink(far?.6:.85);
      ctx.lineCap='round';ctx.lineJoin='round';
      if(o.type==='bicycle')drawBicycleBody(o,false);
      else if(o.type==='ebike')drawBicycleBody(o,true);
      else if(o.type==='escooter')drawScooterBody(o);
      else drawCarBody(o);
      ctx.restore();
    }
    function drawDetBox(o,emph){
      const b=o.box;if(!b)return;
      let k=(o.lane==='far'?.72:.95)*(emph?1.25:1);if(k>1)k=1;
      ctx.lineWidth=1;ctx.strokeStyle=acc(.3*k);ctx.strokeRect(b.x,b.y,b.w,b.h);
      ctx.lineWidth=1.8;ctx.strokeStyle=acc(.95*k);
      corners(b.x,b.y,b.w,b.h,Math.min(10,b.w*.25));
      ctx.font='500 10px "JetBrains Mono", ui-monospace, monospace';
      const text=o.label+' '+o.dispConf.toFixed(2);
      const tw=ctx.measureText(text).width,chipH=15;
      let chipY=b.y-chipH-3;
      if(chipY<road.top+2)chipY=b.y+3;
      ctx.fillStyle=acc(Math.min(1,.96*k+.04));
      ctx.fillRect(b.x-.5,chipY,tw+10,chipH);
      ctx.fillStyle='rgba(255,255,255,'+Math.min(1,k+.15)+')';
      ctx.textBaseline='middle';
      ctx.fillText(text,b.x+4.5,chipY+chipH/2+.5);
      ctx.font='500 9px "JetBrains Mono", ui-monospace, monospace';
      ctx.fillStyle=ink(.4*k);
      ctx.textAlign='right';
      ctx.fillText('id '+o.id,b.x+b.w,b.y+b.h+11);
      ctx.textAlign='left';ctx.textBaseline='alphabetic';
    }
    function drawLock(alpha,jx,jy,snapK){
      if(alpha<=0||headRect.w===0)return;
      const padX=18,padY=14,ex=(1-snapK)*14;
      const x=headRect.x-padX-ex+jx,y=headRect.y-padY-ex+jy;
      const w=headRect.w+(padX+ex)*2,h=headRect.h+(padY+ex)*2;
      ctx.fillStyle=acc(.035*alpha);ctx.fillRect(x,y,w,h);
      ctx.lineWidth=1;ctx.strokeStyle=acc(.4*alpha);ctx.strokeRect(x,y,w,h);
      ctx.lineWidth=2.2;ctx.strokeStyle=acc(alpha);corners(x,y,w,h,18);
      ctx.lineWidth=1.5;ctx.strokeStyle=acc(.6*alpha);
      line(x+w/2-4,y,x+w/2+4,y);line(x+w/2-4,y+h,x+w/2+4,y+h);
      line(x,y+h/2-4,x,y+h/2+4);line(x+w,y+h/2-4,x+w,y+h/2+4);
      ctx.font='500 11px "JetBrains Mono", ui-monospace, monospace';
      const text='[ micromobility-study 1.00 ]';
      const tw=ctx.measureText(text).width,chipH=20;
      let chipY=y-chipH-8;
      if(chipY<6)chipY=y+6;
      ctx.fillStyle=acc(alpha);ctx.fillRect(x-1,chipY,tw+14,chipH);
      ctx.fillStyle='rgba(255,255,255,'+alpha+')';
      ctx.textBaseline='middle';
      ctx.fillText(text,x+6,chipY+chipH/2+.5);
      ctx.textBaseline='alphabetic';
    }
    function drawRoad(){
      const bh=road.bot-road.top;
      ctx.fillStyle=ink(.03);ctx.fillRect(0,road.top,W,bh);
      ctx.strokeStyle=ink(.28);ctx.lineWidth=1;
      line(0,road.top+.5,W,road.top+.5);line(0,road.bot+.5,W,road.bot+.5);
      ctx.save();ctx.strokeStyle=ink(.22);ctx.setLineDash([14,18]);
      line(0,road.mid+.5,W,road.mid+.5);ctx.restore();
      ctx.strokeStyle=ink(.16);
      for(let x=0;x<=W;x+=40){
        const isLong=x%200===0;
        line(x+.5,road.bot,x+.5,road.bot-(isLong?9:4));
      }
      ctx.fillStyle=ink(.32);
      ctx.font='500 9px "JetBrains Mono", ui-monospace, monospace';
      ctx.fillText('CAM 02 · N FRANKLIN ST',14,road.top+14);
      ctx.textAlign='right';
      ctx.fillText('GSD 0.04 m/px',W-14,road.top+14);
      ctx.textAlign='left';
    }
    function drawScan(sx){
      const g=ctx.createLinearGradient(sx-110,0,sx,0);
      g.addColorStop(0,acc(0));g.addColorStop(1,acc(.07));
      ctx.fillStyle=g;ctx.fillRect(sx-110,0,110,H);
      ctx.fillStyle=acc(.55);ctx.fillRect(sx-.75,0,1.5,H);
      ctx.fillStyle=acc(.8);
      ctx.font='500 9px "JetBrains Mono", ui-monospace, monospace';
      ctx.fillText('SCAN',Math.min(sx+6,W-42),22);
    }

    let t0=0,lockT0=-1,lastLockCycle=-1;
    const CYCLE=9000,SWEEP=2100;
    function render(now,animated){
      ctx.clearRect(0,0,W,H);
      drawRoad();
      objects.forEach(drawSprite);
      let sweepX=-1,lockAlpha=1,snapK=1,jx=0,jy=0;
      if(animated){
        const ct=(now-t0)%CYCLE,ci=Math.floor((now-t0)/CYCLE);
        if(ct<SWEEP){
          sweepX=easeIO(ct/SWEEP)*(W+240)-120;
          if(ci!==lastLockCycle&&sweepX>=headRect.cx){lockT0=now;lastLockCycle=ci;}
        }
        lockAlpha=0;
        if(lockT0>0){
          const lt=now-lockT0;
          if(lt<=180){lockAlpha=lt/180;snapK=easeIO(lt/180);}
          else if(lt<=3400){lockAlpha=1;}
          else if(lt<=3850){lockAlpha=1-(lt-3400)/450;}
        }
        jx=lockJ.x;jy=lockJ.y;
      }
      objects.forEach(o=>{
        const emph=sweepX>=0&&o.box&&sweepX>o.box.x&&sweepX<o.box.x+o.box.w;
        drawDetBox(o,emph);
      });
      if(sweepX>=0)drawScan(sweepX);
      drawLock(lockAlpha,jx,jy,snapK);
    }
    function renderStatic(){
      objects.forEach(o=>o.x=o.fx*W);
      detTick(false);lockJ.x=0;lockJ.y=0;
      render(0,false);
      drawLock(1,0,0,1);
    }

    let raf=0,last=0,lastDet=0,lastHud=0,fpsEma=60,running=false;
    function frame(now){
      if(!running)return;
      raf=requestAnimationFrame(frame);
      if(W===0&&banner.clientWidth>0)resize();
      let dt=(now-last)/1000;last=now;
      if(dt>.05)dt=.05;
      if(dt>0)fpsEma+=(1/dt-fpsEma)*.06;
      const m=150;
      objects.forEach(o=>{
        o.x+=o.speed*o.dir*dt;
        o.wheelA+=(o.speed*dt)/(14*o.scale);
        if(o.dir>0&&o.x>W+m)o.x=-m;
        if(o.dir<0&&o.x<-m)o.x=W+m;
      });
      if(now-lastDet>95){detTick(true);lastDet=now;}
      render(now,true);
      if(now-lastHud>300){
        fpsEl.textContent=String(Math.max(1,Math.min(240,Math.round(fpsEma))));
        latEl.textContent=(6.8+Math.sin(now*.0011)*1.2+Math.sin(now*.00037)*.8).toFixed(1)+' ms';
        lastHud=now;
      }
    }
    function start(){
      syncTheme();
      resize();
      if(document.fonts&&document.fonts.ready)document.fonts.ready.then(measureHead);
      if(reduced){
        statusEl.textContent='STATIC';fpsEl.textContent='--';latEl.textContent='8.2 ms';
        renderStatic();return;
      }
      if(running)return;
      running=true;
      statusEl.textContent='LIVE';
      last=performance.now();t0=last;lockT0=-1;lastLockCycle=-1;
      raf=requestAnimationFrame(frame);
    }
    function stop(){
      running=false;
      if(raf)cancelAnimationFrame(raf);
      raf=0;
    }
    if(mq.addEventListener)mq.addEventListener('change',e=>{reduced=e.matches;stop();start();});
    window.addEventListener('hg:theme',()=>{syncTheme();if(cs.classList.contains('on')&&reduced)renderStatic();});
    window.addEventListener('resize',()=>{if(cs.classList.contains('on'))resize();});
    return {start,stop};
  }

  // ISRO scene: a satellite sweeps the swath and the terrain behind its beam
  // re-renders at 4x detail (the super-resolution pass, literally).
  function makeSatScene(cs){
    const TAU=Math.PI*2;
    const banner=document.getElementById('cs2-banner');
    const canvas=document.getElementById('cs2-scene');
    const ctx=canvas.getContext('2d');
    const titleEl=document.getElementById('cs2-title');
    const fpsEl=document.getElementById('cs2-hud-fps');
    const statusEl=document.getElementById('cs2-hud-status');

    let INK='17,24,39';
    function syncTheme(){INK=document.documentElement.getAttribute('data-theme')==='light'?'17,24,39':'229,231,235';}
    syncTheme();
    const ink=a=>'rgba('+INK+','+a+')';
    const acc=a=>'rgba(255,103,31,'+a+')';
    const rnd=(a,b)=>a+Math.random()*(b-a);
    const easeIO=t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;

    const mq=window.matchMedia('(prefers-reduced-motion: reduce)');
    let reduced=mq.matches;
    let W=0,H=0;
    const headRect={x:0,y:0,w:0,h:0,cx:0};
    const band={top:0,bot:0,h:0};
    let scene=null,cols=[],lrC=null,srC=null;

    function genTerrain(){
      // Normalized landscape spec (fractions of W / band.h) so resize and
      // theme repaints redraw the same scene deterministically.
      const parcels=[];
      let u=0;
      while(u<1){
        const pw=rnd(.06,.16);
        let v=0;
        while(v<1){
          const ph=Math.min(rnd(.20,.48),1-v);
          parcels.push({u:u,v:v,w:pw,h:ph,a:rnd(.03,.11)});
          v+=ph;
        }
        u+=pw;
      }
      scene={
        parcels:parcels,
        river:{v:rnd(.25,.7),a1:rnd(.10,.16),a2:rnd(.07,.12),f1:rnd(.009,.014),f2:rnd(.003,.005),p1:rnd(0,6)},
        roadV:rnd(.15,.85),roadDrift:rnd(-.12,.12),
        roadU:rnd(.2,.8),roadLean:rnd(-.05,.05),
        bld:Array.from({length:14},()=>({u:rnd(.02,.96),o:rnd(-.16,.16),w:rnd(3,6),h:rnd(3,6)}))
      };
    }
    function paintTerrain(){
      if(!W||!band.h||!scene)return;
      const bh=band.h;
      const BGC=getComputedStyle(banner).backgroundColor||'#FAFAFB';
      srC=document.createElement('canvas');srC.width=W;srC.height=bh;
      lrC=document.createElement('canvas');lrC.width=W;lrC.height=bh;
      const sc=srC.getContext('2d');
      sc.fillStyle=BGC;sc.fillRect(0,0,W,bh);
      sc.fillStyle=ink(.04);sc.fillRect(0,0,W,bh);
      scene.parcels.forEach(p=>{
        sc.fillStyle='rgba('+INK+','+p.a.toFixed(3)+')';
        sc.fillRect(p.u*W,p.v*bh,p.w*W,p.h*bh);
        sc.strokeStyle=ink(.13);sc.lineWidth=1;
        sc.strokeRect(p.u*W+.5,p.v*bh+.5,p.w*W,p.h*bh);
      });
      const rv=scene.river,ry0=rv.v*bh;
      const riverY=x=>ry0+Math.sin(x*rv.f1+rv.p1)*rv.a1*bh+Math.sin(x*rv.f2)*rv.a2*bh;
      sc.lineCap='round';
      sc.strokeStyle=ink(.20);sc.lineWidth=Math.max(9,bh*.07);
      sc.beginPath();sc.moveTo(-10,riverY(-10));
      for(let x=0;x<=W+20;x+=36)sc.lineTo(x,riverY(x));
      sc.stroke();
      sc.strokeStyle=ink(.34);sc.lineWidth=1.2;
      [-1,1].forEach(s=>{
        const off=s*Math.max(6,bh*.045);
        sc.beginPath();sc.moveTo(-10,riverY(-10)+off);
        for(let x=0;x<=W+20;x+=36)sc.lineTo(x,riverY(x)+off);
        sc.stroke();
      });
      const roadY=u=>(scene.roadV+scene.roadDrift*u)*bh;
      sc.strokeStyle=ink(.42);sc.lineWidth=2.2;
      sc.beginPath();sc.moveTo(0,roadY(0));sc.lineTo(W,roadY(1));sc.stroke();
      const rx=scene.roadU*W;
      sc.beginPath();sc.moveTo(rx,0);sc.lineTo(rx+scene.roadLean*W,bh);sc.stroke();
      sc.fillStyle=ink(.55);
      scene.bld.forEach(b=>{
        const by=roadY(b.u)+b.o*bh;
        if(by>4&&by<bh-8)sc.fillRect(b.u*W,by,b.w,b.h);
      });
      // LR side: mosaic the scene back down to "10 m" blocks
      const S=Math.max(16,Math.round(bh/7));
      const tmp=document.createElement('canvas');
      tmp.width=Math.max(2,Math.ceil(W/S));tmp.height=Math.max(2,Math.ceil(bh/S));
      tmp.getContext('2d').drawImage(srC,0,0,tmp.width,tmp.height);
      const lc=lrC.getContext('2d');
      lc.imageSmoothingEnabled=false;
      lc.fillStyle=BGC;lc.fillRect(0,0,W,bh);
      lc.drawImage(tmp,0,0,W,bh);
      lc.strokeStyle=ink(.06);lc.lineWidth=1;
      for(let x=0;x<=W;x+=S){lc.beginPath();lc.moveTo(x+.5,0);lc.lineTo(x+.5,bh);lc.stroke();}
      for(let y=0;y<=bh;y+=S){lc.beginPath();lc.moveTo(0,y+.5);lc.lineTo(W,y+.5);lc.stroke();}
    }
    function measureHead(){
      const hb=banner.getBoundingClientRect(),r=titleEl.getBoundingClientRect();
      headRect.x=r.left-hb.left;headRect.y=r.top-hb.top;
      headRect.w=r.width;headRect.h=r.height;
      headRect.cx=headRect.x+headRect.w/2;
    }
    function resize(){
      W=banner.clientWidth;H=banner.clientHeight;
      const dpr=Math.min(window.devicePixelRatio||1,2);
      canvas.width=Math.round(W*dpr);canvas.height=Math.round(H*dpr);
      canvas.style.width=W+'px';canvas.style.height=H+'px';
      ctx.setTransform(dpr,0,0,dpr,0,0);
      const bb=banner.querySelector('.bb');
      const bbBottom=bb?(bb.getBoundingClientRect().bottom-banner.getBoundingClientRect().top):H*.5;
      band.bot=Math.min(H*.94,H-16);
      band.top=Math.max(H*.52,Math.min(band.bot-84,bbBottom+18));
      band.h=band.bot-band.top;
      cols=[];
      const step=Math.max(130,(W-160)/6);
      for(let x=90;x<=W-60;x+=step)cols.push(x);
      measureHead();
      paintTerrain();
      if(reduced)renderStatic();
    }

    function line(x1,y1,x2,y2){ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();}
    function corners(x,y,w,h,L){
      ctx.beginPath();
      ctx.moveTo(x,y+L);ctx.lineTo(x,y);ctx.lineTo(x+L,y);
      ctx.moveTo(x+w-L,y);ctx.lineTo(x+w,y);ctx.lineTo(x+w,y+L);
      ctx.moveTo(x+w,y+h-L);ctx.lineTo(x+w,y+h);ctx.lineTo(x+w-L,y+h);
      ctx.moveTo(x+L,y+h);ctx.lineTo(x,y+h);ctx.lineTo(x,y+h-L);
      ctx.stroke();
    }
    function drawSat(x,y){
      ctx.save();ctx.translate(x,y);
      ctx.strokeStyle=ink(.85);ctx.fillStyle=ink(.85);
      ctx.lineCap='round';ctx.lineJoin='round';ctx.lineWidth=2;
      ctx.strokeRect(-13,-9,26,18);
      ctx.strokeRect(-49,-7,30,14);
      line(-39,-7,-39,7);line(-29,-7,-29,7);
      ctx.strokeRect(19,-7,30,14);
      line(29,-7,29,7);line(39,-7,39,7);
      line(0,-9,0,-16);
      ctx.beginPath();ctx.arc(0,-19,3,0,TAU);ctx.stroke();
      line(0,9,0,14);
      ctx.restore();
    }
    function drawBeam(x,satY){
      const g=ctx.createLinearGradient(0,satY+14,0,band.top);
      g.addColorStop(0,acc(.18));g.addColorStop(1,acc(.04));
      ctx.fillStyle=g;
      ctx.beginPath();
      ctx.moveTo(x-7,satY+14);ctx.lineTo(x+7,satY+14);
      ctx.lineTo(x+44,band.top);ctx.lineTo(x-44,band.top);
      ctx.closePath();ctx.fill();
      ctx.fillStyle=acc(.5);ctx.fillRect(x-.75,satY+14,1.5,band.top-satY-14);
      ctx.strokeStyle=acc(.45);ctx.lineWidth=1;
      ctx.beginPath();ctx.ellipse(x,band.top+1,44,4.5,0,0,TAU);ctx.stroke();
      ctx.fillStyle=acc(.25);
      ctx.fillRect(x-.5,0,1,H);
    }
    function drawBandChrome(){
      ctx.strokeStyle=ink(.28);ctx.lineWidth=1;
      line(0,band.top+.5,W,band.top+.5);line(0,band.bot+.5,W,band.bot+.5);
      ctx.strokeStyle=ink(.16);
      for(let x=0;x<=W;x+=40){
        const isLong=x%200===0;
        line(x+.5,band.bot,x+.5,band.bot-(isLong?9:4));
      }
      ctx.fillStyle=ink(.32);
      ctx.font='500 9px "JetBrains Mono", ui-monospace, monospace';
      ctx.fillText('SWATH 042 · LISS-IV SIM',14,band.top+14);
      ctx.textAlign='right';
      ctx.fillText('GSD 10 m → 2.5 m',W-14,band.top+14);
      ctx.textAlign='left';
    }
    let chips=[],chipIdx=0;
    function spawnChips(beamX,now){
      while(chipIdx<cols.length&&cols[chipIdx]<=beamX-24){
        const cx=cols[chipIdx];
        chips.push({x:cx,y:band.top+14+rnd(4,band.h*.45),
          t:chipIdx%2?('SSIM '+(0.83+rnd(0,.05)).toFixed(2)):('PSNR '+(30.4+rnd(0,1.0)).toFixed(1)+' dB'),
          born:now});
        chipIdx++;
      }
    }
    function drawChips(now,staticAlpha){
      ctx.font='500 9.5px "JetBrains Mono", ui-monospace, monospace';
      chips=chips.filter(c=>{
        let a;
        if(staticAlpha!=null)a=staticAlpha;
        else{
          const age=now-c.born;
          if(age>1750)return false;
          a=age<180?age/180:age>1400?Math.max(0,1-(age-1400)/350):1;
        }
        const tw=ctx.measureText(c.t).width,chH=15;
        ctx.fillStyle=acc(.95*a);
        ctx.fillRect(c.x-.5,c.y,tw+10,chH);
        ctx.fillStyle='rgba(255,255,255,'+Math.min(1,a+.1)+')';
        ctx.textBaseline='middle';
        ctx.fillText(c.t,c.x+4.5,c.y+chH/2+.5);
        ctx.textBaseline='alphabetic';
        ctx.strokeStyle=acc(.45*a);ctx.lineWidth=1;
        line(c.x+.5,c.y+chH,c.x+.5,c.y+chH+7);
        return true;
      });
    }
    function drawLock(alpha,snapK){
      if(alpha<=0||headRect.w===0)return;
      const padX=18,padY=14,ex=(1-snapK)*14;
      const x=headRect.x-padX-ex,y=headRect.y-padY-ex;
      const w=headRect.w+(padX+ex)*2,h=headRect.h+(padY+ex)*2;
      ctx.fillStyle=acc(.035*alpha);ctx.fillRect(x,y,w,h);
      ctx.lineWidth=1;ctx.strokeStyle=acc(.4*alpha);ctx.strokeRect(x,y,w,h);
      ctx.lineWidth=2.2;ctx.strokeStyle=acc(alpha);corners(x,y,w,h,18);
      ctx.font='500 11px "JetBrains Mono", ui-monospace, monospace';
      const text='[ srgan-x4 · 31 dB ]';
      const tw=ctx.measureText(text).width,chipH=20;
      let chipY=y-chipH-8;
      if(chipY<6)chipY=y+6;
      ctx.fillStyle=acc(alpha);ctx.fillRect(x-1,chipY,tw+14,chipH);
      ctx.fillStyle='rgba(255,255,255,'+alpha+')';
      ctx.textBaseline='middle';
      ctx.fillText(text,x+6,chipY+chipH/2+.5);
      ctx.textBaseline='alphabetic';
    }
    function compositeTerrain(beamX){
      if(!lrC||!srC)return;
      const bx=Math.max(0,Math.min(W,beamX));
      if(bx>0){
        ctx.save();ctx.beginPath();ctx.rect(0,band.top,bx,band.h);ctx.clip();
        ctx.drawImage(srC,0,band.top);ctx.restore();
      }
      if(bx<W){
        ctx.save();ctx.beginPath();ctx.rect(bx,band.top,W-bx,band.h);ctx.clip();
        ctx.drawImage(lrC,0,band.top);ctx.restore();
      }
    }

    const SWEEP=6500,HOLD=2600,CYC=SWEEP+HOLD;
    let t0=0,curCi=0,lockT0=-1,lockCy=-1;
    function render(now){
      ctx.clearRect(0,0,W,H);
      const ct=(now-t0)%CYC,ci=Math.floor((now-t0)/CYC);
      if(ci!==curCi){curCi=ci;genTerrain();paintTerrain();chips=[];chipIdx=0;}
      let beamX;
      const sweeping=ct<SWEEP;
      if(sweeping){
        beamX=easeIO(ct/SWEEP)*(W+140)-70;
        if(ci!==lockCy&&beamX>=headRect.cx){lockT0=now;lockCy=ci;}
        spawnChips(beamX,now);
      }else beamX=W+70;
      compositeTerrain(beamX);
      drawBandChrome();
      drawChips(now,null);
      if(sweeping){
        const satY=band.top-50+Math.sin(now*.0021)*3;
        if(beamX>-50&&beamX<W+50){drawBeam(beamX,satY);drawSat(beamX,satY);}
      }
      let lockAlpha=0,snapK=1;
      if(lockT0>0){
        const lt=now-lockT0;
        if(lt<=180){lockAlpha=lt/180;snapK=easeIO(lt/180);}
        else if(lt<=3400){lockAlpha=1;}
        else if(lt<=3850){lockAlpha=1-(lt-3400)/450;}
      }
      drawLock(lockAlpha,snapK);
    }
    function renderStatic(){
      ctx.clearRect(0,0,W,H);
      compositeTerrain(W);
      drawBandChrome();
      chips=[
        {x:W*.18,y:band.top+22,t:'PSNR 31.0 dB',born:0},
        {x:W*.46,y:band.top+40,t:'SSIM 0.86',born:0},
        {x:W*.72,y:band.top+26,t:'PSNR 30.8 dB',born:0}
      ];
      drawChips(0,.92);
      const satY=band.top-50;
      drawBeam(W*.58,satY);drawSat(W*.58,satY);
      drawLock(1,1);
    }

    let raf=0,last=0,lastHud=0,fpsEma=60,running=false;
    function frame(now){
      if(!running)return;
      raf=requestAnimationFrame(frame);
      if(W===0&&banner.clientWidth>0){resize();t0=now;}
      const dt=(now-last)/1000;last=now;
      if(dt>0&&dt<.05)fpsEma+=(1/dt-fpsEma)*.06;
      render(now);
      if(now-lastHud>300){
        fpsEl.textContent=String(Math.max(1,Math.min(240,Math.round(fpsEma))));
        lastHud=now;
      }
    }
    function start(){
      syncTheme();
      genTerrain();
      resize();
      if(document.fonts&&document.fonts.ready)document.fonts.ready.then(measureHead);
      if(reduced){
        statusEl.textContent='STATIC';fpsEl.textContent='--';
        renderStatic();return;
      }
      if(running)return;
      running=true;
      statusEl.textContent='LIVE';
      last=performance.now();t0=last;curCi=0;lockT0=-1;lockCy=-1;chips=[];chipIdx=0;
      raf=requestAnimationFrame(frame);
    }
    function stop(){
      running=false;
      if(raf)cancelAnimationFrame(raf);
      raf=0;
    }
    if(mq.addEventListener)mq.addEventListener('change',e=>{reduced=e.matches;stop();start();});
    window.addEventListener('hg:theme',()=>{syncTheme();paintTerrain();if(cs.classList.contains('on')&&reduced)renderStatic();});
    window.addEventListener('resize',()=>{if(cs.classList.contains('on'))resize();});
    return {start,stop};
  }
}
