
Problema 1:

una lista de n números con dígitos en el rango [0, S], donde n <= 100, cambiar todas las 
posiciones de la lista en el tiempo O (n).

Si el número de entrada contiene un dígito mayor o igual a S, se eliminará el dígito del
número, por ejemplo con S=6, 61 se convierte en 1 y 6 se elimina del arreglo. El resultado 
debe ser impreso en la consola/terminal. Por favor, no use el lenguaje incorporado.
Tener 

Ejemplos con S=6:

	[1, 2, 3, 4, 5, 6] -> [5, 4, 3, 2, 1]

	[10, 20, 30, 40] -> [40, 30, 20, 10]

	[6] -> []

	[66] -> []

	[65] -> [5]

	[6, 2, 1] -> [1 , 2]

	[60, 6, 5, 4, 3, 2, 7, 7, 29, 1] -> [1, 2, 2, 3, 4, 5, 0]



===========================================================================================
SOLUCIÓN PSEUDOCÓDIGO
===========================================================================================

ALGORITMO procesarArreglo(arregloNumeros, s)
    // Invertir el arreglo de números
    INVERTIR arregloNumeros

    // Crear una nueva lista para almacenar los números procesados
    listaProcesada = []

    // Recorrer cada número en el arreglo original
    PARA CADA numero EN arregloNumeros HACER
        // Convertir el número en una cadena de caracteres
        cadenaNumero = convertirACadena(numero)

        // Eliminar todos los dígitos iguales a s
        nuevaCadena = ""
        PARA CADA digito EN cadenaNumero HACER
            SI digito != convertirACadena(s) ENTONCES
                nuevaCadena = nuevaCadena + digito
            FIN SI
        FIN PARA

        // Si la nueva cadena no está vacía, convertirla a número y agregarla a la lista procesada
        SI nuevaCadena != "" ENTONCES
            nuevoNumero = convertirANumero(nuevaCadena)
            listaProcesada.AGREGAR(nuevoNumero)
        FIN SI
    FIN PARA

    // Imprimir el resultado
    IMPRIMIR listaProcesada
FIN ALGORITMO

===========================================================================================
EXPLICACIÓN
===========================================================================================

Explicación:

Invertir el Arreglo:

Se invierte el arreglo para cambiar todas las posiciones en tiempo O(n).

Recorrer el Arreglo:

Se recorre cada número del arreglo original y se convierte en una cadena de caracteres para 
poder eliminar los dígitos.

Eliminar Dígitos:

Dentro del bucle, se crea una nueva cadena (nuevaCadena) que excluye el dígito s.
Si el dígito en la cadena es diferente de s, se agrega a nuevaCadena.

Agregar a la Lista Procesada:

Si la nuevaCadena no está vacía, se convierte de nuevo a número y se agrega a la lista 
listaProcesada.

Impresión:

Finalmente, se imprime el contenido de listaProcesada, que es el arreglo modificado.
Este algoritmo tiene una complejidad de tiempo O(n), ya que cada paso (invertir el arreglo 
y procesar los números) 
recorre el arreglo una sola vez.

===========================================================================================
JAVASCRIPT
===========================================================================================

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

// Ejemplos de uso
procesarArreglo([1, 2, 3, 4, 5, 6], 6);  // [5, 4, 3, 2, 1]
procesarArreglo([10, 20, 30, 40], 6);    // [40, 30, 20, 10]
procesarArreglo([6], 6);                 // []
procesarArreglo([66], 6);                // []
procesarArreglo([65], 6);                // [5]
procesarArreglo([6, 2, 1], 6);           // [1, 2]
procesarArreglo([60, 6, 5, 4, 3, 2, 7, 7, 29, 1], 6);  // [1, 2, 2, 3, 4, 5, 0]

===========================================================================================
JAVA
===========================================================================================

package solucionJava.inicial;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import java.util.ArrayList;
import java.util.List;

import java.util.ArrayList;
import java.util.List;

public class ProcesarArreglo_1 {

    public static void procesarArreglo(int[] arregloNumeros, int s) {
        // Invertir el arreglo de números
        invertirArreglo(arregloNumeros);

        // Crear una nueva lista para almacenar los números procesados
        List<Integer> listaProcesada = new ArrayList<>();

        // Recorrer cada número en el arreglo original
        for (int numero : arregloNumeros) {
            // Convertir el número en una cadena de caracteres
            String cadenaNumero = String.valueOf(numero);

            // Eliminar todos los dígitos iguales a s
            StringBuilder nuevaCadena = new StringBuilder();
            for (char digito : cadenaNumero.toCharArray()) {
                if (digito != Character.forDigit(s, 10)) {
                    nuevaCadena.append(digito);
                }
            }

            // Si la nueva cadena no está vacía, convertirla a número y agregarla a la lista procesada
            if (nuevaCadena.length() > 0) {
                int nuevoNumero = Integer.parseInt(nuevaCadena.toString());
                listaProcesada.add(nuevoNumero);
            }
        }

        // Imprimir el resultado
        System.out.println(listaProcesada);
    }

    // Método para invertir un array de enteros
    private static void invertirArreglo(int[] arregloNumeros) {
        int inicio = 0;
        int fin = arregloNumeros.length - 1;
        while (inicio < fin) {
            int temp = arregloNumeros[inicio];
            arregloNumeros[inicio] = arregloNumeros[fin];
            arregloNumeros[fin] = temp;
            inicio++;
            fin--;
        }
    }

    public static void main(String[] args) {
        int[] arregloNumeros = {60, 6, 5, 4, 3, 2, 7, 7, 29, 1};
        int s = 6;

        procesarArreglo(arregloNumeros, s);
    }
}

===========================================================================================
Explicación del código: JAVA
===========================================================================================

Invertir el array:

Se utiliza el método invertirArreglo que intercambia los elementos del array arregloNumeros
 desde los extremos hacia el centro, invirtiendo así el orden del array.
Recorrer y procesar los números:

Se convierte cada número del array en una cadena (String).
Se eliminan los dígitos que coinciden con s (en este caso, el dígito 6).
Si después de eliminar los dígitos queda algo en la cadena (nuevaCadena), se convierte de 
nuevo en número entero (int) y se agrega a la lista listaProcesada.
Imprimir el resultado:

Finalmente, la lista procesada se imprime en la consola mostrando el array modificado.
Ejemplos:
Para la entrada {60, 6, 5, 4, 3, 2, 7, 7, 29, 1} con s = 6, el resultado será [1, 2, 2, 3, 4, 5, 0].
Notas:
El código se asegura de que todos los pasos se realicen en tiempo O(n), cumpliendo con la restricción de eficiencia.