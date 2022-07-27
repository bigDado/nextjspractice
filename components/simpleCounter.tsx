import { useState } from "react";
import FlatButton from "./buttons/flatButton";

function SimpleCounter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <FlatButton 
                text={count.toString()} 
                onClick={() => setCount(count => count + 1)} 
            />
        </div>
    )
}

export default SimpleCounter;