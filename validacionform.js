export default function validateForm() {
  let titulo = document.getElementsByName('titulo')[0].value
  let nombre = document.getElementsByName('autor')[0].value
  let contenido = document.getElementsByName('contenido')[0].value
  let hashtags = document.getElementsByName('hashtags')[0].value
  let fecha = document.getElementsByName('fecha')[0].value
  let reacciones = document.getElementsByName('reacciones')[0].value
  let Comentarios = document.getElementsByName('comentarios')[0].value
  let imagen = document.getElementsByName('imagen')[0].value

  console.log(titulo)

  if (titulo == '') {
    alert('El campo titulo es requerido, ingresalo, por favor')
    return false
  }

  if (nombre == '') {
    alert('El campo autor es requerido, ingresalo, por favor')
    return false
  }

  if (contenido == '') {
    alert('Debes ingresar contenido.')
    return false
  }

  if (hashtags == '') {
    alert('Debes por lo menos ingresar un hashtags')
    return false
  }

  if (fecha == '') {
    alert('Debes seleccionar la fecha')
    return false
  }

  if (reacciones == '') {
    alert('Debes seleccionar la Reacciones')
    return false
  }

  if (Comentarios == '') {
    alert('Vamos no seas huevon, ingresa comentarios')
    return false
  }

  if (imagen == '') {
    alert('Selecciona la imagen que quieras')
    return false
  } else if (!imagen.includes('https:')) {
    alert('Debes ingresar una url de la web')
    return false
  } else return true
}
