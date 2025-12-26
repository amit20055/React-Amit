import { useActionState } from "react";

function UseActionstate51(){
    const handleSubmit=async(previousData,FormData)=>{
        let name = FormData.get('name');
        let password = FormData.get('password');
        await new Promise(res=>setTimeout(res,2000))

        console.log("handleSubmit called",name,password);
        if(name && password){
            return {message:"Data Submitted",name,password}
        }else {
            return{error:'Fialed to submit ,enter proper data'}
        }
    }


    const[data,action,pending]=useActionState(handleSubmit,undefined)
    return (
        <div>
            <h1>useActionState Hook in React js</h1>
            <form action={action}>
                <input  defaultValue={data?.name} type="text" placeholder="enter name" name="name"/>
                <br /> <br />
                <input defaultValue={data?.password} type="password" placeholder="enter password" name="password"/>
                <br /> <br />
                <button>Submit data</button>
                <br /> <br />
                {
                    data?.error && <span style={{color:'red'}}>{data?.error}</span>
                }
                {
                    data?.message && <span style={{color:'green'}}>{data?.message}</span>
                }
                <h3>Name:{data?.name}</h3>
                <h3>Password:{data?.password}</h3>
            </form>
        </div>
    )
}
export default UseActionstate51;
