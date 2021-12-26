var estadoLicuadora = 'apagado';
var sonidoLicuadora = document.getElementById('blender-sound');
var botonLicuadora = document.getElementById('blender-button-sound')
var licuadora = document.getElementById('blender');

function controlarLicuadora() {
  if (estadoLicuadora == 'apagado') {
    estadoLicuadora = 'encendido';
    brrBrrr();
    licuadora.classList.add('active');
    // console.log('me prendiste');
  } else {
    estadoLicuadora = 'apagado'
    brrBrrr();
    licuadora.classList.remove('active')
    // console.log('me apagaste')
  }

}

function brrBrrr() {
  if (sonidoLicuadora.paused) {
    botonLicuadora.play();
    sonidoLicuadora.play();
  } else {
    botonLicuadora.play();
    sonidoLicuadora.pause();
    sonidoLicuadora.currentTime = 0
  }
}