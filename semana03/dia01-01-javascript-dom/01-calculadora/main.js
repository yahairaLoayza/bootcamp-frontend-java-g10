let numeroActual = '0'
let operador = ''
let operando = ''

// Consulta un elemento a la vez
const inputDisplay = document.querySelector('#inputDisplay')
const buttons = document.querySelectorAll('.button')

console.log(buttons)

// EVENTOS
buttons.forEach(function(button) {

  // button.addEventListener(EVENTO, FUNCION)
  button.addEventListener('click', function(event) {
    // console.log({ textContent: event.target.textContent })

    const button = event.target
    const buttonText = button.textContent

    console.log(buttonText)

    if ('+-*'.includes(buttonText)) {
      // 1. Accionamos el operador
      operador = buttonText
      operando = Number(numeroActual)
      numeroActual = '0'
    // Cuando presionemos el boton '='
    } else if (buttonText === '=') {
      // 3. Aquí realizo las operaciones en base al número actual y el operando
      if (operador === '+') {
        numeroActual = Number(operando) + Number(numeroActual)
      } else if (operador === '-') {
        numeroActual = Number(operando) - Number(numeroActual)
      } else if (operador === '*') {
        numeroActual = Number(operando) * Number(numeroActual)
      }
    // Cuando presionemos el botn 'AC
    } else if (buttonText === 'AC') {
      // Limpiamos operando, operadores y el input
      numeroActual = '0'
      operador = ''
      operando = ''
    } else {
      // 2. Se presionó algún número
      numeroActual = Number(numeroActual + buttonText)
    }

    inputDisplay.value = numeroActual
    // console.log({el: this}) // equivalente a event.target
  })
});


// const inputDisplay = document.getElementById('inputDisplay') // Consulta un elemento por su atributo id
// console.log(buttons)
// console.log(buttons.length)

// console.log(inputDisplay)
// console.log(inputDisplay.value)
// inputDisplay.value = 'hola'


// IIFE (Funciones que se invocan inmediatamente)
;(function(){
 // El codigo aquí no es parte del objeto window global
})();

// O podemos usar los ESM (EcmaScript Modules)

window.onload = function() {

}