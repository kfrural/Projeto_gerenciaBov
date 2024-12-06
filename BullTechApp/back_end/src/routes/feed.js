const express = require('express');
const router = express.Router();

const { getFeed, createFeed } = require('../controllers/feedController');

router.get('/', getFeed);
router.post('/', createFeed);

module.exports = router;
