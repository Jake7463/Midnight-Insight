import { useEffect, useState } from "react";

function useStorage() {
    const [dreams, setDreams] = useState(() => {
        const savedDreams = localStorage.getItem("dreams");
        return savedDreams ? JSON.parse(savedDreams) : [];
    });
    useEffect(() => {
        console.log("Dreams state updated:", dreams);
        localStorage.setItem("dreams", JSON.stringify(dreams));
    }, [dreams]);
    const updateStorage = (obj) => {setDreams((prevDreams) => [...prevDreams, obj])}

    const importFromBrowser = () => {
        setDreams(JSON.parse(localStorage.getItem("dreams")));
    }

    const exportToBrowser = () => {
        localStorage.setItem("dreams", JSON.stringify(dreams));
    }

    return {
        updateStorage,
        importFromBrowser,
        exportToBrowser,
        dreams,
    }
}

export default useStorage;