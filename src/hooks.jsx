import { useEffect } from "react";
import { useState } from "react";

function Hook(){
    const[counter,setcounter]=useState(0);
    const[data,setdata]=useState(0);

    useEffect(()=>{
        // callOnce();
        counterfunction();

    },[counter,data])

    function callOnce(){
        console.log("callOnce function called");    
    }
    function counterfunction(){
        console.log("counterfunction",counter,data);    
    }
    
    return(
        <div>
            <h1>UseEffect Hooks in Js</h1>
            <button onClick={()=>setcounter(counter+1)} >Counter {counter}</button>
            <button onClick={()=>setdata(data+1)} >Data {data}</button>

        </div>
    )
}
export default Hook;
