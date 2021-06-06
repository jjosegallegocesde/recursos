//SE CREAN REFERENCIAS EN MEMORIA PARA ALMACENAR LAS ETIQUETAS A CONTROLAR
let botonConvocar=document.getElementById("convocar");

//DETECTO EL CLIC EN EL BOTÓN
botonConvocar.addEventListener("click",obtenerDatosJugador);

//CREO LA FUNCIÓN obtenerDatosjUGADOR
function obtenerDatosJugador(event){

    event.preventDefault();

    //CAPTURO LOS DATOS QUE EL USUARIO ESCRIBE EN EL FORMULARIO
    let nombre=document.getElementById("nombre").value;
    let posicion=document.getElementById("posicion").value;
    let edad=document.getElementById("edad").value;
    let equipo=document.getElementById("equipo").value;

    let jugador={
        nombre,
        posicion,
        edad,
        equipo
    }

    conectarAPI(jugador);
}

function conectarAPI(jugador){

    
    //1. poner la uri DEL SERVICIO
    const URI="https://juangallegoapi.herokuapp.com/jugador/nuevo";

    //2 ARMO EL BODY CON EL FORMATO X-WWW
    let datosEnvio=`nombre=${jugador.nombre}&edad=${jugador.edad}&posicion=${jugador.posicion}&equipo=${jugador.equipo}`

    //3. Armar la peticion(HTTP)
    let peticion={
        method:"POST",
        headers:{"Content-Type":"application/x-www-form-urlencoded"},
        body:datosEnvio
    }

    //4. LLamar al servidor(asincrona)
    fetch(URI,peticion)
    .then(respuesta=>respuesta.json())
    .then(datos=>console.log(datos));
    



}