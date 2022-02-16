import React from "react";
import Login from "./Login";

var isLoggedIn = false;
var currentTime = new Date(2022, 2, 1, 15).getHours();

// function renderConditionally() {
//   if (isLoggedIn === true) {
//     return <h1>Hello</h1>;
//   } else {
//     return <Login />;
//   }
// }

function App() {
  return (
    <div className="container">
      {
        // {renderConditionally()}
        // <h1>Hello</h1>
        // Using tenary Operator
        isLoggedIn ? <h1>Hello</h1> : <Login />

        //Using && in react
        //currentTime > 12 && <h1>You are still working :)</h1>
        // for later refrence I understand that in react when using
        // the && it would run the statment that is attached to it if
        // that statment is true and contrary if its false
      }
    </div>
  );
}

export default App;
