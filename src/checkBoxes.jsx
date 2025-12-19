import { useState } from "react";

function CheckBoxes(){
    const[skill,setskill]=useState([]);
    const handleSkill=(event)=>{
        console.log(event.target.value,event.target.checked);
        if(event.target.checked){
            setskill([...skill,event.target.value])
        }else{
            setskill([...skill.filter((item)=>item!=event.target.value)])

        }
    }
    return(
        <div>
            <h1>Handle Checkboxes</h1>
            <h3>Select your Skill</h3>
            <input onChange={handleSkill} type="checkbox" id="php" value="php"/>
            <label htmlFor="php">PHP</label>
            <br/><br/>

            <input onChange={handleSkill} type="checkbox" id="c++" value={"c++"}/>
            <label htmlFor="c++">C++</label>
            <br/><br/>

            <input onChange={handleSkill}  type="checkbox" id="java" value={"java"}/>
            <label htmlFor="java">JAVA</label>
            <h3>{skill.toString()}</h3>

        </div>
    )
}
export default CheckBoxes;
