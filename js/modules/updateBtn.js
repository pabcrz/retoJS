export default (id, btnUpdate) => {
  btnUpdate.addEventListener('click', () => {
    window.open(location.origin + '/form.html?post=' + id)
  })
  // recibe post.id
  // manda el id por url
  // http://127.0.0.1:5500/form.html?post=n
}