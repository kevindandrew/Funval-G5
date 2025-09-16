let contenedor = document.querySelector(".contenedor-cards");

for (let index = 1; index <= 10; index++) {
  contenedor.innerHTML += `
<div role="status" class="max-w-sm p-4 border border-gray-200 rounded-sm shadow-sm animate-pulse md:p-6 dark:border-gray-700">
    <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
        <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
        </svg>
    </div>
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    <div class="flex items-center mt-4">
       <svg class="w-10 h-10 me-3 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
        </svg>
        <div>
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
            <div class="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
    </div>
    <span class="sr-only">Loading...</span>
</div>
`;
}

/* function traerDatos() {
  setTimeout(async () => {
    let resp = await fetch("./usuarios.json");
    let data = await resp.json();
    contenedor.innerHTML = "";
    data.forEach(
      ({
        nombre,
        edad,
        telefono = "xxxx-xxx-xxxx",
        ciudad = "no respondio",
      }) => {
        contenedor.innerHTML += `
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${nombre}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">Ciudad: ${ciudad} - edad: ${edad}</p>
<p class="font-normal text-gray-700 dark:text-gray-400">Telefono: ${telefono}</p>
</a>
`;
      }
    );
  }, 3000);
}

traerDatos(); */

/* async function traerData() {
  let respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await respuesta.json();
  contenedor.innerHTML = "";
  data.forEach((user) => {
    contenedor.innerHTML += `

<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${user.name}</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Read more
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>
`;
  });
}

traerData(); */

let arrayEst = [
  {
    id: 1,
    nombre: "Ana Torres",
    edad: 25,
    email: "ana.torres@example.com",
    ciudad: "La Paz",
    telefono: "76543210",
    ocupacion: "Ingeniera de Software",
    hobbies: ["Lectura", "Ciclismo", "Cocina"],
  },
  {
    id: 2,
    nombre: "Luis Fernández",
    edad: 32,
    email: "luis.fernandez@example.com",
    ciudad: "Cochabamba",
    telefono: "76483920",
    ocupacion: "Diseñador Gráfico",
    hobbies: ["Fotografía", "Viajes", "Música"],
  },
  {
    id: 3,
    nombre: "María López",
    edad: 28,
    email: "maria.lopez@example.com",
    ciudad: "Santa Cruz",
    telefono: "78901234",
    ocupacion: "Doctora",
    hobbies: ["Yoga", "Pintura", "Senderismo"],
  },
  {
    id: 4,
    nombre: "Carlos Gutiérrez",
    edad: 40,
    email: "carlos.gutierrez@example.com",
    ciudad: "Tarija",
    telefono: "76598741",
    ocupacion: "Profesor",
    hobbies: ["Lectura", "Ajedrez", "Historia"],
  },
  {
    id: 5,
    nombre: "Sofía Ramírez",
    edad: 22,
    email: "sofia.ramirez@example.com",
    ciudad: "Oruro",
    telefono: "75839204",
    ocupacion: "Estudiante",
    hobbies: ["Baile", "Series", "Videojuegos"],
  },
  {
    id: 6,
    nombre: "Miguel Sánchez",
    edad: 35,
    email: "miguel.sanchez@example.com",
    ciudad: "Sucre",
    telefono: "77765432",
    ocupacion: "Arquitecto",
    hobbies: ["Deportes", "Viajes", "Fotografía"],
  },
  {
    id: 7,
    nombre: "Valeria Castillo",
    edad: 29,
    email: "valeria.castillo@example.com",
    ciudad: "Potosí",
    telefono: "76473829",
    ocupacion: "Abogada",
    hobbies: ["Lectura", "Natación", "Cocina"],
  },
  {
    id: 8,
    nombre: "Andrés Molina",
    edad: 27,
    email: "andres.molina@example.com",
    ciudad: "Beni",
    ocupacion: "Contador",
    hobbies: ["Correr", "Música", "Películas"],
  },
  {
    id: 9,
    nombre: "Camila Vargas",
    edad: 31,
    email: "camila.vargas@example.com",
    ciudad: "Pando",
    telefono: "76654321",
    ocupacion: "Marketing Digital",
    hobbies: ["Redes Sociales", "Moda", "Viajes"],
  },
  {
    id: 10,
    nombre: "Javier Ortega",
    edad: 26,
    email: "javier.ortega@example.com",
    ciudad: "Chuquisaca",
    telefono: "76544321",
    ocupacion: "Músico",
    hobbies: ["Guitarra", "Canto", "Composición"],
  },
];
let promesa = new Promise((resolve, reject) => {
  llegoData = true;
  setTimeout(() => {
    if (llegoData) {
      resolve(arrayEst);
    } else {
      reject("no llego la data");
    }
  }, 2000);
});

async function traerDatitos() {
  let resp = await promesa;
  contenedor.innerHTML = ``;
  resp.forEach(({ nombre, edad, telefono, ciudad }) => {
    contenedor.innerHTML += `
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${nombre}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">Ciudad: ${ciudad} - edad: ${edad}</p>
<p class="font-normal text-gray-700 dark:text-gray-400">Telefono: ${telefono}</p>
</a>
`;
  });
}
traerDatitos();

let obj = {
  color: "negro",
  material: "cuero",
  talla: "L",
};

let { color, talla } = obj;

console.log(color);
