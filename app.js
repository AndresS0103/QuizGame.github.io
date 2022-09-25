//Arreglo que contiene las respuestas correctas
let correctas = [3, 1, 2, 2, 3];

//Arreglo donde se guardaran las respuestas del usuario
let opcion_elegida = [];

let cantidadCorrectas = 0;

function respuesta(num_pregunta, seleccionada){
    //se guarda la respuesta elegida
    opcion_elegida[num_pregunta] = seleccionada.value

    //poner en color blanco el color del los inputs para cuando se elije 
    //una opcion
    //id para seleccionar la seccion correspondiente
    id="p" + num_pregunta

    labels = document.getElementById(id).childNodes
    labels[3].style.backgroundColor = "white";
    labels[5].style.backgroundColor = "white";
    labels[7].style.backgroundColor = "white";

    //dar el color al label seleccionado
    seleccionada.parentNode.style.backgroundColor = "#cec0fc";
}

//funcion para compara las respuestas correctas
function corregir(){
    cantidadCorrectas = 0;
    for(i = 0; i < correctas.length; i++){
        if(correctas[i] == opcion_elegida[i]){
            cantidadCorrectas++;
        }
    }

    document.getElementById("resultado").innerHTML = cantidadCorrectas;
}