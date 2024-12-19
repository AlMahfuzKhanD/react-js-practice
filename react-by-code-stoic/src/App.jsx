import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ConditionalComponent from "./components/ConditionalComponent";
import Message from "./components/Message";
import Counter from "./components/Counter";
import Form from "./components/Form";
import UseReducer from "./components/UseReducer";
import UseReducerObject from "./components/UseReducerObject";

function App() {
  const [count, setCount] = useState(0);
  // const seatNumbers = [1, 4, 7];
  const person = {
    name: "Rob",
    message: "Hi",
    seatNumbers: [1, 2, 3],
  };
  return (
    <div className="App">
      {/* <Hello name="Mahfuz" message="Hello" seatNumbers={seatNumbers} /> */}
      <Hello person={person} />
      {/* <Hello name="Khan" message="Hi" /> */}
      {/* <Form /> */}
      <UseReducer />
      <UseReducerObject />
    </div>
  );
}

export default App;
