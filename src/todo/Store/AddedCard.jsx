import React, { useContext } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import StoreContext from "./context/context";

const AddedCard = ({data}) => {
    const {productsBasket, setProductsBasket} = useContext(StoreContext); 
    const deleteCard = (id) => {
        setProductsBasket(productsBasket.filter(products => products.id !== id));
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
                            <DeleteIcon>

                            </DeleteIcon>
                        </Button>
                    </CardActions>
                </Box>
            </CardContent>
        </Card>
    )
}

export default AddedCard;