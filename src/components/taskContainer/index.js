import Tab from "../Tabs"
import TaskList from "../TaskList "

const TaskContainer = (props) => {
  return (
    <div>
        <Tab />
        <TaskList tasks={props.tasks}/>
    </div>
  )
}

export default TaskContainer