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
var SonAccount = /** @class */ (function () {
    function SonAccount(_balanceInit) {
        if (_balanceInit === void 0) { _balanceInit = 200; }
        this.balanceInit = 200;
        this.balanceInit = _balanceInit;
    }
    SonAccount.prototype.versamento = function (cash) {
        return "Hai versato: ".concat(cash, " - Saldo Aggiornato: ").concat(this.balanceInit + cash);
    };
    SonAccount.prototype.prelievo = function (cash) {
        return "Hai prelevato: ".concat(cash, " - Saldo Aggiornato: ").concat(this.balanceInit - cash);
    };
    return SonAccount;
}());
var MotherAccount = /** @class */ (function (_super) {
    __extends(MotherAccount, _super);
    function MotherAccount(_balanceInit, _interessi) {
        if (_balanceInit === void 0) { _balanceInit = 200; }
        if (_interessi === void 0) { _interessi = 0.9; }
        var _this = _super.call(this, _balanceInit) || this;
        _this.interessi = 0.9;
        _this.interessi = _interessi;
        return _this;
    }
    MotherAccount.prototype.versamento = function (cash) {
        return "Hai versato: ".concat(cash, " - Saldo Aggiornato: ").concat(this.balanceInit + (cash * this.interessi));
    };
    MotherAccount.prototype.prelievo = function (cash) {
        return "Hai prelevato: ".concat(cash, " - Saldo Aggiornato: ").concat(this.balanceInit + (cash * this.interessi));
    };
    return MotherAccount;
}(SonAccount));
var figlio = new SonAccount();
var mamma = new MotherAccount();
