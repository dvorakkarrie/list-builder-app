import React from 'react'

const ItemDetails = props => {
    console.log(props)

    let aUser = props.users.find(user => 
        user._id === props.userId)

    let itemsDetail = aUser.items.find(item => 
        item._id === props.match.params.id)

    console.log(itemsDetail)

    return itemsDetail ? (
        <div className="detail-main-div">
            <section className="detail-display-section">
                <div className='detail-header'>Item Details:
                    <div className='detail-div'>
                        <label className="detail-label">Name:</label>
                        <div className='detail-field'>{itemsDetail.item}</div>
                    </div>
                    <div className='detail-div'>
                        <label className="detail-label">Description:</label>
                        <div className='detail-field'>{itemsDetail.item_desc}</div>
                    </div>
                    <div className='detail-div'>
                        <label className="detail-label">Image Url:</label>
                        <div className='detail-field'>{itemsDetail.image_url}</div>
                    </div>
                </div>
            </section>
            <section className="detail-edit-section">
                <div className='detail-header'>Edit:
                    <form id={itemsDetail._id} 
                        onChange={props.handleChange} 
                        onSubmit={props.handleUpdateItem}>
                        <div className='detail-div'>
                            <label className="detail-label">Name:</label>
                            <input type="text" className='input-box'
                                name="updatedItemName" placeholder="Name" />
                        </div>
                        <div className='detail-div'>
                            <label className="detail-label">Description:</label>
                            <input type="text" className='input-box'
                                name="updatedItemDescription" placeholder="Description" />
                        </div>
                        <div className='detail-div'>
                            <label className="detail-label">Image Url:</label>
                            <input type="text" className='input-box'
                                name="updatedItemImageUrl" placeholder="Image Url" />
                        </div>
                        <input className="button" type="submit" 
                        value='Update Item'/>         
                    </form>
                </div>
            </section>
       </div>

    ) : (
        <div>...loading...</div>
    )
}

export default ItemDetails