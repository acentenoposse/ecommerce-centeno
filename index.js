import { navBarComponent } from "./components/navbar.js";
import { footerComponent } from "./components/footer.js";

let navContainer = document.querySelector('header')
window.addEventListener('load', ()=>{
    navContainer.innerHTML = navBarComponent
})

let footerContainer = document.querySelector('footer')
window.addEventListener('load', ()=>{
    footerContainer.innerHTML = footerComponent
})