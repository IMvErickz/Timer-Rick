
import React, { useEffect } from "react";
import { useState } from "react";

const Timer = () =>{

    const [segundos, setSegundos] = useState(0);
    const [minutos, setMinutos] = useState(0)


    useEffect(()=>{
      
        const cronometro = setInterval(()=>{

          if(segundos == 0){
            console.log(`Menor que 0`)
            clearInterval(cronometro)
            // setInterval("")
          }else{
            setSegundos(segundos - 1)
            console.log(segundos)
          }

        },1000)
        return () => clearInterval(cronometro)
        
    },[segundos])
    
    // setSegundos(10)

    return(
        <div>
            <h1>Timer</h1>
            {/* condition ? expr1 : expr2 */}
            <p>{`${minutos} : ${segundos}`  > 0 ? segundos : 10}</p>
            <button type="button" value="" onClick={()=> setSegundos(10)}>Play</button>         
        </div>
    )
}//fim component

export default Timer