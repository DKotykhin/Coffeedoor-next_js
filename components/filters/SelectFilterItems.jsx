import * as React from "react";

import { Box, Stack, Chip, Badge } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const filterItems = [
    { key: "всі чаї", value: "" },
    { key: "зелені", value: "зелений" },
    { key: "чорні", value: "чорний" },
    { key: "трав'яні", value: "трав'яний" },
    { key: "фруктові", value: "фруктовий" },
];

const theme = createTheme({
    palette: {
        primary: {
            main: "#00a1b6",
        },
    },
});

export default function SelectFilterItems({ onSelect, quantity }) {
    const [newItem, setNewItem] = React.useState("");

    React.useEffect(() => {
        handleSelect("");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSelect = (filteredItem) => {
        onSelect(filteredItem);
        setNewItem(filteredItem);
    };

    return (
        <Box>
            <ThemeProvider theme={theme}>
                <Stack
                    direction="row"
                    spacing={3}
                    sx={{ display: "flex", flexWrap: "wrap", mt: 1 }}
                >
                    {filterItems.map((item) => (
                        <div key={item.key}>
                            <Badge
                                badgeContent={
                                    item.value === newItem ? quantity : 0
                                }
                                color="primary"
                            >
                                <Chip
                                    sx={{ mb: 2 }}
                                    variant="outlined"
                                    color={
                                        item.value === newItem
                                            ? "primary"
                                            : "default"
                                    }
                                    label={item.key}
                                    onClick={() => handleSelect(item.value)}
                                />
                            </Badge>
                        </div>
                    ))}
                </Stack>
            </ThemeProvider>
        </Box>
    );
}
