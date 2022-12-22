function mostrarMensaje() {
    alert("El informe meteorológico se esta cargando...");
}

function cambiarGrados(value) {
    const GRADOS = document.querySelectorAll(".min, .max");
    for (let i = 0; i < GRADOS.length; i++) {
        let tempGrados = parseInt(GRADOS[i].innerText);
        if (value == "Farenheit") {
            GRADOS[i].innerText = celsius_farenheit(tempGrados);
        }
        else {
            GRADOS[i].innerText = farenheit_celsius(tempGrados);
        }
    }
}

function celsius_farenheit(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function farenheit_celsius(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function cerrar() {
    const COOKIE = document.querySelector(".cookies")
    COOKIE.remove();
}