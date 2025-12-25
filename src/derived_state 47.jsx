import { useState } from "react";

function DerivedState47(){
    const[users,setusers]=useState([]);
    const[user,setuser]=useState([]);

    const handleAddusers=()=>{
        setusers([...users,user])

    }
    const total=users.length;
    const last=users[users.length-1];
    const unique=[...new Set(users)].length;

    return (
        <div>
            <h2>Total User:{total}</h2>
            <h2>Last User:{last}</h2>
            <h2>Unique total User:{unique}</h2>
            <input type="text" onChange={(event)=>setuser(event.target.value)} placeholder="add new users"/>
            <button onClick={handleAddusers} >Add Users</button>
            {
                users.map((item,index)=>(
                    <h4 key={index}>{item}</h4>
                ))
            }

        </div>

    )
}
export default DerivedState47;
