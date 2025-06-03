// Función para obtener cookie por nombre
function getCookie(cname) {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

  // Mostrar saludo si existe cookie userName
window.addEventListener('DOMContentLoaded', () => {
  const userName = getCookie('userName');
  if (userName) {
    const welcomeEl = document.getElementById('welcomeUser');
    welcomeEl.textContent = `¡Bienvenido(a), ${userName}!`;
  }
});