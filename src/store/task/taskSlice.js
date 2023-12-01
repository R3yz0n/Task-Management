

import { createSlice } from "@reduxjs/toolkit";
import { getAllTasks, getTaskById } from "./taskAction";

// state for task-management
const initialState = {

    loading: false,
    error: null,
    success: false,
    itemById: null,
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
        // when api fetching is fullfilled
        [getAllTasks.fulfilled]: (state, { payload }) => {
            // console.log(state);
            state.error = null;
            console.log(payload);
            state.items = payload;
            state.loading = false


        },
        // loading state
        [getAllTasks.pending]: (state) => {

            state.loading = true;
            state.error = null;
            state.success = false


        },
        //error state
        [getAllTasks.rejected]: (state, { payload }) => {
            console.log(payload);
            state.error = payload
            state.loading = false
            // console.log(state);
            state.success = false;


        },
        // particular task fullied state
        [getTaskById.fulfilled]: (state, { payload }) => {
            // console.log(state);
            state.error = null;
            state.itemById = payload;
            state.loading = false


        },

        // loading state
        [getTaskById.pending]: (state) => {

            state.loading = true;
            state.error = null;
            state.success = false


        },
        //error state
        [getTaskById.rejected]: (state, { payload }) => {
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



