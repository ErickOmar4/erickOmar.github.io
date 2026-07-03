function convertirTemperatura() {
    const celsius = document.getElementById('celsiusInput').value;
    const soloNumeros = /^\d+$/.test(celsius);
    if (celsius === "") {
        
        alert("Por favor, ingrese un valor en Celsius.");
        /*return;*/
        
    } else if(!soloNumeros){
            alert("ingrese solo números.");
            return;
        }
    const fahrenheitResult = (celsius * 9/5) + 32;
    document.getElementById('fahrenheitResult').value = fahrenheitResult + " °F";
}