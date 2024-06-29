import React, { useState, useContext, useEffect } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import StoreContext from "./context/context";
import AddedCard from "./AddedCard";
import Order from "./Order";

const Basket = ({open, setOpen}) => {
    const handleClose = () => setOpen(false);
    const [sum, setSum] = useState(0);
    const {productsBasket, setProductsBasket} = useContext(StoreContext); 

    useEffect(() => {
        setSum(productsBasket.reduce((acc, value) => {
            return acc + value.price;
        }, 0))
    },[productsBasket])

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#cbcbcb",
                width: "100%",
                height: "100%",
            }}>
                <Box
                    sx={{
                        backgroundColor: "white",
                        display: "flex",
                        flexDirection: "column",
                        width: "70%"
                    }}
                >
                    <Typography>
                        Корзина
                    </Typography>
                    <ul>
                        {productsBasket.map((data) => {
                            return <AddedCard data={data} key={data.id}/>
                        })}
                    </ul>
                </Box>
                <Order width={"30%"} sum={sum}>

                </Order>
                    
                
                <Button 
                    onClick={handleClose}
                    sx={{
                        position: "fixed",
                        top: "30px",
                        right: "30px",
                    }}
                >
                    <CloseIcon fontSize="large"/>
                </Button>
            </Box>
        </Modal>
    )
}

export default Basket;