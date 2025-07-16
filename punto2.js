//Sistema de empleados 
class Empleado {
    constructor (nombre, edad, salarioBase){
        this.nombre = nombre;
        this.edad = edad;
        this.salarioBase = salarioBase;
    }
calcularSalario(){
    return this.salarioBase
}
}
class Gerente extends Empleado {
    constructor (nombre, edad, salarioBase, bonificacion) {
        super(nombre, edad, salarioBase);
        this.bonificacion = bonificacion;
    }
calcularSalario(){
    return this.salarioBase + this.bonificacion;
}
}
class Desarrollador extends Empleado {
    constructor (nombre, edad, salarioBase, lenguaje){
        super(nombre, edad, salarioBase);
        this.lenguaje = lenguaje;
    }
}
//instancias 
const gerente = new Gerente ("Lina" , 24, 1000000, 15000);
const des = new Desarrollador("Juan" , 30 , 2000000, "JavaScript");

console.log(`Salario del gerente: $${gerente.calcularSalario()}`);
console.log(`Salario del desarrollador: $${des.calcularSalario()}`);
