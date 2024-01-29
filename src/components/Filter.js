import React from 'react';
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

export default Filter;
