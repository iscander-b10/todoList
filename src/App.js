import React from "react";
import TodoList from "./todo/TodoList.js";
import Context from "./context.js";

function App() {

 const [todos, setTodos] = React.useState([
    {id:1, completed: false, title: "Купить хлеб"},
    {id:2, completed: false, title: "Купить масло"},
    {id:3, completed: false, title: "Купить молоко"},
 ])
 
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

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Context.Provider value={{removeTodo}}>
      <div className="wrapper">
        <h1>React Tutorial</h1>

        <TodoList todos={todos} onToggle={toggleTodo}></TodoList>
      </div>
    </Context.Provider>
  );
}

export default App;
