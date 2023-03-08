let hambugerIcon = document.querySelector('.hamburger')
let navbarMenu = document.querySelector('.nav-bar')

hambugerIcon.addEventListener('click', ()=>{
    navbarMenu.classList.toggle('active')
})