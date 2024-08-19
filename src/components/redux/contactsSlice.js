import { nanoid } from '@reduxjs/toolkit';

export function addContact(name, number) {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
}

export function deleteContact(contactId) {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
}

export function setSearchValue(value) {
  return {
    type: 'filters/setSearchValue',
    payload: value,
  };
}
