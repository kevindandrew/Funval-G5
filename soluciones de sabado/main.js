import { habilidades } from "./habilidades.js";
let lista = document.querySelector(".habilidad");

for (let index = 0; index < habilidades.length; index++) {
  lista.innerHTML += `<li>nombre de la habilidad:${habilidades[index].nombre} nivel de la habilidad:${habilidades[index].nivel}
  <img src="${habilidades[index].img}" alt=""></li>`;
}

/* Swal.fire({
  title: "Drag me!",
  icon: "success",
  draggable: true,
});
 */
