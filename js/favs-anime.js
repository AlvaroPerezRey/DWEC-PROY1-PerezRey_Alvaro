var count = 1;

/* Asignamos la funcion al boton añadir */

document.getElementById('añadir').onclick = function (){ añadirLista()};

/* Funcion para añadir titulos y eliminar titulos de la lista de favoritos */

function añadirLista(){
  var favList = document.getElementById('list').value;

  if (favList != ""){
    /* Creamos la lista */
    var nuevaLista = document.createElement('li');
    nuevaLista.className = 'lista-item';
    nuevaLista.id = 'list'+count;
    var añadirListaAqui = document.getElementById("lista_titulos");
    añadirListaAqui.appendChild(nuevaLista);
    var nuevaLinea = document.createElement('span');
    var nuevoTexto = document.createTextNode(favList);
    nuevaLinea.appendChild(nuevoTexto);
    var añadirLineaAqui = document.getElementById('list'+count);
    añadirLineaAqui.appendChild(nuevaLinea);

    /* Creamos un boton para eliminar el título y le damos una clase */
    var nuevoBoton = document.createElement('button');
    nuevoBoton.className = 'remove';
    nuevoBoton.id = 'remove'+count;
    var textoNuevoBoton = document.createTextNode('eliminar');
    nuevoBoton.appendChild(textoNuevoBoton);
    var añadirBotonAqui = document.getElementsByClassName('lista-item')[count-1];
    añadirBotonAqui.appendChild(nuevoBoton);

    document.getElementById(nuevoBoton.id).onclick = function(){eliminarList(nuevaLista.id)};

    /* Eliminamos el titulo despues de pulsar el boton */
    document.getElementById('list').value = "";

    return count++;

  }
return
}

/* Funcion para eliminar la lista cuando no haya titulos */
function eliminarList(listId){
  var eliminarLista = document.getElementById(listId);
  var contenedorLista = eliminarLista.parentNode;
  contenedorLista.removeChild(eliminarLista);
}
