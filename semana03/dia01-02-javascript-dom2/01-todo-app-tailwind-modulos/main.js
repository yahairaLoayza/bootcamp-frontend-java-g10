const taskInput = document.querySelector('.task__input')
const taskClear = document.querySelector('.task__clear')
const taskList = document.querySelector('.task__list')

let tasks = []

// let tasks = [
//   {
//     id: 'tarea-1',
//     title: 'Estudiar Javascript',
//     completed: true
//   },
//   {
//     id: 'tarea-2',
//     title: 'Salir al receso a las 9:00pm',
//     completed: false
//   },
//   {
//     id: 'tarea-3',
//     title: 'Realizar un reto para el fin de semana',
//     completed: false
//   }
// ]

// window.removeTask = removeTask // ❌ Exponemos el método

function renderTasks() {
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

taskList.addEventListener('click', function(event) {
  const { target } = event

  if (target.tagName === 'BUTTON' && target.classList.contains('removebtn')) {
    console.log('eliminando tarea...')
    const { id } = target.dataset

    console.log(id)

    tasks = tasks.filter(function(task) {
      return task.id !== id
    })

    renderTasks()
  }

  if (target.tagName === 'INPUT' && target.type === 'checkbox') {
    const { id } = target.dataset

    console.log('Completando tarea...', id)

    const taskSelectedIndex = tasks.findIndex(function(task) {
      return task.id === id
    })

    tasks[taskSelectedIndex] = {
      ...tasks[taskSelectedIndex],
      completed: !tasks[taskSelectedIndex].completed
    }

    console.log({tasks})

    renderTasks()
  }
})

taskList.addEventListener('dblclick', function(event) {
  const { target } = event

  if (target.tagName === 'DIV') {
    console.log('Doble click...')
  }
})

// TODO: 01 - Al presionar enter en la caja de texto debe agregarse una nueva tarea.
// Manejar eventos, y renderizar el nuevo elemento.

taskInput.addEventListener('keydown', function(event) {
  console.log(event.key === 'Enter')

  // const value = taskInput.value
  const value = event.target.value

  if (value.trim() === '') {
    taskInput.value = ''
    return
  }

  if (event.key === 'Enter') {
    console.log('Agregando una nueva tarea', value)

    const newTask = {
      id: crypto.randomUUID(),
      title: value,
      completed: false
    }

    tasks.push(newTask)

    console.log(tasks)

    taskInput.value = ''

    renderTasks()
  }
})

taskClear.addEventListener('click', function(event) {
  // TODO: Al hace click en el botón limpiar debemos remover todas las tareas completadas. Hay que llamar al método render.
  
  const completedTasks = tasks.filter(function(task) {
    // return task.completed === false
    return !task.completed
  })

  tasks = completedTasks

  renderTasks()
})

renderTasks()