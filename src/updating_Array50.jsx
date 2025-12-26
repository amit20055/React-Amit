import { useState } from "react";

function UpdatingArray50(){
    const[data ,setData]=useState([
        'Amit','Amartya','Anna','ambuj'
    ]);

    const handleUser=(name)=>{
     data[data.length-1]=name;
     setData([...data])
    }

    const[dataDetails,setdataDetails]=useState([
        {name:"Amit",age:'23'},
        {name:"Amartya",age:'23'},
        {name:"Anna",age:'23'},
        {name:"Ambuj",age:'23'}
    ])
    const handleData=(age)=>{
        dataDetails[dataDetails.length-1].age=age;
        setdataDetails([...dataDetails])
       }
       
    return(
        <div>
            <h1>updating Array in state</h1>
            <input type="text" placeholder="enter last user name" onChange={(event)=>handleUser(event.target.value)}/>

            {
                data.map((item,index)=>(
                    <h3 key={index}>{item}</h3>
                ))
            }
           <hr />
           <input type="text" placeholder="enter last user age" onChange={(event)=>handleData(event.target.value)}/>
           {
            dataDetails.map((item,index)=>(
                <h4 key={index}>{item.name},{item.age}</h4>
            ))
           }
           
        </div>
    )
}
export default UpdatingArray50;