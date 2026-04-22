# Padel Nuestro — Rediseño UI/UX

Rediseño completo de la interfaz respetando la paleta de morados/magentas original.

## Qué cambió

### `CSS/styles.css`
Reescritura completa. Mantiene todos los nombres de clases del proyecto original para no romper el JS existente. Principales cambios:

- **Design tokens** en `:root` (paleta, espaciados, radios, sombras, transiciones)
- **Tipografía**: Sora (display) + Manrope (body) vía Google Fonts
- **Navbar** sticky con blur y glow magenta — links de texto con underline animado, botones (Registrarse/Logout) como pills sin underline
- **Cards de categoría (home)**: grid responsivo, imagen grande, hover con elevación y glow magenta, link "Ver productos →" con flecha
- **Cards de producto**: altura 540px, layout vertical con título + descripción + precio + controles de cantidad + contador. Imagen sobre fondo blanco (la paleta ya no se corta)
- **Formularios**: grid alineada `minmax(150px, 200px) 1fr` para que todos los labels/inputs queden alineados. Focus ring magenta en inputs
- **Carrito**: tabla con header morado, filas zebra, hover sutil, botones +/− con gradientes distintos
- **Footer**: degradado morado oscuro → casi negro, grid responsivo
- **Animaciones**: `fadeUp` escalonado en cards, `shimmer` en badge top de product cards, respeto de `prefers-reduced-motion`
- **Responsive real**: breakpoints a 1024 / 768 / 480px

### `components/navbar.js`
- Se limpió la estructura: `<a class="boton-nav">Registrarse</a>` en vez de `<a><button>Registrarse</button></a>` (el CSS también soporta el markup legacy por si lo dejás como estaba)
- Logo apunta a `assets/logo.svg`
- Se corrigió el typo `Login.html` → `login.html`
- Cart icon con clase `.nav-cart` para estilado consistente

### HTMLs (`pages/**/*.html`)
- `lang="es"` en todas (varias estaban como `lang="en"`)
- `<meta viewport>` agregado donde faltaba
- Títulos descriptivos en vez de "Document"
- Favicon apuntando al logo SVG
- `formulario.html`: se eliminó el `<form>` nested dentro del `<form>` (era inválido)

### `assets/`
- `logo.svg` — logo nuevo con paleta estilizada + glow
- `add.svg`, `remove.svg` — íconos +/− para las cards de producto
- `cart.svg` — ícono del navbar

Tenés que agregar tu propia imagen `tapia.jpeg` a `assets/` para que aparezca en el login (o cambiarla por otra).

## Cómo integrarlo

1. Reemplazá `CSS/styles.css` con el nuevo
2. Reemplazá `components/navbar.js` con el nuevo
3. Reemplazá todos los HTMLs de `pages/` con los nuevos
4. Copiá los archivos de `assets/` a tu carpeta `assets/` (sumá a los que ya tenés, no los borres)
5. `index.js`, `components/footer.js`, `components/card.js`, `components/categorias.js` se quedan igual — los incluí por completitud

## Notas

- El texto del botón sigue diciendo **"Logout"** pero apunta a `login.html` (respetó tu lógica). Si querés que diga "Login" hasta implementar sesión, cambialo en `navbar.js` línea del segundo `.boton-nav`
- El `<h2>` que tenías en las cards de categoría (`.cat-info h2`) está estilizado como descripción secundaria, pero el markup real de `categorias.js` usa `<h2>` para la descripción, así que todo ok
- Para ver el resultado antes de integrar, abrí `preview.html` directamente en el navegador

## Estructura final

```
proyecto/
├── index.js                          (sin cambios)
├── CSS/
│   └── styles.css                    (REEMPLAZAR)
├── assets/
│   ├── logo.svg                      (NUEVO)
│   ├── add.svg                       (NUEVO)
│   ├── remove.svg                    (NUEVO)
│   ├── cart.svg                      (NUEVO)
│   └── tapia.jpeg                    (mantener la tuya)
├── components/
│   ├── navbar.js                     (REEMPLAZAR)
│   ├── footer.js                     (sin cambios)
│   ├── card.js                       (sin cambios)
│   └── categorias.js                 (sin cambios)
└── pages/
    ├── home/
    │   ├── home.html                 (REEMPLAZAR)
    │   └── home.js                   (sin cambios)
    ├── categorias/
    │   ├── paletas.html              (REEMPLAZAR)
    │   ├── zapatillas.html           (REEMPLAZAR)
    │   ├── camisetas.html            (REEMPLAZAR)
    │   └── general.js                (sin cambios)
    ├── formularios/
    │   ├── formulario.html           (REEMPLAZAR)
    │   ├── login.html                (REEMPLAZAR)
    │   └── login.js                  (sin cambios)
    └── carrito/
        ├── carrito.html              (REEMPLAZAR)
        └── carrito.js                (sin cambios)
```
