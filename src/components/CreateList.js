import React from 'react'
// import {Link} from 'react-router-dom';

const CreateList = props => {
    console.log(props.users)

    return (
        <div>
            <section>
                <h2>New List Form</h2>
                <h3>{props.users.email_address}</h3>
                <form 
                    onChange={props.handleChange} 
                    onSubmit={props.handleListSubmit}
                >
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
                        {/* <div><Link to='/new-item'> (+) </Link></div> */}
                        <input className="button" type="submit" 
                            value='Create List'/>
                    </form>
                </section>
        </div>
    )
}

export default CreateList;
