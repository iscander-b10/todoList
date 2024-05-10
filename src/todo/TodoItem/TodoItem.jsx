import React, {useContext} from "react";
import Context from "../../context";
import Checkbox from '@mui/material/Checkbox';
import BackspaceIcon from '@mui/icons-material/Backspace';
import { pink } from '@mui/material/colors';
import "./style.css"

const TodoItem = ({todo, index, onChange}) => {
    const {removeTodo} = useContext(Context);
    const classes = [];

    if (todo.completed) {
        classes.push('done');
    }

    return(
        <li className="todoItem">
            <span className={classes.join(' ')}>
                <Checkbox
                    checked={todo.completed}
                    onChange={() => onChange(todo.id)}>
                </Checkbox>
                <strong>{index+1}</strong>
                &nbsp;
                {todo.title}
            </span>
            <BackspaceIcon sx={{ color: pink[500] }} style={{cursor: "pointer"}} onClick={() => removeTodo(todo.id)}>&times;</BackspaceIcon>
        </li>
    )
}

export default TodoItem;

