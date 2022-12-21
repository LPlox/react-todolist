import { useState } from "react";
import AddTask from "./components/AddTask";
import Date from "./components/Date";
import Tasks from "./components/Tasks";
import "./styles/style.css";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Upload 1099-R to TurboTax",
      category: "Finance",
      completed: false,
    },
    {
      id: 2,
      text: "Print parking passes",
      category: "Finance",
      completed: false,
    },
    {
      id: 3,
      text: "Submit 2019 tax return",
      category: "Wedding",
      completed: false,
    },
    {
      id: 4,
      text: "Sign contract, send back",
      category: "Freelance",
      completed: false,
    },
    {
      id: 5,
      text: "Hand sanitizer",
      category: "Shopping List",
      completed: false,
    },
    {
      id: 6,
      text: "Check on FedEx Order",
      category: "Freelance",
      completed: true,
    },
    {
      id: 7,
      text: "Look at new plugins",
      category: "Freelance",
      completed: true,
    },
    {
      id: 8,
      text: "Respond to catering company",
      category: "Freelance",
      completed: true,
    },
    {
      id: 9,
      text: "Reschedule morning coffee",
      category: "Freelance",
      completed: true,
    },
    {
      id: 10,
      text: "Check the latest on Community",
      category: "Freelance",
      completed: true,
    },
  ]);

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

  return (
    <div className="App">
      <section>
        <Date />
        <Tasks tasks={tasks} handleCheck={handleCheck} />
        <AddTask taskLen={tasks.length} createTask={createTask} />
      </section>
    </div>
  );
};

export default App;
