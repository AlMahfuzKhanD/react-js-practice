export default function Message() {
  function handleClick() {
    console.log("button clicked");
  }
  return (
    <div>
      <button onClick={handleClick}>Click hear to get a message</button>
    </div>
  );
}
