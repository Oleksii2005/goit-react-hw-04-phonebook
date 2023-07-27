import React, { useState } from 'react';
import { nanoid } from 'nanoid'; // Подключаем nanoid из вашего пакета или библиотеки

import css from './App.module.css'; // Подставьте имя вашего CSS модуля
import { ContactForm } from './Phonebook/ContactForm'; // Подставьте путь к компоненту ContactForm
import { ContactList } from './Contacts/ContactList'; // Подставьте путь к компоненту ContactList
import { Filter } from './Filter/Filter'; // Подставьте путь к компоненту Filter

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = contact => {
    if (findContact(contact.name))
      return `${contact.name} is already in contacts`;
    setContacts(prev => [...prev, { id: nanoid(), ...contact }]);
    return true;
  };

  const filterChange = e => {
    setFilter(e.target.value);
  };

  const filterContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const findContact = name =>
    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());

  const delContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onSubmit={values => addContact(values)} />

      <h2 className={css.title}>Contacts</h2>
      <Filter filter={filter} handleChange={filterChange} />
      {contacts.length > 0 && (
        <ContactList contacts={filterContacts()} onDel={delContact} />
      )}
    </div>
  );
}

export default App;
// Теперь компонент App является функциональным компонентом, и мы используем хуки useState для хранения состояний contacts и filter. Все методы, такие как addContact, filterChange, filterContacts, findContact и delContact, теперь определены как обычные функции внутри функционального компонента. В остальном, структура и логика компонента остаются неизменными.
