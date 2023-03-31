let imagenes = [
  "images/f150-23.webp",
  "images/f150-23-2.jpg",
  "images/f150-23-3.webp",
  "images/f150-23-4.avif"
];
let contador = 0;

document.querySelector(".slider-container img").src = imagenes[contador];

let sliderRight = document.querySelector(".right");
let sliderLeft = document.querySelector(".left");

let moverDerecha = () => {
  contador++;
  if (contador >= imagenes.length) {
    contador = 0;
  }
  document.querySelector(".slider-container img").src = imagenes[contador];
};

let moverIzquierda = () => {
  contador--;
  if (contador < 0) {
    contador = imagenes.length - 1;
  }
  document.querySelector(".slider-container img").src = imagenes[contador];
};

sliderRight.addEventListener("click", moverDerecha);
sliderLeft.addEventListener("click", moverIzquierda);
