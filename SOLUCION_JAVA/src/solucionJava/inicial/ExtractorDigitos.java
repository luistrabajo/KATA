package solucionJava.inicial;
public class ExtractorDigitos {

    public static char extraerPrimerDigito(String cadena) {
        for (int i = 0; i < cadena.length(); i++) {
            char caracter = cadena.charAt(i);
            if (Character.isDigit(caracter)) {
                return caracter;
            }
        }
        return '0'; // Puedes retornar cualquier otro carácter o una excepción si prefieres
    }

    public static void main(String[] args) {
        String cadena = "c320ad4d76fe97759aa27a0c99bff6710";
        char primerDigito = extraerPrimerDigito(cadena);
        if (primerDigito == '0') {
            System.out.println("No se encontró ningún dígito");
        } else {
            System.out.println("El primer dígito es: " + primerDigito);
        }
    }
}