import Hello from "./components/Hello";
import Fruits from "./components/Fruits";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

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
      <Fruits />
    </div>
  );
}

export default App;
