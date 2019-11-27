import React, {useState} from 'react';

function Counter(){
    const firstValue = 42
    const [count, setCount] = useState(firstValue);
    return(
        <>
            <p>Answer to the Ultimate Question of Life, The Universe, and Everything is ... {count}</p>
            <button onClick={()=> setCount (count + 1)}>Add point </button>
            <button onClick={()=> setCount (count - 1)}>Remove point</button>
        </>
    )
}
export default Counter;