import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CategoryList from "./CategoryList/CategoryList";

const Category = ({title}) => {
    return(
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                // aria-controls="panel1-content"
                // id="panel1-header"
            >
            {title}
            </AccordionSummary>
            <AccordionDetails>
                <CategoryList categoryKey={title}/>
            </AccordionDetails>
      </Accordion>
    )
}

export default Category;