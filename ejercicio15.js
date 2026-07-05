/*nombre y calificacion:*/
let estudiante={
    nombre: "Juan",
    calificasion: 85
};

/*acceso a los datos*/
console.log(estudiante.nombre);
console.log(estudiante['calificacion']);

/*Creación de objetos:*/
/*
let estudiantes =[
    {nombre: "Juan",calificasion: 85}
];
*/
let estudiantes;

/*Recorrido de un arreglo de objetos:*/
estudiantes.forEach(estudiante =>{
    console.log(estudiante.nombre);
})  

/*ejemplo de calificacion maxima*/
let calificacionMaxima = Math.max(...estudiantes.map(e =>
e.calificacion));
let calificacionMinima = Math.min(...estudiantes.map(e =>
e.calificacion));

let promedio = estudiantes.reduce((total, estudiante )=> total +
estudiante.calificasion, 0 ) / length.estudiantes.length;



function validar_entrada(){
    let nombrev = document.getElementById('nombre').value;
    let calificacionv = document.getElementById('calificacion').value;
    const soloNumeros = /^\d+$/.test(calificacionv);
    if(nombrev==="" || calificacionv==="") {
        alert("debe ingresar el nombre y la calificacion, para agregarlo");
    } else if(!soloNumeros ){
        alert("la claificasion solo deben ser números ")
    }else{
        registrarEstudiante(nombrev, calificacionv)
    }
}

function listaVacia(){
    if(estudiantes.length ===0){
        alert("la lista esta vacia");
    }
}

function registrarEstudiante(nombreR, calificacionR){
    let estudiantes =[
    {nombre: nombreR,calificasion: calificacionR}
    ];
}

function calcular(){
    listaVacia();
}
