document.addEventListener('DOMContentLoaded', function () {
  iniciarApp()
})

function iniciarApp() {
  crearGaleria()
}

function crearGaleria() {
  const galeria = document.querySelector('.galeria-imagenes')

  for (let i = 1; i <= 12; i++) {
    const imagen = document.createElement('picture')
    imagen.innerHTML = `<source srcset="build/img/thumb/${i}.avif" type="image/avif" />
    <source srcset="build/img/thumb/${i}.webp" type="image/webp" />
    <img
      loading="lazy"
      src="build/img/thumb/${i}.jpg"
      alt="Imagen galería"
    />`
    imagen.onclick = function () {
      mostrarImagen(i)
    }
    galeria.appendChild(imagen)
  }
}

function mostrarImagen(imagen) {
  const picture = document.createElement('picture')
  picture.innerHTML = `<source srcset="build/img/grande/${imagen}.avif" type="image/avif" />
    <source srcset="build/img/grande/${imagen}.webp" type="image/webp" />
    <img
      loading="lazy"
      src="build/img/grande/${imagen}.jpg"
      alt="Imagen galería"
    />`

  const overlay = document.createElement('div')
  overlay.appendChild(picture)
  overlay.classList.add('overlay')
  overlay.onclick = function () {
    overlay.remove()
    const body = document.querySelector('body')
    body.classList.remove('fijar-body')
  }

  const cerrarModal = document.createElement('p')
  cerrarModal.textContent = 'X'
  cerrarModal.classList.add('btn-cerrar')
  cerrarModal.onclick = function () {
    overlay.remove()
    const body = document.querySelector('body')
    body.classList.remove('fijar-body')
  }
  overlay.appendChild(cerrarModal)

  const body = document.querySelector('body')
  body.appendChild(overlay)
  body.classList.add('fijar-body')
}