

const navElements = [
    {title: 'Home', link: `${url}../../pages/home/home.html`},
    {title: 'Paletas', link: `${url}../../pages/categorias/paletas.html`},
    {title: 'Remeras', link: `${url}../../pages/categorias/camisetas.html`},
    {title: 'Zapatillas', link: `${url}../../pages/categorias/zapatillas.html`},
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
            <li><a href="../../pages/formularios/Login.html"><button>Logout</button></a></li>
        </ul>
    </div>
    </nav>
`






