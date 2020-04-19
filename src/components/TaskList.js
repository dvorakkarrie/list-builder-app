import React, { useContext } from "react";
import { TaskListContext } from "./TaskListContext";
import Todo from "./Todo";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);

  return (
    <div>
      {tasks.length ? (
        <ul>
          {tasks.map((task) => {
            return <Todo task={task} key={task.id} />;
          })}
        </ul>
      ) : (
        <div className="div-no-tasks">No Items</div>
      )}
    </div>
  );
};
export default TaskList;
