import {FaTimes} from 'react-icons/fa';
import AddTask from './AddTask';
import { useEffect } from 'react';
const Task = ({task, onDelete, onAdd, onAdvance, currentRound, taskPadding, inputPadding, placeholder}) => {
    const handleDoubleClick = () =>{
        onAdvance(task.id,currentRound);
    }
    return (
        task.used?
        (
        <div className='task' onDoubleClick = {handleDoubleClick}
            style = {{
                marginTop: taskPadding,
            }}
        >
            <h3>{task.text}
            <FaTimes
                style={{color:'red', cursor: 'pointer'}
                }
                onClick = {() => onDelete(task.id,currentRound)}
                />
            </h3>
        </div>)
        :
        <div>
            <AddTask id = {task.id} onAdd = {onAdd} currentRound = {currentRound} placeholder = {placeholder} inputPadding = {inputPadding}/>
        </div>
    )
}

export default Task
