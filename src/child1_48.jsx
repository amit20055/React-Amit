

function Child_1_48({setuser}){
    
    return(
        <div>

            <h1>Add User</h1>
            <input type="text" onChange={(event)=>setuser(event.target.value)} placeholder="enter user name"/>
            <hr />
            
        </div>

    )
}
export default Child_1_48;