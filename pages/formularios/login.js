const emailCorrecto = "agustin@gmail.com";
const passwordCorrecta = "123456";

const form = document.getElementById("formLogin");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const emailIngresado = document.getElementById("txtMail").value;
    const passIngresada = document.getElementById("txtContrasena").value;

    if (emailIngresado === emailCorrecto && passIngresada === passwordCorrecta) {

        const usuario = {
            email: emailIngresado,
            fechaLogin: new Date().toISOString()
        };
        sessionStorage.setItem("usuarioLogueado", JSON.stringify(usuario));
        window.location.href = "../home/home.html";
    } else {
        alert("Correo o contraseña incorrectos");
    }
});