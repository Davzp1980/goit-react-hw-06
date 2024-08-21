import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filtersSlice';

// const initialState = {
//   contacts: {
//     items: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//   },
//   filters: {
//     name: '',
//   },
// };

// const contactsReducer = createReducer(initialState, builder => {
//   builder.addCase(addContact, (state, action) => {
//     state.contacts.items.push(action.payload);
//   });
//   builder.addCase(deleteContact, (state, action) => {
//     const index = state.contacts.items.findIndex(
//       contact => contact.id === action.payload
//     );
//     state.contacts.items.splice(index, 1);
//   });
// });

// const filterReducer = createReducer(initialState, builder => {
//   builder.addCase(setSearchValue, (state, action) => {
//     state.filters.name = action.payload;
//   });
// });

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filterReducer,
  },
});
