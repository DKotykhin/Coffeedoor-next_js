import * as React from "react";
import { useForm, Controller } from "react-hook-form";

import { Box, Button, TextField } from "@mui/material";
import { Typography, Input, InputLabel } from "@mui/material";
import {
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    FormLabel,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import classNames from "classnames";

import { FormValidation } from "./BasketFormValidation";

import styles from "./Basketform.module.scss";

const theme = createTheme({
    palette: {
        primary: {
            main: "#00a1b6",
        },
    },
});

const BasketForm = ({ onSubmit }) => {
    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm(FormValidation);

    return (
        <>
            <Box
                onSubmit={handleSubmit(onSubmit)}
                className={styles.form}
                component="form"
                noValidate
                autoComplete="off"
            >
                <ThemeProvider theme={theme}>
                    <InputLabel
                        htmlFor="name"
                        className={classNames(styles.title, styles.mb)}
                    >
                        Ваше ім&apos;я
                    </InputLabel>
                    <Controller
                        name="name"
                        control={control}
                        render={({ field }) => (
                            <Input {...field} sx={{ width: "100%" }} />
                        )}
                    />
                    <Typography className={styles.error}>
                        {errors.name?.message}
                    </Typography>
                    <InputLabel
                        htmlFor="phone"
                        className={classNames(
                            styles.title,
                            styles.mb,
                            styles.mt
                        )}
                    >
                        Ваш телефон
                    </InputLabel>
                    <Controller
                        name="phone"
                        control={control}
                        render={({ field }) => (
                            <Input {...field} sx={{ width: "100%" }} />
                        )}
                    />
                    <Typography className={styles.error}>
                        {errors.phone?.message}
                    </Typography>
                    <Controller
                        name="delivery"
                        control={control}
                        render={({ field }) => (
                            <FormControl {...field}>
                                <FormLabel
                                    className={classNames(
                                        styles.title,
                                        styles.mb,
                                        styles.mt
                                    )}
                                >
                                    Спосіб доставки
                                </FormLabel>
                                <RadioGroup
                                // defaultValue="забрати в кавярні"
                                >
                                    <FormControlLabel
                                        value="забрати в кав'ярні"
                                        control={<Radio />}
                                        label="забрати в кав'ярні"
                                    />
                                    <FormControlLabel
                                        value="доставка перевізником"
                                        control={<Radio />}
                                        label="доставка за тарифами перевізника"
                                    />
                                </RadioGroup>
                            </FormControl>
                        )}
                    />
                    <Typography className={styles.error}>
                        {errors.delivery?.message}
                    </Typography>
                    <InputLabel
                        htmlFor="text"
                        className={classNames(
                            styles.title,
                            styles.mb,
                            styles.mt
                        )}
                    >
                        Адреса доставки або коментар
                    </InputLabel>
                    <Controller
                        name="text"
                        control={control}
                        render={({ field }) => (
                            <TextField
                                {...field}
                                multiline
                                maxRows={4}
                                sx={{ width: "100%" }}
                            />
                        )}
                    />
                    <Button
                        // disabled={!isValid}
                        className={styles.submitbutton}
                        type="submit"
                    >
                        Оформити замовлення
                    </Button>
                </ThemeProvider>
            </Box>
        </>
    );
};

export default BasketForm;
