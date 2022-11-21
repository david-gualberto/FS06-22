class SonAccount {
    balanceInit: number = 200;
        constructor(_balanceInit: number = 200) {
            this.balanceInit = _balanceInit;
        }
            versamento(cash:number): string {
                return `Hai versato: ${cash} - Saldo Aggiornato: ${this.balanceInit + cash}`;
            }
            prelievo(cash:number): string {
                return `Hai prelevato: ${cash} - Saldo Aggiornato: ${this.balanceInit - cash}`
            }
}

class MotherAccount extends SonAccount {
    interessi: number = 0.9
    constructor (_balanceInit : number = 200, _interessi:number = 0.9) {
    super(_balanceInit) 
        this.interessi= _interessi;
}
        versamento(cash: number): string {
            return `Hai versato: ${cash} - Saldo Aggiornato: ${this.balanceInit + (cash*this.interessi)}`
        }
        prelievo(cash: number): string {
            return `Hai prelevato: ${cash} - Saldo Aggiornato: ${this.balanceInit + (cash*this.interessi)}`
        }
}

let figlio = new SonAccount ();
let mamma = new MotherAccount();

