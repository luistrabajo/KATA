package solucionJava.inicial;

import java.util.ArrayList;
import java.util.List;

import java.util.ArrayList;
import java.util.List;

public class ObtenerCuadradosEnRango_2 {

    public static int[] obtenerCuadradosEnRango(int[] arregloNumeros, int s) {
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

        // Convertir la lista a un array de enteros
        int[] resultado = new int[listaCuadrados.size()];
        for (int i = 0; i < listaCuadrados.size(); i++) {
            resultado[i] = listaCuadrados.get(i);
        }

        // Retornar la lista de cuadrados
        return resultado;
    }

    public static void main(String[] args) {
        int[] arregloNumeros1 = {1, 2, 3, 5, 6, 8, 9};
        int[] arregloNumeros2 = {-2, -1};
        int[] arregloNumeros3 = {-6, -5, 0, 5, 6};
        int[] arregloNumeros4 = {-10, 10};
        int s = 6;

        // Prueba del método
        System.out.println("Resultado 1: " + java.util.Arrays.toString(obtenerCuadradosEnRango(arregloNumeros1, s)));
        System.out.println("Resultado 2: " + java.util.Arrays.toString(obtenerCuadradosEnRango(arregloNumeros2, s)));
        System.out.println("Resultado 3: " + java.util.Arrays.toString(obtenerCuadradosEnRango(arregloNumeros3, s)));
        System.out.println("Resultado 4: " + java.util.Arrays.toString(obtenerCuadradosEnRango(arregloNumeros4, s)));
    }
}
