const emailCorrecto = "agustin@gmail.com";
const passwordCorrecta = "123456";

const form = document.getElementById("formLogin");
const errorMsg = document.getElementById("errorMsg");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const emailIngresado = document.getElementById("txtMail").value;
    const passIngresada = document.getElementById("txtContrasena").value;

    if (emailIngresado === emailCorrecto && passIngresada === passwordCorrecta) {
        window.location.href = "../home/home.html"; // ir al home
    } else {
        alert("Correo o contraseña incorrectos");
    }
});