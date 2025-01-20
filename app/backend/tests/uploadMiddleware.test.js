const request = require('supertest');
const express = require('express');
const uploadMiddleware = require('../middleware/uploadMiddleware'); // Adjust path as needed

const app = express();
app.post('/upload', uploadMiddleware, (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  res.status(200).json({ fileName: req.file.originalname });
});

describe('uploadMiddleware', () => {
  it('should upload a file and make it available in req.file', async () => {
    const response = await request(app)
      .post('/upload')
      .attach('file', Buffer.from('test file content'), 'test.txt'); // Simulates file upload

    expect(response.status).toBe(200);
    expect(response.body.fileName).toBe('test.txt');
  });

  it('should return 400 if no file is uploaded', async () => {
    const response = await request(app)
      .post('/upload'); // No file attached

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('error', 'No file uploaded');
  });
});
