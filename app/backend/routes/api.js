const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileController');
const uploadMiddleware = require('../middleware/uploadMiddleware');

router.post('/upload', uploadMiddleware, fileController.processFile);
router.get('/test', (req, res) => {
    res.status(200).json({ message: 'Test endpoint is working!' });
  });

module.exports = router;