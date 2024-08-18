import { createStore } from 'redux';

const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: '',
  },
};

const rootReducer = (state = initialState, actions) => {
  return state;
};
export const store = createStore(rootReducer);
