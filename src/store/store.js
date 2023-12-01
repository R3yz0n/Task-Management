import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./task/taskSlice";

// This is a redux setup
const store = configureStore({
    reducer: {
        task: taskSlice


    },
});

export default store;