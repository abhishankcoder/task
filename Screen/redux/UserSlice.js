import { createSlice } from "@reduxjs/toolkit";
export const UserSlice = createSlice({
    name:'user',
    initialState:{
        data:[]
    },
    reducers:{
        addUser(state,action){
            state.data.push(action.payload)
        }
    }
})


export const {addUser} = UserSlice.actions
export default UserSlice.reducer