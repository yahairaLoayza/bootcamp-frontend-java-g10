// FUNCIONES por declaración

// Funciones sin parámetros

function nombreDeLaFuncion() { // Estamos declarando la función
  console.log('Hola a todos')
}

nombreDeLaFuncion() // Está ejecutandose la función

// Funciones con parámetros por defecto con retorno y en múltiples líneas

function calculariEsMayorDe18(edad = 1) {
  if (edad > 18) {
    return 'Es mayor de edad'
  } else {
    return 'Es menor de edad'
  }
}

console.log(calculariEsMayorDe18())
console.log(calculariEsMayorDe18(25))


// ARROW FUNCTIONS (Funciones flecha) =>

// function nombreDeLaFuncion() {
//   console.log('Hola a todos')
// }

// Funciones sin parámetros en un línea

const imprimirSaludo = () => console.log('Hola a todos!')

imprimirSaludo()

// Funciones con parámetros en un línea y con retorno implicito

const suma = (numero1, numero2) => numero1 + numero2

console.log(suma(2, 5))

// Funciones con parámetros y retorno en múltiples líneas

const saludoEnMayusculas = (nombre) => {
  const nombreEnMayusculas = nombre.toUpperCase()

  return 'Hola ' + nombreEnMayusculas + '!'
}

console.log(saludoEnMayusculas('Humberto'))

// Funciones con parámetros por defecto con retorno y en múltiples líneas

const otroSaludoEnMayusculas = (nombre = 'Anónimo') => {
  const nombreEnMayusculas = nombre.toUpperCase()

  return 'Hola ' + nombreEnMayusculas + '!'
}

console.log(otroSaludoEnMayusculas())
console.log(otroSaludoEnMayusculas('Humberto'))