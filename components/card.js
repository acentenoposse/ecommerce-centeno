
            export const cardComponent = (data) => {
    const nombre = data.nombre.toUpperCase();

    return `
        <div class="card-producto">
            <div class="card-img">
                <img src="${data.img}" alt="${nombre}">
            </div>
            <div class="card-info">
                <h1>${nombre}</h1>
                <h3>${data.descripcion}</h3>
                <h2>$${data.precio}</h2>
                <div class="botonescarro"><img src="../../assets/remove.svg" alt="" height="30px" width="30px"><button>Agregar al carrito</button><img src="../../assets/add.svg" alt="" height="30px" width="30px"></div>
                <a href="#">Ver más</a>
            </div>
        </div>
    `;
};