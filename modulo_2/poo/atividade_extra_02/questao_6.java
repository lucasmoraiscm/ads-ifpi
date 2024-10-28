public class questao_6 {
    public static void main(String[] args) {
        Retangulo r1 = new Retangulo();

        r1.l1 = 3.0;
        r1.l2 = 4.0;

        System.out.println("O retângulo é um quadrado: " + r1.verificarQuadrado());
    }
}

class Retangulo {
    double l1;
    double l2;

    double calcularArea() {
        return this.l1 * this.l2;
    }

    double calcularPerimetro() {
        return (2 * l1) + (2 * l2);
    }

    boolean verificarQuadrado() {
        if (l1 == l2){
            return true;
        }
        else{
            return false;
        }
    }
}
