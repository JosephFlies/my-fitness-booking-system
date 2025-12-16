// tests/unit/pricing.test.js
const { calculatePrice } = require('../../src/services/pricingService');

describe('Pricing Service Rules', () => {
    
    // Test Case 1
    test('Standard membership should pay base price', () => {
        const finalPrice = calculatePrice(100, 'STANDARD', 0.5); // 50% full
        expect(finalPrice).toBe(100);
    });

    // Test Case 2
    test('Premium membership should get 10% discount', () => {
        const finalPrice = calculatePrice(100, 'PREMIUM', 0.5); // 50% full
        expect(finalPrice).toBe(90);
    });

    // Test Case 3 (THE NEW ONE)
    test('Should increase price by 20% if capacity is over 80%', () => {
        const basePrice = 100;
        const userType = 'STANDARD';
        const occupancy = 0.90; // 90% full - Surge pricing applies!
        
        const finalPrice = calculatePrice(basePrice, userType, occupancy);
        
        expect(finalPrice).toBe(120); // Expect 120
    });
});