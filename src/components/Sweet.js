import React from 'react'
import Task from './Task'
import { Invisible } from './Invisible'
export const Sweet = ({tasks,onDelete,onAdd, onAdvance}) => {
    return (
        <div className= 'roundThree'>
            {tasks.map((task) =>(
                <Task 
                    key={task.id} 
                    task = {task} 
                    onDelete = {onDelete} 
                    onAdd = {onAdd} 
                    onAdvance = {onAdvance}
                    currentRound = {2}
                    taskPadding = '90px'
                    inputPadding = '90px'
                    placeholder = 'final 4'
                />
            ))
            } 
            <Invisible/> 
            <Invisible/>
            <Invisible/>    
            <Invisible/>    
            <Invisible/>    
            <Invisible/> 
            <Invisible/>                
        </div> 
    )
}
