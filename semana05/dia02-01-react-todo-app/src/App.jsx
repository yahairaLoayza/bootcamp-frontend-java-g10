import { useState } from "react"

import { TodoHeader } from "./components/TodoHeader"
import TodoList from "./components/TodoList"
import TodoForm from "./components/TodoForm"
import TodoStats from "./components/TodoStats"

export default function App() {
  // Logica de la función

  const DEFAULT_TODOS = [
    {
      id: '1',
      title: 'Aprender Javascript',
      completed: true
    },
    {
      id: '2',
      title: 'Aprender CSS',
      completed: false
    },
    {
      id: '3',
      title: 'Aprender React.js + Tailwind',
      completed: true
    }
  ]

  const [todos, setTodos] = useState(DEFAULT_TODOS)

  // console.log(todos)

  const handleRemoveTodo = (event) => {
    const { id } = event.target.dataset

    console.log('Eliminando todo desde App.jsx', id)

    const updatedTodos = todos.filter(todo => todo.id !== id)

    setTodos(updatedTodos)
  }

  const handleSubmit = (newTodo) => {
    console.log('APP.jsx', newTodo)

    setTodos([...todos, newTodo])
  }

  const handleCompleted = (event) => {
    const { id } = event.target.dataset

    const isChecked = event.target.checked

    console.log(id, isChecked)

    const updatedTodos = todos.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          completed: isChecked
        }
      }

      return todo // Dejams el objeto sin modificaciones
    })

    setTodos(updatedTodos)
  }

  const handleClearCompletedTodos = () => {
    const incompletedTodos = todos.filter(todo => !todo.completed)

    setTodos(incompletedTodos)
  }

  const handleSaveItem = () => {
    console.log('estoy guardarndo el item...')
    // TODO: Guardar el todo editado en el estado todos
  }

  return (
    <main 
      className="bg-yellow-100 w-[400px] mx-auto mt-10 border border-yellow-400 rounded-lg shadow-md p-4"
    >
      <TodoHeader title="Todo APP + React + Tailwind" />
  
      <TodoForm onSubmit={handleSubmit} />

      {/* Renderizado condicional */}

      {
        todos.length > 0
          ? (
            <>
              <TodoStats
                todos={todos}
                onClearCompletedTodos={handleClearCompletedTodos}
              />

              <TodoList
                todos={todos}
                onRemoveTodo={handleRemoveTodo}
                onCompleted={handleCompleted}
                onSave={handleSaveItem}
              />
            </>
          )
        : (
          <div className="text-center font-medium text-gray-500 p-8">
            Agrega más tareas en la caja superior.
          </div>
        )
      }

      <pre className="mt-4">{JSON.stringify(todos, null, 2)}</pre>
    </main>
  )
}