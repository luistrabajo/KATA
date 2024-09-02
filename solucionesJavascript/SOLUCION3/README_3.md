===========================================================================================
PROBLEMA
===========================================================================================
Dado un conjunto de números enteros positivos que representan los valores de las monedas en
su posesión, escriba una función que devuelve la cantidad mínima de cambio
(la suma mínima de dinero) que no puede dar cambio. Las monedas dadas pueden tener 
cualquier valor positivo entero y no son necesariamente únicas (es decir, puede haber
múltiples monedas del mismo valor).
Sugerencia 1

Un enfoque para resolver este problema es intentar crear cada cantidad de cambio, comenzando
en 1 y subiendo hasta que finalmente no se puede crear una cantidad. Aunque este enfoque 
funciona, hay uno mejor.

Consejo 2

Comience ordenando el array de entrada. 
Ya que estás tratando de encontrar la cantidad mínima de cambio que no puedes crear, tiene 
sentido considerar primero las monedas más pequeñas.

Pista 3

Para entender el truco de este problema, considere el siguiente ejemplo: monedas = [1, 2, 4].
Con este juego de monedas, podemos crear 1, 2, 3, 4, 5, 6, 7 centavos de cambio. 


Ahora, si tuviéramos que añadir una moneda de valor 9 a este conjunto, 
no podríamos crear 8 centavos. 

Sin embargo, si añadimos una moneda de valor 7, 

podríamos crear 8 centavos, 

y también podríamos crear todos los valores de cambio de 1 a 15.  ¿Por qué es así?

Ejemplos:

	{"monedas": [5, 7, 1, 1, 2, 3, 22]} -> 20

	{"coins": [1, 1, 1, 1, 1]} -> 6

	{"monedas": [1, 5, 1, 1, 1, 10, 15, 20, 100]} -> 55



===========================================================================================
PSEUDOCÓDIGO
===========================================================================================
ALGORITMO encontrarSiguienteNumeroOptimizado(arr)
    // Ordenar el array de entrada en orden ascendente
    ORDENAR arr

    // Inicializar el valor acumulado en 0
    acumulado = 0

    // Recorrer cada número en el array
    PARA CADA numero EN arr HACER
        // Si el número actual es mayor que acumulado + 1
        SI numero > acumulado + 1 ENTONCES
            // Hemos encontrado una interrupción en la secuencia
            RETORNAR acumulado + 1
        FIN SI

        // Sumar el número actual al acumulado
        acumulado = acumulado + numero
    FIN PARA

    // Si llegamos al final del array, el siguiente número esperado es acumulado + 1
    RETORNAR acumulado + 1
FIN ALGORITMO


===========================================================================================
EXPLICACIÓN
===========================================================================================
Explicación
Acumulado: Mantenemos una suma acumulada de todos los números que hemos sumado hasta el momento.

Condición para Interrupción: Si en algún punto encontramos que el siguiente número en el array es 
mayor que acumulado + 1, entonces ese número no puede ser formado por ninguna suma de los números 
anteriores, por lo que el siguiente número que falta es acumulado + 1.

Mejoramiento: Este enfoque evita la necesidad de recorrer todos los números secuenciales y en su 
lugar solo recorre los números en el array una vez, lo que mejora significativamente la 
eficiencia. Esto es especialmente útil cuando el array tiene muchos elementos (hasta 2000 o más).
Este algoritmo es mucho más eficiente para manejar entradas grandes, ya que reduce la cantidad 
de cálculos necesarios y sigue siendo O(n) en tiempo de ejecución.
===========================================================================================
JAVASCRIPT
===========================================================================================

function encontrarSiguienteNumeroOptimizado(arr) {
    // Ordenar el array de entrada en orden ascendente
    arr.sort((a, b) => a - b);

    // Inicializar el valor acumulado en 0
    let acumulado = 0;

    // Recorrer cada número en el array
    for (let numero of arr) {
        // Si el número actual es mayor que acumulado + 1
        if (numero > acumulado + 1) {
            return acumulado + 1;
        }
        // Sumar el número actual al acumulado
        acumulado += numero;
    }

    // Si llegamos al final del array, el siguiente número esperado es acumulado + 1
    return acumulado + 1;
}

