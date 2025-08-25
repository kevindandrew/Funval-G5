/* PARA CREAR MENSAJES EN CONSOLA */
console.log("Hola mundo");
// comentarios en una sola linea
/* CUALIDADES IMPORTANTES DE JAVASCRIPT
1RA ES DE TIPADO DINAMICO
2DA ES DE TIPADO DEBIL
*/
/*
podemos 
dejar
comentarios
en
varias
lineas
*/
/* -----------TIPOS DE DATOS PRIMITIVOS-------- */
let apellidoPaterno = "Rodriguez"; //dato primitivo String o cadena de texto
let edad = 12; // number o numerico
let esMiembroSud = true; // boolean
let esSalvo; //undefined
let dinerito = null; //null o sin valor
let simbolo = Symbol("kevin"); //tipo simbolo avanzado
let numeroGrande = 21397146127846n; //BIG INT
/* ----------DECLARACION DE VARIABLES Y CONSTANTES-------------- */
let nombreVar = "valorVariable"; //correcto tecnologia mas actual
var nombreVariable = "valorQTiene"; // incorrecto tecnologia obsoleta
/* --------------------------------------------------------------- */
const nombreConst = 12; //creacion de constantes
const valor = null;
/* --------COMO VERIFICAR EL TIPO DE DATO PRIMITIVO EN TIEMPO DE EJECUCION--- */
let estudianteFunval = "Santiago Ivan";
console.log(typeof estudianteFunval);
estudianteFunval = 18;
console.log(typeof estudianteFunval);
/* ejemplos */
console.log(typeof apellidoPaterno);
console.log(typeof edad);
console.log(typeof esMiembroSud);
console.log(typeof esSalvo);
console.log(typeof dinerito);
console.log(typeof simbolo);
console.log(typeof numeroGrande);

/* 
    crear 7 variables con 7 diferentes tipos de datios primitivos 
    hacer cambien entre ellos por lo menos 2 veces y verificar el tipo de dato q tengan en tiempo 
    de ejecucion 
*/
