import { categoriaComponent } from "../../components/categorias.js";

let categoriaContainer = document.getElementById('categoriaContainer')

let catData = [
    {
        title: 'paletas',
        img: '../../assets/paletanox.webp',
        descripcion: 'Elegí tu compañera para jugar al pádel al 100%, potencia, control o ambas, ¿por qué no?',
        url: '../../pages/categorias/paletas.html',
    },
    {
        title: 'zapatillas',
        img: '../../assets/vertex.webp',
        descripcion: 'Movete en la pista rápido, ágil y con el mejor estilo, todas las marcas y talles para que disfrutes dentro del 20x10',
        url: '../../pages/categorias/zapatillas.html',
    },
    {
        title: 'camisetas',
        img: '../../assets/adipower.webp',
        descripcion: 'Destacá con las camisetas que usan tus jugadores favoritos, con la mejor tela y el diseño más atractivo',
        url: '../../pages/categorias/camisetas.html',
    }
];


window.addEventListener('load', ()=>{
    const cats = catData.map(e=>{
        return categoriaComponent(e)
    }).join('')

    categoriaContainer.innerHTML = cats
})