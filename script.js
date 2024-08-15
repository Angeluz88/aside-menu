const menuToggle= document.querySelector('.menuToggle')
const navigation= document.querySelector('.navigation')

menuToggle.onclick= function(){
    navigation.classList.toggle('open')
}
const listt = document.querySelectorAll('.list');
function linksActivate(){
    listt.forEach((item) =>
    item.classList.remove('active'))
    this.classList.add('active')
}
listt.forEach((item) => 
item.addEventListener('click', linksActivate))
