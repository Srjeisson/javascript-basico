//Sintaxis

var miAuto = {
    //propiedades, "palabras clave y valores"
    marca: "toyota",
    modelo: "corolla",
    annio: 2020
};

//acceder a los objetos

miAuto.marca

//generar funciones con las propiedades
//estas se llaman metodos de objetos

var miAuto = {
    marca: "toyota",
    modelo: "corolla",
    annio: 2020,
    detalleDelAuto: function () {
        console.log(`Auto ${this.modelo} ${this.annio}`)
    }
};

// ingresar al metodo de un objeto

miAuto.detalleDelAuto();

//como hacer objetos de manera automatica

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}
// generar un objeto nuevo con la plantilla anterior

var autoNuevo = new auto ("tesla", "model 3", "2020");

auto.prototype.autos = function () {
    console.log(`Auto de marca ${this.marca}  ${this.modelo} y año ${this.annio}`)
}
//reto
