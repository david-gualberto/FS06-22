// Arance e mele  

function succo(mele, arance) {
  return `Succo con ${mele} mele e ${arance} arance`;
}
document.getElementById("corretta").innerHTML = succo(4, 5);
document.getElementById("sbagliata").innerHTML = succo(4);

// Età mia

function calcolaAnni(compleanno) {
  return 2022 - compleanno;
}

document.getElementById("eta").innerHTML += `${calcolaAnni(1987)}`;

// Età Anna e Maria

annonascita = (età) => {
  return 2022 - età;
};
document.getElementById("persona1").innerHTML = `L'anno di nascita di Anna è il ${annonascita(35)}`;
document.getElementById("persona2").innerHTML = `L'anno di nascita di Anna è il ${annonascita(48)}`;

// Torta

function fette(fettemele) {
  return `Torta con ${fettemele} fette di mela`;
}

function torta(fettearance) {
  return `${fette(9)} e ${fettearance} fette di arancia`;
}

document.getElementById("torta").innerHTML = torta(15);

// Spesa

var btn = document.getElementById('calcola');

btn.addEventListener('click', function() {
    let totale = " ";
    let cibo = Number(document.getElementById('cibo').value); 
    let detersivi = Number(document.getElementById('detersivi').value); 
    let abiti = Number(document.getElementById('abiti').value);
    let totale = cibo + detersivi + abiti;
    document.getElementById('totale').innerHTML += totale;

    document.getElementById('cibo').value= '';
    document.getElementById('detersivi').value= '';
    document.getElementById('abiti').value='';
})

