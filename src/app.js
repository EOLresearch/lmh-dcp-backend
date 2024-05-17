const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Simple route
app.get('/', (req, res) => {
    res.send('Hello, secure world!');
});

module.exports = app;
