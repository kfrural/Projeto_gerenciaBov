const express = require('express');
const router = express.Router();
const lotsController = require('../controllers/lotsController');

router.get('/', lotsController.getLots);
router.post('/', lotsController.createLot);

module.exports = router;
