abstract class Lavoratore {
    professione: string;
    codredd: number;
    redditoannuolordo: number;
    tasseinps: number;
    tasseirpef: number;
    constructor(_professione:string, _codredd: number, _redditoannuolordo: number, _tasseinps: number, _tasseirpef: number) {
        this.professione=_professione;
        this.codredd = _codredd;
        this.redditoannuolordo = _redditoannuolordo;
        this.tasseinps = _tasseinps;
        this.tasseirpef = _tasseirpef;
    }

    getUtileTasse(): number {
        var utile = this.redditoannuolordo * this.codredd / 100
        return utile;
    }
    getTasseInps(): number {
        var inps = this.getUtileTasse() * this.tasseinps/ 100
        return inps;
    }
    getTasseIrpef(): number {
        var irpef = this.getUtileTasse()* this.tasseirpef / 100
        return irpef;
    }
    getRedditoAnnuoNetto(): number {
        var netto = this.redditoannuolordo - (this.getTasseInps() + this.getTasseIrpef())
        return netto;
    }
        
    stampaTutto(): any {
        console.log(this.professione)
        console.log(`Utile tasse: ${this.getUtileTasse()}`)
        console.log(`Tasse Inps: ${this.getTasseInps()}`)
        console.log(`Tasse Irpef: ${this.getTasseIrpef()}`)
        console.log(`Reddito annuo netto: ${this.getRedditoAnnuoNetto()}`)
        console.log('----------------------------------------------------')

    }
}

class Medici extends Lavoratore {
    constructor(_professione: string, _codredd: number, _redditoannuolordo: number) {
        super(_professione,_codredd, _redditoannuolordo,12 , 21)
    }
}

class Ristorazione extends Lavoratore {
    constructor(_professione: string, _codredd: number, _redditoannuolordo: number) {
        super(_professione,_codredd, _redditoannuolordo,14 , 20)
    }
}

class Manager extends Lavoratore {
    constructor(_professione: string, _codredd: number, _redditoannuolordo: number) {
        super(_professione,_codredd, _redditoannuolordo,16 , 22)
    }
}

let prof1 = new Medici("Fisioterapista",54, 30000)
let prof2 = new Ristorazione("Cuoco", 48, 35000 )
let prof3 = new Manager("Direttore di banca", 51, 58000)
let prof4 = new Ristorazione("Chef", 50, 47000)

prof1.stampaTutto();
prof2.stampaTutto();
prof3.stampaTutto();
prof4.stampaTutto();




