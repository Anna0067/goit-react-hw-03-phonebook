import React from 'react';
import styles from './styles.module.css';

const ContactItem = ({ contact }) => {
  return (
    <li className={styles.contactItem}>
      {contact.name} - {contact.number}
    </li>
  );
};

export default ContactItem;
