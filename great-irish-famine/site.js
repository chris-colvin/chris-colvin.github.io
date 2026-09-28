const dialog=document.getElementById('figure-dialog');
document.querySelectorAll('[data-image]').forEach(button=>button.addEventListener('click',()=>{
  const image=document.getElementById('expanded-image');image.src=button.dataset.image;image.alt=button.querySelector('img').alt;
  document.getElementById('figure-caption').textContent=button.dataset.caption;dialog.showModal();
}));
document.getElementById('close-dialog').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const box=dialog.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)dialog.close();}});
const links=[...document.querySelectorAll('.chapter-nav a')];
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){links.forEach(a=>{const active=a.hash==='#'+entry.target.id;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}}},{rootMargin:'-10% 0px -65% 0px'});document.querySelectorAll('.chapter,.teaching').forEach(section=>observer.observe(section));}
