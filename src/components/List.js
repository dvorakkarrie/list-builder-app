import React from "react";
import { Link } from "react-router-dom";

const List = (props) => {
  console.log(props);
  return (
    <>
      <Link
        to={`/lists/${props.list._id}`}
        key={props.list._id && <p>props.list._id</p>}
      >
        <ul>
          <li className="li-area">
            <p className="list-title">{props.list.title}</p>

            <button id={props.list._id} onClick={props.handleListDelete}>
              {" "}
              <i className="fas fa-trash"></i>{" "}
            </button>
          </li>
        </ul>
      </Link>
    </>
  );
};

export default List;
