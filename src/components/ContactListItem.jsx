import React from 'react';
import PropTypes from 'prop-types';

export const ContactListItem = ({ name, number, onRemove }) => {
  return (
    <li>
      {name} ({number})
      <button type="button" onClick={onRemove}>
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
