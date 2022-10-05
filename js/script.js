var estadoLicuadora = false;
var sonidoLicuadora = document.getElementById( "blender-sound" );
var botonLicuadora = document.getElementById( "blender-button-sound" );
var licuadora = document.getElementById("blender");


 

function controlarLicuadora() {
    if(estadoLicuadora == false){
        estadoLicuadora = true;
        hacerBrrBrr();
        licuadora.classList.add('active');
        
    }else{
        estadoLicuadora = false;
        hacerBrrBrr();
        licuadora.classList.remove('active');
        
        
    }
}


function hacerBrrBrr() {
    if( sonidoLicuadora.paused ){
        botonLicuadora.play();
        sonidoLicuadora.play();
      } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0; /* Reinicia el audio al segundo 0 */
      }
    }