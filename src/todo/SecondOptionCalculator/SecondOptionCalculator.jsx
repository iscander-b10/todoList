import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const SecondOptionCalculator = () => {
    const [value, setValue] = useState("");
    const [saveValue, setSaveValue] = useState("");
    const [type, setType] = useState("");
    console.log({value,saveValue,type});
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
    const clear = () => {
        setSaveValue(value);
        setValue("");
    }
    const reset = () => {
        setValue("");
        setSaveValue("");
        setType("");
    }
    const calculate = (type) => {
        let result;
        if (saveValue) {
            result = handlers[type](Number(value), Number(saveValue));
            setSaveValue("");
            setValue(result);
            setType("");
            return;
        }   
        clear();
    }
    const changeType = (e) => {
        setType(e.target.id)
    }
    useEffect(() => {
        if (type) {
            calculate(type);
        }
    }, [type]);
    return(
        <Box>
            <TextField 
                value={value} 
                onChange={e => setValue(e.target.value)} 
                type="number">
            </TextField>
            <ButtonGroup variant="contained">
                <Button onClick={changeType} id="plus">+</Button>
                <Button onClick={() => setType("minus")}>-</Button>
                <Button onClick={() => setType("multiply")}>*</Button>
                <Button onClick={() => setType("divide")}>/</Button>
                <Button onClick={() => calculate(type)}>=</Button>
                <Button onClick={reset}>AC</Button>
            </ButtonGroup>
        </Box>
    )
}

export default SecondOptionCalculator;