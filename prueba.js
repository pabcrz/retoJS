document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('#center-section')
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
  imagenPerfil1.src= 'https://res.cloudinary.com/practicaldev/image/fetch/s--q8gYXd8Q--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/7841/eb7a94b7-7bd9-4097-b7e9-132785adc6db.png'

  // Imagen 2
  const profile = document.createElement('div')
  profile.classList.add('profile')
  const imagenPerfil2 = document.createElement('img')
  imagenPerfil2.src = 'https://res.cloudinary.com/practicaldev/image/fetch/s--ZMDQfkJE--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/1177677/4947a9f8-ba30-4008-9f77-4b08c5b1c901.jpg'

  // Fecha y Autor
  const nameDate = document.createElement('div')
  nameDate.classList.add('name-date')
  const autor = document.createElement('h3')
  autor.classList.add('autor')
  const fecha = document.createElement('p')
  fecha.classList.add('fecha')

  // Titulo, contenido, hastags
  const contentCard2 = document.createElement('div')
  contentCard2.classList.add('content-card2')
  const tituloPost = document.createElement('h3') // titulo
  tituloPost.classList.add('titulo-post')
  const contenidoPost = document.createElement('p') //contenido
  contenidoPost.classList.add('contenido-post')
  const hashtags = document.createElement('div')
  hashtags.classList.add('hashtags')

  // Reacciones
  c

  container.append(head)
  head.append(imagen)
  container.append(contentCard)
  contentCard.append(logoImage)
  logoImage.append(taipyLogo)
  taipyLogo.append(imagenPerfil1)
  logoImage.append(profile)
  profile.append(imagenPerfil2)

  console.log('jolaaaa')
})
