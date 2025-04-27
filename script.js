// Carrusel
  const track = document.querySelector('.carrusel-track');
  const botonDerecha = document.querySelector('.flecha-derecha');
  const imagenes = document.querySelectorAll('.carrusel-track img');
  
  let index = 0;

  botonDerecha.addEventListener('click', () => {
    index++;
    if (index >= imagenes.length) {
      index = 0; // volver al principio
    }
    const ancho = imagenes[0].clientWidth;
    track.style.transform = `translateX(-${index * ancho}px)`;
  });

//   Lightbox

const galleryImages = document.querySelectorAll(".galeria-grid img");
  const lightbox = document.getElementById("image-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox .close");

  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // Cerrar al hacer clic fuera de la imagen
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });

