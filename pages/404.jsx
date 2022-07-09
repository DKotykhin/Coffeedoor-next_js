import Link from "next/link";
import Head from "next/head";
import { Typography } from "@mui/material";

import Error from "../components/error/Error";

const Page404 = () => {
    return (
        <div>
            <Head>
                <meta name="description" content="Сторінка не знайдена" />
                <title>Сторінка не знайдена</title>
            </Head>
            <Error />
        </div>
    );
};

export default Page404;
