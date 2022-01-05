package seriefibonacci;

import java.util.Scanner;

/**
 *
 * @author Bryan Garavito
 */
public class SerieFibonacci {

    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);

        int a = 0, b = 1, c, n;

        System.out.print("Por favor ingrese cantidad de elementos que quiere saber de la serie de fibonacci: ");
        n = teclado.nextInt();

        for (int i = 0; i < n; i++) {
            System.out.println(a);
            c = a + b;
            a = b;
            b = c;
        }

    }
}
