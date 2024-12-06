const { admin } = require('../firebaseAdmin');

exports.getFeed = async (req, res) => {
    try {
        const feedRef = admin.firestore().collection('Feed');
        const snapshot = await feedRef.get();
        const feed = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.json(feed);
    } catch (error) {
        console.error('Error fetching feed:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.createFeed = async (req, res) => {
    try {
        const { tipo, custoPorKg } = req.body;
        await admin.firestore().collection('Racao').add({
            tipo,
            custoPorKg
        });
        res.status(201).json({ message: 'Feed created successfully' });
    } catch (error) {
        console.error('Error creating feed:', error);
        res.status(400).json({ error: 'Invalid request' });
    }
};
