import React from "react";
import { Link } from "react-router-dom";

import ListItems from "./ListItems";

const ListDetails = (props) => {
  console.log(props);

  let aUser = props.users.find((user) => user._id === props.userId);

  let allUserItems = aUser.items.map((item) => {
    return (
      <option key={item._id} value={item._id}>
        {item.item}
      </option>
    );
  });
  console.log(allUserItems);
  let listsDetail = aUser.lists.find(
    (list) => list._id === props.match.params.id
  );

  console.log(listsDetail);

  let allItems = listsDetail.items.map((item) => {
    return (
      <ListItems
        key={item._id}
        item={item}
        name="listitems"
        userId={props.userId}
        itemStatus={props.itemStatus}
        handleUpdateItemStatus={props.handleUpdateItemStatus}
        handleListItemDelete={props.handleListItemDelete}
      />
    );
  });

  return listsDetail ? (
    <div className="detail-main-div">
      <section className="detail-edit-section">
        <h2>List Details</h2>
        <form
          id={listsDetail._id}
          onChange={props.handleChange}
          onSubmit={props.handleUpdateList}
        >
          <input className="button" type="submit" value="Update List" />
          <div className="detail-field">{listsDetail.title}</div>
          <div className="detail-div">
            <label className="detail-label">Title:</label>
            <input
              type="text"
              className="input-box"
              name="updatedListTitle"
              placeholder="Title"
            />
          </div>
          <div className="detail-div">
            <label className="detail-label">Image Url:</label>
            <input
              type="text"
              className="input-box"
              name="updatedListImageUrl"
              placeholder="Image Url"
            />
          </div>
        </form>
        <img src={listsDetail.image_url} alt="list" height="15%" width="15%">
            </img>
        <div></div>
        <h3>Item Details:</h3>
        <ul>
          <li>
            <Link to={`/new-listitem/${listsDetail._id}`}>Add item (+)</Link>
          </li>
          <li>
            <label>Choose an item to add (+)</label>
            <select
              className="drop-down-list"
              id="selectItem"
              name="itemId"
              onChange={props.handleChange}
              onClick={props.handleAddListItemSubmit}
            >
              {allUserItems}
            </select>
          </li>
        </ul>
        <div className="item-name">{allItems}</div>
      </section>
    </div>
  ) : (
    <div>...loading...</div>
  );
};

export default ListDetails;
