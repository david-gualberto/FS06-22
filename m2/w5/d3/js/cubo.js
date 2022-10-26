var cubo = document.querySelectorAll(".cube")

function mouseOutright() {
    var length = cubo.length;
    let angolo = Number(cubo[0].style.transform.replace("rotateY(", "").replace("deg)",""));
    for ( index = 0 ; index < length; index++) {
        cubo[index].style.transform = "rotateY("+(angolo-25)+"deg)";
    }
}
function mouseOverright() { 
    var length = cubo.length;
    let angolo = Number(cubo[0].style.transform.replace("rotateY(", "").replace("deg)",""));
    for ( index = 0 ; index < length; index++) {
        cubo[index].style.transform = "rotateY("+(angolo+25)+"deg)";
    }
}
function mouseOutleft() {
    var length = cubo.length;
    let angolo = Number(cubo[0].style.transform.replace("rotateY(", "").replace("deg)",""));
    for ( index = 0 ; index < length; index++) {
        cubo[index].style.transform = "rotateY("+(angolo+25)+"deg)";
    }
}
function mouseOverleft() {
    var length = cubo.length;
    let angolo = Number(cubo[0].style.transform.replace("rotateY(", "").replace("deg)",""));
    for ( index = 0 ; index < length; index++) {
        cubo[index].style.transform = "rotateY("+(angolo-25)+"deg)";
    }
}

function ruotaDx() {
    var length = cubo.length;
    let angolo = Number(cubo[0].style.transform.replace("rotateY(", "").replace("deg)",""));
    for ( index = 0 ; index < length; index++) {
        cubo[index].style.transform = "rotateY("+(angolo+90)+"deg)";
    }
}

function ruotaSx()  {
    var length = cubo.length;
    let angolo = Number(cubo[0].style.transform.replace("rotateY(", "").replace("deg)",""));
    for ( index = 0 ; index < length; index++) {
        cubo[index].style.transform = "rotateY("+(angolo-90)+"deg)";
    }
}

