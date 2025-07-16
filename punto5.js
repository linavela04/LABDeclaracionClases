//Sistema de animales
class Animal {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    emitirSonido(){
        return "Sonido de un animal";
    }
}

class Perro extends Animal {
    emitirSonido() {
        return "guau";
    }
}

class Gato extends Animal {
    emitirSonido(){
        return "miau";
    }
}
//instancias 
const miperro = new Perro("Kira", 12);
const migato = new Gato("Pelusa" , 1);

console.log(`${miperro.nombre} hace: ${miperro.emitirSonido()}`);
console.log(`${migato.nombre} hace: ${migato.emitirSonido()}`);

