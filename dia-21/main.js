/* -------------declarar funciones-------------- */

function duplicar() {
  console.log(2 * 2);
}
duplicar();
/* -------------FUNCIONES ANONIMAS---------------- */
const fundup = function (numero) {
  console.log(numero * 2);
};
fundup(7);
/* -----------FUNCIONES FLECHA------------ */
const pepito = (numero) => numero * 3;
let resultado = pepito(6);
console.log(resultado);

//EJEMPLO:
let boton = document.querySelector("#pepe");
boton.addEventListener("click", () => {
  //todo lo q sucedia dentro de la llamada d ela funcion de orden superior
});
//------------------------------------------

function superHero(nombre, callBack) {
  callBack(nombre);
}

/* function historia(nombreHeroe) {
  console.log(`este heroe llamado ${nombreHeroe} nacio en el 
        año 1996 en un pueblito italiano al pie de la montañana`);
}
superHero("marco", historia); */

superHero("Marco", (nombre) => {
  console.log(`este heroe llamado ${nombre} nacio en el 
        año 1996 en un pueblito italiano al pie de la montañana`);
});

/* //EJEMPLO:
let botonsito = document.querySelector("#pepe");

function kevin() {
  console.log("funval");
}
botonsito.addEventListener("click", kevin); */
/* ---------------EJEMPLOS DE METODOS DE ARRAYS DE ORDEN SUPERIOR---------- */
let frutas = ["papaya", "frutilla", "banana", "sandia"];
frutas.forEach((fruta) => {
  console.log(`las frutas q tiene este listado son ${fruta}`);
});
/* -------------------------------------------------------------------------- */
/* 
    crear una funcion de orden superior
    y llamarla 2 veces una ejecutando una funcion ya existente
    y otra creando una funcion de tipo flecha dentro de los parametros de llamada
    de la funcion
*/
