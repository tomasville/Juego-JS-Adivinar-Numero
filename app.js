let numeroSecreto = 0;
let intentos = 1; 
let listaNumerosSorteados = [];
let numeroMaximo = 10; // Definimos el número máximo para el juego

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
console.log(numeroSecreto);

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (isNaN(numeroDeUsuario)) {
        asignarTextoElemento('p', 'Por favor, ingresa un número válido.');
        return;
    }

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', 'Has acertado el número secreto en ' + intentos + ' intentos');
        document.getElementById('reiniciar').disabled = false;
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
  document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado  = Math.floor(Math.random() * numeroMaximo) + 1;
    // Verificar si el número ya ha sido sorteado
    // si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
       asignarTextoElemento('p', 'Todos los números ya han sido sorteados. Reinicia el juego para comenzar de nuevo.'); 
    } else{
        if(listaNumerosSorteados.includes(numeroGenerado)) {  // Si ya fue sorteado, generar un nuevo número
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Bienvenido a mi juego');
    asignarTextoElemento('p', 'Indica un numero del 1 al ' + numeroMaximo);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    //indicar interavalos de numeros
    condicionesIniciales();
    //generar un nuevo numero secreto
    //habilitar el boton de intenta
    //deshabilitar el boton de reiniciar
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();