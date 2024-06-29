import React, { useContext } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import StoreContext from "../../../context/context";

const CategoryCard = (props) => {
    const {productsBasket, setProductsBasket} = useContext(StoreContext); 
    const isAddedToBasket = productsBasket.some((elem) => elem.id === props.data.id);

    const handleBasket = (data) => {
        if (isAddedToBasket) {
            setProductsBasket(productsBasket.filter(products => products.id !== data.id));
        } else {
            setProductsBasket((oldData) => {
                return [...oldData, {...data, count: 1}];
            });
        };
    };


    return(
        <Card
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "22%"
            }}
        >
            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}  
            >
                <Typography
                    sx={{
                        fontWeight: "600",
                        alignSelf: "flex-start",
                        marginBottom: "10px"
                    }}
                >
                    {props.data.name}
                </Typography>
                <CardMedia
                    component="img"
                    height="200"
                    image = {props.data.imageURL}
                />
                <Typography
                    sx={{
                        fontWeight: "600",
                        color: "#ba71dc",
                        marginTop: "10px"
                    }}
                >
                    {props.data.price + "₽"}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    sx={{
                        backgroundColor: isAddedToBasket ? "black" : "#deb0f3",
                        color: isAddedToBasket ? "white" : "black",
                        textTransform: "none",
                        marginBottom: "10px",
                    }}
                    onClick={() => {handleBasket(props.data)}}
                
                >
                    {isAddedToBasket ? "Убрать из корзины" : "В корзину"}
                </Button>
            </CardActions>
        </Card>
    )
}

export default CategoryCard;