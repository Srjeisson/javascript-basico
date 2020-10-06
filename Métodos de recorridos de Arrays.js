var articulos = [
    {nombre:"Bici", costo: 3000 },
    {nombre:"Tv", costo: 2500},
    {nombre:"Libro", costo: 320},
    {nombre:"Celular", costo: 1000},
    {nombre:"Laptop", costo: 20000},
    {nombre:"Teclado", costo: 500},
    {nombre:"Audifonos", costo: 1700}, 
]

/*Primer metodo : Filter = ayuda a filtrar, 
validar si es verdadero o falso
`no modifica el array, creo otro`*/

var articulosFiltrados = articulos.filter(function (articulo){
    return articulo.costo <= 500
});


/* Respuesta
(2) [{…}, {…}]
0: {nombre: "Libro", costo: 320}
1: {nombre: "Teclado", costo: 500}
length: 2
__proto__: Array(0)

----------------------------------------------------------------------

/*Segundo metod : Map = ayuda a mapear 
cierto articulo `no modifica el array`*/ 

var nombreArticulos = articulos.map(function (articulo) {
    return articulo.nombre
});

/* Respuesta
(7) ["Bici", "Tv", "Libro", "Celular", "Laptop", "Teclado", "Audifonos"]
------------------------------------------------------------------------

/*Tercer metodo : Find = nos ayuda a encontrar
algo dentro del "articulo" `no modifica el array`*/

var encuentraArticulo = articulos.find(function (articulo) {
   return articulo.nombre === "Laptop" 
});

/* Resouesta
{nombre: "Laptop", costo: 20000}
---------------------------------------------
/*Cuarto metodo : ForEach = este metodo hace 
el filtrado sobre el array original*/

articulos.forEach(function(articulo) {
    console.log(articulo.nombre)
})

/* Respuesta
Bici
Tv
Libro
Celular
Laptop
Teclado
Audifonos
---------------------------------------------

/*Quinto metod : Some = nos regresa una validacion
de verdadero o falso para los articulos que
lo cumplan `se genera un nuevo array`*/

var articulosBaratos = articulos.some(function (articulo) {
    return articulo.costo <= 700
})





 

