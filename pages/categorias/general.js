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

            function renderPaletas(lista) {
                cardContainer.innerHTML = lista.map(cardComponent).join("");
                inicializarContadoresEnContenedor(cardContainer);
            }
            renderPaletas(paletas);
            const buscadorPaletas = document.getElementById("buscadorPaletas");
            if (buscadorPaletas) {
                buscadorPaletas.addEventListener("input", (e) => {
                    const texto = e.target.value.toLowerCase().trim();

                    if (texto === "") {
                        renderPaletas(paletas);
                        return;
                    }

                    const filtradas = paletas.filter((p) =>
                        p.nombre.toLowerCase().includes(texto) ||
                        p.descripcion.toLowerCase().includes(texto)
                    );

                    renderPaletas(filtradas);
                });
            }
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

            function renderZapas(lista) {
                zapaContainer.innerHTML = lista.map(cardComponent).join("");
                inicializarContadoresEnContenedor(zapaContainer);
            }

            renderZapas(zapatillas);

            const buscadorZapas = document.getElementById("buscadorZapas");
            if (buscadorZapas) {
                buscadorZapas.addEventListener("input", (e) => {
                    const texto = e.target.value.toLowerCase().trim();

                    if (texto === "") {
                        renderZapas(zapatillas);
                        return;
                    }

                    const filtradas = zapatillas.filter((p) =>
                        p.nombre.toLowerCase().includes(texto) ||
                        p.descripcion.toLowerCase().includes(texto)
                    );

                    renderZapas(filtradas);
                });
            }
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

            function renderCamis(lista) {
                camisetaContainer.innerHTML = lista.map(cardComponent).join("");
                inicializarContadoresEnContenedor(camisetaContainer);
            }

            renderCamis(camisetas);

            const buscadorCambios = document.getElementById("buscadorCambios");
            if (buscadorCambios) {
                buscadorCambios.addEventListener("input", (e) => {
                    const texto = e.target.value.toLowerCase().trim();

                    if (texto === "") {
                        renderCamis(camisetas);
                        return;
                    }

                    const filtradas = camisetas.filter((p) =>
                        p.nombre.toLowerCase().includes(texto) ||
                        p.descripcion.toLowerCase().includes(texto)
                    );

                    renderCamis(filtradas);
                });
            }
        })
        .catch((error) =>
            console.error("Error cargando camisetas:", error)
        );

    configurarEventosCarrito(camisetaContainer);
}