import { useEffect } from "react";
import UserCounter from "./usercounter";

const Counter=({count,data})=>{
    const handleCounter=()=>{
        console.log("handlecounter called");
    }
    const handleData=()=>{
        console.log("handleData called");
    }
    

useEffect(()=>{
    handleCounter();

},[count])

useEffect(()=>{
    handleData();

},[data])


return(
    <div>
    
        <h1>Counter Value{count}</h1>
        <h1>Data Value{data}</h1>

    </div>
)
}
export default Counter;