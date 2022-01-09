/* Mediante fetch vamos a realizar la consulta de datos que necesitemos a la API Jikan
   Este metodo acepta la url de la api como parametro, en este caso disponemos de un buscador
   que nos mostrara todos los titulos que contengan el nombre introducido en nuestro buscador
   con su sinopsis */
const base_url = "https://api.jikan.moe/v3";

/* Funcion que utilizaremos para la busqueda del titulo */
function searchAnime(event){

    event.preventDefault();

    const form = new FormData(this);
    const query = form.get("search");

    fetch(`${base_url}/search/anime?q=${query}&page=1`)
    .then(res=>res.json())
    .then(updateDom)
    .catch(err=>console.warn(err.message));
}

/* Funcion que mostrara los datos solicitados a la API */
function updateDom(data){

    //Selecionaremos la etiqueta donde contruiremos el HTML que crearemos despues
    const searchResults = document.getElementById('search-results');

    const animeByCategories = data.results
        .reduce((acc, anime)=>{

            const {type} = anime;
            if(acc[type] === undefined) acc[type] = [];
            acc[type].push(anime);
            return acc;

        }, {});

        /* Aqui contruiremos nuestro HTML que mas tarde introduciremos en nuestra web cuando se realice
            la consulta a la API */
        searchResults.innerHTML = Object.keys(animeByCategories).map(key=>{

            const animesHTML = animeByCategories[key]
            .sort((a,b)=>a.episodes-b.episodes)
            .map(anime=>{
                return `
                    <div class="cuadro">
                        <div class="image">
                            <img src="${anime.image_url}">
                        </div>
                        <div class="cuadro-content">
                            <span class="title">${anime.title}</span>
                            <p>${anime.synopsis}</p>
                        </div>
                    </div>
                `
            }).join("");


            return `
                <section>
                    <h3>${key.toUpperCase()}</h3>
                    <div class="fila">${animesHTML}</div>
                </section>
            `
        }).join("");
}

/* Funcion que realizará la accion de cargar los datos y las estructura que hemos planeado en nuestro html
    y en la etiqueta seleccionada */
function pageLoaded(){
    const form = document.getElementById('search_form');
    form.addEventListener("submit", searchAnime);
}


window.addEventListener("load", pageLoaded);