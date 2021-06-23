import React from 'react'
import Task from './Task'
import { Invisible } from './Invisible'
export const RoundTwo = ({tasks,onDelete,onAdd, onAdvance}) => {
    return (
        <div className= 'roundTwo'>
            {tasks.map((task) =>(
                <Task 
                    key={task.id} 
                    task = {task} 
                    onDelete = {onDelete} 
                    onAdd = {onAdd} 
                    onAdvance = {onAdvance}
                    currentRound = {1}
                    taskPadding = '33px'
                    inputPadding = '33px'
                    placeholder = 'elite 8'
                />
            ))
            } 
            <Invisible/>          
        </div> 
    )
}
