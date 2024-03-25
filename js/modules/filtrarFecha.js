import crearPost from "./crearPost.js"

const filterFecha = (date, posts) => {
  // const fecha = document.querySelector('#filtro')
  // recorrer posts y buscar elemento que coincida
  const nuevoArray = posts.filter((post) => post.fecha == date)
  return nuevoArray
}

export default (posts) => {
  const calendario = document.querySelector('#filtro')
  let noEncontro = 0
  calendario.addEventListener('change', () => {
    const date = calendario.value
    const newArray = filterFecha(date, posts)
    if (newArray.length == 0) {
      if (noEncontro == 0) {
        const noData = document.createElement('p')
        noData.id = 'no-data'
        noData.textContent = 'No se encontraron Post con la fecha seleccionada'
        const postCards = document.getElementById('post-cards')
        postCards.prepend(noData)
        noEncontro++
      }
      console.log('no hay posts')
    } else {
      const principalCard = document.querySelector('#post-cards')
      principalCard.innerHTML = ''
      crearPost(newArray)
    }
  })
}
