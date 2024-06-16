import { useEffect } from "react";
import useStorage from "../useStorage";

const useUpdateStorage = (depend) =>{
    const { updateStorage } = useStorage();
    useEffect(() => {
        updateStorage(depend)},[depend])
}

export default useUpdateStorage;