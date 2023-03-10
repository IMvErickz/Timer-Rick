
import React, { useEffect } from "react";
import { useState } from "react";

export const Timer = () =>{

  const [segundosTotal, setSegundosTotal] = useState(0);
  console.log(segundosTotal)
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
           <div className="flex flex-col items-center justify-center gap-y-4">
             <h1 className="text-white w- text-6xl font-bold">Timer</h1>
          <input type="text"
            placeholder="Coloque aqui quantos minutos você quer"
            className="w-80 text-white bg-gray-800 rounded-lg p-2 placeholder:text-black text-center"
            onChange={event => setSegundosTotal(event.target.value)}
          />
           </div>
            {/* padStart completa a string com '2' caracteres, caso não haja '2' complete com 0 */}
          <div className="w-full flex flex-row items-center justify-center p-3 text-white">
            <span className="text-3xl text-red-600">{ minutos.toString().padStart(2, "0") }</span>
            <span className="text-2xl text-red-600"> : </span>
            <span className="text-3xl text-red-600">{ segundos.toString().padStart(2, "0") }</span>
          </div>
            <br />
          <div className="flex justify-center">
            <button className="w-24 m-2.5 rounded-md bg-gradient-to-r from-green-400 to-blue-500" type="button" value="" onClick={()=> {setSegundosTotal(120) } }>Pause</button>

            <button className="w-24 m-2.5 rounded-md bg-gradient-to-r from-green-400 to-blue-500" type="button" value="" onClick={()=> {setSegundosTotal(120) } }>Play</button>
            
            <button className="w-24 m-2.5 rounded-md bg-gradient-to-r from-green-400 to-blue-500" type="button" value="" onClick={()=> {setSegundosTotal(0) } }>Reset</button>
          </div>        
        </div>
    )
}//fim component

