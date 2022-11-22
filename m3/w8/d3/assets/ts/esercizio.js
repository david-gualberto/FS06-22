var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Lavoratore = /** @class */ (function () {
    function Lavoratore(_professione, _codredd, _redditoannuolordo, _tasseinps, _tasseirpef) {
        this.professione = _professione;
        this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }
    Lavoratore.prototype.getUtileTasse = function () {
        var utile = this.redditoannuolordo * this.codredd / 100;
        return utile;
    };
    Lavoratore.prototype.getTasseInps = function () {
        var inps = this.getUtileTasse() * this.tasseinps / 100;
        return inps;
    };
    Lavoratore.prototype.getTasseIrpef = function () {
        var irpef = this.getUtileTasse() * this.tasseirpef / 100;
        return irpef;
    };
    Lavoratore.prototype.getRedditoAnnuoNetto = function () {
        var netto = this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef());
        return netto;
    };
    Lavoratore.prototype.stampaTutto = function () {
        console.log(this.professione);
        console.log("Utile tasse: ".concat(this.getUtileTasse()));
        console.log("Tasse Inps: ".concat(this.getTasseInps()));
        console.log("Tasse Irpef: ".concat(this.getTasseIrpef()));
        console.log("Reddito annuo netto: ".concat(this.getRedditoAnnuoNetto()));
        console.log('----------------------------------------------------');
    };
    return Lavoratore;
}());
var Medici = /** @class */ (function (_super) {
    __extends(Medici, _super);
    function Medici(_professione, _codredd, _redditoannuolordo) {
        return _super.call(this, _professione, _codredd, _redditoannuolordo, 12, 21) || this;
    }
    return Medici;
}(Lavoratore));
var Ristorazione = /** @class */ (function (_super) {
    __extends(Ristorazione, _super);
    function Ristorazione(_professione, _codredd, _redditoannuolordo) {
        return _super.call(this, _professione, _codredd, _redditoannuolordo, 14, 20) || this;
    }
    return Ristorazione;
}(Lavoratore));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(_professione, _codredd, _redditoannuolordo) {
        return _super.call(this, _professione, _codredd, _redditoannuolordo, 16, 22) || this;
    }
    return Manager;
}(Lavoratore));
var prof1 = new Medici("Fisioterapista", 54, 30000);
var prof2 = new Ristorazione("Cuoco", 48, 35000);
var prof3 = new Manager("Direttore di banca", 51, 58000);
var prof4 = new Ristorazione("Chef", 50, 47000);
prof1.stampaTutto();
prof2.stampaTutto();
prof3.stampaTutto();
prof4.stampaTutto();
