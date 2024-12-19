import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function HomePage() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  function handleClick() {
    navigate("/dashboard/profile", { state: { username } });
  }
  return (
    <div>
      <h1>Homepage</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleClick}>Go to profile page</button>
    </div>
  );
}
