
let data = new Date();
let mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']

document.getElementById('dataCompleta').innerHTML = data;

function dataOdierna() {
    let meseCorrente = mesi[data.getMonth()]
    return meseCorrente;
}

document.getElementById('data_odierna').innerHTML = `${data.getDate()} / ${dataOdierna()} / ${data.getFullYear()}`;
document.getElementById('giorno').innerHTML += ' ' + data.getDate();
document.getElementById('mese').innerHTML += ' ' + dataOdierna();
document.getElementById('oggi').innerHTML += ` ${data.getDate()} - ${data.getMonth()} - ${data.getFullYear()}`;




