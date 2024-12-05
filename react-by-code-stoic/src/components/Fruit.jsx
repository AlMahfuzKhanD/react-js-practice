export default function Fruit({ name, price }) {
  return (
    <>
      {/* {name} ${price} */}
      {price > 5 ? (
        <li>
          {name} ${price}
        </li>
      ) : (
        ""
      )}
    </> // fragments used
  );
}
