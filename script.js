<<<<<<< HEAD
// JavaScript para un desplazamiento suave al hacer clic en los enlaces de navegación
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los enlaces que apuntan a una sección de la misma página
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Previene el comportamiento de salto predeterminado del navegador

            // Obtiene el elemento al que apunta el enlace
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Realiza el desplazamiento suave hacia el elemento
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Habilita el desplazamiento suave
                });
            }
        });
    });

    // Puedes añadir aquí más funcionalidades JavaScript avanzadas si lo necesitas,
    // como validación de formularios, carruseles personalizados, efectos de paralaje, etc.
=======
// JavaScript para un desplazamiento suave al hacer clic en los enlaces de navegación
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los enlaces que apuntan a una sección de la misma página
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Previene el comportamiento de salto predeterminado del navegador

            // Obtiene el elemento al que apunta el enlace
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Realiza el desplazamiento suave hacia el elemento
                targetElement.scrollIntoView({
                    behavior: 'smooth' // Habilita el desplazamiento suave
                });
            }
        });
    });

    // Puedes añadir aquí más funcionalidades JavaScript avanzadas si lo necesitas,
    // como validación de formularios, carruseles personalizados, efectos de paralaje, etc.
>>>>>>> 1db7590dbc0ef4abf5dbb74423c50a2a34e5b866
});