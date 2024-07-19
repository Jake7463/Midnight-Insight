import { useEffect } from "react"

function UpdateAndFX(arg, func){
    useEffect(()=>{func(arg)},[arg])
}

export default UpdateAndFX