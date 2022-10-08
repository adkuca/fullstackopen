import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Todo from './Todo';

test('renders todo that has not yet been completed', () => {
  const todo = {
    _id: '6341999c9be411323ea26ba6',
    text: 'Todo message',
    done: false,
  };

  render(<Todo todo={todo} />);

  expect(screen.getByText(todo.text)).toBeInTheDocument(todo.text);
  screen.getByText('This todo is not done');
  expect(screen.queryByText('This todo is done')).toBeNull();
  screen.getByText('Delete');
  screen.getByText('Set as done');
});

test('renders todo that has been completed', () => {
  const todo = {
    _id: '6341999c9be411323ea26ba6',
    text: 'Todo message',
    done: true,
  };

  render(<Todo todo={todo} />);

  expect(screen.getByText(todo.text)).toBeInTheDocument(todo.text);
  screen.getByText('This todo is done');
  expect(screen.queryByText('This todo is not done')).toBeNull();
  screen.getByText('Delete');
  expect(screen.queryByText('Set as done')).toBeNull();
});

test('renders todo emitting complete and delete buttons handlers', async () => {
  const todo = {
    _id: '6341999c9be411323ea26ba6',
    text: 'Todo message',
    done: false,
  };
  const deleteTodoMockHandler = jest.fn();
  const completeTodoMockHandler = jest.fn();

  render(
    <Todo todo={todo} deleteTodo={deleteTodoMockHandler} completeTodo={completeTodoMockHandler} />
  );
  await userEvent.click(screen.getByText('Set as done'));
  await userEvent.click(screen.getByText('Delete'));

  expect(deleteTodoMockHandler.mock.calls).toHaveLength(1);
  expect(completeTodoMockHandler.mock.calls).toHaveLength(1);
});
