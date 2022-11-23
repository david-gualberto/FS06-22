class CapoAbbigliamento {
    id: number;
    codprod: number;
    collezione: string;
    capo: string;
    modello: number;
    quantita: number;
    colore: string;
    prezzoivaesclusa: number;
    prezzoivainclusa: number;
    disponibile: string;
    saldo: number;
    constructor(
        _id: number,
        _codprod: number,
        _collezione: string,
        _capo: string,
        _modello: number,
        _quantita: number,
        _colore: string,
        _prezzoivaesclusa: number,
        _prezzoivainclusa: number,
        _disponibile: string,
        _saldo: number
    ) {
        this.id = _id,
        this.codprod= _codprod;
        this.collezione = _collezione;
        this.capo = _capo;
        this.modello = _modello;
        this.quantita = _quantita;
        this.colore = _colore;
        this.prezzoivaesclusa = _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.disponibile= _disponibile;
        this.saldo = _saldo;

    }
     getsaldocapo():any {
        return (this.prezzoivainclusa * (this.saldo / 100)).toFixed(2);
     }

     getacquistocapo(): number | string {
        return (this.prezzoivainclusa - this.getsaldocapo()).toFixed(2);
     }
}

function letturaJson() {
fetch("http://localhost:3000/abbigliamento").then((res) => {
    return res.json()
}).then ((res:CapoAbbigliamento[])=>{
    res.map(function(element) {
        let newCapo = new CapoAbbigliamento(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo)
        console.log(element)
        console.log(`Sconto applicato: ${newCapo.getsaldocapo()}`)
        console.log(`Prezzo finale: ${newCapo.getacquistocapo()}`)
    })
})
}


