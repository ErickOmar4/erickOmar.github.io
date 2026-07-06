
let estudiantes = [];
function agregar() {
    let nom = document.getElementById("nombre").value;
    let clc = document.getElementById("calificacion").value;

    if (nom === "" || clc === "" || isNaN(clc)) {
        alert("Ingrese datos válidos.");
        return;
    }

    if (clc < 0 || clc > 100) {
        alert("La calificación debe estar entre 0 y 100.");
        return;
    }

    let estudiante = {
        nombre: nom,
        calificacion: parseFloat(clc)
    };

    estudiantes.push(estudiante);

    alert("Estudiante agregado.");

    document.getElementById("nom").value = "";
    document.getElementById("clc").value = "";
}

function calcular() {

    if(estudiantes.length == 0){
        alert("No hay estudiantes.");
        return;
    }

    let suma = estudiantes.reduce(
        (total, estudiante) => total + estudiante.calificacion,
        0
    );

    let promedio = suma / estudiantes.length;

    let maxima = Math.max(
        ...estudiantes.map(e => e.calificacion)
    );

    let minima = Math.min(
        ...estudiantes.map(e => e.calificacion)
    );

    let mejor = estudiantes.find(
        e => e.calificacion === maxima
    );

    let peor = estudiantes.find(
        e => e.calificacion === minima
    );

    document.getElementById("cal_promedio").value = promedio.toFixed(2);
    document.getElementById("nom_calli_alta").value =  mejor.nombre +" :"+mejor.calificacion;
    document.getElementById("nom_calli_baja").value = peor.nombre +" :"+peor.calificacion;
}