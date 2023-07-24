let elementoMensaje = document.getElementById("mensaje");
let elementoTiempo = document.getElementById("tiempo");
let mensajesBienvenida = [
    "¡Bienvenido a nuestra página web!",
    "Welcome to our website!",
    "Bienvenue sur notre site web !",
    "Willkommen auf unserer Webseite!",
    "¡Bienvenido a nuestro sitio web!",
    "Benvenuto nel nostro sito web!"
  ];

elementoMensaje.innerHTML = mensajesBienvenida[Math.floor(Math.random() * mensajesBienvenida.length)];

let mensajeTiempo = new Date();

let año = mensajeTiempo.getFullYear();
let mes = mensajeTiempo.getMonth() + 1;
let dia = mensajeTiempo.getDate();

let datetimeFormateado = `${año}-${mes}-${dia}`;

elementoTiempo.textContent = datetimeFormateado;
  