import Usercomponent from "./user_component";

function ReuseComponent(){
    
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
            <h1>Reuse Component in Loop</h1>
            {
                userData.map((user)=>(
                    <div key={user.id}>
                        <Usercomponent data={user}/>
                    </div>
                ))

            }
            

        </div>

    )
}
export default ReuseComponent;