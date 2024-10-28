def main():
    ca1 = ControleDeAudio()

    print(f"Volume atual: {ca1.lerVolume()}")
    ca1.aumentarVolume()
    print(f"Volume atual: {ca1.lerVolume()}")
    ca1.diminuirVolume()
    print(f"Volume atual: {ca1.lerVolume()}")

class ControleDeAudio:
    volume = 2

    def aumentarVolume(self):
        if self.volume < 10:
            self.volume += 1

    def diminuirVolume(self):
        if self.volume > 0:
            self.volume -= 1

    def lerVolume(self):
        return self.volume

main()