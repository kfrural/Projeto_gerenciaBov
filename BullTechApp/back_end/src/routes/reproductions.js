const express = require('express');
const router = express.Router();
const reproducaoController = require('../controllers/reproducaoController');

router.get('/', reproducaoController.getReproductions);
router.post('/', reproducaoController.createReproduction);

module.exports = router;
