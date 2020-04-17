import React from 'react'

const CreateItem = props => {
    console.log(props)

    let allUsers = props.users.map(user => {
        return (   
            <option key={user._id} value={user._id}>
                {user.email_address}
            </option>
        )
    })    

    return (
        <div>
            <section>
                <h2>New Item Form</h2>
                <form 
                    onChange={props.handleChange} 
                    onSubmit={props.handleItemSubmit}
                >
                    <div className='new-div'>
                        <label>Select user's name:</label>
                        <select className="drop-down-item" 
                            id="selectedUser" name="userId"
                            onChange={props.handleChange}
                            onClick={props.handleAllUsersSearch}>
                                {allUsers}
                            </select>
                    </div>
                    <div className = "new-div">
                        <label>Image URL:</label>
                        <input className='input-box' 
                            type='text' 
                            name='itemImageUrl'
                            placeholder="Image URL" />
                        </div>
                        <div className = 'new-div'>
                            <label>Name:</label>
                            <input className='input-box' 
                                type='text' 
                                name='itemName' 
                                placeholder="Name" />
                        </div>
                        <div className = 'new-div'>
                            <label>Description:</label>
                            <input className='input-box' 
                                type='text' 
                                name='itemDescription' 
                                placeholder="Description" />
                        </div>
                        {/* <div><Link to='/new-item'> (+) </Link></div> */}
                        <input className="button" type="submit" 
                            value='Create Item'/>
                    </form>
                </section>
        </div>
    )
}

export default CreateItem;