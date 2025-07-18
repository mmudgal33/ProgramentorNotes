
let name="How to use javascript Expressions in JSX"
const car_obj = {name:"corolla xli",colour:"white",make:"2008"};
let a=10;
let msg= "";
if(a>5){msg="Hello"}else{ msg="bye"}

function V6VariableLoopObject() {
    return (
      <div className="App">
        <h1>{car_obj.name}</h1>
        <h1>{car_obj.colour}</h1>
        <h1> Mohit Mudgal </h1>
        <h1>{name}</h1>
        <h1>5+5= {5+5}</h1>
        <h1>{msg}</h1>
        <h1>{(a>5) ? "hello" : "bye"}</h1>
        <label htmlFor=""></label>
      </div>
    );
  }
  
  export default V6VariableLoopObject; 