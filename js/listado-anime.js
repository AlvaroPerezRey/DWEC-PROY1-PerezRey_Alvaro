//Declaramos la variable que vamos a utilizar para introducir nuestro html
let fullResults = "";

/* Mediante fetch vamos a realizar la consulta de datos que necesitemos a la API Jikan
   Este metodo acepta la url de la api como parametro, en este caso consultaremos el listado de titulos
   manga que corresponden con el nombre "naruto" */
fetch('https://api.jikan.moe/v3/search/anime?q=naruto')

// Declaramos la funcion json()
.then(response => response.json())

/* De esta manera invocamos el metodo fetch y realizamos la consulta a la api
   ademas vamos a introducir nuestra maquetacion HTML a traves de este metodo
   de manera que iremos contruyendo nuestro html de la manera que mejor veamos
   indicando en cada parte los datos que queremos consultar en la API*/
.then(function(json) {
    let result = json.results; 

    result.forEach(function(anime){
        console.log(anime); 
        fullResults += 
        `<div class="result-block">
            <div>
                <div class="image-box">
                    <img loading="lazy" src='${anime.image_url}'>
                </div>
            </div>
            
            <div class="text">
                <h3 class="title">${anime.title}</h3>
                <p>${anime.synopsis}</p>
                
                <div class="bottom-bar">
                    <div class="puntuacion">
                    <small>
                        <svg viewBox="0 0 512 512" width="100" title="certificate">
                            <path fill="#FF8F00" d="M458.622 255.92l45.985-45.005c13.708-12.977 7.316-36.039-10.664-40.339l-62.65-15.99 17.661-62.015c4.991-17.838-11.829-34.663-29.661-29.671l-61.994 17.667-15.984-62.671C337.085.197 313.765-6.276 300.99 7.228L256 53.57 211.011 7.229c-12.63-13.351-36.047-7.234-40.325 10.668l-15.984 62.671-61.995-17.667C74.87 57.907 58.056 74.738 63.046 92.572l17.661 62.015-62.65 15.99C.069 174.878-6.31 197.944 7.392 210.915l45.985 45.005-45.985 45.004c-13.708 12.977-7.316 36.039 10.664 40.339l62.65 15.99-17.661 62.015c-4.991 17.838 11.829 34.663 29.661 29.671l61.994-17.667 15.984 62.671c4.439 18.575 27.696 24.018 40.325 10.668L256 458.61l44.989 46.001c12.5 13.488 35.987 7.486 40.325-10.668l15.984-62.671 61.994 17.667c17.836 4.994 34.651-11.837 29.661-29.671l-17.661-62.015 62.65-15.99c17.987-4.302 24.366-27.367 10.664-40.339l-45.984-45.004z" />
                                </svg>Puntuacion</small>
                                ${anime.score}
                    </div>

                    <div class="episodios">
                    <small>
                        <svg viewBox="0 0 512 512" width="100" title="play-circle">
                            <path fill="#FF8F00" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z" />
                        </svg>Episodios</small>
                        ${anime.episodes}
                    </div>
                </div>
            </div>
        </div>`;
    })
})

/* Ejecutamos la funcion anterior dentro del elemento main de nuetro archivo HTML 
   y asi creamos el HTML previamente planeado */
.then(function(json) {
    document.getElementById('main').innerHTML = fullResults;
});