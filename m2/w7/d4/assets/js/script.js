var elenco= [];
var lista = document.getElementById('lista');

window.addEventListener('DOMContentLoaded', stampaJSON);

function stampaJSON() {
    fetch('http://localhost:3000/film').then((response) => {
        return response.json();}).then((data) => {
            elenco = data;
            if  (elenco.length > 0) {
                elenco.map(function(film) {
                    var div = document.createElement('div');
                    var div2 = document.createElement('div');
                    lista.classList.add("d-flex", "flex-wrap", "justify-content-around")
                    lista.appendChild(div)
                    div.classList.add("card", "w-25", "m-3");
                    div.innerHTML += `<img src=${film.locandina} class="card-img-top">`
                    div.appendChild(div2)
                    div2.classList.add("card-body");
                    div2.innerHTML += `<p class="card-text">${film.titolo} ${film.anno} <br> ${film.attori["primoattore"]}</p>`;
                });
            } else {
                lista.innerHTML = 'Nessun elemento presente';
            }
        });
}


//scrittura rapida

/*fetch(url).then(res=>res.json()).then((data)=>{

})*/