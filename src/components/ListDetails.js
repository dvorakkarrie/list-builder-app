import React from 'react'

const ListDetails = props => {
    console.log(props)

    let aUser = props.users.find(user => 
        user._id === props.userId)
    
    console.log(aUser)

    let listsDetail = aUser.lists.find(list => 
        list._id === props.match.params.id)

    console.log(listsDetail)

    return listsDetail ? (
        <div className="detail-main-div">
            <section className="detail-display-section">
                <div className='detail-header'>List Details:
                    <div className='detail-div'>
                        <label className="detail-label">Title:</label>
                        <div className='detail-field'>{listsDetail.title}</div>
                    </div>
                    <div className='detail-div'>
                        <label className="detail-label">Image Url:</label>
                        <div className='detail-field'>{listsDetail.image_url}</div>
                    </div>
                </div>
            </section>
            <section className="detail-edit-section">
                <div className='detail-header'>Edit:
                    <form id={listsDetail._id} 
                        onChange={props.handleChange} 
                        onSubmit={props.handleUpdateList}>
                        <div className='detail-div'>
                            <label className="detail-label">Title:</label>
                            <input type="text" className='input-box'
                                name="updatedListTitle" placeholder="Title" />
                        </div>
                        <div className='detail-div'>
                            <label className="detail-label">Image Url:</label>
                            <input type="text" className='input-box'
                                name="updatedListImageUrl" placeholder="Image Url" />
                        </div>
                        <input className="button" type="submit" 
                        value='Update List'/>         
                    </form>
                </div>
            </section>
       </div>

    ) : (
        <div>...loading...</div>
    )
}

export default ListDetails
