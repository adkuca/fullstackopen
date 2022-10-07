const express = require('express');
const router = express.Router();
const redis = require('../redis');
const todosRouter = require('./todos.js');

const configs = require('../util/config');

let visits = 0;

/* GET index data. */
router.get('/', async (req, res) => {
  visits++;

  res.send({
    ...configs,
    visits,
  });
});

router.get('/statistics', async (req, res) => {
  const addedTodosCount = await redis.getAsync('added_todos');
  res.send({ added_todos: addedTodosCount === null ? 0 : addedTodosCount });
});

router.use('todos', todosRouter);

module.exports = router;
