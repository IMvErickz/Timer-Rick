
import React from "react";

const Timer = () =>{

    let segundos = 59
    let minutos = 1
    
    const timer = setInterval( ()=>{

      console.log(`Minutos: ${minutos} Segundos: ${segundos}`)
      
      if(segundos <= 0 && minutos <= 0){
        clearInterval(timer)
      }else if(segundos > 0){
        --segundos
      }else if(segundos <= 0){
        --minutos
      }
    },1000)

    return(
        <div>
            <h1>Timer</h1>

        </div>
    )
}

export default Timer