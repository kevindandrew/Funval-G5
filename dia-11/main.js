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
console.log("nombre variable :", typeof apellidoPaterno);
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
/* ------OPERADORES ARITMETICOS----- */
let a = 2;
let b = 4;
let c;

c = a + b; //suma
c = a - b; //resta
c = a * b; //multiplicacion
c = a / b; //division
c = a ** b; //potencia
c = a % b; //modulo o residuo (es el restante de una division q no es exacta o si lo es el restante es 0)
/* -----CONCATENACION--- */
let aa = 4;
let bb = "2";
let cc = aa + bb;
console.log(cc);
/* ejemplo */
let nombre = "Kevin";
let apPaterno = "Rodriguez";
let nombreCompleto = nombre + " " + apPaterno;
console.log(nombreCompleto);
/* ---operadores de asignacion-- */
let x = 5;
x++; //x = x +1
x--; // x = x-1
++x; // x = 1+x
--x; // x = -1 +x
x += 7; // x = x +7
x -= 3; // x = x -3
x *= 2; // x = x *2
x /= 3; // x = x /3
x **= 4; // x = x**4
/* ----Operadores de comparacion--- */
let a1 = 5;
let a2 = "5";
let a3 = 7;
/* REGLA IMPORTANTE : EL RESULTADO DE UN OPERADOR DE COMPARACION
    SIEMPRE SIEMPRE ES UN BOOLEAN
*/

let respuesta = a1 == a2; //el comparador 2doble igual solo compara el dato mas no el tipo de dato TRUE
console.log(respuesta);
respuesta = a1 === a2; //el comparador 3 TRIPLEigual compara el dato Y el tipo de dato  FALSE
console.log(respuesta);
respuesta = a1 !== a2;
respuesta = a1 != a2;
respuesta = a1 > a3;
respuesta = a1 < a3;
respuesta = a1 >= a3;
respuesta = a1 <= a3;

/* ------------operadores LOGICOS-------- */
let b2 = true;
let b3 = false;
//AND- el resultado es verdadero unicamente cuando ambos lo son todo lo demas es falso
resultado = !(b2 && b3);
resultado = 4 == "4" && 5 > 3;
resultado = 4 === "4" && 7 >= 6;
resultado = 7 >= 7 && 8 === "8" && "pedro" === "PEDRO";
//OR - el resultado es falso unicamente cuando ambos lo son  en todo lo demas es verdadero
resultado = b2 || b3;
resultado = 7 != "7" || "kevin" === "KEVIN";
resultado = 4 !== "4" || "domingo" === 7;
console.log(resultado);
//NOT
resultado = !b2;
resultado = !b3;
/* 
---------------Ejercicios con operadores de comparación

Crea dos variables a = 10 y b = "10".

Verifica si son iguales con ==.

Verifica si son estrictamente iguales con ===.

Explica la diferencia en los resultados.

Declara una variable edad = 18.

Comprueba si edad es mayor o igual a 18.

Comprueba si edad es menor a 18.

Declara x = 15 y y = 20.

Verifica si x es mayor que y.

Verifica si x es menor o igual a y.

Pregunta al usuario con prompt("Ingresa un número:") y compara:

Si el número ingresado es mayor a 100.

Si el número ingresado es igual a 50.

----------- Ejercicios con operadores lógicos

Declara edad = 25 y tieneLicencia = true.

Usa && para comprobar si la persona puede conducir.

Declara dia = "domingo" y clima = "soleado".

Usa || para comprobar si la persona puede salir a pasear si es domingo o hace soleado.

Declara llueve = false.

Usa ! para comprobar si no está lloviendo.

Pregunta al usuario su edad con prompt.

Si la edad está entre 13 y 17, muestra "Eres adolescente".

Si es menor a 13, "Eres niño".

Si es mayor o igual a 18, "Eres adulto". */

/* ------TEMAS DE OPERADORES LOGICOS----- */

let x1 = 20;
let x2 = 12;
let x3 = 5;
let x4 = 8;
respuesta = (x1 === "18" && x2 != x4) || x4 <= x3; //4f  0v

/* ----------OPERADOR TERNARIO----------(if abreviado) */
/* 
    condicion
        ?si la condicion es verdadera
        :si la condicion es falsa
*/

let edadPersona = 15;
let nombrePersona = "kevin";

edadPersona >= 18
  ? console.log("ERES ADULTO")
  : nombrePersona == "kevin"
  ? console.log("hola kevin")
  : console.log("quien eres? ");

/* ----------recabar informacion del usuario desde js----------- */
/* let edadEstudiante = parseInt(prompt("por favor ingresa tu edad"));
let nombreEstudiante = prompt("por favor ingresa tu nombre");
alert("hola " + nombreEstudiante);
console.log(nombreEstudiante, edadEstudiante);
console.log(typeof edadEstudiante);

let estudianteFunval2 = "Luis Enrique";
console.log(estudianteFunval2.length); */

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
/* 

// 1. MAYOR DE TRES NÚMEROS
// Pide tres números al usuario y muestra cuál es el mayor usando comparaciones.
// (Tip: puedes usar if...else o anidando ternarios)


// 2. CONTRASEÑA SEGURA
// Pide al usuario una contraseña.
// Debe tener al menos 6 caracteres Y no ser "123456".
// Si cumple muestra "Contraseña segura", sino "Contraseña débil".


// 3. ACCESO AL CLUB
// Pide la edad y si tiene membresía (si/no).
// Puede entrar si es mayor de 21 O tiene membresía VIP.
// Usa operadores lógicos y muestra con alert.


// 4. JUEGO DE DADOS
// Pide dos números (entre 1 y 6).
// Si ambos son iguales → "Empate".
// Si la suma es mayor o igual a 10 → "Ganaste".
// Sino → "Perdiste".


// 5. TIENDA DE DESCUENTO
// Pide el monto de compra.
// Si el monto es mayor o igual a 100 → 20% de descuento.
// Si está entre 50 y 99 → 10% de descuento.
// Si es menor de 50 → sin descuento.
// Usa operador ternario anidado.


// 6. VERIFICACIÓN DE EMAIL
// Pide al usuario un texto (su email).
// Si contiene el carácter "@" → válido, caso contrario inválido.
// Usa comparación y un ternario.


// 7. CLASIFICACIÓN DE NOTA
// Pide la nota (0 a 100).
// - 90 o más → "Excelente"
// - 70 a 89 → "Bueno"
// - 60 a 69 → "Regular"
// - Menos de 60 → "Reprobado"
// Usa if + operadores de comparación.


// 8. PUEDES VIAJAR
// Pide edad y si tiene pasaporte (si/no).
// Puede viajar si es mayor de 18 Y tiene pasaporte.
// Si no cumple, mostrar "No puedes viajar".
// Resuélvelo con un ternario.


// 9. NÚMERO DENTRO DE RANGO
// Pide un número.
// Si está entre 10 y 20 (incluidos) mostrar "Dentro del rango".
// Si no, "Fuera del rango".
// Usa comparación + &&


// 10. JUEGO DE PIEDRA, PAPEL O TIJERA
// Pide al jugador su opción (piedra/papel/tijera).
// Genera una opción para la computadora (elige tú manualmente).
// Usa comparaciones y lógicos para decidir quién gana.
// Ej: piedra gana a tijera, tijera gana a papel, papel gana a piedra.


*/
