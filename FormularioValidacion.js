const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
const loginForm = document.getElementById('loginForm');
const formMessage = document.getElementById('formMessage');

// Mostrar modal
loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'flex';
  loginModal.setAttribute('aria-hidden', 'false');
  formMessage.textContent = '';
});

// Cerrar modal
closeModal.addEventListener('click', () => {
  loginModal.style.display = 'none';
  loginModal.setAttribute('aria-hidden', 'true');
  loginForm.reset();
  formMessage.textContent = '';
});

// Cerrar modal si clic fuera
window.addEventListener('click', (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = 'none';
    loginModal.setAttribute('aria-hidden', 'true');
    loginForm.reset();
    formMessage.textContent = '';
  }
});

// Validación formulario
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Limpiar mensaje
  formMessage.textContent = '';

  const name = loginForm.name.value.trim();
  const email = loginForm.email.value.trim();
  const password = loginForm.password.value;

  // Validar nombre mínimo 3 caracteres
  if (name.length < 3) {
    formMessage.textContent = 'Por favor, ingresa un nombre válido (mínimo 3 caracteres).';
    loginForm.name.focus();
    return;
  }

  // Validar email con expresión regular simple
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = 'Por favor, ingresa un correo electrónico válido.';
    loginForm.email.focus();
    return;
  }

  // Validar contraseña mínimo 6 caracteres
  if (password.length < 6) {
    formMessage.textContent = 'La contraseña debe tener al menos 6 caracteres.';
    loginForm.password.focus();
    return;
  }

  // Aquí puedes agregar la lógica para enviar datos al servidor o guardar sesión...

  formMessage.style.color = '#4CAF50'; // Verde para éxito
  formMessage.textContent = `¡Bienvenido, ${name}! Has iniciado sesión correctamente.`;

  // Opcional: cerrar modal luego de unos segundos
  setTimeout(() => {
    loginModal.style.display = 'none';
    loginModal.setAttribute('aria-hidden', 'true');
    loginForm.reset();
    formMessage.textContent = '';
    formMessage.style.color = '#f54242'; // volver a rojo
  }, 3000);
});
