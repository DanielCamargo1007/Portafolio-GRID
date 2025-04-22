// Aquí puedes agregar funcionalidades más adelante
console.log("Portafolio cargado correctamente");

const toggleButton = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

toggleButton.addEventListener('click', () => {
  nav.classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', function() {
    const proyectos = document.querySelectorAll('.proyecto');
    const modales = document.querySelectorAll('.modal');
    const botonesCerrar = document.querySelectorAll('.cerrar-modal');

    proyectos.forEach(proyecto => {
        proyecto.addEventListener('click', function() {
            const modalId = this.dataset.modal;
            const modal = document.getElementById(modalId);
            modal.style.display = "block";
        });
    });

    botonesCerrar.forEach(boton => {
        boton.addEventListener('click', function() {
            const modal = this.parentNode.parentNode; // Subimos dos niveles para obtener la modal
            modal.style.display = "none";
        });
    });

    window.addEventListener('click', function(event) {
        modales.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});

function mostrarPDF(ruta) {
    document.getElementById('visor-pdf').src = ruta;
  }