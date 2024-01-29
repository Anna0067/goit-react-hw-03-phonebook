import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import styles from './styles.module.css';

const PhonebookApp = () => {
  const [state, setState] = useState({
    contacts: [],
    filter: '',
    name: '',
    number: '',
  });

  const addContact = () => {
    const contactAlreadyExists = contactExists(state.name);

    if (contactAlreadyExists) {
      alert('Contact with this name already exists!');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: state.name,
      number: state.number,
    };

    setState({
      ...state,
      contacts: [...state.contacts, newContact],
      name: '',
      number: '',
    });
  };

  const handleFilterChange = e => {
    setState({ ...state, filter: e.target.value });
  };

  const contactExists = name => {
    return state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  };

  const handleDeleteContact = id => {
    const updatedContacts = state.contacts.filter(contact => contact.id !== id);
    setState({ ...state, contacts: updatedContacts });
  };

  const filteredContacts = state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <ContactForm
        name={state.name}
        number={state.number}
        onNameChange={e => setState({ ...state, name: e.target.value })}
        onNumberChange={e => setState({ ...state, number: e.target.value })}
        onAddContact={addContact}
      />

      <Filter value={state.filter} onChange={handleFilterChange} />

      <h2 className={styles.label}>Contacts:</h2>

      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

PhonebookApp.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  filter: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default PhonebookApp;
