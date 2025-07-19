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

// EJERCICIO 02 - Renderizar la información de los posts(id, title, body) en la página actual

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    renderPosts(data)
  })
  .catch(error => console.log(error))

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

