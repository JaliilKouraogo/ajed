(function(){
  const burger = document.getElementById('burger');
  const drawer = document.getElementById('drawer');
  if(!burger || !drawer) return;

  function openDrawer(){
    drawer.classList.remove('hidden');
    document.body.classList.add('body-lock');
    burger.setAttribute('aria-expanded','true');
    drawer.setAttribute('aria-hidden','false');
  }
  function closeDrawer(){
    drawer.classList.add('hidden');
    document.body.classList.remove('body-lock');
    burger.setAttribute('aria-expanded','false');
    drawer.setAttribute('aria-hidden','true');
  }

  burger.addEventListener('click', () => {
    if(drawer.classList.contains('hidden')) {
      openDrawer();
    } else {
      closeDrawer();
    }
  });

  // Fermer en cliquant sur un lien
  drawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => { closeDrawer(); });
  });

  // Fermer si on repasse en desktop
  let lastW = window.innerWidth;
  window.addEventListener('resize', () => {
    const w = window.innerWidth;
    if (w >= 900 && lastW < 900){
      closeDrawer();
    }
    lastW = w;
  });
})();
