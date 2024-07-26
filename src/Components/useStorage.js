import { useEffect, useState } from "react";

function useStorage() {
    const [dreams, setDreams] = useState(() => {
        const savedDreams = localStorage.getItem("dreams");
        return savedDreams ? JSON.parse(savedDreams) : [];
    });

    const [series, setSeries] = useState([]);

    useEffect(()=>{
        localStorage.setItem("dreams", JSON.stringify(dreams))
    }, [dreams])

    useEffect(()=>{
        localStorage.setItem("series", JSON.stringify(series))
    }, [series])

    const updateStorage = (obj) => {
        const anotherTemp = JSON.stringify(obj);
        const finalTemp = JSON.parse(anotherTemp);
        setDreams((prevDreams) => [...prevDreams, obj]);
        return dreams;
    }

    const importFromBrowser = () => {
        setDreams(JSON.parse(localStorage.getItem("dreams")));
    }

    const updateSeries = (str) => {
        setSeries((prevSeries) => [...prevSeries, str]);
        return series;
    }
    const importSeries = () => {
        setSeries(JSON.parse(localStorage.getItem("series")));
    }

    return {
        updateStorage,
        importFromBrowser,
        dreams,
        importSeries,
        updateSeries,
        series,
    }
}

export default useStorage;