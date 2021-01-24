
const buttonStart = document.querySelector('#btnEmpezar');


const celeste = document.querySelector('#celeste');
const violeta = document.querySelector('#violeta');
const naranja = document.querySelector('#naranja');
const verde = document.querySelector('#verde');

class Juego{

    constructor(){

        this.inicializar()
        //llamamos a la funcion generar secuencia
        this.generarSecuencia()

    }

    inicializar(){

        
        buttonStart.classList.add('hide');

        //indicamos el nivel en el que estamos
        this.nivel = 1;

        //guardamos los botones 
        this.colores = {
        /* Si la variable que le asignamos al atributo tiene el mismo nombre que
           el atributo javascript lo entendera */
            celeste,
            violeta,
            naranja,
            verde

        }
        
    }

    //creamos la funcion
    generarSecuencia(){

    /* Siempre que queramos poner un atributo aunque este no exista
       con this se guardara internamente en el objeto del juego 

       Generamos un array con la palabra new array y por parametro
       le indicamos cuantos elementos queremos que tenga

       Luego lo utilizamos con la funcion fill que nos definira
       un valor en cada uno de los elementos de nuestro array

       Ya que si los elementos no tienen ningun valor no podriamos
       usar una funcion como map por que no hay elementos ni valores
       en ese array

       Dentro del map utilizamos la funcion Math.random para obtener
       un numero aleatorio y lo multiplicamos * 4 para obtner un numero
       entero

       Utilizamos Math.floor y dentro le pondremos el random para redondear
       el numero


       */
        this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))

        

    }



}

function empezarJuego(){

    // A modo de prueba utilizaremos window con la variable juego para debuggearla
    window.juego = new Juego()

}