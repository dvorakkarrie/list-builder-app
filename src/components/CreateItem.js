import React from 'react'

const CreateItem = props => {
    console.log(props.users)

    return (
        <div>
            <section>
                <h2>New Item Form</h2>
                <h3>{props.users.email_address}</h3>
                <form 
                    onChange={props.handleChange} 
                    onSubmit={props.handleItemSubmit}
                >
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