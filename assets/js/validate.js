function initInscriptionForm(){
  const form = document.getElementById('inscriptionForm');
  if(!form) return;
  const fields = ['nom','prenom','telephone','email','niveau','mode','creneau'];
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const telRegex = /^[+0-9\s-]{8,}$/;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    fields.forEach(id => {
      const el = document.getElementById(id);
      const err = document.getElementById(id+'Err');
      if(!el) return;
      if(!el.value || (el.tagName==='SELECT' && el.value==='')){
        err.textContent = 'Champ requis';
        valid = false;
      } else { err.textContent = ''; }
    });
    const email = document.getElementById('email').value.trim();
    const tel = document.getElementById('telephone').value.trim();
    if(email && !emailRegex.test(email)){ document.getElementById('emailErr').textContent = 'E-mail invalide'; valid=false; }
    if(tel && !telRegex.test(tel)){ document.getElementById('telephoneErr').textContent = 'Téléphone invalide'; valid=false; }
    if(!valid) return;
    const data = Object.fromEntries(new FormData(form).entries());
    const out = document.getElementById('formOutput');
    out.textContent = 'Merci ' + data.prenom + ' ' + data.nom + ' ! Votre demande a été envoyée. Nous vous contactons par WhatsApp et e-mail.';
    out.className = 'success';
    const msg = encodeURIComponent(`Bonjour, je viens de m'inscrire au cours d'allemand (niveau ${data.niveau}).`);
    window.open(`https://wa.me/22671822468?text=${msg}`, '_blank');
    form.reset();
  });
}
document.addEventListener('DOMContentLoaded', initInscriptionForm);