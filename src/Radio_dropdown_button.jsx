import { useState } from "react";

function Radio(){
    const [gender,setGender]=useState('male')
    const [city,setCity]=useState('Delhi')

    
    return(
        
        <div>
            <h1>Handle Radio and Dropdown Button</h1>
            <h4>select Gender</h4>
            <input type="radio"onChange={(event)=>setGender(event.target.value)} name="gender" value={"male"} checked={gender=='male'} id="male"/>
            <label htmlFor="male">Male</label>
            <input type="radio" onChange={(event)=>setGender(event.target.value)} name="gender" value={"female"} checked={gender=='female'} id="female"/>
            <label htmlFor="female">Female</label>
            <h3>selected Gender:{gender}</h3>
            <br/> <br/>
            <h4>select city</h4>
            <select defaultValue={"delhi"} onChange={(event)=>setCity(event.target.value)}>
                <option value={"noida"}>Noida</option>
                <option value={"delhi"}>Delhi</option>
                <option value={"mumbai"}>Mumbai</option>
                <option value={"hydra"}>Hydrabad</option>
            </select>
            <h3>selected City:{city}</h3>

        </div>

    )


}
export default Radio;