import '../style.css';

const traducciones = {
  es: {
    // NAV
    "nav.sobre-mi": "Sobre mi",
    "nav.tecnologias": "Tecnologias",
    "nav.proyectos": "Proyectos",
    "nav.educacion": "Educacion",
    "nav.certificados": "Certificaciones",
    "nav.contacto": "Contacto",

    // INICIO
    "inicio.bienvenida": "Bienvenido/a, Soy Dylan Celentano",
    "inicio.calidad": "Calidad. Compromiso. Pasión",
    "ver.cv": "Ver CV",

    // SOBRE MI
    "sobre-mi.titulo": "Sobre mí",
    "sobre-mi.descripcion": "Soy estudiante de Ingeniería en Informática con un gran interés en el desarrollo Full Stack. Disfruto tanto del trabajo en frontend como en backend. Busco aplicar mis conocimientos y habilidades para construir soluciones efectivas, bien estructuradas y mantenibles. Valoro mucho el trabajo colaborativo, el código limpio y la mejora constante. Me entusiasma participar en proyectos donde pueda contribuir con ideas y seguir creciendo como desarrollador.",

    // TECNOLOGIAS
    "tecnologias.titulo": "Tecnologías y Base de Datos",

    // PROYECTOS
    "proyectos.btn.ver-codigo": "Ver código",
    "btn.diseño": "Ver Diseño",
    "btn.ver.pagina": "Ver Página",
    "proyectos.titulo": "Proyectos",
    "proyectos.dietetic.titulo": "Dietetic-Shop",
    "proyectos.dietetic.subtitulo": "Fundación Banco Nacion | Fundación Pescar",
    "proyectos.dietetic.tecnologias": "HTML | CSS | Tailwind | JavaScript",
    "proyectos.dietetic.descripcion": "E-commerce destinado a los comercios físicos para expandir su alcance y vender digitalmente, sin necesidad de contar con conocimientos técnicos avanzados e integrando una experiencia completa (tienda, blog, finanzas)",
    "proyectos.pokeapi.titulo": "PokeAPI",
    "proyectos.pokeapi.subtitulo": "Universidad de Buenos Aires",
    "proyectos.pokeapi.descripcion": "API REST para consultar y gestionar datos de Pokémon, incluyendo habilidades, movimientos y armado de equipos. Diseño modular y consumo de datos desde archivos CSV y guardado de la información en una base de datos SQLite.",
    "proyectos.portfolio.titulo": "Portfolio Web",
    "proyectos.portfolio.descripcion": "Portafolio interactivo, mostrando mis habilidades y proyectos en un diseño responsivo.",
    "proyectos.laburatorio.titulo": "Simulador de Entrevista Express",
    "proyectos.laburatorio.subtitulo": "Fundación Pescar",
    "proyectos.laburatorio.descripcion": "Proyecto interactivo de simulador de entrevistas laborales desarrollado para un evento de tecnología llamado Laburatorio.",

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
    "contacto.descripcion": "Si tenés alguna duda, querés saber más de mi o te interesaría que forme parte de tu equipo de trabajo no dudes en contactarme, ya sea llenando el formulario o por los siguientes medios",
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

    // INICIO
    "inicio.bienvenida": "Welcome, I'm Dylan Celentano",
    "inicio.calidad": "Quality. Commitment. Passion",
    "ver.cv": "View CV",

    // SOBRE MI
    "sobre-mi.titulo": "About me",
    "sobre-mi.descripcion": "I am a student of Computer Engineering with a great interest in Full Stack development. I enjoy both frontend and backend work. I seek to apply my knowledge and skills to build effective, well-structured, and maintainable solutions. I highly value collaborative work, clean code, and continuous improvement. I am excited to participate in projects where I can contribute ideas and continue to grow as a developer.",

    // TECNOLOGIAS
    "tecnologias.titulo": "Technologies and Databases",

    // PROYECTOS
    "proyectos.btn.ver-codigo": "View code",
    "btn.diseño": "View Design",
    "btn.ver.pagina": "View Page",
    "proyectos.titulo": "Projects",
    "proyectos.dietetic.titulo": "Dietetic-Shop",
    "proyectos.dietetic.subtitulo": "Banco Nación Foundation | Pescar Foundation",
    "proyectos.dietetic.descripcion": "E-commerce aimed at physical stores to expand their reach and sell digitally, without the need for advanced technical knowledge and integrating a complete experience (store, blog, finances)",
    "proyectos.pokeapi.titulo": "PokeAPI",
    "proyectos.pokeapi.subtitulo": "University of Buenos Aires",
    "proyectos.pokeapi.descripcion": "REST API to query and manage Pokémon data, including abilities, moves, and team building. Modular design and data consumption from CSV files and saving information in anSQLite database.",
    "proyectos.portfolio.titulo": "Web Portfolio",
    "proyectos.portfolio.descripcion": "Interactive portfolio showcasing my skills and projects in a responsive design.",
    "proyectos.laburatorio.titulo": "Interview Express Simulator",
    "proyectos.laburatorio.subtitulo": "Pescar Foundation",
    "proyectos.laburatorio.descripcion": "Interactive interview simulator project developed for a tech event called Laburatorio.",

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
    "contacto.descripcion": "If you have any questions, want to know more about me, or are interested in having me join your team, don't hesitate to get in touch — either by filling out the form or through the following channels",
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

document.addEventListener('DOMContentLoaded', () => {
  function configurarBotonIdiomas() {
    const boton_idioma = document.getElementById('boton-idioma');
    const lista_idiomas = document.getElementById('lista-idiomas');
    let idiomaActual = 'es';

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
          English (US)
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

    // Inicializa en español
    cambiarIdioma('es');
    actualizarBotonIdioma('es');
  }

  function cambiarIdioma(idioma) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const clave = el.getAttribute('data-i18n');
      if (traducciones[idioma][clave]) {
        el.textContent = traducciones[idioma][clave];
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const clave = el.getAttribute('data-i18n-placeholder');
      if (traducciones[idioma][clave]) {
        el.placeholder = traducciones[idioma][clave];
      }
    });
  }

  configurarBotonIdiomas();
});