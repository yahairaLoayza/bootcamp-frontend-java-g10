/*
Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.
*/

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

function contarOvejas(ovejas) {
  return ovejas.filter(function(oveja) {
    const nameLowered = oveja.name.toLowerCase()

    const isRedColor = oveja.color === 'rojo'
    const hasLetterN = nameLowered.includes('n')
    const hasLetterA = nameLowered.includes('a')

    return isRedColor && hasLetterN && hasLetterA
  })
}

const ovejasFiltradas = contarOvejas(ovejas)

console.log('RETO 1')
console.log(ovejasFiltradas)

// RESULTADO:
// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]