import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SmartphonesList from "./SmartphonesList/SmartphonesList";

const Televisions = () => {
    return(
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                // aria-controls="panel1-content"
                // id="panel1-header"
            >
            Телевизоры
            </AccordionSummary>
            <AccordionDetails>
                <SmartphonesList/>
            </AccordionDetails>
      </Accordion>
    )
}

export default Televisions;