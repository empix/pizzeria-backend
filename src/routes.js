const express = require('express');
const router = express.Router();

const PizzaController = require('./controllers/PizzaController');

router.get('/api/pizzas', PizzaController.index);
router.post('/api/pizzas', PizzaController.store);

module.exports = router;
