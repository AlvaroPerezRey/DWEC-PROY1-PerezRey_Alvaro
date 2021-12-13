/* Funcion con operador ternario para el id */
function byId(id) {
   return typeof id==="string"?document.getElementById(id):id;
}

/* Indicamos con que imagen empezamos el carrusel */
var index = 2;
timer = null;
banner = byId("banner").getElementsByTagName("div");
len = banner.length,botones=byId("botones").getElementsByTagName("span");

function moverImagen() {
    /* Localizamos el ratón */
    var main=byId("main");

    /* Funcion para parar el contador cuando el ratón se posiciona encima de la imagen */
    main.onmouseover=function () {
        if(timer){
            clearInterval(timer);
        }
    }

    /* Funcion para identificar la imagen y la velocidad en segundo del carrusel */
    main.onmouseout=function () {
        timer=setInterval(function () {
            index++;
            /* declarando los posibles indices para cada imagen, los puntos de abajo */
            if(index>=len){
                index=0;
            }
            /* Da la posibilidad al usuario de cambiar la imagen si necesidad de esperar al carrusel */
            cambiarImagen();
            /* Velocidad en milisegundos del carrusel */
        },1000);
    }

    /* Se llama la funcion para que se automatice el carrusel al aterrizar a la pagina */
    main.onmouseout();

    /* Los puntos de abajo del carrusel para cambiar de imagen */
    for(var d=0;d<len;d++){
        /* Le da un atributo id a los tramos, el mismo que el indice del tramo actual */
        botones[d].id=d;
        botones[d].onclick=function () {
            index=this.id;
            this.className="active";
            cambiarImagen();
        }
    }
}

/* Funcion con la cual vas a poder cambiar de imagen tanto de una manera como de otra, boton o automatizacion del carrusel */
function cambiarImagen() {
    for(var i=0;i<len;i++){
        banner[i].style.display='none';
        botones[i].className="";
    }
    banner[index].style.display='block';
    botones[index].className="active";
}

moverImagen();