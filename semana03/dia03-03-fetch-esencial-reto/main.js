const url = 'https://dragonball-api.com/api/characters'

const renderCharacters = (characters = []) => {
  const divApp = document.querySelector('#app')

  let charactersList = ''

  characters.forEach(character => {
    charactersList += `
      <div>
        <h2>${character.id} - ${character.name}</h2>
        <img src="${character.image}" width="100" />
      </div>
    `
  })

  divApp.innerHTML = charactersList
}

fetch(url)
  .then(response => response.json())
  .then(data => {
    renderCharacters(data.items)
  })