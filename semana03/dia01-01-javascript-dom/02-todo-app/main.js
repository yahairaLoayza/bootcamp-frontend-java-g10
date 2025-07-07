const taskInput = document.getElementById('taskInput')
const taskAdd = document.querySelector('.task__add')
const taskList = document.querySelector('.task__list')

// EVENTOS

// ELEMENTO.addEventListener(NOMBRE_EVENTO, CALLBACK)

taskAdd.addEventListener('click', function(event) {
  // Se ejecutará cuando hagamos click en el botón 'Añadir tarea'
  console.log('Click!!!', taskInput.value)

  // MANEJO DEL DOM: Forma de crear elementos dinámicamente con el DOM de Javascript
  // const button = document.createElement('button')
  // button.textContent = 'Hola soy un botón'
  // console.log(button)
  // document.body.appendChild(button)

  // TODO: 01 - Validar la entrada del usuario para que no agregue tareas vacías.
  if (taskInput.value.trim() === '') {
    taskInput.value = ''
    taskInput.focus()
    return
  }

  // 01 Añadir el elemento li al elemento con la clase task__list
  const li = document.createElement('li')

  // TODO: 02 - Añadir un checkbox y al hacerle click que tache solo el texto de la tarea de color rojo. Ayuda CSS: "color: red; text-decoration: line-through;"
  const checkbox = document.createElement('input')
  // checkbox.type = 'checkbox'
  checkbox.setAttribute('type', 'checkbox')
  li.appendChild(checkbox)

  // TODO: 03 - Permitir que el usuario pueda editar la tarea, la implementación es según su criterio ejemplo: Al hacer doble click en el título de la tarea o agregar un botón que active la edición. 

  // 02 Añadir el elemento span al elemento li
  const span = document.createElement('span')
  span.textContent = taskInput.value
  li.appendChild(span)

  // DONE: 03 Añadir el elemento button al elemento li
  const button = document.createElement('button')
  button.textContent = 'Borrar'
  li.appendChild(button)

  taskList.appendChild(li)

  // 04 Limpiar la caja de texto después de crear la tarea
  taskInput.value = ''
})

// DONE: Permitir al botón borrar remover una tarea de lista

taskList.addEventListener('click', function(event) {
  console.log({ target: event.target })

  const { target } = event // En target obtenemos el elemento presionado

  if (target.tagName === 'BUTTON') {
    console.log('Eliminando tarea..') 

    console.log(target.parentElement)

    target.parentElement.remove()
  }

  if (target.tagName === 'INPUT' && target.type === 'checkbox') {
    // Aquí target sería el checkbox seleccionado
    // target.parentElement.style = 'color: red;'
    target.classList.toggle('completed')
  }
})