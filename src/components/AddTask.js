import { useState } from "react";
const AddTask = ({id,onAdd, currentRound , placeholder, inputPadding}) => {
    const [text,setText] = useState('');
    const [day,setDay] = useState('');
    
    const onSubmit = (e) =>{
        e.preventDefault();
        if(text === ''){
            alert('please add a task');
            return;
        }
        onAdd(id,{
                text,
                day,
        },currentRound)
        setText('');
        setDay('');
    }
    return (
        <form className = 'add-form' onSubmit = {onSubmit }>
            <div className = 'form-control' >
                <input 
                type='text' 
                placeholder = {placeholder} 
                value = {text} 
                onChange={(e)=> setText(e.target.value)}
                style = {{
                    marginTop: inputPadding,
                }}
                 />
            </div>
            
        </form>
    )
}

export default AddTask
