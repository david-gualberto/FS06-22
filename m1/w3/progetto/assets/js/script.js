function insertValue(valore) {
    document.getElementById('risultato').value += valore;
}

function operazione() {
document.getElementById("risultato").value = eval(document.getElementById("risultato").value);
}

function radice() {
    document.getElementById("risultato").value = Math.sqrt(document.getElementById("risultato").value);
    }

function azzera(value) {
    document.getElementById('risultato').value = value;
}
