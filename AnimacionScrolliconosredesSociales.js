document.addEventListener("DOMContentLoaded", () => {
  const redes = document.getElementById("redes-sociales");

  function activarAnimacion() {
    const rect = redes.getBoundingClientRect();
    const ventanaAltura = window.innerHeight || document.documentElement.clientHeight;

    if (rect.top <= ventanaAltura * 0.75) {
      redes.classList.add("activo");
      window.removeEventListener("scroll", activarAnimacion);
    }
  }

  window.addEventListener("scroll", activarAnimacion);
  activarAnimacion(); // para el caso que ya esté visible al cargar
});