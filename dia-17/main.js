/* -----------seleecionar el elemento-------- */
let botoncito = document.querySelector("#btn");
let parrafo = document.querySelector("#parrafo");
botoncito.addEventListener("click", function () {
  if (botoncito.classList.contains("bg-blue-800")) {
    botoncito.classList.replace("bg-blue-800", "bg-red-800");
  } else {
    botoncito.classList.replace("bg-red-800", "bg-blue-800");
  }
  parrafo.textContent = "funval siempre los mejores";
});
/* 
    crear un elemento un boton si gustan  q represente al dia
    al darle click debera pasar a noche 
    fiona debera pasar ds ser una princesa
    a una ogro

*/
