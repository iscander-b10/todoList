import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Category from "./Category/Category";
import Badge from '@mui/material/Badge';
import { storeData } from "./storeData";
import "./style.css";
import Basket from "./Basket";
import StoreContext from "./context/context";

const Store = () => {
    const [openBasket, setOpenBasket] = useState(false);
    const handleOpen = () => setOpenBasket(true);
    const [productsBasket, setProductsBasket] = useState([]);
    
    return (
        <StoreContext.Provider value={{productsBasket, setProductsBasket}}>
            <Box>
                <ul className="store">
                    {Object.keys(storeData).map((key, index) => {
                        return <Category title={storeData[key].title} categoryKey={key} key={index}/>
                    })}
                </ul> 
                <Button 
                    onClick={handleOpen}
                    sx={{
                        position: "fixed",
                        top: "32px",
                        right: "2rem",
                        backgroundColor: "white",
                        width: "60px",
                        height: "60px"
                    }}
                >
                    <Badge badgeContent={productsBasket.length} color="secondary">
                        <ShoppingCartIcon 
                            sx={{
                                color: "black"
                            }}
                            fontSize="large"
                        />
                    </Badge>
                </Button>
                <Basket open={openBasket} setOpen={setOpenBasket}></Basket>
            </Box>
        </StoreContext.Provider>     
    )
}

export default Store;

