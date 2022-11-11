import { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(({ data }) => {
      setPersons(data);
    });
  }, []);

  const handleNameChange = (event) => setName(event.target.value);
  const handleNumberChange = (event) => setNumber(event.target.value);
  const handleFilterChange = (event) => setFilter(event.target.value);

  const addPerson = (event) => {
    event.preventDefault();
    const personExists = persons.some((person) => person.name === name);
    if (personExists) {
      alert(`${name} is already added to phonebook`);
      return;
    }

    const newPerson = { id: persons.length + 1, name, number };
    setPersons((prev) => prev.concat(newPerson));
  };

  const filteredPersons = () => persons.filter(({ name }) => new RegExp(filter, 'i').test(name));
  const personsToShow = !filter ? persons : filteredPersons();

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h2>add a new</h2>
      <PersonForm
        addPerson={addPerson}
        name={name}
        number={number}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  );
};

export default App;
