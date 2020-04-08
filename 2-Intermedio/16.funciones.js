//=============================== FUNCIONES SIN PARMETROS ==========================

// FUncion suma sin recibir parametros
function suma() {
    var num1 = 5;
    var num2 = 3;

    var resultado = ( parseInt(num1) + parseInt(num2));

    console.log("El resultado de la suma: ", resultado)
}

// // FUncion resta sin recibir parametros
function resta() {
    var num1 = 8;
    var num2 = 2;

    var resultado = ( parseInt(num1) - parseInt(num2));

    console.log("El resultado de la resta: ", resultado)
}

//=============================== FUNCIONES CON PARAMETROS ===========================

// Funcion sumadatos con parametros (num1 , num2)
function sumaDatos ( num1, num2) {

    var resultado = ( parseInt(num1) + parseInt(num2));
    console.log("El resultado de la suma: ", resultado)

}

// Funcion sumaDatosNombre con parametros ( nombre, num1 , num2, num3)
function sumaDatosNombre( nombre, num1, num2, num3) {

    var resultado = ( parseInt(num1) + parseInt(num2) + parseInt(num3) );
    console.log( "Hola",  nombre, "El resultado de la suma es: ", resultado)

}

//suma();

//sumaDatos( 15, 15 );

sumaDatosNombre ( "Jenny", 40,  60, 200);