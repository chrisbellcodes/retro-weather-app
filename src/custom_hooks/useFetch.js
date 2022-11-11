import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url, options= {}) => {
    const [isLoading, setIsLoading] = useState(false)
    const [result, setResult] = useState(null)
    const [isError, setIsError] = useState(false)
    
    useEffect(() => {
        setIsLoading(true)

        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                if(data.error) {
                    setIsError(true)
                    console.log('Error!', data.reason)
                } else {
                    setResult(data)
                }
            })
            .catch((e)=> {
                console.log(e)
                setIsError(true)
            })
            .finally(()=>{
                setIsLoading(false)
            })
    }, [url])

    return {isLoading, result, isError}
}