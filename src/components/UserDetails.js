import React from 'react'

const UserDetails = props => {

    let usersDetail = props.users.find(user => 
        user._id === props.match.params.id )

    return usersDetail ? (
        <div className="detail-main-div">
            <section className="detail-display-section">
                <div className='detail-header'>User Profile:
                    <div className='detail-div'>
                        <label className="detail-label">User name:</label>
                        <div className='detail-field'>{usersDetail.email_address}</div>
                    </div>
                    <div className='detail-div'>
                        <label className="detail-label">Status:</label>
                        <div className='detail-field'>{usersDetail.status}</div>
                    </div>
                </div>
            </section>
            <section className="detail-edit-section">
                <div className='detail-header'>Edit:
                    <form id={usersDetail._id} 
                        onChange={props.handleChange} 
                        onSubmit={props.handleUpdateUser}>
                        <div className='detail-div'>
                            <label className="detail-label">User name:</label>
                            <input type="text" className='input-box'
                                name="updatedEmailAddress" placeholder="User name" />
                        </div>
                        <div className='detail-div'>
                            <label className="detail-label">Status:</label>
                            <input type="text" className='input-box'
                                name="updatedStatus" placeholder="Status" />
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