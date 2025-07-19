import {
  createPelicula,
  fetchPeliculas,
  deletePelicula,
  getPelicula,
  editPelicula
} from "./services.js"

export const renderPeliculas = (peliculas = []) => {
  const elPeliculasList = document.querySelector('.peliculas__list')

  let elementos = ''

  peliculas.forEach(pelicula => {
    elementos += `
      <tr>
        <td>${pelicula.id}</td>
        <td>
          <img
            src="${pelicula.imagen}"
            width="100"
            height="150"
            onerror="this.src='https://placehold.co/100x150'"
          />
        </td>
        <td>
          <strong>${pelicula.nombre}</strong>
          <div class="text-small">
            <strong>Estreno:</strong> ${pelicula.estreno}
          </div>
          <div class="text-small">
            <strong>Resumen:</strong> ${pelicula.resumen}
          </div>
        </td>
        <td>
          <div class="flex gap-0.5">
            <button class="peliculas__edit" data-id="${pelicula.id}">✏</button>
            <button class="peliculas__remove" data-id="${pelicula.id}">❌</button>
          </div>
        </td>
      </tr>
    `
  })

  elPeliculasList.innerHTML = elementos

  const removeBotones = document.querySelectorAll('.peliculas__remove')

  removeBotones.forEach(boton => {
    boton.addEventListener('click', async (event) => {
      const id = event.target.dataset.id

      console.log('Eliminando pelicula', id)

      // TODO: Terminar de hacer el llamado a la función 'deletePelicula(id)' y refrescar la tabla de peliculas

      const confirmaElimacion = confirm('¿Estas seguro de eliminar esta pelicula?')

      if (confirmaElimacion) {
        const response = await deletePelicula(id)

        console.log(response)

        if(response) {
          const peliculas = await fetchPeliculas()

          renderPeliculas(peliculas)
        }
      }
    })
  })

  // TODO: Recuperar la información de pelicula seleccionada cuando hagamos click en el botón editar.

  const editBotones = document.querySelectorAll('.peliculas__edit')

  editBotones.forEach(boton => {
    boton.addEventListener('click', async (event) => {
      const id = event.target.dataset.id

      console.log('Editando pelicula', id)

      const response = await getPelicula(id)

      console.log(response)

      // TODO: Llenar los datos del formulario con la data obtenida de getPelicula(id)
      const peliculaForm = document.forms['peliculasForm']

      peliculaForm.id.value = response.id
      peliculaForm.nombre.value = response.nombre
      peliculaForm.imagen.value = response.imagen
      peliculaForm.estreno.value = response.estreno
      peliculaForm.genero.value = response.generoId // 👁
      peliculaForm.resumen.value = response.resumen
    })
  })
}

export const handleSavePelicula = async () => {
  console.log('Creando nueva pelicula...')

  const peliculaForm = document.forms['peliculasForm']

  const id = peliculaForm.id.value

  const nombre = peliculaForm.nombre.value
  const imagen = peliculaForm.imagen.value
  const estreno = peliculaForm.estreno.value
  const genero = peliculaForm.genero.value
  const resumen = peliculaForm.resumen.value

  const isEditing = Boolean(id)

  console.log({ nombre, imagen, estreno, genero, resumen })

  if (isEditing) { // Puedor guardar la data editada
    const form = {
      nombre,
      imagen,
      estreno,
      resumen,
      generoId: genero
    }

    const response = editPelicula(id, form)

    if (response) {
      const peliculas = await fetchPeliculas()

      renderPeliculas(peliculas)
    }

    peliculaForm.reset()

  } else { // Creo una nueva pelicula
    const nuevaPelicula = {
      nombre,
      imagen,
      estreno,
      resumen,
      generoId: genero
    }

    const response = await createPelicula(nuevaPelicula)

    if (response) {
      const peliculas = await fetchPeliculas()

      renderPeliculas(peliculas)
    }

    peliculaForm.reset()
  }


}