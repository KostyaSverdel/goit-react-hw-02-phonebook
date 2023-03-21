import React from 'react';
import PropTypes from 'prop-types';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import css from '../ContactList/ContactList.module.css';

export const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ul className={css.ContactListConteiner}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onRemove={() => onRemoveContact(id)}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};