// Ejemplos de uso
console.log(encontrarSiguienteNumeroOptimizado([1, 2, 4, 8])); // Resultado: 16
console.log(encontrarSiguienteNumeroOptimizado([1, 2, 4, 9])); // Resultado: 8
console.log(encontrarSiguienteNumeroOptimizado([1, 1, 1, 1, 1])); // Resultado: 6
console.log(encontrarSiguienteNumeroOptimizado([5, 7, 1, 1, 2, 3, 22])); // Resultado: 20

===========================================================================================
JAVA
===========================================================================================
import java.util.Arrays;

public class EncontrarSiguienteNumeroOptimizado {

    public static int encontrarMinimoCambio(int[] arr) {
        // Ordenar el array de entrada en orden ascendente
        Arrays.sort(arr);

        // Inicializar el valor acumulado en 0
        int acumulado = 0;

        // Recorrer cada número en el array
        for (int numero : arr) {
            // Si el número actual es mayor que acumulado + 1
            if (numero > acumulado + 1) {
                // Hemos encontrado una interrupción en la secuencia
                return acumulado + 1;
            }

            // Sumar el número actual al acumulado
            acumulado += numero;
        }

        // Si llegamos al final del array, el siguiente número esperado es acumulado + 1
        return acumulado + 1;
    }

    public static void main(String[] args) {
        int[] monedas1 = {5, 7, 1, 1, 2, 3, 22};
        int[] monedas2 = {1, 1, 1, 1, 1};
        int[] monedas3 = {1, 5, 1, 1, 1, 10, 15, 20, 100};

        System.out.println("El mínimo cambio que no se puede dar con [5, 7, 1, 1, 2, 3, 22] es: " + encontrarMinimoCambio(monedas1));
        System.out.println("El mínimo cambio que no se puede dar con [1, 1, 1, 1, 1] es: " + encontrarMinimoCambio(monedas2));
        System.out.println("El mínimo cambio que no se puede dar con [1, 5, 1, 1, 1, 10, 15, 20, 100] es: " + encontrarMinimoCambio(monedas3));
    }
}

===========================================================================================
JAVA
===========================================================================================
Explicación del código:
Ordenar el array:

El primer paso es ordenar el array de monedas en orden ascendente usando Arrays.sort(arr);. 
Esto ayuda a considerar primero las monedas más pequeñas, lo que es clave para resolver 
el problema eficientemente.
Inicialización del acumulado:

Inicializamos acumulado a 0. Esta variable representa la cantidad de cambio que podemos
crear usando las monedas procesadas hasta el momento.

Recorrido del array:
Iteramos a través de cada moneda en el array ordenado.
Si encontramos una moneda que es mayor que acumulado + 1, significa que no podemos 
crear acumulado + 1 con las monedas procesadas hasta ese punto, y por lo tanto, 
esta es la cantidad mínima de cambio que no se puede dar.


Suma acumulada:
Si la moneda actual es menor o igual a acumulado + 1, la sumamos a acumulado.

 Esto significa que ahora podemos crear todas las cantidades de cambio desde 
 1 hasta acumulado usando las monedas procesadas hasta ese momento.
 
Retorno del resultado:
Al final del recorrido, si no se ha encontrado ninguna interrupción en la
 secuencia de cambio que se puede crear, el siguiente número esperado es
 acumulado + 1, que se retorna como el mínimo cambio que no se puede dar.
Ejemplos:
Para monedas = [5, 7, 1, 1, 2, 3, 22], la salida será 20.
Para monedas = [1, 1, 1, 1, 1], la salida será 6.
Para monedas = [1, 5, 1, 1, 1, 10, 15, 20, 100], la salida será 55.
Este enfoque es eficiente, con una complejidad de tiempo de O(n log n) 
debido a la ordenación del array, seguido de una única pasada O(n) para
 calcular el mínimo cambio que no se puede dar.





