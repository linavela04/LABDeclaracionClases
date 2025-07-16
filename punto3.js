//Sistema de productos electrónicos 
class Producto {
    constructor(nombre, precio, marca) {
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
    }
    descripcion(){
        return `${this.nombre} ${this.marca}  Precio: $${this.precio}`;

    }
}
class Telefono extends Producto {
    constructor(nombre, precio, marca, almacenamiento, ram){
        super(nombre, precio, marca);
        this.almacenamiento = almacenamiento;
        this.ram = ram;
    }
    descripcion(){
        return `${super.descripcion()}, ${this.almacenamiento}GB, ${this.ram}GB RAM`;
    }
}
class Laptop extends Producto {
    constructor(nombre, precio, marca, procesador, pulgadas){
        super(nombre, precio, marca);
        this.procesador = procesador;
        this.pulgadas = pulgadas;
    }
    descripcion(){
        return `${super.descripcion()}, Procesador: ${this.procesador}, Pantalla: ${this.pulgadas}`; 
    }
}
//instancias 
const miCelu = new Telefono("Iphone 13" , 3000000 , "Iphone" , 128 , 6);
const miCompu = new Laptop("Thinkpad" , 4000000 , "Lenovo", "Intel core I7" , 13);

console.log(miCelu.descripcion());
console.log(miCompu.descripcion());
