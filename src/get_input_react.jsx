import { useState } from "react";

function Get() {
    const [val, setval] = useState("")
    return (
        <div>
            <h1>Get Input Field</h1>
            <input type="text" value={val} onChange={(event) => setval(event.target.value)} placeholder="Enter User Name" />
            <h1>{val}</h1>
            <button onClick={()=>setval("")}>clear Vlaue</button>

        </div>
    )
}

export default Get;