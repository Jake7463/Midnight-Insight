import { useState } from "react";

function useStorage() {
    const [dreams, setDreams] = useState([{}]);

    function updateStorage(obj) {
        setDreams(prevDreams => [...prevDreams, obj]);
    }

    const importFromBrowser = () => {
        // Implementation here
    }

    const exportToBrowser = () => {
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