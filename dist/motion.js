(()=>{
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');let preference=null;try{preference=localStorage.getItem('rd-motion');}catch{}
const toggle=document.createElement('button');toggle.type='button';toggle.className='motion-toggle';document.body.append(toggle);
function apply(off){document.documentElement.classList.toggle('motion-off',off);toggle.setAttribute('aria-pressed',String(off));toggle.textContent=off?'Activar movimiento':'Reducir movimiento';toggle.setAttribute('aria-label',off?'Activar animaciones suaves':'Reducir las animaciones de la página');}
apply(reduced.matches||preference==='off');toggle.addEventListener('click',()=>{const off=!document.documentElement.classList.contains('motion-off');apply(off);try{localStorage.setItem('rd-motion',off?'off':'on');}catch{}});
if(reduced.addEventListener)reduced.addEventListener('change',event=>{if(event.matches)apply(true);});
document.querySelectorAll('.cards,.demo-portfolio,.steps').forEach(group=>[...group.children].forEach((card,index)=>card.style.setProperty('--reveal-delay',Math.min(index*90,270)+'ms')));
const progress=document.createElement('div');progress.className='scroll-progress';progress.setAttribute('aria-hidden','true');document.body.append(progress);let queued=false;function update(){const range=document.documentElement.scrollHeight-window.innerHeight;const value=range>0?Math.min(1,Math.max(0,window.scrollY/range)):0;progress.style.transform='scaleX('+value+')';queued=false;}window.addEventListener('scroll',()=>{if(!queued){queued=true;requestAnimationFrame(update);}},{passive:true});window.addEventListener('resize',update);update();
})();
