const url = 'http://127.0.0.1:5500/'

const navElements = [
    {title: 'Home', link: `${url}../index.html`},
    {title: 'Paletas', link: `${url}../../pages/categorias/paletas.html`},
    {title: 'Remeras', link: `${url}../../pages/categorias/camisetas.html`},
    {title: 'Zapatillas', link: `${url}../../pages/categorias/zapatillas.html`},
    {title: 'Registrarse', link: `${url}../../pages/formularios/formulario.html`},
]

export const navBarComponent = `
<nav>
    <div class="logo">
        <img src="../../assets/logo.png"  alt="Icono pádel">
    </div>
    <div class="links">
        <ul class="listalinks">${
            navElements.map(e=>{
                return `
                    <li><a href=${e.link}>${e.title}</a></li>
                `
            }).join('')
        }
            <li><a href="../../pages/formularios/formulario.html"><button>Registrarse</button></a></li>
            <li><button>Logout</button></li>
        </ul>
    </div>
    </nav>
`






