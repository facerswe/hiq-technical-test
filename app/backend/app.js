const cors = require('cors');
const express = require('express');
const apiRoutes = require('./routes/api');

const app = express();

// Enable CORS
app.use(cors());

// Middleware for parsing JSON
app.use(express.json());

// API routes
app.use('/api', apiRoutes);

module.exports = app;
