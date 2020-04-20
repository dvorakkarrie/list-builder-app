import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
//   console.log(props);

  let currentitemstatus = !props.item.itemStatus ? "true" : "false";
  let updateItem = props.item;
//   console.log(updateItem);

  return (
    <div className={`item-${props.item.itemStatus}`}>
      {/* refactor from a link to a button so object can be passed to the UpdateItem component... or loop through the state events and find item id that we want */}
      <Link
        to={`/items/${props.item._id}/${props.item._id}`}
        key={props.item._id}
        updateItem={props.updateItem}
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
          itemstatus={currentitemstatus}
          onClick={props.handleUpdateItemStatus}
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
