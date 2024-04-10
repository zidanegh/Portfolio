import { configureStore, createSlice } from "@reduxjs/toolkit";

const chosenLogoInitialState = {
  chosenLogo: "ALL",
};

export const chosenLogoSlice = createSlice({
  name: "chosenLogo",
  initialState: chosenLogoInitialState,
  reducers: {
    changeChosenLogo: (state, action) => {
      return { ...state, chosenLogo: action.payload };
    },
    reset: (state) => {
      Object.assign(state, infoUserInitialState);
    },
  },
});

export const store = configureStore({
  reducer: {
    chosenLogo: chosenLogoSlice.reducer,
  },
});
