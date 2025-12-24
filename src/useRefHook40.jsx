import { useRef } from "react";
function UseRefHook40(){
    const inputRef = useRef(null);
    const h1Ref = useRef(null);
    const inputHandler=()=>{
        console.log(inputRef);
        inputRef.current.focus();
        inputRef.current.style.color="red";
        inputRef.current.placeholder="enter password";

    }
    const Toggler=()=>{
        if(inputRef.current.style.display!='none'){
            inputRef.current.style.display='none';
        }
        else{
            inputRef.current.style.display='inline';

        }
        
    }
    const h1Handler=()=>{
        h1Ref.current.style.color="green";
    }

    
    return(
        <div>
            <h1>UseRef in JS</h1>
            <button onClick={Toggler} >Toggle</button>
            <input ref={inputRef} type="text"  placeholder="Enter user name"></input>
            
            <button onClick={inputHandler} >Focus On Input Target</button>
            <h1 ref={h1Ref}>Amit Prajapati</h1>
            <button onClick={h1Handler} >Handler</button>
        </div>
    )
}
export default UseRefHook40;