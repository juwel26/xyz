
const toggle = document.getElementById('three-dought');
const menu = document.getElementById('nav-list');


toggle.addEventListener( 'click',function(){
  menu.style.display = 'block'
});
toggle.addEventListener( 'click',function(){
  menu.classList.add('active') 
});