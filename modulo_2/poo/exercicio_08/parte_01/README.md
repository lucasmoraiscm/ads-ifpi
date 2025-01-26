# EXERCÍCIO 08 (parte 01)
---
**1.** <br>
```java
//1 - Captura e Exceção (Exception Handling);
public static void metodo() {
    try {
        new java.io.FileInputStream("arquivo.txt");
    } catch (java.io.FileNotFoundException e) {
        System.out.println("Não foi possível abrir o arquivo para leitura");
    }
}


//2 - Verificação de Condições (Conditional Checks);
boolean saca(double quantidade) {
    if (quantidade > this.saldo + this.limite) { 
            System.out.println("Não posso sacar fora do limite!");
            return false;
        } else {
            this.saldo = this.saldo - quantidade;
            return true;
        }
    }
}


//3 - Logs e Monitoramento.
import java.text.SimpleDateFormat;
import java.util.Date;

public class LoggerExample {
    public static void main(String[] args) {
        processUserInput("");
        processUserInput("Olá, mundo!");
    }

    public static void logError(String message) {
        System.err.println("[ERROR] " + getCurrentTimestamp() + ": " + message);
    }

    public static void logInfo(String message) {
        System.out.println("[INFO] " + getCurrentTimestamp() + ": " + message);
    }

    public static void processUserInput(String input) {
        if (input == null || input.isEmpty()) {
            logError("Entrada de usuário inválida.");
            return;
        }
        logInfo("Processando entrada: " + input);
    }

    private static String getCurrentTimestamp() {
        return new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").format(new Date());
    }
}
```
<br>

**2.** <br>
1 - Captura e Exceção (Exception Handling): <br>
A captura e exceção pode apresentar dificuldades no debugging quando exceções são capturadas de forma genérica, mascarando erros reais e dificultando a depuração. <br>
<br>
2 - Verificação de Condições (Conditional Checks): <br>
A verificação de condições pode apresentar dificuldades na leitura e manutenção ao implementar muitas verificações condicionais, poluído o código com verificações repetitivas. <br>
<br>
3 - Logs e Monitoramento: <br>
Os logs e monitoramento podem ser menos eficazes por não prevenir erros em tempo de execução, pois registram os erros, sem tomar medidas imediatas. <br>
<br>

**3.** O método conta.transferir() ao chamar o método conta.sacar() da conta que seria debitada verifica que não há saldo suficiente para realizar a transferência e lança uma exceção com a seguinte mensagem: “Saldo insuficiente: {saldo}” e encerrou a aplicação.<br>
<br>

**4.** A aplicação lançou a exceção com a mensagem de saldo insuficiente e retornou ao menu inicial. A exceção lançada no método conta.sacar() não deixou o erro propagar para os métodos conta.transferir(), banco.transferir() e App.menu(). Essa implementação traz mais confiabilidade à aplicação ao evitar uma interrupção da execução e permitir que o usuário possa realizar outra tentativa.<br>
<br>

**5.** Essa implementação é eficiente para prevenir que a aplicação seja interrompida, prevenindo também que aplicação armazene ou repasse valores inválidos para outros métodos, evitando problemas maiores e informando o usuário.<br>
