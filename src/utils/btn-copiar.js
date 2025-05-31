import '../style.css';

document.addEventListener('DOMContentLoaded', () => {
    // Selecciona TODOS los botones
    const btnsCopiar = document.querySelectorAll('.btn-copiar');

    btnsCopiar.forEach(btn => {
        btn.addEventListener('click', () => {
            const parentElement = btn.parentElement;
            const textoCopiar = "dyylancelentano@gmail.com"
            const mensajeCopiado = parentElement.querySelector('.copiado');

            if (textoCopiar && mensajeCopiado) {
                navigator.clipboard.writeText(textoCopiar.trim())
                    .then(() => {
                        mensajeCopiado.classList.remove('hidden');
                        setTimeout(() => {
                            mensajeCopiado.classList.add('hidden');
                        }, 2000);
                    })
            }
        });
    });
    

});