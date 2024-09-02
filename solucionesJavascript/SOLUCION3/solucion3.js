function encontrarSiguienteNumero(arr) {
    // Ordenar el array de entrada en orden ascendente
    arr.sort((a, b) => a - b);

    // Inicializar el siguiente número esperado en la secuencia lógica ascendente
    let siguienteNumero = 1;

    // Recorrer cada número en el array
    for (let numero of arr) {
        // Si el número actual es mayor que el siguiente número esperado
        if (numero > siguienteNumero) {
            return siguienteNumero;
        }
        // Sumar el número actual al siguiente número esperado
        siguienteNumero += numero;
    }

    // Si llegamos al final del array, el siguiente número esperado es el resultado
    return siguienteNumero;
}

// Ejemplos de uso
console.log(encontrarSiguienteNumero([1, 2, 4, 8])); // Resultado: 16
console.log(encontrarSiguienteNumero([1, 2, 4, 9])); // Resultado: 8
console.log(encontrarSiguienteNumero([1, 1, 1, 1, 1])); // Resultado: 6
console.log(encontrarSiguienteNumero([5, 7, 1, 1, 2, 3, 22])); // Resultado: 20
console.log(encontrarSiguienteNumero([1, 5, 1, 1, 1, 10, 15, 20, 100])); // Resultado: 20
