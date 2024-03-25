import crearPost from './js/modules/crearPost.js'

const filterFecha = (date, posts) => {
  const fecha = document.querySelector('#filtro')
  // recorrer posts y buscar elemento que coincida
  const nuevoArray = posts.filter((post) => post.fecha == date)
  return nuevoArray
}

document.addEventListener('DOMContentLoaded', () => {
  const posts = JSON.parse(localStorage.getItem('users'))
  crearPost(posts)

  const calendario = document.querySelector('#filtro')
  calendario.addEventListener('change', () => {
    const date = calendario.value
    const newArray = filterFecha(date, posts)
    if (newArray.length == 0) {
      document.getElementById('no-data').hidden = false
      console.log('no data')
    } else {
      const principalCard = document.querySelector('#post-cards')
      principalCard.innerHTML = ''
      crearPost(newArray)
    }
  })
})
