import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newFilter, setNewFilter] = useState('');

  const handleNewNameChange = (event) => setNewName(event.target.value);
  const handleNewNumberChange = (event) => setNewNumber(event.target.value);
  const handleFilterChange = (event) => setNewFilter(event.target.value);

  const addPerson = (event) => {
    event.preventDefault();
    const personExists = persons.some((person) => person.name === newName);
    if (personExists) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const newPerson = { id: persons.length + 1, name: newName, number: newNumber };
    setPersons((prev) => prev.concat(newPerson));
  };

  const filteredPersons = persons.filter(({ name }) => new RegExp(newFilter, 'i').test(name));

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with
        <input value={newFilter} onChange={handleFilterChange} />
      </div>
      <h2>add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          <div>
            name: <input value={newName} onChange={handleNewNameChange} />
          </div>
          <div>
            number: <input value={newNumber} onChange={handleNewNumberChange} />
          </div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map(({ id, name, number }) => (
          <li key={id}>
            {name} {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
