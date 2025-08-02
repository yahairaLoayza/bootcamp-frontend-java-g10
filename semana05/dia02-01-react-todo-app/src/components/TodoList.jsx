import TodoItem from "./TodoItem"

const TodoList = ({ todos = [], onRemoveTodo, onCompleted, onSave }) => {
  // TODO: 01 - Separar el siguiente li en un componente llamado 'TodoItem.jsx'

  return (
    <ul className="flex flex-col gap-2 mt-4">
      {todos.map(todo => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemoveTodo={onRemoveTodo}
            onCompleted={onCompleted}
            onSave={onSave}
          />
        )
      })}
    </ul>
  )
}

export default TodoList