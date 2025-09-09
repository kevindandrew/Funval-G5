/* --------------SINCRONO--------------- */
/* console.log("Luis");
console.log("Mario");
console.log("Geraldine");
console.log("Kevin"); */
/* ------------Asincrono-------------- */
/* console.log("david");

setTimeout(() => {
  console.log("Nefi");
}, 3000);

console.log("jesus");
setTimeout(() => {
  console.log("edmund");
}, 5000);

console.log("kevin"); */

/* 
    realizar ejemplo de la vida cotidiana de sincronia y asincronia
*/
let pelisChidas = ["spiderman", "titanic", "avatar", "chespirito"];
/* -----------COMO CREAR UNA PROMESA------------- */
function getDatos() {
  return new Promise((resolve, reject) => {
    let cumplio = true;
    setTimeout(() => {
      if (cumplio) {
        resolve("si me cumplio gente");
      } else {
        reject("la promesa fallo xq se escribio mal la ruta");
      }
    }, 2000);
  });
}
/* ----------------COMO CONSUMIR UNA PROMESA--------------- */
/* getDatos()
  .then((pelis) => {
    console.log(pelis);
  })
  .catch((error) => {
    console.log(error);
  });
 */
let listaEstudiantes = [
  { nombre: "Juan", Pais: "Argentina", edad: 20 },
  { nombre: "Harold", Pais: "PERU", edad: 13 },
  { nombre: "Charlie", Pais: "Chile", edad: 14 },
  { nombre: "CHENTE", Pais: "Mexico", edad: 31 },
  { nombre: "FAUSTO", Pais: "BOLIVIA", edad: 17 },
  { nombre: "MARIA", Pais: "PERU", edad: 18 },
  { nombre: "DIEGO", Pais: "Peru", edad: 23 },
  { nombre: "Martin" },
];

let superPromesa = new Promise((resolve, reject) => {
  let siLlego = true;
  setTimeout(() => {
    if (siLlego) {
      resolve(listaEstudiantes);
    } else {
      reject("error 404 se cayo la base de datos :v");
    }
  }, 3000);
});

/* filtrar solo a los estudiantes mayores de edad y q ademas sean de Peru */
/* -----------------ASYNC Y AWAIT-------------- */
async function darEstudiantesPeru() {
  let datos = await superPromesa;
  let peruEST = datos.filter(
    ({ Pais = "LATAM", edad = 0 }) =>
      edad >= 18 && Pais.toLowerCase() === "peru"
  );
  console.log(peruEST);
}

darEstudiantesPeru();

/* -------------------------------------------------------------------- */
/* /*****************************************************
 📝 Ejercicio Grupal: Simulador de Procesos de un Restaurante
 ⏰ Duración estimada: 1 hora y 30 minutos
 👥 Trabajo en grupos de 3 a 5 personas
******************************************************/

/*
🎯 OBJETIVO:
Implementar un sistema que simule el flujo de atención en un restaurante
utilizando callbacks, promesas y async/await.
*/

/*
📌 INSTRUCCIONES:

1. Callback (Pedido del cliente):
   - Crear una función que simule que un cliente llega y hace un pedido.
   - El pedido debe recibirse mediante una función con callback.
   - El callback debe mostrar en consola el pedido realizado por el cliente.

   Ejemplo esperado en consola:
   Cliente llegó y pidió: Pizza
   Pedido recibido: Pizza
*/

/*
2. Promesas (Cocina):
   - Una vez recibido el pedido, pasa a cocina.
   - La cocina debe simular el tiempo de preparación de cada comida
     usando setTimeout y promesas.
   - Los tiempos de cocción son:
       Pizza: 3 segundos
       Hamburguesa: 2 segundos
       Ensalada: 1 segundo

   Ejemplo esperado en consola:
   Cocinando Pizza...
   Pizza lista en 3 segundos
*/

/*
3. Async/Await (Servicio y Pago):
   - Después de que la promesa de la cocina se resuelva, el pedido debe ser
     servido al cliente.
   - Simular que el cliente come durante 2 segundos y luego paga la cuenta.
   - Esto debe hacerse usando async/await.

   Ejemplo esperado en consola:
   Sirviendo Pizza al cliente...
   Cliente está comiendo...
   Cuenta pagada ✅
*/

/*
4. Desafío Extra (Opcional):
   - Manejar varios clientes que hagan pedidos en paralelo usando Promise.all.
   - Mostrar en consola cuál pedido estuvo listo primero.
*/

/*
🔧 ESPECIFICACIONES TÉCNICAS:
- Usar JavaScript en un archivo main.js.
- Pueden usar la consola del navegador o Node.js para probar el código.
- El flujo debe contener las tres etapas:
     ✅ Pedido con callback.
     ✅ Cocina con promesas.
     ✅ Servicio y pago con async/await.
- El código debe estar modularizado en funciones para cada proceso.
*/

/*
 RESULTADO ESPERADO (ejemplo de flujo completo):
Cliente llegó y pidió: Pizza
Pedido recibido: Pizza
Cocinando Pizza...
Pizza lista en 3 segundos
Sirviendo Pizza al cliente...
Cliente está comiendo...
Cuenta pagada 
manipulando el DOM 
*/

/*
 ENTREGA FINAL DEL GRUPO:
Un archivo o varios  .js con el código del simulador, organizado en funciones
y con comentarios explicativos de dónde aplicaron:
   - Callback
   - Promesas
   - Async/Await
*/
