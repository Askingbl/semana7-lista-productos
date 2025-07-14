// Arreglo inicial de productos
const productos = [
  { nombre: "Laptop", precio: 850, descripcion: "Portátil con 16GB RAM y SSD 512GB" },
  { nombre: "Mouse inalámbrico", precio: 20, descripcion: "Conexión Bluetooth, ergonómico" },
  { nombre: "Teclado mecánico", precio: 45, descripcion: "Switches azules, retroiluminado" }
];

// Función para renderizar la lista
function renderizarLista() {
  const ul = document.getElementById("lista-productos");
  ul.innerHTML = ""; // Limpiar contenido anterior

  productos.forEach(producto => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${producto.nombre}</strong> - $${producto.precio} <br> <em>${producto.descripcion}</em>`;
    ul.appendChild(li);
  });
}

// Evento al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  renderizarLista();

  // Formulario para agregar productos
  document.getElementById("formulario-producto").addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const precio = parseFloat(document.getElementById("precio").value);
    const descripcion = document.getElementById("descripcion").value.trim();

    if (nombre && !isNaN(precio) && descripcion) {
      productos.push({ nombre, precio, descripcion });
      renderizarLista();
      this.reset();
    }
  });
});
