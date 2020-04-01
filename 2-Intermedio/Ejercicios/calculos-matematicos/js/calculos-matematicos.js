// Esta linea de codigo asegura que la página esta cargada 
$(document).on("ready", Calculo());

function Calculo() {
    
        var eleccion = document.getElementById("selectseleccionar");

        if (eleccion == "suma") {
            suma();
        } else if (eleccion == "resta") {
            resta();
        }


    }




    function suma() {

        // paso  2 (Almacenar en variables)

        var numero1 = document.getElementById("Inputnumero1").value;

        var numero2 = document.getElementById("Inputnumero2").value;
    
        var resultado = ( ( parseInt(numero1) + parseInt(numero2) ) );
   

        window.alert("Estos son los numero que ingreso: " + numero1 + " + " + numero2 + " + " + "El resultado de la suma es:" + resultado);

    }


    function resta() {
        window.alert("Hola esta en la funcio resta");
    }

  
