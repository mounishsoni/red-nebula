import { createSlice } from "@reduxjs/toolkit";
// Removed ScrollbarOptions and Scrollbar type-only imports

const initialState = {
  current: null,
};

export const smoothScrollbarSlice = createSlice({
  name: "scrollbar",
  initialState,
  reducers: {
    setScrollbar: (state, action) => {
      state.current = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setScrollbar } = smoothScrollbarSlice.actions;

const smoothScrollbarReducer = smoothScrollbarSlice.reducer;

export default smoothScrollbarReducer;
