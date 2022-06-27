import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from 'next/router'

import { Backdrop, Box, Modal, Typography, Divider, Fade } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import {
    basketRemoveItems,
    basketAddQuantity,
    basketRemoveQuantity,
    sendDataToTelegram,
} from "./BasketListSlice";
import BasketIcon from "./BasketIcon";
import BasketForm from "./BasketForm";

import styles from './Basket.module.scss'

const StyledModal = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    maxWidth: "90%",
    maxHeight: "80%",
    overflowY: "scroll",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 3,
};

const Basket = () => {
    const [open, setOpen] = React.useState(false);
    const router = useRouter()

    const { basketdata } = useSelector((state) => state.basket);
    const dispatch = useDispatch();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleRemove = (basketItem) => {
        dispatch(basketRemoveItems(basketItem));
    };
    const handleDecrement = (basketItem) => {
        dispatch(basketRemoveQuantity(basketItem));
    };
    const handleIncrement = (basketItem) => {
        dispatch(basketAddQuantity(basketItem));
    };

    const onSubmitForm = (data) => {
        console.log(data);
        dispatch(sendDataToTelegram([data, ...basketdata]));
        setOpen(false);
        if (basketdata.length) {
            console.log(basketdata);
            router.push("/thanks");
        }
    };

    return (
        <>
            <BasketIcon handleOpen={handleOpen} />
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
                    <Box sx={StyledModal} className={styles.modal}>
                        <CloseIcon
                            className={styles.modal_close}
                            onClick={handleClose}
                        />
                        <Typography className={styles.modal_title} component="h2">
                            Ваше замовлення:
                        </Typography>
                        {basketdata.length > 0 ? (
                            basketdata.map((item, i) => (
                                <Box key={i}>
                                    <Box className={styles.modal_block}>
                                        <Typography className={styles.modal_name}>
                                            {item.title} {item.name}
                                        </Typography>
                                        <CloseIcon
                                            className={styles.modal_icon}
                                            onClick={() =>
                                                handleRemove(item.name)
                                            }
                                        />
                                    </Box>
                                    <Typography className={styles.modal_price}>
                                        <RemoveCircleOutlineIcon
                                            className={styles.add_remove_icons}
                                            onClick={() =>
                                                handleDecrement(item.name)
                                            }
                                        />{" "}
                                        {item.quantity}{" "}
                                        <AddCircleOutlineIcon
                                            className={styles.add_remove_icons}
                                            onClick={() =>
                                                handleIncrement(item.name)
                                            }
                                        />
                                        {" x "}
                                        {item.price}
                                        {" грн = "}
                                        {item.quantity * item.price}
                                        {" грн"}
                                    </Typography>
                                    <Divider sx={{ mt: 2 }} />
                                </Box>
                            ))
                        ) : (
                            <Box className={styles.modal_subtitle}>Кошик пустий</Box>
                        )}
                        <Typography className={styles.modal_total}>
                            {"Всього: "}
                            {basketdata.reduce(
                                (sum, currentValue) =>
                                    sum +
                                    +currentValue.price * currentValue.quantity,
                                0
                            )}
                            {" грн"}
                        </Typography>                       
                        <BasketForm onSubmit={onSubmitForm} />                        
                    </Box>
                </Fade>
            </Modal>
        </>
    );
};

export default Basket;
