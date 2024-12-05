import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
  const display = false;
  if (display) {
    return <Welcome />;
  } else {
    return <Code />;
  }
}
