import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <input
      type="text"
      name="filter"
      placeholder="Search contacts..."
      value={value}
      onChange={onChange}
      className={styles.input}
    />
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
