import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
  let message;
  const display = true;
  // if (display) {
  //   message = <h1>This is message one</h1>;
  // } else {
  //   message = <h1>This is message two</h1>;
  // }

  // return display ? <h1>This is message 1</h1> : <h1>This is message 2</h1>;
  return display ? <Welcome /> : <Code />;
}
