package solucionJava.inicial;

import java.util.Arrays;

import java.util.Arrays;

public class EncontrarSiguienteNumeroOptimizado_1 {

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
        
        int[] monedas4 = {1, 2, 4, 8};
        int[] monedas5 = {1, 2, 4, 9};
        int[] monedas6 = {5, 7, 1, 1, 2, 3, 22};
        
        
        

        System.out.println("El mínimo cambio que no se puede dar con [5, 7, 1, 1, 2, 3, 22] es: " + encontrarMinimoCambio(monedas1));
        System.out.println("El mínimo cambio que no se puede dar con [1, 1, 1, 1, 1] es: " + encontrarMinimoCambio(monedas2));
        System.out.println("El mínimo cambio que no se puede dar con [1, 5, 1, 1, 1, 10, 15, 20, 100] es: " + encontrarMinimoCambio(monedas3));
        
        System.out.println("El mínimo cambio que no se puede dar con [1, 2, 4, 8] es: " + encontrarMinimoCambio(monedas4));
        System.out.println("El mínimo cambio que no se puede dar con [1, 2, 4, 9] es: " + encontrarMinimoCambio(monedas5));
        System.out.println("El mínimo cambio que no se puede dar con [5, 7, 1, 1, 2, 3, 22] es: " + encontrarMinimoCambio(monedas6));
      
    
    }
}
