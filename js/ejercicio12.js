
function convertirA_Dolar() {
    const Pesos = document.getElementById('Entrada_Pesos').value;
    const soloNumeros = /^\d+$/.test(Pesos);
    if (Pesos === "") {
        
        alert("Por favor, ingrese los pesos");
        /*return;*/
        
    } else if(!soloNumeros){
            alert("ingrese solo números.");
            return;
        }
    const USD = Pesos / 18.18;
    document.getElementById('ResultadoDolar').value =USD + "USD";
}