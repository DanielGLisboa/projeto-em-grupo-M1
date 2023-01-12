var lancha = document.querySelector('#lancha')
var veleiro = document.querySelector('#veleiro')
var jetSki = document.querySelector('#jetSki')
var left = document.querySelector('#left')
var rigth = document.querySelector('#rigth')


left.onclick = ''

rigth.onclick = function(){
    var idRigth = this.id
    this.id = 'rigth2'
    idRigth == 'rigth2' ? botaoDireito2() : botaoDireito()

}

function botaoEsquerdo(){
        if(matchMedia("(max-width: 450px)").matches){
            lancha.style.display = 'none'
            veleiro.style.display = 'flex'
            jetSki.style.display = 'none'
        }else{
            document.location.reload(true);
        }
}

function botaoEsquerdo2(){
    
    if(matchMedia("(max-width: 450px)").matches){
    document.location.reload(true);
    }
}

function botaoDireito(){

    left.onclick = function(){
        var idOriginal = this.id
        this.id = 'left2'
        idOriginal == 'left2' ? botaoEsquerdo2() : botaoEsquerdo() 
    }

        if(matchMedia("(max-width: 850px)").matches){
        lancha.style.display = 'none'
        jetSki.style.display = 'flex'
        }

        if(matchMedia("(max-width: 450px)").matches){
            lancha.style.display = 'none'
            veleiro.style.display = 'flex'
            jetSki.style.display = 'none'
        }
}

function botaoDireito2(){
    if(matchMedia("(max-width: 450px)").matches){
    lancha.style.display = 'none'
    veleiro.style.display = 'none'
    jetSki.style.display = 'flex'
    }  
}




