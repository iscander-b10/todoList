import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CategoryList from "./CategoryList/CategoryList";

const Category = ({title, categoryKey}) => {
    return(
        <Accordion defaultExpanded
            sx={{
                backgroundColor: "#ded3e6",
                width: "95%",
            }}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                    fontSize: "1.7rem",
                    fontWeight: "600",
                }}
            >
            {title}
            </AccordionSummary>
            <AccordionDetails>
                <CategoryList categoryKey={categoryKey}/>
            </AccordionDetails>
      </Accordion>
    )
}

export default Category;