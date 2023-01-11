var header = document.querySelector("#header")
var logo = document.querySelector('.logo')
var main = document.querySelector('#main')
var menu = document.querySelector(".menu-bar")
var icon = document.querySelector('#iconMenuMobile')
var links = document.querySelector("#links")

function exibeMenu(){

    if(menu.style.position != 'absolute'){

        menu.style.position = 'absolute'
        main.style.display = 'none'
        menu.style.height = '50%'
        menu.style.width = '70%'
        header.style.marginTop = '20px'
        
        logo.style.display = 'none'

        header.style.height = '95%'
        header.style.display = 'flex'
        header.style.justifyContent = 'end'
        header.style.alignItems = 'start'

        icon.src = '../img/closeIcon.svg'
        icon.style.width = '10%'

        links.style.display = 'flex'
    }
    else{
        menu.style.position = ''
        main.style.display = ''
        menu.style.height = ''
        menu.style.width = ''

        icon.src = '../img/menuMobileIcon.svg'

        logo.style.display = ''

        header.style.height = ''
        header.style.display = ''
        header.style.justifyContent = ''
        header.style.alignItems = ''

        icon.style.width = ''
        links.style.display = ''
    }
}

