import { Typography } from "@mui/material";

import styles from "./Stylelist.module.scss";

const ListHeader = ({ title, subtitle }) => {
    return (
        <>
            <Typography className={styles.catalog_list_title}>
                {title}
            </Typography>
            <Typography className={styles.catalog_list_subtitle}>
                {subtitle}
            </Typography>
        </>
    );
};

export default ListHeader;
