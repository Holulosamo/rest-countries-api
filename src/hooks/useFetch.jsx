import { useEffect, useState } from "react";

export default function useFetch(){
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
      const getData = async () => {
        setLoading(true);
        try {
            const response = await fetch("http://localhost:3000/countries");
            const json = await response.json();
            if(!response.ok) throw new Error(response.statusText);
            setData(json);
            setLoading(false);
            setError(null);
        } catch (err) {
            setError(`${err} an error occurred while fetching`);
            setLoading(false);
        }
      }
    
    return () => getData();
    }, []);

    return {data, loading, error}
}
