import "../styles/task.css";

const Task = ({ task, handleCheck, activateEditTask }) => {
  return (
    <li className="task">
      <div className="task-content">
        <div className="task-inner">
          <input
            className="checkbox"
            type="checkbox"
            name="completed"
            id="completed"
            checked={task.completed}
            onChange={() => handleCheck(task.id)}
          />
          <div className={task.completed ? "task-body completed" : "task-body"}>
            <h3>{task.text}</h3>
            {!task.completed && <p>{task.category}</p>}
          </div>
        </div>
        <button
          className="edit"
          onClick={() => activateEditTask(task.id)}
        ></button>
      </div>
    </li>
  );
};

export default Task;
