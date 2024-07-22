import { useEffect, useState } from "react";

let something = 0;
let something2 = 0;

function useStorage() {
    const [dreams, setDreams] = useState(() => {
        const savedDreams = localStorage.getItem("dreams");
        return savedDreams ? JSON.parse(savedDreams) : [];
    });

    useEffect(()=>{
        localStorage.setItem("dreams", JSON.stringify(dreams))
    }, [something])
    
    // useEffect((obj)=>{
    //     setDreams((prevDreams) => [...prevDreams, obj]);
    // }, something2)

    const updateStorage = (obj) => {
        setDreams((prevDreams) => [...prevDreams, obj]);
        something++;
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