import {
    Container,
    Box,
    ImageList,
    ImageListItem,
    Typography,
} from "@mui/material";
import { ListItem, ListItemText, List, ListItemIcon } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DoneIcon from "@mui/icons-material/Done";
import { motion } from "framer-motion";
import Image from "next/image";
import classNames from "classnames";

import styles from "./Aboutblock.module.scss";

const benefitsItem = [
    "Швидкий і якісний сервіс",
    "Висока якість продукту",
    "Різноманітність кави Speciality",
    "Можливість придбати чай, каву в зернах і аксесуари для приготування кави вдома",
    "Стильний і комфортний дизайн інтер'єру",
    "Професійний підхід, де все має значення",
];

const itemData = [
    {
        img: "Coffeedoor_10.webp",
        title: "Coffee",
        size: true,
    },
    {
        img: "Coffeedoor_11.webp",
        title: "Coffee",
    },
    {
        img: "Coffeedoor_12.webp",
        title: "Coffee",
    },
    {
        img: "Coffeedoor_13.webp",
        title: "Coffee",
        size: true,
    },
    {
        img: "Coffeedoor_14.webp",
        title: "Coffee",
    },
    {
        img: "Coffeedoor_15.webp",
        title: "Coffee",
    },
    {
        img: "Coffeedoor_16.webp",
        title: "Coffee",
        portrait: true,
    },
    {
        img: "Coffeedoor_17.webp",
        title: "Coffee",
        portrait: true,
    },
    {
        img: "Coffeedoor_18.webp",
        title: "Coffee",
    },
    {
        img: "Coffeedoor_19.webp",
        title: "Coffee",
    },
    {
        img: "Coffeedoor_20.webp",
        title: "Coffee",
    },
    {
        img: "Coffeedoor_21.webp",
        title: "Coffee",
    },
    {
        img: "Coffeedoor_22.webp",
        title: "Coffee",
    },
    {
        img: "Coffeedoor_23.webp",
        title: "Coffee table",
    },
    {
        img: "Coffeedoor_24.webp",
        title: "Coffee table",
    },
    {
        img: "Coffeedoor_25.webp",
        title: "Coffee table",
    },
];

const srcset = (image, width, height, rows = 1, cols = 1) => {
    return {
        src: `${image}?w=${width * cols}&h=${
            height * rows
        }&fit=crop&auto=format`,
        srcSet: `${image}?w=${width * cols}&h=${
            height * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
};

const listVariants = {
    visible: (i) => ({
        opacity: 1,
        transition: {
            delay: i * 0.3,
        },
    }),
    hidden: { opacity: 0 },
};

const theme = createTheme({
    typography: {
        fontSize: 18,
        fontWeightRegular: 300,
    },
});

export default function AboutBlock() {
    return (
        <Container
            id="about_block"
            maxWidth="lg"
            className={styles.about_block}
        >
            <Typography className={styles.about_title}>ПРО НАС</Typography>
            <ImageList
                sx={{
                    height: 800,
                    transform: "translateZ(0)",
                }}
                gap={10}
            >
                {itemData.map((item, i) => {
                    const cols = item.size ? 2 : 1;
                    const rows = item.size ? 2 : 1;
                    const width = item.portrait ? 567 : 850;
                    const height = item.portrait ? 850 : 567;
                    return (
                        <ImageListItem key={i} cols={cols} rows={rows}>
                            <Image
                                // {...srcset(item.img, 250, 200, rows, cols)}
                                src={`/aboutimages/${item.img}`}
                                alt={item.title}
                                width={width}
                                height={height}
                                // placeholder='blur'
                            />
                        </ImageListItem>
                    );
                })}
            </ImageList>
            <Box maxWidth="md" className={styles.about_box}>
                <Typography className={styles.about_slogan}>
                    {"Our coffee – Everything matters"}
                </Typography>
                <ThemeProvider theme={theme}>
                    <Typography
                        className={classNames(
                            styles.about_descr,
                            styles.about_font
                        )}
                    >
                        {`Особливість кав'ярень CoffeeDOOR Brewbar & Coffeeshop в
                        цілісному підході, де все має значення. При приготуванні
                        кави кожна деталь має значення - про це свідчить слоган
                        кав'ярні, який переплітається з однією з основних
                        цінностей бренда, - "Our coffee - Everything matters",
                        що ми успішно підтверджуємо. Основа нашого бізнесу в
                        системному підході, в детальності описаних
                        бізнес-процесів, в дистрибуції кращого кавового
                        обладнання, обсмажуванні кавового зерна рівня
                        Speciality, в унікальній системі навчання бариста і
                        системі контролю якості.`}
                    </Typography>
                    <Typography className={styles.about_font}>
                        Ми - це:
                    </Typography>
                    <List className={styles.list_item}>
                        {benefitsItem.map((item, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                variants={listVariants}
                                custom={i}
                                viewport={{ amount: 0.3, once: true }}
                            >
                                <ListItem disablePadding>
                                    <ListItemIcon>
                                        <DoneIcon />
                                    </ListItemIcon>
                                    <ListItemText>{item}</ListItemText>
                                </ListItem>
                            </motion.div>
                        ))}
                    </List>
                    <Typography
                        className={classNames(
                            styles.about_descr,
                            styles.about_font
                        )}
                    >
                        {`У наших кав'ярнях ви завжди відчуєте атмосферу радості і
                        доброти. Ми цінуємо смак і час наших гостей. Ми знаємо,
                        як звуть постійного гостя, його звички і улюблений
                        напій.`}
                    </Typography>
                    <br />
                </ThemeProvider>
            </Box>
        </Container>
    );
}
