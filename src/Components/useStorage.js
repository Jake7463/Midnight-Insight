import { useEffect, useState } from "react";
import { json } from "react-router";

function useStorage() {
    const [dreams, setDreams] = useState(() => {
        const savedDreams = localStorage.getItem("dreams");
        return savedDreams ? JSON.parse(savedDreams) : [];
    });

    useEffect(()=>{
        localStorage.setItem("dreams", JSON.stringify(dreams))
    }, [dreams])

    const updateStorage = (obj) => {
        const anotherTemp = JSON.stringify(obj);
        const finalTemp = JSON.parse(anotherTemp);
        setDreams((prevDreams) => [...prevDreams, obj]);
        return dreams;
    }

    const importFromBrowser = () => {
        setDreams(JSON.parse(localStorage.getItem("dreams")));
    }

    return {
        updateStorage,
        importFromBrowser,
        dreams,
    }
}

export default useStorage;