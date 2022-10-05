var estadoLicuadora = false;
var sonidoLicuadora = document.getElementById( "blender-sound" );
var botonLicuadora = document.getElementById( "blender-button-sound" );
var licuadora = document.getElementById("blender");


 

function controlarLicuadora() {
    if(estadoLicuadora == false){
        estadoLicuadora = true;
       
        licuadora.classList.add('active');
        
    }else{
        estadoLicuadora = false;
        
        licuadora.classList.remove('active');
        
        
    }
}

