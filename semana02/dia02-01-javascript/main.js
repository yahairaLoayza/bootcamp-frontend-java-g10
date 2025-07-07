// COMENTARIOS

// console.log('Hola a todos!)

/*
  Esto
  es
  un
  comentario
  de 
  múltiples
  líneas
*/

// TIPOS DE DATOS
// * https://lenguajejs.com/javascript/
// * https://developer.mozilla.org/en-US/docs/Web/JavaScript

// PRIMITIVOS: Number, String, Boolean (true, false), undefined, null, BigInt, Symbol.

// NUMBERS

const numero1 = 20
const numero2 = 20.50
const numero3 = -36

console.log(numero1)
console.log(numero2)
console.log(numero3)

console.log(typeof numero1)
console.log(typeof numero2)
console.log(typeof numero3)

// STRING O Cadena de texto

const alumna = 'Claudia'
const alumno = "Diego"
const numero4 = "200"
const numero5 = 200

console.log(alumna)
console.log(alumno)
console.log(numero4)
console.log(numero5)

console.log(typeof alumna)
console.log(typeof alumno)
console.log(typeof numero4)
console.log(typeof numero5)

// BOOLEAN -> false o true

const tieneDescuento = true

console.log(tieneDescuento)
console.log(typeof tieneDescuento)

// UNDEFINED

let nombre // No hemos asignado un valor a la variable nombre

console.log(nombre) // undefined
console.log(typeof nombre) // undefined

// NULL

// let apellido0 = undefined // ❌
let apellido = null

console.log(apellido)
console.log(typeof apellido)

// BigInt (Tipo de dato primitivo)
// Symbol (Tipo de dato primitivo)

// Object (Tipo de datos no primitivos)
// Function (Tipo de datos no primitivos)
// Array (Tipo de datos no primitivos)
// Set (Tipo de datos no primitivos)
// etc.

// VARIABLES Y CONSTANTES

// ECMASCRIPT 5 === ES5
// ECMASCRIPT 6 === ES6

// var -> ES5 (Forma de declarar una variable pero no es recomendado su uso) ❌

// CONST -> ES6 (El uso de const es lo recomendado)

const edad = 55 // Es obligatorio inicializarlo
const _edad = 25
const edadDeMiHijo = 15
const PI = 3.14

// edad = 33 // Uncaught TypeError: Assignment to constant variable.

console.log(edad)

// LET -> ES6 (El uso de let es lo recomendado)

let edad2 = 35 // No es obligatorio inicializarlo

edad2 = "36"
edad2 = true
edad2 = 22

console.log(edad2)
console.log(typeof edad2)

// OPERADORES MATEMÁTICOS

console.log(1 + 2)
console.log(3 - 2)
console.log(2 * 2)
console.log(1 / 2)
console.log(1 % 2) // Residuo
console.log(2 ** 3) // Dos elavado al cubo
console.log(Math.pow(2, 3)) // Hace lo mismo que 2 ** 3

// OPERADORES DE ASIGNACIÓN

const genero = 'femenino'

console.log(genero + '*')

// OPERADORES DE COMPARACIÓN

// Operador de igualdad y desigualdad no estricta (==)
// Devuelve un valor booleano (true o false)
// Este operador no toma en cuenta el tipo de datos al comparar sino solo sus valores

console.log(1 == 1) // true
console.log(1 == '1') // true ❓
console.log(1 != '1') // false ❓

// Operador de igualdad y desigualdad estricta (===) (ES RECOMDABLE USARLO CASI SIEMPRE)
// Devuelven un valor booleano (true o false)
// Este operador si toma en cuenta el tipo de datos y sus valores al comparar

console.log(1 === 1) // true
console.log(1 === '1') // false ✅
console.log(1 !== '1') // true ✅

// OPERARDORES DE COMPARACIÓN, siempre devuelven un booleano

console.log(8 > 5)
console.log(5 < 1)
console.log(8 >= 5)
console.log(8 <= 5)

// OPERADORES LÓGICOS (AND, OR, NEGACIÓN)

console.log(true && false) // AND
console.log(true || false) // OR
console.log(!false) // NEGACIÓN

// OPERADOR DE CADENA (CONCATENACIÓN)

const saludo = 'Hola, '
const nombreCompleto = 'Victor' + '@' + 'Villazón'
const miEdad = 38

const imprimirSaludo = saludo + nombreCompleto + ". Tengo " + miEdad + ' años'

console.log(nombreCompleto)
console.log(imprimirSaludo)

// EJERCICIOS

// 1. Retorna true si dos strings tienen la misma longitud sino devolver false
const cadena1 = 'codigo'
const cadena2 = 'cadaga'

console.log(cadena1.length)
console.log(cadena2.length)

console.log(cadena1.length === cadena2.length) // true

