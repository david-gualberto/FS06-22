var CapoAbbigliamento = /** @class */ (function () {
    function CapoAbbigliamento(_id, _codprod, _collezione, _capo, _modello, _quantita, _colore, _prezzoivaesclusa, _prezzoivainclusa, _disponibile, _saldo) {
        this.id = _id,
            this.codprod = _codprod;
        this.collezione = _collezione;
        this.capo = _capo;
        this.modello = _modello;
        this.quantita = _quantita;
        this.colore = _colore;
        this.prezzoivaesclusa = _prezzoivaesclusa;
        this.prezzoivainclusa = _prezzoivainclusa;
        this.disponibile = _disponibile;
        this.saldo = _saldo;
    }
    CapoAbbigliamento.prototype.getsaldocapo = function () {
        return (this.prezzoivainclusa * (this.saldo / 100)).toFixed(2);
    };
    CapoAbbigliamento.prototype.getacquistocapo = function () {
        return (this.prezzoivainclusa - this.getsaldocapo()).toFixed(2);
    };
    return CapoAbbigliamento;
}());
function letturaJson() {
    fetch("http://localhost:3000/abbigliamento").then(function (res) {
        return res.json();
    }).then(function (res) {
        res.map(function (element) {
            var newCapo = new CapoAbbigliamento(element.id, element.codprod, element.collezione, element.capo, element.modello, element.quantita, element.colore, element.prezzoivaesclusa, element.prezzoivainclusa, element.disponibile, element.saldo);
            console.log(element);
            console.log("Sconto applicato: ".concat(newCapo.getsaldocapo()));
            console.log("Prezzo finale: ".concat(newCapo.getacquistocapo()));
        });
    });
}
