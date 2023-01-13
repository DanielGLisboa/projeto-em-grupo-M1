var lancha = document.querySelector('#lancha')
var veleiro = document.querySelector('#veleiro')
var jetSki = document.querySelector('#jetSki')
var left = document.querySelector('#left')
var rigth = document.querySelector('#rigth')

// Iniciando botão esquerdo inativo
left.onclick = ''

// Alteração de funcionabilidade do botão direito
rigth.onclick = function(){
    var idRigth = this.id
    this.id = 'rigth2'
    idRigth == 'rigth2' ? botaoDireito2() : botaoDireito()

}

// Funcionabilidade primaria do botão esquerdo
function botaoEsquerdo(){
        if(matchMedia("(max-width: 450px)").matches){
            lancha.style.display = 'none'
            veleiro.style.display = 'flex'
            jetSki.style.display = 'none'
        }else{
            document.location.reload(true);
        }
}

// Funcionabilidade secundaria do botão esquerdo
function botaoEsquerdo2(){
    
    if(matchMedia("(max-width: 450px)").matches){
    document.location.reload(true);
    }
}

// Funcionabilidade primaria do botão direito
function botaoDireito(){
// Iniciando  e realizando alteração de funcionabilidade do botão direito
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

// Funcionabilidade secundaria do botão direito
function botaoDireito2(){
    if(matchMedia("(max-width: 450px)").matches){
    lancha.style.display = 'none'
    veleiro.style.display = 'none'
    jetSki.style.display = 'flex'
    }  
}




