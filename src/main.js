const modal = document.getElementById("mainModal");
const closeModal = modal.querySelector(".close");
const modalImage = modal.querySelector(".image-select");
const modalTitle = modal.querySelector(".name-img");
const modalDescription = modal.querySelector(".paragraph__img");
const modalCreator = modal.querySelector(".name-creator");
const modalCreatorImg = modal.querySelector(".creator__perfil");
const modalOverlay = document.getElementById("modalOverlay");
const icon1 = document.getElementById("shareIcon");
const icon2 = document.getElementById("heartIcon");
const icon3 = document.getElementById("userIcon");

const images = document.querySelectorAll(".seccion-imagenes img");

//* Datos asociados a cada imagen
const imageData = [
  {
    src: "img/Fondo de nieve.webp",
    title: "Fondo de nieve",
    description: "Esta fotografía captura la inmensidad y serenidad de un paisaje cubierto de nieve al amanecer. El autor se inspiró en un viaje a las montañas, donde el silencio absoluto del entorno lo llevó a apreciar los pequeños detalles en la textura de la nieve y el juego de luces y sombras. La intención detrás de esta obra es transmitir una sensación de calma y reflexión, un recordatorio de cómo la naturaleza puede detener el tiempo por un instante.",
    creator: "John Snow",
    creatorImg: "img/perfiles/Perfil1.jpg",
  },
  {
    src: "img/Circulo.jpg",
    title: "Círculo",
    description: "Esta ilustración minimalista de un círculo combina simplicidad y perfección. Inspirada en la geometría y el arte abstracto, busca representar la idea de continuidad y equilibrio. El autor menciona que esta pieza surgió durante un momento de meditación, donde el círculo simbolizaba el flujo eterno de la vida y la conexión entre los seres. La elección de colores sobrios realza su pureza, dejando que el espectador encuentre su propio significado.",
    creator: "Minimal Art",
    creatorImg: "img/perfiles/Perfil2.jpg",
  },
  {
    src: "img/tasa de cafe.jpg",
    title: "Tasa de café",
    description: "Esta imagen fue tomada en un día lluvioso, mientras el autor disfrutaba de una taza de café recién hecho. La composición sencilla, con un fondo de sábanas beige, refleja calidez y confort. Inspirado en las mañanas tranquilas en casa, el autor busca evocar una sensación de nostalgia y aprecio por los momentos simples de la vida.",
    creator: "Coffee Lover",
    creatorImg: "img/perfiles/Perfil3.jpg",
  },
  {
    src: "img/Ilustracion de mano.jpg",
    title: "Ilustración de mano",
    description: "Esta obra digital representa una mano que emerge con elegancia, simbolizando el acto de creación y expresión. El autor, apasionado por el arte figurativo, se inspiró en los movimientos del arte surrealista para fusionar elementos realistas con una atmósfera etérea. Cada trazo está diseñado para resaltar la capacidad humana de construir y transformar el mundo a través de sus ideas y acciones.",
    creator: "Artistic Soul",
    creatorImg: "img/perfiles/Perfil4.jpg",
  },
  {
    src: "img/Silla calida.jpg",
    title: "Silla cálida",
    description: "La fotografía de esta silla de madera bañada por la luz del atardecer es un homenaje a la simplicidad del diseño y los recuerdos que un objeto cotidiano puede evocar. El autor, amante de la estética vintage, explica que esta silla perteneció a su abuela y representa un espacio de historias y vivencias. La tonalidad cálida del sol resalta las imperfecciones naturales de la madera, convirtiéndola en una pieza de arte.",
    creator: "Cozy Home",
    creatorImg: "img/perfiles/Perfil5.jpg",
  },
  {
    src: "img/Desierto.jpg",
    title: "Desierto",
    description: "Un paisaje vasto y árido que transmite la soledad y la belleza del desierto. El autor, inspirado por un viaje al Sáhara, buscó capturar la sensación de infinito y la lucha de la vida en condiciones extremas. El contraste entre las sombras de las dunas y la luz del sol crea un juego visual que invita al espectador a perderse en la inmensidad del horizonte. Este trabajo es un tributo a la resiliencia de la naturaleza.",
    creator: "Desert Explorer",
    creatorImg: "img/perfiles/Perfil6.jpg",
  },
  {
    src: "img/interior.jpg",
    title: "Interior",
    description: "Esta imagen explora los espacios interiores desde una perspectiva íntima y melancólica. El autor combina colores cálidos con una iluminación tenue para crear una atmósfera de introspección. Inspirada en la arquitectura antigua, esta pieza busca destacar cómo los objetos y los espacios que nos rodean pueden influir en nuestras emociones y recuerdos",
    creator: "Modern Designer",
    creatorImg: "img/perfiles/Perfil7.jpg",
  },
  {
    src: "img/Montaña.jpg",
    title: "Montaña",
    description: "La majestuosidad de las montañas queda plasmada en esta fotografía, tomada durante un amanecer en los Andes. El autor explica que la inspiración provino del esfuerzo físico y mental necesario para alcanzar la cima. Este trabajo busca transmitir la idea de superación personal, mientras que los colores del cielo, en tonos rosados y naranjas, simbolizan el renacimiento y la esperanza.",
    creator: "Nature Lover",
    creatorImg: "img/perfiles/Perfil8.jpeg",
  },
];

//* Mostrar el modal al hacer clic en una imagen
images.forEach((img, index) => {
  //buscara la imagen y obtener sus datos
  img.addEventListener("click", () => {
    const data = imageData[index]; // Obtener datos de la imagen clickeada

    // Actualizar el contenido del modal
    modalImage.src = data.src;
    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;
    modalCreator.textContent = data.creator;
    modalCreatorImg.src = data.creatorImg;

    // Mostrar el modal
    modal.style.display = "flex";
    modalOverlay.classList.add("active"); // mostar overlay
  });
});

// Cerrar el modal al hacer clic en el botón de cerrar
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  modalOverlay.classList.remove("active"); // Ocultar overlay
});

icon1.addEventListener("click", () => {
    if (icon1.src.includes("share.svg")) {
      icon1.src = "svg/share-blue.svg"; // Cambiar al ícono lleno
    } else {
      icon1.src = "svg/share.svg"; // Cambiar al ícono vacío
    }
  });

icon2.addEventListener("click", () => {
  if (icon2.src.includes("heart.svg")) {
    icon2.src = "svg/heart-red.svg"; 
  } else {
    icon2.src = "svg/heart.svg"; 
  }
});

icon3.addEventListener("click", () => {
    if (icon3.src.includes("user-check.svg")) {
      icon3.src = "svg/user-check-green.svg"; 
    } else {
      icon3.src = "svg/user-check.svg"; 
    }
  });
