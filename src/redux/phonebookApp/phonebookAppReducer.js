// without Redux Toolkit
// import { combineReducers } from 'redux';
// import * as types from './phonebookAppTypes';

// const contactsReducer = (state = [], action) => {
//   switch (action.type) {
//     case types.SAVE_CONTACT:
//       return [...state, action.payload.contact];

//     case types.DELETE_CONTACT:
//       return state.filter(el => el.id !== action.payload.id);

//     default:
//       return state;
//   }
// };

// const filterReducer = (state = '', action) => {
//   switch (action.type) {
//     case types.FILTER_CONTACTS:
//       return action.payload.filterContact;

//     default:
//       return state;
//   }
// };

// export default combineReducers({
//   contacts: contactsReducer,
//   filter: filterReducer,
// });

// with Redux Toolkit
import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import * as types from './phonebookAppTypes';

const contactsReducer = createReducer([], {
  [types.SAVE_CONTACT]: (state, action) => [...state, action.payload],
  [types.DELETE_CONTACT]: (state, action) =>
    state.filter(el => el.id !== action.payload),
});

const filterReducer = createReducer('', {
  [types.FILTER_CONTACTS]: (state, action) => action.payload,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
