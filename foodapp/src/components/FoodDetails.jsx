import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "17a54c390f3c43c0a00ff326ab0b46fe";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
    }

    fetchFood();
  }, [foodId]);

  //   useEffect(() => {
  //     if (!foodId) return;
  //     async function fetchFood() {
  //       const response = await fetch(`${URL}?apiKey=${API_KEY}`);
  //       const data = await response.json();
  //       console.log(data);
  //     }
  //     fetchFood();
  //   }, [foodId]);

  return (
    <div>
      <div>
        <h1>{food.title}</h1>

        <img src={food.image} alt="" />
      </div>
      <span>
        <strong>⏰ {food.readyInMinutes} Minutes</strong>
      </span>
      <span>{food.vegetarian ? "🥕Vegetarian" : "🥩Non-Vegetarian"}</span>
    </div>
  );
}
