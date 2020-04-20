import React from "react";
import { Link } from "react-router-dom";

const ListItems = (props) => {
  console.log(props);

  let itemStatus = !props.item.status ? "true" : "false";
  itemStatus = true

  // console.log(itemStatus);
  return itemStatus ? (
    <div className={`status-${props.item.status}`}>
      <ul>
        <li className="li-area">
          <Link to={`/items/${props.item._id}`} key={props.item_id}>
            <p className="list-title">{props.item.item}</p>
          </Link>
          {/* <button
            id={`${props.item._id}`}
            status={itemStatus}
            onClick={props.handleUpdateItemStatus}
          >
            <i className="fas fa-check-circle"></i>{" "}
          </button> */}
          <button id={props.item._id} onClick={props.handleListItemDelete}>
            <i className="fas fa-trash"></i>{" "}
          </button>
        </li>
      </ul>
    </div>
  )
  :
  <p>loading...</p>
};

export default ListItems;
