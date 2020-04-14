import React, {useContext} from 'react'
import {TaskListContext} from './TaskListContext'

const Task = props => {
    const {removeTask, findItem} = useContext(TaskListContext)
    return (
        <li className="list-item">
            <span>{props.task.title}</span>
            <div>
                <button onClick={() => findItem(props.task.id)}><i className="fas fa-pen"></i>
                </button>
                <button onClick={() => removeTask(props.task.id)}>
                <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </li>
    )
}
export default Task
