/* ============================================================
   WEB PROFILE TEMPLATE - SCRIPT
   UniEspinal · Técnico Profesional en Programación Web

   THIS IS THE FILE YOU WILL WORK ON THE MOST.

   Below there are two dictionaries: ES and EN.
   They have exactly the same keys, but different texts.

   IMPORTANT: the English version is NOT a translation of the
   Spanish version. A professional profile in English follows
   different rules. Read NOTES.md before you write it.
   ============================================================ */


/* ------------------------------------------------------------
   1. SPANISH TEXTS
   ------------------------------------------------------------ */
const ES = {
  "nav.home":      "INICIO",
  "nav.about":     "SOBRE MÍ",
  "nav.skills":    "HABILIDADES",
  "nav.resume":    "FORMACIÓN",
  "nav.portfolio": "PROYECTOS",
  "nav.contact":   "CONTACTO",

  "hero.role": "Estudiante de Ingeniería de Sistemas",

  "about.title":          "Sobre Mí",
  "about.text":           "Hola, soy Valery Sofia, estudiante de Ingeniería de Sistemas y actualmente curso cuarto semestre. Me interesan la tecnología, la programación y el desarrollo web. Me gusta aprender nuevas herramientas, resolver problemas y desarrollar soluciones que puedan ayudar a las personas. Mi objetivo es seguir fortaleciendo mis conocimientos y crecer profesionalmente en el área tecnológica.",
  "about.infoTitle":      "Información",
  "about.labelLocation":  "Ubicación",
  "about.valueLocation":  "Colombia",
  "about.labelEmail":     "Correo",
  "about.labelLanguages": "Idiomas",
  "about.valueLanguages": "Español · Inglés en formación",
  "about.labelStatus":    "Disponibilidad",
  "about.valueStatus":    "Abierto a prácticas",
  "about.interestsTitle": "Intereses",

  "interest.1": "CÓDIGO",
  "interest.2": "SOPORTE",
  "interest.3": "LECTURA",
  "interest.4": "JUEGOS",

  "skills.title":        "Habilidades",
  "skills.technical":    "Habilidades técnicas",
  "skills.professional": "Habilidades profesionales",
  "skill.support":       "Soporte al usuario",
  "skill.teamwork":      "Trabajo en equipo",
  "skill.problem":       "Resolución de problemas",
  "skill.english":       "Inglés técnico",

  "resume.title":      "Formación y experiencia",
  "resume.education":  "Formación",
  "resume.experience": "Experiencia",

  "edu.1.title": "Ingeniería de Sistemas",
  "edu.1.text":  "Actualmente curso cuarto semestre y desarrollo conocimientos en programación, bases de datos, análisis de problemas y creación de soluciones tecnológicas.",
  "edu.2.title": "Aprendizaje en desarrollo web",
  "edu.2.text":  "Estoy fortaleciendo mis conocimientos de HTML, CSS, JavaScript y herramientas para publicar y mantener proyectos web.",

  "exp.1.title": "Proyecto académico CafaNet",
  "exp.1.text":  "Participación en la planeación y diseño de una propuesta de plataforma web institucional, con módulos para estudiantes, docentes y administración.",
  "exp.2.title": "Prácticas de programación web",
  "exp.2.text":  "Desarrollo de ejercicios académicos para practicar la estructura de páginas, estilos CSS y funciones interactivas con JavaScript.",

  "portfolio.title": "Proyectos",
  "project.1.title": "CafaNet",
  "project.1.text":  "Propuesta de plataforma institucional · Diseño y planificación",
  "project.2.title": "Personal Portfolio",
  "project.2.text":  "HTML · CSS · JavaScript · GitHub Pages",
  "project.3.title": "Web Programming Exercises",
  "project.3.text":  "Prácticas académicas de programación web",

  "contact.title":         "Contacto",
  "contact.intro":         "Gracias por visitar mi portafolio. Puedes conocer mis proyectos académicos y contactarme a través de mis perfiles profesionales.",
  "contact.emailLabel":    "GitHub",
  "contact.linkedinValue": "Perfil por agregar",

  "footer.note": "Valery Sofia · Estudiante de Ingeniería de Sistemas"
};


/* ------------------------------------------------------------
   2. ENGLISH TEXTS

   Before writing this section, remember:
   - Use action verbs: built, configured, fixed, tested, supported.
   - Do not include age, marital status or a home address.
   - Do not translate word by word. Rewrite.
   ------------------------------------------------------------ */
