const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/data/:email', userController.getUserData);

module.exports = router;
