// console.log('JS1')

// OBJETIVO: Realizar peticiones HTTP asíncronas mediante el API fetch usando promesas.

// EJERCICIO 01: Obtener información en formato JSOn desde una URL

// 01 - Devuelve una promesa (Objeto Promise)
// fetch('https://jsonplaceholder.typicode.com/posts')
//    Necesitamos averiguar si llegó una respuesta correcta o un error
//    usamos .then para procesar la respuesta correcta.
//   .then(response => response.json()) // Convertimos la respuesta a un objeto de JS
//   .then(data => {
//     console.log(data) // Aquí podemos usar el objeto JS
//   })
//   usamosa .catch para recibir cualquier error inesperado
//   .catch(error => console.log(error))

// Renderizar la información de los posts(id, title, body) en la página actual

// fetch('https://jsonplaceholder.typicode.com/posts') // Devuelve una promesa (Objeto Promise)
//   usamos .then para procesar la respuesta correcta
//   .then(response => response.json()) // Convertimos la respuesta a un objeto JS
//   .then(data => {
//     renderPosts(data) // Usamos el objeto JS
//   })
//   Usamos .catch para recibir cualquier error inesperado
//   .catch(error => console.log(error))

const url = 'https://jsonplaceholder.typicode.com/posts'

const fetchPostsSinRetorno = async () => { // Retorna una promesa (Promise)
  const response = await fetch(url)

  const json = await response.json()

  console.log(json)
}

const fetchPostsConRetorno = async () => { // Retorna una promesa (Promise)
  const response = await fetch(url)

  return await response.json()
}

const fetchPostsConManejoDeErrores = async () => {
  try {
    const response = await fetch(url)

    // if(response.status !== 200) {
    if(!response.ok) { // ok === STATUS CODE 200
      console.log('Tuvimos problemas para cargar el recurso posts')
      throw new Error('ERROR HTTP:', response.status)
    }
    
    return await response.json()
  } catch(error) {
    console.log('[CATCH_ERROR]', error)
  }
}

const renderPosts = (posts = []) => {
  const divApp = document.querySelector('#app')

  let postList = ''

  posts.forEach(post => {
    postList += `
      <div>
        <h2>${post.id} - ${post.title}</h2>
        <p>${post.body}</p>
      </div>
    `
  })

  divApp.innerHTML = postList
}

// fetchPostsSinRetorno()

console.log(fetchPostsConRetorno()) // Promise {<pending>}

fetchPostsConRetorno()
  .then(posts => renderPosts(posts))
  .catch(error => console.log(error))
  .finally(() => console.log('Se ejecuta siempre después de la petición'))

fetchPostsConManejoDeErrores()