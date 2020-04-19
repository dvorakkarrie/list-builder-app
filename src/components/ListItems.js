import React from "react";
import { Link } from "react-router-dom";

const ListItems = (props) => {
  console.log(props);

  return (
    <div>
      <Link to={`/items/${props.item._id}`} key={props.item_id}>
        <ul>
          <li>
            {props.item.item}
            <button
              className="btn-task-list"
              id={props.item._id}
              onClick={props.handleListItemDelete}
            >
              {" "}
              <i className="fas fa-check-circle"></i>{" "}
            </button>
            <button
              className="btn-task-list"
              id={props.item._id}
              onClick={props.handleListItemDelete}
            >
              {" "}
              <i className="fas fa-trash"></i>{" "}
            </button>
          </li>
        </ul>
      </Link>
    </div>
  );
};

export default ListItems;
