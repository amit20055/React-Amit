import { useTransition } from "react";
import { startTransition } from "react";
import { useState } from "react";

function UseTransition45() {
    // const [pending,setPending]=useState(false);
    const [pending,startTransition]=useTransition();

    const handlebutton=()=>{
       startTransition(async()=>{
        await new Promise(res=>setTimeout(res,5000))
       })


    }

    return (
      <div>
        <h1>use Transition Hook in React js 19</h1>
        {
            pending?
            <img  style={{width:"100px"}} src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="" />:null
        }
        <button disabled={pending} onClick={handlebutton}>Click</button>
      
      </div>
      
    
    )
  }
  
  export default UseTransition45;
  