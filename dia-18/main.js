/* -----------CONDICIONALES---------------- */
/* 
    if(condicion){
    el codigo q se ejecutara si la condicion es verdadera    
    }else{
    el codigo q se ejecutara si la condicion es falsa    
    }
*/
let edad = 10;

if (edad >= 18) {
  console.log("eres mayor de edad");
} else {
  console.log("eres menor de edad");
}
/* 
    evaluar si una persona pertenece a la 
    3era edad es cuando su edad 
    es mayor a 65 años
*/
/* 
    if(condicion){
    el codigo q se ejecutara si la condicion es verdadera
        if(condicion){
            el codigo q se ejecutara si la condicion es verdadera
        }    
    }else{
    el codigo q se ejecutara si la condicion es falsa
        if(condicion){
            el codigo q se ejecutara si la condicion es verdadera
        }    
    }
*/
// verificar si un numero es positivo negativo o es 0
let numero = 0;

if (numero >= 0) {
  if (numero === 0) {
    console.log("eres 0");
  } else {
    console.log("eres un numero positivo");
  }
} else {
  console.log("eres un numero negativo");
}

/* 
    vamos a preguntar a una persona si es mayor de edad
    luego vamos a pregunar si esa persona pertenece a la 3era edad}
    si es menor de edad solo lo sacamos
    si es mayor de edad le damos la bienvenida
    si es de la tercera edad le damos un descuento
*/
/* ----------------bucles---------------- */
/* 
    for(let i=1;i<=10;i++){
    
    }

*/
let par = 2;
for (let kevin = 1; kevin <= 10; kevin++) {
  console.log(par);
  par += 2;
}
/* 
let array = ["edmun", "jesus"];
for (let index = 0; index < array.length; index++) {
  const element = array[index];
} */
/* 
    crear el factorial de  un numero cualquiera usando el bucle for
    5!=1*2*3*4*5 =120
*/
/* ---------------------ARRAYS--------------------- */
let arrayBolivanos = ["waskar", "Cleto", "Pepe"];
console.log(arrayBolivanos);
for (let index = 0; index < arrayBolivanos.length; index++) {
  console.log(arrayBolivanos[index]);
}
/* 
   let frutas =["manzana","pera","banana","frutilla"] 
   esta es la colecion de frutas q tiene una casera q venda jugos
   llega un cliente y le pide un jugo de una fruta especifica verificar si esa fruta
   se encuentra en su coleccion 
   x="chirimoya" si existe mostrar "tu jugo esta siendo preparado"
   si no existe mostrar "ya no tengo casero"
*/
/* let frutas = ["manzana", "pera", "banana", "frutilla"];
let pedido = "pera";
let encontrado = false;
for (let index = 0; index < frutas.length; index++) {
  if (frutas[index] === pedido) {
    console.log("puedo hacer tu juguito");
    encontrado = true;
  }
}
if (!encontrado) {
  console.log("casero no podemos hacer tu juguito");
}
 */
/* ---------------------------------------------- */
let matriz = [
  [7, 12, 8],
  [33, 44, 322],
  [77, 2, 1],
];
/* --------------diagonal principal-------------- */
let principal = 0;
let secundaria = 0;
for (let index = 0; index < matriz.length; index++) {
  principal = principal + matriz[index][index];
}
console.log(principal);
/* --------------diagonal secundaria---------------- */
let contador = matriz.length;
for (let index = 0; index < matriz.length; index++) {
  secundaria = secundaria + matriz[contador - 1][index];
  contador--;
}
console.log(secundaria);
/* --------------------------OBJETOS-------------------- */
let obj = {
  marca: "Adidas",
  talla: 34,
  edicionEspecial: false,
};
obj.cordones = "broche"; //agregando un par de llave:valor

let estudiantes = [
  {
    nombre: "Juan",
    edad: 28,
    notas: [23, 34, 45, 67, 89],
  },
  {
    nombre: "Pedro",
    edad: 20,
    notas: [23, 34, 45, 67, 89],
  },
  {
    nombre: "Santiago",
    edad: 65,
    notas: [23, 34, 45, 67, 89],
  },
  {
    nombre: "Ricardo",
    edad: 16,
    notas: [23, 34, 45, 67, 89],
  },
];
/* 
  mostrar solo los nombres de los estudiantes q tengan mas o igual a 18 años
*/
/* 
    crear un objeto de tipo Persona 
    por lo meno tener 3 tipos de datos diferentes
    y un array
*/
