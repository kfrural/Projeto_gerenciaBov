const { admin } = require('../firebaseAdmin');

async function getPayments(req, res) {
    try {
        const paymentsRef = admin.firestore().collection('Pagamento');
        const snapshot = await paymentsRef.get();
        const payments = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.json(payments);
    } catch (error) {
        console.error('Error fetching payments:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function createPayment(req, res) {
    try {
        const { lote_id, valor, tipoPagamento, dataPagamento } = req.body;
        await admin.firestore().collection('Pagamento').add({
            lote_id,
            valor,
            tipoPagamento,
            dataPagamento
        });
        res.status(201).json({ message: 'Payments created successfully' });
    } catch (error) {
        console.error('Error creating payment:', error);
        res.status(400).json({ error: 'Invalid request' });
    }
}