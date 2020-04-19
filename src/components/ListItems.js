import React from "react";
import { Link } from "react-router-dom";

const ListItems = (props) => {
  console.log(props);

  let itemStatus = !props.item.status ? "true" : "false"

  console.log(itemStatus)
  return (
    <div className={`status-${props.item.status}`}>
      <ul>
        <li>
          <Link to={`/items/${props.item._id}`} key={props.item_id}>
            {props.item.item}{" "}
          </Link>
          <button
            className={`btn-task-list`}
            id={`${props.item._id}`}
            status={itemStatus}
            onClick={props.handleUpdateItemStatus}
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
    </div>
  );
};

export default ListItems;
