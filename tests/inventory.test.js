const request = require('supertest');
const app = require('../index.js'); 

describe('Inventory Listing API (All Items) ', () => {
  it('should return 200 OK status for /api/inventory/list', async () => {
    const response = await request(app).get('/api/inventory/list');
    expect(response.status).toBe(200);
  });
});

describe('Inventory Details API (Single Item)', () => {
    it('should return 200 OK status for /api/inventory/o/:id', async () => {
      let sampleInventoryId = `8d6d5e5f-4e01-472c-ab1d-c27154994c74`
      const response = await request(app).get(`/api/inventory/o/${sampleInventoryId}`);
      expect(response.status).toBe(200);
    });
  });