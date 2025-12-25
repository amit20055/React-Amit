function Child42({displayname,name,getuser}){
    
    return(
        <div>
            <button onClick={()=>displayname(name)}>Display Name</button>
            <button onClick={()=>getuser()}>Get User</button>
        </div>
        
    )
}export default Child42;
