
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
const BASE_URL = "http://localhost:3001/tasks"


// this is a redux middleware async thunk setup follor redux toolkit for documentation
export const getAllTasks = createAsyncThunk(
    "Get All Tasks",
    async (values, { rejectWithValue }) => {

        try {
            const res = await axios.get(`${BASE_URL}`, {
            });
            console.log(res.data);

            return res.data;
        } catch (error) {
            console.log(error);

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


export const getTaskById = createAsyncThunk(
    "fetch a task by id",
    async (values, { rejectWithValue }) => {

        try {
            const res = await axios.get(`${BASE_URL}/${values.id}`, {
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
            return taskId;
        } catch (error) {
            console.log('er');
            toast.error(error.message)
            return rejectWithValue
        }
    }
);

export const createTask = createAsyncThunk(
    "Create a Task",
    async (newTask, { rejectWithValue }) => {
        try {
            const res = await axios.post(BASE_URL, newTask);
            toast.success("New Task Added");

            return res.data;
        } catch (error) {
            toast.error(error.message)
            return rejectWithValue
        }
    }
);


export const updateTask = createAsyncThunk(
    "Update a Task",
    async (values, { rejectWithValue }) => {
        console.log(values);
        try {
            const res = await axios.put(`${BASE_URL}/${values.taskId}`, values.updatedTask);
            toast.success("Task Updated");
            return res.data;
        } catch (error) {
            toast.error(error.message)
            return rejectWithValue
        }
    }
);