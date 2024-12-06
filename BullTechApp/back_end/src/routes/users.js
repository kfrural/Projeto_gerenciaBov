const express = require('express');
const router = express.Router();
const { admin } = require('../firebaseAdmin');

router.get('/', async (req, res) => {
  try {
    const usersRef = admin.firestore().collection('Usuario');
    const snapshot = await usersRef.get();
    const users = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
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
    Change phase created successfully
  }
});

module.exports = router;
