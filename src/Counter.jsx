import { useState } from "react";
const Counter=()=>{
    const [count,setCount]=useState(0)
    const [rcount,setRCount]=useState(10)
    return(
        <div>
            <h1>Counter:{count}</h1>
            <h1>RCounter:{rcount}</h1>
            <button onClick={()=>setCount(count+1)}>Update Counter</button>
            <button onClick={()=>setRCount(rcount-1)}>Update RCounter</button>
        </div>
    )
}
export default Counter;