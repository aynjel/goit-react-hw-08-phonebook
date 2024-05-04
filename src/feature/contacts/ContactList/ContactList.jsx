import React, { useEffect } from 'react';
import { ContactListItem } from 'feature/contacts/ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectIsLoading,
} from '../../../redux/contacts/contactSelectors';
import { fetchContacts } from '../../../redux/contacts/contactOperations';
import { selectVisibleContacts } from '../../../redux/contacts/contactSelectors';
import css from './ContactList.module.css';

export const ContactList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={css.contactList}>
      {error && <p>There was an error: {error}</p>}
      {isLoading && <p>Loading...</p>}
      {filteredContacts.map(contact => (
        <ContactListItem key={contact.id} filteredContact={contact} />
      ))}
    </ul>
  );
};
