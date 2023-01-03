import Task from "./Task";
import "../styles/tasks.css";

const Tasks = ({ tasks, handleCheck, activateEditTask }) => {
  return (
    <div className="tasks">
      <h2>Incomplete</h2>
      <ul className="tasks-list">
        {tasks
          .filter((task) => task.completed === false)
          .map((task) => (
            <Task
              task={task}
              key={task.id}
              handleCheck={handleCheck}
              activateEditTask={activateEditTask}
            />
          ))}
      </ul>
      <br />
      <h2>Complete</h2>
      <ul className="tasks-list">
        {tasks
          .filter((task) => task.completed === true)
          .map((task) => (
            <Task
              task={task}
              key={task.id}
              handleCheck={handleCheck}
              activateEditTask={activateEditTask}
            />
          ))}
      </ul>
    </div>
  );
};

export default Tasks;
