import React from "react";

const ItemDetails = (props) => {
  console.log(props);

  let aUser = props.users.find((user) => user._id === props.userId);

  let itemsDetail = aUser.items.find(
    (item) => item._id === props.match.params.id
  );

  console.log(itemsDetail);

  return itemsDetail ? (
    <div className="detail-main-div">
      <section className="detail-edit-section">
        <h2>Item Details</h2>
        <form
          id={itemsDetail._id}
          onChange={props.handleChange}
          onSubmit={props.handleUpdateItem}
        >
          <input className="button" type="submit" value="Update Item" />
          <div className="detail-field">{itemsDetail.item}</div>
          <div className="detail-div">
            <label className="detail-label">Name:</label>
            <input
              type="text"
              className="input-box"
              name="updatedItemName"
              placeholder="Name"
            />
          </div>
          <div className="detail-field">{itemsDetail.item_desc}</div>
          <div className="detail-div">
            <label className="detail-label">Description:</label>
            <input
              type="text"
              className="input-box"
              name="updatedItemDescription"
              placeholder="Description"
            />
          </div>

          <div className="detail-div">
            <label className="detail-label">Image Url:</label>
            <input
              type="text"
              className="input-box"
              name="updatedItemImageUrl"
              placeholder="Image Url"
            />
          </div>
        </form>
            <img src={itemsDetail.image_url} alt="item" height="30%" width="30%">
            </img>
      </section>
    </div>
  ) : (
    <div>...loading...</div>
  );
};

export default ItemDetails;
