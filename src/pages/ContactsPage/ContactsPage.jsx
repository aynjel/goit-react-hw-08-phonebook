import { ContactForm } from 'feature/contacts/ContactForm/ContactForm';
import { ContactList } from 'feature/contacts/ContactList/ContactList';
import { Filter } from 'feature/contacts/Filter/Filter';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contactOperations';
import {
  selectIsLoading,
  selectError,
} from '../../redux/contacts/contactSelectors';

export const ContactsPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Phonebook | Contacts</title>
      </Helmet>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && <p>Loading...</p>}
        {error && <p>There was an error: {error}</p>}
        <ContactList />
      </div>
    </HelmetProvider>
  );
};

export default ContactsPage;
