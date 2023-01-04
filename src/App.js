import Date from "./components/Date";
import "./styles/style.css";
import TasksWrapper from "./components/TasksWrapper";

const App = () => {
  return (
    <main>
      <Date />
      <TasksWrapper />
    </main>
  );
};

export default App;
