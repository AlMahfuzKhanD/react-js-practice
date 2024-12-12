import FoodItem from "./FoodItem";

export default function FoodList({ foodData }) {
  return (
    <div>
      {foodData.map((item) => (
        <FoodItem key={item.id} food={item} />
      ))}
    </div>
  );
}
