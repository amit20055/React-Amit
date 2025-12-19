import { useState } from "react";

function Controll(){
    const[name,setname]=useState('');
    const[password,setpassword]=useState('');
    const[email,setemail]=useState('');
    return(
        <div>
            <h1>Controll Component</h1>
            <form action="" method="get">
                <input type="text" value={name} onChange={(event)=>setname(event.target.value)} placeholder="Enter Name"/>
                <br/><br/>
                <input type="password" value={password} onChange={(event)=>setpassword(event.target.value)} placeholder="Password"/>
                <br/><br/>
                <input type="text"value={email} onChange={(event)=>setemail(event.target.value)} placeholder="Enter email"/>
                <br/><br/>
                <button>Submit</button>
                <button onClick={()=>{setname('');setpassword('');setemail('')}}>Clear</button>
                <h3>{name}</h3>
                <h3>{password}</h3>
                <h3>{email}</h3>

            </form>


        </div>
    )
}
export default Controll;