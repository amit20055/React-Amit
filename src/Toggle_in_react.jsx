import { useState } from "react"
function Toggle() {
    const [display, setDisplay] = useState(true)
    return (
        <>
            <h1>Toggle in react</h1>
            <button onClick={()=>setDisplay(!display)}>Toggle</button>
            {
                display? <h1>Amit Prajapati</h1>:null
            }
            
        </>
    )
}
export default Toggle;