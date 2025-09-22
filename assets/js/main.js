const burger = document.getElementById('burger');
const drawer = document.getElementById('drawer');
if (burger && drawer){
  burger.addEventListener('click', () => {
    const wasHidden = drawer.classList.toggle('hidden');
    burger.setAttribute('aria-expanded', String(!wasHidden));
    drawer.setAttribute('aria-hidden', String(wasHidden));
  });
}
// Smooth anchor scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});
