// Esta linea de codigo asegura que la página esta cargada 
$(document).on("ready", Valortotal());

function Valortotal () {
    // paso  2 (Almacenar en variables)

    var horasmañana = document.getElementById("Inputhorasmañana").value;

    var horastarde = document.getElementById("Inputhorastarde").value;

    var horasnoche = document.getElementById("Inputhorasnoche").value;

    var valorhoraempleado = document.getElementById("Inputvalorhoraempleado").value;


    // paso 3 - 4 ( Evaluar con un condicional if si es mayor de edad - Enviar el mensaje si es mayor o menor de edad )

    var resultado = ( ( parseFloat(horasmañana) + parseFloat(horastarde) + parseFloat(horasnoche) ) * valorhoraempleado );

    window.alert (" Jornada mañana " + horasmañana + " Jornada tarde " + horastarde + " Jornada Noche " + horasnoche + " valor total en dinero " + resultado );
   }