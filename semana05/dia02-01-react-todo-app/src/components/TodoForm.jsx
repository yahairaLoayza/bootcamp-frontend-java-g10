import { useState } from "react"

const TodoForm = ({ onSubmit }) => {
  const [input, setInput] = useState('')

  console.log('FORM')

  const handleChange = (event) => {
    // Vamos a capturar lo que escribimos en la caja de texto
    setInput(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log('Añadiendo todo!')

    const newTodo = {
      id: crypto.randomUUID(),
      title: input,
      completed: false
    }

    console.log(newTodo)

    onSubmit(newTodo)

    setInput('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="¿Qué deseas hacer hoy?"
        className="border w-full border-yellow-400 my-3 p-2 rounded-lg"
        required
        // onChange={(event) => setInput(event.target.value)}
        onChange={handleChange}
        value={input}
      />
      {/* {input} */}
    </form>
  )
}

export default TodoForm