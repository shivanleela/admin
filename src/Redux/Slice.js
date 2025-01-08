import { createSlice } from "@reduxjs/toolkit";

const initialState={
    data:[],
    error:"",
    isLoading:false

}

export const ChartSlice=createSlice({
    name:"data",
    initialState,
    reducers:{
        AddReport:(state,action)=>{state.data=[...state.data,action.payload]},
        DeleteReport:(state,actions)=>{state.data=state.data.filter((i)=>i.id!==actions.payload)},
        UpdateReport:(state,actions)=>{state.data=state.data.map((i)=>i.id==actions.payload.id?actions.payload:i)}
    }
})

export const {AddReport,DeleteReport,UpdateReport}=ChartSlice.actions
export default ChartSlice.reducer