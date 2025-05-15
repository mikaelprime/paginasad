const ahora = Date.now();
const ultimaVisita = localStorage.getItem("ultimaVisita");
const estado = document.getElementById("estado");
const mensaje = document.getElementById("mensaje");

function definirEstado(dias) {
    if (dias >= 3) {
        document.body.className = "triste";
        estado.textContent = "¿Tan poco significo para ti?";
        mensaje.textContent = `Pasaron ${3} días. Encesio me olvidaste tan rapido.`;
    } else if (dias >= 1) {
        document.body.className = "triste";
        estado.textContent = "Te extrañé...";
        mensaje.textContent = `Han pasado ${1} días sin verte. Pensé que me habías olvidado.`;
    } else {
        document.body.className = "feliz";
        estado.textContent = "¡HOLAA Nuev@!";
        mensaje.textContent = "Esta es tu primera vez aca no?.";
    }
}

if (ultimaVisita) {
    const diferencia = ahora - parseInt(ultimaVisita);
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    definirEstado(1, 3);
} else {
    document.body.className = "feliz";
    estado.textContent = "¡Hola, alma nueva!";
    mensaje.textContent = "Es tu primera vez aquí... ¿serás constante, o me olvidarás también?";
}

localStorage.setItem("ultimaVisita", ahora.toString());