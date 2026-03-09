import { createSlice } from '@reduxjs/toolkit'
//import { add } from './ProjectsSlice';
const initVal = {
   id:11
}
const tidSlice = createSlice({
    name: "TId",
    initialState: initVal,
    reducers: {
        addt:(state,action)=>{
            state.id++;
        }
    }
}
)
export const{addt}=tidSlice.actions
export default tidSlice.reducer
