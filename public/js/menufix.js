// window.addEventListener('scroll',()=>{
//     let headerMenu = document.getElementById('header-wrapper')
//     headerMenu.classList.toggle('header-main__scroll', window.scrollY > 190)
// })
window.addEventListener('scroll',()=>{
   
    

    function myFunction(x) {
        if (x.matches) { // If media query matches
            let headerMenuMobie = document.getElementById('header-wrapper')
            headerMenuMobie.classList.toggle('menu-wrapper__scroll', window.scrollY > 120)
        } else {
            let headerMenu = document.getElementById('menu-wrapper')
            headerMenu.classList.toggle('menu-wrapper__scroll', window.scrollY > 200)
            
        }
      }
   
    var x = window.matchMedia("(max-width: 767px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction)
    
    
})