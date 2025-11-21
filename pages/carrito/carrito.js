import {
    getCarrito,
    agregarProducto,
    restarProducto,
    eliminarProducto,
    vaciarCarrito
} from "../../utils/carritoStorage.js";

const tbody = document.getElementById("tbody-carrito");
const totalCarrito = document.getElementById("total-carrito");
const btnVaciar = document.getElementById("btn-vaciar");
const infoUsuario = document.getElementById("info-usuario");

function cargarUsuario() {
    const usuarioJSON = sessionStorage.getItem("usuarioLogueado");
    const usuario = usuarioJSON ? JSON.parse(usuarioJSON) : null;

    if (usuario) {
        infoUsuario.textContent = `Estás comprando como: ${usuario.email}`;
    } else {
        infoUsuario.textContent = "No hay usuario logueado.";
    }
}

function renderCarrito() {
    const carrito = getCarrito();

    if (carrito.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6">No tenés productos en el carrito.</td>
            </tr>
        `;
        totalCarrito.textContent = "";
        return;
    }

    let total = 0;

    tbody.innerHTML = carrito
        .map((p) => {
            const subtotal = p.precio * p.cantidad;
            total += subtotal;

            return `
                <tr>
                    <td>${p.nombre}</td>
                    <td>${p.categoria || "-"}</td>
                    <td>$${p.precio}</td>
                    <td>${p.cantidad}</td>
                    <td>$${subtotal}</td>
                    <td>
                        <button class="btn-restar" data-nombre="${p.nombre}" data-categoria="${p.categoria}">-</button>
                        <button class="btn-sumar" data-nombre="${p.nombre}" data-categoria="${p.categoria}">+</button>
                        <button class="btn-eliminar" data-nombre="${p.nombre}" data-categoria="${p.categoria}">Eliminar</button>
                    </td>
                </tr>
            `;
        })
        .join("");

    totalCarrito.textContent = `Total: $${total}`;
}

tbody.addEventListener("click", (e) => {
    const nombre = e.target.dataset.nombre;
    const categoria = e.target.dataset.categoria;

    if (!nombre) return;

    if (e.target.classList.contains("btn-sumar")) {
        agregarProducto({ nombre, categoria, precio: 0 }); 
        renderCarrito();
    }

    if (e.target.classList.contains("btn-restar")) {
        restarProducto({ nombre, categoria, precio: 0 });
        renderCarrito();
    }

    if (e.target.classList.contains("btn-eliminar")) {
        eliminarProducto(nombre, categoria);
        renderCarrito();
    }
});

btnVaciar.addEventListener("click", () => {
    if (confirm("¿Seguro que querés vaciar el carrito?")) {
        vaciarCarrito();
        renderCarrito();
    }
});

cargarUsuario();
renderCarrito();