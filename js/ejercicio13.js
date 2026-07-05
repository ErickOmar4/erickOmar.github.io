function puedoVotar() {
    const Edad = document.getElementById('edadIngresada').value;
    const soloNumeros = /^\d+$/.test(Edad);
    if (Edad === "") {
        
        alert(" ingrese la edad");
        
    } else if(!soloNumeros){
            alert("ingrese solo números.");
            return;
    } else if(Edad>= 18){
        const res= "si puede votar";
        document.getElementById('respuesta').value =res;
    } else {
        const res= "no puede votar";
        document.getElementById('respuesta').value =res;
    }
}