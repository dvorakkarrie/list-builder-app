import React from "react";
// import {Link} from 'react-router-dom';

const CreateList = (props) => {
  console.log(props.users);

  return props.isAuthenticated ? (
    <div className='new-page'>
      <section>
        <h2>New List Form</h2>
        <form onChange={props.handleChange} onSubmit={props.handleListSubmit}>
          <div className="new-div">
            <label>Image URL:</label>
            <input
              className="input-box"
              type="text"
              name="listImageUrl"
              placeholder="Image URL"
            />
          </div>
          <div className="new-div">
            <label>Title:</label>
            <input
              className="input-box"
              type="text"
              name="listTitle"
              placeholder="Title"
              required
            />
          </div>
          {/* <div><Link to='/new-item'> (+) </Link></div> */}
          <input className="button" type="submit" value="Create List" />
        </form>
      </section>
    </div>
  ) : (
    <div className="div-not-signed-in">Please sign in first...</div>
  );
};

export default CreateList;
