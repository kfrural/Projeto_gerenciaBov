const express = require('express');
const router = express.Router();
const { admin } =require('../firebaseAdmin');
const { route } = require('./feed');

router.get('/', async (req, res) => {
    try {
        const paymentsRef = admin.firestore().collection('Financeiro');
        const snapshot = await paymentsRef.get();
        const payments = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.json(payments);
    } catch (error) {
        console.error('Error fetching payments:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { lote_id, valor, tipoPagamento, dataPagamento } = req.body;
        await admin.firestore().collection('Pagamento').add({
            lote_id,
            valor,
            tipoPagamento,
            dataPagamento
        });
        res.status(201).json({ message: 'Payments created sucessfully' });
    } catch (error) {
        console.error('Error creating payments:', error);
        res.status(400).json({ error: 'Invalid request' });
    }
});

module.exports = router;