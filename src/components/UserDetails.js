import React from 'react'

const UserDetails = props => {
    console.log(props)

    let usersDetail = props.users.find(user => 
        user._id === props.match.params.id )

    console.log(usersDetail)
    return (
        <div className="detail-main-div">
            <section className="detail-display-section">
                <div className='detail-div'>
                    <label className="detail-label">
                        User:
                    </label>
                    <div className='detail-field'>
                        {usersDetail.first_name}
                    </div>
                </div>
            </section>
       </div>
    )
}

export default UserDetails