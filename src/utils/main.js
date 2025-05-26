import '../style.css';

document.addEventListener('DOMContentLoaded', () => {
    // Selecciona TODOS los botones
    const btnsCopiar = document.querySelectorAll('.btn-copiar');

    btnsCopiar.forEach(btn => {
        btn.addEventListener('click', () => {
            const parentElement = btn.parentElement;
            const textoCopiar = parentElement.querySelector('label');
            const mensajeCopiado = parentElement.querySelector('.copiado');

            if (textoCopiar && mensajeCopiado) {
                navigator.clipboard.writeText(textoCopiar.textContent.trim())
                    .then(() => {
                        mensajeCopiado.classList.remove('hidden');
                        setTimeout(() => {
                            mensajeCopiado.classList.add('hidden');
                        }, 2000);
                    })
            }
        });
    });


    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que la página se recargue

    // Enviar los datos del formulario a EmailJS
    emailjs.sendForm("service_zkdpavk", "template_fzjl80s", form)
      .then(function () {
        alert("Correo enviado exitosamente");
        form.reset(); // Limpia el formulario
      })
      .catch(function (error) {
        console.error("Error al enviar el correo:", error);
        alert("Hubo un error al enviar el correo");
      });
    });

});