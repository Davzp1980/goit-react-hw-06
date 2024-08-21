import { createSlice } from '@reduxjs/toolkit';

// export function setSearchValue(value) {
//   return {
//     type: 'filters/setSearchValue',
//     payload: value,
//   };
// }

// export const setSearchValue = createAction('filters/setSearchValue');

const filterSlice = createSlice({
  name: 'filters',
  initialState: {
    name: '',

    reducers: {
      changeFilter(state, action) {
        state.name = action.payload;
      },
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
