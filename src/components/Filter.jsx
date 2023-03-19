import React from 'react';
import PropTypes from 'prop-types';

export const Filter = ({ onFilterChange, filter }) => {
  return (
    <div>
      <label>
        Find contacts by name
        <input type="text" onChange={onFilterChange} value={filter} />
      </label>
    </div>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
