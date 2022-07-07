import Link from "next/link";
import Image from "next/image";

import { Container, Typography } from "@mui/material";

import styles from "./Titleblock.module.scss";

const TitleBlock = () => {
    return (
        <Container maxWidth="md" className={styles.title_block}>
            <Link href="/">
                <div className={styles.img}>
                    <Image
                        src={"/logo_700x191.jpg"}
                        alt="logo"
                        width={700}
                        height={191}
                    />
                </div>
            </Link>
            <Typography className={styles.titleblock_name} component="h2">
                Меню кав&apos;ярні
            </Typography>
            <Typography className={styles.titleblock_desc} component="h3">
                ми пропонуємо напої з свіжообсмаженої кави
            </Typography>
        </Container>
    );
};

export default TitleBlock;
