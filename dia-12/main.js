/* ----------CONDICIONALES------------ */
/* ----------IF------------- */
let edad = 15;
if (edad >= 18) {
  console.log("eres mayor de edad");
}
console.log("hola amigos de funval");
/*----------IF-ELSE----------- */
if (edad >= 18) {
  console.log("perteneces a JAS");
} else {
  console.log("aun NO perteneces a JAS");
}
/* ------------IF-ELSE-IF------------ */
let dinero = 200;
if (dinero >= 500) {
  console.log("puedes entrara la zona vip");
} else {
  if (dinero >= 300) {
    console.log("puede ingresar a la zona plus");
  } else {
    console.log("general");
  }
}
/* ------------SWCH-CASE---------- */
let dineroFunval = 250;
switch (dineroFunval) {
  case 500:
    console.log("podemos ir zona vip");
    break;
  case 400:
    console.log("podemos ir zona plus");
    break;
  case 300:
    console.log("podemos ir zona preferencial");
    break;
  case 200:
    console.log("GENERAL TwT");
    break;
  default:
    console.log("coloca una opcion dentro del menu");
    break;
}

/* -----ejercicio operador ternario, prompt y alert----
pedir a un usuario q ingrese
su edad
su nombre
y el nombre de la estaca a la q pertenece y evaluar

si es mayor de edad
y si pertenece a la estaca miraflores-MIRAFLORES-MIraFLOres
entonces mostrar "hola nombre sea Bienvenido al sistema"

si es mayor de edad pero no pertenece a la estaca miraflores
entonces mostrar "Hola nombre se encuentra en la estaca equivocada"

si es menor de edad mostrar "hola nombre no tienes acceso"
*/

/* let edadUsuario = parseInt(prompt("ingrese su edad"));

if (edadUsuario >= 18) {
  let nombreUsuario = prompt(`ingrese tu nombre`);
  let stkUsuario = prompt("ingrese tu estaca");
  if (stkUsuario.toLowerCase() === "miraflores") {
    alert(nombreUsuario + " perteneces aqui");
  } else {
    alert(nombreUsuario + " NO perteneces aqui");
  }
} else {
  alert("muchacho eres menor de edad");
}
 */
/* 
    pida a un usuario q ingrese un menu de opciones donde 
    1 lunes
    2 martes
    3 miercoles
    4 jueves
    5 viernes
    6 sabado
    7 domingo
    si es un dia entre lunes y viernes entonces mostrar
    "tienes clases de funval"
    pero si es sabado mostrar
    "tienes el dia libre"
    y si es domingo
    "debes ir a la iglesia"
    cualquier opcion fuera de esas debera mostrar un mensaje de alerta
    "error en la opcion seleccionada"
*/

/* ------------------BUCLE-------------- */

/* let edadProgra = 16;

while (edadProgra <= 18) {
  console.log(edadProgra);
  edadProgra++;
}

console.log("bienvenido a la fiesta"); */

/* ------------DO-WHILE------------- */
/* let username;
let password;
do {
  username = prompt("ingresa tu nombre de usuario");
  password = prompt("ingresa tu contraseña");
} while (username !== "kevin" || password !== "123456");

alert("bienvenido al sistema"); */
/* --------------FOR-------------------- */

/* for (let i = 10; i >= 1; i--) {
  console.log(i);
}
 */
/* 
    pedir al usuario q ingrese un numero 
    ese numero sera la cantidad de elementos de la serie
    de los numeros pares q usted mostrara
    ejemplo
    n=5
    2,4,6,8,10
    n=7
    2,4,6,8,10,12,14
*/

/* let n = parseInt(prompt("ingrese un numero"));
let respuesta = 4;
let resultado = "2";
for (let i = 1; i < n; i++) {
  resultado = resultado + ", " + respuesta;
  respuesta += 2;
}
console.log(resultado);
 */
/* let n = parseInt(prompt("ingrese un numero"));

for (let i = 2; i <= n * 2; i += 2) {
  console.log(i);
} */

/* 
  crear una calculadora de multiplicacion apartir de 2 numeros q ingrese 
  el usuario esta prohibido utilizar el simbolo *
  2*5

  una multiplicacion no es nada mas q una sucesion de sumas 
  2*5 = 2+2+2+2+2 o 5+5
*/
/* 
let n1 = parseInt(prompt("ingresa el 1er numero"));
let n2 = parseInt(prompt("ingresa el 2do numero"));
let res = 0;
for (let j = 1; j <= n1; j++) {
  res = res + n2;
}
alert(res);
 */
/*  --------------Pruebas tecnicas-----------------
    mostrar los n terminos de la siguiente serie Fibonacci
    1,1,2,3,5,8,13,21......

    mostrar los n terminos de la serie de los numeros primos
    1,2,3,5,7,11,13.....
*/

let n3 = parseInt(prompt("ingresa un numero"));
let a = 1;
let b = 1;
let c = 0;

for (let k = 1; k <= n3; k++) {
  if (k === 1) {
    console.log(a);
  } else if (k === 2) {
    console.log(b);
  } else {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
}
