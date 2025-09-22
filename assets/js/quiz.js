function initQuiz(){
  const wrap = document.getElementById('quizWrap');
  if(!wrap) return;
  const questions = [
    {q: "Comment dit-on 'Bonjour' en allemand ?", a:['Guten Tag','Buenas días','Buongiorno','Good day'], i:0},
    {q: "Le verbe 'sein' signifie…", a:['avoir','être','aller','faire'], i:1},
    {q: "Article défini masculin nominatif :", a:['der','die','das','den'], i:0},
    {q: "Traduisez : 'Ich komme aus Burkina Faso'", a:['Je vais au Burkina Faso','Je viens du Burkina Faso','Je suis au Burkina Faso','Je pars du Burkina Faso'], i:1},
    {q: "Pluriel de 'Kind' :", a:['Kinden','Kinder','Kinds','Kindern'], i:1},
    {q: "Préposition avec datif :", a:['für','ohne','mit','durch'], i:2},
    {q: "Parfait de 'machen' :", a:['hat gemacht','ist gemacht','hat gemachen','ist gemachen'], i:0},
    {q: "Mot interrogatif pour 'où' (lieu) :", a:['wann','wo','warum','wer'], i:1},
    {q: "Complétez : 'Ich ____ Deutsch.'", a:['sprechen','spricht','spreche','sprichst'], i:2},
    {q: "Traduisez : 'Wie viel kostet das?'", a:['Où est-ce ?','Quelle heure est-il ?','Combien ça coûte ?','Que fais-tu ?'], i:2},
  ];
  const form = document.createElement('form'); form.className = 'form';
  questions.forEach((item, idx) => {
    const field = document.createElement('fieldset'); field.style.marginBottom = '12px';
    const legend = document.createElement('legend'); legend.textContent = (idx+1)+'. '+item.q; legend.style.fontWeight='600'; legend.style.marginBottom='8px'; field.appendChild(legend);
    item.a.forEach((opt, oi) => {
      const label = document.createElement('label');
      label.style.display='flex'; label.style.alignItems='center'; label.style.gap='8px'; label.style.margin='6px 0';
      const radio = document.createElement('input'); radio.type='radio'; radio.name='q'+idx; radio.value=oi;
      label.appendChild(radio); const span = document.createElement('span'); span.textContent=opt; label.appendChild(span);
      field.appendChild(label);
    });
    form.appendChild(field);
  });
  const btn = document.createElement('button'); btn.type='submit'; btn.className='btn btn-primary'; btn.textContent='Voir mon niveau'; form.appendChild(btn);
  const out = document.createElement('p'); out.id='quizOut'; out.className='muted'; out.style.marginTop='10px';
  wrap.appendChild(form); wrap.appendChild(out);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let score = 0;
    questions.forEach((item, idx) => {
      const pick = form.querySelector('input[name="q'+idx+'"]:checked');
      if(pick && Number(pick.value)===item.i) score++;
    });
    let level = 'A1';
    if(score>=3 && score<=5) level='A2';
    if(score>=6 && score<=8) level='B1';
    if(score>=9) level='B2';
    out.innerHTML = `Score : <strong>${score}/10</strong> → Niveau recommandé : <strong>${level}</strong>.`;
    out.className='success';
  });
}
document.addEventListener('DOMContentLoaded', initQuiz);