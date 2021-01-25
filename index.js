
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

  
    siguienteNivel(){


        this.ilumonarSecuencia()
        //Llamamos a la funcion agregarEventosClick
        this.agregarEventosClick()
        


    }
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
    
    ilumonarSecuencia(){

        for (let i = 0; i < this.nivel; i++){
        
    

            let color = this.transformarNumeroAColor(this.secuencia[i])

            setTimeout(() => this.iluminarColor(color), 1000 * i)
        }


        }

        iluminarColor(color){
    

            this.colores[color].classList.add('light')
        

        setTimeout(()=> this.apagarColor(color), 350)


        }


        apagarColor(color){

            this.colores[color].classList.remove('light')

        }

        //agregamos la funcion eventos click
        agregarEventosClick(){
        //por cada uno de los colores le agregaremos el eventos click
        //este evento se ejecutara asincronamente 

        /* Lo que hacemos com bind()  es decirle ¡N0! tu no seras un elemento de HTML
            tu seras Game(), digamos que cambia su forma de pensar del this.
        
        */
            this.colores.celeste.addEventListener('click', this.elegirColor.bind(this))
            this.colores.verde.addEventListener('click', this.elegirColor.bind(this))
            this.colores.violeta.addEventListener('click', this.elegirColor.bind(this))
            this.colores.naranja.addEventListener('click', this.elegirColor.bind(this))
        }

        // declaramos la funcion elegir color
        elegirColor(event){
        //obtenemos el evento por el parametro y podremos imprimirlo 
                //console.log(event)
        /* Imprimimos this y nos damos cuenta que aqui this hace referencia
           a los botones porque this es un escuchar de eventos que representa
           el html el cual le asignamos ese evento
           
           Podremos cambiar a quien  hace referencia this con bind
           */


        }

    }

        
   



function empezarJuego(){

    window.juego = new Juego()

}