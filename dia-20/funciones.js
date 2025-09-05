function duplicar(x) {
  return x * 2;
}
function restar(x) {
  return x - 1;
}
function saludar() {
  console.log("hola mundo");
}
function renderizar(padre, lista) {
  for (let index = 0; index < lista.length; index++) {
    padre.innerHTML += `<li>${lista[index].nombre}</li>`;
  }
}
export { duplicar, restar, saludar, renderizar };
