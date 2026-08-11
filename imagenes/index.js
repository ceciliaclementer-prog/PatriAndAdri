// ================================
// CUENTA ATRÁS PARA LA BODA
// ================================

function actualizarCuentaAtras() {

    // 26 de septiembre de 2026 a las 13:00
    const fechaBoda = new Date(2026, 8, 26, 13, 0, 0);

    const ahora = new Date();

    const diferencia = fechaBoda - ahora;

    const contador = document.getElementById("countdown");

    // Comprobar que existe el contador
    if (!contador) {
        console.error("No se encuentra el elemento #countdown");
        return;
    }

    // Si ya ha llegado la fecha
    if (diferencia <= 0) {

        contador.innerHTML = "💍 ¡HOY ES EL GRAN DÍA! 💍";

        return;
    }

    // Cálculo de tiempo
    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );

    const horas = Math.floor(
        (diferencia / (1000 * 60 * 60)) % 24
    );

    const minutos = Math.floor(
        (diferencia / (1000 * 60)) % 60
    );

    const segundos = Math.floor(
        (diferencia / 1000) % 60
    );

    // Mostrar resultado
    contador.innerHTML =
        `💍 Faltan <strong>${dias}</strong> días, 
        ${horas} h, 
        ${minutos} min y 
        ${segundos} s 💍`;
}


// Ejecutar inmediatamente
actualizarCuentaAtras();

// Actualizar cada segundo
setInterval(actualizarCuentaAtras, 1000);