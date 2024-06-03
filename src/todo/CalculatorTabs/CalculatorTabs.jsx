import React, { useState } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FirstOptionCalculator from "../FirstOptionCalculator/FirstOptionCalculator";
import SecondOptionCalculator from "../SecondOptionCalculator/SecondOptionCalculator";

const CalculatorTabs = () => {
    const [value,setValue] = useState(0);
    const handleChange = (e, newValue) => {
        setValue(newValue);
    }
    return(
        <div>
            <Tabs onChange={handleChange} value={value}>
                <Tab label="Первый вариант"></Tab>
                <Tab label="Второй вариант"></Tab>
            </Tabs>
            {value === 0 ? <FirstOptionCalculator/> : <SecondOptionCalculator/>}
            
        </div>
    )
}

export default CalculatorTabs;