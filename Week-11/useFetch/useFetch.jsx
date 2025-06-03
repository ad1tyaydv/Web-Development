import { useState, useEffect } from "react";

export function useFetch(url) {
    const [finalData, setFinalData] = useState({});
    console.log(url);

    async function getDetails() {
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json)
    }

    useEffect(() => {
        getDetails();
    }, [url])

    return {
        finalData
    }
}
