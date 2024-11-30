import Hello from "./components/Hello";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Hello />
      <Hello />
      <Hello />
    </div>
  );
}

export default App;
