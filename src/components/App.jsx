import React, { useState } from 'react';
import { ContactForm } from './Contacts';
import { ContactList } from './Contacts';

const App = () => {
  const [contacts, setContacts] = useState([]);

  const handleSubmit = newContact => {
    setContacts(prevState => [...prevState, newContact]);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <ContactList contacts={contacts} />
    </div>
  );
};

export default App;
