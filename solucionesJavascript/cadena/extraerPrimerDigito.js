
function extraerPrimerDigito(cadena1) {
    /*
    for (let i = 0; i < cadena.length; i++) {
        if (!isNaN(cadena[i]) && cadena[i] !== ' ') {
            return cadena[i];
        }
    }
        */

for (cadena of cadena1) {
    if (!isNaN(cadena) && cadena !== ' '&& cadena != 0) {
        return cadena;
    }
}



    return "No se encontró ningún dígito";
}

// Ejemplo de uso
//let cadena = "c0920ad4d76fe97759aa27a0c99bff6710";
let cadena = "cccccccccc5ttttttttttt";
let primerDigito = extraerPrimerDigito(cadena);
console.log(primerDigito);  // Imprime "2"
