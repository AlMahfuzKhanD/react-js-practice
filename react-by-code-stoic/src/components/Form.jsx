import { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  //   function handleChange(e) {
  //     setName(e.target.value);
  //   }
  return (
    <div>
      <form action="">
        <input
          //   onChange={function demo(e) {
          //     return handleChange(e);
          //   }}
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
        />
      </form>
    </div>
  );
}
