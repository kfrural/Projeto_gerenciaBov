const express = require('express');
const router = express.Router();
const { admin } = require('../firebaseAdmin');

router.get('/', async (req, res) => {
    try {
        const eventsRef = admin.firestore().collection('Evento');
        const snapshot = await eventsRef.get();
        const events = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.json(events);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/', async (req, res) => {
    try {
        const { data, tipo, detalhes } = req.body;
        await admin.firestore().collection('Evento').add({
            data,
            tipo,
            detalhes
        });
        res.status(201).json({ message: 'Event created sucessfully' });
    } catch (error) {
        console.error('Error creating event:', error);
        res.status(400).json({ error: 'Invalid request' });
    }
});

module.exports = router;