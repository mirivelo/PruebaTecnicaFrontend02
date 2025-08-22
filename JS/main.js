
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
    },
    {
    pregunta: "Cómo se dice mosca en inglés?",
    opciones: ["mosquite","moscu","mosquet","fly"],
    respuestaCorrecta:"fly"
    },
    {
    pregunta: "Qué es el DOM?",
    opciones: ["Document Objet Model","Dominance Or Murder","Do or Mute","Domine of Model"],
    respuestaCorrecta:"Document Objet Model"
    },
    {
    pregunta: "Cuántos dias tiene una semana?",
    opciones: ["7","8","5 dias laborales","2 libres"],
    respuestaCorrecta:"7"
    },
    {
    pregunta: "Qué es HTML?",
    opciones: ["Hyper Text Markup Language","Es un lenguaje de programación","Crea sitios Web din;amicos","Hipper Top Maked Language"],
    respuestaCorrecta:"Hypper Text Markup Language"
    },
    {
    pregunta: "Cuántos continentes hay?",
    opciones: ["Depende","5","7","6"],
    respuestaCorrecta:"Depende.... Un modelo popular en América habla de cinco continentes habitados (América, Europa, Asia, África y Oceanía), mientras que otro común, reconocido por la geografía y los centros educativos, habla de siete continentes al dividir América en dos y mencionar Oceanía. "
    }
];

/**variables para manejar el estado del cuestionario*/
let preguntaIndex = 0;
const totalPreguntas = cuestionario.length;
/**variables para obtener referencias del dom del cuestionario*/
const preguntaTexto = document.getElementById("pregunta-texto");
const opcionesRespuestas = document.getElementById("opciones-respuestas");
const btnAnterior = document.getElementById("btn-anterior");
const btnSiguiente = document.getElementById("btn-siguiente");
const contadorPregunta = document.getElementById("contador-pregunta");

//estado muestra pregunta actual
function mostrarPregunta(){
 const pregunta = cuestionario[preguntaIndex];
 preguntaTexto.textContent = pregunta.pregunta;
// Se limpia el contenido del div de opciones para evitar duplicados.
opcionesRespuestas.innerHTML = "";

//for each para iterar sobre las opciones y colocar los buttons dinámicamente
pregunta.opciones.forEach((opcion, index) => {
const div = document.createElement("div");
 div.classList.add("form-check", "mb-2");

 // Corregido: Se usa document.createElement para crear el input
 const input = document.createElement("input"); 
 input.classList.add("form-check-input");
 input.type="radio";
 input.name="pregunta"; // El mismo 'name' para todas las opciones asegura que solo se pueda seleccionar una
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
btnAnterior.addEventListener("click", anteriorPregunta);
btnSiguiente.addEventListener("click", siguientePregunta);

//Función para ir a la pregunta anterior
function anteriorPregunta(){
    if(preguntaIndex > 0){
        preguntaIndex--;
        mostrarPregunta();
    }
}

//Función para ir a la pregunta siguiente
function siguientePregunta(){
    if(preguntaIndex < totalPreguntas - 1){
        preguntaIndex++;
        mostrarPregunta();
    }
}