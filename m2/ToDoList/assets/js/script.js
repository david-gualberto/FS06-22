btn = document.getElementById('button');

btn.addEventListener('click', function() {
    aggiungi();
})

function aggiungi() {
    var valore1 = document.getElementById('input1').value;
    var valore2 = document.getElementById('input2').value;
    if (valore1 == 0 | valore2 == 0) {
        document.getElementById('testo').innerHTML = 'Compilare i Campi...'
        return;
    }
    else {
        document.getElementById('testo').innerHTML = ' ';
        document.getElementById('lista').innerHTML += `<li class="d-flex justify-content-between">${valore1} - ${valore2} <button class="delete" id="remove"><i class="fa-solid fa-trash fs-4"></i></button></li>`;
        document.getElementById('input1').value = ' ';
        document.getElementById('input2').value = ' ';
    }

    var check = document.querySelectorAll('li');
    for (var i =0; i<check.length; i++) {
        check[i].addEventListener('click', function() {
            this.classList.toggle("sbarrato");
        });
    }


    var cancella = document.querySelectorAll(".delete");
    for(var i=0; i<cancella.length; i++){
        cancella[i].onclick = function(){
            this.parentNode.remove();
}
}}
