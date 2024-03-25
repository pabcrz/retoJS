import previewData from './modules/update.js'
import validateForm from './modules/validacionform.js'

document.addEventListener('DOMContentLoaded', () => {
  const currentId = new URLSearchParams(location.search).get('post')
  currentId && previewData(currentId)

  const form = document.querySelector('#new-post')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (validateForm()) {
      const users = JSON.parse(localStorage.getItem('users')) ?? []
      const formData = new FormData(form)
      const entries = formData.entries()
      const data = Object.fromEntries(entries)
      data.hashtags = formData.getAll('hashtags')
      data.id = users.length + 1
      users.push(data)
      const jsonString = JSON.stringify(users)
      localStorage.setItem('users', jsonString)
      window.open(location.origin)
    }
  })
})
