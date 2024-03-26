import crearPost from './js/modules/crearPost.js'
import filtrarFecha from './js/modules/filtrarFecha.js'

document.addEventListener('DOMContentLoaded', () => {
  const posts = JSON.parse(localStorage.getItem('users'))

  crearPost(posts)
  filtrarFecha(posts)
})
