export default function Fruit({ name, price, soldout }) {
  return (
    <>
      <li>
        {name} ${price} {soldout ? "soldOut" : ""}
      </li>
      {/* {price > 5 ? (
        <li>
          {name} ${price}
        </li>
      ) : (
        ""
      )} */}
    </> // fragments used
  );
}
