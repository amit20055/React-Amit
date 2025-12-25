import { useState } from "react";
import { ssrExportNameKey } from "vite/module-runner";

function Updating_object49(){
    const[name,setName]=useState('Amit');
    const [data,setData]=useState({
        name:'Amit',
        address:{
            city:'Uttar Pradesh',
            country:'India'
        }
    })
    const handleName=(val)=>{
        data.name=val;
        setData({...data})
        
    }
    const handleCity=(val)=>{
        data.address.city=val;
        setData({...data,address:{...data.address,val}})
        
    }
    return (
        <div>
            <h1>Updating Object in react js</h1>
            <input type="text" placeholder="update name" onChange={(event)=>handleName(event.target.value)}/>
            <input type="text" placeholder="update city" onChange={(event)=>handleCity(event.target.value)}/>
            <h2>Name:{data.name}</h2>
            <h2>City:{data.address.city}</h2>
            <h2>Country:{data.address.country}</h2>

        </div>
    )
} export default Updating_object49;
