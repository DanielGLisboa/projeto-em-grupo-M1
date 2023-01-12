var content1 = document.querySelector('.content1')
var content2 = document.querySelector('.content2')
var content3 = document.querySelector('.content3')
var left = document.querySelector('#left')
var rigth = document.querySelector('#rigth')


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