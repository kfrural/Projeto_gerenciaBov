const express = require('express');
const router = express.Router();
const { admin } = require('../firebaseAdmin');

router.get('/', async (req, res) => {
  try {
    const reportsRef = admin.firestore().collection('RelatorioFinanceiro');
    const snapshot = await reportsRef.get();
    const reports = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(reports);
  } catch (error) {
    console.error('Error fetching financial reports:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { lote_id_lote, periodo, receitaTotal, despesaTotal } = req.body;
    await admin.firestore().collection('RelatorioFinanceiro').add({
      lote_id_lote,
      periodo,
      receitaTotal,
      despesaTotal
    });
    res.status(201).json({ message: 'Financial report created successfully' });
  } catch (error) {
    console.error('Error creating financial report:', error);
    res.status(400).json({ error: 'Invalid request' });
  }
});

module.exports = router;
