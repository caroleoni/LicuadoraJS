let estadoLicuadora = "apagada";
let sonidoLicuadora = document.getElementById("blender-sound");
let sonidoLicuadoraBoton = document.getElementById("blender-button-sound");
let licuadora = document.getElementById("blender");

function controlarLicuadora() {
    if(estadoLicuadora === "apagada") {
        estadoLicuadora = "encendida";
        reproducirSonido()
        licuadora.classList.add("active");
        // console.log("me prendiste");
    } else {
        estadoLicuadora = "apagada";
        reproducirSonido()
        licuadora.classList.remove("active");
        // console.log("me apagaste");
    }
};

function reproducirSonido() {
    if(sonidoLicuadora.paused) {
        sonidoLicuadoraBoton.play();
        sonidoLicuadora.play();
    } else {
        sonidoLicuadoraBoton.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0; //lo que hace es al apagar la licuadora vuelve el sonido a 0
    }
}