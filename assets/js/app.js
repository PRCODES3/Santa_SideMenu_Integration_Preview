
function toggleMenu(){
  const m=document.getElementById('side-menu');
  const c=document.getElementById('content');
  m.classList.toggle('open');
  c.classList.toggle('shift');
}
function loadScreen(path){
  fetch(path).then(r=>r.text()).then(html=>{
    document.getElementById('screen').innerHTML=html;
  });
}
