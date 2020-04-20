import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  console.log(props);

  return (
    <>
      <Link to={`/items/${props.item._id}`} key={props.item_id}>
        <ul>
          <li className="li-area">
            <p className="item-name">{props.item.item}</p>
            <button
              id={props.item._id}
              onClick={props.handleItemDelete}
            >
              {" "}
            <i className="fas fa-trash"></i>{" "}
            </button>
          </li>
        </ul>
      </Link>
    </>
  );
};

export default Item;
