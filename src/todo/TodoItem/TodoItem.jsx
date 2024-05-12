import React, {useContext} from "react";
import Context from "../../context";
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
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
                &nbsp;
                {todo.title}
            </span>
            <DeleteIcon sx={{ color: pink[500] }} style={{cursor: "pointer"}} onClick={() => removeTodo(todo.id)}>&times;</DeleteIcon>
        </li>
    )
}

export default TodoItem;

