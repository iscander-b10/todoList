import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const CategoryCard = (props) => {
    return(
        <Card>
            <CardContent>
                <Typography>{props.data.name}</Typography>
                <CardMedia
                    component="img"
                    height="194"
                    image = {props.data.imageURL}
                    // alt="Paella dish"
                />
                <Typography>{props.data.price + "₽"}</Typography>
            </CardContent>
            <CardActions>
                <Button>В Корзину</Button>
            </CardActions>
        </Card>
    )
}

export default CategoryCard;