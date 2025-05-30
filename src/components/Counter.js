import { useState } from "react";

export function Counter() {
    const [counter, setCounter] = useState (0);
    return (
        <>
            <button className="text-4xl" onClick={() => setCounter(counter -1)}>-</button>
            <h2 className="text-4xl">{counter}</h2>
            <button className="text-4xl" onClick={() => setCounter(counter +1)}>+</button>
        </>
    )
}