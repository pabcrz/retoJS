import updateBoton from "./updateBtn.js"
const crearHashtags = (array, padre) => {
  //recibir array
  //recorrer foreach
  //por cada elemento crea un span y hace un append su contenedor padre
  array.forEach((element) => {
    const span = document.createElement('span')
    span.textContent = element
    padre.append(span)
  })
}

const deletePost = (id, posts, btnDelete) => {
  btnDelete.addEventListener('click', () => {
    //eliminar el objeto
    //buscar posicion del objeto en posts con el id
    // recorrer el array buscando la propiedad id en cada elemento
    // si id coincide con id
    // recibo posicion
    // eliminar esa posicion del array
    const position = posts.findIndex((element) => element.id == id)
    posts.splice(position, 1)
    console.log(posts)
    localStorage.setItem('users', JSON.stringify(posts))
    location.reload()
  })
}

export default (arrayPosts) => {
  arrayPosts.forEach((post) => {
    // recibo un array
    // recorro el array para acceder a cada post
    // cada post es un objeto, puedo acceder a cada atributo
    // cada valor del atributo lo pinto en el DOM
    const container = document.getElementById('post-cards')
    const card = document.createElement('div')
    card.classList.add('principal-card')
    const head = document.createElement('div')
    head.classList.add('head') // aqui la imagen
    const imagenPost = document.createElement('img')
    imagenPost.classList.add('imagen-post')
    imagenPost.src = 'https://picsum.photos/700/400?random=1' // revisar esta linea.

    // Contenido 1
    const contentCard1 = document.createElement('div')
    contentCard1.classList.add('content-card')
    const logoImage = document.createElement('div')

    //imagenes
    logoImage.classList.add('logo-image')

    // Imagen 1
    const taipyLogo = document.createElement('div')
    taipyLogo.classList.add('taipy-logo')
    const imagenPerfil1 = document.createElement('img')
    imagenPerfil1.src =
      'https://res.cloudinary.com/practicaldev/image/fetch/s--q8gYXd8Q--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/7841/eb7a94b7-7bd9-4097-b7e9-132785adc6db.png'

    // Imagen 2
    const profile = document.createElement('div')
    profile.classList.add('profile')
    const imagenPerfil2 = document.createElement('img')
    imagenPerfil2.src =
      'https://res.cloudinary.com/practicaldev/image/fetch/s--ZMDQfkJE--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1177677/4947a9f8-ba30-4008-9f77-4b08c5b1c901.jpg'

    // Fecha y Autor
    const nameDate = document.createElement('div')
    nameDate.classList.add('name-date')
    const autor = document.createElement('h4')
    autor.classList.add('autor')
    autor.textContent = post.autor
    const fecha = document.createElement('p')
    fecha.classList.add('fecha')
    fecha.textContent = post.fecha

    // Titulo, contenido, hastags
    const contentCard2 = document.createElement('div')
    contentCard2.classList.add('content-card2')
    const tituloPost = document.createElement('h3') // titulo
    tituloPost.classList.add('titulo-post')
    tituloPost.textContent = post.titulo
    const contenidoPost = document.createElement('p') //contenido
    contenidoPost.classList.add('contenido-post')
    contenidoPost.textContent = post.contenido
    const hashtags = document.createElement('div')
    hashtags.classList.add('hashtags')
    crearHashtags(post.hashtags, hashtags)

    // Reacciones
    const reactions = document.createElement('div')
    reactions.classList.add('reactions')
    const emojis = document.createElement('div')
    emojis.classList.add('emojis-reaction')
    const emojiFire = document.createElement('img')
    emojiFire.src =
      'https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg'
    const emojiHands = document.createElement('img')
    emojiHands.src =
      'https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg'
    const emojiExplote = document.createElement('img')
    emojiExplote.src =
      'https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg'
    const emojiUnicorn = document.createElement('img')
    emojiUnicorn.src =
      'https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg'
    const emojiHeart = document.createElement('img')
    emojiHeart.src =
      'https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg'
    const reactionPost = document.createElement('span')
    reactionPost.classList.add('reaction-post')
    reactionPost.textContent = post.reacciones + ' reacciones'
    const commentsPost = document.createElement('span')
    commentsPost.classList.add('comments-post')
    commentsPost.textContent =  post.comentarios + ' comentarios'

    // Update Delete
    const deleteUpdate = document.createElement('div')
    deleteUpdate.classList.add('delete-update')
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('button-delete')
    deleteBtn.textContent = 'Delete'
    deletePost(post.id, arrayPosts, deleteBtn)
    const updateBtn = document.createElement('button')
    updateBtn.classList.add('button-update')
    updateBtn.textContent = 'Update'
    updateBoton(post.id, updateBtn)
    //head
    container.append(card)
    card.append(head)
    head.append(imagenPost)

    //content card1
    card.append(contentCard1)
    contentCard1.append(logoImage)
    logoImage.append(taipyLogo)
    taipyLogo.append(imagenPerfil1)
    logoImage.append(profile)
    profile.append(imagenPerfil2)
    contentCard1.append(nameDate)
    nameDate.append(autor)
    nameDate.append(fecha)

    // content card2
    card.append(contentCard2)
    contentCard2.append(tituloPost)
    contentCard2.append(contenidoPost)
    contentCard2.append(hashtags)
    // crearHashtags()

    card.append(reactions)
    reactions.append(emojis)
    emojis.append(emojiFire)
    emojis.append(emojiHands)
    emojis.append(emojiExplote)
    emojis.append(emojiUnicorn)
    emojis.append(emojiHeart)
    emojis.append(reactionPost)
    emojis.append(commentsPost)

    reactions.append(deleteUpdate)
    deleteUpdate.append(deleteBtn)
    deleteUpdate.append(updateBtn)
  })
}
