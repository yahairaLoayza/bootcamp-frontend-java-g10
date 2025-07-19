const taskList = document.querySelector('.task__list')

export const saludo = 'Hola'

export function renderTasks(tasks) {
  // console.log('Renderizando las tareas...')
  let list = ''

  // TODO: Validar y añadir el contendo "No hay tareas registradas" si no hay tareas en el array tasks.

  if (tasks.length === 0) {
    taskList.innerHTML = `
      <li class="mt-4 p-4 bg-yellow-100 text-yellow-800 text-sm rounded-lg text-center font-medium border border-yellow-300">
        No hay tareas registradas
      </li>
    `
    return
  }

  tasks.forEach(function(task, index) {
    // list = list + '<li>' + task.title + '</li>'
    list = list + `
      <li class="flex justify-center items-center gap-4 py-1" >
        <input
          type="checkbox"
          ${task.completed ? 'checked' : '' }
          data-id="${task.id}"
        />
        <div class="w-full ${task.completed ? 'line-through text-red-600' : '' }">
          ${task.title}
        </div>
        <button
          class="removebtn border border-red-700 font-medium text-sm p-1 px-3 text-red-900 hover:bg-red-700 hover:text-white rounded-lg duration-300"
          data-id="${task.id}"
        >
          Borrar
        </button>
      </li>
    `
  })

  // console.log(list)
  taskList.innerHTML = list
}