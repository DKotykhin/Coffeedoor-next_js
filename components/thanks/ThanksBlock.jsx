import Link from "next/link";
import Image from "next/image";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";

// import img from "../titleblock/Coffeedoor_logo.jpg";

import styles from "./Thanksblock.module.scss";

const ThanksBlock = () => {
    return (
        <Container maxWidth="md" className={styles.thanks_block}>            
            <Link href="/">
                <Box className={styles.img}>
                    <Image 
                        src={'/logo_700x191.jpg'} 
                        alt="logo"
                        width={700}
                        height={191} 
                    />
                </Box>
            </Link>            
            <Typography component="h1" className={styles.thanks_title}>
                Дякуємо за замовлення!
            </Typography>
            <Typography component="h2" className={styles.thanks_subtitle}>
                Ми зателефонуємо найближчим часом
            </Typography>
            <Link href="/">
                <Typography className={styles.thanks_link}>
                    Повернутися на головну
                </Typography>
            </Link>
        </Container>
    );
};

export default ThanksBlock;
