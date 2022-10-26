import {useState} from "react";

export const useFetch = (callback) => {

    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState('');

    const fetch = async () => {
        try {
            setIsLoading(true)
            await callback() 
        } catch (e) {
            setErr(e.message);
        } finally {
            setIsLoading(false)
        }
    }

    return [fetch, isLoading, err]
}