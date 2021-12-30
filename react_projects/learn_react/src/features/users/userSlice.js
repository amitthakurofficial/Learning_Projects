import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:'1', name: 'amit', email: 'amit@gmail.com'},
    {id:'2', name: 'alok', email: 'alok@gmail.com'}
]

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        userAdded(state, action) {
          state.push(action.payload);
        }
    }
})

export const { userAdded } = usersSlice.actions;

export default usersSlice.reducer