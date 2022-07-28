import { useEffect, useState } from "react"
import FlatButton from "./buttons/flatButton"

function SimpleCounter() {
    const [count, setCount] = useState(0)

    const [timer, setTimer] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(timer => timer + 1)
        }, 1000)


        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            <FlatButton 
                text={count.toString()} 
                onClick={() => setCount(count => {

                    return count + 1
                })} 
            />
            <div>Timer: {timer}</div>
        </div>
    )
}

export default SimpleCounter