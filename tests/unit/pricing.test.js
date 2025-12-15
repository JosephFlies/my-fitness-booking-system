const { calculatePrice } = require('../../src/services/pricingService');

describe('Pricing Service Rules', () => {
    // This test expects a standard user to pay the full price (no discount)
    test('Standard membership should pay base price', () => {
        expect(calculatePrice(100, 'STANDARD')).toBe(100);
    });
});