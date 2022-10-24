const data = new Date();

    let orario = data.getHours();
    if (orario < 12) {
       orario = 'Buongiorno!'
    }
    else if (orario < 18) {
        orario = 'Buon pomeriggio!'
    }
    else {
        orario = 'Buona sera!'
    }

    document.getElementById('saluto').innerHTML = orario;