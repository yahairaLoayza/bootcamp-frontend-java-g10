import { useState } from "react"

const TodoItem = ({ todo, onRemoveTodo, onCompleted, onSave }) => {

  // TODO: Editar el título del todo haciendo doble click en el título, esto hará que aparezca una caja de texto. Y para guardarlo solo debemos presionar enter en la caja de texto.

  const [isEditing, setIsEditing] = useState(false)
  const [input, setInput] = useState(todo.title)

  const handleDoubleClick = () => {
    setIsEditing(true)
  }

  const handleCancelOrSave = (event) => {
    if (event.code === 'Enter') {
      // Hay que guardar el todo editado
      onSave()

      setIsEditing(false)
    }
  }

  const handleChange = (event) => setInput(event.target.value)

  return (
    <li className="flex gap-2 bg-yellow-200 p-2 rounded-lg">
      <input
        type="checkbox"
        data-id={todo.id}
        onChange={onCompleted}
        checked={todo.completed}
      />
      <div className="w-full flex justify-between items-center gap-2">
         {
          isEditing
            ?
              <input
                onChange={handleChange}
                value={input}
                onKeyDown={handleCancelOrSave}
                className="w-full border-2 border-yellow-400 p-1 rounded-lg"
              />
            : (
              <span
                className="font-medium w-full border-2 p-1 border-transparent"
                onDoubleClick={handleDoubleClick}
              >
                {todo.title}
              </span>
            )
        }

        
        <button
          className="bg-red-300 rounded-lg px-2 py-1 cursor-pointer"
          data-id={todo.id}
          onClick={onRemoveTodo}
        >
          ❌
        </button>
      </div>
    </li>
  )
}

export default TodoItem