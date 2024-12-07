// const header = { color: "blue", fontSize: "100px" };
// import "../css/style.css";
import styles from "./inlinecomponent.module.css";
export default function InlineComponent() {
  return (
    <div>
      {/* <h1 style={header}>Inline component</h1> */}
      <h1 className={styles.header}>Inline component</h1>
    </div>
  );
}
