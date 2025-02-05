import React, { useState, useContext, useEffect } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import StoreContext from "./context/context";
import AddedCard from "./AddedCard";
import Order from "./Order";
import Stack from '@mui/material/Stack';

const Basket = ({open, setOpen}) => {
    const handleClose = () => setOpen(false);
    const [sum, setSum] = useState(0);
    const {productsBasket, setProductsBasket} = useContext(StoreContext); 

    useEffect(() => {
        setSum(productsBasket.reduce((acc, value) => {
            return value.isChecked ? acc + (value.price * value.count) : acc;
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
                width: "100%",
                height: "100%",
                backgroundColor: "#6E67AB",
                overflow: "auto"
            }}>
                <Stack sx={{
                    backgroundColor: "#ded3e6",
                    padding: "2rem 3rem 4rem 3rem",
                    width: "50%",
                    borderRadius: "15px",
                    margin: "2rem",
                }}
                    direction="column"
                    alignItems="flex-start"
                    spacing={3}
                >
                    <Typography
                        sx={{
                            fontWeight: "600",
                            fontSize: "2.5rem"
                        }}
                    >
                        Корзина
                    </Typography>
                    <ul className="cardList">
                        {productsBasket.map((data) => {
                            return <AddedCard data={data} key={data.id} basketSum={sum} setBasketSum={setSum}/>
                        })}
                    </ul>
                </Stack>
                <Order sum={sum}>

                </Order>
                <Button 
                    onClick={handleClose}
                    sx={{
                        position: "fixed",
                        top: "30px",
                        right: "30px",
                        color: "red"
                    }}
                >
                    <CloseIcon fontSize="large"/>
                </Button>
            </Box>
        </Modal>
    )
}

export default Basket;