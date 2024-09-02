function obtenerCuadradosEnRango(arregloNumeros, s) {
    // Calcular el límite superior SS basado en el número s
    const SS = s * 10 + s; // SS es el número formado por la unión de s consigo mismo

    // Crear una lista vacía para almacenar los cuadrados en el rango
    let listaCuadrados = [];

    // Recorrer cada número en el arreglo original
    for (let numero of arregloNumeros) {
        // Calcular el cuadrado del número
        let cuadrado = numero * numero;

        // Si el cuadrado está dentro del rango [0, SS], agregarlo a la lista
        if (cuadrado >= 0 && cuadrado <= SS) {
            listaCuadrados.push(cuadrado);
        }
    }

    // Retornar la lista de cuadrados
    console.log(listaCuadrados);
}

// Ejemplos de uso
obtenerCuadradosEnRango([1, 2, 40, 5, 6, 8, 9], 5); // Resultado: [1, 4, 9, 25, 36, 64]
//obtenerCuadradosEnRango([-2, -1], 6);              // Resultado: [1, 4]
//obtenerCuadradosEnRango([-6, -5, 0, 5, 6], 6);     // Resultado: [0, 25, 25, 36, 36]
//obtenerCuadradosEnRango([-10, 10], 6);             // Resultado: []
