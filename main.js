document.addEventListener("DOMContentLoaded", () => {
    // Galeria dinamica
    const imagenPrincipal = document.getElementById("galeria-principal-img");
    const captionPrincipal = document.getElementById("galeria-principal-caption");
    const botonesMiniatura = document.querySelectorAll(".miniatura-btn");

    botonesMiniatura.forEach((boton) => {
        boton.addEventListener('click', () => {
            botonesMiniatura.forEach((btn) => btn.classList.remove('activa'));
            boton.classList.add('activa');

            imagenPrincipal.classList.add('cambiando');
            setTimeout(() => {
                imagenPrincipal.src = boton.dataset.src;
                imagenPrincipal.alt = boton.dataset.alt;
                captionPrincipal.textContent = boton.dataset.caption;
                imagenPrincipal.classList.remove('cambiando');
            }, 150);
        });
    });
});