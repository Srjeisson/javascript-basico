/*Las funciones son un conjunto de sentencias 
que utilizamos para generar acciones con 
las variables, son como procedimientos 
o tareas*/

Hay dos tipos de funciones:

    Declarativas:

        function miFuncion (//parametros){
            return 3:
        }

        miFuncion();

    Expresion:
    
        var miFuncion = function(a,b){
            return a + b;
        }

        miFuncion();


        Ejemplos:

- function saludarEstudiantes(estudiante){
    console.log(estudiante)

-function suma (a,b) {
    var resultado = a + b; 
    return resultado;
}

suma (3,5)

   Diferencias:
A las funciones declarativas se les aplica
 hoisting, y a la expresión de función, no.
  Ya que el hoisting solo se aplica en las 
  palabras reservadas var y function.

Lo que quiere decir que con las funciones
 declarativas, podemos mandar llamar 
 la función antes de que ésta sea declarada,
  y con la expresión de función, no, 
  tendríamos que declararla primero,
   y después mandarla llamar.
   */
