



const comCarencia = document.querySelector('#comCarencia');
const listaSuspensa = document.querySelector('#listaSuspensa');

comCarencia.addEventListener('change',function() {
    if (this.checked) {
       listaSuspensa.removeAttribute('hidden'); 
    }   else {
        listaSuspensa.setAttribute('hidden','hidden'); 
    }
});

const dispoeEntrada = document.querySelector('#dispoeEntrada');
const listaSuspensa2= document.querySelector('#listaSuspensa2');

dispoeEntrada.addEventListener('change',function() {
    if (this.checked) {
        listaSuspensa2.removeAttribute('hidden'); 
    }   else {
        listaSuspensa2.setAttribute('hidden','hidden'); 
    }
});

    var n1 = document.querySelector('#n1')
    var n2 = document.querySelector('#n2')
    var resultado = document.querySelector('span')

    function somar() {
        resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value)
    }

    function subtrair() {
        resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value)
    }

    function multiplicar() {
        resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value)
    }

    function dividir() {
        resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value)
    }
