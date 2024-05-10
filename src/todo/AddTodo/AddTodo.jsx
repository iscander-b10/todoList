import React, {useState} from "react";
import "./style.css";
import TextField from '@mui/material/TextField';
import { blue} from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: blue,
      },
  });

const AddTodo = ({setTodos}) => {
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
        <ThemeProvider theme={theme}>
            <div className="flex">
                <TextField 
                    color={"primary"}
                    id="outlined-basic" 
                    label="Добавить заметку" 
                    variant="outlined" 
                    value={value} 
                    onChange={(event) => setValue(event.target.value)} 
                    onKeyUp={(event) => addTodo(value, event.code)}
                    fullWidth={true}
                    />
            </div>
        </ThemeProvider>
    )
}

export default AddTodo;