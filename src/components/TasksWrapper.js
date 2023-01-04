import { useEffect, useState } from "react";
import Count from "./Count";
import AddTask from "./AddTask";
import Tasks from "./Tasks";
import EditTask from "./EditTask";
import "../styles/taskswrapper.css";

const TasksWrapper = () => {
  const [editTask, setEditTask] = useState([]);
  const [tasks, setTasks] = useState();

  useEffect(() => {
    fetch("./tasks.json")
      .then((resp) => resp.json())
      .then((data) => setTasks(data));
  }, []);

  const handleCheck = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const createTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const activateEditTask = (id) => {
    setEditTask(tasks.filter((arr) => arr.id === id));
  };

  const replaceTask = (editedTask) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === editedTask.id ? editedTask : task))
    );
    setEditTask([]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    setEditTask([]);
  };

  return (
    <>
      {tasks && (
        <>
          <Count tasks={tasks} />
          <div className="divider" />
          <Tasks
            tasks={tasks}
            handleCheck={handleCheck}
            activateEditTask={activateEditTask}
          />
          <AddTask taskLen={tasks.length} createTask={createTask} />
          {editTask.length > 0 && (
            <EditTask
              editTask={editTask}
              replaceTask={replaceTask}
              deleteTask={deleteTask}
            />
          )}
        </>
      )}
    </>
  );
};

export default TasksWrapper;
