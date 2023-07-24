
let artistasEscuchados = [
    {
      nombre: "Alicia García",
      edad: 28,
      followers: 1200000,
      albumes: 5
    },
    {
      nombre: "Carlos Martínez",
      edad: 32,
      followers: 2200000,
      albumes: 8
    },
    {
      nombre: "Elena López",
      edad: 25,
      followers: 1800000,
      albumes: 6
    },
    {
      nombre: "Gabriel Ramírez",
      edad: 19,
      followers: 2800000,
      albumes: 10
    },
    {
      nombre: "Isabel Rodríguez",
      edad: 29,
      followers: 2100000,
      albumes: 7
    }
  ];
  
function crearTabla(colector){
  let tablaHTML = '<table>';
  tablaHTML += '<tr><th>Nombre</th><th>Edad</th><th>Followers</th><th>Albums</th></tr>';

  colector.forEach((item) => {
    tablaHTML += `<tr><td>${item.nombre}</td><td>${item.edad}</td><td>${item.followers}</td><td>${item.albumes}</td></tr>`;
  });

  tablaHTML += '</table>';

  return tablaHTML;

}

  function actualizarTabla(colector){
  // Obtener el tablero html donde vamos a desplegar
    let tablero = document.getElementById("tablero");
    tablero.innerHTML = crearTabla(colector);
}
actualizarTabla(artistasEscuchados)