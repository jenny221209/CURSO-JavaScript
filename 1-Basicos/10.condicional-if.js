// OPERADORES LOGICOS 

// IF (SI)


// if es un condicional en el que puede evaluar valores o datos según la condición.
// puede ir acompañado de else y elseif.

// OPERADORES
// Operador == (Evalua si es igual)
// Operador < (Menor que)
// Operador > (Mayor que)
// Operador && (Y)
// Operador || (o)
// Operador ! (negación)

//SINTAXIS
/*

Ej1:
if condicion{
    haga esto
}

Ej2:
if condicion {
    haga esto
}else{
    haga esto
}

Ej3:
if condicion{
    haga esto
}else if condicion {
    haga esto
}else{
    haga esto
}

*/

var nombre1 = "Andres";
var numero1 = 2000;
var numero2 = 100;
var numero3 = 50;
var contraseña1 = 1115079019;
var contraseña2 = 1115079018;

// Ejemplo 1: saber si nombre1 es igual a Jenny
if (nombre1 == "jenny"){
console.log("Es correcto");
}else {
    console.log ("es falso");
}

// Ejemplo 2: Saber si numero1 es mayor a numero2
if (numero1 > numero2) {
    console.log ("Este numero es mayor");
}else {
    console.log ("Este numero es menor");
}

// Ejemplo 3: Saber si las contraseñas son iguales

if (contraseña1 == contraseña2) {
    console.log ("las contraseñas son iguales");
}else {
    console.log ("las contraseñas no son iguales");

}

// Ejemplo 4: saber cual de los 3 números es mayor

if ( (numero1 > numero2) && (numero1 > numero3) ) {

    console.log ("El numero1 es el mayor de todos");

} else if ( (numero2 > numero1) && (numero2 > numero3) ) {

    console.log("El numero2 es el mayor de todos");

} else if ((numero3 > numero1) && (numero3 > numero2) ) {

console.log("el numero 3 es el mayor de todos");
}



