const express = require('express');
const recipeController = require('../controllers/recipe.js');

const router = express.Router();

router.post('/', recipeController.create);

module.exports = router;