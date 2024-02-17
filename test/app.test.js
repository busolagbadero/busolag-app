// tests/app.test.js
const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('responds with 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});

describe('GET /about', () => {
  it('responds with 200', async () => {
    const response = await request(app).get('/about');
    expect(response.statusCode).toBe(200);
  });

  it('responds with BusolaG description', async () => {
    const response = await request(app).get('/about');
    expect(response.text).toContain("BusolaG is just that girl!");
  });
});

describe('GET /test', () => {
  it('responds with 200', async () => {
    const response = await request(app).get('/test');
    expect(response.statusCode).toBe(200);
  });
});
