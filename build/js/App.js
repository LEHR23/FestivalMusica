function iniciarApp(){crearGaleria(),scrollNav()}function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let n=1;n<=12;n++){const t=document.createElement("picture");t.innerHTML=`<source srcset="build/img/thumb/${n}.avif" type="image/avif" />\n    <source srcset="build/img/thumb/${n}.webp" type="image/webp" />\n    <img\n      loading="lazy"\n      src="build/img/thumb/${n}.jpg"\n      alt="Imagen galería"\n    />`,t.onclick=function(){mostrarImagen(n)},e.appendChild(t)}}function mostrarImagen(e){const n=document.createElement("picture");n.innerHTML=`<source srcset="build/img/grande/${e}.avif" type="image/avif" />\n    <source srcset="build/img/grande/${e}.webp" type="image/webp" />\n    <img\n      loading="lazy"\n      src="build/img/grande/${e}.jpg"\n      alt="Imagen galería"\n    />`;const t=document.createElement("div");t.appendChild(n),t.classList.add("overlay"),t.onclick=function(){t.remove();document.querySelector("body").classList.remove("fijar-body")};const a=document.createElement("p");a.textContent="X",a.classList.add("btn-cerrar"),a.onclick=function(){t.remove();document.querySelector("body").classList.remove("fijar-body")},t.appendChild(a);const c=document.querySelector("body");c.appendChild(t),c.classList.add("fijar-body")}function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach(e=>{e.addEventListener("click",e=>{e.preventDefault();const n=e.target.attributes.href.value;document.querySelector(n).scrollIntoView({behavior:"smooth"})})})}document.addEventListener("DOMContentLoaded",(function(){iniciarApp()}));