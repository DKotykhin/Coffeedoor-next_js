import Link from "next/link";
import { motion } from "framer-motion";
import { Container, Typography, Box, Link as MuiLink } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import styles from "./Firstblock.module.scss";

const FirstBlock = () => {
    return (
        <Container maxWidth="false" className={styles.first_block}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Typography className={styles.first_block_title} component="h3">
                    {"CoffeeDoor"}
                </Typography>
                <Typography
                    className={styles.first_block_subtitle}
                    component="h3"
                >
                    {"Brew Bar & Coffeeshop"}
                </Typography>
                <Box className={styles.first_block_links}>
                    <MuiLink href="#coffee_list" className={styles.link_1}>
                        Магазин
                    </MuiLink>
                    <Link href="/menu">
                        <span className={styles.link_2}>
                            Меню кав&apos;ярні
                        </span>
                    </Link>
                </Box>
                <ArrowBackIosIcon className={styles.first_block_icon} />
            </motion.div>
        </Container>
    );
};

export default FirstBlock;
