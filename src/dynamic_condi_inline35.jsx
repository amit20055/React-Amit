import { useState } from "react";

function DynamicStyle35(){
    const[cardStyle,setCardStyle]=useState(
        {
        
        border:"1px solid #cccccc3b",
        width:  "200px",
        boxShadow :"1px 2px 3px  0px #cccccc57",
        margin:"10px"   

}
)
const[textColor,setTextColor]=useState('white');
const updateTheme=(bgColor,textColor)=>{
    setCardStyle({...cardStyle,backgroundColor:bgColor})
    setTextColor(textColor)

}
const[grid,setGrid]=useState(true);

    
    return (
        <>
            <h1 style={{color:'blue'}}>Inline Style in React</h1>
           <button onClick={()=>updateTheme('grey','green')} >Grey theme </button>
           <button onClick={()=>updateTheme('white','black')}>Default theme </button>
           <button onClick={()=>setGrid(!grid)}>Toggle Grid</button>
            <div style={{display:grid?'flex':'block',flexWrap:'wrap'}}>
            <div style={cardStyle}>
                <img style={{width:'200px'}} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
            <div style={{padding:'5px',color:textColor}}>
            <h4>Amit Prajapati</h4>
            <p>software developer</p>
            </div>
            </div>
            <div style={cardStyle}>
                <img style={{width:'200px'}} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
            <div style={{padding:'5px',color:textColor}}>
            <h4>Amit Prajapati</h4>
            <p>software developer</p>
            </div>
            </div>

            <div style={cardStyle}>
                <img style={{width:'200px'}} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
            <div style={{padding:'5px',color:textColor}}>
            <h4>Amit Prajapati</h4>
            <p>software developer</p>
            </div>
            </div>

            <div style={cardStyle}>
                <img style={{width:'200px'}} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
            <div style={{padding:'5px',color:textColor}}>
            <h4>Amit Prajapati</h4>
            <p>software developer</p>
            </div>
            </div>

            <div style={cardStyle}>
                <img style={{width:'200px'}} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
            <div style={{padding:'5px',color:textColor}}>
            <h4>Amit Prajapati</h4>
            <p>software developer</p>
            </div>
            </div>

            <div style={cardStyle}>
                <img style={{width:'200px'}} src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
            <div style={{padding:'5px',color:textColor}}>
            <h4>Amit Prajapati</h4>
            <p>software developer</p>
            </div>
            </div>


            </div>
            
        </>

    )
}export default DynamicStyle35;