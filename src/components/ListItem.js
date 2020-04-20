import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
//   console.log(props.item);

  let currentitemstatus = !props.item.status ? "true" : "false";
  console.log(props.item.status)
  console.log(currentitemstatus)

  return currentitemstatus && (
    <div className={`item-${currentitemstatus}`}>
      {/* refactor from a link to a button so object can be passed to the UpdateItem component... or loop through the state events and find item id that we want */}
      <Link
        to={`/items/${props.item._id}/${props.item._id}`}
        key={props.item._id}
        className='item-name'
        item={props}
      >
        {props.item.item}
      </Link>

      <span className='cost'>
        <span>{props.item.cost}</span>

        <button
          className={`btn-task-list`}
          id={`${props.item._id}`}
          status={currentitemstatus}
          onClick={props.itemStatus}
        >
          {" "}
          <i className='fas fa-check-circle'></i>{" "}
        </button>
      </span>
      <button
        className='btn-task-list'
        id={props.item._id}
        onClick={props.handleListItemDelete}
      >
        {" "}
        <i className='fas fa-trash'></i>{" "}
      </button>
    </div>
  );
};
export default Item;
