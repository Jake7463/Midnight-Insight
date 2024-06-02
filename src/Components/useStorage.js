import { useState } from "react";

function useStorage() {
    const [dreams, setDreams] = useState([]);

    function updateStorage(obj) {
        setDreams(prevDreams => [...prevDreams, obj]);
        console.log(dreams);
    }

    const importFromBrowser = (obj) => {
        // Implementation here
    }

    const exportToBrowser = (obj) => {
        // Implementation here
    }

    return {
        updateStorage,
        importFromBrowser,
        exportToBrowser,
        dreams,
    }
}

export default useStorage;