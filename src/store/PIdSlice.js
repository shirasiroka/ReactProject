import { createSlice } from '@reduxjs/toolkit'
const initVal = {
   id:4
}
const pidSlice = createSlice({
    name: "PId",
    initialState: initVal,
    reducers: {
        addp:(state,action)=>{
            state.id++;
        }
    }
}
)
export const{addp}=pidSlice.actions
export default pidSlice.reducer
