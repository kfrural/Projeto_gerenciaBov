const express = require('express');
const router = express.Router();
const { admin } = require('../firebaseAdmin');

router.get('/', async (req, res) => {
    try {
        const changePhasesRef = admin.firestore().collection('TrocaFase');
        const snapshot = await changePhasesRef.get();
        const changePhases = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.json(changePhases);
    } catch (error) {
        console.error('Error fetching change phases:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { lote_id, faseAtual, faseProxima, dataTroca } = req.body;
        await admin.firestore().collection('TrocaFase').add({
            lote_id,
            faseAtual,
            faseProxima,
            dataTroca
        });
        res.status(201).json({ message: 'Change phase created successfully' });
    } catch (error) {
        console.error('Error creating change phase:', error);
        res.status(400).json({ error: 'Invalid request' });
    }
})

module.exports = router;
