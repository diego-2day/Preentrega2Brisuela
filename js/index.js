//Procesos generales
//Clase constructora
class Artista {
      constructor(nombre,edad,followers,albumes) {
      this.nombre = nombre;
      this.edad = edad;
      this.followers = followers;
      this.albumes = albumes;
    }
    agregarAlista(colector) {
        colector.push(this);
      }
  }


//Botones
let botonSubmit = document.getElementById("submit");
let botonDelet = document.getElementById("delet");
botonSubmit.addEventListener('click', () => {
  let nombre = document.getElementById("nombre").value;
  let edad = parseInt(document.getElementById("edad").value);
  let followers = parseFloat(document.getElementById("follows").value);
  let albumes = parseInt(document.getElementById("albums").value);
  // Crear nuevo artista
  let artistaNuevo = new Artista(nombre, edad, followers, albumes);
  alert(artistaNuevo.edad)
  artistaNuevo.agregarAlista(artistasEscuchados);
  actualizarTabla(artistasEscuchados)
})
botonDelet.addEventListener('click', () => {
  artistasEscuchados.pop();
  actualizarTabla(artistasEscuchados)
})