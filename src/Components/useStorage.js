import { useState } from "react";

function useStorage() {
    const [dreamKey, setDreamKey] = useState([]);

    function updateStorage(obj) {
        setDreamKey(prevDreamKey => [...prevDreamKey, obj]);
        console.log(dreamKey);
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
        dreamKey,
    }
}

export default useStorage;