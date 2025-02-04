import { useState } from "react";

const Input = (props) => {
    const [inputValue , setInputValue] = useState('');
    const onChange = (event) => {
        setInputValue(event.target.value)
    }
    const onSubmit = () => {
        const newTasks = {
            title: inputValue,
            isComplete: false
        }
    
        const newArr = [...props.tasks, newTasks];

        props.setTasks(newArr)
    }

    return (
        <div>
            <input placeholder="Add new task..."  onChange={onChange}/>
            <button onClick={onSubmit}>Add</button>
        </div>
    )
}

export default Input