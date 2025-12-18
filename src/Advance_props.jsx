function Aprops({name="New User",children}) {
    return (
        <div style={{color:"green",border:"5px solid red",width:"300px"}}>
            <h1>Advance Props</h1>
            <h2>Hi {name}</h2>
            {children}

        </div>
    )

}
export default Aprops;