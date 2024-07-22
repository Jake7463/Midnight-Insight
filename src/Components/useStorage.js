import { useEffect, useState } from "react";
import { json } from "react-router";

let something = 0;
let something2 = 0;

function useStorage() {
    const [dreams, setDreams] = useState(() => {
        const savedDreams = localStorage.getItem("dreams");
        return savedDreams ? JSON.parse(savedDreams) : [];
    });

    useEffect(()=>{
        localStorage.setItem("dreams", JSON.stringify(dreams))
    }, [dreams])
    
    // useEffect((obj)=>{
    //     setDreams((prevDreams) => [...prevDreams, obj]);
    // }, something2)

    const updateStorage = (obj) => {
        const anotherTemp = JSON.stringify(obj);
        const finalTemp = JSON.parse(anotherTemp);
        setDreams((prevDreams) => [...prevDreams, obj]);
        console.log("this is dreams: ", dreams);
        console.log("this is last plase of dreams: ", dreams[dreams.length-1]);
        console.log("this is obj: ", obj);
        console.log("this is final Temp: ", finalTemp);
        setTimeout(()=>{
            console.log("this is dreams: ", dreams);
            console.log("this is last plase of dreams: ", dreams[dreams.length-1]);
        },20000);
        return dreams;
    }

    const importFromBrowser = () => {
        setDreams(JSON.parse(localStorage.getItem("dreams")));
    }

    const exportToBrowser = () => {
        something++;
    }

    return {
        updateStorage,
        importFromBrowser,
        exportToBrowser,
        dreams,
    }
}

export default useStorage;