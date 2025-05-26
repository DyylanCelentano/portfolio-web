import '../style.css';

document.addEventListener('DOMContentLoaded', () => {
    // Función para configurar el carrusel
    function configurarCarrusel() {
        const carrusel = document.getElementById('carrusel');
        if (!carrusel) {
            console.error('El carrusel no se encontró en el DOM');
            return;
        }

        let pos_horizontal = 0;
        const velocidad = 2; // Pixeles por frame

        // Movimiento automático del carrusel
        function movimientoCarrusel() {
            pos_horizontal += velocidad;
            if (pos_horizontal >= carrusel.scrollWidth - carrusel.clientWidth) {
                pos_horizontal = 0; // Reinicia el scroll al inicio
            }
            carrusel.scrollLeft = pos_horizontal;
            requestAnimationFrame(movimientoCarrusel);
        }

        movimientoCarrusel();
    }

    // Inicializar funcionalidades
    configurarCarrusel();
});





