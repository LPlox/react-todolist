import { useState } from "react";
import "../styles/add-task.css";

const AddTask = ({ taskLen, createTask }) => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [showErrorMsg, setShowErrorMsg] = useState({
    textErr: false,
    categoryErr: false,
  });

  const submitNewTask = (e) => {
    e.preventDefault();
    if (e.target.text.value && e.target.category.value) {
      createTask({
        id: ++taskLen,
        text: e.target.text.value,
        category: e.target.category.value,
        completed: false,
      });

      Array.from(e.target.querySelectorAll("input")).map(
        (input) => (input.value = "")
      );
    } else {
      e.target.text.value
        ? setShowErrorMsg((prev) => ({ ...prev, textErr: false }))
        : setShowErrorMsg((prev) => ({ ...prev, textErr: true }));
      e.target.category.value
        ? setShowErrorMsg((prev) => ({ ...prev, categoryErr: false }))
        : setShowErrorMsg((prev) => ({ ...prev, categoryErr: true }));
    }
  };

  return (
    <div className="add-task">
      <button
        className="add-btn"
        onClick={() => setShowAddTask((prev) => !prev)}
      ></button>
      {showAddTask && (
        <form onSubmit={submitNewTask} className="inputs">
          <input
            className="text-input"
            type="text"
            name="text"
            placeholder="Title"
          />
          {showErrorMsg.textErr && <span>Please write a title</span>}
          <select name="category" className="text-input">
            <option value="&#128176; Finance">&#128176; Finance</option>
            <option value="&#128187; Work">&#128187; Work</option>
            <option value="&#128092; Shopping">&#128092; Shopping</option>
            <option value="&#128213; Education">&#128213; Education</option>
            <option value="&#128400; Health and wellness">
              &#128400; Health and wellness
            </option>
            <option value="&#128161; General task">
              &#128161; General task
            </option>
            <option value="&#127919; Personal">&#127919; Personal</option>
            <option value="&#127822; Food">&#127822; Food</option>
          </select>
          {showErrorMsg.categoryErr && <span>Please add a category</span>}
          <div className="buttons">
            <button className="submit" type="submit">
              Add
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddTask;
