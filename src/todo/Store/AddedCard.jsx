import React, { useContext, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, ButtonGroup } from '@mui/material';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import StoreContext from "./context/context";

const AddedCard = ({data, basketSum, setBasketSum}) => {
    const [count, setCount] = useState(1);
    const {productsBasket, setProductsBasket} = useContext(StoreContext); 
    const deleteCard = (id) => {
        setProductsBasket(productsBasket.filter(products => products.id !== id));
    }

    //#1
    const changeProductCount = (id, countValue) => {
        setProductsBasket(
            productsBasket.map((elem) =>
                elem.id === id
                    ? { ...elem, count: elem.count + countValue }
                    : elem
            )
        );
    };

    //#2
    const changeProductCount2 = (value, price) => {
        setCount (count + value);
        setBasketSum(basketSum + price * value);
    }

    return (
        <Card>
            <CardContent
                sx={{
                    display: "flex",
                    width: "100%"
                }}
            >
                <CardMedia
                    component="img"
                    height="200"
                    image = {data.imageURL}
                    sx={{
                        width: "20%"
                    }}
                />
                <Typography>
                    {data.name}
                </Typography>
                <Box>
                    <Typography>
                        {data.price + "₽"}
                    </Typography>
                    <CardActions>
                        <Button onClick={() => deleteCard(data.id)}>
                            <DeleteIcon/>
                        </Button>
                        <ButtonGroup variant="outlined">
                        <Button  onClick={() => changeProductCount2(-1, data.price)} disabled={count === 1}>{"-"}</Button>
                        <Typography>{count}</Typography>
                        <Button onClick={() => changeProductCount2(1, data.price)}>{"+"}</Button>
                        </ButtonGroup>
                    </CardActions>
                </Box>
            </CardContent>
        </Card>
    )
}

export default AddedCard;