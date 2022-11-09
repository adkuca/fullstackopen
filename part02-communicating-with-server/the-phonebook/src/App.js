import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-1234567' }]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleNewNameChange = (event) => setNewName(event.target.value);
  const handleNewNumberChange = (event) => setNewNumber(event.target.value);

  const addPerson = (event) => {
    event.preventDefault();
    const personExists = persons.some((person) => person.name === newName);
    if (personExists) {
      alert(`${newName} is already added to phonebook`);
      return;
    }
    const newPerson = { name: newName, number: newNumber };
    setPersons((prev) => prev.concat(newPerson));
  };

  return (
    <div>
      <h2>Phonebook</h2>
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
        {persons.map(({ name, number }) => (
          <li key={name}>
            {name} {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
