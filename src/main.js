// Funcionalidad del modo oscuro/claro
const checkbox = document.getElementById('checkbox');
const body = document.getElementById('body');

checkbox.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('modo-claro');
    } else {
        body.classList.remove('modo-claro');
    }
});

// Funcionalidad del menú móvil
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('hidden');
    navLinks.classList.toggle('flex');
    navLinks.classList.toggle('flex-col');
    navLinks.classList.toggle('absolute');
    navLinks.classList.toggle('top-full');
    navLinks.classList.toggle('left-0');
    navLinks.classList.toggle('w-full');
    navLinks.classList.toggle('bg-[var(--bg-secundario)]');
    navLinks.classList.toggle('p-4');
    navLinks.classList.toggle('shadow-lg');
});

/* --------------------------- */
/* Menu mobile hamburguesa */

// Funcionalidad del menú móvil
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });

    // Cerrar menú al hacer clic en un enlace
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(event) {
        if (!mobileMenuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
            mobileMenu.classList.add('hidden');
        }
    });
}

// Smooth scroll mejorado para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});


// Funcionalidad del carrusel
const carrusel = document.getElementById('carrusel');
let isDown = false;
let startX;
let scrollLeft;

if (carrusel) {
    carrusel.addEventListener('mousedown', (e) => {
        isDown = true;
        carrusel.classList.add('dragging');
        startX = e.pageX - carrusel.offsetLeft;
        scrollLeft = carrusel.scrollLeft;
    });

    carrusel.addEventListener('mouseleave', () => {
        isDown = false;
        carrusel.classList.remove('dragging');
    });

    carrusel.addEventListener('mouseup', () => {
        isDown = false;
        carrusel.classList.remove('dragging');
    });

    carrusel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carrusel.offsetLeft;
        const walk = (x - startX) * 2;
        carrusel.scrollLeft = scrollLeft - walk;
    });
}

// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Funcionalidad boton idiomas
const traducciones = {
  es: {
    // NAV
    "nav.sobre-mi": "Sobre mi",
    "nav.tecnologias": "Tecnologias",
    "nav.proyectos": "Proyectos",
    "nav.educacion": "Educacion",
    "nav.certificados": "Certificaciones",
    "nav.contacto": "Contacto",
    "msg.copy": "¡Copiado!",

    // INICIO
    "inicio.bienvenida": "Bienvenido/a, Soy",
    "inicio.calidad": "Calidad. Compromiso. Pasión",
    "ver.cv": "Ver CV",
    "calidad": "Calidad",
    "compromiso": "Compromiso",
    "pasion": "Pasión",

    // SOBRE MI
    "sobre-mi.titulo": "Sobre mí",
    "sobre-mi.descripcion": "Soy estudiante de Ingeniería en Informática con interés en el desarrollo web Full Stack. Me gusta involucrarme tanto en el frontend como en el backend, y disfruto construir soluciones ordenadas, funcionales y sostenibles. Vengo trabajando en distintos proyectos que me permitieron poner en práctica lo aprendido, seguir mejorando y reforzar mi interés por crecer en este camino. \n Valoro el trabajo en equipo, la escritura de código limpio y aprender de cada experiencia. Mi objetivo es seguir sumando herramientas y aportar valor en los desafíos que vengan.",

    // TECNOLOGIAS
    "tecnologias.titulo": "Tecnologías y Base de Datos",

    // PROYECTOS
    "proyectos.btn.ver-codigo": "Ver código",
    "btn.diseño": "Ver Diseño",
    "btn.ver.pagina": "Ver Página",
    "proyectos.titulo": "Proyectos",
    "proyectos.dietetic.titulo": "Dietetic-Shop",
    "proyectos.dietetic.subtitulo": "Fundación Banco Nacion | Fundación Pescar",
    "proyectos.dietetic.descripcion": "Proyecto integrador académico colaborativo basado en un e-commerce destinado a los comercios físicos para expandir su alcance y vender digitalmente.",
    "proyectos.pokeapi.titulo": "PokeAPI",
    "proyectos.pokeapi.subtitulo": "Universidad de Buenos Aires",
    "proyectos.pokeapi.descripcion": "Proyecto Full Stack en equipo. Desarrollo de una API REST para consultar datos de Pokémon a partir de archivos CSV, luego migrados a SQLite. Actualmente incorporando frontend en Svelte.",
    "proyectos.portfolio.titulo": "Portfolio Web",
    "proyectos.portfolio.descripcion": "Portafolio interactivo, mostrando mis habilidades y proyectos en un diseño responsivo.",
    "proyectos.laburatorio.titulo": "Simulador de Entrevista Express",
    "proyectos.laburatorio.subtitulo": "Fundación Pescar",
    "proyectos.laburatorio.descripcion": "Proyecto realizado en equipo de simulador de entrevistas laborales desarrollado para un evento de tecnología llamado Laburatorio.",

    // EDUCACION
    "educacion.titulo": "Educación",
    "educacion.1.titulo": "Ingeniería en informática",
    "educacion.1.institucion": "Universidad de Buenos Aires",
    "educacion.1.fecha": "Junio 2023 - en curso",
    "educacion.2.titulo": "Desarrollador Web Full Stack",
    "educacion.2.institucion": "EducaciónIT | Fundación Banco Nación | Fundación Pescar",
    "educacion.2.fecha": "2025 - en curso",
    "educacion.3.titulo": "Técnico en Informática Profesional",

    // CERTIFICADOS
    "certificados.titulo": "Certificaciones y Títulos",
    "certificados.btn.ver": "Ver Certificado",
    "certificados.1.titulo": "Desarrollador Web Full Stack",
    "certificados.2.titulo": "JavaScript desde Cero",
    "certificados.3.titulo": "Maquetador Web Avanzado",
    "certificados.4.titulo": "Programación Orientada a Objetos con IA",
    "certificados.5.titulo": "Git: Desarrollo Colaborativo",
    "certificados.6.titulo": "Técnico en Informática Profesional",
    "certificados.7.titulo": "Visual Basic .NET Avanzado",

    // FORMULARIO
    "contacto.titulo": "Contactame",
    "contacto.descripcion": "¿Tenés alguna duda? ¿Querés saber más de mí? ¿Te interesaría que forme parte de tu equipo de trabajo? ¡No dudes en escribirme!",
    "form.nombre": "Nombre y apellido",
    "form.correo": "Correo",
    "form.asunto": "Asunto",
    "form.mensaje": "Mensaje",
    "form.enviar": "Enviar",
    "form.limpiar": "Limpiar",
    "form.placeholder.nombre": "Ingrese su nombre y apellido",
    "form.placeholder.correo": "Ingrese un correo",
    "form.placeholder.asunto": "Ingrese un asunto",
    "form.placeholder.mensaje": "Ingrese su mensaje",
    "form.enviar": "Enviar",
    "form.limpiar": "Limpiar",
    "footer.derechos": "© Todos los derechos reservados Dylan Celentano 2025"
  },
  en: {
    // NAV
    "nav.sobre-mi": "About me",
    "nav.tecnologias": "Technologies",
    "nav.proyectos": "Projects",
    "nav.educacion": "Education",
    "nav.certificados": "Certifications",
    "nav.contacto": "Contact",
    "msg.copy": "Copied!",

    // INICIO
    "inicio.bienvenida": "Welcome, I'm",
    "inicio.calidad": "Quality. Commitment. Passion",
    "ver.cv": "View CV",
    "calidad": "Quality",
    "compromiso": "Commitment",
    "pasion": "Passion",

    // SOBRE MI
    "sobre-mi.titulo": "About me",
    "sobre-mi.descripcion": "I am a Computer Engineering student with an interest in Full Stack web development. I enjoy getting involved in both frontend and backend, and I like building organized, functional, and sustainable solutions. I have been working on different projects that allowed me to put what I have learned into practice, continue improving, and reinforce my desire to grow in this field.\nI value teamwork, writing clean code, and learning from every experience. My goal is to keep adding new skills and contribute value to future challenges.",

    // TECNOLOGIAS
    "tecnologias.titulo": "Technologies and Databases",

    // PROJECTS
    "proyectos.btn.ver-codigo": "View code",
    "btn.diseño": "View Design",
    "btn.ver.pagina": "View Page",
    "proyectos.titulo": "Projects",
    "proyectos.dietetic.titulo": "Dietetic-Shop",
    "proyectos.dietetic.subtitulo": "Banco Nación Foundation | Pescar Foundation",
    "proyectos.dietetic.descripcion": "Collaborative academic integrative project based on an e-commerce platform aimed at physical stores to expand their reach and sell digitally.",
    "proyectos.pokeapi.titulo": "PokeAPI",
    "proyectos.pokeapi.subtitulo": "University of Buenos Aires",
    "proyectos.pokeapi.descripcion": "Team Full Stack project. Development of a REST API to query Pokémon data from CSV files, later migrated to SQLite. Currently adding a frontend in Svelte.",
    "proyectos.portfolio.titulo": "Web Portfolio",
    "proyectos.portfolio.descripcion": "Interactive portfolio showcasing my skills and projects in a responsive design.",
    "proyectos.laburatorio.titulo": "Interview Express Simulator",
    "proyectos.laburatorio.subtitulo": "Pescar Foundation",
    "proyectos.laburatorio.descripcion": "Team project: job interview simulator developed for a technology event called Laburatorio.",

    // EDUCACION
    "educacion.titulo": "Education",
    "educacion.1.titulo": "Computer Engineering",
    "educacion.1.institucion": "University of Buenos Aires",
    "educacion.1.fecha": "June 2023 - ongoing",
    "educacion.2.titulo": "Full Stack Web Developer",
    "educacion.2.institucion": "EducaciónIT | Banco Nación Foundation | Pescar Foundation",
    "educacion.2.fecha": "2025 - ongoing",
    "educacion.3.titulo": "Professional IT Technician",

    // CERTIFICADOS
    "certificados.titulo": "Certifications and Titles",
    "certificados.btn.ver": "View Certificate",
    "certificados.1.titulo": "Full Stack Web Developer",
    "certificados.2.titulo": "JavaScript for beginners",
    "certificados.3.titulo": "Advanced web developer",
    "certificados.4.titulo": "Object-Oriented Programming with AI",
    "certificados.5.titulo": "Git: Collaborative Development",
    "certificados.6.titulo": "Professional IT Technician",
    "certificados.7.titulo": "Visual Basic .NET Advanced",


    // FORMULARIO
    "contacto.titulo": "Contact me",
    "contacto.descripcion": "Do you have any questions? Want to know more about me? Interested in having me on your team? Don’t hesitate to reach out!",
    "form.nombre": "Full name",
    "form.correo": "Email",
    "form.asunto": "Subject",
    "form.mensaje": "Message",
    "form.enviar": "Send",
    "form.limpiar": "Clear",
    "form.placeholder.nombre": "Enter your full name",
    "form.placeholder.correo": "Enter your email",
    "form.placeholder.asunto": "Enter a subject",
    "form.placeholder.mensaje": "Enter your message",
    "form.enviar": "Send",
    "form.limpiar": "Clear",
    "footer.derechos": "© All rights reserved Dylan Celentano 2025"
  }
};


