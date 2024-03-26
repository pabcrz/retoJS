function update(data, info, newdata) {
  data[info.index] = newdata

  localStorage.setItem('users', JSON.stringify(data))
}

export default function previewData(currentId) {
  //Validar el id
  const data = JSON.parse(localStorage.getItem('users'))

  if (!data) false

  const info = data.reduce(
    (accum, element, indx) =>
      element.id == currentId ? { index: indx, post: element } : accum,
    false
  )

  if (info) {
    //Activar el boton de update
    document.getElementById('btnPost').hidden = true
    const btn = document.getElementById('btnUpdate')
    btn.hidden = false

    //Rellenar los inputs con los valores
    const { id, ...newObject } = info.post
    // delete info.post.id

    Object.keys(newObject).forEach((prop) => {
      if (prop === 'hashtags') {
        info.post[prop].forEach(
          (hashtag) => (document.getElementById(hashtag).checked = true)
        )
      } else {
        document.getElementsByName(prop)[0].value = info.post[prop]
      }
    })

    //Mandar a llamar a update

    btn.addEventListener('click', (event) => {
      event.preventDefault()

      const form = document.querySelector('#new-post')
      const formData = new FormData(form)

      const newdata = Object.fromEntries(formData.entries())
      newdata.hashtags = formData.getAll('hashtags')

      update(data, info, { ...newdata, id: info.post.id })

      window.open(location.origin)
    })
  }
}
