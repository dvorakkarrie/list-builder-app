import React, { useContext, useEffect, useState } from "react";
import { TaskListContext } from "./TaskListContext";

const TaskForm = () => {
  const { addTask, clearList, editItem, editTask } = useContext(
    TaskListContext
  );

  const [title, setTitle] = useState("");

  const handleChange = event => {
    setTitle(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle("");
    } else {
      editTask(title, editItem.id);
    }
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
      console.log(editItem);
    } else {
      setTitle("");
    }
  }, [editItem]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={title}
          type="text"
          placeholder="Add Task..."
          required
        />
        <button type="submit">{editItem ? "Edit Task" : "Add Task"}</button>
        <button onClick={clearList}>Clear</button>
      </form>
    </div>
  );
};

export default TaskForm;
