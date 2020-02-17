// without Redux Toolkit
// import * as types from './phonebookAppTypes';

// export const saveContact = contact => ({
//   type: types.SAVE_CONTACT,
//   payload: {
//     contact,
//   },
// });

// export const deleteContact = id => ({
//   type: types.DELETE_CONTACT,
//   payload: {
//     id,
//   },
// });

// export const filterContacts = filterContact => ({
//   type: types.FILTER_CONTACTS,
//   payload: {
//     filterContact,
//   },
// });

// with Redux Toolkit

import { createAction } from '@reduxjs/toolkit';
import * as types from './phonebookAppTypes';

export const saveContact = createAction(types.SAVE_CONTACT);
export const deleteContact = createAction(types.DELETE_CONTACT);
export const filterContacts = createAction(types.FILTER_CONTACTS);
