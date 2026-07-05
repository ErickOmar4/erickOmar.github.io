function convertirKilometros_millas() {
    const kilometros = document.getElementById('kilometrosIn').value;
    const soloNumeros = /^\d+$/.test(kilometros);
    if (kilometros === "") {
        
        alert(" ingrese la cantidad de kilometros");
        /*return;*/
        
    } else if(!soloNumeros){
            alert("ingrese solo números.");
            return;
    }else {
    const resultadoM =kilometros * 0.621371 ;
    document.getElementById('resultado_mill').value = resultadoM + " millas";
    }
}