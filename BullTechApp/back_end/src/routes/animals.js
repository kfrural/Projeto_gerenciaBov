const express = require('express');
const router = express.Router();
const { admin } = require('../firebaseAdmin');

router.get('/', async (req, res) => {
    try {
        const animalsRef = admin.firestore().collection('Animal');
        const snapshot = await animalsRef.get();
        const animals = snapshot.docs.map(doc => ({ id : dosc.id, ...doc.data()}));
        res.json(animals);
    } catch (error) {
        console.error('Error fetching animals:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { nome, pesoAtual, lote_id } = req.body;
        await admin.firestore().collection('Animal').add({
            nome,
            pesoAtual,
            lote_id
        });
        res.status(201).json({ message: 'Animal created sucessfuly' });
    } catch (error) {
        console.error('Error creating animal:', error);
        res.status(400).json({ error: 'Invalid request' });
    }
});

module.exports = router;