// 2. Retornar true si un numero es menor que 40 sino devolver false
const unNumero = 28
console.log(unNumero < 40)
// 3. Retornar True si un numero es menor que 60 sino devolver False
const unNumero2 = 88
console.log(unNumero2 < 60)
// 4. Retornar True si un numero es par sino devolver False
const unNumero3 = 8
console.log(unNumero3 % 2 === 0)
// 5. Retornar True si un numero es impar sino devolver 
const unNumero4 = 7
console.log(unNumero4 % 2 !== 0)
// 6. calcular el area de un triangulo y mostrar su resultado si tenemos los valores base y altura
const base = 10
const altura = 15
const area = (base * altura) / 2
console.log(area)
// 7. (TODO) Almacenar en una constante un número de 3 cifras y mostrar la suma de sus cifras elevada al cubo.
// 8. (TODO) Almacenar en una constante un monto de dinero, luego mostrar cuanto le toca a cada socio según la siguiente tabla:
// SOCIO A = 30%, SOCIO B = 20%, SOCIO C = 60%


// CONDICIONALES (IF)

if (true) {
  // El bloque que se ejecuta si la condición es verdadera (true)
}

const numero = 34

const esPar = numero % 2 === 0

if (esPar) {
  console.log('Este número es par')
}

// CONDICIONALES (IF, ELSE)

if (true) {
  // Se ejecuta este bloque si la condición es verdadera
} else {
  // Se ejecuta este bloque si la condición es falsa
}

if (esPar) {
  console.log('Es número es par')
} else {
  console.log('Es número es impar')
}

// CONDICIONALES (IF, ELSE IF, ELSE)

if (true) {
  // Se ejecuta este bloque si la condición es verdadera
} else if (true) {
  // Se ejecuta este bloque si la condición es verdadera
} else if (true) {
  // Se ejecuta este bloque si la condición es verdadera
} else {
  // Se ejecuta este bloque si ninguna condición se cumple
}

let heroe = 'Spiderman'

if (heroe === 'Batman') {
  console.log('Hola soy Bruce')
} else if (heroe === 'Spiderman') {
  console.log('Hola soy Peter')
} else if (heroe === 'Ironman') {
  console.log('Hola soy Tony')
} else {
  console.log('No soy un heroe :(')
}

// CONDICIONALES (SWITCH)

heroe = 'Ironman'

switch (heroe) {
  case 'Batman':
    console.log('Hola soy Bruce')
    break
  case 'Spiderman':
    console.log('Hola soy Peter')
    break
  case 'Ironman':
    console.log('Hola soy Tony')
    break
  default:
    console.log('No soy un heroe :(')
}


// ESTRUCTURAS REPETITIVAS

// FOR (Sirve para repetir una o varias instrucciones)

for (let i = 0; i < 10; i++) {
  console.log(i)
}

// WHILE

let j = 0

while (j < 10) {
  console.log('while', j)
  // j = j + 1
  j++
}

// DO WHILE

let k = 0

do {
  console.log('do while', k)
  k = k + 1
  // k++
} while (k < 10)

// EJERCICIOS

// 1. Determinar si la edad de una persona es mayor de edad o menor de edad mostrando 'Mayor de edad' o 'Menor de edad'

const edadPersona = 39

if (edadPersona >= 18) {
  console.log('Mayor de edad')
} else {
  console.log('Menor de edad')
}

// 2. Retornar un saludo en tres diferentes lenguajes:
//    - si es español mostrará 'Hola'
//    - si es inglés mostrará 'Hello'
//    - si es aimara mostrará 'kamisaraki'
// 3. Si un numero es divisible entre 3 y 5 devolver 'fizzbuzz'
//    Si un numero es divisible entre 3 devolver 'fizz'
//    Si un numero es divisible entre 5 devolver 'buzz'
//    De lo contrario devolver el mismo número
// 4. Retornar true si un numero es primo sino devolver false
//    Pista: un numero primo es divisible por sí mismo y por 1
// 5. Devolver un valor que se incremente de dos en dos y devuelva los menores a 10


// FUNCIONES (Son bloques de código que podemos reutlizar)

// Declaración
function nombreDeLaFuncion() {
  // Cuerpo de la función y aquí va la lógica a ejecutar y reutilizar
}

// Ejecutar, aquí estamos llamando a la función
nombreDeLaFuncion()
nombreDeLaFuncion()

// Funciones sin parámetros

function imprimirMiNombre() {
  console.log('Hola soy Victor')
  console.log('Y soy Frontend')
}

imprimirMiNombre()
imprimirMiNombre()

// Funciones con parámetros y valores por defecto

function imprimirUnNombre(nombre = 'Anónimo') {
  // if (nombre === undefined) {
  //   nombre = 'Anónimo'
  // }

  console.log('Hola soy ' + nombre)
}

