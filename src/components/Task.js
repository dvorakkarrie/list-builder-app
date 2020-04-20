import React, { useContext } from "react";
import { TaskListContext } from "./TaskListContext";

const Task = (props) => {
  const { removeTask, findItem } = useContext(TaskListContext);

  return (
    <li className="li-area">
      <p className='task-title'>{props.task.title}</p>
      <button className="btn-task-list" onClick={() => findItem(props.task.id)}>
        <i className="fas fa-pen"></i>
      </button>
      <button
        // className="btn-task-list"
        onClick={() => removeTask(props.task.id)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
};
export default Task;
