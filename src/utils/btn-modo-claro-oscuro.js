import '../style.css';

document.addEventListener('DOMContentLoaded', () => {
    
    const checkbox = document.getElementById('checkbox');
    const body = document.getElementById('body');

    // por defecto empieza en modo oscuro
    body.classList.remove('modo-claro');
    checkbox.checked = false;

    checkbox.addEventListener('click', () => {
        if (checkbox.checked) {
            body.classList.add('modo-claro');
        } else {
            body.classList.remove('modo-claro')
        }
    });
});





