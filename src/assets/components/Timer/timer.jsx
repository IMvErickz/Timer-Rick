
import React from "react";
import { useState } from "react";

const Timer = () =>{

    // const [valor, setvalor] = useState

    let segundos = 10
    let minutos = 1
    
    function timer(){ 
        const cronometro = setInterval( ()=>{

        console.log(`Minutos: ${minutos} Segundos: ${segundos}`)
        
        if(segundos <= 0 && minutos <= 0){
          clearInterval(cronometro)
        }else if(segundos > 0){
          --segundos
        }else if(segundos <= 0){
          --minutos
        }
      },1000)
    }//fim function
    

    return(
        <div>
            <h1>Timer</h1>
            <input type="button" value="Play" onClick={timer} />
        </div>
    )
}//fim component

export default Timer