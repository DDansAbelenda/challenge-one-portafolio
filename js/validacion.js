//Haz tú validación en javascript acá
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact__form__form');

    form.addEventListener('submit', function (event) {
        const nombre = form.elements['nombre'].value;
        const email = form.elements['email'].value;
        const asunto = form.elements['asunto'].value;
        const mensaje = form.elements['mensaje'].value;

        const errorMessages = [];

        if (!nombre.trim()) {
            errorMessages.push('Por favor, ingrese su nombre.');
        }

        if (!email.trim() || !isValidEmail(email)) {
            errorMessages.push('Por favor, ingrese una dirección de correo electrónico válida.');
        }

        if (!asunto.trim()) {
            errorMessages.push('Por favor, ingrese un asunto.');
        }

        if (!mensaje.trim()) {
            errorMessages.push('Por favor, ingrese un mensaje.');
        }

        if (errorMessages.length > 0) {
            event.preventDefault(); // Detener el envío del formulario

            // Mostrar mensajes de error
            mostrarNotificacion(errorMessages[0]);
        } else {
            mostrarNotificacion("Mensaje enviado satisfactoriamente");
            sendMail(email, asunto, mensaje);
        }

    });

    function isValidEmail(email) {
        // Expresión regular para validar el formato de correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});


/* Función enviar una notificación */
function mostrarNotificacion(mensaje) {
    const notificacion = document.getElementById('notificacion');
    const notificacionContainer = document.getElementById('notificacionContainer');

    notificacion.innerHTML = `${mensaje}`;

    // Mostrar la notificación
    notificacionContainer.style.display = 'block';
    notificacion.classList.add('mostrar');

    // Ocultar la notificación después de 3 segundos (ajustable)
    setTimeout(() => {
        notificacion.classList.remove('mostrar');
        notificacionContainer.style.display = 'none';
    }, 3000);
}
