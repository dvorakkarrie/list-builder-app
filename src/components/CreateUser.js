import React from 'react'

const CreateUser = props => {
    return (
        <div>
            <div className='new-user-page'>
                <section>
                    <h2>New User Form</h2>
                    <form 
                        onChange={props.handleChange} 
                        onSubmit={props.handleUserSubmit}
                    >
                        <div className = "new-div">
                            <label>Photo URL:</label>
                            <input className='input-box' 
                                type='text' 
                                name='userPhotoUrl' 
                                placeholder="Photo URL" />
                        </div>
                        <div className = 'new-div'>
                            <label>User Name:</label>
                            <input className='input-box' 
                                type='text' 
                                name='userEmailAddress' 
                                placeholder="User name (email address)" />
                        </div>
                        <div className = 'new-div'>
                            <label>Status:</label>
                            <input className='input-box' 
                                type='text' 
                                name='userStatus' 
                                placeholder="Status" />
                        </div>
                        <div className = 'new-div'>
                            <label>First name:</label>
                            <input className='input-box' 
                                type='text' 
                                name='userFirstName'
                                placeholder="First Name" />
                        </div>
                        <div className = 'new-div'>
                            <label>Last name:</label>
                            <input className='input-box' 
                                type='text' 
                                name='userLastName'
                                placeholder="Last Name" />
                        </div>
                        <input className="button" type="submit" 
                            value='Create User'/>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default CreateUser;
