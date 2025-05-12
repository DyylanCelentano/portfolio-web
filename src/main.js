import './style.css'

const carrusel = document.getElementById('carrusel')
let pos_horizontal = 0
const velocidad = 3 // Pixeles por frame

function movimientoCarrusel() {
    pos_horizontal += velocidad
    if ( pos_horizontal >= carrusel.scrollWidth / 1.5 ){
        pos_horizontal = 0
    }
    carrusel.style.transform = `translateX(-${pos_horizontal}px)`
    requestAnimationFrame(movimientoCarrusel)
}
movimientoCarrusel()