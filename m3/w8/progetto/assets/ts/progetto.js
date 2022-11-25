//VARIABILI GLOBALI
var btn = document.getElementById("aggiungi");
var btn2 = document.getElementById("chiama");
var btn3 = document.getElementById("azzera");
var creditoRicarica = document.getElementById("creditoRicarica");
var creditoAggiornato = document.getElementById("creditoResiduo");
var costoChiamata = document.getElementById("costoChiamata");
var numchiamata = document.getElementById("numeroChiamate");
btn.addEventListener("click", ricarica);
btn2.addEventListener("click", chiama);
btn3.addEventListener("click", azzera);
//CLASSE UTENET
var Utente = /** @class */ (function () {
    function Utente(_credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    Utente.prototype.ricarica = function (cash) {
        this.credito += cash;
    };
    Utente.prototype.chiamata = function (min) {
        this.credito -= min * 0.2;
        this.numeroChiamate++;
    };
    Utente.prototype.numero404 = function () {
        return this.credito;
    };
    Utente.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    Utente.prototype.azzeraChiamate = function () {
        return (this.numeroChiamate - this.numeroChiamate);
    };
    return Utente;
}());
//ISTANZIAMENTO DEGLI UTENTI
var utente1 = new Utente(12, 0);
var utente2 = new Utente(14, 0);
var utente3 = new Utente(21, 0);
//CONSOLE LOG DEI 3 UTENTI CON CHIAMATE DIFFERENTI E RICARICHE DIFFERENTI
console.log('Primo Utente:');
utente1.ricarica(5);
utente1.chiamata(35);
utente1.ricarica(5);
utente1.chiamata(28);
numchiamata.innerHTML = utente1.getNumeroChiamate();
console.log("Saldo residuo:" + utente1.numero404().toFixed(2));
console.log("Numero di chiamate:" + utente1.getNumeroChiamate());
console.log("Azzeramento chiamate:" + utente1.azzeraChiamate());
console.log("-----------------------------");
console.log("Secondo Utente:");
utente2.ricarica(5);
utente2.chiamata(28);
utente2.ricarica(5);
utente2.chiamata(14);
utente2.chiamata(7);
console.log("Saldo residuo:" + utente2.numero404().toFixed(2));
console.log("Numero di chiamate:" + utente2.getNumeroChiamate());
console.log("Azzeramento chiamate:" + utente2.azzeraChiamate());
console.log("-----------------------------");
console.log("Terzo Utente:");
utente3.ricarica(5);
utente3.chiamata(21);
utente3.ricarica(5);
utente3.chiamata(4);
utente3.chiamata(11);
utente3.chiamata(4);
console.log("Saldo residuo:" + utente3.numero404().toFixed(2));
console.log("Numero di chiamate:" + utente3.getNumeroChiamate());
console.log("Azzeramento chiamate:" + utente3.azzeraChiamate());
////////////////////////////////////////////////////////////////        EXTRA      //////////////////////////////////////////////////////////////////////////
//NELL UI SARÀ SVILUPPATO SOLO L'UTENTE 1
//RICARICA CON CONTROLLI DEI CAMPI INPUT
function ricarica() {
    var importo = Number(document.getElementById("importo").value);
    if (!importo || importo < 0) {
        creditoRicarica.innerHTML = "<b>Inserire un importo valido!!!</b>";
    }
    else {
        utente1.ricarica(importo);
        creditoAggiornato.innerHTML = utente1.numero404().toFixed(2);
        creditoRicarica.innerHTML = "";
        costoChiamata.innerHTML = "";
    }
}
//EFFETTUA CHIAMATA IN BASE AI MINUTI PASSATI NEL CAMPO DI INPUT
function chiama() {
    var tempoChiamata = Number(document.getElementById("minuti").value);
    if (!tempoChiamata || tempoChiamata < 1) {
        costoChiamata.innerHTML = "<b>Inserire la durata della chiamata</b>";
    }
    else if (utente1.credito - tempoChiamata * 0.2 < 0) {
        creditoRicarica.innerHTML = "<b>Credito insufficente...Effettuare una ricarica...</b>";
    }
    else {
        utente1.chiamata(tempoChiamata);
        costoChiamata.innerHTML = (tempoChiamata * 0.2).toFixed(2);
        creditoAggiornato.innerHTML = utente1.numero404().toFixed(2);
        numchiamata.innerHTML = utente1.getNumeroChiamate();
        creditoRicarica.innerHTML = "";
    }
}
//AZZERA LE CHIAMATE
function azzera() {
    numchiamata.innerHTML = utente1.azzeraChiamate();
    utente1.numeroChiamate = 0;
}
//ACCENDE E SPEGNE LO SCHERMO DEL TELEFONO
function spegni() {
    var schermo = document.getElementById('schermo');
    schermo.classList.toggle("spegni");
}
