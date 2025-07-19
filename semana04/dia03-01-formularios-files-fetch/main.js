const form = document.getElementById('myForm')
const results = document.getElementById('results')
const previewPhoto = document.getElementById('previewPhoto')

form.addEventListener('submit', async (event) => {
  event.preventDefault()

  console.log('Enviando formulario..')

  const photoFile = form.photo.files[0]
  const documentsFile = form.documents.files

  const fullName = form.fullName.value
  const photo = photoFile
  const documents = documentsFile

  const formData = new FormData()
  formData.append('fullName', fullName)
  formData.append('photo', photo)

  try {
    const response = await fetch(
      'https://httpbin.org/post',
      {
        method: 'POST',
        body: formData
      }
    )

    const result = await response.json()

    console.log(result)

    results.textContent = JSON.stringify({
      form: result.form,
      files: result.files
    }, null, 2)

    previewPhoto.src = result.files.photo
  } catch(error) {
    console.log(error)
  }
})