class Pastel {
    constructor(nombre, precio, tamaño, sabor, ingredientes, toppings, detalles) {
        this.nombre = nombre;
        this.precio = precio;
        this.tamaño = tamaño;
        this.sabor = sabor;
        this.ingredientes = ingredientes;
        this.toppings = toppings;
        this.detalles = detalles;
    }

    get nombre(){
        return this.nombre;
    }

    set nombre(nombre){
        this.nombre = nombre;
    }

    get precio(){
        return this.precio;
    }

    set precio(precio){
        this.precio = precio;
    }

    get tamaño(){
        return this.tamaño;
    }

    set tamaño(tamaño){
        this.tamaño = tamaño;
    }

    get sabor(){
        return this.sabor;
    }

    set sabor(sabor){
        this.sabor = sabor;
    }

    get ingredientes(){
        return this.ingredientes;
    }

    set ingredientes(ingredientes){
        this.ingredientes = ingredientes;
    }

    get toppings(){
        return this.toppings;
    }

    set toppings(toppings){
        this.toppings = toppings;
    }

    get detalles(){
        return this.detalles;
    }

    set detalles(detalles){
        this.detalles = detalles;
    }

    toString(){
        return ` Pastel : ${this.nombre} 
                Precio: ${this.precio}
                Tamaño: ${this.tamaño}
                Sabor principal: ${this.sabor}
                Ingrdientes: ${this.ingredientes}
                Cartele del pastel: ${this.toppings}
                Detalles Importantes: ${this.detalles}`
    }

    
}