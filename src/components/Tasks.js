import Task from "./Task";


const Tasks = ({tasks,onDelete,onAdd, onAdvance}) => {
    
    return (
        <div className = 'roundOne'>
            {tasks.map((task) =>(
                <Task 
                    key={task.id} 
                    task = {task} 
                    onDelete = {onDelete} 
                    onAdd = {onAdd} 
                    onAdvance = {onAdvance}
                    currentRound = {0}
                    taskPadding = '5px'
                    inputPadding = '5px'
                    placeholder = 'add task'
                />
            ))
            }
        </div> 
    )
}

export default Tasks
