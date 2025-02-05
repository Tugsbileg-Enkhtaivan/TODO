import Title from "../title";
import styles from "./index.module.css"

const tasks = [];

const TaskList = (props) => {
  if (props.tasks.length == 0) {
    return <div className={styles.noTask}>No tasks yet.Add one above!</div>;
  }
  return (
    <div >
      {props.tasks.map((task) => {
        return (
        <div className={styles.newtaskContainer}>{task.title}</div>
    )
      })}
    </div>
  );
};

export default TaskList;
