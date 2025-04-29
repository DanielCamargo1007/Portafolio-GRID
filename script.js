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

            // 🔥 Nueva lógica: cargar primer PDF automático según el proyecto
            if (modalId === "modal-proyecto1") {
                const visorPDF1 = document.getElementById('visor-pdf-proyecto1');
                if (visorPDF1) {
                    visorPDF1.src = 'docs/CP6-HAM-CLHAM180-CIV-PTP_001_0_1-2.pdf'; // Cambia esta ruta al primer PDF de Proyecto 1
                }
            }
            if (modalId === "modal-proyecto3") {
                const visorPDF3 = document.getElementById('visor-pdf-proyecto3');
                if (visorPDF3) {
                    visorPDF3.src = 'docs/GIASBDBCA-01.pdf'; // Primer PDF de Proyecto 3
                }
            }
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



function mostrarPDF(ruta, visorId) {
    const visor = document.getElementById(visorId);
    if (visor) {
      visor.src = ruta;
    }
  }