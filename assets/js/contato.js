// Definição da regra para validação dos campos

const nome = document.querySelector('#name-forms')
const email= document.querySelector('#email-forms')
const envio = document.querySelector('#enviar')
const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
const regexNome =/^([a-zA-Z]+)$/

// Função para validar o nome se está digitando corretamente
function validaNome(){
    const nomeDado = nome.value.trim()
    if(!regexNome.test(nomeDado)){
        msgErro(nome,'Digite somente o primeiro nome')
    }else{
        msgAcerto(nome, 'Ok, está preenchido!')
        return true
    }
}
// Função para validar se o email está digitando corretamente
function validaEmail(){
    const emailDado = email.value.trim()
    if (regexEmail.test(emailDado)) {
        msgAcerto(email,'Email válido')
    }else{
        msgErro(email,'Digite um email válido')
    }
    
}

function limpar(){
    if(email.value.length == '' || nome.value.length == ''){
        alert('Os campos nome e email são obrigatórios')
    }
    else{
    alert('Dados enviados com sucesso')
    document.location.reload(true)
    }
}

function msgErro(saida, msg){
    const control = saida.parentElement
    control.className = 'div-input-error'

    const text = control.querySelector('span')
    text.innerHTML = msg
}

function msgAcerto(saida,msg){
    const control = saida.parentElement
    control.className = 'div-input-set'
    
    const text = control.querySelector('span')
    text.innerHTML = msg
}