const express = require('express');
const router = express.Router();

const trocaFaseController = require('../controllers/trocaFaseController');

router.get('/', trocaFaseController.getChangePhases);
router.post('/', trocaFaseController.createChangePhase);

module.exports = router;
