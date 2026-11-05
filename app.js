
  const progress = document.getElementById('progress');
  addEventListener('scroll',()=>{
    const h=document.documentElement.scrollHeight-innerHeight;
    progress.style.width=(h>0 ? (scrollY/h)*100 : 0)+'%';
  });

  const chips=[...document.querySelectorAll('[data-filter]')];
  const cards=[...document.querySelectorAll('article[data-category]')];
  let category='all', company='all';
  const companies=['OpenAI','Google','Apple','Microsoft','Meta','NVIDIA','Amazon AWS','Tesla / xAI','Anthropic'];
  const belongs=(card,name)=>(card.dataset.companies||'').split('|').includes(name);
  const companyFilters=document.getElementById('companyFilters');
  function applyFilters(){
    let count=0;
    cards.forEach(card=>{
      const visible=(category==='all'||card.dataset.category===category)&&(company==='all'||belongs(card,company));
      card.classList.toggle('hidden',!visible);
      if(visible) count++;
    });
    document.getElementById('resultCount').textContent=`顯示 ${count} / ${cards.length} 篇`;
    document.getElementById('emptyState').classList.toggle('hidden',count!==0);
  }
  ['all',...companies].forEach(name=>{
    const button=document.createElement('button');
    button.className='chip'+(name==='all'?' active':'');
    button.dataset.company=name;
    button.setAttribute('aria-pressed',String(name==='all'));
    button.textContent=name==='all'?'全部公司':`${name} · ${cards.filter(card=>belongs(card,name)).length}`;
    button.addEventListener('click',()=>{
      company=name;
      companyFilters.querySelectorAll('button').forEach(b=>{
        b.classList.toggle('active',b===button); b.setAttribute('aria-pressed',String(b===button));
      });
      applyFilters();
    });
    companyFilters.append(button);
  });
  chips.forEach(c=>{
    c.setAttribute('aria-pressed',String(c.dataset.filter==='all'));
    c.addEventListener('click',()=>{
      chips.forEach(x=>{x.classList.toggle('active',x===c); x.setAttribute('aria-pressed',String(x===c));});
      category=c.dataset.filter;
      applyFilters();
    });
  });
  const radar=document.getElementById('radar');
  [['AI','AI 模型與商業'],['Robot','機器人與自駕'],['Infra','算力與基礎設施'],['Security','資安']].forEach(([key,label])=>{
    const count=cards.filter(card=>card.dataset.category===key).length;
    const row=document.createElement('div'); row.className='radar-row';
    const name=document.createElement('span'); name.textContent=label;
    const meter=document.createElement('meter'); meter.min=0; meter.max=cards.length; meter.value=count; meter.setAttribute('aria-label',label);
    const value=document.createElement('span'); value.textContent=count+' 篇';
    row.append(name,meter,value); radar.append(row);
  });
  applyFilters();

  const expandBtn=document.getElementById('expandBtn');
  let expanded=false;
  expandBtn.addEventListener('click',()=>{
    expanded=!expanded;
    document.querySelectorAll('details').forEach(d=>d.open=expanded);
    expandBtn.textContent=expanded?'全部收合':'全部展開';
  });

  document.getElementById('shareBtn').addEventListener('click',async()=>{
    const data={title:document.title,text:'全球科技晨報｜2026-11-02',url:location.href};
    try{
      if(navigator.share) await navigator.share(data);
      else{
        await navigator.clipboard.writeText(location.href);
        alert('連結已複製');
      }
    }catch(e){ if(e.name!=='AbortError') alert('請複製瀏覽器網址列的連結分享。'); }
  });

