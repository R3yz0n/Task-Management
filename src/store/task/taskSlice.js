

import { createSlice } from "@reduxjs/toolkit";
import { getAllTasks } from "./taskAction";
const initialState = {

    loading: false,
    error: null,
    success: false,
    items: [],

};

const taskSlice = createSlice({
    name: "items",
    initialState: initialState,

    reducers: {


        clearFields: (state, { payload }) => {
            state.success = false;
            state.loading = false;
            state.error = null;
        },


    },




    extraReducers: {
        [getAllTasks.fulfilled]: (state, { payload }) => {
            // console.log(state);
            state.error = null;
            state.items = payload;
            state.loading = false


        },
        [getAllTasks.pending]: (state) => {

            state.loading = true;
            state.error = null;
            state.success = false


        },
        [getAllTasks.rejected]: (state, { payload }) => {
            console.log(payload);
            state.error = payload
            state.loading = false
            // console.log(state);
            state.success = false;


        },





    }

})

export default taskSlice.reducer;
export const { clearFields } = taskSlice.actions;



