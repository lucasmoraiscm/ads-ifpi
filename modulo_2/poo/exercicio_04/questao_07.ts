class Triangulo {
    lado1: number;
    lado2: number;
    lado3: number;

    constructor(lado1: number, lado2: number, lado3: number) {
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }

    ehTriangulo(): boolean{
        if (Math.abs(this.lado2 - this.lado3) < this.lado1 && this.lado1 < (this.lado2 + this.lado3)){
            return true;
        }
        else {
            return false;
        }
    }

    ehIsoceles(): boolean{
        if (this.ehTriangulo()) {
            if ((this.lado1 == this.lado2 && this.lado1 != this.lado3) || (this.lado1 == this.lado3 && this.lado1 != this.lado2) || (this.lado2 == this.lado3 && this.lado2 != this.lado1)) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }

    ehEquilatero(): boolean{
        if (this.ehTriangulo()) {
            if (this.lado1 == this.lado2 && this.lado1 == this.lado3 && this.lado2 == this.lado3) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }

    ehEscaleno(): boolean {
        if (this.ehTriangulo()) {
            if (this.lado1 != this.lado2 && this.lado1 != this.lado3 && this.lado2 != this.lado3){
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
}

let t1: Triangulo = new Triangulo(2, 3, 4);
let t2: Triangulo = new Triangulo(2, 3, 3);
let t3: Triangulo = new Triangulo(2, 2, 2);

console.log(t1.ehTriangulo())
console.log(t1.ehIsoceles())
console.log(t1.ehEquilatero())
console.log(t1.ehEscaleno())

console.log(t2.ehTriangulo())
console.log(t2.ehIsoceles())
console.log(t2.ehEquilatero())
console.log(t2.ehEscaleno())

console.log(t3.ehTriangulo())
console.log(t3.ehIsoceles())
console.log(t3.ehEquilatero())
console.log(t3.ehEscaleno())
