import React from "react";

const CreateListItem = (props) => {
  console.log(props.users);

  return props.isAuthenticated ? (
    <div className='new-page'>
      <section>
        <h2>New Item Form</h2>
        <form
          onChange={props.handleChange}
          onSubmit={props.handleListItemSubmit}
        >
          <div className="new-div">
            <label>Image URL:</label>
            <input
              className="input-box"
              type="text"
              name="itemImageUrl"
              placeholder="Image URL"
            />
          </div>
          <div className="new-div">
            <label>Name:</label>
            <input
              className="input-box"
              type="text"
              name="itemName"
              placeholder="Name"
            />
          </div>
          <div className="new-div">
            <label>Description:</label>
            <input
              className="input-box"
              type="text"
              name="itemDescription"
              placeholder="Description"
            />
          </div>
          <input className="button" type="submit" value="Create Item" />
        </form>
      </section>
    </div>
  ) : (
    <div className="div-not-signed-in">Please sign in first...</div>
  );
};

export default CreateListItem;
