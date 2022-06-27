import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { SendData } from "../../api/SendData";

const initialState = {
    basketdata: [],
};

export const sendDataToTelegram = createAsyncThunk(
    "basket/sendDataToTelegram",
    (data) => {
        return SendData(data);
    }
);

const basketdataListSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        basketAddItems: (state, action) => {
            const itemIndex = state.basketdata.findIndex(
                (item) => item.name === action.payload.name
            );
            const newItem = {
                ...action.payload,
                quantity: 1,
            };
            if (itemIndex < 0) {
                state.basketdata = [...state.basketdata, newItem];
            } else {
                const newOrder = state.basketdata.map((item, index) => {
                    if (index === itemIndex) {
                        return {
                            ...item,
                            quantity: item.quantity + 1,
                        };
                    } else {
                        return item;
                    }
                });
                state.basketdata = newOrder;
            }
        },

        basketAddFromItemPage: (state, action) => {
            const itemIndex = state.basketdata.findIndex(
                (item) => item.name === action.payload.name
            );
            if (itemIndex < 0) {
                state.basketdata = [...state.basketdata, action.payload];
            } else {
                const newOrder = state.basketdata.map((item, index) => {
                    if (index === itemIndex) {
                        return {
                            ...item,
                            quantity: item.quantity + action.payload.quantity,
                        };
                    } else {
                        return item;
                    }
                });
                state.basketdata = newOrder;
            }
        },

        basketRemoveItems: (state, action) => {
            const newOrder = state.basketdata.filter(
                (item) => item.name !== action.payload
            );
            state.basketdata = newOrder;
        },

        basketRemoveQuantity: (state, action) => {
            state.basketdata.forEach((item) => {
                if (item.name === action.payload) {
                    item.quantity > 1
                        ? (item.quantity -= 1)
                        : (item.quantity = 1);
                }
            });
        },

        basketAddQuantity: (state, action) => {
            state.basketdata.forEach((item) => {
                if (item.name === action.payload) {
                    item.quantity += 1;
                }
            });
        },
    },
    extraReducers: {
        [sendDataToTelegram.fulfilled]: (state) => {
            state.basketdata = [];
        },
        // [sendDataToTelegram.rejected]: (state) => {
        //     console.log("something get wrong");
        // },
    },
});

const { actions, reducer } = basketdataListSlice;

export default reducer;
export const {
    basketAddItems,
    basketRemoveItems,
    basketAddQuantity,
    basketRemoveQuantity,
    basketAllRemove,
    basketAddFromItemPage,
} = actions;
