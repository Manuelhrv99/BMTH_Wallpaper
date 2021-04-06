function random (minimo, maximo, decimales) {
    var precision = Math.pow(10, decimales);
    minimo = minimo*precision;
    maximo = maximo*precision;
    return Math.floor(Math.random()*(maximo-minimo+1) + minimo) / precision;
}

document.getElementById("Peak1").style.animationDelay = random(1, 3, 2).toString() + "s"
document.getElementById("Peak2").style.animationDelay = random(1, 3, 2).toString() + "s"
document.getElementById("Peak3").style.animationDelay = random(1, 3, 2).toString() + "s"
document.getElementById("Peak4").style.animationDelay = random(1, 3, 2).toString() + "s"
document.getElementById("Peak5").style.animationDelay = random(1, 3, 2).toString() + "s"
document.getElementById("Peak6").style.animationDelay = random(1, 3, 2).toString() + "s"
document.getElementById("Peak7").style.animationDelay = random(1, 3, 2).toString() + "s"
document.getElementById("Peak8").style.animationDelay = random(1, 3, 2).toString() + "s"
document.getElementById("Peak9").style.animationDelay = random(1, 3, 2).toString() + "s"
document.getElementById("Peak10").style.animationDelay = random(1, 3, 2).toString() + "s"
document.getElementById("Peak11").style.animationDelay = random(1, 3, 2).toString() + "s"
document.getElementById("Peak12").style.animationDelay = random(1, 3, 2).toString() + "s"

//Press Enter to see full screen

document.addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
      toggleFullScreen();
    }
}, false);

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
}