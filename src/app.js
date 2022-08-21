const express = require('express');
const recipeRouter = require('./routes/recipe.js');

const app = express();

app.use(express.json());

// app.get('/', (req, res) => {
//   res.status(200).json({ message: 'Welcome to the Health App API!' });
// })

app.use('/recipe', recipeRouter);

module.exports = app;