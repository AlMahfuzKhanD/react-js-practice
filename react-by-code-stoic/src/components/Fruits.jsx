export default function Fruits() {
  const fruits = ["Apple", "Mango", "Banana"];
  return (
    <div>
      <ul>
        {fruits.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
