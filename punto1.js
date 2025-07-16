//Punto 1 
class Vehiculo {
    constructor (marca, modelo, año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
//Metodo obtener detalles: devuelve la cadena con info del carro
obtenerDetalles(){
    return `${this.marca} ${this.modelo}, Año: ${this.año}`;
}
}
class Coche extends Vehiculo {
    constructor(marca, modelo, año, numeroPuertas) {
        super(marca,modelo, año);
        this.numeroPuertas = numeroPuertas;
    }
    obtenerDetalles(){
        return `${super.obtenerDetalles()}, Puertas: ${this.numeroPuertas}`;
    }
}
class Moto extends Vehiculo {
    constructor (marca, modelo, año, cilindrada){
        super(marca, modelo, año);
        this.cilindrada = cilindrada;
    }
    obtenerDetalles(){
        return `${super.obtenerDetalles()}, Cilindrada: ${this.cilindrada}cc`;
    }
}

//instancias 
const miCoche = new Coche ("Suzuki", "Swift" , 2020, 4);
const miMoto = new Moto ("Yamaha", "R3", 2025, 150);

console.log(miCoche.obtenerDetalles());
console.log(miMoto.obtenerDetalles());
