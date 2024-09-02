function procesarArreglo(arregloNumeros, s) {
    // Invertir el arreglo de números
    arregloNumeros.reverse();

    // Crear una nueva lista para almacenar los números procesados
    let listaProcesada = [];

    // Recorrer cada número en el arreglo original
    arregloNumeros.forEach(numero => {
        // Convertir el número en una cadena de caracteres
        let cadenaNumero = numero.toString();

        // Eliminar todos los dígitos iguales a s
        let nuevaCadena = "";
        for (let digito of cadenaNumero) {
            if (digito !== s.toString()) {
                nuevaCadena += digito;
            }
        }

        // Si la nueva cadena no está vacía, convertirla a número y agregarla a la lista procesada
        if (nuevaCadena !== "") {
            let nuevoNumero = parseInt(nuevaCadena, 10);
            listaProcesada.push(nuevoNumero);
        }
    });

    // Imprimir el resultado
    console.log(listaProcesada);
}

procesarArreglo([10, 20, 30, 40], 6);

// Ejemplos de uso
procesarArreglo([1, 2, 3, 4, 5, 6], 6);  // [5, 4, 3, 2, 1]
procesarArreglo([40, 30, 20, 10], 6);
procesarArreglo([6], 6); // []
procesarArreglo([65], 6); // [5]
procesarArreglo([6, 2, 1], 6); // [1, 2]
procesarArreglo([60, 6, 5, 4, 3, 2, 7, 7, 29, 1], 5); // [1, 2, 2, 3, 4, 5, 0]