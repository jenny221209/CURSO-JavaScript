// Esta linea de codigo asegura que la página esta cargada 
$(document).on("ready", Mensaje());

function Mensaje () {
    // paso  2 (Almacenar en variables)

    var nombre = document.getElementById("InputNombre").value;

    var apellido = document.getElementById("InputApellido").value;

    var edad = document.getElementById("InputEdad").value;


    // paso 3 - 4 ( Evaluar con un condicional if si es mayor de edad - Enviar el mensaje si es mayor o menor de edad )

    if (edad > 18) 
    {
        window.alert(" Su nombre es " + nombre + " Su apellido es " + apellido + " edad " + edad + "Usted es mayor de edad" ); 
    } else {

        window.alert(" Su nombre es " + nombre + " Su apellido es " + apellido + " edad " + edad + "Usted es menor de edad" ); 

    }

   }