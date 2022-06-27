import * as React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Backdrop, Box, Modal, Fade, Button, Typography } from "@mui/material";
import { ListItem, ListItemText, List, ListItemIcon } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CloseIcon from "@mui/icons-material/Close";

import { itemRemoveQuantity, itemAddQuantity } from "./ItemListSlice";
import { basketAddFromItemPage } from "../basket/BasketListSlice";

import SwipeImage from "./SwipeImage";

import styles from "./itemlist.module.scss";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    height: 600,
    overflowY: "scroll",
    maxWidth: "90%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    pt: 2,
};

export default function ItemList() {
    const [open, setOpen] = React.useState(false);
    const handleClose = () => setOpen(false);

    const { itemdata } = useSelector((state) => state.itempage);
    const {
        name,
        title,
        price,
        quantity,
        weight,
        sort,
        tm,
        description,
        country,
        additional_text_1,
        additional_text_2,
        additional_list,
    } = itemdata;

    const dispatch = useDispatch();
    const handleDecrement = () => {
        dispatch(itemRemoveQuantity());
    };
    const handleIncrement = () => {
        dispatch(itemAddQuantity());
    };
    const handleBasket = (item) => {
        setOpen(false);
        dispatch(basketAddFromItemPage(item));
    };

    React.useEffect(() => {
        if (Object.keys(itemdata).length) {
            setOpen(true);
        }
    }, [itemdata]);

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <Box sx={style} className={styles.item_list}>
                        <CloseIcon
                            className={styles.item_list_close}
                            onClick={handleClose}
                        />
                        <SwipeImage />

                        <Typography sx={{ mt: 2 }} variant="h6" component="h2">
                            {title} {name}
                        </Typography>
                        <Typography className={styles.item_list_price}>
                            {price}
                            {" грн"}
                        </Typography>
                        <Typography className={styles.item_list_quantity}>
                            <RemoveCircleOutlineIcon
                                className={styles.item_list_remove}
                                onClick={handleDecrement}
                            />
                            {quantity}
                            <AddCircleOutlineIcon
                                className={styles.item_list_add}
                                onClick={handleIncrement}
                            />
                            <Button
                                className={styles.item_list_button}
                                onClick={() => handleBasket(itemdata)}
                            >
                                В Кошик
                            </Button>
                        </Typography>
                        {weight && (
                            <Typography variant="body2">
                                {"Вага: "}
                                {weight}
                            </Typography>
                        )}
                        {sort && (
                            <Typography variant="body2">{sort}</Typography>
                        )}
                        {tm && (
                            <Typography variant="body2">
                                {"Виробник: "}
                                {tm}
                            </Typography>
                        )}
                        {country && (
                            <Typography variant="body2">
                                {"Країна: "}
                                {country}
                            </Typography>
                        )}
                        <Typography sx={{ mt: 2, mb: 2 }} variant="body2">
                            {description}
                        </Typography>
                        {additional_text_1?.map((item, i) => (
                            <Typography key={i} variant="body2">
                                {item}
                            </Typography>
                        ))}
                        <List className="list">
                            {additional_list?.map((item, i) => (
                                <ListItem disablePadding key={i}>
                                    <ListItemIcon>
                                        <DoneIcon />
                                    </ListItemIcon>
                                    <ListItemText>{item}</ListItemText>
                                </ListItem>
                            ))}
                        </List>
                        {additional_text_2?.map((item, i) => (
                            <Typography key={i} variant="body2" sx={{ mt: 2 }}>
                                {item}
                            </Typography>
                        ))}
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
