import { useEffect, useState } from "react";

function useStorage() {
    const [dreams, setDreams] = useState(() => {
        const savedDreams = localStorage.getItem("dreams");
        return savedDreams ? JSON.parse(savedDreams) : [];
    });

    const updateStorage = (obj) => {
        setDreams((prevDreams) => [...prevDreams, obj]);
        return dreams;
    }

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