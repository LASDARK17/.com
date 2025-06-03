// Login
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
const loginForm = document.getElementById('loginForm');

function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days*24*60*60*1000));
  const expires = "expires="+ d.toUTCString();
  document.cookie = name + "=" + encodeURIComponent(value) + ";" + expires + ";path=/";
}

function getCookie(name) {
  const cname = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for(let i=0; i<ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(cname) === 0) {
      return c.substring(cname.length, c.length);
    }
  }
  return "";
}

loginBtn.addEventListener('click', () => {
  loginModal.style.display = 'flex';
});

// Cerrar modal al hacer clic en la X
closeModal.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

// Cerrar modal si se hace clic fuera del contenido
window.addEventListener('click', (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = 'none';
  }
});

// Manejar el envío del formulario
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = loginForm.email.value.trim();
  const password = loginForm.password.value;
  // Guardar en cookies por 7 días (ojo: NO es seguro guardar contraseña así, es solo un ejemplo)
  setCookie('userName', loginForm.name.value.trim(), 7);
  setCookie('userEmail', email, 7);
  setCookie('userPassword', password, 7);

  alert('Datos guardados en cookies. ¡Bienvenido!');

  loginModal.style.display = 'none';
  loginForm.reset();
});