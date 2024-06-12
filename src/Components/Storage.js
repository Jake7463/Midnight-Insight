import { useState } from "react";

function Storage() {
    const [dreams, setDreams] = useState([{}]);

    function updateStorage(obj) {
        setDreams(prevDreams => [...prevDreams, obj]);
    }

    const importFromBrowser = () => {
        setDreams(localStorage.getItem("dreams"));
    }

    const exportToBrowser = (arr) => {
        localStorage.setItem("dreams", dreams);
    }

    return {
        updateStorage,
        importFromBrowser,
        exportToBrowser,
        dreams,
    }
}

export default Storage;