const EN = {
  "nav.home":      "HOME",
  "nav.about":     "ABOUT",
  "nav.skills":    "SKILLS",
  "nav.resume":    "RESUME",
  "nav.portfolio": "PROJECTS",
  "nav.contact":   "CONTACT",

  "hero.role": "Systems Engineering Student",

  "about.title":          "About Me",
  "about.text":           "Hello! My name is Valery Sofia, and I am a Systems Engineering student currently in my fourth semester. I am interested in technology, programming, and web development. I enjoy learning new tools, solving problems, and creating solutions that can help people. My goal is to strengthen my skills and continue growing professionally in the technology field.",
  "about.infoTitle":      "Information",
  "about.labelLocation":  "Location",
  "about.valueLocation":  "Colombia",
  "about.labelEmail":     "Email",
  "about.labelLanguages": "Languages",
  "about.valueLanguages": "Spanish · English in progress",
  "about.labelStatus":    "Availability",
  "about.valueStatus":    "Open to internships",
  "about.interestsTitle": "Interests",

  "interest.1": "CODE",
  "interest.2": "SUPPORT",
  "interest.3": "READING",
  "interest.4": "GAMING",

  "skills.title":        "Skills",
  "skills.technical":    "Technical skills",
  "skills.professional": "Professional skills",
  "skill.support":       "User support",
  "skill.teamwork":      "Teamwork",
  "skill.problem":       "Problem solving",
  "skill.english":       "Technical English",

  "resume.title":      "Education and experience",
  "resume.education":  "Education",
  "resume.experience": "Experience",

  "edu.1.title": "Systems Engineering",
  "edu.1.text":  "I am currently in my fourth semester, developing knowledge of programming, databases, problem analysis, and technology-based solutions.",
  "edu.2.title": "Web Development Learning",
  "edu.2.text":  "I am building my knowledge of HTML, CSS, JavaScript, and tools for publishing and maintaining web projects.",

  "exp.1.title": "CafaNet Academic Project",
  "exp.1.text":  "Contributed to planning and designing an institutional web platform proposal with modules for students, teachers, and administrators.",
  "exp.2.title": "Web Programming Practice",
  "exp.2.text":  "Worked on academic exercises to practice page structure, CSS styling, and interactive features with JavaScript.",

  "portfolio.title": "Projects",
  "project.1.title": "CafaNet",
  "project.1.text":  "Institutional platform proposal · Planning and design",
  "project.2.title": "Personal Portfolio",
  "project.2.text":  "HTML · CSS · JavaScript · GitHub Pages",
  "project.3.title": "Web Programming Exercises",
  "project.3.text":  "Academic web programming practice",

  "contact.title":         "Contact",
  "contact.intro":         "Thank you for visiting my portfolio. You can explore my academic projects and connect with me through my professional profiles.",
  "contact.emailLabel":    "GitHub",
  "contact.linkedinValue": "Profile to be added",

  "footer.note": "Valery Sofia · Systems Engineering Student"
};


/* ============================================================
   3. LANGUAGE SWITCHER
   You do not need to change the code below.
   ============================================================ */

const DICCIONARIOS = { es: ES, en: EN };
let idiomaActual = "es";

function aplicarIdioma(idioma) {
  const textos = DICCIONARIOS[idioma];
  if (!textos) return;

  document.querySelectorAll("[data-i18n]").forEach(elemento => {
    const clave = elemento.getAttribute("data-i18n");
    if (textos[clave] !== undefined) {
      elemento.textContent = textos[clave];
    } else {
      console.warn("Missing translation key:", clave);
    }
  });

  document.documentElement.lang = idioma;

  const boton = document.getElementById("btn-idioma");
  if (boton) {
    const otro = idioma === "es" ? "en" : "es";
    boton.innerHTML =
      '<span class="idioma-activo">'   + idioma.toUpperCase() + '</span>' +
      '<span class="idioma-sep">/</span>' +
      '<span class="idioma-inactivo">' + otro.toUpperCase()   + '</span>';
    boton.setAttribute("aria-label",
      idioma === "es" ? "Switch to English" : "Cambiar a español");
  }

  idiomaActual = idioma;
}

function cambiarIdioma() {
  aplicarIdioma(idiomaActual === "es" ? "en" : "es");
}


/* ============================================================
   4. RESPONSIVE MENU
   ============================================================ */

let menuVisible = false;

function mostrarOcultarMenu() {
  const nav = document.getElementById("nav");
  menuVisible = !menuVisible;
  nav.className = menuVisible ? "responsive" : "";
}

function cerrarMenu() {
  document.getElementById("nav").className = "";
  menuVisible = false;
}


/* ============================================================
   5. SKILL BARS

   The width comes from the data-percent attribute in index.html.
   You can add or remove skills freely: this code does not depend
   on how many there are.
   ============================================================ */

function animarHabilidades() {
  const barras = document.querySelectorAll(".progreso");

  const mostrar = barra => {
    const porcentaje = barra.getAttribute("data-percent") || "0";
    barra.style.width = porcentaje + "%";
    const etiqueta = barra.querySelector("span");
    if (etiqueta) etiqueta.textContent = porcentaje + "%";
  };

  if (!("IntersectionObserver" in window)) {
    barras.forEach(mostrar);
    return;
  }

  const observador = new IntersectionObserver((entradas, obs) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        mostrar(entrada.target);
        obs.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.4 });

  barras.forEach(barra => observador.observe(barra));
}


/* ============================================================
   6. START
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  aplicarIdioma("es");
  animarHabilidades();
});
