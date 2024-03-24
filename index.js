import update from "./js/modules/update.js"

update()

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-post')
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const users = JSON.parse(localStorage.getItem('users')) ?? []
    const formData = new FormData(form)
    const entries = formData.entries()
    const data = Object.fromEntries(entries)
    data.hashtags = formData.getAll('hashtags')
    data.id = users.length + 1
    users.push(data)
    const jsonString = JSON.stringify(users)
    localStorage.setItem('users', jsonString)
  })
})