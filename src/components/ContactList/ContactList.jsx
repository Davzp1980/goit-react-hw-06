/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

function ContactList({ contacts, onDelete }) {
  const data = useSelector(state => state.contacts.items);

  const filterValue = useSelector(state => state.filters.name);
  const sortedContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLocaleLowerCase())
  );

  return (
    <ul className={css.ul}>
      {sortedContacts.map(contact => (
        <li key={contact.id}>
          <Contact contact={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
