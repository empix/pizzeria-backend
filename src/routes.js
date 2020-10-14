const express = require('express');
const router = express.Router();

const PizzaController = require('./controllers/PizzaController');
const OrderController = require('./controllers/OrderController');

router.get('/api/pizzas', PizzaController.index);
router.post('/api/pizzas', PizzaController.store);

router.get('/api/orders', OrderController.index);
router.post('/api/orders', OrderController.store);

module.exports = router;
