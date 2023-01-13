var content1 = document.querySelector('.content1')
var content2 = document.querySelector('.content2')
var content3 = document.querySelector('.content3')
var left = document.querySelector('#left')
var rigth = document.querySelector('#rigth')


var header = document.querySelector("#header")
var logo = document.querySelector('.logo')
var main = document.querySelector('main')
var menu = document.querySelector(".menu-bar")
var icon = document.querySelector('#iconMenuMobile')
var links = document.querySelector("#links")


left.onclick = ''

rigth.onclick = function(){
    var idRigth = this.id
    this.id = 'rigth2'
    idRigth == 'rigth2' ? botaoDireito2() : botaoDireito()

}

function botaoEsquerdo(){

    left.onclick = function(){
        var idOriginal = this.id
        this.id = 'left2'
        idOriginal == 'left2' ? botaoEsquerdo2() : botaoEsquerdo() 
    }

            if(content2.style.display == 'flex'){
                document.location.reload(true);
            }else{
            content1.style.display = 'none'
            content2.style.display = 'flex'
            content3.style.display = 'none'
            }
}

function botaoEsquerdo2(){
    document.location.reload(true);
}

function botaoDireito(){

    left.onclick = function(){
        var idOriginal = this.id
        this.id = 'left2'
        idOriginal == 'left2' ? botaoEsquerdo2() : botaoEsquerdo() 
    }
            content1.style.display = 'none'
            content2.style.display = 'flex'
            content3.style.display = 'none'
      
}

function botaoDireito2(){
    content1.style.display = 'none'
    content2.style.display = 'none'
    content3.style.display = 'flex'
}



function exibeMenu(){

    if(menu.style.position != 'absolute'){

        menu.style.position = 'absolute'
        main.style.display = 'none'
        menu.style.height = '50%'
        menu.style.width = '70%'
        header.style.paddingTop = '20px'
        
        logo.style.display = 'none'

        header.style.height = '95%'
        header.style.display = 'flex'
        header.style.justifyContent = 'end'
        header.style.alignItems = 'start'

        icon.src = 'assets/img/closeIcon.svg'
        icon.style.width = '10%'

        links.style.display = 'flex'
    }
    else{
        menu.style.position = ''
        main.style.display = ''
        menu.style.height = ''
        menu.style.width = ''
        header.style.paddingTop = ''

        icon.src = 'assets/img/menuMobileIcon.svg'
        logo.style.display = ''

        header.style.height = ''
        header.style.display = ''
        header.style.justifyContent = ''
        header.style.alignItems = ''

        icon.style.width = ''
        links.style.display = ''
    }
}