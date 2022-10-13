// Stringa

let stringa = "Sto imparando JavaScript"

document.getElementById('maiuscola').innerHTML = stringa.toUpperCase();
document.getElementById('minuscola').innerHTML = stringa.toLowerCase();
document.getElementById('estraiCaratteri').innerHTML = stringa.split('');
document.getElementById('concatena').innerHTML = stringa.concat(' JS');
document.getElementById('strArray').innerHTML = stringa.charAt(2)+stringa.charAt(1)+stringa.charAt(14)+stringa.charAt(18);
document.getElementById('estraiStringa').innerHTML = stringa.slice(5,9);

// Array
 
let nomi = ["Giovanni","Carla","Piero","Mirtilla"];

document.getElementById('array').innerHTML = nomi;
document.getElementById('lunghezza').innerHTML = nomi.length;
document.getElementById('elemento').innerHTML = nomi[2];
document.getElementById('ultimo').innerHTML = nomi[3];

var nomiModificata = nomi.splice(2,1, 'Massimo');
document.getElementById('modificato').innerHTML = nomi;

// Età Persone
annodinascita = [2001, 1990, 1987, 2018, 2010]

function calcolaAnni(annodinascita) {
    return 2022 - annodinascita;
}

var eta1 = calcolaAnni(annodinascita[0]);
document.getElementById('eta1').innerHTML += eta1 + ' Anni';
var eta2 = calcolaAnni(annodinascita[1]);
document.getElementById('eta2').innerHTML += eta2 + ' Anni';
var eta3 = calcolaAnni(annodinascita[2]);
document.getElementById('eta3').innerHTML += eta3 + ' Anni';
var eta4 = calcolaAnni(annodinascita[3]);
document.getElementById('eta4').innerHTML += eta4 + ' Anni';
var eta5 = calcolaAnni(annodinascita[4]);
document.getElementById('eta5').innerHTML += eta5 + ' Anni';

document.getElementById('arrayEta').innerHTML += [eta1,eta2,eta3,eta4,eta5]
    


// Animali

    animali = ["coniglio", "cane", "gatto", "criceto"]
    document.getElementById('intero').innerHTML = animali;

    let aggiunto = animali.push('leone');
    document.getElementById('aggiunto').innerHTML = animali;

    let estratto = animali.pop()
    document.getElementById('estratto').innerHTML = animali;

    document.getElementById('verifica1').innerHTML = animali.includes('gatto');
    document.getElementById('verifica2').innerHTML = animali.includes('cavallo');
