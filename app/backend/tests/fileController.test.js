const request = require('supertest');
const app = require('../app');

describe('POST /api/upload', () => {
  it('should process the uploaded file and return processed text', async () => {
    const response = await request(app)
      .post('/api/upload')
      .attach('file', Buffer.from('hello world hello'), 'test.txt');
    
    expect(response.status).toBe(200);
    expect(response.body.processedText).toContain('foohello');
    expect(response.body.processedText).toContain('bar');
  });
});
