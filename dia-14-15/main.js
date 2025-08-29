/* -------------------------DECLARAR Y CREAR ARRAYS-------------- */
let estudiantesFunval = [
  "Pedro",
  "Jesus",
  "nefi",
  "Luis",
  28,
  true,
  123345678n,
  "Mario",
];
const notas = [12, 23, 34, 45, 56, 67, 78, 89];
/* ----------------METODOS PRINCIPALES DE ARRAYS------------ */
console.log(estudiantesFunval.length); //verifica la cantidad de elementos q tiene un array
estudiantesFunval.push("Santiago"); //agregar elementos al final de la lista
estudiantesFunval.unshift("David"); //agregar elementos al principio de la lista
let ultimoElemento = estudiantesFunval.pop(); //eliminar el ultimo elemento de la lista
let primerELemento = estudiantesFunval.shift(); //eliminar el primer elemento de la lista
/* -----------------ITERAR UN ARRAY IMPORTANTISIMO!!!!!----------- */
for (let index = 0; index < estudiantesFunval.length; index++) {
  console.log(estudiantesFunval[index]);
}
/* verificar si en el Array se encuentran los hermanos Luis y Santiago mostrar el indice donde se encuentran */
let estudiantesFunval1 = [
  "Pedro",
  "David",
  "Nefi",
  "Santiago",
  "Roberto",
  "Luis",
  "Mario",
];
let swchSantiago = false;
let swchLuis = false;
for (let index = 0; index < estudiantesFunval1.length; index++) {
  if (estudiantesFunval1[index] === "Santiago") {
    console.log(
      "si santiago si se encuentra en la lista en la posicion" + index
    );
    swchSantiago = true;
  }
  if (estudiantesFunval1[index] === "Luis") {
    console.log("si Luis si se encuentra en la lista en la posicion" + index);
    swchLuis = true;
  }
}

if (!swchSantiago) {
  console.log("santiago no se encuentra en la lista");
}
if (!swchLuis) {
  console.log("Luis no se encuentra en la lista");
}
/* se le dara un array de notas de un estudiante debera sacar el promedio de nuestro estudiante y verificar 
    si esta aprobado o reprobado la nota minima de aprobacion es de 51
*/

let notasEstudiante = [65, 44, 90, 10, 51, 0]; //METODO REDUCE
