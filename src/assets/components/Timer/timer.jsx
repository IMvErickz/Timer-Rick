
import React, { useEffect } from "react";
import { useState } from "react";

export const Timer = () =>{

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
        <div className="w-screen h-screen  flex flex-col items-center justify-center">
            <h1 className="text-white w- text-6xl font-bold">Timer</h1>
            {/* padStart completa a string com '2' caracteres, caso não haja '2' complete com 0 */}
            <div className="w-full flex flex-row items-center justify-center p-3">
            <span className="time">{ minutos.toString().padStart(2, "0") } : </span>
            <span className="time">{ segundos.toString().padStart(2, "0") }</span>
            </div>
            <br />
            <button type="button" value="" onClick={()=> {setSegundosTotal(120) } }>Play</button>         
        </div>
    )
}//fim component

