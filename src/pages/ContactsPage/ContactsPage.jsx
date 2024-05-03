import { ContactForm } from 'feature/contacts/ContactForm/ContactForm';
import { ContactList } from 'feature/contacts/ContactList/ContactList';
import { Filter } from 'feature/contacts/Filter/Filter';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contactOperations';
import { setFilter } from '../../redux/filter/filterSlice';
import {
  addContact,
  deleteContact,
} from '../../redux/contacts/contactOperations';
import {
  selectVisibleContacts,
  selectIsLoading,
  selectFilter,
  selectError,
} from '../../redux/contacts/contactSelectors';

export const ContactsPage = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  console.log('visibleContacts', visibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = newContact => {
    // Placeholder for future Redux action
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = id => {
    // Placeholder for future Redux action
    dispatch(deleteContact(id));
  };

  const handleSetFilter = newFilter => {
    // Placeholder for future Redux dispatch to update filter
    dispatch(setFilter(newFilter));
  };
  return (
    <HelmetProvider>
      <Helmet>
        <title>Phonebook | Contacts</title>
      </Helmet>
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={handleAddContact} contacts={visibleContacts} />
        <h2>Contacts</h2>
        <Filter setFilter={handleSetFilter} filter={filter} />
        {isLoading && <p>Loading...</p>}
        {error && <p>There was an error: {error}</p>}
        <ContactList
          deleteContact={handleDeleteContact}
          contacts={visibleContacts}
        />
      </div>
    </HelmetProvider>
  );
};

export default ContactsPage;
