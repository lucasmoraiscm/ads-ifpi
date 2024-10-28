public class questao_5 {
    public static void main(String[] args){
        ControleDeAudio ca1 = new ControleDeAudio();

        System.out.println("Volume atual: " + ca1.lerVolume());
        ca1.aumentarVolume();
        System.out.println("Volume atual: " + ca1.lerVolume());
        ca1.diminuirVolume();
        System.out.println("Volume atual: " + ca1.lerVolume());
    }
}

class ControleDeAudio {
    int volume = 2;

    void aumentarVolume(){
        if (this.volume < 10){
           this.volume ++; 
        }
    }

    void diminuirVolume(){
        if (this.volume > 0){
            this.volume --;
        }
    }

    int lerVolume(){
        return this.volume;
    }
}