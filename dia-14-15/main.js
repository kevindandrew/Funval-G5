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

function promedio(arrayNotas) {
  let prom = 0;
  for (let index = 0; index < arrayNotas.length; index++) {
    prom = prom + arrayNotas[index];
    console.log(arrayNotas[index]);
  }
  prom = prom / arrayNotas.length;
  if (prom >= 51) {
    return true;
  } else {
    return false;
  }
}

console.log(promedio(notasEstudiante));

/* ---------------------OBJETOS--------------------- */

let estudiantes = {
  nombre: "Kevin",
  edad: 28,
  pais: "Boliva",
  SUD: true,
};
/* acceder a los valores atraves de sus llaves */
console.log(estudiantes.pais);
/* ------agregar pares llaves valor-------- */
estudiantes.genero = "Masculino";
/* ---------eliminar pares de llave valor */
delete estudiantes.pais;
console.log(estudiantes);

/* 
quiero q vean un objeto del mundo real
y lo puedan codigicar en un objeto manipulable
acceder a almenos 2 valores atraves de sus llaves
agregar almenos 2 pares de llave valor y 
eliminar 1 ya existente 
*/

/***********************
 * EJERCICIOS DE ARRAYS (5)
 ***********************/

// 1. Invertir un array
// Crea una función que reciba un array de números y devuelva un nuevo array con los elementos en orden inverso.

// 2. Suma de elementos
// Escribe un programa que recorra un array de números y calcule la suma total sin usar reduce. XXX

// 3. Filtrar números pares
// A partir de un array de enteros, genera un nuevo array solo con los números pares.

// 4. Buscar el mayor y el menor
// Dado un array de números, encuentra el número más grande y el más pequeño sin usar Math.max ni Math.min.

// 5. Eliminar duplicados
// Escribe una función que elimine los elementos repetidos de un array y devuelva uno nuevo sin duplicados.

/***********************
 * EJERCICIOS DE OBJETOS (5)
 ***********************/

// 6. Contar propiedades
// Crea un objeto con varias propiedades y escribe una función que cuente cuántas propiedades tiene.

// 7. Invertir un objeto
// Convierte un objeto {a: 1, b: 2, c: 3} en {1: "a", 2: "b", 3: "c"}.

// 8. Fusionar objetos
// Escribe una función que reciba dos objetos y los combine en uno solo (sin usar Object.assign ni spread operator).

// 9. Verificar existencia de propiedad
// Escribe una función que verifique si un objeto contiene una propiedad específica (ej. "nombre").

// 10. Contar ocurrencias de valores
// Dado un objeto con varios valores, cuenta cuántas veces aparece cada valor.

/*****************************
 * EJERCICIOS CON ARRAYS DE OBJETOS (5)
 *****************************/

// 11. Lista de estudiantes
// Tienes un array de objetos con {nombre, edad}.
// Crea una función que devuelva solo los nombres de los mayores de edad.

// 12. Buscar objeto por propiedad
// Dado un array de objetos {id, producto}, escribe una función que encuentre el producto por un id dado.

// 13. Ordenar objetos
// Dado un array de objetos {nombre, nota}, ordénalos de mayor a menor según la nota.

// 14. Promedio de valores
// Dado un array de objetos {nombre, precio}, calcula el precio promedio de todos los productos.

// 15. Agrupar por propiedad
// Dado un array de objetos {nombre, categoria},
// agrupa los nombres en un objeto según su categoría.
// Ejemplo:
// [{nombre:"Pera", categoria:"Fruta"}, {nombre:"Zanahoria", categoria:"Verdura"}]
// Resultado: {Fruta:["Pera"], Verdura:["Zanahoria"]}

/*****************************
 * EJERCICIOS DE OBJETOS CON ARRAYS (5)
 *****************************/

// 16. Acceder a un elemento anidado
// Tienes un objeto con un array dentro.
// let persona = {nombre:"Ana", hobbies:["leer","bailar","correr"]};
// Escribe una función que muestre el segundo hobby.

// 17. Contar elementos dentro de arrays en objetos
// Dado un objeto con propiedades que son arrays,
// cuenta el número total de elementos.
// let datos = {numeros:[1,2,3], letras:["a","b"]}; // total = 5

// 18. Agregar un elemento al array interno
// Dado un objeto con un array, agrega un nuevo elemento al array sin modificar el original.

// 19. Buscar dentro de arrays en objetos
// let tienda = {frutas:["pera","manzana"], verduras:["zanahoria","lechuga"]};
// Crea una función que diga si un producto existe en alguna categoría.

// 20. Fusionar arrays de varios objetos
// Dado un array de objetos, cada uno con una propiedad items que es un array,
// crea un solo array con todos los items juntos.
// Ejemplo:
// let carritos = [
//   {items:["pan","leche"]},
//   {items:["arroz","pollo"]}
// ];
// Resultado: ["pan","leche","arroz","pollo"]

/* ------------------------------------------
// 7. Invertir un objeto
// Convierte un objeto {a: 1, b: 2, c: 3} en {1: "a", 2: "b", 3: "c"}.
*/

/* let obj = {
  a: 1,
  b: 2,
  c: 3,
};

let var1 = obj.a;
let var2 = obj.b;
let var3 = obj.c; */
/* NO PODEMOS ASIGNAR VALORES NUMERICOS COMO LLAVES */

// 11. Lista de estudiantes
// Tienes un array de objetos con {nombre, edad}.
// Crea una función que devuelva solo los nombres de los mayores de edad.

let est = [
  {
    nombre: "Jesus",
    edad: 23,
  },
  {
    nombre: "Mario",
    edad: 35,
  },
  {
    nombre: "Santiago",
    edad: 30,
  },
  {
    nombre: "Geraldine",
    edad: 26,
  },
  {
    nombre: "juanito",
    edad: 10,
  },
  {
    nombre: "cleto",
    edad: 12,
  },
];

function mayores(pepito) {
  let arrayVcio = [];
  for (let index = 0; index < pepito.length; index++) {
    if (pepito[index].edad >= 18) {
      arrayVcio.push(pepito[index].nombre);
    }
  }
  return arrayVcio;
}

console.log(mayores(est));
