import React, {useState} from "react";
import "./style.css";

const AddTodo = ({setTodos, setActive}) => {
    const [value, setValue] = useState('');
    
    const addTodo = (value, code) => {
        if (code === "Enter" && value.length !=0) {
            setTodos((prevState) => {
                const newTodo = {
                    id: prevState.length + 1,
                    completed: false,
                    title: value,
                }
                const newState = [].concat(prevState);
                newState.push(newTodo);
                return newState;
            });
            setValue("");
        }
    }
        
    return(
        <div className="flex">
            <input className="addTodo" value={value} onChange={(event) => setValue(event.target.value)} onKeyUp={(event) => addTodo(value, event.code)}></input>
            <button className="btn-open" onClick={() => setActive(true)}>Open Modal Window</button>
        </div>
    )
}

export default AddTodo;