import Link from "next/link";
import Head from 'next/head';
import { Typography } from "@mui/material";

import ErrorMessage from "../components/errorMessage/ErrorMessage";
import styles from "../styles/404.module.scss";

const Page404 = () => {
    return (
        <div>
            <Head>
                <meta name="description" content="Сторінка не знайдена" />
                <title>Сторінка не знайдена</title>
            </Head>
            <ErrorMessage />
            <Typography className={styles.page}>
                Сторінка не знайдена
            </Typography>
            <Link href="/">
                <Typography className={styles.link}>
                    Повернутися на головну
                </Typography>
            </Link>
        </div>
    );
};

export default Page404;
