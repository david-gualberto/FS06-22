btn = document.getElementById('button');
const oggi = new Date();

class Utente {
    constructor(_nome, _cognome, _dataNascita, _anni) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.dataNascita = _dataNascita;
        this.anni = function() {
            const annoUtente = new Date(this.dataNascita);
            var eta = (oggi.getFullYear() - annoUtente.getFullYear());

            if (oggi.getMonth() < annoUtente.getMonth() ||
                oggi.getMonth() == annoUtente.getMonth() && oggi.getDate() < annoUtente.getDate()) {
                eta--;
            }
            return eta;

        };
    }
}

btn.addEventListener('click', scrivi)

function scrivi() {
    let newNome = document.getElementById('nome').value;
    let newCognome = document.getElementById('cognome').value;
    let newDataNascita = document.getElementById('dataNascita').value;
    let tabella = document.getElementById('tabella');

    if (newNome == 0 | newCognome == 0 | newDataNascita == 0) {
        document.getElementById('errore').innerHTML = 'Compilare i campi...'
        return
    }

    else {

        const newUtente = new Utente(newNome, newCognome, newDataNascita);
        let tr = document.createElement('tr');
        tr.innerHTML = `<td class="py-3">${newUtente.nome}</td><td class="py-3">${newUtente.cognome}</td><td class="py-3">${newUtente.dataNascita}</td><td class="py-3">${newUtente.anni()}</td>`;
        tabella.appendChild(tr);
        let span = document.createElement("span");
        span.className = "btn btn-sm float-end mt-2";
        span.innerHTML = '<i class="fa-solid fa-trash"></i>';
        tr.appendChild(span);
        span.addEventListener('click', function () {
            span.parentNode.remove();
        })
        svuotaCampi();
    }
}


function svuotaCampi() {
    document.getElementById('errore').innerHTML = '';
    document.getElementById('nome').value = '';
    document.getElementById('cognome').value = '';
    document.getElementById('dataNascita').value = '';
}


