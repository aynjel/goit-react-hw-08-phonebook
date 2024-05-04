import React from 'react';
import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contacts/contactOperations';

export const ContactListItem = ({ filteredContact }) => {
  const dispatch = useDispatch();

  // handleDelete method
  const handleDelete = () => {
    dispatch(deleteContact(filteredContact.id));
  };

  return (
    <li className={css.contactListItem}>
      <p>{filteredContact.name}:</p>
      <p className={css.contactAlign}>{filteredContact.number}</p>
      <button className={css.btnDelete} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  filteredContact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
