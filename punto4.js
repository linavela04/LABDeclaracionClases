//Sistema de figuras geométricas 
class Figura {
    constructor(color) {
        this.color = color;
    }
    area(){
        return 0;
    }
}
class Rectangulo extends Figura {
    constructor(color, base, altura){
        super(color);
        this.base = base;
        this.altura = altura;
    }
    area() {
        return this.base * this.altura;
    }
}

class Circulo extends Figura {
    constructor(color, radio) {
        super(color);
        this.radio = radio;
    }
    area() {
        return Math.PI * this.radio ** 2;
    }
}
//Instancias 
const AreaRect = new Rectangulo("Azul", 6, 4);
const AreaCirc = new Circulo("Morado" , 4);
console.log(`El área del rectangulo es:  ${AreaRect.area()}`);
console.log(`El área del circulo es:  ${AreaCirc.area()}`);
