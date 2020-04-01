// Esta linea de codigo asegura que la página esta cargada 
$(document).on("ready", Valortotal());

function Valortotal () {
    // paso  2 (Almacenar en variables)

    var venta1 = document.getElementById("Inputventa1").value;

    var venta2 = document.getElementById("Inputventa2").value;

    var venta3 = document.getElementById("Inputventa3").value;

    var gasto1 = document.getElementById("Inputgasto1").value;

    var gasto2 = document.getElementById("Inputgasto2").value;



    
    var resultadoventa = ( parseFloat(venta1) + parseFloat(venta2) + parseFloat(venta3) );
     
    var resultadogasto = ( parseFloat(gasto1) + parseFloat(gasto2) );

    var resultadocierrecaja = ( parseFloat(resultadoventa) - parseFloat(resultadogasto));



    window.alert (" Sus ventas fueron " + resultadoventa + " Sus gastos fueron " + resultadogasto + " Total cierre caja " + resultadocierrecaja );
   }