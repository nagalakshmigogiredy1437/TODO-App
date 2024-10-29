import TodoItems from "./TodoItems";
import styles from "../components/todolist.module.css"

export default function TodoList({todos, settodos}){
    const SortItems = todos
      .slice()
      .sort((a, b) => Number(a.done) - Number(b.done));
    return (
      <div className={styles.list}>
        {SortItems.map((item) => (
          <TodoItems
            key={item.name}
            item={item}
            todos={todos}
            settodos={settodos}
          />
        ))}
      </div>
    );
}