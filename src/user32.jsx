import { useState } from "react";
import Counter from "./counter1";
import Cycle32 from "./life_cycle_injs";

function User32(){
    const[count,setCount]=useState(0);
    const[data, setdata]=useState(0);
    const[display,setDisplay]=useState(true);

    return(
        <div>
            {
                display?<Cycle32 count={count} data={data}></Cycle32>:null
            }
        
            <button onClick={()=>setCount(count+1)}>Counter</button>
            <button onClick={()=>setdata(data+1)}>Data</button>
            <button onClick={()=>setDisplay(!display)}>Toggle</button>
        </div>

    )
}
export default User32;