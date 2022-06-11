import { useEffect, useState } from "react"


export const useFetch = (url) => {

    const [data, setData] = useState({ data: null, loading: true, error: null });

    useEffect(() => {

        setData({ data: null, loading: true, error: null });
        fetch(url)
            .then(response => response.json())
            .then(data => {

                setData({
                    data,
                    loading: false,
                    error: null
                });

            });

    }, [url]);

    return data;
}

