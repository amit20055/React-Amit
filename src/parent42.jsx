import Child42 from "./child42";

function Parents42(){
    const displayName =(name)=>{
        alert(name)
    }
    const getUser=()=>{
        alert("get user function called")

    }
    return(
        <>
        <h1>Call Parent Component Function from child component</h1>
        <Child42 displayname={displayName} name="Amit" getuser={getUser}/>
        <Child42 displayname={displayName} name="Amartya"  getuser={getUser}/>
        <Child42 displayname={displayName} name="Ambuj"  getuser={getUser}/>
        <Child42 displayname={displayName} name="Anna"  getuser={getUser}/>
        </>
    )
}export default Parents42;