function configurarBotonIdiomas() {
const boton_idioma = document.getElementById('boton-idioma');
const lista_idiomas = document.getElementById('lista-idiomas');
let idiomaActual = localStorage.getItem('idiomaSeleccionado') || 'es'; // Cargar idioma guardado o usar 'es'

// Función para actualizar el botón principal según idioma
function actualizarBotonIdioma(idioma) {
    if (idioma === 'es') {
    boton_idioma.innerHTML = `
        <img src="svg/flag-argentina.svg" class="h-5 mx-3 w-5">
        Español
    `;
    } else if (idioma === 'en') {
    boton_idioma.innerHTML = `
        <img src="svg/flag-us.svg" class="h-5 mx-3 w-5">
        English
    `;
    }
}

// Mostrar/ocultar menú de idiomas
boton_idioma.addEventListener('click', () => {
    lista_idiomas.classList.toggle('hidden');
});

document.addEventListener('click', (evento) => {
    if (!boton_idioma.contains(evento.target) && !lista_idiomas.contains(evento.target)) {
    lista_idiomas.classList.add('hidden');
    }
});

// Cambiar idioma al hacer click en una opción
lista_idiomas.querySelectorAll('a[data-idioma]').forEach(opcion => {
    opcion.addEventListener('click', (e) => {
    e.preventDefault();
    const idioma = opcion.getAttribute('data-idioma');
    idiomaActual = idioma;
    cambiarIdioma(idiomaActual);
    actualizarBotonIdioma(idiomaActual);
    lista_idiomas.classList.add('hidden');
    });
});

// Inicializar el idioma al cargar la página
cambiarIdioma(idiomaActual);
actualizarBotonIdioma(idiomaActual);
}

function cambiarIdioma(idioma) {
// Guardar el idioma en Local Storage
localStorage.setItem('idiomaSeleccionado', idioma);

// Actualizar el texto de los elementos con data-i18n
document.querySelectorAll('[data-i18n]').forEach(el => {
    const clave = el.getAttribute('data-i18n');
    if (traducciones[idioma][clave]) {
    el.textContent = traducciones[idioma][clave];
    }
});

// Actualizar los placeholders
document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const clave = el.getAttribute('data-i18n-placeholder');
    if (traducciones[idioma][clave]) {
    el.placeholder = traducciones[idioma][clave];
    }
});
}

configurarBotonIdiomas();

/* ------------------------- */
/* Funcionamiento para formulario */
import emailjs from 'emailjs-com';
emailjs.init(import.meta.env.VITE_PUBLIC_ID);


const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que la página se recargue

    // Selecciona los campos del formulario
    const nombre = form.querySelector('input[name="nombre-apellido"]');
    const correo = form.querySelector('input[name="correo"]');
    const asunto = form.querySelector('input[name="asunto"]');
    const mensaje = form.querySelector('textarea[name="mensaje"]');

    // Validar campos vacíos
    if (!nombre.value.trim() || !correo.value.trim() || !asunto.value.trim() || !mensaje.value.trim()) {
        alert("Por favor, completa todos los campos");
        return;
    }

    // Validar formato del correo
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo.value.trim())) {
        alert("Por favor, ingresa un correo válido.");
        return;
    }

    // Si todo está bien se envía el formulario
    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form)
        .then(function () {
            alert("Correo enviado exitosamente");
            form.reset(); // Limpia el formulario
        })
        .catch(function (error) {
            alert("Hubo un error al enviar el correo");
        });
});
