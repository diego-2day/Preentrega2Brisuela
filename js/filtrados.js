let ordenarPorseguidores = document.getElementById("opcion1");
let ordenarPoredad = document.getElementById("opcion2");
let ordenarPoralbumes = document.getElementById("opcion3");
let arrayOpciones = [ordenarPorseguidores, ordenarPoredad, ordenarPoralbumes];
let newArray = [...artistasEscuchados];

function alHacerclick(array) {
    array.forEach(element => {
      element.addEventListener('click', () => { comprobarArray(arrayOpciones) });
    });
  }

function comprobarArray(array) {
    for (const element of array) {
      if (element.checked) {
        switch (array.indexOf(element)) {
          case 0:
            ordenarPorSeguidores();
            break;
          case 1:
            ordenarPorEdad();
            break;
          case 2:
            ordenarPorAlbumes();
            break;
          default:
            break;
        }
        break;
      }
    }
  }


  
function ordenarPorSeguidores() {
  // Ordenar el arreglo por seguidores
  let sortArray = newArray.sort((a, b) => a.followers - b.followers);
  crearTabla(sortArray);
  actualizarTabla(sortArray);
}

function ordenarPorEdad() {
  // Ordenar el arreglo por edad
  let sortArray = newArray.sort((a, b) => a.edad - b.edad);
  crearTabla(sortArray);
  actualizarTabla(sortArray);
}

function ordenarPorAlbumes() {
  // Ordenar el arreglo por álbumes
  let sortArray = newArray.sort((a, b) => a.albumes - b.albumes);
  crearTabla(sortArray);
  actualizarTabla(sortArray);
}


alHacerclick(arrayOpciones);