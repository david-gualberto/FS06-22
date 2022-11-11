var nome = document.getElementById('nome');
var cognome = document.getElementById('cognome');
var addBtn;
var elencoHTML;
var errore;
var erroreElenco;
var idUtente;
var elenco = [];
var btnSvuota = document.getElementById('svuota');
var json;

window.addEventListener('DOMContentLoaded', init);

function init() {
	addBtn = document.getElementById('scrivi');
	elencoHTML = document.getElementById('elenco');
	errore = document.getElementById('errore');
	erroreElenco = document.getElementById('erroreElenco');
	printData();
	eventHandler();
}

function eventHandler() {
	addBtn.addEventListener('click', function () {
		if (idUtente) {
			modifica(idUtente)
		} else {
			controlla();
		}
	});
}

function printData() {
	fetch('http://localhost:3000/elenco')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			elenco = data;
			if (elenco.length > 0) {
				errore.innerHTML = '';
				elencoHTML.innerHTML = '';
				elenco.map(function (element) {
					var li = document.createElement('li');
					li.classList.add("list-group-item", "bg-light", "text-dark", "py-2")
					var btn1 = document.createElement('button');
					btn1.classList.add("mx-1", "btn", "btn-outline-success")
					btn1.setAttribute('onClick', `scrivi(${element.id})`)
					var btn2 = document.createElement('button');
					btn2.classList.add("rimuovi", "mx-1", "btn", "btn-outline-danger");
					btn2.setAttribute('onClick', `remove(${element.id})`)
					elencoHTML.appendChild(li);
					li.appendChild(btn1);
					li.appendChild(btn2);
					btn1.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'
					btn2.innerHTML = '<i class="fa-solid fa-trash"></i>'
					li.innerHTML += `${element.nome} ${element.cognome}`;
				});
			} else {
				erroreElenco.innerHTML = 'Nessun elemento presente in elenco';
			}
		});
}

function controlla() {
	if (nome.value != '' && cognome.value != '') {
		var data = {
			nome: nome.value,
			cognome: cognome.value,
		};
		addData(data);
	} else {
		errore.innerHTML = 'Compilare correttamente i campi!';
		return;
	}
}

async function addData(data) {
	let response = await fetch('http://localhost:3000/elenco', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json;charset=utf-8',
		},
		body: JSON.stringify(data),
	});
	clearForm();
}

function clearForm() {
	nome.value = '';
	cognome.value = '';
}

function remove(id) {
	if (confirm("Sei sicuro di voler cancellare?") == true) {
		fetch(`http://localhost:3000/elenco/${id}`, {
			method: 'DELETE'
		});
	}
}

function scrivi(id) {
	fetch(`http://localhost:3000/elenco/${id}`).then((response) => {
		return response.json();
	}).then((data) => {
		document.getElementById('nome').value = data.nome;
		document.getElementById('cognome').value = data.cognome;
	});
	return idUtente = id;
}


function modifica(idUtente) {

	if (nome.value && cognome.value) {
		fetch(`http://localhost:3000/elenco/${idUtente}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify({
				"nome": nome.value,
				"cognome": cognome.value
			}),
		});
	} else {
		errore.innerHTML = 'Compilare correttamente i campi!';
	} 
	clearForm();
}
