class Person {
    constructor(_nome, _eta) {
        this.nome = _nome;
        this.eta = _eta
   
     }
    confronto(utente) {
        if (this.eta > utente.eta) {
          console.log(`${this.nome} è più grande di ${utente.nome}`)
        }
        else {
          console.log(`${utente.nome} è più grande di ${this.nome}`)
        }
    }
}

let p1 = new Person('David', 35);
let p2 = new Person('Matteo', 10);
let p3 = new Person('Carolina', 20);

p1.confronto(p2);
p1.confronto(p3);
p2.confronto(p3);