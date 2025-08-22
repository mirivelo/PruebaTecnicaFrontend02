
const cuestionario = [
    {
    pregunta: "Cuál es la raí cuadrada de 25 ?",
    opciones: ["5","3","25 no tiene raíz cuadrada","2"],
    respuestaCorrecta:"5"
    },
    {
    pregunta: "Cuál es la capital de Francia ?",
    opciones: ["Berlín","Madrid","París","Roma"],
    respuestaCorrecta:"París"
    },
    {
    pregunta: "Quién pintó la Mona Lisa?",
    opciones: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
    respuestaCorrecta:"Leonardo da Vinci"
    },
    {
    pregunta: "¿Cuántos planetas hay en el sistema solar? ?",
    opciones: ["7","9","8","10"],
    respuestaCorrecta:"8"
    },
    {
    pregunta: "Cuántos signos zodiacales hay?",
    opciones: ["15","13","12","2"],
    respuestaCorrecta:"12"
    }
];

/**variables para manejar el estado del cuestionario*/
let preguntaIndex=0;
const totalPreguntas=cuestionario.length;
/**variables para obtener referencias del dom del cuestionario*/
const preguntaTexto = document.getElementById("pregunta-texto");
const opcionesRespuestas = document.getElementById("opciones-respuestas");
const btnAnterior = document.getElementById("btn-anterior");
const btnSiguiente = document.getElementById("btn-siguiente");
const contadorPregunta = document.getElementById("contador-pregunta");


//estado muestra pregunta actual
function mostrarPregunta(){
    const pregunta = cuestionario[preguntaIndex];// Obtiene el objeto de la pregunta actual del arreglo
    preguntaTexto.textContent = pregunta.pregunta //Muestra el texto de la pregunta en el dom
    opcionesRespuestas.innerHTML = " ";//Limpia las respuestas anteriores 
    opcionesRespuestas.textContent = pregunta.opciones;//// Obtiene el objeto de la pregunta actual del arreglo

    //for each para iterar sobre las opciones y colocar los buttons dinámicamente
    pregunta.opciones.forEach((opcion, index) => {
        const div = document.createElement("div");
        div.classList.add("form-check","mb-2");

        const input = document.createEvent("input");
        input.classList.add("form-check-input");
        input.type="radio";
        input.name="pregunta";
        input.id = `opcion${index}`;
        input.value = opcion;

        const label = document.createElement("label");
        label.classList.add("form-check-label");
        label.htmlFor=`opcion${index}`;
        label.textContent = opcion;

        div.appendChild(input);
        div.appendChild(label);
        opcionesRespuestas.appendChild(div);

    });

//Actualiza contador de preguntas
contadorPregunta.textContent = `${preguntaIndex +1} de ${totalPreguntas}`;

// Habilita/deshabilita los botones de navegación
btnAnterior.disabled = preguntaIndex === 0;
btnSiguiente.disabled = preguntaIndex === totalPreguntas -1;


}//mostrarPregunta

//Al cargar la pagina muestra una pregunta inicial
document.addEventListener("DOMContentLoaded",mostrarPregunta);


//Eventos de los botones

btnAnterior.addEventListener("click",anteriorPregunta);
btnSiguiente.addEventListener("click",siguientePregunta);

//Función para ir a la pregunta anterior

function anteriorPregunta(){
    if(preguntaIndex>0){
        preguntaIndex--;
        mostrarPregunta();
    }//ifAnterior
}//funcion anterior

//Función para ir a la pregunta siguiente

function siguientePregunta(){
    if(preguntaIndex<totalPreguntas-1){
        preguntaIndex++;
        mostrarPregunta();
    }//ifSiguiente
}//funcion Siguiente

