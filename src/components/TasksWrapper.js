import { useEffect, useState } from "react";
import Count from "./Count";
import AddTask from "./AddTask";
import Tasks from "./Tasks";
import EditTask from "./EditTask";
import "../styles/taskswrapper.css";

const TasksWrapper = () => {
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

  const replaceTask = (editedTask) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === editedTask.id ? editedTask : task))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
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
            replaceTask={replaceTask}
            deleteTask={deleteTask}
          />
          <AddTask taskLen={tasks.length} createTask={createTask} />
        </>
      )}
    </>
  );
};

export default TasksWrapper;
