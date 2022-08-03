import React, { useState, useEffect } from 'react'

const Test = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("UseEffect");
    }, [])



    return (
        <div>
            {console.log("Rendering")}
            <h1>UseEffect</h1> <hr />
            <h1>Count : {count} </h1>
            <button onClick={() => { setCount((count) => count + 1) }}>+</button>
        </div>
    )
}

export default Test