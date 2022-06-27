import * as React from "react";

import { Box } from "@mui/system";
import { Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandCircleDown";

import styles from "./Accordeon.module.scss";
import MenuList from "../../api/menu/menuItems.json";

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
        borderBottom: 0,
    },
    "&:before": {
        display: "none",
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ fontSize: "0.9rem" }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, .05)"
            : "rgba(0, 0, 0, .03)",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(90deg)",
        color: "#00a1b6",
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function Accordeon() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <Container maxWidth="md" className={styles.accordeon_block}>
            {MenuList.MenuItems.map((item, i) => (
                <Accordion
                    key={i}
                    expanded={expanded === `panel${i}`}
                    onChange={handleChange(`panel${i}`)}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        // aria-controls="panel1bh-content"
                        // id="panel1bh-header"
                    >
                        <Typography sx={{ fontWeight: 700, fontSize: 22 }}>
                            {item[0].title}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {item.slice(1).map((item, i) => (
                            <Box sx={{ m: 2 }} key={i}>
                                <Typography
                                    sx={{ fontWeight: 700, fontSize: 18 }}
                                >
                                    {item.name}
                                </Typography>
                                <Typography sx={{ color: "text.secondary" }}>
                                    {item.description}
                                </Typography>
                                <Typography sx={{ fontSize: 18 }}>
                                    {item.price}{" грн"}
                                </Typography>
                            </Box>
                        ))}
                    </AccordionDetails>
                </Accordion>
            ))}
        </Container>
    );
}
