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
