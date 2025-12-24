import { useRef } from "react";
function Uncontrolled41(){
    const userRef=useRef();
    const passwordRef=useRef();

    const handleForm=(event)=>{
        event.preventDefault();
        const user=document.querySelector("#user").value;
        const password=document.querySelector("#password").value;
        console.log(user,password);
    }
    const handleFormRef=(event)=>{
        event.preventDefault();
        const user=userRef.current.value
        const password=passwordRef.current.value

       
        console.log("handleFormRef",user,password);
    }

    return(
        <>
        <h1>Uncontrolled Component with DOM</h1>
        <form action="" method="post" onSubmit={handleForm}>
            <input type="text" id="user" placeholder="enter user name" />
            <br/><br/>
            <input type="text" id="password" placeholder="enter user name" />
            <br/><br/>
            <button>Submit</button>
        </form>
        <hr />
        <h1>Uncontrolled Component with UseRef</h1>
        <form action="" method="post" onSubmit={handleFormRef}>
            <input type="text" ref={userRef} id="userref" placeholder="enter user name" />
            <br/><br/>
            <input type="text" ref={passwordRef} id="passwordref" placeholder="enter user name" />
            <br/><br/>
            <button>Submit with Ref</button>
        </form>
        </>
    )
}
export default Uncontrolled41;
