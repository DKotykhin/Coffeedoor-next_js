import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import { List, ListItem } from "@mui/material";
import { Box, Drawer, Divider, Link as MuiLink } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import classNames from "classnames";

import styles from "./Drawer.module.scss";

const groupOfTitle_1 = [
    { title: "Кава в зернах", id: "#coffee_list" },
    { title: "Листовий чай", id: "#tea_list" },
    { title: "Кавомолки", id: "#mill_list" },
    { title: "Аксессуари", id: "#acc_list" },
    { title: "Варення", id: "#jam_list" },
];
const groupOfTitle_2 = [
    { title: "Про нас", id: "#about_block" },
    { title: "Контакти", id: "#footer_block" },
];

export default function NavDrawer() {
    const router = useRouter();
    const [state, setState] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setState(open);
    };

    return (
        <div className={styles.drawer}>
            <MenuIcon
                className={styles.drawer_icon}
                onClick={toggleDrawer(true)}
            />
            <Drawer anchor="right" open={state} onClose={toggleDrawer(false)}>
                <Box
                    className={styles.list_box}
                    sx={{ width: 250 }}
                    //role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List className={styles.list_items}>
                        <Image
                            src={"/logo_256x256.ico"}
                            alt="logo"
                            width={100}
                            height={100}
                        />
                        {groupOfTitle_1.map((text) => (
                            <ListItem key={text.title} disablePadding>
                                <MuiLink
                                    className={styles.list_items_item}
                                    href={text.id}
                                >
                                    {text.title}
                                </MuiLink>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List className={styles.list_items}>
                        {groupOfTitle_2.map((text) => (
                            <ListItem key={text.title} disablePadding>
                                <MuiLink
                                    className={styles.list_items_item}
                                    href={text.id}
                                >
                                    {text.title}
                                </MuiLink>
                            </ListItem>
                        ))}
                    </List>
                    <Box className={styles.link_item}>
                        <Link href="/menu">
                            <span className={styles.link_button}>
                                {"Меню кав'ярні"}
                            </span>
                        </Link>
                    </Box>
                    {router.locales.map((locale) => (
                        <span
                            key={locale}
                            className={classNames(
                                styles.lang_button,
                                router.locale === locale
                                    ? styles.lang_active
                                    : null
                            )}
                        >
                            <Link 
                                href={router.asPath} 
                                locale={locale}>
                                    {locale}
                            </Link>
                        </span>
                    ))}
                </Box>
            </Drawer>
        </div>
    );
}
