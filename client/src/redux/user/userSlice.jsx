import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    currentUser: null,
    loading: false,
    error: false
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state)=>{
            state.loading = true;
            state.error = false;
        },
        signInSuccess: (state, action)=>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false;
        },
        signInFailure: (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const {signInStart, signInSuccess, signInFailure} = userSlice.actions


export default userSlice.reducer;