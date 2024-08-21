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
    filters: {
      name: '',
    },
    reducers: {
      setSearchValue(state, action) {
        state.filters.name = action.payload;
      },
    },
  },
});

export const { setSearchValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
