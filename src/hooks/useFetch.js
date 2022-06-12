import { useEffect, useRef, useState } from "react";


export const useFetch = (url) => {

    const isMounted = useRef(true);

    const [data, setData] = useState({ data: null, loading: true, error: null });

    useEffect(() => {

        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {

        setData({ data: null, loading: true, error: null });
        fetch(url)
            .then(response => response.json())
            .then(data => {

                if (isMounted.current) {
                    setData({
                        data,
                        loading: false,
                        error: null
                    });
                }

            });

    }, [url]);

    return data;
}

