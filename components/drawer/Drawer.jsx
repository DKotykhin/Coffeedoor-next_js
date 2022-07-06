import Link from "next/link";
import { useState } from "react";
import { List, ListItem } from "@mui/material";
import { Box, Drawer, Divider, Link as MuiLink } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";

import styles from "./Drawer.module.scss";

export default function NavDrawer() {
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
                                Меню кав&apos;ярні
                            </span>
                        </Link>
                    </Box>
                </Box>
            </Drawer>
        </div>
    );
}
