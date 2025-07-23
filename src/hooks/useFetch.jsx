import {useEffect, useState} from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async (abortController) => {

        setLoading(true);
        setError(null)
        try {
            const response = await fetch(url, {signal: abortController.signal});
            setData(response.data)
        } catch (error) {
            if(error.message === "CancelError"){
                setError(error.message + "Something went wrong");
            } else {
                setError("Something went wrong");
            }
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        const abortController = new AbortController();
        fetchData(abortController);

        return () => {
            abortController.abort();
        }
    }, [url]);

    return { data, error, loading };
}