/* fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    console.log(data[0]);
  }); */

let contenedor = document.querySelector("#contenedor-usuarios");

fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (respuestaServidor) {
    return respuestaServidor.json();
  })
  .then(function (data) {
    console.log(data);
    data.forEach((usuario) => {
      contenedor.innerHTML += `
<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${usuario.name}</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>Correo:</strong> ${usuario.email}</p>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>Telefono:</strong> ${usuario.phone}</p>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"><strong>Empresa:</strong> ${usuario.company.name}</p>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>
`;
    });
  });

/* async function darData() {
  let respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
  let datito = await respuesta.json();
  console.log(datito);
}

darData(); */

// ================== EJERCICIO 1 ==================
// Usando fetch al endpoint https://jsonplaceholder.typicode.com/users
// 1. Traer todos los usuarios.
// 2. Insertar en el DOM una lista (<ul>) con todos los usuarios.
//    Cada ítem debe mostrar el nombre y el email.
//    Ejemplo: "Leanne Graham - Sincere@april.biz"

// ================== EJERCICIO 2 ==================
// Usando fetch al endpoint https://jsonplaceholder.typicode.com/users
// 1. Crear un input de texto y un botón en tu HTML.
// 2. Cuando el usuario escriba el nombre de una ciudad y presione el botón,
//    mostrar en el DOM todos los usuarios que vivan en esa ciudad.
//    (La ciudad está en la propiedad address.city)

// ================== EJERCICIO 3 ==================
// Usando fetch al endpoint https://jsonplaceholder.typicode.com/users
// 1. Traer todos los usuarios.
// 2. Crear una tarjeta (<div>) para cada usuario que muestre:
//    - El nombre del usuario
//    - El nombre de la empresa (company.name)
//    - El eslogan de la empresa (company.catchPhrase)
// 3. Insertar todas las tarjetas dinámicamente en el DOM.
