var nombre = "Juan Pablo";
var apellido = "Reviglio Hernandez";
var usuarioPlatzi = "Juampi_revi";
var edad = 30;
var correo = "juampi_reviglio@hotmail.com";
var mayorDeEdad = true;
var ahorros = 50000;
var deudas = 0;

var nombreCompleto = nombre + apellido; 
console.log (nombreCompleto);

var dineroReal = ahorros - deudas;
console.log (dineroReal);

var miFuncion = function (nombre, apellido, nick){
    return "Mi nombre es " + nombre + apellido + " pero prefiero que me llamen " + nick; };

console.log (miFuncion(nombre, apellido, usuarioPlatzi));

var subscription = "basic";

function tipoDeSub (subscription){
    if (subscription === "free"){
        consol.log ("solo puedes tomar los cursos gratis");
    };
        else if (subscription === "basic"){
            console.log ("puedes tomar casi todos los cursos durante un mes");
        }; 
        else if (subscription === "expert"){
            console.log ("puedes tomar casi todos los cursos durante un año");
        };
        else if (subscription === "expertPlus"){
            console.log ("puedes tomar todos los cursos durante un año");
        } else {
            consol.log ("todavia no tiene ninguna subs")
        } ;
}