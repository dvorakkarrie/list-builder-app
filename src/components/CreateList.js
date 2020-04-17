import React from 'react'

const CreateList = props => {
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
                <h2>New List Form</h2>
                <form 
                    onChange={props.handleChange} 
                    onSubmit={props.handleListSubmit}
                >
                    <div className='new-div'>
                        <label>Select user's name:</label>
                        <select className="drop-down-list" 
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
                            name='listImageUrl'
                            placeholder="Image URL" />
                        </div>
                        <div className = 'new-div'>
                            <label>Title:</label>
                            <input className='input-box' 
                                type='text' 
                                name='listTitle' 
                                placeholder="Title" />
                        </div>
                        <div className = 'new-div'>
                            <label>Type:</label>
                            <input className='input-box' 
                                type='text' 
                                name='listType' 
                                placeholder="Type" />
                        </div>
                        <div className = 'new-div'>
                            <label>Status:</label>
                            <input className='input-box' 
                                type='text' 
                                name='status' 
                                placeholder="Status" />
                        </div>
                        <input className="button" type="submit" 
                            value='Create List'/>
                    </form>
                </section>
        </div>
    )
}

export default CreateList;
