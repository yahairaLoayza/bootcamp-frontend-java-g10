let currentPage = 1
let totalCount = 0
const LIMIT = 9

let pokemonFavorites = JSON.parse(localStorage.getItem('pokemon-favorites')) ?? []

const fetchPokemons = async (page=1) => {
  const offset = (page - 1) * LIMIT

  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${LIMIT}`

  const response = await fetch(url) // Devuelve una promesa

  const data = await response.json()

  const dataResults = data.results.map(pokemon => {
    const id = pokemon.url.split('/').at(6)
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    const foundFavorite = pokemonFavorites.find(favorite => favorite.id === id)
    const isFavorite = Boolean(foundFavorite)

    return {
      ...pokemon,
      id,
      name: isFavorite ? foundFavorite.name : pokemon.name,
      image: isFavorite ? foundFavorite.image : image,
      isFavorite
    }
  })

  console.log({ dataResults })

  totalCount = data.count

  return {
    ...data,
    results: dataResults
  }
}

const renderPokemons = (pokemons = []) => {
  // TODO: 01 - Renderizar cada pokemon en #pokemonList
  const pokemonList = document.querySelector('#pokemonList')
  const elCurrentPage = document.querySelector('#currentPage')

  let elements = ''

  pokemons.forEach(pokemon => {
    elements += `
      <article class="pokemon-item">
        <h2>#${pokemon.id} - ${pokemon.name}</h2>
        <img
          src="${pokemon.image}"
          onerror="this.src='https://placehold.co/80x80'"
          width="80"
          height="80"
        />
        <div class="pokemon-item__buttons">
          <button onclick="toggleFavorite('${pokemon.id}','${pokemon.name}','${pokemon.image}')">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-star ${pokemon.isFavorite ? 'is-favorite' : ''}"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
          </button>
          <button onclick="readPokemon('${pokemon.id}')" class=${!pokemon.isFavorite ? 'is-hidden' : ''}>
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-edit"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
          </button>
        </div>
      </article>
    `
  })

  pokemonList.innerHTML = elements

  const totalPages = Math.ceil(totalCount / LIMIT)

  elCurrentPage.textContent = `${currentPage} de ${totalPages}`
}

const toggleFavorite = async (id, name, image) => {
  const foundPokemonFavorite = pokemonFavorites.filter(favorite => favorite.id === id)
  const existPokemonFavorite = foundPokemonFavorite.length > 0
  
  if (existPokemonFavorite) {
    // retiramos el pokemon de favoritos
    pokemonFavorites = pokemonFavorites.filter(pokemon => pokemon.id !== id)
  } else {
    // Almacenamos el pokemon en memoria/localstorage si no existe
    pokemonFavorites.push({ id, name, image })
  }

  localStorage.setItem('pokemon-favorites', JSON.stringify(pokemonFavorites))

  const data = await fetchPokemons(currentPage)

  renderPokemons(data.results)
}

const readPokemon = (pokemonId) => {
  // console.log(pokemonId)
  const pokemonForm = document.forms['pokemonForm']

  const currentPokemons = JSON.parse(localStorage.getItem('pokemon-favorites')) ?? []

  const foundPokemon = currentPokemons.find(favorite => favorite.id === pokemonId)

  console.log(foundPokemon)

  if (foundPokemon) {
    pokemonForm.id.value = foundPokemon.id
    pokemonForm.name.value = foundPokemon.name
    pokemonForm.image.value = foundPokemon.image
  }
}

const elNextPage = document.querySelector('#nextPage')
const elLastPage = document.querySelector('#lastPage')
const elPrevPage = document.querySelector('#prevPage')
const elFirstPage = document.querySelector('#firstPage')
const pokemonForm = document.querySelector('#pokemonForm')

const handleSubmit = async (event) => {
  event.preventDefault();
  
  console.log('Guardando pokemon en LS')

  const pokemonForm = document.forms['pokemonForm']

  const id = pokemonForm.id.value
  const updatedName = pokemonForm.name.value
  const updatedImage = pokemonForm.image.value

  console.log(id, name, image)

  const newPokemons = pokemonFavorites.map(pokemon => {
    if (pokemon.id === id) {
      return {
        id,
        name: updatedName,
        image: updatedImage
      }
    }

    return pokemon
  })

  pokemonFavorites = newPokemons

  localStorage.setItem('pokemon-favorites', JSON.stringify(newPokemons))

  pokemonForm.reset()

  const data = await fetchPokemons(currentPage)

  renderPokemons(data.results)

  currentPage.innerHTML = currentPage
}

pokemonForm.addEventListener('submit', handleSubmit)

elNextPage.addEventListener('click', async (event) => {
  currentPage = currentPage + 1

  console.log({totalCount})

  const totalPages = Math.ceil(totalCount / LIMIT)

  if (currentPage > totalPages) {
    currentPage = totalPages
    return
  }

  const data = await fetchPokemons(currentPage)

  renderPokemons(data.results)
})

elLastPage.addEventListener('click', async (event) => {
  const totalPages = Math.ceil(totalCount / LIMIT)

  currentPage = totalPages

  const data = await fetchPokemons(currentPage)

  renderPokemons(data.results)
})

// TODO: Implementar el botón Previous y el botón first

elPrevPage.addEventListener('click', async (event) => {
  currentPage = currentPage - 1

  if (currentPage <= 0) {
    currentPage = 1
    return
  }

  const data = await fetchPokemons(currentPage)

  renderPokemons(data.results)
})

elFirstPage.addEventListener('click', async (event) => {
  currentPage = 1

  const data = await fetchPokemons(currentPage)

  renderPokemons(data.results)
})


fetchPokemons()
  .then(data => {
    renderPokemons(data.results)
  })