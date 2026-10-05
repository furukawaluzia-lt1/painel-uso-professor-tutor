/* Professor Tutor: uma abertura por carregamento; apenas tempo visível com foco. */
(()=>{
 if(window.__tutorUsageTracker)return;window.__tutorUsageTracker=true;
 const page=location.hostname==='neilasalem.github.io'?({'/horizontes/jogo_a.html':'jogo-a','/horizontes/jogo_b.html':'jogo-b','/horizontes/jogo_c.html':'jogo-c','/horizontes/jogo_d.html':'jogo-d'}[location.pathname]):location.hostname==='furukawaluzia-lt1.github.io'&&location.pathname.startsWith('/tutor-fracoes-rubrica/')?'guia':null;
 if(!page||!crypto.randomUUID)return;
 const endpoint='https://coleta-uso-professor-tutor.furukawaluzia.chatgpt.site/api/coleta';
 const id=crypto.randomUUID();let active=0,prints=0,last=performance.now(),eligible=document.visibilityState==='visible'&&document.hasFocus();
 function tick(){const now=performance.now();if(eligible)active+=Math.min(Math.max(0,now-last),15000);last=now;eligible=document.visibilityState==='visible'&&document.hasFocus();active=Math.min(active,14400000)}
 function send(){tick();const data=JSON.stringify({id,page,active_ms:Math.floor(active),prints});if(!navigator.sendBeacon(endpoint,new Blob([data],{type:'text/plain'})))fetch(endpoint,{method:'POST',body:data,headers:{'Content-Type':'text/plain'},keepalive:true,credentials:'omit'}).catch(()=>{})}
 document.addEventListener('visibilitychange',()=>{tick();send()});window.addEventListener('focus',tick);window.addEventListener('blur',()=>{tick();send()});window.addEventListener('pagehide',()=>{tick();eligible=false;send()});window.addEventListener('pageshow',()=>{last=performance.now();eligible=document.visibilityState==='visible'&&document.hasFocus();send()});
 document.addEventListener('click',e=>{if(page==='guia'&&e.target.closest&&e.target.closest('#printPage')){prints=Math.min(prints+1,100);send()}});
 setInterval(tick,5000);setInterval(send,15000);send();
})();
