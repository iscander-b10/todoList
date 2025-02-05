import React, { useContext, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, ButtonGroup } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import StoreContext from "./context/context";
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';

const AddedCard = ({data, basketSum, setBasketSum}) => {
    // const [count, setCount] = useState(1);
    const {productsBasket, setProductsBasket} = useContext(StoreContext); 
    const findProduct = productsBasket.find((elem) => elem.id === data.id);
    
    const handleChange = (event) => {
        const newProductBasket = productsBasket.map((elem) => {{
            if (elem.id === data.id) {
                elem.isChecked = event.target.checked;
            }
            
            return elem;
        }});
        setProductsBasket(newProductBasket);
    };
    
    const deleteCard = (id) => {
        setProductsBasket(productsBasket.filter(products => products.id !== id));
    }

    const changeProductCount = (id, countValue) => setProductsBasket(productsBasket.map((elem) => elem.id === id ? {...elem, count: elem.count + countValue} : elem));

    // //#1
    // const changeProductCount = (id, countValue) => {
    //     setProductsBasket(
    //         productsBasket.map((elem) =>
    //             elem.id === id
    //                 ? { ...elem, count: elem.count + countValue }
    //                 : elem
    //         )
    //     );
    // };

    // //#2
    // const changeProductCount2 = (value, price) => {
    //     setCount (count + value);
    //     setBasketSum(basketSum + price * value);
    // }

    return (
        <Card>
            <CardContent
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Stack
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={3}
                    sx={{
                        width: "70%"
                    }}
                >
                    <Checkbox 
                        checked={findProduct.isChecked}
                        onChange={handleChange}
                    />
                    <CardMedia
                        component="img"
                        height="160"
                        image = {data.imageURL}
                        sx={{
                            width: "25%",
                        }}
                    />
                    <Typography
                        sx={{
                            alignSelf: "flex-start",
                            fontWeight: "600"
                        }}    
                    >
                        {data.name}
                    </Typography>
                </Stack>
                <CardActions
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "0",
                    }}
                >
                    <Stack
                        direction="column"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={1.5}
                    >
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
                                letterSpacing: "1px"
                            }}
                        >
                            {data.price * data.count + " ₽"}
                        </Typography>
                        <ButtonGroup variant="outlined"
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "0.5rem"
                            }}
                        >
                            <Button  onClick={() => changeProductCount(data.id, -1)} disabled={data.count === 1} variant="contained"
                                sx={{
                                    height: "15px",
                                    backgroundColor: "black",
                                    color: "white"

                                }}
                            >
                                {"-"}
                            </Button>
                            <Typography
                                sx={{
                                    fontWeight: "600"
                                }}
                            >
                                {data.count}
                            </Typography>
                            <Button onClick={() => changeProductCount(data.id, 1)} variant="contained"
                                sx={{
                                    height: "15px",
                                    backgroundColor: "black",
                                    color: "white"
                                }}
                            >
                                {"+"}
                            </Button>
                        </ButtonGroup>
                    </Stack>
                    <Button onClick={() => deleteCard(data.id)}>
                        <DeleteIcon sx={{color: "black"}}/>
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}

export default AddedCard;