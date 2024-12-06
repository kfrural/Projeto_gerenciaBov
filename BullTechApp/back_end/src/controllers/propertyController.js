const { admin } = require('../firebaseAdmin');

exports.getProperties = async (req, res) => {
  try {
    const propertiesRef = admin.firestore().collection('Propriedade');
    const snapshot = await propertiesRef.get();
    const properties = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(properties);
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createProperty = async (req, res) => {
  try {
    const { nome, endereco, proprietario_id } = req.body;
    await admin.firestore().collection('Propriedade').add({
      nome,
      endereco,
      proprietario_id
    });
    res.status(201).json({ message: 'Property created successfully' });
  } catch (error) {
    console.error('Error creating property:', error);
    res.status(400).json({ error: 'Invalid request' });
  }
};