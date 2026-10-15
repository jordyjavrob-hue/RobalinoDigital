(()=>{
if(!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
const elements=document.querySelectorAll('.heading,.card,.portfolio-card,.demo-card,.step,.support-grid,.contact-grid,.faq');
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.06});
elements.forEach(element=>{element.classList.add('reveal');observer.observe(element);});
document.documentElement.classList.add('motion-ready');
})();
