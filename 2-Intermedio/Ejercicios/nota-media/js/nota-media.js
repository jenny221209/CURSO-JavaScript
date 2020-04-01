// Esta linea de codigo asegura que la página esta cargada 
$(document).on("ready", Notafinal());

function Notafinal() {
    // paso  2 (Almacenar en variables)

    var nombre = document.getElementById("Inputnombre").value;

    var edad = document.getElementById("Inputedad").value;
  
    var grado = document.getElementById("Inputgrado").value;

    var sexo = document.getElementById("selectsexo").value;

    var nota1 = document.getElementById("Inputnota1").value;

    var nota2 = document.getElementById("Inputnota2").value;
   
    var nota3 = document.getElementById("Inputnota3").value;


    var resultado = ( ( parseInt(nota1) + parseInt(nota2) + parseInt(nota3) ) / 3 );

    var mayoromenor;
    if (edad > 18) {
        mayoromenor = ("mayor de edad")
    }else {
        mayoromenor = ("menor de edad")
    }

    window.alert(" su nombre es: " + nombre + " su edad es: " + edad + " grado: " + grado + " sexo: " + sexo + " nota 1 es: " + nota1 + " nota2 es: " + nota2 + " nota 3 es: " + nota3 + " Nota final es: " + resultado);


     if ( resultado > 2.9 ){
           window.alert (" Gano la materia ");
       }else {
           window.alert (" Perdio la materia ");
       }


    }
  
