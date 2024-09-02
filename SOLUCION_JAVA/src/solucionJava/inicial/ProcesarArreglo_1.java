package solucionJava.inicial;

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
