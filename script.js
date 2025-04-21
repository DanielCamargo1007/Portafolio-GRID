// Aquí puedes agregar funcionalidades más adelante
console.log("Portafolio cargado correctamente");

const toggleButton = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

toggleButton.addEventListener('click', () => {
  nav.classList.toggle('show');
});