export const fetchPeliculas = async () => {
  const url = 'http://localhost:3000/peliculas'

  const reponse = await fetch(url) // Por defecto está usando el método GET

  return await reponse.json() // Tranformamos el json a un objeto JS
}

export const createPelicula = async (form) => {
  const url = 'http://localhost:3000/peliculas'

  console.log({form})

  const options = {
    method: 'POST', // nos permite crear un nuevo registro
    headers: {
      'Content-type': 'application/json' // MIMETYPES
    },
    body: JSON.stringify(form)
  }

  const response = await fetch(url, options)

  return await response.json()
}

// TODO: terminar la funcionalidad de eliminación de películas

export const deletePelicula = async (id) => {
  const url = `http://localhost:3000/peliculas/${id}`

  const options = {
    method: 'DELETE'
  }

  const response = await fetch(url, options)

  return await response.json()
}

export const getPelicula = async (id) => {
  const url = `http://localhost:3000/peliculas/${id}`

  const reponse = await fetch(url) // Por defecto está usando el método GET

  return await reponse.json() // Transformamos el json a un objeto JS
}

export const editPelicula = async (id, form) => {
  const url = `http://localhost:3000/peliculas/${id}`

  const options = {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json' // MIMETYPES
    },
    body: JSON.stringify(form)
  }

  const reponse = await fetch(url, options)

  return await reponse.json() // Transformamos el json a un objeto JS
}