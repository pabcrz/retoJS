import crearPost from './crearPost.js'

const filterFecha = (date, posts) => {
  // const fecha = document.querySelector('#filtro')
  // recorrer posts y buscar elemento que coincida
  const nuevoArray = posts.filter((post) => post.fecha == date)
  return nuevoArray
}

export default (posts) => {
  const calendario = document.querySelector('#filtro')
  calendario.addEventListener('change', () => {
    const principalCard = document.querySelector('#post-cards')
    principalCard.innerHTML = ''
    const date = calendario.value
    const newArray = filterFecha(date, posts)
    const noData = document.getElementById('no-data')
    if (newArray.length == 0) {
      noData.classList.remove('p-nodata')
      console.log('no hay posts')
    } else {
      crearPost(newArray)
      noData.classList.add('p-nodata')
    }
  })
}
