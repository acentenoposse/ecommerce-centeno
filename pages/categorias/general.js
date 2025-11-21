import { cardComponent } from "../../components/card.js";
import { agregarProducto, restarProducto, getCarrito } from "../../utils/carritoStorage.js";


function actualizarContadorProducto(nombre, categoria) {
    const carrito = getCarrito();

    const prod = carrito.find(
        (p) => p.nombre === nombre && p.categoria === categoria
    );

    const cantidad = prod ? prod.cantidad : 0;


    const spans = document.querySelectorAll(
        `.cantidad-carrito[data-nombre="${nombre}"][data-categoria="${categoria}"]`
    );

    spans.forEach((span) => {
        span.textContent = cantidad;
    });
}


function inicializarContadoresEnContenedor(contenedor) {
    if (!contenedor) return;

    const spans = contenedor.querySelectorAll(".cantidad-carrito");

    spans.forEach((span) => {
        const nombre = span.dataset.nombre;
        const categoria = span.dataset.categoria;
        actualizarContadorProducto(nombre, categoria);
    });
}


function configurarEventosCarrito(contenedor) {
    if (!contenedor) return;

    contenedor.addEventListener("click", (e) => {
        const btnAgregar = e.target.closest(".btn-agregar-carrito");
        const btnSumar = e.target.closest(".btn-sumar-carrito");
        const btnRestar = e.target.closest(".btn-restar-carrito");

        if (btnAgregar) {
            const { nombre, precio, categoria } = btnAgregar.dataset;
            agregarProducto({ nombre, precio: Number(precio), categoria });
            actualizarContadorProducto(nombre, categoria);
            return;
        }

        if (btnSumar) {
            const { nombre, precio, categoria } = btnSumar.dataset;
            agregarProducto({ nombre, precio: Number(precio), categoria });
            actualizarContadorProducto(nombre, categoria);
            return;
        }

        if (btnRestar) {
            const { nombre, precio, categoria } = btnRestar.dataset;
            restarProducto({ nombre, precio: Number(precio), categoria });
            actualizarContadorProducto(nombre, categoria);
            return;
        }
    });
}



const cardContainer = document.getElementById("cardContainer");

if (cardContainer) {
    fetch("../../data.json")
        .then((response) => response.json())
        .then((data) => {
            const paletas = data.productos.filter(
                (item) => item.categoria === "paleta"
            );
            cardContainer.innerHTML = paletas.map(cardComponent).join("");
            inicializarContadoresEnContenedor(cardContainer);
        })
        .catch((error) => console.error("Error cargando paletas:", error));

    configurarEventosCarrito(cardContainer);
}




const zapaContainer = document.getElementById("cardZapaContainer");

if (zapaContainer) {
    fetch("../../data.json")
        .then((response) => response.json())
        .then((data) => {
            const zapatillas = data.productos.filter(
                (item) => item.categoria === "zapatillas"
            );
            zapaContainer.innerHTML = zapatillas.map(cardComponent).join("");
            inicializarContadoresEnContenedor(zapaContainer);
        })
        .catch((error) =>
            console.error("Error cargando zapatillas:", error)
        );

    configurarEventosCarrito(zapaContainer);
}




const camisetaContainer = document.getElementById("cardCamiContainer");

if (camisetaContainer) {
    fetch("../../data.json")
        .then((response) => response.json())
        .then((data) => {
            const camisetas = data.productos.filter(
                (item) => item.categoria === "camiseta"
            );
            camisetaContainer.innerHTML = camisetas.map(cardComponent).join("");
            inicializarContadoresEnContenedor(camisetaContainer);
        })
        .catch((error) =>
            console.error("Error cargando camisetas:", error)
        );

    configurarEventosCarrito(camisetaContainer);
}