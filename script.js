function cadastrar() {
  console.log("tamo indo fera")
}

/*function activeCategoria() {
  const categoria = document.getElementById("categoria")
console.log(categoria)
  categoria.classList.remove('esconder')
}*/

function visualizarImage() {
  const link = document.getElementById("url_image").value
  document.getElementById('previwer_image').style.background = `url('${link}')`
  document.getElementById('previwer_image').style.backgroundSize = `cover`
  document.getElementById('previwer_image').style.opacity = `1`
  document.getElementById('previwer_image').style.height += "120px"
}

function limparImage() {
  document.getElementById('previwer_image').style = ''
}