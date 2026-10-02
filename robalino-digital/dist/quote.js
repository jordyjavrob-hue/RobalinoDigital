(()=>{
const form=document.getElementById('quote-form');const service=document.getElementById('service');
document.querySelectorAll('.quote').forEach(link=>link.addEventListener('click',()=>{service.value=link.dataset.service;}));
form.addEventListener('submit',event=>{
event.preventDefault();if(!form.reportValidity())return;
const name=document.getElementById('client-name').value.trim();const business=document.getElementById('business').value.trim();const description=document.getElementById('project-description').value.trim();
const status=document.getElementById('quote-status');if(!name||!business||!description){status.textContent='Completa tu nombre, negocio e idea para preparar la consulta.';return;}
const message='Hola, Robalino Digital. Quisiera consultar sobre un proyecto.\n\nNombre: '+name+'\nNegocio: '+business+'\nServicio: '+service.value+'\nMi idea: '+description;
const url='https://wa.me/19082403844?text='+encodeURIComponent(message);
window.open(url,'_blank','noopener,noreferrer');status.replaceChildren();const note=document.createElement('p');note.textContent='Tu mensaje está preparado. Si WhatsApp no se abrió, utiliza este enlace:';const retry=document.createElement('a');retry.href=url;retry.target='_blank';retry.rel='noopener noreferrer';retry.textContent='Abrir consulta en WhatsApp';status.append(note,retry);
});document.getElementById('year').textContent=new Date().getFullYear();
})();
