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
import Checkbox from '@mui/material/Checkbox';

const Basket = ({open, setOpen}) => {
    const handleClose = () => setOpen(false);
    const [sum, setSum] = useState(0);
    const {productsBasket, setProductsBasket} = useContext(StoreContext); 

    // Загрузка корзины из localStorage при монтировании
    useEffect(() => {
        const savedBasket = localStorage.getItem('basket');
        if (savedBasket) {
            try {
                const parsedBasket = JSON.parse(savedBasket);
                setProductsBasket(parsedBasket);
            } catch (error) {
                console.error('Ошибка загрузки корзины:', error);
            }
        }
    }, []);

    // Сохранение корзины в localStorage при изменениях
    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(productsBasket));
    }, [productsBasket]);

    // Расчет суммы
    useEffect(() => {
        setSum(
            productsBasket.reduce((acc, product) => {
                return product.isChecked ? acc + product.price * product.count : acc;
            }, 0)
        );
    }, [productsBasket]);

    useEffect(() => {
        setSum(productsBasket.reduce((acc, value) => {
            return value.isChecked ? acc + (value.price * value.count) : acc;
        }, 0))
    },[productsBasket])
    
    const AllChecked = productsBasket.length > 0 && productsBasket.every(product => product.isChecked);

    const toggleAll = () => {
        const newCheckedState = !AllChecked;

        setProductsBasket(prev => 
            prev.map(product => ({
              ...product,
              isChecked: newCheckedState
            }))
        );
    }
    
    const hasSelectedItems = productsBasket.some(product => product.isChecked);

    const handleDeleteSelected = () => {
        setProductsBasket(productsBasket.filter(products => !products.isChecked))
    }

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
                    <Typography
                        sx={{
                            background: "white",
                            width: "100%",
                            borderRadius: "10px",
                        }}
                    >
                        <Button 
                            
                            onClick={() => toggleAll()}
                            disabled={productsBasket.length === 0} 
                            sx={{
                                textTransform: "none",
                                margin: "8px 0 8px 16px"
                            }}
                        >
                            <Checkbox
                                checked={AllChecked}
                                sx={{
                                    padding: "0",
                                    marginRight: "7px"
                                }}
                            />
                            Выбрать все
                        </Button>
                        <Button 
                            onClick={() => handleDeleteSelected()}
                            disabled={!hasSelectedItems}
                            sx={{
                                color: "red",
                                textTransform: "none",
                            }}
                        >
                            Удалить выбранные
                        </Button>
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