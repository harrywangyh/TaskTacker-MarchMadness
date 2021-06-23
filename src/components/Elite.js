import React from 'react'
import Task from './Task'
import { Invisible } from './Invisible'
export const Elite = ({tasks,onDelete,onAdd, onAdvance}) => {
    return (
        <div className= 'roundThree'>
            {tasks.map((task) =>(
                <Task 
                    key={task.id} 
                    task = {task} 
                    onDelete = {onDelete} 
                    onAdd = {onAdd} 
                    onAdvance = {onAdvance}
                    currentRound = {3}
                    taskPadding = '200px'
                    inputPadding = '200px'
                    placeholder = 'Championsip'
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
            <Invisible/> 
            <Invisible/>
            <Invisible/>    
            <Invisible/>    
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
