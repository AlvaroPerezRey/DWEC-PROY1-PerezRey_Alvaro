/* Mediante fetch vamos a realizar la consulta de datos que necesitemos a la API Jikan
   Este metodo acepta la url de la api como parametro, en este caso consultaremos el listado de titulos
   manga que corresponden con el nombre "naruto" */
const url = 'https://api.jikan.moe/v3/anime/20'

fetch(url)

/* De esta manera invocamos el metodo fetch y realizamos la consulta a la api
   ademas vamos a introducir nuestra maquetacion HTML a traves de este metodo
   de manera que iremos contruyendo nuestro html de la manera que mejor veamos
   indicando en cada parte los datos que queremos consultar en la API*/
.then(response => response.json() )
.then(data => {

    let element = document.getElementById('elem')
    element.innerHTML = `<div class="titulo">
                            <h1>${data.title}</h1>
                        </div>
                        <div class="foto_anime">
                            <img loading="lazy" src='${data.image_url}'>
                            <iframe width="560" height="315" src="${data.trailer_url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div class="sinopsis">
                            <h3>SINOPSIS</h3>
                            <aside>${data.synopsis}</aside>
                        </div>
                        <div class="datos">
                            <div class="epi">
                                <h3>EPISODIOS</h3>
                                <p>${data.episodes}</p>
                            </div>
                            <div class="punt">
                                <h3>PUNTUACION</h3>
                                <p>${data.score}</p>
                            </div>
                            <div class="punt">
                                <h3>ESTRENO</h3>
                                <p>${data.premiered}</p>
                            </div>
                            <div class="punt">
                                <h3>ESTADO</h3>
                                <p>${data.status}</p>
                            </div>
                        </div>
                        <div class="meritos">
                            <h3>MERITOS</h3>
                            <p>${data.background}</p>
                        </div>`

    console.log(data)
})
.catch(err => console.log(err))