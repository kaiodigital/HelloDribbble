const showMenu = () => {
    const toggle = document.querySelector('.menu-toggle')
    const nav = document.querySelector('.nav-menu')

    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show')
            // console.log('show')
        })
    }
}

showMenu('menu-toggle','nav-menu')