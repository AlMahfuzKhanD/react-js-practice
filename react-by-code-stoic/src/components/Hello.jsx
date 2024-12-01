// function Hello(props}) {
function Hello({ person }) {
  //const { name, message } = props; // destructuring
  return (
    <h1>
      {person.message} {person.name}! {person.seatNumbers}
    </h1>
  );
}

export default Hello;
