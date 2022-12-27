import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const ls = localStorage.getItem("cities");
const items = ls !== null ? JSON.parse(ls) : [];

const initialState = {
  cities: items,
};

export const weatherSlice = createSlice({
  name: "weatherCity",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.cities.push(action.payload);
      localStorage.setItem(
        "cities",
        JSON.stringify(state.cities.map((item: any) => item))
      );
    },
    removeItem: (state, action) => {
      state.cities = [
        ...state.cities.filter((el: any) => el !== action.payload),
      ];
      localStorage.setItem(
        "cities",
        JSON.stringify(state.cities.map((item: any) => item))
      );
      return state;
    },
  },
});

export const weaterReducer = weatherSlice.reducer;
export const weaterListAction = weatherSlice.actions;
