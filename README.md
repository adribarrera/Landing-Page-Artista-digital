# Landing-Page-Artista-digital

## 1. Imagen principal
He seleccionado el formato **WebP** para la imagen principal frente a formatos tradicionales como JPEG o PNG debido a su algoritmo de compresión, que es más eficiente. WebP permite una reducción de peso aproximada del 25 al 35% respecto a un JPEG equivalente con la misma calidad visual percibida.

- **Herramienta y Tratamiento:** Utilizando **Adobe Photoshop 2025** (herramienta que utilizo diariamente en mi trabajo), he redimensionado la imagen original a un ancho estándar de 1920px conservando su aspect ratio nativo, aplicando un remuestreo bicúbico más enfocado para mantener la nitidez de los semitonos y exportándola directamente en WebP con compresión optimizada.

| Recurso | Archivo | Autor | URL | Licencia |
| ------- | ------- | ------- | ------- | ------- |
| Imagen principal | [Imagen Principal](assets/img/paisaje_futurista.webp) | John Links | https://unsplash.com/es/fotos/sol-sobre-el-oscuro-valle-de-semitonos-CctKTX-l0Zk | Licencia Unsplash (Uso libre comercial y no comercial, sin atribución obligatoria) |

## 2. Logo
He diseñado el logotipo de "Nébula" y exportado en formato **SVG (Scalable Vector Graphics)**. Se ha elegido SVG frente a formatos de mapa de bits (como PNG) por los siguientes motivos:

1. **Escalabilidad y nitidez:** Al estar definido mediante fórmulas matemáticas y vectores se mantiene una nitidez perfecta en cualquier densidad de píxeles y a cualquier tamaño, sin pixelarse ni requerir variantes.

2. **Optimización de peso:** Su tamaño en disco es mínimo, lo que reduce drásticamente el tiempo de descarga y la latencia.

3. **Manipulación mediante estilos:** Permite ser controlado e interactivo mediante CSS (cambios de color en hover, transiciones) e integrarse directamente en el DOM.

- **Herramienta y Tratamiento:** Vectorizado y exportado digitalmente en curvas limpias para minimizar nodos innecesarios y optimizar el tamaño del marcado SVG final.

| Recurso | Archivo | Autor | URL | Licencia |
| ------- | ------- | ------- | ------- | ------- |
| Logotipo | [Logo Nebula](assets/img/logo_nebula.svg) | Creación propia (Adrián Barrera) | N/A (Diseño original) | Creación propia / Dominio Público |

## 3. Galería de Trabajos
He generado y trabajado tres obras digitales de paisajes de ciencia ficción que mantienen una coherencia absoluta con el estilo visual y la paleta de colores de la imagen principal.

- **Herramienta y Tratamiento:** El procesamiento se realizó íntegramente con **Adobe Photoshop 2025**. Se recortaron y escalaron las imágenes a miniaturas uniformes de 400x250 píxeles, ajustando niveles y curvas para preservar el contraste cósmico sin saturar, y se exportaron en formato **WebP** con una tasa de compresión ajustada para obtener pesos inferiores a 30 KB por imagen, garantizando una carga instantánea de la galería.

| Recurso | Archivo resultante | Autor | URL | Licencia |
| ------- | ------------------ | ----- | --- | --------- |
| Galería 1 | [Luna de Sangre](assets/img/galeria_1.webp) | Adrián Barrera / IA | N/A (Generación propia) | Dominio Público / Creación propia |
| Galería 2 | [Faro Galáctico](assets/img/galeria_2.webp) | Adrián Barrera / IA | N/A (Generación propia) | Dominio Público / Creación propia |
| Galería 3 | [Rutas de Energía](assets/img/galeria_3.webp) | Adrián Barrera / IA | N/A (Generación propia) | Dominio Público / Creación propia |

## 4. Animación de "Llamada a la Acción" (Call to Action)
He diseñado una animación en bucle para el botón principal de contacto ("CONTACTO INTERGALÁCTICO"), aplicando los principios de optimización web (WPO) y manteniendo la coherencia con la identidad de "Nébula".

