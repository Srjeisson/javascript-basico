function auto (marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autos = [];
for(var i = 0; i < 30; i++){
    var marca = prompt ("ingresa la marca del auto");
    var modelo = prompt ("ingresa el modelo del auto");
    var annio = prompt ("ingresa el año del auto");
}

for(var i = 0; i < autos.length ; i++){
    console.log(autos[i])
}