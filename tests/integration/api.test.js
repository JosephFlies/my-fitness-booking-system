const request = require('supertest');
const app = require('../../src/app');

describe('API Integration Tests', () => {

    // Test 1: Health Check
    test('GET /health should return 200 OK', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe('UP');
    });

    // Test 2: Calculate Price Endpoint (Does not exist yet!)
    test('POST /api/pricing/calculate should return correct price', async () => {
        const res = await request(app)
            .post('/api/pricing/calculate')
            .send({
                basePrice: 100,
                userType: 'PREMIUM',
                occupancy: 0.5
            });

        // We expect a 200 OK response and the price to be 90
        expect(res.statusCode).toBe(200);
        expect(res.body.finalPrice).toBe(90);
    });
});