function Props({ user }) {
    
    return (
        <div>
            <hr/>
            <h1>Props in react</h1>
            <h2>Name: {user.name}</h2>
            <h2>Age: {user.Age}</h2>
            <h2>Email Address: {user.Email}</h2>
        </div>
    )
}
export default Props;