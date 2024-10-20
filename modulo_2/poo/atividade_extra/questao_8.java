import java.lang.Math;

public class questao_8 {
    public static void main(String[] args) {
        Circulo c1 = new Circulo();

        c1.raio = 4.0;
        
        System.out.println("Área do círculo: " + c1.calcularArea());
        System.out.println("Perímetro do círculo: " + c1.calcularPerimetro());
    }
}

class Circulo {
    double raio;

    double calcularArea() {
        return Math.PI * Math.pow(this.raio, 2.0);
    }

    double calcularPerimetro() {
        return 2 * Math.PI * this.raio;
    }
}
