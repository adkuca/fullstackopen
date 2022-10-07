const express = require('express');
const router = express.Router();
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

router.use('todos', todosRouter);

module.exports = router;