imprimirUnNombre()
imprimirUnNombre('Victor')

function imprimirNombreYApellido(nombre, apellido, edad) {
  // console.log('Hola soy ' + nombre + ' ' + apellido + ' y tengo ' + edad + ' años.')
  console.log(`Hola soy ${nombre} ${apellido} y tengo ${edad} años`)
}

imprimirNombreYApellido() // Hola soy undefined undefined y tengo undefined años.
imprimirNombreYApellido('Victor', 'Villazón', '38')

// EJERCICIOS

// 1. Usando funciones determinar si la edad de una persona es mayor de edad o menor de edad mostrando 'Mayor de edad' o 'Menor de edad.
// 2. Retornar true si un numero es primo sino devolver false
// Pista: un numero primo es divisible por sí mismo y por 1

// FUNCIONES SIN RETORNO

function esMayorOMenorDeEdad(edad) {
  if (edad >= 18) {
    console.log('Mayor de edad')
  } else {
    console.log('Menor de edad')
  }
}

esMayorOMenorDeEdad(38)
esMayorOMenorDeEdad(8)
esMayorOMenorDeEdad(3)

// FUNCIONES CON RETORNO

function esMayorOMenorDeEdadConRetorno(edad) {
  if (edad >= 18) {
    return 'Mayor de edad'
  } else {
    return 'Menor de edad'
  }
}

const resultado = esMayorOMenorDeEdadConRetorno(15)

console.log('Resultado:', resultado)

console.log(esMayorOMenorDeEdadConRetorno(25)) // 'Mayor de edad'
console.log(esMayorOMenorDeEdadConRetorno(12)) // 'Menor de edad'


// MÉTODOS DE CADENAS

const welcome = ' Hola Javascript '

console.log(welcome.length) // 17

console.log(welcome.toUpperCase())
console.log(welcome.toLowerCase())
console.log(welcome.trim()) // Remueve los epacios en blanco al inicio y al final de la cadena

const avatar = 'Hola @me'

console.log(avatar.concat('victorvzn')) // 'Hola @mevictorvzn'
console.log(avatar.replace('@me', 'Victor')) // 'Hola Victor'
console.log(avatar.slice(0, 5)) // Retorna una parte de la cadena tomando la posición/índice de inicio y final en los parámetros
console.log(welcome.indexOf('script')) // 10

// ARROW FUNCTIONS (Funciones flecha) =>

// function nombreDeLaFuncion(parametro1, parametro2) {
//   console.log('Hola a todos')
// }

// Funciones sin parámetros en un línea

const imprimiendoSaludo = () => console.log('Hola a todos nuevamente!')

imprimiendoSaludo()

// Funciones con parámetros en un línea

const suma = (numero1, numero2) => numero1 + numero2

console.log(suma(2, 5))

// Funciones con parámetros y retorno en múltiples líneas

const saludoEnMayusculas = (nombre) => {
  const nombreEnMayusculas = nombre.toUpperCase()

  return 'Hola ' + nombreEnMayusculas + '!'
}

console.log(saludoEnMayusculas('Humberto'))

// Funciones con parámetros por defecto con retorno y en múltiples líneas

const otroSaludoEnMayusculas = (nombre='Anónimo') => {
  const nombreEnMayusculas = nombre.toUpperCase()

  return 'Hola ' + nombreEnMayusculas + '!'
}

console.log(otroSaludoEnMayusculas())
console.log(otroSaludoEnMayusculas('Humberto'))

// PARÁMETROS REST (operador rest -> ...)

const numeros = [4, 6]

function miSuma(n1, n2) {
  return n1 + n2
}

console.log(miSuma(4, 6))
console.log(miSuma(...numeros))

const listaDeNumeros = [6, 33, 998, 1, -66, 453]

console.log(
  Math.max(25, 8, 65),
  Math.max(...listaDeNumeros)
)

console.log(
  Math.min(25, 8, 65),
  Math.min(...listaDeNumeros)
)

// SPREAD OPERATOR (...)
// Sirve para expandir un arreglo, llamas a funciones, incluso objetos.

const frutas = ['Manzanas', 'Naranjas', 'Plátanos', 'Sandías', 'Duraznos']

const verduras = ['Papas', 'Cebollas']

const frutasYVerduras = [...verduras, ...frutas]

console.log(frutas)
console.log(verduras)
console.log(frutasYVerduras)

const persona = {
  nombre: 'Victor',
  apellido: 'Villazón',
  edad: 38,
  color: 'azul'
}

const stack = {
  javascript: 'React.js',
  python: 'Django',
  nodejs: 'Express.js',
  color: 'rosado'
}

const personaYSuStack = {
  ...persona,
  ...stack
}

console.log(personaYSuStack)

const personaYSuStack2 = {
  persona,
  stack
}

console.log(personaYSuStack2)