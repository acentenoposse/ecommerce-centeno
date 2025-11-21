export const cardComponent = (data) => {
    const nombreMayus = data.nombre.toUpperCase();

    return `
        <div class="card-producto">
            <div class="card-img">
                <img src="${data.img}" alt="${nombreMayus}">
            </div>

            <div class="card-info">
                <h1>${nombreMayus}</h1>
                <h3>${data.descripcion}</h3>
                <h2>$${data.precio}</h2>

                <div class="botonescarro">
                    <img src="../../assets/remove.svg" alt="Restar" height="30" width="30" class="btn-restar-carrito"
                        data-nombre="${data.nombre}"
                        data-precio="${data.precio}"
                        data-categoria="${data.categoria || ''}"
                    >
                    <button
                        class="btn-agregar-carrito"
                        data-nombre="${data.nombre}"
                        data-precio="${data.precio}"
                        data-categoria="${data.categoria || ''}"
                    >Agregar
                    </button>
                    <img src="../../assets/add.svg" alt="Sumar" height="30" width="30" class="btn-sumar-carrito"
                        data-nombre="${data.nombre}"
                        data-precio="${data.precio}"
                        data-categoria="${data.categoria || ''}"
                    >
                </div>
                <div class="contador-carrito">
                    <span>Cantidad:</span>
                    <span class="cantidad-carrito"
                        data-nombre="${data.nombre}"
                        data-categoria="${data.categoria || ''}"
                    >
                        0
                    </span>
                </div>
            </div>
        </div>
    `;
};