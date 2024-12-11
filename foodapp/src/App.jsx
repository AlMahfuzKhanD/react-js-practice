import { useState } from "react";
import Search from "./components/Search";

function App() {
  const [foodData, setFoodData] = useState([]);
  return (
    <div className="App">
      <Search foodData={foodData} setFoodData={setFoodData} />
      {foodData.map((item) => (
        <h1>{item.title}</h1>
      ))}
    </div>
  );
}

export default App;
