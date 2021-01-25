const buttonStart = document.querySelector('#btnEmpezar');


const celeste = document.querySelector('#celeste');
const violeta = document.querySelector('#violeta');
const naranja = document.querySelector('#naranja');
const verde = document.querySelector('#verde');
const ULTIMO_NIVEL = 10


class Juego{

    constructor(){

        this.inicializar()
        this.generarSecuencia()
        setTimeout(this.siguienteNivel(), 500)
        
    }

    inicializar(){

        this.siguienteNivel = this.siguienteNivel.bind(this)
        this.elegirColor = this.elegirColor.bind(this)
        //agregamos funcion para que agregue el boton cuando el juego inicie de nuevo
        this.toggleBtnEmpezar()
        buttonStart.classList.add('hide');

        this.nivel = 1;

        this.colores = {
     
            celeste,
            violeta,
            naranja,
            verde

        }
        
    }

    //declaramos la funcion que es un condicional
    //Si el boton tiene la clase hide la remueva
    //Si no la tiene se la añadimos
    toggleBtnEmpezar(){

        if(buttonStart.classList.contains('hide')){


            buttonStart.classList.remove('hide')
        }else{

            buttonStart.classList.add('hide')
        }

    }

    generarSecuencia(){

        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))
        
    }

  
    siguienteNivel(){

        this.subnivel = 0

        this.nombreAtributo = 'valor'

        this.ilumonarSecuencia()
        
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


    transformarColorANumero(color){

        switch(color){

            case 'celeste':
                return 0
            case 'violeta':
                return 1
            case 'naranja':
                return 2
            case 'verde':
                return 3

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

     
        agregarEventosClick(){
       
            this.colores.celeste.addEventListener('click', this.elegirColor)
            this.colores.verde.addEventListener('click', this.elegirColor)
            this.colores.violeta.addEventListener('click', this.elegirColor)
            this.colores.naranja.addEventListener('click', this.elegirColor)
        }

        eliminarEventosClick(){
       
            this.colores.celeste.removeEventListener('click', this.elegirColor)
            this.colores.verde.removeEventListener('click', this.elegirColor)
            this.colores.violeta.removeEventListener('click', this.elegirColor)
            this.colores.naranja.removeEventListener('click', this.elegirColor)
        }

        //Declaramos las funciones ganoeljuego y elimino el juego
        //Que ejecutaran la alerta la funcion de la libreria que estamos utilizando

        ganoElJuego(){

            swal('Platzi', 'Felicitaciones Ganaste', 'success')
            //Como el swal devuelve una promesa una ves cerramos la alerta
            //Podremos indicarle que inicie de nuevo el juego
            .then(()=> this.inicializar())
        }
        perdioElJuego(){

            swal('Platzi', 'Lo lamentamos, perdiste', 'error')

            .then(()=> this.eliminarEventosClick())    
        }






        elegirColor(event){
       

          const nombreColor = event.target.dataset.color
  
          const numeroColor = this.transformarColorANumero(nombreColor)
          this.iluminarColor(nombreColor)


          if(numeroColor === this.secuencia[this.subnivel]){

            this.subnivel++

            if(this.subnivel === this.nivel){

                this.nivel++

                this.eliminarEventosClick()

                if(this.nivel === ULTIMO_NIVEL + 1){

                    this.ganoElJuego()
                }else{
                    

                    setTimeout(this.siguienteNivel, 1500)


                }

            }


          }else{

            this.perdioElJuego()

          }


        }

    }

        

function empezarJuego(){

    window.juego = new Juego()

}