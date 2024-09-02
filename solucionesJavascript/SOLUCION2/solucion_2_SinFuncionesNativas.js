
function obtenerCuadradosEnRango(arr, s) {
    // Calcular el límite superior SS basado en el número s
    let SS = s * 10 + s;

    // Crear un nuevo array para almacenar los cuadrados en el rango
    let cuadradosEnRango = [];
    let n = arr.length;

    // Recorrer cada número en el array original
    for (let i = 0; i < n; i++) {
        let numero = arr[i];
        let cuadrado = numero * numero;

        // Si el cuadrado está dentro del rango [0, SS], agregarlo al array de cuadrados
        if (cuadrado >= 0 && cuadrado <= SS) {
            cuadradosEnRango.push(cuadrado);
        }
    }

    // Ordenar manualmente el array de cuadrados en orden ascendente
    for (let i = 0; i < cuadradosEnRango.length; i++) {
        for (let j = i + 1; j < cuadradosEnRango.length; j++) {
            if (cuadradosEnRango[i] > cuadradosEnRango[j]) {
                // Intercambiar elementos
                let temp = cuadradosEnRango[i];
                cuadradosEnRango[i] = cuadradosEnRango[j];
                cuadradosEnRango[j] = temp;
            }
        }
    }

    // Imprimir el resultado
    console.log(cuadradosEnRango);
}
// Ejemplos de uso
obtenerCuadradosEnRango([1, 2, 3, 5, 6, 8, 9], 6);  // -> [1, 4, 9, 25, 36, 64]
obtenerCuadradosEnRango([-2, -1], 6);               // -> [1, 4]
obtenerCuadradosEnRango([1, 2, 40, 5, 6, 8, 9], 5); // Resultado: [1, 4, 9, 25, 36, 64]
obtenerCuadradosEnRango([-2, -1], 6);              // Resultado: [1, 4]
obtenerCuadradosEnRango([-6, -5, 0, 5, 6], 6);     // Resultado: [0, 25, 25, 36, 36]
obtenerCuadradosEnRango([-10, 10], 6);             // Resultado: []

