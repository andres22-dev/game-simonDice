const buttonStart = document.querySelector('#btnEmpezar');


const celeste = document.querySelector('#celeste');
const violeta = document.querySelector('#violeta');
const naranja = document.querySelector('#naranja');
const verde = document.querySelector('#verde');

//agregamos el ultimo nivel
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
        buttonStart.classList.add('hide');

        this.nivel = 1;

        this.colores = {
     
            celeste,
            violeta,
            naranja,
            verde

        }
        
    }

    generarSecuencia(){

        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))
        
    }

  
    siguienteNivel(){

        //agregamos subnivel que empieza en 0 en cada uno de los niveles
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

    //agregamos la funcion transformar color a numero y recibe un color por parametro

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

        //agregamos funcion eliminar evento en ves de add ponemos remove para que se borre
        eliminarEventosClick(){
       
            this.colores.celeste.removeEventListener('click', this.elegirColor)
            this.colores.verde.removeEventListener('click', this.elegirColor)
            this.colores.violeta.removeEventListener('click', this.elegirColor)
            this.colores.naranja.removeEventListener('click', this.elegirColor)
        }



        elegirColor(event){
       
        //obtenemos el nombre del color que esta definido en la propiedad dataset
        //que previamente definimos en nuestro elemento de html
          const nombreColor = event.target.dataset.color
          // asignamos la funcion transformar color a numero a numeroColor y
          // a esa funcion le pasamos el nombre color por parametro
          const numeroColor = this.transformarColorANumero(nombreColor)
          this.iluminarColor(nombreColor)

          // si el numero del color es igual al que esta en la secuencia

          if(numeroColor === this.secuencia[this.subnivel]){

            //el subnivel sube
            this.subnivel++

            // si el subnivel es igual el nivel 
            if(this.subnivel === this.nivel){

                // el nivel aumenta uno
                this.nivel++
                // si el usuario pasa de nivel ya no tiene porque elegir colores

                this.eliminarEventosClick()

                if(this.nivel === ULTIMO_NIVEL + 1){

                    console.log(`ganaste`)

                }else{
                    //si no es el ultimo nivel tiene que avanzar de nivel
                    //agregamos delay al pasar de nivel

                    setTimeout(this.siguienteNivel, 1500)


                }

            }


          }else{

            //perdio
          }


        }

    }

        

function empezarJuego(){

    window.juego = new Juego()

}