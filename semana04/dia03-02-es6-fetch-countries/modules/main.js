const url = 'https://restcountries.com/v3.1/independent?status=true&fields=name,flags,region,capital,population,languages,currencies,timezones'

let countryData = []

const fetchCountries = async () => {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('ERROR:', response.status)
    }

    return await response.json()
  } catch(error) {
    console.log(error)
  }
}

const renderCountries = (countries = []) => {
  const countryListElement = document.querySelector('.app__list')

  let countryList = ''

  countries.forEach(country => {
    countryList += `
      <div class="country">
        <img class="country__flag" src="${country.flags.png}" alt="${country.flags.alt}" />
        <div class="country__wrapper">
          <h2 class="country__title">${country.name.common}</h2>
          <div class="country__description">
            <strong>Population:</strong> ${country.population}
          </div>
          <div class="country__description">
            <strong>Region:</strong> ${country.region}
          </div>
          <div class="country__description">
            <strong>Capital:</strong> ${country.capital.join(', ')}
          </div>
        </div>
      </div>
    `
  })

  countryListElement.innerHTML = countryList
}

export const renderResults = (countriesFiltered) => {
  const resultsDiv = document.querySelector('.app__results')

  const total = countriesFiltered.length

  resultsDiv.textContent = `${total} Countries Filtered`
}

// TODO: Necesitamos hacer busquedas por capital, nombre de pais. Y además necesitamos filtrar los paises por su region usando el select 'Filter by Region'.

const searchInput = document.querySelector('.app__input')
const filterSelect = document.querySelector('.app__filter')

searchInput.addEventListener('input', (event) => {
  // Acceder a lo que se escribe en la caja
  const { value } = event.target
  const loweredValue = value.toLowerCase()

  // Filtramos los datos de los paises
  const filteredCountries = countryData.filter(country => {
    const loweredName = country.name.common.toLowerCase()

    // TODO: Adicionalmente necesitamos filtrar los paises por su capital
    const joinedCapitals = country.capital.join(',') // Une todos los elementos de un arreglo en una cadena de texto
    const loweredCapitals = joinedCapitals.toLowerCase()

    return loweredName.includes(loweredValue) || loweredCapitals.includes(loweredValue)

  })

  // Renderizamos
  renderCountries(filteredCountries)
  renderResults(filteredCountries)
})

filterSelect.addEventListener('input', (event) => {
  const value = event.target.value
  const loweredValue = value.toLowerCase()

  const filteredCountriesByRegion = countryData.filter(
    country => {
      const loweredRegion = country.region.toLowerCase()
      
      return loweredRegion.includes(loweredValue)
    }
  )

  renderCountries(filteredCountriesByRegion)
  renderResults(filteredCountriesByRegion)
})

fetchCountries()
  .then(data => {
    countryData = data

    renderCountries(data)
  })