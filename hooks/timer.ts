import { useState, useEffect } from "react";

export const useTimer = () => {
    const [timer, setTimer] = useState(0); // tuple

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer => timer + 1)
        }, 1000)
  
        return () => {
            clearInterval(interval)
        }
    }, [])

    return timer
} 