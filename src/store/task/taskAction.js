
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
const BASE_URL = "http://localhost:3001/tasks"



export const getAllTasks = createAsyncThunk(
    "Get All Tasks",
    async (values, { rejectWithValue }) => {
        //toastify use garna xa fetch na huda data
        // console.log('fetching data............');

        // console.log(values);

        // console.log(token);
        try {
            const res = await axios.get(`${BASE_URL}`, {
            });
            console.log(res);

            return res.data;
        } catch (error) {
            // console.log(error);

            if (error.response && error.response.data.message) {
                toast.error(error.response.data.message);
                return rejectWithValue(error.response.data.message);
            } else {
                toast.error(error.message);
                return rejectWithValue(error.message);
            }
        }
    }
);

export const deleteTask = createAsyncThunk(
    "Delete a Task",
    async (taskId, { rejectWithValue }) => {
        console.log(taskId);
        try {
            const res = await axios.delete(`${BASE_URL}/${taskId}`);
            // toast.success("Task deleted successfully");
            return taskId;
        } catch (error) {
            console.log('er');
            toast.error(error.message)
            return rejectWithValue
        }
    }
);

