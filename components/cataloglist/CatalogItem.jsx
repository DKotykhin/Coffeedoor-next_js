import { useDispatch } from "react-redux";

import { Typography, Button, Box } from "@mui/material";
import { Card, CardActions, CardContent, CardMedia } from '@mui/material';
import { basketAddItems } from "../basket/BasketListSlice";
import { itemAddItems } from "../itemlist/ItemListSlice";
import Image from 'next/image'
import styles from './Stylelist.module.scss';

const CatalogItem = (props) => {    
    const { title, name, description, price, weight, card_img, order } = props;

    const dispatch = useDispatch();
    
    return (                   
        <Card sx={{ maxWidth: 345 }} className={styles.catalog_list_card}>
            <Image                
                height="345"
                src={require(`../../api/catalog/goodsimages/${card_img}`)}
                alt={name}
            />
            <CardContent>
                <Typography className={styles.catalog_list_card_name}>
                   {title} {name}
                </Typography>
                <Typography className={styles.catalog_list_card_price}>
                   {price}{' грн'}
                </Typography>
                <Box className={styles.catalog_list_card_desc}>
                    {order &&
                        <Typography color="#ff0000" sx={{mb:2}}>
                            {'під замовлення'}
                        </Typography>
                    }
                    <Typography color="text.secondary">
                        {description}
                    </Typography>
                </Box>
                { weight && 
                    <Typography variant="body2" color="text.secondary">
                        {'Вага: '}{weight}
                    </Typography>
                }
            </CardContent>
            <CardActions className={styles.catalog_list_buttons}>
                <Button className={styles.more_button}
                    onClick={() => dispatch(itemAddItems(props))}
                    >
                    Детальніше</Button>
                <Button className={styles.basket_button} 
                    onClick={() => dispatch(basketAddItems({
                        title,
                        name, 
                        price,
                        weight 
                        }))}
                    >
                    В кошик
                </Button>
            </CardActions>
        </Card>       
    )
}

export default CatalogItem;