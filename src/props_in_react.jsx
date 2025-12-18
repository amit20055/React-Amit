import { useState } from "react";
import College from "./college";
import Student from "./student";
import Props from "./user";

function App() {
  // let username="Amit Prajapati";
  // let age=22;
  // let email="amitprajapati0458@gmail.com";
  let userObject={
    name:"Amit Prajapati",
    Age:22,
    Email:"amitprajapati0458@gmail.com"
  }
  let userObject1={
    name:"Ambuj Yadav",
    Age:22,
    Email:"ambujyadav0458@gmail.com"
  }
  let userObject2={
    name:"Amartya Abhinav",
    Age:22,
    Email:"amartyaabhinav0458@gmail.com"
  }
  let collegeName=['IEt','JUET','IIT','NIT']
  const[student,setstudent]=useState()


  return (
    <div>
      {/* <Props name={username} Age={age} Email={email}/> */}
      {
       student && <Student name={student}/>
      }
      <button onClick={()=>setstudent("Amit")}>Update student name</button>
      <College name={collegeName}/>
      <Props user={userObject} />
      <Props user={userObject1} />
      <Props user={userObject2} />

    </div>

  )
}

export default App;