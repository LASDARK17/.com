  function toggleMenu() {
    const nav = document.querySelector('nav');
    const hamburger = document.getElementById('hamburgerButton');
    nav.classList.toggle('show');
    hamburger.classList.toggle('open');
  }

  // Cierra el menú al hacer clic en un botón de navegación (opcional)
  document.querySelectorAll('.nav-button').forEach(button => {
    button.addEventListener('click', () => {
      const nav = document.querySelector('nav');
      const hamburger = document.getElementById('hamburgerButton');
      nav.classList.remove('show');
      hamburger.classList.remove('open');
    });
  });