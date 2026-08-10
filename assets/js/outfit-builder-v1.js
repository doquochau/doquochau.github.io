(() => {
  'use strict';
  const data = Array.isArray(window.AC_BUILDER_OUTFITS) ? window.AC_BUILDER_OUTFITS : [];
  const form = document.getElementById('builder-form');
  const results = document.getElementById('builder-results');
  const summary = document.getElementById('builder-summary');
  const regenerate = document.getElementById('builder-regenerate');
  const submit = document.getElementById('builder-submit');
  if (!form || !results || !data.length) return;

  let currentPool = [];
  let currentState = null;
  let lastIds = [];
  let started = false;

  const track = (name, params={}) => {
    try {
      if (typeof window.acTrack === 'function') window.acTrack(name, params);
      else if (typeof window.gtag === 'function') window.gtag('event', name, params);
      else { window.dataLayer = window.dataLayer || []; window.dataLayer.push({event:name, ...params}); }
    } catch (_) {}
  };

  const firstStart = () => {
    if (started) return;
    started = true;
    track('start_outfit_builder', {source_page:'app_phoi_do'});
  };
  form.addEventListener('change', firstStart, {once:true});

  function state() {
    const fd = new FormData(form);
    return {
      style: String(fd.get('style') || ''),
      occasion: String(fd.get('occasion') || ''),
      bottom: String(fd.get('bottom') || ''),
      footwear: String(fd.get('footwear') || '')
    };
  }

  function exactMatch(o, s) {
    if (s.style && o.primaryStyle !== s.style) return false;
    if (s.occasion && !(o.filters?.occasions || []).includes(s.occasion)) return false;
    if (s.bottom && o.filters?.bottom !== s.bottom) return false;
    if (s.footwear && o.filters?.footwear !== s.footwear) return false;
    return true;
  }

  function score(o, s) {
    let n = 0;
    if (s.style) n += o.primaryStyle === s.style ? 12 : -8;
    if (s.occasion) n += (o.filters?.occasions || []).includes(s.occasion) ? 7 : -2;
    if (s.bottom) n += o.filters?.bottom === s.bottom ? 4 : -1;
    if (s.footwear) n += o.filters?.footwear === s.footwear ? 4 : -1;
    n += Math.random() * 1.75;
    return n;
  }

  function ranked(s) {
    const exact = data.filter(o => exactMatch(o,s));
    if (exact.length >= 3) return exact.sort((a,b)=>score(b,s)-score(a,s));
    const stylePool = s.style ? data.filter(o=>o.primaryStyle===s.style) : data.slice();
    return stylePool.sort((a,b)=>score(b,s)-score(a,s));
  }

  function deriveImageUrls(o) {
    const name = String(o.img || '').split('/').pop();
    return {
      mobile:`/images-mobile/badgirl-outfits/${name}`,
      mobileHd:`/images-mobile-hd/badgirl-outfits/${name}`,
      grid:`/images-grid/badgirl-outfits/${name}`,
      full:`/images/badgirl-outfits/${name}`
    };
  }

  function label(v, fallback='Tất cả') { return v || fallback; }

  function renderCards(list, s) {
    const selected = list.slice(0,3);
    lastIds = selected.map(x=>x.id);
    results.replaceChildren(...selected.map((o,index)=>{
      const card=document.createElement('article');
      card.className='builder-result-card';
      const a=document.createElement('a');
      a.className='builder-result-image';
      a.href=`/outfits/${o.slug}.html`;
      a.dataset.builderOutfit=o.id;
      const u=deriveImageUrls(o);
      const img=document.createElement('img');
      img.src=u.grid;
      img.srcset=`${u.mobile} 240w, ${u.mobileHd} 480w, ${u.grid} ${o.width || 720}w, ${u.full} ${o.fullWidth || 1080}w`;
      img.sizes='(max-width:720px) 92vw, (max-width:1100px) 46vw, 31vw';
      img.width=o.width || 720; img.height=o.height || 1280;
      img.loading=index===0?'eager':'lazy'; img.decoding='async';
      if(index===0) img.fetchPriority='high';
      img.alt=`${o.tag} – ${o.primaryStyle}: ${o.title}`;
      a.appendChild(img);

      const body=document.createElement('div'); body.className='builder-result-body';
      const top=document.createElement('div'); top.className='builder-result-top';
      top.innerHTML=`<span>${o.tag}</span><span>${o.primaryStyle}</span>`;
      const h3=document.createElement('h3'); h3.textContent=o.title.replace(/^Look #\d+\s*/i,'');
      const chips=document.createElement('div'); chips.className='builder-match-chips';
      const matched=[];
      if(s.occasion && (o.filters?.occasions||[]).includes(s.occasion)) matched.push(s.occasion);
      if(s.bottom && o.filters?.bottom===s.bottom) matched.push(s.bottom);
      if(s.footwear && o.filters?.footwear===s.footwear) matched.push(s.footwear);
      if(!matched.length) matched.push((o.filters?.occasions || [])[0] || 'Gợi ý phù hợp');
      chips.innerHTML=matched.slice(0,4).map(x=>`<span>${x}</span>`).join('');
      const items=document.createElement('ul'); items.className='builder-core-items';
      (o.coreItems||[]).slice(0,3).forEach(item=>{
        const li=document.createElement('li'); li.innerHTML=`<b>${item.label}</b><span>${item.name}</span>`; items.appendChild(li);
      });
      const cta=document.createElement('a'); cta.className='builder-result-cta'; cta.href=`/outfits/${o.slug}.html`; cta.dataset.builderOutfit=o.id; cta.innerHTML='XEM OUTFIT & SẢN PHẨM <span aria-hidden="true">→</span>';
      body.append(top,h3,chips,items,cta); card.append(a,body); return card;
    }));

    const summaryParts=[s.style,s.occasion,s.bottom,s.footwear].filter(Boolean);
    summary.innerHTML=`<strong>3 LOOK GỢI Ý</strong><span>${summaryParts.length?summaryParts.join(' · '):'Từ toàn bộ 136 Look'}</span>`;
    results.hidden=false; summary.hidden=false; regenerate.hidden=false;
    results.scrollIntoView({behavior:'smooth',block:'start'});
  }

  function build(s, isRegenerate=false) {
    currentState=s; currentPool=ranked(s);
    if(isRegenerate && lastIds.length) {
      const fresh=currentPool.filter(x=>!lastIds.includes(x.id));
      if(fresh.length>=3) currentPool=fresh;
    }
    renderCards(currentPool,s);
    track(isRegenerate?'regenerate_outfit':'complete_outfit_builder', {
      source_page:'app_phoi_do', style:s.style||'all', occasion:s.occasion||'all', bottom:s.bottom||'all', footwear:s.footwear||'all', result_count:Math.min(3,currentPool.length)
    });
  }

  form.addEventListener('submit', e=>{
    e.preventDefault(); firstStart();
    submit.disabled=true; submit.textContent='ĐANG TÌM LOOK...';
    window.setTimeout(()=>{ build(state(),false); submit.disabled=false; submit.textContent='TẠO OUTFIT CHO TÔI'; },120);
  });
  regenerate.addEventListener('click',()=>{ if(currentState) build(currentState,true); });
  results.addEventListener('click',e=>{
    const a=e.target.closest('a[data-builder-outfit]'); if(!a) return;
    track('click_builder_outfit',{outfit_id:a.dataset.builderOutfit, source_page:'app_phoi_do'});
  });
})();
