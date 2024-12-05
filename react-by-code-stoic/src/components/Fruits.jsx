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
      soldout: false,
    },
    {
      name: "Mango",
      price: 12,
      soldout: false,
    },
    {
      name: "Banana",
      price: 5,
      soldout: true,
    },
    {
      name: "Orrange",
      price: 7,
      soldout: false,
    },
    {
      name: "Pinapple",
      price: 8,
      soldout: true,
    },
  ];
  return (
    <div>
      <ul>
        {fruits.map((item, index) => (
          //   <li key={index}>
          //     {item.name} ${item.price}
          //   </li>

          <Fruit
            key={index}
            name={item.name}
            price={item.price}
            soldout={item.soldout}
          />
        ))}
      </ul>
    </div>
  );
}
