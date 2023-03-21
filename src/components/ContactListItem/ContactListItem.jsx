import React from 'react';
import PropTypes from 'prop-types';
import css from '../ContactListItem/ContactListItem.module.css';

export const ContactListItem = ({ name, number, onRemove }) => {
  return (
    <li>
      {name} ({number})
      <button className={css.ButtonsDelete} type="button" onClick={onRemove}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};
