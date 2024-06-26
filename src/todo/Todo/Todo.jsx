import React, {useState} from "react";
import TodoList from "../TodoList/TodoList.jsx";
import Context from "../../context.jsx";
import AddTodo from "../AddTodo/AddTodo.jsx";

const Todo = () => {
    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const [todos, setTodos] = React.useState([]);
    const [modalActive, setModalActive] = useState(false);

    function toggleTodo(id) {
        setTodos(
          todos.map(todo => {
            if (todo.id === id) {
              todo.completed = !todo.completed;
            }
            return todo;
          })
          )
      }
    
    return(
        <Context.Provider value={{removeTodo}}>
                <h1>Заметки</h1>
                <AddTodo setTodos={setTodos} setActive={setModalActive}></AddTodo>
                <TodoList todos={todos} onToggle={toggleTodo}></TodoList>
        </Context.Provider>
    )
}

export default Todo;