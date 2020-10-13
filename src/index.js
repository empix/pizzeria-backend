require('dotenv').config();
const port = process.env.PORT || 3000;

const express = require('express');
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
