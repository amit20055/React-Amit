import Child_1_48 from "./child1_48";
import Child_2_48 from "./child2_48";
import { useState } from "react";

function Parent48(){
    const[user,setUser]=useState('')
    return(
        <div>
            <Child_1_48 setuser={setUser}/>
            <Child_2_48 user={user}/>
            
        </div>

    )
}
export default Parent48;