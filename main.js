// Esperamos a que el DOM esté cargado antes de buscar elementos
document.addEventListener("DOMContentLoaded", () => {

    // GALERÍA DINÁMICA
    const imagenPrincipal = document.getElementById("galeria-principal-img");
    const captionPrincipal = document.getElementById("galeria-principal-caption");
    const botonesMiniatura = document.querySelectorAll(".miniatura-btn");

    botonesMiniatura.forEach((boton) => {
        boton.addEventListener('click', () => {
            // Quitamos la clase activa de todas y se la ponemos solo a la que se pulsa
            botonesMiniatura.forEach((btn) => btn.classList.remove('activa'));
            boton.classList.add('activa');

            // Añadimos la clase de transición y esperamos 150ms antes de cambiar el src para que haga un fade suave
            imagenPrincipal.classList.add('cambiando');
            setTimeout(() => {
                // Leemos las rutas y textos directamente de los atributos data-* del botón
                imagenPrincipal.src = boton.dataset.src;
                imagenPrincipal.alt = boton.dataset.alt;
                captionPrincipal.textContent = boton.dataset.caption;
                imagenPrincipal.classList.remove('cambiando');
            }, 150);
        });
    });

    // MODAL DE VÍDEO Y API HTMLMediaElement
    const btnAbrirModal = document.getElementById('btn-abrir-modal');
    const btnCerrarModal = document.getElementById('btn-cerrar-modal');
    const modalVideo = document.getElementById('modal-video');
    const videoReel = document.getElementById('video-reel');

    const abrirModal = () => {
        modalVideo.hidden = false;
        // Bloqueamos el scroll del fondo mientras el modal está abierto
        document.body.style.overflow = 'hidden';
        btnCerrarModal.focus();

        // .play() devuelve una Promesa, si el navegador bloquea el autoplay con sonido, lo muteamos para que arranque igual
        const promesaPlay = videoReel.play();
        if (promesaPlay !== undefined) {
            promesaPlay.catch(() => {
                videoReel.muted = true;
                videoReel.play();
            });
        }
    };

    const cerrarModal = () => {
        // Pausamos el vídeo al cerrar y devolvemos el foco al botón que abrió el modal
        videoReel.pause();
        modalVideo.hidden = true;
        document.body.style.overflow = '';
        btnAbrirModal.focus();
    };

    btnAbrirModal.addEventListener('click', abrirModal);
    btnCerrarModal.addEventListener('click', cerrarModal);

    // Si el clic es en el fondo oscuro y no en la caja del vídeo, cerramos
    modalVideo.addEventListener('click', (evento) => {
        if (evento.target === modalVideo) {
            cerrarModal();
        }
    });

    // Cierre accesible con la tecla Escape si el modal está visible
    document.addEventListener('keydown', (evento) => {
        if (evento.key === 'Escape' && !modalVideo.hidden) {
            cerrarModal();
        }
    });

    // REPRODUCTOR DE AUDIO PERSONALIZADO
    const audioEspacial = document.getElementById('audio-espacial');
    const btnAudioToggle = document.getElementById('btn-audio-toggle');
    const textoAudioToggle = document.getElementById('texto-audio-toggle');
    const btnAudioMute = document.getElementById('btn-audio-mute');
    const tiempoAudio = document.getElementById('tiempo-audio');

    // Convierte segundos sueltos a formato mm:ss rellenando con ceros a la izquierda
    const formatearTiempo = (segundos) => {
        const min = Math.floor(segundos / 60).toString().padStart(2, '0');
        const seg = Math.floor(segundos % 60).toString().padStart(2, '0');
        return `${min}:${seg}`;
    };

    // Este evento salta en cuanto el navegador lee la duración real del mp3 (preload="metadata")
    audioEspacial.addEventListener('loadedmetadata', () => {
        tiempoAudio.textContent = `00:00 / ${formatearTiempo(audioEspacial.duration)}`;
    });

    // Se ejecuta varias veces por segundo mientras suena para actualizar el contador (.currentTime)
    audioEspacial.addEventListener('timeupdate', () => {
        // Fallback a 15s por si algún navegador tarda en resolver .duration
        const duracion = isNaN(audioEspacial.duration) ? 15 : audioEspacial.duration;
        tiempoAudio.textContent = `${formatearTiempo(audioEspacial.currentTime)} / ${formatearTiempo(duracion)}`;
    });

    btnAudioToggle.addEventListener('click', () => {
        // Comprobamos .paused nativo en vez de usar una variable boolean aparte para no desincronizar estados
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
        // Invertimos directamente el booleano .muted de la API HTMLMediaElement
        audioEspacial.muted = !audioEspacial.muted;
        btnAudioMute.setAttribute('aria-pressed', String(audioEspacial.muted));
        btnAudioMute.textContent = audioEspacial.muted ? 'Activar sonido' : 'Silenciar';
    });

});