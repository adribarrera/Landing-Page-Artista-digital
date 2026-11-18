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

// MODAL DE VÍDEO Y API
const btnAbrirModal = document.getElementById('btn-abrir-modal');
const btnCerrarModal = document.getElementById('btn-cerrar-modal');
const modalVideo = document.getElementById('modal-video');
const videoReel = document.getElementById('video-reel');

const abrirModal = () => {
    modalVideo.hidden = false;
    document.body.style.overflow = 'hidden';
    btnCerrarModal.focus();

    const promesaPlay = videoReel.play();
    if (promesaPlay !== undefined) {
        promesaPlay.catch(() => {
            videoReel.muted = true;
            videoReel.play();
        });
    }
};

const cerrarModal = () => {
    videoReel.pause();
    modalVideo.hidden = true;
    document.body.style.overflow = '';
    btnAbrirModal.focus();
};

btnAbrirModal.addEventListener('click', abrirModal);
btnCerrarModal.addEventListener('click', cerrarModal);

modalVideo.addEventListener('click', (evento) => {
    if (evento.target === modalVideo) {
        cerrarModal();
    }
});

document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape' && !modalVideo.hidden) {
        cerrarModal();
    }
});
