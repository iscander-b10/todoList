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
    const handleBasket = (data) => {
        setProductsBasket((oldData) => {
            return [...oldData, {...data, count: 1}];
        })
    }
    const deleteFromBasket = (id) => {
        setProductsBasket(productsBasket.filter(products => products.id !== id));
    }
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
                {productsBasket.some((elem) => {
                    return elem.id === props.data.id;
                }) 
                ? <Button
                    sx={{
                        backgroundColor: "black",
                        color: "white",
                        textTransform: "none",
                        marginBottom: "10px",
                    }}
                    onClick={() => {deleteFromBasket(props.data.id)}}
                
                >
                    Убрать из корзины
                </Button>
                : <Button
                    sx={{
                        backgroundColor: "#deb0f3",
                        color: "black",
                        textTransform: "none",
                        marginBottom: "10px",
                    }}
                    onClick={() => {handleBasket(props.data)}}
                    
                >
                    В корзину
                </Button>}
            </CardActions>
        </Card>
    )
}

export default CategoryCard;