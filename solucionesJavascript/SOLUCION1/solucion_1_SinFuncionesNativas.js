function procesarArreglo(arregloNumeros, s) {
    // Crear una nueva lista para almacenar los números procesados
    let listaProcesada = [];

    // Recorrer cada número en el arreglo original
    for (let i = arregloNumeros.length - 1; i >= 0; i--) {
        let numero = arregloNumeros[i];
        let cadenaNumero_1 = numero.toString();
        let nuevaCadena = '';

        // Eliminar todos los dígitos iguales o mayores a s
        for (let cadenaNumero of cadenaNumero_1) {
            let digito = parseInt(cadenaNumero);
            if (digito < s) {
                nuevaCadena += digito;
            }
        }

        // Si la nueva cadena no está vacía, convertirla a número y agregarla a la lista procesada
        if (nuevaCadena !== '') {
            listaProcesada.push(parseInt(nuevaCadena));
        }
    }

    // Imprimir el resultado
    console.log(listaProcesada);
}

// Ejemplos de uso
procesarArreglo([1, 2, 3, 4, 5, 6], 6); // -> [5, 4, 3, 2, 1]
procesarArreglo([10, 20, 30, 40], 6);   // -> [40, 30, 20, 10]
procesarArreglo([6], 6);                // -> []
procesarArreglo([66], 6);               // -> []
procesarArreglo([65], 6);               // -> [5]
procesarArreglo([6, 2, 1], 6);          // -> [1, 2]
procesarArreglo([60, 6, 5, 4, 3, 2, 7, 7, 29, 1], 7); // -> [1, 2, 2, 3, 4, 5, 0]

