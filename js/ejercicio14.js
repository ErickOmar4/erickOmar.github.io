function Proceso(){
    let texto = document.getElementById('numeros').value;
    let arrgeloNumeros = texto.split(",").map(Number);
    if(texto==="") {
        alert("ingrese los numeros");
    } else{
        let maximo = Math.max(...arrgeloNumeros); // Resultado: 30
        document.getElementById('R_numeroMayor').value= maximo;
        let minimo = Math.min(...arrgeloNumeros);
        document.getElementById('R_numeroMenor').value= minimo;

        let suma = arrgeloNumeros.reduce((acc, valor) => acc + valor, 0);
        let promedio = suma / arrgeloNumeros.length; // Resultado: 20
        document.getElementById('R_Promedio').value= promedio;
    }
    
}