function Loop(){
    // const userName=['amit','amartya','ambuj''anna'];
    const userData=[
        {
            name:'Amit',
            age:23,
            email:"amit@gmail.com",
            id:1
        },
        {
            name:'Ambuj',
            age:23,
            email:"ambuj@gmail.com",
            id:2
        },
        {
            name:'Amarrtya',
            age:23,
            email:"amartya@gmail.com",
            id:3
        },
        {
            name:'Anna',
            age:23,
            email:"anna@gmail.com",
            id:4
        },
    ]
    return(
        <div>
            <h1>Loop in JSX with Map function</h1>
            <table border="1">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Age</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userData.map((user)=>(
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>


                            </tr>
                        ))
                    }
                </tbody>

            </table>
            <h1>Dummy Data Without loop</h1>
            <table border="1">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Age</td>

                    </tr>
                </thead>
                <tbody>
                <tr>
                        <td>1</td>
                        <td>Amit</td>
                        <td>amit@gmail.com</td>
                        <td>22</td>

                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Amartya</td>
                        <td>amartya@gmail.com</td>
                        <td>22</td>

                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Ambuj</td>
                        <td>ambuj@gmail.com</td>
                        <td>22</td>

                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Anna</td>
                        <td>anna@gmail.com</td>
                        <td>22</td>

                    </tr>
                </tbody>
            </table>

        </div>

    )
}
export default Loop;