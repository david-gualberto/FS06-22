//VARIABILI GLOBALI
let btn = document.getElementById("aggiungi") as HTMLInputElement;
let btn2 = document.getElementById("chiama") as HTMLInputElement;
let btn3 = document.getElementById("azzera") as HTMLInputElement;
let creditoRicarica: any = document.getElementById("creditoRicarica") as HTMLElement;
let creditoAggiornato: any = document.getElementById("creditoResiduo") as HTMLElement;
let costoChiamata: any = document.getElementById("costoChiamata") as HTMLElement;
let numchiamata: any = document.getElementById("numeroChiamate") as HTMLElement;
btn.addEventListener("click", ricarica);
btn2.addEventListener("click", chiama);
btn3.addEventListener("click", azzera);


//INTERFACCIA
interface Smartphone {
  credito: number;
  numeroChiamate: number;

  ricarica(cash: number): void;
  chiamata(min: number): void;
  numero404(): number;
  getNumeroChiamate(): number;
  azzeraChiamate(): void;
}
//CLASSE UTENTE
class Utente implements Smartphone {
  credito: number;
  numeroChiamate: number;

  constructor(_credito: number, _numeroChiamate: number) {
    this.credito = _credito;
    this.numeroChiamate = _numeroChiamate;
  }

  ricarica(cash: number): void {
    this.credito += cash;
  }
  chiamata(min: number): void {
      this.credito -= min * 0.2;
      this.numeroChiamate++;
  }
  numero404(): number {
    return this.credito;
  }
  getNumeroChiamate(): number {
    return this.numeroChiamate;
  }
  azzeraChiamate(): number {
    return (this.numeroChiamate - this.numeroChiamate);
  }
}
//ISTANZIAMENTO DEGLI UTENTI
let utente1 = new Utente(12, 0);
let utente2 = new Utente(14, 0);
let utente3 = new Utente(21, 0);

//CONSOLE LOG DEI 3 UTENTI CON CHIAMATE DIFFERENTI E RICARICHE DIFFERENTI
console.log('Primo Utente:');
utente1.ricarica(5);
utente1.chiamata(35);
utente1.ricarica(5);
utente1.chiamata(28);
numchiamata.innerHTML = utente1.getNumeroChiamate();
console.log("Saldo residuo:" + utente1.numero404().toFixed(2));
console.log("Numero di chiamate:" + utente1.getNumeroChiamate())
console.log("Azzeramento chiamate:" + utente1.azzeraChiamate())
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
  let importo = Number((<HTMLInputElement>document.getElementById("importo")).value);
  if (!importo || importo < 0) {
    creditoRicarica.innerHTML = "<b>Inserire un importo valido!!!</b>";
  } else {
    utente1.ricarica(importo);
    creditoAggiornato.innerHTML = utente1.numero404().toFixed(2);
    creditoRicarica.innerHTML = ""
    costoChiamata.innerHTML = "";
  }
}

//EFFETTUA CHIAMATA IN BASE AI MINUTI PASSATI NEL CAMPO DI INPUT
function chiama() {
  let tempoChiamata = Number((document.getElementById("minuti") as HTMLInputElement).value);
  if (!tempoChiamata || tempoChiamata < 1) {
    costoChiamata.innerHTML = "<b>Inserire la durata della chiamata</b>";
  } else if (utente1.credito - tempoChiamata * 0.2 < 0) {
    creditoRicarica.innerHTML ="<b>Credito insufficente...Effettuare una ricarica...</b>";
  } else {
    utente1.chiamata(tempoChiamata);
    costoChiamata.innerHTML = (tempoChiamata * 0.2).toFixed(2);
    creditoAggiornato.innerHTML = utente1.numero404().toFixed(2);
    numchiamata.innerHTML = utente1.getNumeroChiamate();
    creditoRicarica.innerHTML =""
  }
}

//AZZERA LE CHIAMATE
function azzera() {
  numchiamata.innerHTML = utente1.azzeraChiamate();
  utente1.numeroChiamate=0
}

//ACCENDE E SPEGNE LO SCHERMO DEL TELEFONO
function spegni() {
  var schermo = document.getElementById('schermo') as HTMLElement;
  schermo.classList.toggle("spegni")
}
