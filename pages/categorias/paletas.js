import { cardComponent } from "../../components/card.js";

let cardContainer = document.getElementById('cardContainer')

let cardData = [
    {
        title: 'NOX AT10 12K',
        a: 300000,
        b: 0,
        img: '../../assets/paletanox.webp',
        descripcion: 'Carbono 12k con goma eva HRD para control y potencia'
    },
    {
        title: 'Bullpadel Vertex 03',
        a: 250000,
        b: 0,
        img: '../../assets/vertex.webp',
        descripcion: 'La más vendida del mundo este año'
    },
    {
        title: 'Adidas Adipower',
        a: 280000,
        b: 0,
        img: '../../assets/adipower.webp',
        descripcion: 'Una paleta completa para jugadores intermedios'
    },
    {
        title: 'babolat technical viper',
        a: 190000,
        b: 0,
        img: '../../assets/babolat.webp',
        descripcion: 'Control perfecto y salida de bola suave'
    }
];

window.addEventListener('load', ()=>{
    const cards = cardData.map(e=>{
        return cardComponent(e)
    }).join('')

    cardContainer.innerHTML = cards
})