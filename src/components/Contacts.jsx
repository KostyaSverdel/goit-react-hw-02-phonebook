import React, { useState } from 'react';
import { nanoid } from 'nanoid';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleChange = event => {
    setName(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ id: nanoid(), name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};
