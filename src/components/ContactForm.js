import React from 'react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

const ContactForm = ({
  name,
  number,
  onNameChange,
  onNumberChange,
  onAddContact,
}) => {
  return (
    <div>
      <label className={styles.label}>Name:</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={onNameChange}
        className={styles.input}
      />

      <label className={styles.label}>Number:</label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={onNumberChange}
        className={styles.input}
      />

      <button onClick={onAddContact} className={styles.button}>
        Add Contact
      </button>
    </div>
  );
};
ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onNameChange: PropTypes.func.isRequired,
  onNumberChange: PropTypes.func.isRequired,
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
