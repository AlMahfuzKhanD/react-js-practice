import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ConditionalComponent from "./components/ConditionalComponent";
import Message from "./components/Message";
import Counter from "./components/Counter";

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
      <Counter />
    </div>
  );
}

export default App;
