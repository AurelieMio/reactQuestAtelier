import React, {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0);
    return(
        <>
            <p>Count is {count}</p>
            <button onClick={()=> setCount (count + 1)}>Add point </button>
            <button onClick={()=> setCount (count - 1)}>Remove point</button>
        </>
    )
}
export default Counter;