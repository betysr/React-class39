import React, {useEffect, useState} from 'react'


function useFetch(url) {

    const [data,setData] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState("")

    useEffect(()=>{
        (
        async function(){
            try{
                setIsLoading(true);
                const response = await fetch(url);
                const data = await response.json();
                setData(data);
            }
            catch(err){
                setError(err)
            }finally{
                setIsLoading(false)
            }
        }
        )();
    },[url])
    return { data, isLoading, error };
}

export default useFetch;