const CLAVE_CARRITO = "carritoCompra";

export function getCarrito() {
    const data = localStorage.getItem(CLAVE_CARRITO);
    return data ? JSON.parse(data) : [];
}

function saveCarrito(carrito) {
    localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
}

export function agregarProducto(productoBase) {
    const carrito = getCarrito();

    const index = carrito.findIndex(
        (p) =>
            p.nombre === productoBase.nombre &&
            p.categoria === productoBase.categoria
    );

    if (index !== -1) {
        carrito[index].cantidad += 1;
    } else {
        carrito.push({
            ...productoBase,
            cantidad: 1
        });
    }

    saveCarrito(carrito);
}

export function restarProducto(productoBase) {
    const carrito = getCarrito();

    const index = carrito.findIndex(
        (p) =>
            p.nombre === productoBase.nombre &&
            p.categoria === productoBase.categoria
    );

    if (index === -1) return;

    carrito[index].cantidad -= 1;

    if (carrito[index].cantidad <= 0) {
        carrito.splice(index, 1);
    }

    saveCarrito(carrito);
}

export function eliminarProducto(nombre, categoria) {
    const carrito = getCarrito().filter(
        (p) => !(p.nombre === nombre && p.categoria === categoria)
    );
    saveCarrito(carrito);
}

export function vaciarCarrito() {
    saveCarrito([]);
}