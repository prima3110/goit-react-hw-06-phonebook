import { createSelector } from 'reselect';

export const getContacts = store => store.phonebookApp.contacts;

export const getFilter = store => store.phonebookApp.filter;

export const filterContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toUpperCase().includes(filter.toUpperCase()),
    ),
);
