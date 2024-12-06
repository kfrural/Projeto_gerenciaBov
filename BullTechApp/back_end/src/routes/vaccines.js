const express = require('express');
const router = express.Router();
const vacinaController = require('../controllers/vacinaController');

router.get('/', vacinaController.getVaccines);
router.post('/', vacinaController.createVaccineRecord);

module.exports = router;