- **Herramienta, Tratamiento y Edición:** La composición de los fotogramas base se preparó en **Adobe Photoshop 2025** para estructurar la progresión de la iluminación. Se utilizaron 3 fotogramas clave para simular un pulso de energía de activación: el Frame 1 muestra el botón en calma, el Frame 2 inicia un sutil brillo en el texto junto con la apertura del sobre, y el Frame 3 alcanza el clímax con el sobre abierto y el resplandor a máxima potencia.

- **Optimización y Montaje:** El ensamblado final del bucle y ajuste de tiempos (*delays*) se realizó mediante la herramienta especializada **Ezgif**, exportando en formato **WebP animado** a 400x150px. Esto permite conservar los degradados suaves y el patrón de semitono sin el elevado peso ni las limitaciones de color indexado del GIF tradicional. Con una calidad del 80%, el peso final se mantiene por debajo de 30 KB.

| Recurso | Archivo resultante | Autor | URL | Licencia |
| ------- | ------------------ | ----- | --- | --------- |
| Animación CTA | [Animación WebP](assets/img/animacion.webp) | Adrián Barrera / Diseño propio / IA | N/A (Generación propia) | Dominio Público / Creación propia |

## 5. Vídeo de Presentación
He incorporado un clip audiovisual para la cabecera/sección de presentación con temática de timelapse espacial nocturno, integrado mediante la etiqueta `<video>` de HTML5 con los atributos `autoplay`, `muted`, `loop` y `playsinline`.

- **Herramienta y Tratamiento (FFmpeg):** El procesamiento completo del clip original (1080p a 30 FPS) se realizó por línea de comandos utilizando **FFmpeg**. Se recortó a una duración de 11 segundos y se transcodificó mediante el códec **H.264 (`libx264`)** fijando un bitrate objetivo de 1600 kbps (`-b:v 1600k`), con un techo de 1900 kbps (`-maxrate 1900k`) y espacio de color estándar `yuv420p`. Se eliminó por completo la pista de audio innecesaria (`-an`) y se aplicó la bandera `-movflags +faststart` para habilitar el streaming progresivo en el navegador. El archivo final resultante pesa unos 2.2 MB.

- **Imagen de Precarga (Poster):** Mediante **FFmpeg** se extrajo un fotograma clave del segundo 3 (`-ss 00:00:03`) codificándolo directamente en formato **WebP** (`-c:v libwebp -quality 80`). La imagen resultante (`miniatura.webp`) tiene un peso inferior a 60 KB y actúa como marcador de posición instantáneo para evitar pantallas negras y eliminar saltos de maquetación.

| Recurso | Archivo resultante | Autor | URL | Licencia |
| ------- | ------------------ | ----- | --- | --------- |
| Vídeo Timelapse Espacial | [Video](assets/video/video.mp4) | Stock Clip | https://www.pexels.com/video/stars-in-galaxies-9860820/ | Libre uso comercial / Sin atribución requerida |
| Miniatura Poster | [Miniatura](assets/video/miniatura.webp) | Adrián Barrera / Extracción propia | N/A (Derivado del vídeo) | Creación propia / Obra derivada |

## 6. Audio Ambiental
Se ha incorporado una pista de sonido ambiental de ciencia ficción para ambientar la experiencia interactiva de "Nébula".

- **Herramienta, Tratamiento y Edición:** Para la edición y masterización se ha llevado a cabo utilizando **FL Studio**, estación de trabajo de audio digital que utilizo desde hace años para mis mezclas. Dentro de la playlist de FL Studio he seleccionado y aislado un fragmento maestro recortado exactamente a 15 segundos. Creé un fade in y un fade out de 1,5 y 2 segundos respectivamente, garantizando un bucle continuo sin clics ni cortes bruscos.

- **Optimización y Formato:** Se exportó el archivo en formato **MP3** a una tasa de bits de **128 kbps** (estándar óptimo para música web sin pérdida perceptible de frecuencias).. El reproductor HTML5 se configuró con `preload="none"` para priorizar la carga crítica de los activos visuales iniciales.

| Recurso | Archivo resultante | Autor | URL | Licencia |
| ------- | ------------------ | ----- | --- | --------- |
| Sonido Ambiental | [Sonido Ambiente](assets/audio/ambiente.mp3) | julian 10x | https://www.youtube.com/watch?v=VLpkYuOmpSU | Licencia estándar de YouTube (Uso con fines exclusivamente académicos) |