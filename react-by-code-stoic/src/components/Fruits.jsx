import Fruit from "./Fruit";
export default function Fruits() {
  //   const fruits = ["Apple", "Mango", "Banana"];
  //   return (
  //     <div>
  //       <ul>
  //         {fruits.map((item, index) => (
  //           <li key={index}>{item}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  const fruits = [
    {
      name: "Apple",
      price: 10,
    },
    {
      name: "Mango",
      price: 12,
    },
    {
      name: "Banana",
      price: 5,
    },
    {
      name: "Orrange",
      price: 7,
    },
  ];
  return (
    <div>
      <ul>
        {fruits.map((item, index) => (
          //   <li key={index}>
          //     {item.name} ${item.price}
          //   </li>

          <Fruit key={index} name={item.name} price={item.price} />
        ))}
      </ul>
    </div>
  );
}
