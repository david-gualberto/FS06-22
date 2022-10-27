// Bottone apri Menu

btn = document.getElementById('button_apri');
btn.addEventListener('click', drop)

function drop() {
document.getElementById("menu_drop").classList.toggle("mostra");
}

// bottone colore

var bottone2 = document.getElementById('colore');
bottone2.addEventListener('click', colore)

function colore() {
    document.getElementById("titolo").classList.toggle("coloreh2");
    }

// Bottone nascondi + mostra H2
var bottone5 = document.getElementById('mostrare');
var bottone4 = document.getElementById('nascondi');
bottone4.addEventListener('click', nascondi)
bottone5.addEventListener('click', mostrare)

function nascondi() {
    document.getElementById("titolo").className = "nascondi";
    }

 function mostrare() {
    document.getElementById("titolo").classList.remove("nascondi");
     }

// Bottone grande H2

var bottone1 = document.getElementById('grande');
bottone1.addEventListener('click', grande)

function grande() {
    document.getElementById("titolo").classList.toggle("grandeh2");
}

// Bottone maiuscolo

var bottone3 = document.getElementById('maiuscolo');
bottone3.addEventListener('click', maiuscolo)

function maiuscolo() {
    document.getElementById("titolo").classList.toggle("maiuscoloh2");
}

// mouseover rosso sui li


var elenco = document.querySelectorAll("li");

for (var i=0; i<elenco.length; i++) {
    elenco[i].addEventListener('mouseover', function() {
            this.classList.add("coloreh2");
    });
    elenco[i].addEventListener('mouseout', function() {
        this.classList.remove("coloreh2");
});
    elenco[i].addEventListener('click', function() {
    this.classList.toggle("sbarrato");
});
    }