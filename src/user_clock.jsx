import { useState } from "react";
import Clock from "./clock";

function UserClock(){
    const[color,setColor]=useState('orange')
    return(
        <div>
            <h1>Digital clock in react js</h1>
            <select onChange={(event)=>setColor(event.target.value)}>
                <option  value={"red"}>Red</option>
                <option value={"yellow"}>Yellow</option>
                <option value={"green"}>Green</option>
                <option value={"blue"}>Blue</option>
            </select>
            <Clock color={color}/>
        </div>
    )
} 
export default UserClock;