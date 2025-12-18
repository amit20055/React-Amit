import { useState } from "react";
import Counter from "./Counter";
function State() {
    const [fruit, amit] = useState("Apple");
    const handlefruit = () => {
        amit("Banana")
    }
    return (
        <div>
            <h1>States in react</h1>
            <h1>{fruit}</h1>
            <button onClick={handlefruit}>Change Fruit Name</button>
            <Counter />

        </div>

    )
}
export default State;