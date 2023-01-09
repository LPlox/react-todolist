import { useState } from "react";
import EditTask from "./EditTask";
import "../styles/task.css";

const Task = ({ task, handleCheck, replaceTask, deleteTask }) => {
  const [editTask, setEditTask] = useState(false);

  return (
    <li className="task">
      {editTask ? (
        <EditTask
          task={task}
          replaceTask={replaceTask}
          deleteTask={deleteTask}
          closeEditField={() => setEditTask(false)}
        />
      ) : (
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
            <div
              className={task.completed ? "task-body completed" : "task-body"}
            >
              <h3>{task.text}</h3>
              {!task.completed && (
                <p dangerouslySetInnerHTML={{ __html: task.category }}></p>
              )}
            </div>
          </div>
          <button
            className="edit"
            onClick={() => {
              setEditTask(true);
            }}
          ></button>
        </div>
      )}
    </li>
  );
};

export default Task;
