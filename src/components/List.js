import React from "react";
import { Link } from "react-router-dom";

const List = (props) => {
  console.log(props);
  return (
    <div>
      <Link
        to={`/lists/${props.list._id}`}
        key={props.list._id && <p>props.list._id</p>}
      >
        <ul>
          <li className="list-task">
            <p className="list-title">{props.list.title}</p>

            <button
              className="btn-task-list"
              id={props.list._id}
              onClick={props.handleListDelete}
            >
              <i className="fas fa-trash"></i>{" "}
            </button>
          </li>
        </ul>
      </Link>
    </div>
  );
};

export default List;
