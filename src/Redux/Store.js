import { configureStore } from "@reduxjs/toolkit";
import { ChartSlice } from "./Slice";

export const store =configureStore({
    reducer:{
        data:ChartSlice.reducer
    }
})