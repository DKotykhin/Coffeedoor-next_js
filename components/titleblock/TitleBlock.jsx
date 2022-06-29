import Link from 'next/link'

import { Container, Typography } from "@mui/material";

import Image from 'next/image'
import img from "./Coffeedoor_logo.jpg";

import styles from "./Titleblock.module.scss";

const TitleBlock = () => {
    return (
        <>
            <Container maxWidth="md" className={styles.title_block}>
                <div className={styles.img}>
                    <Link href="/">                    
                        <div><Image src={img} alt="logo"/></div>
                    </Link>
                </div>
                <Typography className={styles.titleblock_name} component="h2">
                    Меню кав&apos;ярні
                </Typography>
                <Typography className={styles.titleblock_desc} component="h3">
                    ми пропонуємо напої з свіжообсмаженої кави
                </Typography>
            </Container>
        </>
    );
};

export default TitleBlock;
