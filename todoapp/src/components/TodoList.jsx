import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";
export default function TodoList({ todos }) {
  return (
    <div className={styles.list}>
      {todos.map((item, index) => (
        <TodoItem key={index} item={item} />
      ))}
    </div>
  );
}
