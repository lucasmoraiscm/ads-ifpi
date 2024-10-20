public class questao_7 {
    public static void main(String[] args) {
        Retangulo r1 = new Retangulo();

        r1.l1 = 3.0;
        r1.l2 = 4.0;

        System.out.println("Área do retângulo: " + r1.calcularArea());
        System.out.println("Perímetro do retângulo: " + r1.calcularPerimetro());
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
}
