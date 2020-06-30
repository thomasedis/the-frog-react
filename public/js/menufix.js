// window.addEventListener('scroll',()=>{
//     let headerMenu = document.getElementById('header-wrapper')
//     headerMenu.classList.toggle('header-main__scroll', window.scrollY > 190)
// })
window.addEventListener('scroll',()=>{
    let headerMenu = document.getElementById('menu-wrapper')
    headerMenu.classList.toggle('menu-wrapper__scroll', window.scrollY > 200)
})