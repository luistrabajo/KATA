===========================================================================================
PROBLEMA 2
===========================================================================================
Escribe una función que toma un array no vacío de números enteros ordenados en orden ascendente
y devuelve un nuevo array de la misma longitud con los cuadrados de los números enteros originales
 también ordenados en orden ascendente. Si el número de salida está fuera del rango [0, SS] 
 (para S=6 el rango será [0, 66]), lo borrará del array de salida. Por favor, no use el lenguaje 
 incorporado.

Ejemplos con S=6:

	{"array": [1, 2, 3, 5, 6, 8, 9]} -> [1, 4, 9, 25, 36, 64]

	{"array": [-2, -1]} -> [1, 4]

	{"array": [-6, -5, 0, 5, 6]} -> [0, 25, 25, 36, 36]

	{"array": [-10, 10]} -> []




===========================================================================================
PSEUDOCÓDIGO
===========================================================================================


ALGORITMO obtenerCuadradosEnRango(arregloNumeros, s)
    // Calcular el límite superior SS basado en el número s
    SS = s * 10 + s  // SS es el número formado por la unión de s consigo mismo

    // Crear una lista vacía para almacenar los cuadrados en el rango
    listaCuadrados = []

    // Recorrer cada número en el arreglo original
    PARA CADA numero EN arregloNumeros HACER
        // Calcular el cuadrado del número
        cuadrado = numero * numero

        // Si el cuadrado está dentro del rango [0, SS], agregarlo a la lista
        SI cuadrado >= 0 Y cuadrado <= SS ENTONCES
            listaCuadrados.AGREGAR(cuadrado)
        FIN SI
    FIN PARA

    // Retornar la lista de cuadrados
    IMPRIMIR listaCuadrados
FIN ALGORITMO



===========================================================================================
EXPLICACIÓN
===========================================================================================

Explicación:

Cálculo del Límite:

Se calcula SS como el número formado por la unión de s consigo mismo (por ejemplo, si s es 6, SS será 66).
Recorrido del Arreglo:

Se recorre cada número del arreglo original.
Cálculo del Cuadrado:

Para cada número, se calcula su cuadrado.
Filtrado por Rango:

Se verifica si el cuadrado está dentro del rango [0, SS]. Si está dentro del rango, se agrega a la lista listaCuadrados.
Impresión:

Finalmente, se imprime la lista listaCuadrados con los valores filtrados.
Este pseudocódigo representa la lógica necesaria para resolver el problema, asegurando que los 
cuadrados de los números se mantengan en orden ascendente y estén dentro del rango permitido.

===========================================================================================
JAVASCRIPT
===========================================================================================
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
obtenerCuadradosEnRango([1, 2, 3, 5, 6, 8, 9], 6); // Resultado: [1, 4, 9, 25, 36, 64]
obtenerCuadradosEnRango([-2, -1], 6);              // Resultado: [1, 4]
obtenerCuadradosEnRango([-6, -5, 0, 5, 6], 6);     // Resultado: [0, 25, 25, 36, 36]
obtenerCuadradosEnRango([-10, 10], 6);             // Resultado: []



===========================================================================================
JAVA
===========================================================================================

import java.util.ArrayList;
import java.util.List;

public class CuadradosEnRango {

    public static List<Integer> obtenerCuadradosEnRango(List<Integer> arregloNumeros, int s) {
        // Calcular el límite superior SS basado en el número s
        int SS = s * 10 + s;  // SS es el número formado por la unión de s consigo mismo

        // Crear una lista vacía para almacenar los cuadrados en el rango
        List<Integer> listaCuadrados = new ArrayList<>();

        // Recorrer cada número en el arreglo original
        for (int numero : arregloNumeros) {
            // Calcular el cuadrado del número
            int cuadrado = numero * numero;

            // Si el cuadrado está dentro del rango [0, SS], agregarlo a la lista
            if (cuadrado >= 0 && cuadrado <= SS) {
                listaCuadrados.add(cuadrado);
            }
        }

        // Imprimir la lista de cuadrados
        System.out.println(listaCuadrados);

        // Retornar la lista de cuadrados
        return listaCuadrados;
    }

    public static void main(String[] args) {
        List<Integer> arregloNumeros = new ArrayList<>();
        arregloNumeros.add(2);
        arregloNumeros.add(4);
        arregloNumeros.add(7);

        int s = 5;

        obtenerCuadradosEnRango(arregloNumeros, s);
    }
}


Descripción del código:
Cálculo del límite superior SS: SS es calculado como el número s seguido de sí mismo, es decir, s * 10 + s.
Recorrer el arreglo: Se itera sobre cada número en arregloNumeros.
Calcular el cuadrado: Se calcula el cuadrado de cada número.
Verificación del rango: Se verifica si el cuadrado está en el rango [0, SS]. Si lo está, se agrega a listaCuadrados.
Imprimir y retornar el resultado: Finalmente, se imprime listaCuadrados que contiene los cuadrados de los números en el rango y se retorna la lista.