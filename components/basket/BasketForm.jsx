import * as React from 'react';
import { useForm, Controller } from "react-hook-form";

import { Box, Button, TextField } from '@mui/material';
import { Typography, Input, InputLabel } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Radio, RadioGroup, FormControl, FormControlLabel, FormLabel } from '@mui/material';

import { FormValidation } from './BasketFormValidation';
import styles from './Basketform.module.scss'

const BasketForm = ({onSubmit}) => {
    const { control, handleSubmit, formState: { errors, isValid } } = useForm(FormValidation);
    
    const theme = createTheme({
        palette: {
            primary: {
                main: "#00a1b6",
            },
        },
    });

    return(
        <>
            <Box onSubmit={handleSubmit(onSubmit)}
                className={styles.form}       
                component="form"                
                noValidate
                autoComplete="off"
            >
                <ThemeProvider theme={theme}>
                    <InputLabel htmlFor="name" className={[styles.title, styles.mb].join(" ")}>Ваше ім'я</InputLabel>
                        <Controller
                            name="name"
                            control={control}
                            render={({ field }) => <Input 
                                {...field} 
                                sx={{ width: '100%'}}/>}
                        />
                    <Typography className={styles.error}>{errors.name?.message}</Typography>
                    <InputLabel htmlFor="phone" className={[styles.title, styles.mb, styles.mt].join(" ")}>Ваш телефон</InputLabel>
                        <Controller
                            name="phone"
                            control={control}
                            render={({ field }) => <Input 
                                {...field} 
                                sx={{ width: '100%'}}/>}
                        />
                    <Typography className={styles.error}>{errors.phone?.message}</Typography>
                    <Controller
                            name="delivery"
                            control={control}
                            render={({ field }) => 
                                <FormControl {...field}>
                                    <FormLabel className={[styles.title, styles.mb, styles.mt].join(" ")}>Спосіб доставки</FormLabel>
                                    <RadioGroup                                      
                                        // defaultValue="забрати в кавярні"                                        
                                    >
                                        <FormControlLabel 
                                            value="забрати в кавярні" 
                                            control={<Radio />} 
                                            label="забрати в кавярні" 
                                        />
                                        <FormControlLabel 
                                            value="доставка перевізником" 
                                            control={<Radio />} 
                                            label="доставка за тарифами перевізника" 
                                        />                                        
                                    </RadioGroup>
                                </FormControl>
                            }
                        />
                    <InputLabel 
                        htmlFor="text" 
                        className={[styles.title, styles.mb, styles.mt].join(" ")}
                        >
                            Адреса доставки або коментар
                    </InputLabel>
                        <Controller
                            name="text"
                            control={control}
                            render={({ field }) => <TextField 
                                {...field}
                                multiline 
                                maxRows={4} 
                                sx={{ width: '100%'}}/>}
                        />                                                    
                    <Button 
                        disabled={!isValid} 
                        className={styles.submitbutton} 
                        type="submit"
                        >
                            Оформити замовлення
                    </Button>
                </ThemeProvider>  
            </Box>    
        </>
    )
}

export default BasketForm;