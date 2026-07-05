let estudiantes = [];

function validar_entrada(){
    let nombrev = document.getElementById('nombre').value;
    let calificacionv = document.getElementById('calificacion').value;
    const soloNumeros = /^\d+$/.test(calificacionv);
    if(nombrev==="" || calificacionv==="") {
        alert("debe ingresar el nombre y la calificacion, para agregarlo");
    } else if(!soloNumeros ){
        alert("la claificasion solo deben ser números ");
    }else{
        registrarEstudiante(nombrev, calificacionv);
    }
}


function listaVacia(){
    if(estudiantes.length ===0){
        alert("la lista esta vacia");
        return true;
    }
}

/*
function registrarEstudiante(nombrev, calificacionv){
    /*
    let estudiante={
    nombre: nombrev,
    calificasion: calificacionv
    estudiantes.push
};*//*
estudiantes.push
    alert("estudiante registrado");*/
    /*
     new estudiante ={
        nombre: nombrev,
        calificacion: calificacionv
    };

    estudiantes.push(NewEstudiante);
}*/

function calcular(){
    if(!listaVacia()){
        alert("hola");
    }
}