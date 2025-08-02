import { useState } from "react"

const App = () => {
  const [numeroActual, setNumeroActual] = useState('0')
  const [operador, setOperador] = useState('')
  const [operando, setOperando] = useState('')

  const handleButton = (Event) => {
    const buttonText = event.target.textContent

    if ('+-*'.includes(buttonText)) {
      // 1. Accionamos el operador
      setOperador(buttonText)
      setOperando(Number(numeroActual))
      setNumeroActual('0')
      // Cuando presionemos el boton '='
    } else if (buttonText === '=') {
      // 3. Aquí realizo las operaciones en base al número actual y el operando
      if (operador === '+') {
        setNumeroActual(Number(operando) + Number(numeroActual))
      } else if (operador === '-') {
        setNumeroActual(Number(operando) - Number(numeroActual))
      } else if (operador === '*') {
        setNumeroActual(Number(operando) * Number(numeroActual))
      }
      // Cuando presionemos el botn 'AC
    } else if (buttonText === 'AC') {
      // Limpiamos operando, operadores y el input
      setNumeroActual('0')
      setOperador('')
      setOperando('')
    } else {
      // 2. Se presionó algún número
      setNumeroActual(Number(numeroActual + buttonText))
    }
  }

  return (
     <main className="w-[300px] bg-[#AADDEE] my-0 mx-auto mt-5 p-5 rounded-md shadow-md">
    <h1 className="text-3xl font-bold text-center mb-4">
      Calculadora
    </h1>

    <section className="flex flex-col gap-2">
      <input type="text" id="inputDisplay" class="border p-1 text-right text-2xl font-bold" value={numeroActual} readOnly/>

       <div className="grid grid-cols-3 gap-3">
          <button className="button bg-red-400 p-2 rounded-md hover:bg-red-500 duration-300" onClick={handleButton}>+</button>
          <button className="button bg-red-400 p-2 rounded-md hover:bg-red-500 duration-300" onClick={handleButton}>-</button>
          <button className="button bg-red-400 p-2 rounded-md hover:bg-red-500 duration-300" onClick={handleButton}>*</button>

          <button className="button bg-blue-400 p-2 rounded-md hover:bg-blue-500 duration-300" onClick={handleButton}>7</button>
          <button className="button bg-blue-400 p-2 rounded-md hover:bg-blue-500 duration-300" onClick={handleButton}>8</button>
          <button className="button bg-blue-400 p-2 rounded-md hover:bg-blue-500 duration-300" onClick={handleButton}>9</button>
          <button className="button bg-blue-400 p-2 rounded-md hover:bg-blue-500 duration-300" onClick={handleButton}>4</button>
          <button className="button bg-blue-400 p-2 rounded-md hover:bg-blue-500 duration-300" onClick={handleButton}>5</button>
          <button className="button bg-blue-400 p-2 rounded-md hover:bg-blue-500 duration-300" onClick={handleButton}>6</button>
          <button className="button bg-blue-400 p-2 rounded-md hover:bg-blue-500 duration-300" onClick={handleButton}>1</button>
          <button className="button bg-blue-400 p-2 rounded-md hover:bg-blue-500 duration-300" onClick={handleButton}>2</button>
          <button className="button bg-blue-400 p-2 rounded-md hover:bg-blue-500 duration-300" onClick={handleButton}>3</button>
          <button className="button bg-blue-400 p-2 rounded-md hover:bg-blue-500 duration-300" onClick={handleButton}>0</button>

          <button className="button bg-green-400 p-2 rounded-md hover:bg-green-500 duration-300" onClick={handleButton}>AC</button>
          <button className="button bg-green-400 p-2 rounded-md hover:bg-green-500 duration-300" onClick={handleButton}>=</button>
        </div>
      </section>
    </main>
  )
}

export default App