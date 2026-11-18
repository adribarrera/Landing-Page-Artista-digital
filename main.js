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

// REPRODUCTOR DE AUDIO
const audioEspacial = document.getElementById('audio-espacial');
const btnAudioToggle = document.getElementById('btn-audio-toggle');
const textoAudioToggle = document.getElementById('texto-audio-toggle');
const btnAudioMute = document.getElementById('btn-audio-mute');
const tiempoAudio = document.getElementById('tiempo-audio');

const formatearTiempo = (segundos) => {
    const min = Math.floor(segundos / 60).toString().padStart(2, '0');
    const seg = Math.floor(segundos % 60).toString().padStart(2, '0');
    return `${min}:${seg}`;
};

audioEspacial.addEventListener('loadedmetadata', () => {
    tiempoAudio.textContent = `00:00 / ${formatearTiempo(audioEspacial.duration)}`;
});

audioEspacial.addEventListener('timeupdate', () => {
    const duracion = isNaN(audioEspacial.duration) ? 15 : audioEspacial.duration;
    tiempoAudio.textContent = `${formatearTiempo(audioEspacial.currentTime)} / ${formatearTiempo(duracion)}`;
});

btnAudioToggle.addEventListener('click', () => {
    if (audioEspacial.paused) {
        audioEspacial.play()
            .then(() => {
                btnAudioToggle.classList.add('reproduciendo');
                btnAudioToggle.setAttribute('aria-pressed', 'true');
                textoAudioToggle.textContent = 'Pausar ambiente espacial';
            })
            .catch((error) => {
                console.error('Error al reproducir el audio ambiental:', error);
            });
    } else {
        audioEspacial.pause();
        btnAudioToggle.classList.remove('reproduciendo');
        btnAudioToggle.setAttribute('aria-pressed', 'false');
        textoAudioToggle.textContent = 'Escuchar ambiente espacial';
    }
});

btnAudioMute.addEventListener('click', () => {
    audioEspacial.muted = !audioEspacial.muted;
    btnAudioMute.setAttribute('aria-pressed', String(audioEspacial.muted));
    btnAudioMute.textContent = audioEspacial.muted ? 'Activar sonido' : 'Silenciar';
});
