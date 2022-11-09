window.addEventListener('DOMContentLoaded', timer);

var sec = 0;
var min = 0;
var lastSec = sessionStorage.getItem("sec");
var lastMin = sessionStorage.getItem("min");
interval = setInterval(timer, 1000);


    if (lastSec || lastMin) {
        sec = Number(lastSec);
        min = Number(lastMin)
    }
   
function timer() {

    if (sec == 60) {
        sec = 0;
        min++;
    }

    sec++;
   
    document.getElementById("tempo").innerHTML = `Tempo: ${min} min ${sec} sec`;
    sessionStorage.setItem("sec", sec);
    sessionStorage.setItem("min", min);
}

