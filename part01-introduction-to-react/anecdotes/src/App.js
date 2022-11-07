import { useState } from 'react';

const getRandomIntInclusive = (min, max) =>
  Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1) + Math.ceil(min));

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Map());

  const voteAnecdote = (anecdoteIndex) =>
    setVotes((prev) => {
      const prevTemp = new Map(prev);
      if (prevTemp.has(anecdoteIndex)) prevTemp.set(anecdoteIndex, prevTemp.get(anecdoteIndex) + 1);
      else prevTemp.set(anecdoteIndex, 1);

      return prevTemp;
    });

  const randomizeAnecdote = () => setSelected(getRandomIntInclusive(0, anecdotes.length - 1));

  const mostVotes =
    votes.size === 0
      ? -1
      : [...votes.entries()].reduce((acc, curr) => (curr[1] > acc[1] ? curr : acc))[0];

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {votes.get(selected) ?? 0} votes</p>
      <button onClick={() => voteAnecdote(selected)}>vote</button>
      <button onClick={randomizeAnecdote}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      {mostVotes !== -1 ? (
        <>
          <p>{anecdotes[mostVotes]}</p>
          <p>has {votes.get(mostVotes)} votes</p>
        </>
      ) : (
        <p>No anecdote with votes</p>
      )}
    </div>
  );
};

export default App;
