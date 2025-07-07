// Tipos de datos no primitivos (Arrays, Objects)

// ARRAYS

// Un arreglo tiene elementos de cualquier tipo de datos: cadenas, números, booleans, null, undefined, arrays, objects, etc.

const arregloVacio = []
const listaDeNombres = ['Victor', 'Liliana', 'Marcial', 'Diego']
const listaDeValores = [1, 2, 3, 'Victor', 'Villazón', true, null, undefined, [6, 7, 8]]
const listaConFunciones = [() => { console.log('Hola fn')}]

console.log(arregloVacio)
console.log(listaDeNombres)
console.log(listaDeValores)

// Lectura de los elementos de un arreglo

console.log(listaDeValores[0]) // 1
console.log(listaDeValores[4]) // Villazón
console.log(listaDeValores[5]) // true
console.log(listaDeValores[100]) // undefined
console.log(listaDeValores[8][1]) // 7

// Escritura en un arreglo

listaDeNombres[2] = 'Paul'
listaDeNombres[0] = 9999

console.log(listaDeNombres)

listaConFunciones[0]()

// Insertar nuevos elementos al final del arreglo

listaDeNombres.push('Javascript')

console.log(listaDeNombres)

// Remover elementos del final del arreglo

listaDeNombres.pop()

console.log(listaDeNombres)

// Insertar un elemento en una posición determinada

const arr = [...listaDeNombres]

console.log(arr.splice(1, 0, 'HTML'))
console.log(arr)
console.log(listaDeNombres)

// Eliminar un elemento

listaDeNombres.splice(2, 1)

console.log(listaDeNombres)

// Obtener el tamaño de nuestro arreglo

console.log(listaDeNombres.length)
console.log('bienvenido'.length)

// Otras funciones: slice (Investiguen)

// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// Split y join para cadenas

console.log('frutas'.split(''))
console.log('frutas'.split('').join(''))


// MÉTODOS DE ARREGLOS (includes, map, filter, reduce, every, some, flat, flatMap, etc)

// Método INCLUDES, nos indica si el valor que se pasa como parámetro se encuentra en el arreglo y siempre devuelve un boolean(true o false)

const languages = ['javascript', 'php', 'python', 'C', 'c++', 'java', 'python']

console.log(languages.includes('java')) // true
console.log(languages.includes('cobol')) // false

// Método FILTER, nos ayuda a ubicar un elemento dentro de un arreglo usando una condición y devuelve un arreglo con los resultados

const resultado = languages.filter(
  function (language, index, arregloOriginal) {
    // return language === 'java'
    // return language === 'python'
    return language.toLowerCase().includes('c')
  }
)

console.log(resultado)
console.log(languages)

// Método MAP, devuelve un arreglo modifica pasandole una función

const nombresConTitulo = languages.map(
  function (language) {
    // return 'Hola'
    return language + '*'
  }
)

console.log(nombresConTitulo)
console.log(languages)

// Método SORT, nos ayuda a ordenar un arreglo de elementos. Muta el arreglo original. Ordena cadenas de texto.

const ordenandoLanguages = [...languages].sort()

console.log(ordenandoLanguages)
console.log(languages)

const edades = [25, 12, 10, 89, 32, 81, 3]

const ordenandoEdadesAsc = [...edades].sort((a, b) => a - b) // Ordenamiento ASC
const ordenandoEdadesDesc = [...edades].sort((a, b) => b - a) // Ordenamiento DESC

console.log(ordenandoEdadesAsc)
console.log(ordenandoEdadesDesc)
console.log(edades)

// Método FOREACH, nos ayuda a recorrer un arreglo sin tener ningun retorno de datos

const miarreglo = []

languages.forEach(
  function (language, index) {
    if (index > 3) {
      miarreglo.push('hola--' + language)
    }
  }
)

console.log(miarreglo)

// Método REDUCE, nos ayuda a tomar los valores de un arreglo y sumarlos

const numeros = [3, 40, 100, 7, 50]

const sumatoria = numeros.reduce(
  function (accumulador, valorActual) {
    return accumulador + valorActual
  }, 0)

console.log(sumatoria)

let acumulador = 0

for (let i = 0; i < numeros.length; i++) {
  acumulador = acumulador + numeros[i]
}

console.log(acumulador)

// OBJETOS

/*
  {
    KEY 1: VALUE1,
    KEY2: VALUE1
  }
*/

const miObjetoVacio = {}

