import { createSlice } from "@reduxjs/toolkit";

// Create a Redux slice named "timeSlice" for managing time-related data.
const timeSlice = createSlice({
    name: 'timeButton',
    initialState: {
        time: 180, // Default time value
    },
    reducers: {
        // Define a reducer to update the time
        setTime: (state, action) => {
            // Update the time in the state with the value from the action
            state.time = action.payload;
        },
    },
});

// Export the action creators generated by the slice
export const { setTime } = timeSlice.actions;

// Export the reducer generated by the slice
export default timeSlice.reducer;