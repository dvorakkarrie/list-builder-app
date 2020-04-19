import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  console.log(props);

  return (
    <div>
      <Link to={`/items/${props.item._id}`} key={props.item_id}>
        <ul>
          <li className="list-task">
            <p className="list-title">{props.item.item}</p>

            <button
              className="btn-task-list"
              id={props.item._id}
              onClick={props.handleItemDelete}
            >
              <i className="fas fa-trash"></i>{" "}
            </button>
          </li>
        </ul>
      </Link>
    </div>
  );
};

export default Item;
