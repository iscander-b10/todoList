import React from "react";
import TodoItem from "./TodoItem.jsx";

const TodoList = (props) => {
    if (props.todos.length) {
        return (
            <ul className="todoList">
                { props.todos.map((todo, index) => {
                    return <TodoItem 
                        todo={todo} 
                        key={todo.id} 
                        index={index} 
                        onChange={props.onToggle}>
                    </TodoItem>
                }) }
            </ul>
        )
    }

    return null;
}

export default TodoList;
    
