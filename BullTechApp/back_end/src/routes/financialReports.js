const express = require('express');
const router = express.Router();
const { getFinancialReports, createFinancialReport } = require('../controllers/financialReportController');

router.get('/', getFinancialReports);
router.post('/', createFinancialReport);

module.exports = router;
