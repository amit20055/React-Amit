function Basic() {
    const name = "Amit Prajapati";
    let x = 10;
    let y = 20;
    function fruit() {
        return "Apple";
    }
    function operation(a, b, op) {
        if (op == "+") {
            return a + b;
        } else if (op == "-") {
            return a - b;
        } else {
            return a * b;
        }
    }
    const userObj = {
        name: "Amit Prajapati",
        email: "amit@test.com",
        age: 29,
    };
    const userArray = ["sam", "peter", "bruce"];
    let path = "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2018/4/10/1/HBFB1406_180126_dog-on-rug_041.jpg.rend.hgtvcom.616.822.suffix/1523383802334.jpeg";

    return (
        <div>
            <h1>JSX with Curly Braces</h1>
            <h2>{name ? name : "User not Found"}</h2>
            <h2>{name}</h2>
            <h1>{x + y}</h1>
            <h1>{fruit()}</h1>;
            <h1>{operation(20, 10, "-")}</h1>
            <h1>{operation(20, 10, "+")}</h1>
            <h1>{operation(20, 10, "")}</h1>
            <h1>{userObj.name}</h1>
            <h1>{userObj.email}</h1>
            <h1>{userObj.age}</h1>
            <h1>{userArray[2]}</h1>
            <input type="text" value={name} id={name} />
            <br />
            <img src={path} />

        </div>
    );
}
export default Basic;