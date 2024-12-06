const express = require('express');
const router = express.Router();
const { admin } = require('../firebaseAdmin');

router.get('/', async (req, res) => {
  try {
    const vaccinesRef = admin.firestore().collection('Vacina');
    const snapshot = await vaccinesRef.get();
    const vaccines = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(vaccines);
  } catch (error) {
    console.error('Error fetching vaccines:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { lote_id_lote, nomeVacina, aplicacao, evento_id } = req.body;
    await admin.firestore().collection('Vacina').add({
      lote_id_lote,
      nomeVacina,
      aplicacao,
      evento_id
    });
    res.status(201).json({ message: 'Vaccine record created successfully' });
  } catch (error) {
    console.error('Error creating vaccine record:', error);
    res.status(400).json({ error: 'Invalid request' });
  }
});

module.exports = router;
