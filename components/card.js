const calcular = (a,b) => {
return a*b
} 

export const cardComponent = (data) => {
    data.title = data.title.toUpperCase()

    data.a === 0 ? data.a = 1 : data.a = data.a

    if(data.b == 0) {
        data.b = 1
    }

    return `
            <div class="card-producto">
                <div class="card-img">
                    <img src="${data.img}" alt="${data.title}">
                </div>
                <div class="card-info">
                    <h1>${data.title}</h1>
                    <h3>${data.descripcion}</h3>
                    <h2>$${data.a}</h2>
                    <button>Agregar al carrito</button>
                    <a href="#">ver más</a>
                </div>
            </div>
            `
}