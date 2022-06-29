import {
    Container,
    Typography,
    ListItem,
    ListItemText,
    Link,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import styles from "./Infoblock.module.scss";

const InfoBlock = () => {
    return (
        <Container maxWidth="md" className={styles.infoblock}>
            <Typography className={styles.infoblock_title} component="h1">
               Кав&apos;ярня та магазин свіжообсмаженої кави CoffeeDoor
            </Typography>
            <Typography className={styles.infoblock_subtitle} component="h2">
                CoffeeDOOR – це кавовий бренд, який по&apos;єднує в собі
                свіжообсмажену каву рівня Speciality, кращі кавові технології,
                стильний дизайнерський інтер&apos;єр, швидкий і дружній сервіс
            </Typography>
            <ListItem>
                <AccessTimeIcon className={styles.infoblock_icon} />
                <ListItemText className={styles.infoblock_items}>
                    <Typography className={styles.infoblock_item_1}>
                        Режим роботи кав&apos;ярні
                    </Typography>
                    <Typography className={styles.infoblock_item_2}>
                        Пн-Пт: 8.00 - 22.00
                    </Typography>
                    <Typography className={styles.infoblock_item_2}>
                        Сб-Вс: 10.00 - 22.00
                    </Typography>
                </ListItemText>
            </ListItem>
            <ListItem>
                <LocalShippingOutlinedIcon className={styles.infoblock_icon} />
                <ListItemText className={styles.infoblock_items}>
                    <Typography className={styles.infoblock_item_1}>
                        Умови доставки
                    </Typography>
                    <Typography className={styles.infoblock_item_2}>
                        В межах міста Харків доставка здійснюється на таксі за
                        тарифами перевізника, за межами міста - Новою поштою за
                        тарифами компанії. Замовлення також можна забрати в
                        кав&apos;ярні
                    </Typography>
                </ListItemText>
            </ListItem>
            <ListItem>
                <LocationOnOutlinedIcon className={styles.infoblock_icon} />
                <ListItemText className={styles.infoblock_items}>
                    <Typography className={styles.infoblock_item_1}>
                        Контакти
                    </Typography>
                    <Typography className={styles.infoblock_item_2}>
                        м.Харків, вул. Пушкінська, 50/52
                    </Typography>
                    <Link className={styles.infoblock_item_3}                        
                        href="tel:80997609883"
                    >
                        Телефон: +38 099 760 98 83
                    </Link>
                </ListItemText>
            </ListItem>
        </Container>
    );
};

export default InfoBlock;
