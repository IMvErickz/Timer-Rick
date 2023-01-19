
import React, { useEffect } from "react";
import { useState } from "react";

const Timer = () =>{

    const [segundosTotal, setSegundosTotal] = useState(0);
    // const [minutos, setMinutos] = useState(0)

    const minutos = Math.floor(segundosTotal / 60)
    const segundos = segundosTotal % 60



    useEffect(()=>{
      
        const cronometro = setInterval(()=>{

          if(segundosTotal === 0){
            console.log(`Menor que 0`)
            clearInterval(cronometro)
            // setInterval("")
          }else{
            setSegundosTotal(segundosTotal - 1)
            console.log(segundos)
          }

        },1000)
        return () => clearInterval(cronometro)
        
    },[segundosTotal])
    
    // setSegundosTotal(10)

    return(
        <div>
            <h1>Timer</h1>
            {/* padStart completa a string com '2' caracteres, caso não haja '2' complete com 0 */}
            <span>{ minutos.toString().padStart(2, "0") } : </span>
            <span>{ segundos.toString().padStart(2, "0") }</span>
            <br />
            <button type="button" value="" onClick={()=> {setSegundosTotal(120) } }>Play</button>         
        </div>
    )
}//fim component

export default Timer