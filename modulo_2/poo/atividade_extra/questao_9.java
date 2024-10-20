public class questao_9 {
    public static void main(String[] args) {
        SituacaoFinanceira sf1 = new SituacaoFinanceira();

        sf1.valorCreditos = 1000.0;
        sf1.valorDebitos = 500.0;

        System.out.println("Saldo: R$ " + sf1.calcularSaldo());
    }
}

class SituacaoFinanceira {
    double valorCreditos;
    double valorDebitos;

    double calcularSaldo() {
        return this.valorCreditos - this.valorDebitos;
    }
}
