import { useState } from "react";
import styles from "./index.module.css"

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
        <div className={styles.inputContainer}>
            <input className={styles.input} placeholder="Add new task..."  onChange={onChange}/>
            <button className={styles.btn} onClick={onSubmit}>Add</button>
        </div>
    )
}

export default Input