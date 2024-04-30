import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({

    name : "user",
    initialState : {
        user : {},
    },
    reducers :{

        userSuccess : (state, action) => {
            state.user = action.payload;
        },
        userFailure : (state) => {
            state.user = {};
        },
    },

})

export default userSlice.reducer;
export const { userSuccess, userFailure } = userSlice.actions;