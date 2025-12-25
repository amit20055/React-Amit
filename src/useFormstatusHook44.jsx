import { useFormStatus } from 'react-dom'

function UseFormstatus() {
    const handleSubmit = async () => {
        await new Promise(res => setTimeout(res, 5000));
        console.log("submit");
    }
    function CustomerForm() {
        const { pending } = useFormStatus();
        console.log(pending);
        return (
            <div>
                <input type="text" placeholder="Enter Name" />
                <br />
                <input type="text" placeholder="Password" />
                <br />
                <br />
                <button disabled={pending}>{pending?'Submiting...':'submit'}</button>


            </div>
        )
    }
    return (
        <div>
            <h1>useformStatus Hook in React js 19</h1>
            <form action={handleSubmit}>
                <CustomerForm/>


            </form>
        </div>


    )
}

export default UseFormstatus;