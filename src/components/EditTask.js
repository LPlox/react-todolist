import "../styles/edit-task.css";

const EditTask = ({ task, replaceTask, deleteTask, closeEditField }) => {
  const submitEditTask = (e) => {
    e.preventDefault();
    if (e.target.text.value && e.target.category.value) {
      replaceTask({
        id: task.id,
        text: e.target.text.value,
        category: e.target.category.value,
        completed: task.completed,
      });
    }
    closeEditField();
  };

  return (
    <div className="edit-task">
      <form onSubmit={submitEditTask}>
        <div className="inputs">
          <input
            className="text-input"
            type="text"
            name="text"
            defaultValue={task.text}
          />
          {/* <input
            className="text-input"
            type="text"
            name="category"
            defaultValue={task.category}
          /> */}
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
        </div>
        <div className="buttons">
          <button
            className="delete"
            type="button"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
          <button className="submit" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditTask;
