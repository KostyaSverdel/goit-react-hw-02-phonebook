import React from 'react';
import PropTypes from 'prop-types';
import css from '../Filter/Filter.module.css';

export const Filter = ({ onFilterChange, filter }) => {
  return (
    <div className={css.FilterConteiner}>
      <label className={css.FilterLabel}>
        Find contacts by name
        <input
          className={css.FilterInputs}
          type="text"
          onChange={onFilterChange}
          value={filter}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
