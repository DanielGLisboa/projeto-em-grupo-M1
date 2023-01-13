var profile1 = document.querySelector('#profile1')
var profile2 = document.querySelector('#profile2')
var profile3 = document.querySelector('#profile3')
var profile4 = document.querySelector('#profile4')
var profile5 = document.querySelector('#profile5')
var profile6 = document.querySelector('#profile6')
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

        if(matchMedia("(max-width: 767px)").matches){
            if(profile2.style.display == 'flex' && profile5.style.display == 'flex'){
                document.location.reload(true);
            }
            if(profile3.style.display == 'flex' && profile6.style.display == 'flex'){
                profile3.style.display = 'none'
                profile6.style.display = 'none'
                profile2.style.display = 'flex'
                profile5.style.display = 'flex'
            }
        }

        if(matchMedia("(min-width: 768px)").matches){
            if(profile3.style.display == 'flex' && profile6.style.display == 'flex'){
                document.location.reload(true);
            }
        }
}

// Funcionabilidade secundaria do botão esquerdo
function botaoEsquerdo2(){
    document.location.reload(true);
}

// Funcionabilidade primaria do botão direito
function botaoDireito(){
    left.onclick = function(){
        var idOriginal = this.id
        this.id = 'left2'
        idOriginal == 'left2' ? botaoEsquerdo2() : botaoEsquerdo() 
    }
    
    if(matchMedia("(max-width: 767px)").matches){
        profile1.style.display = 'none'
        profile4.style.display = 'none'
        profile2.style.display = 'flex'
        profile5.style.display = 'flex'
        }

        if(matchMedia("(min-width: 768px)").matches){
            profile1.style.display = 'none'
            profile4.style.display = 'none'
            profile3.style.display = 'flex'
            profile6.style.display = 'flex'
        }
}

// Funcionabilidade secundariaria do botão direito
function botaoDireito2(){
   
    if(matchMedia("(max-width: 767px)").matches){
        profile3.style.display = 'flex'
        profile6.style.display = 'flex'
        profile2.style.display = 'none'
        profile5.style.display = 'none'
    }  
}




