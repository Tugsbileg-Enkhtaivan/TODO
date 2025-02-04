import Title from "../title";

const tasks = [];

const TaskList = (props) => {
  if (props.tasks.length == 0) {
    return <div>No tasks yet.Add one above!</div>;
  }
  return (
    <div>
      {props.tasks.map((task) => {
        return (
        <div>{task.title}</div>
    )
      })}
    </div>
  );
};

export default TaskList;
