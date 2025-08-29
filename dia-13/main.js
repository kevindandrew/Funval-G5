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

/* 
    pedir al usuario q ingrese una palabra o frase y determinar
    si esta palabra es palindroma
    Somos o no somos = palindroma
    radar = palindroma
    Yohagoyogahoy = palindroma
    Yohagoyogahoy = yohagoyogahoy
    kevin es profesor = NO es palindroma

    --- la cantidad de letras nos ayuda a encontrar los espacios o eliminarlos
    --- MAYUSCULAS llevarlo todo ya sea a mayusculas o a minusculas
    --- invertir el orden de cada letra y compararlo con la palabra original para ver si es palindroma
    --- en caso de manejar tildes eliminar cualquier simbolo diferente (especial)
*/

let palabra = prompt(
  "ingresa tu palabra o frase y verificaremos si es o no palindroma"
);

function quitarEspacios(cadena) {
  return cadena.split(" ").join("");
}
let cadenaSinEspacios = quitarEspacios(palabra).toLowerCase();

function invertir(cadena) {
  return cadena.split("").reverse().join("");
}
let resultado = invertir(cadenaSinEspacios);

if (resultado === cadenaSinEspacios) {
  alert("tu palabra es palindroma");
} else {
  alert("Tu palabra NO ES palindroma");
}

/* function sinEspacios(cadena) {
  let resultado = "";
  for (let i = 0; i < cadena.length; i++) {
    if (cadena[i] !== " ") {
      resultado += cadena[i];
    }
  }
  return resultado;
}

console.log(sinEspacios(palabra)); */

/* --------------ejercicios---------------------

Ejercicio 1: Sistema de Votación (Mayoría de 3 Candidatos)

Contexto: En una elección hay 3 candidatos (A, B y C). 
Se pide al usuario el número total de votantes y luego cada voto 
(escrito como “A”, “B” o “C”). 
Al final, se debe mostrar quién ganó, o si hubo empate.
--------------------------------------------------------
Ejercicio 2: Validación de Contraseña Segura
Contexto: Crear un sistema que pida una contraseña y verifique si cumple con las reglas:
Al menos 8 caracteres.
Debe contener al menos 1 número.
Debe contener al menos 1 letra mayúscula.
Debe contener al menos 1 letra minúscula.
----------------------------------------------

Ejercicio 3: Máquina de Tickets de Cine 

Contexto: Una máquina vende entradas de cine. El usuario debe ingresar:
Su edad.
Si quiere función “normal” o “3D”.
Si lleva combo de snacks.
El precio se calcula así:
Entrada normal: 30 Bs.
Entrada 3D: 45 Bs.
Descuento de 50% si es menor de 12 años.
Descuento de 25% si es mayor de 60 años.
Combo de snacks: +20 Bs.
El programa debe mostrar el precio final que el cliente debe pagar.
*/
