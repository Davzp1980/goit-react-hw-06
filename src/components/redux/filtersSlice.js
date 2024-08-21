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
      setSearchValue: {
        reducer(state, action) {
          state.filters.name = action.payload;
        },
        prepare(value) {
          return {
            payload: value,
          };
        },
      },
    },
  },
});

export const { setSearchValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
