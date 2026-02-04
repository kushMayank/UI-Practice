const { useEffect } = require("react");

export function useFetch(url){
    const [result, setResult] = useState(null);
    const [isLoading, setIsLoading]= useState(true);
    const [error, setError]= useState(null);

    useEffect(()=>{
        const fetchData = async()=>{
            try{
            const response = await fetch(url);
                if(!response.ok){
                    throw new Error('not able to fetch data');
                }
                const result = await response.json();
                setResult(result);
            } catch(error){
                setError(error)
            } finally{
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])

    return [result, isLoading, error]
}