var nome = "Aldo"; 
let cliente = "cliente";
const numero = 3.14;

// Prima concatenza
document.getElementById('concatena').innerHTML = nome + ', ' + cliente + ', ' + numero;

// Prima concatenza
document.getElementById('concatena2').innerHTML = `${nome}, ${cliente}, ${numero}`;

// Esercizio var e let
var nome = "Mario"

document.getElementById('var').innerHTML = nome;

    {
        let nome = "Carla"
        document.getElementById('let').innerHTML = nome;
    }

document.getElementById('final').innerHTML = nome;

document.getElementById('let2').innerHTML = nome;

    {
        var nome = "Carla"
        document.getElementById('let3').innerHTML = nome;
    }

document.getElementById('final2').innerHTML = nome;

// Manipolazione risultati

var iniziale = 15;
document.getElementById('iniziale').innerHTML = 'Valore iniziale: ' + iniziale;

// Addizzione e incremento
{  
    let valore1= iniziale+iniziale;
    let incremento= valore1+1;
    document.getElementById('valore1').innerHTML = `Addizione e incremento: ${valore1}, ${incremento}`;
}
// Sottrazione e decremento
{   
    let valore2 = iniziale - 10;
    let decremento = valore2 - 1;
    document.getElementById('valore2').innerHTML = `Sottrazione e Decremento: ${valore2}, ${decremento}`
}

// Moltiplicazione 
{
    let valore3 = iniziale*3;
    document.getElementById('valore3').innerHTML = `Moltiplicazione: `+valore3;
}
// Divisione
{
    let valore4=iniziale/3;
    document.getElementById('valore4').innerHTML = `Divisione: `+valore4;
}
// Concatenazione
    document.getElementById('valore5').innerHTML = `Concatenazione: ${iniziale} è un numero`;





