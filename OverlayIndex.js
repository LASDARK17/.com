  document.addEventListener("DOMContentLoaded", () => {
        const overlay = document.getElementById("overlay");
        const cerrarBtn = document.getElementById("cerrarBtn");
        const body = document.getElementById("bodyOverlay");

        // Función para cerrar el overlay
        const cerrarOverlay = (fueManual) => {
            overlay.style.opacity = "0";
            overlay.style.transform = "scale(0.9)";
            setTimeout(() => {
                overlay.style.display = "none";
                body.style.overflow = "auto"; // Restaurar scroll
                console.log(fueManual ? "Cierre manual del overlay." : "Cierre automático del overlay.");
            }, 500);
        };

        // Al cargar, bloquear scroll
        body.style.overflow = "hidden";

        // Cierre automático a los 5 segundos
        const autoClose = setTimeout(() => {
            cerrarOverlay(false);
        }, 5000);

        // Cierre manual al dar click en el botón
        cerrarBtn.addEventListener("click", () => {
            clearTimeout(autoClose); // Detener cierre automático
            cerrarOverlay(true);
        });
    });