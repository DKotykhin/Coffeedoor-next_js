import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemdata: {},
};

const ItemListSlice = createSlice({
    name: "itempage",
    initialState,
    reducers: {
        itemAddItems: (state, action) => {
            state.itemdata = {
                ...action.payload,
                quantity: 1,
            };
        },

        itemRemoveQuantity: (state) => {
            state.itemdata.quantity > 1
                ? (state.itemdata.quantity -= 1)
                : (state.itemdata.quantity = 1);
        },

        itemAddQuantity: (state) => {
            state.itemdata.quantity += 1;
        },
    },
});

const { actions, reducer } = ItemListSlice;

export default reducer;
export const { itemAddItems, itemAddQuantity, itemRemoveQuantity } = actions;
