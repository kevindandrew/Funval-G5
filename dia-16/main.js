/* --------------MANIPULACION DEL DOM------------- */
/* ----------SELECION DE ELEMENTOS---------------- */
//Selecionar un elemento por su ID
let title = document.getElementById("titulo");
// Selecion elementos por su clase
let items = document.getElementsByClassName("super-titulo");
//selecionar elementois por su etiqueta
let parrafo = document.getElementsByTagName("p");
//Selecionar al primer elemento q encuentre q coincida
let elemento = document.querySelector("p");
//Selecionar a un conjunto de elementos q coincidan con la busqueda
let grupo = document.querySelectorAll(".super-titulo");
/* ------------------MODIFICAR EL CONTENIDO DEL ELEMENTO SELECIONADO---------------- */
let listaEstudiantes = ["kevin", "santiago", "luis"];
let tituloGrande = document.querySelector("#titulo");
tituloGrande.textContent = "Hola buenos dias :D";
let contenedor = document.querySelector(".pepito");
for (let index = 0; index < listaEstudiantes.length; index++) {
  contenedor.innerHTML += `<h2>hola amigo ${listaEstudiantes[index]}</h2>`;
}
/* ------------------PODEMOS MODIFICAR ESTILOS Y CLASES DE UN ELEMENTO SELECIONADO------------ */
//contenedor.style.backgroundColor = "red";
//contenedor.style.fontSize = "10px";
contenedor.classList.add("pedro");
contenedor.classList.remove("pepito");
contenedor.classList.toggle("juan");
contenedor.classList.add("bg-blue-700");
contenedor.classList.add("text-2xl", "font-bold", "text-red-500");
