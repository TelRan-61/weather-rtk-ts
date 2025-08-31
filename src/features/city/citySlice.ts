import {createSlice} from "@reduxjs/toolkit";

const citySlice = createSlice({
    name: 'city',
    initialState: '',
    reducers: {
        setCity: (_state, action) => action.payload,
    }
})

export default citySlice.reducer;
export const {setCity} = citySlice.actions;