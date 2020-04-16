import React from 'react'

const UserDetails = props => {

    let usersDetail = props.users.find(user => 
        user._id === props.match.params.id )

    return usersDetail ? (
        <div className="detail-main-div">
            <section className="detail-display-section">
                <div className='detail-header'>User Profile:
                    <div className='detail-div'>
                        <label className="detail-label">User ID:</label>
                        <div className='detail-field'>{usersDetail._id}</div>
                    </div>
                    <div className='detail-div'>
                        <label className="detail-label">First Name:</label>
                        <div className='detail-field'>{usersDetail.first_name}</div>
                    </div>
                    <div className='detail-div'>
                        <label className="detail-label">Last Name:</label>
                        <div className='detail-field'>{usersDetail.last_name}</div>
                    </div>
                    <div className='detail-div'>
                        <label className="detail-label">Email Address:</label>
                        <div className='detail-field'>{usersDetail.email_address}</div>
                    </div>
                    <div className='detail-div'>
                        <label className="detail-label">Photo Url:</label>
                        <div className='detail-field'>{usersDetail.photo_url}</div>
                    </div>
                </div>
            </section>
            <section className="detail-edit-section">
                <div className='detail-header'>Edit:
                    <form id={usersDetail._id} 
                        onChange={props.handleChange} 
                        onSubmit={props.handleUpdateAuthor}>
                        <div className='detail-div'>
                            <label className="detail-label">User ID:</label>
                            <input type="text" className='input-box'
                                name="updatedUserId" placeholder="User ID" />
                        </div>
                        <div className='detail-div'>
                            <label className="detail-label">First Name:</label>
                            <input type="text" className='input-box'
                                name="updatedFirstName" placeholder="First Name" />
                        </div>
                        <div className='detail-div'>
                            <label className="detail-label">Last Name:</label>
                            <input type="text" className='input-box'
                                name="updatedLastName" placeholder="Last Name" />
                        </div>
                        <div className='detail-div'>
                            <label className="detail-label">Email Address:</label>
                            <input type="text" className='input-box'
                                name="updatedEmailAddress" placeholder="Email Address" />
                        </div>
                        <div className='detail-div'>
                            <label className="detail-label">Photo Url:</label>
                            <input type="text" className='input-box'
                                name="updatedPhotoUrl" placeholder="Photo Url" />
                        </div>
                        <input className="button" type="submit" 
                        value='Update User'/>         
                    </form>
                </div>
            </section>
       </div>

    ) : (
        <div>...loading...</div>
    )
}

export default UserDetails