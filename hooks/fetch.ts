import { useEffect, useState } from "react";

export const useFetch = (url: string, options: RequestInit | undefined) => {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState<Error | null | unknown>(null)
    const [abort, setAbort] = useState<(reason?: any) => void>(() => { })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const abortController = new AbortController()
                const signal = abortController.signal
                setAbort(abortController.abort)
                const res = await fetch(url, { ...options, signal })
                const json = await res.json()
                setResponse(json)
            } catch (error) {
                setError(error)
            }
        };
        fetchData()
        return () => {
            abort()
        }
    }, [])

    return { response, error, abort }
}