import College from "./college_component";

function CollegeData(){
    const collegedata=[
        {
           name:"IET Alwar" ,
           city:"Alwar",
           website:"www.iet.com",
           student:[
            {
                name:"Amit Prajapati",
                age:'23',
                email:"amit@gmail.com"
            },
            {
                name:"Master",
                age:'23',
                email:"master@gmail.com"
            }
           ]
        },
        {
            name:"JUET Guna" ,
            city:"Guna",
            website:"www.juet.com",
            student:[
                {
                    name:"Amartya",
                    age:'23',
                    email:"amartya@gmail.com"
                },{
                    name:"Captaan",
                    age:'23',
                    email:"captaanabhinav@gmail.com"
                }
               ]
         },
         {
            name:"JIT Noida" ,
            city:"Noida",
            website:"www.jit.com",
            student:[
                {
                    name:"Ambuj",
                    age:'23',
                    email:"ambuj@gmail.com"
                },
                {
                    name:"Buriaya bhai",
                    age:'23',
                    email:"bhaiburiya69@gmail.com"
                }
               ]
         },
    ]
    return(
        <div>
            <h1>Nested Looping with Component</h1>
            {
                collegedata.map((college,index)=>(
                    <div key={index}>
                        <College college={college}/>


                    </div>
                ))
            }
        </div>

    )
}
export default CollegeData;
