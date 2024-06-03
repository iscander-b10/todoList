import React, { useState } from "react";
import "./style.css";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

const FirstOptionCalculator = () => {
    const [firstValue, setFirstValue] = useState("")
    const [secondValue, setSecondValue] = useState("")
    const [result, setResult] = useState("")
    const [selectValue, setSelectValue] = useState("plus")
   
    const calculate = (type) => {
        const a = Number(firstValue);
        const b = Number(secondValue);
        const handlers = {
            plus: (a,b) => a + b,
            minus: (a,b) => {
                if (b < 0) {
                    return a + b;
                }
                return b - a;
            },
            multiply: (a,b) => a * b,
            divide: (a,b) => a / b,
            exponentiation: (a,b) => Math.pow(a, b),
        };
        setResult(handlers[type](a,b));
    }
    return(
            <Box>
            <TextField 
                value={firstValue} 
                onChange={e => setFirstValue(e.target.value)} 
                type="number">
            </TextField>
            <FormControl>
                <InputLabel>Выберите операцию</InputLabel>
                    <Select
                        value={selectValue}
                        onChange={e => setSelectValue(e.target.value)}
                    >
                    <MenuItem value={"plus"}>Сложить</MenuItem>
                    <MenuItem value={"minus"}>Вычесть</MenuItem>
                    <MenuItem value={"multiply"}>Умножить</MenuItem>
                    <MenuItem value={"divide"}>Разделить</MenuItem>
                    <MenuItem value={"exponentiation"}>Возвести в степень</MenuItem>
                </Select>
            </FormControl>
            <TextField 
                value={secondValue} 
                onChange={e => setSecondValue(e.target.value)} 
                type="number">
            </TextField>
            <Button 
                variant="outlined"
                onClick={()=>calculate(selectValue)}
                >=
            </Button>
            <TextField 
                value={result}>
            </TextField>
        </Box>
    )
}

export default FirstOptionCalculator;