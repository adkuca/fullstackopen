import Person from './Person';

const Persons = ({ persons }) => {
  return (
    <ul>
      {persons.map((person) => (
        <Person key={person.id} {...person} />
      ))}
    </ul>
  );
};

export default Persons;
