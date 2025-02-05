import React, { useContext } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import StoreContext from "./context/context";
import Stack from '@mui/material/Stack';

const Order = ({sum}) => {
    const {productsBasket} = useContext(StoreContext); 
    const basketCount = productsBasket.reduce((acc, currentValue) => (currentValue.isChecked ? acc + currentValue.count : acc), 0);

    return(
        <Box 
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                backgroundColor: "#ded3e6",
                width: "30%",
                position: "fixed",
                top: "2rem",
                right: "6rem",
                borderRadius: "15px",
                padding: "1rem"
            }}
        >
            <Typography
                sx={{
                    fontWeight: "600",
                    fontSize: "1.3rem"
                }}
            >
                Ваша корзина
            </Typography>
            <Typography>
                Товары ({basketCount})
            </Typography>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Typography
                        sx={{
                            fontWeight: "600"
                        }}
                    >
                        Итого
                    </Typography>
                    <Typography
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "15px",
                            backgroundColor: "#1976d2",
                            color: "white",
                            fontWeight: "600",
                            padding: "7px",
                            letterSpacing: "1px",
                        }}
                    >
                        {sum + " ₽"}
                    </Typography>
                </Stack>
                <Button>
                    Заказать
                </Button>
        </Box>
    )
}

export default Order;