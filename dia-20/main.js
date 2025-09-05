import * as pepito from "./funciones.js";
import { n1, n2, n3, listaFrutas } from "./variables.js";

let numero = 1;

console.log(pepito.duplicar(numero));
console.log(pepito.restar(numero));
console.log(pepito.duplicar(n1));
console.log(pepito.restar(n1));
console.log(pepito.duplicar(n2));
console.log(pepito.restar(n2));
console.log(pepito.duplicar(n3));
console.log(pepito.restar(n3));
pepito.saludar();

console.log(listaFrutas);
let papa = document.querySelector("#lista");
pepito.renderizar(papa, listaFrutas);
/* -----------------------------LOCAL STORAGE------------- */
//GUARDAR VALORES EN LOCAL STORAGE
localStorage.setItem("superhero", "capitan america");
//LEER VALORES DE LOCAL STORAGE
console.log(localStorage.getItem("superhero"));
//Eliminar un item
//localStorage.removeItem("productos");
//limpiar todo el localstorage
//localStorage.clear();
if (localStorage.getItem("superhero") === "Spiderman") {
  console.log("aplicar dark mode");
} else {
  console.log("aplicar ligth mode");
}
/* ------------------COMO GUARDAMOS ESTRUCTURAS DE DATOS MAS COMPLEJAS----------- */
let obj = {
  nombre: "kevi",
  edad: 21,
};
localStorage.setItem("prueba", JSON.stringify(obj));
let objetoTransformado = JSON.parse(localStorage.getItem("prueba"));
console.log(objetoTransformado);
//console.log(typeof localStorage.getItem("prueba"));
/* 
    guardar en local storage un array de 
    fanaticos =[{grupo:"BTS",años:2},{grupo:"Real madrid",años:5},{grupo:"kny",años:15}]
    y deberan traerlo y actualizarlo agregando un fanatico mas {grupo:"dota 2",años:5}
    y devolverlo al local storage
*/
