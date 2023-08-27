const form = document.getElementsByClassName('gridForms')   
const campos = document.querySelectorAll('.required') 
const spans = document.querySelectorAll('.span-required') 
const resposta = document.getElementById('resposta.js')
const emailRegex = /^\w+(-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/  
const phoneRegex = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})\-?(\d{4}))$/  

function setError(index){
    campos[index].style.border = 'solid 1.5px red'
    spans[index].style.color = 'red'
     block(enviarBlock)
}
function removeError(index){
    campos[index].style.border = '1px solid rgba(59, 59, 59, 0.425)'
    spans[index].style.color = '#ffffff00'
     block(enviarBlock)
}

function nameValidate(){
    if (campos[0].value.length < 3){
        setError(0)
    }
    else {removeError(0)
    }
}

function emailValidate(){
    if(!emailRegex.test(campos[1].value)){
        setError(1);
    }
    else {removeError(1)
    }
}

function phoneValidate(){
    if(!phoneRegex.test(campos[2].value)){
        setError(2);
    }
    else {removeError(2)
    }
}

function mensagemValidate(){
    if (campos[3].value.length < 10){
        setError(3)
    }
    else {removeError(3)
    }
}