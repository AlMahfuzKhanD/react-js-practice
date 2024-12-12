import FoodItem from "./FoodItem";

export default function FoodList({ foodData, setFoodId }) {
  return (
    <div>
      {foodData.map((item) => (
        <FoodItem key={item.id} food={item} setFoodId={setFoodId} />
      ))}
    </div>
  );
}
