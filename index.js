
const buttonStart = document.querySelector('#btnEmpezar');


const celeste = document.querySelector('#celeste');
const violeta = document.querySelector('#violeta');
const naranja = document.querySelector('#naranja');
const verde = document.querySelector('#verde');

class Juego{

    constructor(){

        this.inicializar()
        this.generarSecuencia()
        this.siguienteNivel()
        
    }

    inicializar(){

        
        buttonStart.classList.add('hide');

        this.nivel = 7;

        this.colores = {
     
            celeste,
            violeta,
            naranja,
            verde

        }
        
    }

    generarSecuencia(){

        this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4))

        
    }

    //declaramos la funcion siguiente nivel
    siguienteNivel(){

        /*
        Llamara a iluminar secuencia cada vez que llegue a un nuevo nivel iluminara
        la secuencia */
        this.ilumonarSecuencia()
        


    }
    // Declaramos funcion que transforma los numeros de la secuencia en colores
    transformarNumeroAColor(numero){

        switch(numero){

            case 0:
                return 'celeste'
            case 1:
                return 'violeta'
            case 2:
                return 'naranja'
            case 3:
                return 'verde'

        }

    }
     // Declaramos  la funcion iluminar secuencia
    ilumonarSecuencia(){

        for (let i = 0; i < this.nivel; i++){
        
        /* Obtenemos el color para cada i que vayamos obteniendo
           llamamos la funcion trasformarNuAColor y le pasamos el numero
           de la secuencia en la que estamos */

            let color = this.transformarNumeroAColor(this.secuencia[i])

        // Agregamos un tiempo de espera entre el ciclo para que el for no
        // se ejecute de una vez si no que tenga un tiempo de espera por cada
        // color que se ilumina en la secuencia

        // Agregar 1000 * i es importante ya que a medida de que va avanzando la
        // secuenta el usuario va a tener tiempo de verla

        //Tendremos un error por que definimos color con var y cada vez que
        // itera el ciclo for se estara reasginando el mismo valor a la variable

            setTimeout(() => this.iluminarColor(color), 1000 * i)
        }


        }

        /* Declaramos la funcion iluminar color en la cual obtenemos
           el color por parametro */

        iluminarColor(color){
        /* Traemmos los colores que teniamos guardados en un objeto y
           que hacen referencia a lo botones que estan en variables

           Añadimos un nueva clase para que se ilumine el color que ya
           esta establecida en css */

            this.colores[color].classList.add('light')
        // Llamamos una funcion para que se apague el color en determinado tiempo

        setTimeout(()=> this.apagarColor(color), 350)


        }

        /* Declaramos la funcion apagar color que recibe un color por parametro
         y con remove le removemos la clase light */

        apagarColor(color){

            this.colores[color].classList.remove('light')

        }

    }
   



function empezarJuego(){

    window.juego = new Juego()

}