document.addEventListener('DOMContentLoaded', ()=> {
  const container = document.querySelector("#principal-card");
  const head = document.createElement("div");
  head.classList.add("head"); // aqui la imagen
  const imagen = document.createElement("img");
  imagen.classList.add("imagenPost");
  imagen.src = "https://picsum.photos/700/400?random=1";

  // Contenido de
  const contentCard = document.createElement('div')
  contentCard.classList.add('content-card')
  const logoImage = document.createElement('div')
  logoImage.classList.add('logo-image')
  const taipyLogo = document.createElement('div')
  taipyLogo.classList.add('taipy-logo')
  const imagenPerfil1 = document.createElement('img')
  const profile = document.createElement('div')
  const imagenPerfil2 = document.createElement('img')

  container.append(head);
  head.append(imagen);
  container.append(contentCard)
  contentCard.append(logoImage)
  logoImage.append(taipyLogo)
  taipyLogo.append(imagenPerfil1)
  logoImage.append(profile)
  profile.append(imagenPerfil2)

  console.log("jolaaaa");
})