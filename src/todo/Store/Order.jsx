import React, { useContext } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import StoreContext from "./context/context";

const Order = ({width,sum}) => {
    const {productsBasket} = useContext(StoreContext); 
    return(
        <Box 
            sx={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
                width: width
            }}
        >
                    <Typography>
                        Ваша корзина
                    </Typography>
                    <Typography>
                        Товары ({productsBasket.length})
                    </Typography>
                    <Box>
                        <Typography>
                            Итого
                        </Typography>
                        <Typography>
                            {sum}
                        </Typography>
                        <Button>
                            Заказать
                        </Button>
                    </Box>
                </Box>
    )
}

export default Order;