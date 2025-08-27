/* --------DECLRAR FUNCIONES--------- */
/* funcion q no recibe ni retorna ningun valor */
function mostrarSaludo() {
  console.log("Hola mundo");
}
mostrarSaludo();
/* FUNCION Q SI RECIBE UN VALOR PERO NO RETORNA NADA */
function mostrarNombre(nombre) {
  console.log(nombre + " como estas?");
}

mostrarNombre("Kevin");
mostrarNombre("Pedro");
mostrarNombre("Roberto");
/* Funcion q no recibe ningun valor pero retorna un valor */
function devolverPrimo() {
  return 7;
}
let apellido = devolverPrimo() * 2;
console.log(apellido);
/* FUNCION Q RECIBE UN VALOR Y RETORNA UN VALOR */
function duplicar(numero) {
  return numero * 2;
}
console.log(duplicar(7) * 3);
console.log(duplicar(9));
console.log(duplicar(34));
console.log(duplicar(-2));
