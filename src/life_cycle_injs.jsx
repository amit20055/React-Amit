import { useEffect } from "react";

const Cycle32=({count,data})=>{
    

useEffect(()=>{
    console.log("mounting phase only");


},[])

useEffect(()=>{
    console.log("updating phase only");

},[count])
useEffect(()=>{
    return()=>{
        console.log("mounting phase only");
    }

},[])



return(
    <div>
    
        <h1>Counter Value{count}</h1>
        <h1>Data Value{data}</h1>

    </div>
)
}
export default Cycle32;