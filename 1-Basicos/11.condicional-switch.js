// OPERADORES LOGICOS O CONDICIONALES

// SWITCH

// El Switch evalua valores que esten almacenadas en variables, constantes o bases de datos. Al contrario que el if que evalua condiciones de una variable,
// constantes o valores de una base de datos

// Diferencia de if a switch
// if: Se usa para evaluar o hacer condiciones.
// switch : Se usa para evaluar valores almacenados.

/*
SINTAXIS

switch (variable) {

    case 1:
        haga esto
        break;

    case 2:
        haga esto
        break;

}

*/

var userStatus = false;
var genero;
var edad;

userStatus = true;
genero = "Femenino";
edad = 25;

// Ejemplo 1
switch (userStatus){

    case false :
        console.log("El usuario esta inactivo");
        break;

        case true :
            console.log("El usuario esta activo, puede continuar");
}

// Ejemplo 2
switch (genero){
    case "Femenino" :
        console.log("categoria femenina");
        break;

        case "Masculino" :
            console.log("categoria masculina");
            break;
}

