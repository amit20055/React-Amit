import { useState } from "react"
function Multiple_condition() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Multiple Condition </h1>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Counter</button>
            {
                count==0?<h1>Amit Prajapati</h1>
                :count==1?<h1>Amrtya Abhinav</h1>
                :count==2?<h1>Ambuj Yadav</h1>
                :count==3?<h1>Ananth Krishanan H</h1>
                :<h1>User Not Found</h1>
                
            }
        </div>
    )
}
export default Multiple_condition;