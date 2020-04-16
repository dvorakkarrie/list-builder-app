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
                            <label>Image URL:</label>
                            <input className='input-box' 
                                type='text' 
                                name='userPhotoUrl' 
                                placeholder="Photo URL" />
                        </div>
                        <div className = 'new-div'>
                            <label>User Id:</label>
                            <input className='input-box' 
                                type='text' 
                                name='userId' 
                                placeholder="User Id" />
                        </div>
                        <div className = 'new-div'>
                            <label>First Name:</label>
                            <input className='input-box' 
                                type='text' 
                                name='userFirstName'
                                placeholder="First Name" />
                        </div>
                        <div className = 'new-div'>
                            <label>Last Name:</label>
                            <input className='input-box' 
                                type='text' 
                                name='userLastName'
                                placeholder="Last Name" />
                        </div>
                        <div className = 'new-div'>
                            <label>Email Address:</label>
                            <input className='input-box' 
                                type='text' 
                                name='userEmailAddress'
                                placeholder="Email Address" />
                        </div>
                        <div className = 'new-div'>
                            <label>Status:</label>
                            <input className='input-box' 
                                type='text' 
                                name='userStatus'
                                placeholder="Status" />
                        </div>
                        <input className="button" type="submit" 
                            value='Create User'/>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default CreateUser
