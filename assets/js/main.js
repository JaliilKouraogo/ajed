const burger = document.getElementById('burger');
const drawer = document.getElementById('drawer');
if (burger && drawer){
  burger.addEventListener('click', () => {
    const wasHidden = drawer.classList.toggle('hidden');
    burger.setAttribute('aria-expanded', String(!wasHidden));
    drawer.setAttribute('aria-hidden', String(wasHidden));
  });
}