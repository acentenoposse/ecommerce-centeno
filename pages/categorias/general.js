import { cardComponent } from "../../components/card.js";

const cardContainer = document.getElementById("cardContainer");

fetch("../../data.json").then(response => response.json()).then(data => {
    const paletas = data.productos.filter(item => item.categoria === "paleta");

    cardContainer.innerHTML = paletas.map(item => cardComponent(item)).join("");
}).catch(error => {
    console.error("Error cargando productos:", error);});





const zapaContainer = document.getElementById("cardZapaContainer");

fetch("../../data.json").then(response=> response.json()).then(data => {
    const zapatillas = data.productos.filter(item => item.categoria === "zapatillas");
    zapaContainer.innerHTML = zapatillas.map (item => cardComponent(item)).join("");
}).catch(error => {
    console.error("Error cargando productos:", error);});




const camisetaContainer = document.getElementById("cardCamiContainer");

fetch("../../data.json").then(response=> response.json()).then(data => {
    const camisetas = data.productos.filter(item => item.categoria === "camiseta");
    camisetaContainer.innerHTML = camisetas.map (item => cardComponent(item)).join("");
}).catch(error => {
    console.error("Error cargando productos:", error);});    