const miObjeto = {
  nombre: 'Victor',
  apellido: 'Villazón',
  colorFavorito: 'azúl',
  'mi edad': 37,
  coloresFavoritos: ['rosado', 'rojo', 'azúl'],
  cursos: [
    {
      nombre: 'Matemática',
      nota: 18
    },
    {
      nombre: 'Algoritmos',
      nota: 13
    }
  ],
  devolverCursosAprobados: function () {
    return this.cursos.filter(function (curso) {
      return curso.nota > 13
    })
  }
}

console.log(miObjetoVacio)
console.log(miObjeto)

// LEER LOS CAMPOS DE UN OBETO (notación de punto y de corchete)

console.log(miObjeto.nombre) // Victor
console.log(miObjeto.apellido) // Villazón
console.log(miObjeto.edad) // undefined

// console.log(miObjeto.mi edad) // BAD ❌ - Uncaught SyntaxError: missing ) after argument list 
console.log(miObjeto['mi edad'])  // OK ✅

console.log(miObjeto.coloresFavoritos) // ['rosado', 'rojo', 'azúl']
console.log(miObjeto.coloresFavoritos[2]) // azúl

console.log(miObjeto.cursos)
console.log(miObjeto.cursos[1])
console.log(miObjeto.cursos[1].nombre)
console.log(miObjeto.cursos[1].nota)
console.log(miObjeto.cursos[1]['nota'])

console.log(miObjeto.devolverCursosAprobados)
console.log(miObjeto.devolverCursosAprobados())

// ELIMINAR PROPIEDADES DE UN OBJETO

const nuevoObjeto = {...miObjeto}
delete nuevoObjeto.colorFavorito

console.log(nuevoObjeto)
console.log(miObjeto)

// Otra forma de eliminar el valor de un objeto

// miObjeto.apellido = undefined
console.log(miObjeto)

// INSERTAR UN NUEVA PROPIEDAD A UN OBJETO

miObjeto.platilloFavorito = 'Ceviche de Conchas Negras'
miObjeto['juegos favoritos'] = ['Crash Team Racing', 'Mario', 'Minecraft']

console.log(miObjeto)

// DESTRUCTURING DE ARREGLOS, OBJETOS

// Una forma de extraer las propiedades/elementos de un objeto o un arreglo en nuevas variables

// DESTRUCTURING EN OBJETOS

const nombreValue = miObjeto.nombre
const apellidoValue = miObjeto.apellido
const cursosValue = miObjeto.cursos

console.log(nombreValue, apellidoValue, cursosValue)

const { nombre, apellido, cursos } = miObjeto

console.log(nombre, apellido, cursos)

// Alias en destructuring de objetos

const {
  nombre: nombreValor,
  apellido: apellidoValor,
  cursos: cursosValor
} = miObjeto

console.log(nombreValor, apellidoValor, cursosValor)

// DESTRUCTURING EN ARRAYS

const amigos = ['leo', 'marcial', 'diego', 'andrea', 'victor']

const [amigo1, amigo2, , , amigo3] = amigos

console.log(amigo1, amigo2, amigo3)

// DESTRUCTURING + SPREAD OPERATOR

const [miMejorAmigo, ...losDemas] = amigos

console.log(miMejorAmigo, losDemas)

// SPREAD OPERATOR (operador ...)

// Extrae las propiedades de un objeto/arreglo para reutiliarlo en otros objetos/arreglos

const producto = {
  nombre: 'Laptop',
  precio: 5900,
  categoria: 'tech'
}

const cliente = {
  nombre: 'Marcial',
  isVip: true
}

console.log(producto + cliente) // ❌ 💔 [object Object][object Object]

const nuevoObjeto2 = { ...producto, ...cliente } // Cuidado

console.log(nuevoObjeto2)

// SPREAD OPERATOS EVITANDO COLISIONES DE PROPIEDADES

const nuevoObjetoSinColisiones = {
  producto: { ...producto },
  cliente: { ...cliente },
}

console.log(nuevoObjetoSinColisiones)
console.log(nuevoObjetoSinColisiones.producto.nombre)
console.log(nuevoObjetoSinColisiones.cliente.nombre)

// OTROS MÉTODOS DE OBJETOS

console.log(Object.keys(producto)) // Obtenemos solo las claves (keys) del objeto
console.log(Object.values(producto)) // Obtenemos solo los valores (values) del objeto
console.log(Object.entries(producto)) // convertimos un objeto en un arreglo y lo que devuelve es un arreglo de arreglos