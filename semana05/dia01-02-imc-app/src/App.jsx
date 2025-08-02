import { useEffect, useState } from 'react'


const App = () => {
  // useState => este hook nos ayuda a generar un estado para manipular datos dentro de nuestros
  // componentes(guarda datos al nivel del componente)
  // useState => devuelve un arreglo con una variable de lectura y una función de escritura para cambiar el estado

  // const weight = useState(99) //devuelve un arreglo
  // const getWeight = weight[0] //variable de lectura
  // const setWeight = weight[1] //función

  const [weight, setWeight] = useState(50)
  const [height, setHeight] = useState(50)

  const handleWeight = (event) => setWeight(event.target.value)

  const handleHeight = (event) => setHeight(event.target.value)

  const calculateIMC = weight / (height / 100) ** 2

  const imcTruncated = calculateIMC.toFixed(2)  //para que el decimal sea de solo 2 numeros

  // IMC = peso / altura * altura
  // * NOTA: EL IMC es el peso(en kilos) entre la altura(en metros) al cuadrado
  
  // **Condiciones del IMC: **
  // * Baja: < 18.5
  // * Normal: <18.5 - 24.9
  // * Sobrepeso: < 25 - 29.9
  // * Obeso: > 30

  // TODO: Calcular el estado de IMC usando las condiciones

  const imcResult = () => {
    let result = ''

    if (imcTruncated < 18.5) {
      result = 'Bajo'
    } else if (imcTruncated >= 18.51 && imcTruncated <= 24.9) {
      result = 'Normal'
    } else if (imcTruncated >= 25 && imcTruncated <= 29.9) {
      result = 'Sobrepeso'
    } else if (imcTruncated > 30) {
      result = 'Obeso'
    } else {
      result = 'Datos incorrectos'
    }

    return result
  }

  return (
    <section>
      <h1>IMC Calculator</h1>
      
      <div>
        <p>Weight: {weight} kg</p>

        <input
          type="range"
          min= "50"
          max="200"s
          onChange={handleWeight}
          />
      </div>

      <div>
        <p>Height: {height} cm</p>

        <input
          type="range"
          min="50"
          max="1000"
          onChange={handleHeight}
        />
      </div>

      <p>TU IMC es {imcTruncated}</p>

      <p>Estado IMC: {imcResult()}</p>
    </section>
  )
}

export default App