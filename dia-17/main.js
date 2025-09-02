/* -----------seleecionar el elemento-------- */
/* let botoncito = document.querySelector("#btn");
let parrafo = document.querySelector("#parrafo");
botoncito.addEventListener("click", function () {
  if (botoncito.classList.contains("bg-blue-800")) {
    botoncito.classList.replace("bg-blue-800", "bg-red-800");
  } else {
    botoncito.classList.replace("bg-red-800", "bg-blue-800");
  }
  parrafo.textContent = "funval siempre los mejores";
}); */
/* 
    crear un elemento un boton si gustan  q represente al dia
    al darle click debera pasar a noche 
    fiona debera pasar ds ser una princesa
    a una ogro
*/
/* let boton = document.querySelector("#boton");
let dia = true;
let princesa = document.querySelector("#princesa");
let ogro = document.querySelector("#ogro");
let cuerpo = document.querySelector("#cuerpo");
boton.addEventListener("click", function () {
  dia = !dia;
  if (dia) {
    boton.textContent = "Dia";
    cuerpo.classList.replace("bg-slate-800", "bg-amber-500");
    princesa.classList.remove("hidden");
    ogro.classList.add("hidden");
  } else {
    boton.textContent = "Noche";
    cuerpo.classList.replace("bg-amber-500", "bg-slate-800");
    ogro.classList.remove("hidden");
    princesa.classList.add("hidden");
  }
}); */

/* 
{
    nombres: "string",
    apellidos:"string"
}
*/
let form = document.querySelector("#formulario");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //console.log(e);
  let obj = {};
  let nombreInput = document.querySelector("#nombre").value;
  let apellidosInput = document.querySelector("#Apellidos").value;
  obj.nombres = nombreInput;
  obj.apellidos = apellidosInput;
  console.log(nombreInput, apellidosInput);
  console.log(obj);
});

/* 
    pedir datos a un usuario de la forma q ustedes gusten
    pero debera llegarme en el siguiente formato
    {
        nombre:"string",
        edad:number,
        esMiembroSud:true    
    }
*/
