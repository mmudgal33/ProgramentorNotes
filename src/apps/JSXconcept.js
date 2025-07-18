
/* let name="How to use Expressions in JSX"
function JSXconcept() {
    return (
      <div className="App">
        <h1> Mohit Mudgal </h1>
        <h1>{name}</h1>
        <h1>5+5{5+5}</h1>
      </div>
    );
  }
  
  export default JSXconcept;  */
  
 
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
function JSXconcept() {
  return /*#__PURE__*/_jsxs("div", {
    className: "App",
    children: [/*#__PURE__*/_jsx("h1", {
      children: " Mohit Mudgal "
    }), /*#__PURE__*/_jsx("h1", {
      children: "JSXconcept"
    })]
  });
}
export default JSXconcept;  


