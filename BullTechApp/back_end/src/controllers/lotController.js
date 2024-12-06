const { admin } = require('../firebaseAdmin');

exports.getLots = async (req, res) => {
    try {
        const lotsRef = admin.firestore().collection('Lote');
        const snapshot = await lotsRef.get();
        const lots = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.json(lots);
    } catch (error) {
        console.error('Error fetching lots:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.createLot = async (req, res) => {
    try {
        const { id_lote, propriedade_id, descricao, quantidadeAnimais, custoTotalCompra, valorPago, dataEntrada, dataSaidaPretendida, pesoFinalPretendido, tipoRacao_id, eventoVacina_id, eventoReproducao_id, eventoTrocaFase_id } = req.body;
        await admin.firestore().collection('Lote').add({
            id_lote,
            propriedade_id,
            descricao,
            quantidadeAnimais,
            custoTotalCompra,
            valorPago,
            dataEntrada,
            dataSaidaPretendida,
            pesoFinalPretendido,
            tipoRacao_id,
            eventoVacina_id,
            eventoReproducao_id,
            eventoTrocaFase_id
        });
        res.status(201).json({ message: 'Lot created successfully' });
    } catch (error) {
        console.error('Error creating lot:', error);
        res.status(400).json({ error: 'Invalid request' });
    }
};
