import "../styles/count.css";

const Count = ({ tasks }) => {
  return (
    <p className="count">
      {tasks.filter((task) => task.completed == false).length} incomplete,{" "}
      {tasks.filter((task) => task.completed).length} completed
    </p>
  );
};

export default Count;
