
function toggleMenu(){
  const menu=document.getElementById('side-menu');
  const content=document.getElementById('content');
  if(menu.classList.contains('open')){
    menu.classList.remove('open');
    content.classList.remove('shift');
  } else {
    menu.classList.add('open');
    content.classList.add('shift');
  }
}
function loadScreen(name){
  document.getElementById('screen').innerHTML = `<h2>${name} Screen</h2>`;
}
