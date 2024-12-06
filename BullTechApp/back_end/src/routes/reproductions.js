const express = require('express');
const router = express.Router();
const { admin } = require('../firebaseAdmin');

router.get('/', async (req, res) => {
  try {
    const reproductionsRef = admin.firestore().collection('Reproducao');
    const snapshot = await reproductionsRef.get();
    const reproductions = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(reproductions);
  } catch (error) {
    console.error('Error fetching reproductions:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { lote_id_lote, identificacao, dataPrevista, dataRealizacao, evento_id } = req.body;
    await admin.firestore().collection('Reproducao').add({
      lote_id_lote,
      identificacao,
      dataPrevista,
      dataRealizacao,
      evento_id
    });
    res.status(201).json({ message: 'Reproduction record created successfully' });
  } catch (error) {
    console.error('Error creating reproduction record:', error);
    res.status(400).json({ error: 'Invalid request' });
  }
});

module.exports = router;
