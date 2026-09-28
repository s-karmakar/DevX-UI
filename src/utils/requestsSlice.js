import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
  name: "requestsSlice",
  initialState: null,
  reducers: {
    addRequests: (state, action) => {
      return action.payload;
    },
    removeRequest: (state, action) => {
      const newStateArr = state.filter(
        (element) => element._id !== action.payload,
      );
      return newStateArr;
    },
  },
});

export const { addRequests, removeRequest } = requestsSlice.actions;
export default requestsSlice.reducer;
