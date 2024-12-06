const { admin } = require('../firebaseAdmin');

exports.getAllUsers = async (req, res) => {
  try {
    const usersRef = admin.firestore().collection('Usuario');
    const snapshot = await usersRef.get();
    const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.createUser = async (req, res) => {
  try {
    const { nome, sobrenome, email, senha, dataNascimento, cpfCnpj } = req.body;
    await admin.firestore().collection('Usuario').add({
      nome,
      sobrenome,
      email,
      senha,
      dataNascimento,
      cpfCnpj
    });
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(400).json({ error: 'Invalid request' });
  }
};