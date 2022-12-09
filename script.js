function inserir(num) {
    var numero = document.getElementById('resposta').innerHTML
    document.getElementById('resposta').innerHTML = numero + num
}

function limpar() {
    document.getElementById('resposta').innerHTML = ""
}


function apagar() {
    var resultado = document.getElementById('resposta').innerHTML
    document.getElementById('resposta').innerHTML = resultado.substring(0, resultado.length - 1)
}

//Função para calcular imprimir a ressposta;

function calculo() {
    var resultado = document.getElementById('resposta').innerHTML
    if (resultado) {
        document.getElementById('resposta').innerHTML = eval(resultado);
    }
    else {
        let resposta = document.getElementById('resposta')  
        resposta.style.fontSize = "30px" 
        resposta.style.width = "315px"
        resposta.style.paddingRight = "45px" 
        resposta.innerHTML = "nada para calcular"

    }
}
