import { createSlice } from '@reduxjs/toolkit'
const initVal = {
    firstName: "שירה",
    lastName: "סירוקה",
    email: "shira0534194891@gmail.com",
}
const userSlice = createSlice({
    name: "user",
    initialState: initVal,
    reducers: {}
}
)
export default userSlice.reducer