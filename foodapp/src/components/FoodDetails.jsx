import { useEffect, useState } from "react";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "17a54c390f3c43c0a00ff326ab0b46fe";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
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
        <div>
          <span>
            <strong>⏰ {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>🤷‍♂️ Serves {food.servings}</strong>
          </span>
          <span>
            {food.vegetarian ? "🥕 Vegetarian " : "🥩 Non-Vegetarian"}
          </span>
          <span>{food.vegan ? "🐄 Vegetarian " : ""}</span>
        </div>
        <div>
          <span>$ {food.pricePerServing / 100} serving</span>
        </div>
      </div>
      <div>
        <h2>Instructions</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          food.analyzedInstructions[0].steps.map((item, index) => (
            <li key={index}>{item.step}</li>
          ))
        )}
      </div>
    </div>
  );
}
